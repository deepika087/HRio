'use strict';

const placeorder = require('./placeorder');
const askFeedback = require('./askFeedback');
const teamInfo = require('./teamInfo');
const insuranceInfo = require('./insuranceInfo');
const bye = require('./bye');

module.exports = function(intentRequest, callback) {
  console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
  const intentName = intentRequest.currentIntent.name;

  if (intentName === 'BookingRoom') {
    console.log(intentName + ' was called');
    return placeorder(intentRequest, callback);
  } else if (intentName == 'DoneWithQs'){
      console.log('user is done with qs');
      return askFeedback(intentRequest, callback);
  } else if (intentName == 'OtherTeamInfo') {
    console.log("Help user get in touch with")
    return teamInfo(intentRequest, callback);
  } else if (intentName == 'insuranceRelatedQs') {
    console.log("Looking for insurance info")
    return insuranceInfo(intentRequest, callback);
  } else if (intentName == 'Bye') {
    return bye(intentRequest, callback);
  }
  throw new Error(`Intent with name ${intentName} not supported`);
}
