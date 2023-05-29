const nodemailer = require('nodemailer');

const sendPasswordResetEmail = async (email, resetToken) => {
  try {
    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      // Configure your email service provider here
      // Example: Gmail SMTP configuration
      service: 'gmail',
      auth: {
        user: 'mootaz4510@gmail.com',
        pass: '21280324mootaZ',
      },
    });

    // Define the email content
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Password Reset',
      text: `You have requested a password reset. Please click on the following link to reset your password: ${resetToken}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Failed to send password reset email:', error);
  }
};

module.exports = { sendPasswordResetEmail };
