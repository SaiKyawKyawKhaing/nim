import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "kyawkyawkhaing.ykm2.2711@gmail.com", // your Gmail
        pass: 'xhhogjsylyaawrbq' // your Gmail app password
      }
    });

    const mailOptions = {
      from: email,
      to: "kyawkyawkhaing.ykm2.2711@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}