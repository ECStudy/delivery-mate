'use client';

import { memo, useEffect, useState } from 'react';
import { formatTime } from '../utils';

interface TimerProps {
  sendAuthentication: boolean;
}

export const Timer = memo(function Timer({ sendAuthentication }: TimerProps) {
  const [seconds, setSeconds] = useState(180);

  useEffect(() => {
    if (!sendAuthentication) {
      setSeconds(180);
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [sendAuthentication]);

  return <>{formatTime(seconds)}</>;
});
