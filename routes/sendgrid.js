
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmailToUser = function(email, pollId) {
  const msg = {
    to: email,
    from: 'GetYoVerdict@verdict.com',
    subject: 'Check out Yo Verdict',
    html: `Hey friend! <br/>Thank you for using Verdict! <br/>Found below is the link for your results and to send your friends the poll!<br/> Cheers!<br/> Get Yo Verdict team<br/>View your results here:   <a  href="https://fathomless-dusk-70706.herokuapp.com/results/${pollId}">www.getyoverdict.com/results</a>
          <br/>Send this link to your friends:<a  href="https://fathomless-dusk-70706.herokuapp.com/selection/${pollId}">www.getyoverdict.com/select-your-choices</a>`,
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
