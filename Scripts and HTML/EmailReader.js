function doGet() 
{
  return HtmlService.createHtmlOutputFromFile('index');
}

function authorize(spreadsheetId) 
{
  // Store the spreadsheetId using the Properties Service
  PropertiesService.getScriptProperties().setProperty('spreadsheetId', spreadsheetId);

  var oauthService = getOAuthService();
  var authorizationUrl = oauthService.getAuthorizationUrl();
  return authorizationUrl;
}

function authCallback(request) 
{
  var oauthService = getOAuthService();
  var authorized = oauthService.handleCallback(request);
  if (authorized) 
  {
    // Retrieve the spreadsheetId from the Properties Service
    var spreadsheetId = PropertiesService.getScriptProperties().getProperty('spreadsheetId');

    // Authorization was successful. Process emails now.
    processEmails(spreadsheetId); 
    return HtmlService.createHtmlOutput('Success! Emails processed.');
  } else 
  {
    return HtmlService.createHtmlOutput('Denied.');
  }
}

function processEmails(spreadsheetId) 
{
  try 
  {
    var ss = SpreadsheetApp.openById(spreadsheetId);
    if (!ss) 
    {
      throw new Error('Spreadsheet not found');
    }
    
    var emailAddress = 'trixmcstix@gmail.com';
    var threads = GmailApp.search('subject:ordered*');
  
    for (var i = 0; i < threads.length; i++) 
    {
      var messages = threads[i].getMessages();
      for (var j = 0; j < messages.length; j++) 
      {
        var body = messages[j].getPlainBody();
        var userInfo = UserInfoProcessor.extractUserInfo(body);
        appendToSheet(userInfo, ss, 'Sheet1'); // Pass the spreadsheet object
      }
    }
  } catch (error) 
  {
    console.error('Error processing emails:', error);
  }
}

function appendToSheet(userInfo, ss, sheetName) 
{
  var sheet = ss.getSheetByName(sheetName);
  sheet.appendRow(userInfo);
}
