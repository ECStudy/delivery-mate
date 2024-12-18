import { NextRequest, NextResponse } from 'next/server';
import { SendEmailCommand } from '@aws-sdk/client-ses';
import { sesClient } from '@/app/aws/sesClient';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const emailResponse = await sesClient.send(
      new SendEmailCommand({
        Destination: { ToAddresses: [email] },
        Message: {
          Body: { Text: { Charset: 'UTF-8', Data: 'EMAIL TEST' } },
          Subject: { Charset: 'UTF-8', Data: 'AWS SES 테스트' },
        },
        Source: 'admin@deliverymate.store',
      }),
    );

    return NextResponse.json({
      message: 'Email sent successfully',
      emailResponse,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
