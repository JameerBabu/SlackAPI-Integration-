const express = require('express');
const bodyParser = require('body-parser');
const app = express();


var pname = "";
var sname = "";
var sage = "";
var number = "";
var email = "";
var date = "";

var slack = require('/var/www/html/slack.js');
var os = require("os");


app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/form.js', (req, res) => {

    pname = req.body.Pname ;
    sname = req.body.Sname;
    sage =  req.body.Sage;
    number = req.body.Number;
    email = req.body.email;
    date = req.body.Date;
    
    
res.send(

`Parent Name is:${pname} .` + os.EOL+`Student Name is:${sname} .` + os.EOL+
                `Student age is: ${sage}.` + os.EOL+
                `Mobile Number is:${number}.`+ os.EOL+
                `Email is: ${email} .`+ os.EOL+
                `Preferred Date is: ${date} .`+ os.EOL



);


const yourWebHookURL = 'https://hooks.slack.com';

const userAccountNotification = {

'username': 'Error notifier', // This will appear as user name who posts the message
  'text': `Parent Name is:${pname} .` + os.EOL+`Student Name is:${sname} .` + os.EOL+
                `Student age is: ${sage}.` + os.EOL+
                `Mobile Number is:${number}.`+ os.EOL+
                `Email is: ${email} .`+ os.EOL+
                `Preferred Date is: ${date} .`+ os.EOL

};



(async function () {
  if (!yourWebHookURL) {
    console.error('Please fill in your Webhook URL');
  }

  console.log('Sending slack message');
  try {
    const slackResponse = await slack.sendSlackMessage(yourWebHookURL, userAccountNotification);
    console.log('Message response', slackResponse);
  } catch (e) {
    console.error('There was a error with the request', e);
  }
})();



    
});



    



  


const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});



