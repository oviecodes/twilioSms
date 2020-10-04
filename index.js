


const twilio = require('twilio')
const express = require('express');
const http = require('http')
const { accountSid, authToken, phoneNumber, port } = require('./config')


const app = express()
const MessagingResponse = twilio.twiml.MessagingResponse;

const client = new twilio(accountSid, authToken);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('welcome to the home page.')
})

app.get('/sms', (req, res) => {
    try{
        client.messages.create({
        body: 'Hello from the sms route',
        to: '+2348069563620',  // Text this number
        from: `${phoneNumber}` // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
    res.end()
    } catch(err) {
        console.log(err)
    }
})

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
  
    twiml.message('Thanks for taking our survey');
  
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

http.createServer(app).listen(port, () => {
    console.log(`App is running on port ${port}`)
})