

require('dotenv').config()

//initialize cfg as an empty object
const cfg = {}


cfg.accountSid = process.env.TWILIO_ACCOUNT_SID
cfg.authToken = process.env.TWILIO_AUTH_TOKEN
cfg.phoneNumber = process.env.TWILIO_NUMBER
cfg.port = 3000;

module.exports = cfg