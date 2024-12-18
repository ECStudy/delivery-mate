'use client';

import { memo, useState } from 'react';
import Link from 'next/link';
import { Timer } from './components/timer';
import { checkEmailFormat } from './utils';
import { Button, Input } from '@/components';

const SignUpPage = memo(function SignUpPage() {
  const [email, setEmail] = useState('');
  const [certificationNum, setCertificationNum] = useState('');
  const [sendAuthentication, setSendAuthentication] = useState(false);

  /** 인증요청 하기 */
  const sendAuthenticationNum = async () => {
    // 1. 유효성 검사
    if (!checkEmailFormat(email)) {
      alert('이메일 형식을 확인해 주세요');
      return;
    }

    // 2. 서버에 인증번호 요청
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    // 3. 인증번호 이메일로 보내지면
    setSendAuthentication(true);
  };

  /** 이메일 다시 보내기 */
  const handleReSendEmail = () => {
    // 저장된 인증번호 삭제

    setCertificationNum('');
    setSendAuthentication(false);
  };

  /** 회원가입 하기 */
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // 1. 인증번호 동일한지 확인

    // router.push('/list');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Delivery Mate</h1>
          <p className="text-sm text-gray-600">함께 주문하고 배달받아요!</p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="이메일"
              sizeLevel="full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={sendAuthentication}
              required
            />
            <Button
              bg_color="gray"
              sizeLevel="fit"
              type="button"
              onClick={sendAuthenticationNum}
              disabled={sendAuthentication}
            >
              {sendAuthentication ? (
                <Timer sendAuthentication={sendAuthentication} />
              ) : (
                '인증요청'
              )}
            </Button>
          </div>

          <Input
            placeholder="인증번호 입력"
            sizeLevel="full"
            value={certificationNum}
            onChange={(e) => setCertificationNum(e.target.value)}
            disabled={!sendAuthentication}
            required
          />

          {sendAuthentication && (
            <button
              className="text-sm text-blue-600"
              onClick={handleReSendEmail}
            >
              이메일 재전송하기
            </button>
          )}

          <Button
            bg_color="gray"
            sizeLevel="full"
            type="submit"
            disabled={!sendAuthentication}
            onClick={handleSubmit}
          >
            회원가입
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            계정이 있으신가요?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
});

export default SignUpPage;
