import ky, { type Options } from 'ky';

interface FetcherResponse<T> {
  data: T;
  error?: string;
}

// Set up ky instance with base options
const api = ky.create({
  headers: {
    'Content-Type': 'application/json',
  },
  retry: 2,
});

// Fetcher function with generic type for response data
export const fetcher = async <T>(
  url: string,
  options?: Options,
): Promise<FetcherResponse<T>> => {
  const response = await api.get(url, options).json<T>();
  return { data: response };
};
