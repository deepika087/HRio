'use strict';

const lexResponses = require('./lexResponses');

function helpWithRoom(roomType) {
  console.log("Reached helpWithRoom function:" + roomType);
  var msg = "None";
  if (roomType == 'meeting'){
    msg = "You can book meeting rooms from http://amzm.com/BookingTool.";
  }
  else if (roomType == 'meditation') {
    msg = "We have meditation rooms available on ground floor of each building. Just head towards the micro kitchen";
  }
  else if (roomType == 'doctor') {
    msg = "All floors are equipped with first aid box. Otherwise head to building number 2 or 14 for immediate help.";
  }
  console.log("Returning: " + msg);
  return { message: { contentType: 'PlainText', content: msg + " Is there anything else I can help you with?"} };
}

module.exports = function(intentRequest, callback) {
  var roomType = intentRequest.currentIntent.slots.room_type;
  var further_qs = intentRequest.currentIntent.slots.further_qs;
  console.log('Inputs are: ' + roomType + ' ' + further_qs);

  const source = intentRequest.invocationSource;

  if (source === 'DialogCodeHook') { // I think it is to represent the input coming from bot
    console.log('It is a dialog code hook. Reached here ')
    const slots = intentRequest.currentIntent.slots;
    console.log("Slots : ", slots);
    const result = helpWithRoom(roomType)
    callback(lexResponses.confirm(
      intentRequest.sessionAttributes,
      intentRequest.currentIntent.name,
      slots,
      result.message
    ));
    return
  } else {
    console.log('source was something else :', source)
  }
    callback(lexResponses.delegate(intentRequest.sessionAttributes, intentRequest.currentIntent.slots));
    return;
}
