'use client';

import useSwr from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function APITestPage() {
  const { data, error } = useSwr('/api/status', fetcher);

  console.log('data:', data);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1>API Test Page</h1>
      <p>This page is an API test page.</p>
    </div>
  );
}
