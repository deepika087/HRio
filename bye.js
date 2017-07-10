
'use strict';

const lexResponses = require('./lexResponses');

function getByeMessage() {
  return {
    message : {
      contentType: 'PlainText',
      content: "Thanks for reaching out to me.http://amzn.com/InternFeedback. Don't forget this anonymous link just in case you have any feedback. "
    }
  }
}

module.exports = function(intentRequest, callback) {

  const source = intentRequest.invocationSource;

  if (source === 'DialogCodeHook') { // I think it is to represent the input coming from bot
    const slots = intentRequest.currentIntent.slots;

    callback(lexResponses.close(
        intentRequest.sessionAttributes,
        'Fulfilled', getByeMessage().message));
    return
  } else {
    console.log('source was something else :', source)
  }
  callback(lexResponses.delegate(intentRequest.sessionAttributes, intentRequest.currentIntent.slots));
  return;
}
