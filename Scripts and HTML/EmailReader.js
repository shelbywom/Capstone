function doGet() {
    return HtmlService.createHtmlOutputFromFile('index');
}

function authorize(spreadsheetId) {
    var CLIENT_ID = '469704937395-ovpi2vjha6jtje2dt7u8idhojai0rsg3.apps.googleusercontent.com';
    var SCRIPT_ID = '1imrKjSpl8-6Jj63XaDRFo6oXFBfNrNLYmFzAOHJsWmMpqYtjBQPzao20';

    var state = 'fixed_state_parameter';

    PropertiesService.getUserProperties().setProperty('OAUTH2_STATE', state);

    var authorizationUrl = 'https://accounts.google.com/o/oauth2/auth?client_id=' + CLIENT_ID + '&scope=' + encodeURIComponent(SCOPES.join(' ')) + '&response_type=code&redirect_uri=https://script.google.com/macros/d/' + SCRIPT_ID + '/usercallback&state=' + encodeURIComponent(state);
    return authorizationUrl;
}


function processEmails(spreadsheetId) {
    try {
        var ss = SpreadsheetApp.openById(spreadsheetId);
        if (!ss) {
            throw new Error('Spreadsheet not found');
        }

        var emailAddress = 'trixmcstix@gmail.com';
        var threads = GmailApp.search('subject:ordered*');

        for (var i = 0; i < threads.length; i++) {
            var messages = threads[i].getMessages();
            for (var j = 0; j < messages.length; j++) {
                var body = messages[j].getPlainBody();
                var userInfo = UserInfoProcessor.extractUserInfo(body);
                appendToSheet(userInfo, ss, 'Sheet1'); 
            }
        }
    } catch (error) {
        console.error('Error processing emails:', error);
    }
}

function appendToSheet(userInfo, ss, sheetName) {
    var sheet = ss.getSheetByName(sheetName);
    sheet.appendRow(userInfo);
}

function usercallback(request) {
    var state = request.parameter.state;

    var storedState = PropertiesService.getUserProperties().getProperty('OAUTH2_STATE');

    if (state !== storedState) {
        throw new Error('Invalid state parameter');
    }

    var code = request.parameter.code;
    if (code) {
        var accessToken = getAccessToken(code);
        if (!accessToken) {
            Logger.log('Error: Unable to get access token');
            return ContentService.createTextOutput('Unable to get access token.');
        }
        return ContentService.createTextOutput(JSON.stringify(accessToken));
    }
    else {
        return ContentService.createTextOutput('Error: Missing authorization code.');
    }
}

