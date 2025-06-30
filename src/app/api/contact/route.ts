import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  const emailUser = process.env.SMPTP_USERNAME;
  const emailPass = process.env.SMPTP_PASSWORD;

  if (!emailUser || !emailPass) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'Email service not configured',
        isSuccess: false,
      },
      { status: 500 }
    );
  }

  let requestData: EmailRequest;

  try {
    requestData = await req.json();

    if (!requestData.name || !requestData.email || !requestData.subject || !requestData.message) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'All fields are required',
          isSuccess: false,
        },
        { status: 400 }
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'Invalid request body',
        isSuccess: false,
        error: error,
      },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${emailUser}>`,
    to: emailUser,
    subject: requestData.subject || 'New Contact Form Message',
    html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f5; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
      <!-- Header -->
      <div style="background-color: #7e22ce; color: white; padding: 20px; text-align: center;">
        <h2 style="margin: 0; font-size: 24px;">📬 New Portfolio Message</h2>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">
        <p style="font-size: 16px; margin-bottom: 10px;"><strong>Name:</strong> ${requestData.name}</p>
        <p style="font-size: 16px; margin-bottom: 10px;"><strong>Email:</strong> ${requestData.email}</p>
        <p style="font-size: 16px; margin-bottom: 10px;"><strong>Subject:</strong> ${requestData.subject}</p>

        <div style="margin-top: 20px;">
          <h3 style="font-size: 18px; color: #7e22ce; margin-bottom: 10px;">Message</h3>
          <div style="background-color: #f9fafb; border-left: 4px solid #7e22ce; padding: 15px; border-radius: 4px; font-size: 15px; color: #333;">
            ${requestData.message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div style="text-align: center; font-size: 12px; color: #999; padding: 15px 30px 25px;">
        This message was sent from your portfolio contact form.<br/>
        &copy; ${new Date().getFullYear()} Your Name or Website. All rights reserved.
      </div>
    </div>
  </div>
`,

  };

  try {
    await transporter.verify();
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        status: 'sent',
        isSuccess: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to send email',
        isSuccess: false,
      },
      { status: 500 }
    );
  }
}
