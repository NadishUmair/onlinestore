import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const SMTP_EMAIL = "handyontario1@gmail.com";
  const SMTP_PASS = "delz orbi hzbo rmzf";
  const { name, email, phoneNo, message } = await req.json();

  // Validate input
  if (!name || !email || !phoneNo || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com', // Corrected host
    port: 587,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASS,
    },
  });

  const mailOptions = {
    from: SMTP_EMAIL,
    to: SMTP_EMAIL,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Message: ${message}\nPhone Number: ${phoneNo}`,
  };

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return reject(error);
        }
        resolve(info);
      });
    });

    const response = NextResponse.json({ success: 'Message received successfully' }, { status: 200 });
    
    // Set CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*'); // Replace '*' with your domain in production
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  } catch (error) {
    console.error(error);
    const response = NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    
    // Set CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*'); // Replace '*' with your domain in production
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  }
}
