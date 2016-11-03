module.exports.postbackData = function(recipientId, postback) {

  var dataArray = [];

  /**************            **************/
  var defaultMessage = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "We will get in touch with you soon. Thank you.",
      metadata: "DEVELOPER_DEFINED_METADATA"
    }
  };

  /**************            **************/
  var username = "";

  var getStartedMessage = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Hi" + username + ", I'm your beauty assistant.\n" +
      "How may I assist you today? ",
      metadata: "DEVELOPER_DEFINED_METADATA"
    }
  };

  /**************            **************/
  var beautyService = {
    title: "Beauty Service",
    buttons: [{
      type: "postback",
      title: "Details",
      payload: "Beauty Service Details",
    }, {
      type: "postback",
      title: "Book",
      payload: "Beauty Service Book",
    }],
  };

  var getStartedTemplate = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [beautyService, beautyService, beautyService]
        }
      }
    }
  };


  switch(postback) {
    case 'Get Started':
      dataArray.push(getStartedMessage);
      dataArray.push(getStartedTemplate);

      break;

    default:
      dataArray.push(defaultMessage);
  }

  return dataArray;

};