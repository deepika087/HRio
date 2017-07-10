
'use strict';

const lexResponses = require('./lexResponses');

function getPermissionforFeedback() {
  return {
    message : {
      contentType: 'PlainText',
      content: "May I chat a bit more with you ?"
    }
  }
}

function getByeMessage() {
  return {
    message : {
      contentType: 'PlainText',
      content: "Okie. I will take one more second. I understand you must be busy. However if there is anything that comes to your mind feel free to use this anonymous link. http://amzn.com/InternFeedback"
    }
  }
}

function teamExistReason() {
  return {
    message : {
      contentType: 'PlainText',
      content: "So from your profile I gathered you are from AWS team so do you know why we exist? What is the vision of our team?"
    }
  }
}

function firstDayQs() {
  return {
    message : {
      contentType: 'PlainText',
      content: "Okie.Since you have some background I will keep it short. Your team is a part of AWS infra team. Your team specifically deals with automating server maintainenace when they go faulty.Do you know if your team decreases CPU utilization by even 1% that can save us thousands of dollars per month. Well is there anything else you wish you knew on your first day?"
    }
  }

}
module.exports = function(intentRequest, callback) {
  var feedback_qs = intentRequest.currentIntent.slots.feedback_qs;
  console.log('Inputs are: ' + feedback_qs);

  const source = intentRequest.invocationSource;

  if (source === 'DialogCodeHook') { // I think it is to represent the input coming from bot
    console.log('It is a dialog code hook in askFeedback ')
    const slots = intentRequest.currentIntent.slots;
    console.log("Slots : ", slots);
    if (feedback_qs == null) {
      console.log("Feedback permission is null as of now");
      callback(lexResponses.elicitSlot(
            intentRequest.sessionAttributes, intentRequest.currentIntent.name,
            slots, 'feedback_qs', getPermissionforFeedback().message));
    } else if (feedback_qs.includes("yes") || feedback_qs.includes("Yes") || feedback_qs.includes("sure")){
      callback(lexResponses.elicitSlot(
            intentRequest.sessionAttributes, intentRequest.currentIntent.name,
            slots, 'feedback_qs', teamExistReason().message));
    } else if (feedback_qs.includes("idea") || feedback_qs.includes("bit")) {
      callback(lexResponses.elicitSlot(
            intentRequest.sessionAttributes, intentRequest.currentIntent.name,
            slots, 'feedback_qs', firstDayQs().message));
    } else {
      callback(lexResponses.close(
          intentRequest.sessionAttributes,
          'Fulfilled', getByeMessage().message));
    }
    return
  } else {
    console.log('source was something else :', source)
  }
    callback(lexResponses.delegate(intentRequest.sessionAttributes, intentRequest.currentIntent.slots));
    return;
}
