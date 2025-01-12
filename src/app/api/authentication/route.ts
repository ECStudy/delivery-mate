import { NextRequest, NextResponse } from 'next/server';
import { SendEmailCommand } from '@aws-sdk/client-ses';
import { sesClient } from '@/app/aws/sesClient';
import { collection } from '@/lib/mongo';
import { checkEmailFormat } from '@/app/(basic)/signup/utils';

// 인증번호 생성
const generateAuthenticationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const generateExpiresAt = () => {
  return new Date(Date.now() + 10 * 60 * 1000);
};

/* 인증번호 맞는지 확인하기 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email') ?? '';
    const authenticationCode = searchParams.get('authenticationCode');

    const authenticationCollection = await collection.authentication();
    const authenticationInfo = await authenticationCollection.findOne({
      email,
    });

    if (authenticationCode === authenticationInfo?.authenticationCode) {
      return NextResponse.json({ message: '인증번호가 일치합니다' });
    }

    return NextResponse.json(
      { message: '인증번호가 일치하지 않습니다' },
      { status: 400 },
    );
  } catch (error) {
    console.error('인증번호 검증에 실패하였습니다 : ', error);

    return NextResponse.json(
      { error: '인증번호 검증에 실패하였습니다' },
      { status: 500 },
    );
  }
}

/* 인증번호 전송 */
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: '이메일을 입력하지 않았습니다' },
        { status: 400 },
      );
    }

    if (!checkEmailFormat(email)) {
      return NextResponse.json(
        { error: '유효한 이메일이 아닙니다' },
        { status: 400 },
      );
    }

    const authenticationCode = generateAuthenticationCode();

    // 이메일 보내기
    const emailResponse = await sesClient.send(
      new SendEmailCommand({
        Destination: { ToAddresses: [email] },
        Message: {
          Body: {
            Html: {
              Charset: 'UTF-8',
              Data: `
                <!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                  </head>
                  <body>
                    <div style="padding: 20px; background-color: #f9f9f9">
                      <div style="font-size: 16px">
                        <p>안녕하세요, 딜리버리 메이트입니다</p>
                        <p>다음 인증번호를 입력하여 이메일 인증을 완료하세요</p>

                        <div
                          style="
                            background-color: lightgray;
                            width: fit-content;
                            margin-top: 20px;
                            padding-left: 12px;
                            padding-right: 12px;
                            padding-top: 4px;
                            padding-bottom: 4px;
                            border-radius: 4px;
                          "
                        >
                          ${authenticationCode}
                        </div>
                      </div>
                    </div>
                  </body>
                </html>
                `,
            },
          },
          Subject: {
            Charset: 'UTF-8',
            Data: '[Delivery Mate] 이메일 인증 관련 메일입니다.',
          },
        },
        Source: 'admin@deliverymate.store',
      }),
    );

    // 인증번호 db에 저장하기
    const authenticationCollection = await collection.authentication();
    const dbResponse = await authenticationCollection.updateOne(
      { email },
      { $set: { authenticationCode, codeExpiresAt: generateExpiresAt() } },
      { upsert: true },
    );

    return NextResponse.json({
      message: '이메일을 성공적으로 전송하였습니다',
      emailResponse,
      dbResponse,
    });
  } catch (error) {
    console.error('이메일 전송에 실패하였습니다 :', error);

    return NextResponse.json(
      { error: '이메일 전송에 실패하였습니다' },
      { status: 500 },
    );
  }
}

/* 인증 완료되었을 떄 db에 저장된 정보 삭제 */
export async function DELETE(req: NextRequest) {
  try {
    const { email } = await req.json();

    const authenticationCollection = await collection.authentication();
    await authenticationCollection.deleteOne({ email });

    return NextResponse.json({
      message: '인증 정보를 삭제하였습니다',
    });
  } catch (error) {
    console.error('인증 정보를 삭제하지 못 했습니다 : ', error);

    return NextResponse.json(
      { error: '인증 정보를 삭제하지 못 했습니다' },
      { status: 500 },
    );
  }
}
