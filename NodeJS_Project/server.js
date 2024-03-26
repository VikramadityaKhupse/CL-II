var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '2022bit052@sggs.ac.in',
    pass: '2022@sggsIT'
  }
});

var mailOptions = {
  from: '2022bit052@sggs.ac.in',
  to: 'vikramadityakhupse@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 