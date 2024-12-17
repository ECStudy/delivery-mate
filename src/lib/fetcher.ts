// /lib/api.ts

import ky, { HTTPError, type Options as KyOptions } from 'ky';

// Ky instance creation
const api = ky.create({
  headers: {
    'Content-Type': 'application/json',
  },
  retry: 2,
  hooks: {
    afterResponse: [
      async (_request, _options, response) => {
        if (!response.ok) {
          if (response.status === 401) {
            // Handle unauthorized access, e.g., redirect to login
            console.error('Unauthorized access - 401');
          }
          // Handle other global errors if needed
        }
        return response;
      },
    ],
  },
  // baseUrl: 'https://api.example.com', // Uncomment and set if needed
});

export default api;

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RequestOptions extends KyOptions {}

// Define the fetcher object with all HTTP methods
export const fetcher = {
  /**
   * GET request
   * @param url Request URL
   * @param options Additional options
   * @returns Response data of type T
   */
  get: async <T = any>(url: string, options?: RequestOptions): Promise<T> => {
    try {
      const response = await api.get(url, options).json<T>();
      return response;
    } catch (error) {
      return handleError(error); // TypeScript recognizes that handleError throws
    }
  },

  /**
   * POST request
   * @param url Request URL
   * @param data Data to send
   * @param options Additional options
   * @returns Response data of type T
   */
  post: async <T = any>(
    url: string,
    data?: any,
    options?: RequestOptions,
  ): Promise<T> => {
    try {
      const response = await api
        .post(url, { json: data, ...options })
        .json<T>();
      return response;
    } catch (error) {
      return handleError(error);
    }
  },

  /**
   * PUT request
   * @param url Request URL
   * @param data Data to send
   * @param options Additional options
   * @returns Response data of type T
   */
  put: async <T = any>(
    url: string,
    data?: any,
    options?: RequestOptions,
  ): Promise<T> => {
    try {
      const response = await api.put(url, { json: data, ...options }).json<T>();
      return response;
    } catch (error) {
      return handleError(error);
    }
  },

  /**
   * DELETE request
   * @param url Request URL
   * @param options Additional options
   * @returns Response data of type T
   */
  del: async <T = any>(url: string, options?: RequestOptions): Promise<T> => {
    try {
      const response = await api.delete(url, options).json<T>();
      return response;
    } catch (error) {
      return handleError(error);
    }
  },

  /**
   * PATCH request
   * @param url Request URL
   * @param data Data to send
   * @param options Additional options
   * @returns Response data of type T
   */
  patch: async <T = any>(
    url: string,
    data?: any,
    options?: RequestOptions,
  ): Promise<T> => {
    try {
      const response = await api
        .patch(url, { json: data, ...options })
        .json<T>();
      return response;
    } catch (error) {
      return handleError(error);
    }
  },
};

/**
 * Error handling function
 * @param error The error that occurred
 */
const handleError = (error: any): never => {
  if (error instanceof HTTPError) {
    console.error(
      `HTTP Error: ${error.response.status} - ${error.response.statusText}`,
    );
    throw new Error(error.response.statusText);
  } else {
    console.error('Unexpected Error:', error);
    throw new Error('An unexpected error occurred');
  }
};
