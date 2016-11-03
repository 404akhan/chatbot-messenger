module.exports.postbackData = function(recipientId, postback) {

  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "get started saadssadsad",
      metadata: "DEVELOPER_DEFINED_METADATA"
    }
  };

  return messageData;

};