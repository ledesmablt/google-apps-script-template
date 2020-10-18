function testAsync() {
  // sends a request to the URL but returns without waiting for the response
  // note: Promises are only available in Apps Script V8 engine

  const url = 'https://httpbin.org/get';
  new Promise(
    // runs this callback async
    (): string => {
      Logger.log('fetching');
      return UrlFetchApp.fetch(url).getContentText();
    }
  ).then((res) => {
    // on success, logs the response (never reached)
    Logger.log(res);
  }).catch((err) => {
    // on error, logs the error message (never reached)
    Logger.log(err);
  });

  // logs this right after fetching
  Logger.log('returning');

  // returns right away without waiting for response
  return 'RETURNED'
}

function onFormSubmit(e: GoogleAppsScript.Events.SheetsOnFormSubmit) {
  // form submission event w/ type declaration
  Logger.log(e.namedValues);
  Logger.log(e.user);
  return e.values;
}
