import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, businessName, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "kyawkyawkhaing.ykm2.2711@gmail.com",
        pass: 'xhhogjsylyaawrbq'
      }
    });

    const mailOptions = {
      from: email,
      to: "kyawkyawkhaing.ykm2.2711@gmail.com",
      subject: `New Website Quote Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Business Name: ${businessName}
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Error sending quote request:', error);
    res.status(500).json({ message: 'Error sending quote request' });
  }
}