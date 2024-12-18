import Link from 'next/link';
import { LinkButton } from '../button/link_button';
import { PlusCircle } from 'lucide-react';

export const Header = function Header() {
  // 테스트용
  const isLogin = false;
  const TITLE = 'Delivery Mate';

  return (
    <header className="bg-white">
      <div className="flex justify-between items-center desktop:max-w-5xl mx-auto px-7 desktop:px-0 py-5">
        <Link href="/" className="text-2xl font-bold text-black">
          {TITLE}
        </Link>

        <AuthButtons isLogin={isLogin} />
      </div>
    </header>
  );
};

const AuthButtons = function AuthButtons({ isLogin }: { isLogin: boolean }) {
  const LABELS = {
    SIGNIN: '로그인',
    SIGNUP: '회원가입',
    MYPAGE: '마이페이지',
    SIGNOUT: '로그아웃',
  };

  return (
    <div className="flex gap-1">
      {isLogin ? (
        <div className="flex gap-2 items-center">
          <LinkButton href="/my">{LABELS.MYPAGE}</LinkButton>
          {/* <LinkButton href="/" bg_color="gray">
            {LABELS.SIGNOUT}
          </LinkButton> */}
          <LinkButton
            href="/list/create"
            bg_color="gray"
            className="flex items-center"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> 파티 만들기
          </LinkButton>
        </div>
      ) : (
        <>
          <LinkButton href="/login" rounded="full" sizeLevel="small">
            {LABELS.SIGNIN}
          </LinkButton>
          <LinkButton
            href="/signup"
            bg_color="gray"
            rounded="full"
            sizeLevel="small"
          >
            {LABELS.SIGNUP}
          </LinkButton>
        </>
      )}
    </div>
  );
};
