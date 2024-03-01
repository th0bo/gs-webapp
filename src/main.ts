const doGet = (e: GoogleAppsScript.Events.DoGet) => {
  return ContentService.createTextOutput(`test GET ${JSON.stringify(e)}`);
}

const doPost = (e: GoogleAppsScript.Events.DoPost) => {
  return ContentService.createTextOutput(`test POST ${JSON.stringify(e)}`);
}