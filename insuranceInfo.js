'use strict';

const lexResponses = require('./lexResponses');

function getInsuranceConfirmation(disease_or_test) {
  if (disease_or_test == 'blood test') {
    return "Yeah blood test is completely covered by your medical insurance"
  } else if (disease_or_test == 'ECG') {
    return "Sorry we do not cover this"
  } else if (disease_or_test == 'contact lens') {
    return "Sorry, this is part of cosmetics hence not included in medical insurance"
  } else {
    return "Sorry, I don't have enough info. Please get in touch with medicalInfo@amazon.com"
  }
}

function getByeMessage(disease_or_test) {
  return {
    message : {
      contentType: 'PlainText',
      content: getInsuranceConfirmation(disease_or_test)
    }
  }
}
module.exports = function(intentRequest, callback) {
  var disease_or_test = intentRequest.currentIntent.slots.disease_or_test;
  console.log('Inputs are: ' + disease_or_test);

  const source = intentRequest.invocationSource;

  if (source === 'DialogCodeHook') { // I think it is to represent the input coming from bot
    console.log('It is a dialog code hook in askFeedback ')
    const slots = intentRequest.currentIntent.slots;
    console.log("Slots : ", slots);

    callback(lexResponses.close(
        intentRequest.sessionAttributes,
        'Fulfilled', getByeMessage(disease_or_test).message));
    return
  } else {
    console.log('source was something else :', source)
  }
    callback(lexResponses.delegate(intentRequest.sessionAttributes, intentRequest.currentIntent.slots));
    return;
}
