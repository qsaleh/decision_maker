const mailgun = require("mailgun-js");
// const sendEmailsToUserThroughMailgunAPI = function() {
// this function should recieve an email and two URLs as arguments
const DOMAIN = 'sandboxc80377cd945548fc9752d712103a989a.mailgun.org';
const mg = mailgun({apiKey: '0c2dbad208044a12724aaff785060ad0-f8faf5ef-7ba55c68', domain: DOMAIN});
const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'olivefan92@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function(error, body) {
  console.log(body);
});
// };

// module.exports = sendEmailsToUserThroughMailgunAPI;
