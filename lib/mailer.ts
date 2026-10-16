import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

export const sendOTPEmail = async (email: string, otp: string): Promise<void> => {
  await transporter.sendMail({
    from: '"Gym Portal" <no-reply@gymwebsite.com>',
    to: email,
    subject: 'Email Verification OTP',
    html: `<h3>Your OTP code is: <b>${otp}</b></h3><p>Valid for 10 minutes.</p>`,
  });
};