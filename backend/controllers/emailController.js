// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");

// Function to send email using nodemailer
const sendEmail = (email, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: "mail.lankagate.gov.lk",
    port: 587,
    secure: true, // or true if your server requires a secure connection
    auth: {
      user: "eparticipation@lankagate.gov.lk",
      pass: "Eaol%59*=i!f9",
    },
  });

  const mailOptions = {
    from: "eparticipation@lankagate.gov.lk",
    to: email,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
exports.sendEmail = sendEmail;
