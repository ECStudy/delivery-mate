'use client';

import { fetcher } from '@/lib/fetcher';
import useSwr from 'swr';

export default function APITestPage() {
  const { data, error } = useSwr('/api/status', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1>API Test Page</h1>
      <p>This page is an API test page.</p>
    </div>
  );
}
