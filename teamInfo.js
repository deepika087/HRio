'use strict';

const lexResponses = require('./lexResponses');

function getTeamInfo(team_type) {
  if (team_type == 'Machine Learning') {
    return "email: mlinfo@amazon.com; manager:justin@amazon.com"
  } else if (team_type == 'Data Analytics') {
    return "email: analytics@amazon.com; manager:james@amazon.com"
  } else if (team_type == 'HR') {
    return "email: HR@amazon.com; manager:priya@amazon.com"
  } else if (team_type == 'Finance') {
    return "email: financehelp@amazon.com; manager:jacob@amazon.com"
  } else {
    return "email: onboardinghr@amazon.com; manager:amy@amazon.com"
  }
}

function getByeMessage(team_type) {
  return {
    message : {
      contentType: 'PlainText',
      content: "Sure here is the contact info: " + getTeamInfo(team_type)
    }
  }
}
module.exports = function(intentRequest, callback) {
  var team_type = intentRequest.currentIntent.slots.team_type;
  console.log('Inputs are: ' + team_type);

  const source = intentRequest.invocationSource;

  if (source === 'DialogCodeHook') { // I think it is to represent the input coming from bot
    console.log('It is a dialog code hook in askFeedback ')
    const slots = intentRequest.currentIntent.slots;
    console.log("Slots : ", slots);

    callback(lexResponses.close(
        intentRequest.sessionAttributes,
        'Fulfilled', getByeMessage(team_type).message));

    return
  } else {
    console.log('source was something else :', source)
  }
    callback(lexResponses.delegate(intentRequest.sessionAttributes, intentRequest.currentIntent.slots));
    return;
}
