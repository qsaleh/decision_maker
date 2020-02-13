
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmailToUser = function(email) {
  const msg = {
    to: email,
    from: 'GetYoVerdict@verdict.com',
    subject: 'Check out Yo Verdict',
    text: 'Hey friend! \n Thank you for using Verdict! \n Found below is the link for your results and to send your friends the poll!\n Cheers! \n Get Yo Verdict team ',
    html: `<a href="https://fathomless-dusk-70706.herokuapp.com/results">www.getyoverdict.com/results</a>
          <a href="https://fathomless-dusk-70706.herokuapp.com/selection">www.getyoverdict.com/select-your-choices</a>`,
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
