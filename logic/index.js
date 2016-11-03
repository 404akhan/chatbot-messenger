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

  /**************            **************/
  var beautyServiceBook = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "We offer Makeup and Facial Service. What do you want to book?",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Makeup Service",
          "payload":"Beauty Service Book Makeup Service"
        },
        {
          "content_type":"text",
          "title":"Makeup Class",
          "payload":"Beauty Service Book Makeup Class"
        },
        {
          "content_type":"text",
          "title":"Facial Service",
          "payload":"Beauty Service Book Facial Service"
        }
      ]
    }
  };

  /**************            **************/
  function fBeautyServiceBookGen(service) {

    var firstMessage = {
      recipient: {
        id: recipientId
      },
      message: {
        text: "We offer different makeup services. Which do you want to join?",
        metadata: "DEVELOPER_DEFINED_METADATA"
      }
    };

    var element1 = {
      title: "黃金比例個人彩粧服務 ($500 / 45分鐘)",
      buttons: [{
        type: "postback",
        title: "Book",
        payload: service + " Book",
      }, {
        type: "postback",
        title: "Details",
        payload: service + " Details"
      }],
    };

    var element2 = {
      title: "黃金比例重點化粧指導 ($900 / 60分鐘)",
      buttons: [{
        type: "postback",
        title: "Book",
        payload: service + " Book",
      }, {
        type: "postback",
        title: "Details",
        payload: service + " Details"
      }],
    };

    var element3 = {
      title: "黃金比例完整彩粧指導 ($1200 / 90分鐘)",
      buttons: [{
        type: "postback",
        title: "Book",
        payload: service + " Book",
      }, {
        type: "postback",
        title: "Details",
        payload: service + " Details"
      }],
    };

    var returnData = {
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type: "template",
          payload: {
            template_type: "generic",
            elements: [element1, element2, element3]
          }
        }
      }
    };

    return [firstMessage, returnData];
  }

  /**************            **************/
  var detailsMakeupClass = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "SHISEIDO黃金比例彩粧造型師會以一對一的教學模式，讓你深入淺出了解黃金比例彩粧及教導你量度整個面部的個人黃金比例; 並因應量度結果指導你化粧技巧，替自己締造粧容完美彩粧。完成服務後，可於服務當日換購HK$900化粧產品",
      metadata: "DEVELOPER_DEFINED_METADATA"
    }
  };

  /**************            **************/
  var bookLocations = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Sure. Which locations would you perfer?",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Hong Kong",
          "payload":"Hong Kong"
        },
        {
          "content_type":"text",
          "title":"Kowloon",
          "payload":"Kowloon"
        },
        {
          "content_type":"text",
          "title":"New Territories",
          "payload":"New Territories"
        }
      ]
    }
  };

  /**************            **************/
  var bookStore = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Sure. Which locations would you perfer?",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Festival Walk Store",
          "payload":"Festival Walk Store"
        }
      ]
    }
  };

  /**************            **************/
  var dateAsk = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "What date would you prefer? Please type in dd-mm-yyyy format.",
      metadata: "DEVELOPER_DEFINED_METADATA"
    }
  };


  switch(postback) {
    case 'Get Started':
      dataArray.push(getStartedMessage);
      dataArray.push(getStartedTemplate);

      break;

    case 'Beauty Service Book':
      dataArray.push(beautyServiceBook);

      break;

    case 'Beauty Service Book Makeup Service':
      dataArray = fBeautyServiceBookGen('Makeup Service');

      break;

    case 'Beauty Service Book Makeup Class':
      dataArray = fBeautyServiceBookGen('Makeup Class');

      break;

    case 'Beauty Service Book Facial Service':
      dataArray = fBeautyServiceBookGen('Facial Service');

      break;

    case "Makeup Class Details":
      dataArray.push(detailsMakeupClass);

      break;

    case "Makeup Class Book":
      dataArray.push(bookLocations);

      break;

    case "Hong Kong":
      dataArray.push(bookStore);

      break;

    case "Kowloon":
      dataArray.push(bookStore);

      break;

    case "New Territories":
      dataArray.push(bookStore);

      break;

    case "Festival Walk Store":
      dataArray.push(dateAsk);

      break;

    default:
      dataArray.push(defaultMessage);
  }

  return dataArray;

};