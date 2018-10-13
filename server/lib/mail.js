const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const makeResetMail = ({ name, resetToken }) => {
  return `<div style="font-family: sans-serif; font-size: 20px; color: #333333; line-height: 2;">
    <h1>Your password reset</h1>
    Hi ${name}!
    <p>
      We received a password reset request for your account.<br>
      <a href="${process.env.FRONTEND_URL}/reset/${resetToken}">Click Here to Reset</a><br>
      If you didn't sent the request, you can ignore this email.<br><br>
      See you soon 👋<br>
      Your Raven-Notes Team
    </p>
  </div>
  `;
};

const sendResetMail = ({ to, name, resetToken }) => {
  return transport.sendMail({
    to,
    from: process.env.MAIL_FROM,
    subject: 'Your password reset',
    html: makeResetMail({ name, resetToken })
  });
};

exports.transport = transport;
exports.sendResetMail = sendResetMail;
