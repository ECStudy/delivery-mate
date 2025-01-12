import { collection } from '@/lib/mongo';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const userCollection = await collection.user();
    userCollection.insertOne({
      email,
      accessToken: '',
      createdAt: new Date(),
      deletedAt: null,
      history: [],
      name: '',
      nickname: '',
      profile: '',
      updatedAt: new Date(),
    });

    return NextResponse.json({ message: '회원가입 성공하였습니다' });
  } catch (error) {
    console.error('회원가입 실패하였습니다 :', error);

    return NextResponse.json(
      { error: '회원가입 실패하였습니다' },
      { status: 500 },
    );
  }
}
