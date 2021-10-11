const Vonage = require('@vonage/server-sdk');
const config = require('config')

const vonage = new Vonage({
    apiKey : config.get('vonage.apiKey'),
    apiSecret : config.get('vonage.secret')
});

const FROM = 'Vonage APIs';
const TO = "the destination number";
const MESSAGE = "Hello From vonage";

vonage.message.sendSms(FROM, TO, MESSAGE, (err, responseData) =>{
    if(err){
        console.log(err)
    }else{
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
} )