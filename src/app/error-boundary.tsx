'use client';

import { useRouter } from 'next/navigation';
import { SWRConfig } from 'swr';

interface Props {
  children: React.ReactNode;
}

export default function ErrorBoundary({ children }: Props) {
  const router = useRouter();
  return (
    <SWRConfig
      value={{
        onError: (error) => {
          console.error(error);
          router.push('/error');
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}
