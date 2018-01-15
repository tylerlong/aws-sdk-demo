const aws = require('aws-sdk')

aws.config.update({region: 'us-east-1'})

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/LexRuntime.html
const lex = new aws.LexRuntime()

lex.postText({
  botAlias: 'order_rose', /* required */
  botName: 'OrderFlowers', /* required */
  inputText: 'I would like to pick up flowers', /* required */
  userId: '123456' /* required */
}, (err, data) => {
  console.log(err, data)
})
