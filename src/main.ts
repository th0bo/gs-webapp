const doGet = (e: GoogleAppsScript.Events.DoGet) => {
  console.log("get");
  const htmlOutput = HtmlService.createTemplateFromFile("src/index").evaluate();
  return htmlOutput;
};

const doPost = (e: GoogleAppsScript.Events.DoPost) => {
  console.log("post");
  const params = JSON.stringify(e);
  return ContentService.createTextOutput(params).setMimeType(
    ContentService.MimeType.JSON
  );
};

const include = (filename) =>
  HtmlService.createHtmlOutputFromFile(filename).getContent();

const getOrderedList = () =>
  Tasks.Tasks?.list("@default")
    .items?.map((task) => task.title)
    .map((text) => `<li>${text}</li>`)
    .join("");
