'use client';

import { Button } from '@/components/button/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form_data = new FormData(e.currentTarget);
    alert(form_data.get('email'));

    router.push('/list');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Delivery Mate</h1>
          <p className="text-sm text-gray-600">함께 주문하고 배달받아요!</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input
              sizeLevel="full"
              name="email"
              type="email"
              placeholder="이메일"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                로그인 상태 유지
              </label>
            </div>
          </div>
          <Button bg_color="gray" sizeLevel="full">
            로그인
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            계정이 없으신가요?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
