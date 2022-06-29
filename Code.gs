function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function doGet(e) { return HtmlService.createTemplateFromFile('Index').evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); }

function processForm(formObject){
  var url="<URL OF SPREADSHEET>";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("<NAME OF SPREADSHEET>");

  ws.appendRow([
    formObject.id,
    formObject.date,
    formObject.fn,
    formObject.ln,
    formObject.gmail,
    formObject.dateOfBirth,
    formObject.website,
    formObject.email,
    formObject.exp

  ]);
}