
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmailToUser = function(email) {
  const msg = {
    to: email,
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<a href="https://fathomless-dusk-70706.herokuapp.com/results">Results</a>
          <a href="https://fathomless-dusk-70706.herokuapp.com/selection">User Selection</a>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('success 🙏🏿');
    })
    .catch(error => {
  
      //Log friendly error
      console.error(error.toString());
      // //Extract error msg
      // const {message, code, response} = error;
  
      // //Extract response msg
      // const {headers, body} = response;
    });
};
module.exports = sendEmailToUser;
