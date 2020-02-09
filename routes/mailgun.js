const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxc80377cd945548fc9752d712103a989a.mailgun.org?';
const mg = mailgun({apiKey: 'f8faf5ef-7ba55c68', domain: DOMAIN});
const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'bar@example.com, YOU@sandboxc80377cd945548fc9752d712103a989a.mailgun.org?',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function(error, body) {
  console.log(body);
});