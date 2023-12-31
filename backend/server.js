require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

app.post('/api/v1/send-email', (req, res) => {
  const { company, email, firstname,lastname, linkedin, message, pronouns } = req.body;

   const msg = {
    to: 'sparsh.trivedy2140@gmail.com',
    from: 'sparsh.trivedy2140@gmail.com',
    subject: `Message from ${firstname} ${lastname}`,
    html: `
    <ul>
      <li>
        <b>First Name:</b> ${firstname}
      </li>
      <li>
        <b>Last Name:</b> ${lastname}
      </li>
      <li>
        <b>Pronouns:</b> ${pronouns}
      </li>
      <li>
        <b>Email:</b> ${email}
      </li>
      <li>
        <b>Company:</b> ${company}
      </li>
      <li>
        <b>LinkedIn:</b> ${linkedin}
      </li>
      <li>
        <b>Message:</b> ${message}
      </li>
    </ul>`,
  };

  sgMail.send(msg)
    .then(() => {
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
