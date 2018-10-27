(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// // You can find your project ID in your Dialogflow agent settings
// const projectId = 'ENTER_PROJECT_ID_HERE'; //https://dialogflow.com/docs/agents#settings
// const sessionId = 'quickstart-session-id';
// const query = 'hello';
// const languageCode = 'en-US';
//
// // Instantiate a DialogFlow client.
// const dialogflow = require('dialogflow');
// const sessionClient = new dialogflow.SessionsClient();
//
// // Define session path
// const sessionPath = sessionClient.sessionPath(projectId, sessionId);
//
// // The text query request.
// const request = {
// session: sessionPath,
// queryInput: {
//   text: {
//     text: query,
//     languageCode: languageCode,
//   },
// },
// };
//
// // Send request and log result
// sessionClient
// .detectIntent(request)
// .then(responses => {
//   console.log('Detected intent');
//   const result = responses[0].queryResult;
//   console.log(`  Query: ${result.queryText}`);
//   console.log(`  Response: ${result.fulfillmentText}`);
//   if (result.intent) {
//     console.log(`  Intent: ${result.intent.displayName}`);
//   } else {
//     console.log(`  No intent matched.`);
//   }
// })
// .catch(err => {
//   console.error('ERROR:', err);
// });

},{}]},{},[1]);
