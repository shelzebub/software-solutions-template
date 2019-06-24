//Using third party stuff
const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

//Making stuff
const app = express();
const port = 3000;
const router = express.Router();
//const viewBasePath = path.join(__dirname + '/public/views/');
const viewBasePath = path.join(__dirname);

//Use body parser to encode URL
app.use(bodyParser.urlencoded({ extended: true }));

//Defining routes
app.use(express.static(__dirname + '/public'));
app.use('/', router);

//HTTP endpoints
//------ GET -------
//Show landing page
app.get('/', (req, res) => {
    res.sendFile(viewBasePath + 'index.html');
});
//Show contact us
app.get('/contact', (req, res) => {
    res.sendFile(viewBasePath + 'contact.html');
});

//------ POST -------
//Send email with contact us form
app.post('/contact', (req, res) => {
    var email = {
        name: req.body.name,    
        address: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //Email template
    const msg = {
        to: 'chosa.senpai@gmail.com',
        from: email.address,
        subject: email.subject,
        text: email.message,
        html: `<div>
                Hi Shely,
                <br>
                <p>${email.message}</p>
                <br>
                <p>from ${email.name}</p>
                </div>`,
    };
    //Send email, then redirect user to the contact page
    sgMail.send(msg).then(
        result => res.redirect('/contact'),
        error => alert(error)
    );
});

// Listen on port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
