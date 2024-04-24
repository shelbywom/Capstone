var SCOPES = 
[
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive'
];

function getOAuthService() 
{
  return OAuth2.createService('MyService')
    .setAuthorizationBaseUrl('https://accounts.google.com/o/oauth2/auth')
    .setTokenUrl('.....')
    .setClientId('.....')
    .setClientSecret('.....')
    .setCallbackFunction('authCallback')
    .setPropertyStore(PropertiesService.getUserProperties())
    .setScope(SCOPES.join(' '));
}

function onOpen() 
{
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('Authorize', 'main')
      .addToUi();
}

function main() 
{
  var html = HtmlService.createHtmlOutput('<p>Please wait while we authenticate you.</p>')
      .setWidth(200)
      .setHeight(100);
  SpreadsheetApp.getUi().showModalDialog(html, 'Authorization Required');
}
