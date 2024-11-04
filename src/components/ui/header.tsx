import Link from 'next/link';
import { LinkButton } from './link_button';

export const Header = function Header() {
  // 테스트용
  const isLogin = false;
  const LABELS = {
    TITLE: 'Delivery Mate',
    SIGNIN: '로그인',
    SIGNUP: '회원가입',
    MYPAGE: '마이페이지',
    SIGNOUT: '로그아웃',
  };

  const renderAuthButtons = () => (
    <div className="flex gap-1">
      {isLogin ? (
        <>
          <LinkButton href="/my" label={LABELS.MYPAGE} />
          <LinkButton href="/" label={LABELS.SIGNOUT} isBgColor />
        </>
      ) : (
        <>
          <LinkButton href="/login" label={LABELS.SIGNIN} />
          <LinkButton href="/" label={LABELS.SIGNUP} isBgColor />
        </>
      )}
    </div>
  );

  return (
    <header className="bg-white">
      <div className="flex justify-between items-center desktop:max-w-5xl mx-auto px-7 desktop:px-0 py-5">
        <Link href="/" className="text-2xl font-bold text-black">
          {LABELS.TITLE}
        </Link>

        {renderAuthButtons()}
      </div>
    </header>
  );
};
