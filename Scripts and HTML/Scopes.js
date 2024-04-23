var SCOPES =
    [
        'https://www.googleapis.com/auth/gmail.readonly',
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive'
    ];

function doPost(request) {
    Logger.log('Received request: ' + JSON.stringify(request));
    var code = request.parameter.code;
    if (!code) {
        return ContentService.createTextOutput('Error: Missing authorization code.');
    }
    var accessToken = getAccessToken(code);
    if (!accessToken) {
        Logger.log('Error: Unable to get access token');
        return ContentService.createTextOutput('Unable to get access token.');
    }
    return ContentService.createTextOutput(JSON.stringify(accessToken));
}

function getAccessToken(code) {
    var url = 'https://oauth2.googleapis.com/token';
    var payload =
    {
        'code': code,
        'client_id': '469704937395-ovpi2vjha6jtje2dt7u8idhojai0rsg3.apps.googleusercontent.com',
        'client_secret': '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',
        'redirect_uri': 'https://script.google.com/macros/d/1imrKjSpl8-6Jj63XaDRFo6oXFBfNrNLYmFzAOHJsWmMpqYtjBQPzao20/usercallback',
        'grant_type': 'authorization_code'
    };

    var headers =
    {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    var options =
    {
        'method': 'post',
        'headers': headers,
        'payload': payload,
        'muteHttpExceptions': true
    };

    var response = UrlFetchApp.fetch(url, options);
    var responseCode = response.getResponseCode();
    if (responseCode !== 200) {
        Logger.log('Error: ' + response.getContentText());
        return null;
    }

    var tokens = JSON.parse(response.getContentText());
    return tokens;
}

function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Custom Menu')
        .addItem('Authorize', 'main')
        .addToUi();
}

function main() {
    var html = HtmlService.createHtmlOutput('<p>Please wait while we authenticate you.</p>')
        .setWidth(200)
        .setHeight(100);
    SpreadsheetApp.getUi().showModalDialog(html, 'Authorization Required');

}
// JavaScript source code
