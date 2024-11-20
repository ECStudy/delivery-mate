import Link from 'next/link';
import { LinkButton } from '../button/link_button';

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
        <>
          <LinkButton href="/my" rounded="full" sizeLevel="small">
            {LABELS.MYPAGE}
          </LinkButton>
          <LinkButton href="/" bg_color="gray" rounded="full" sizeLevel="small">
            {LABELS.SIGNOUT}
          </LinkButton>
        </>
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
