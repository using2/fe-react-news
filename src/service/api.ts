import { FetchError } from '@/types/apiTypes';

export async function fetchJSON<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new FetchError(
        `HTTP error: ${response.statusText}`,
        response.status,
      );
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    if (error instanceof FetchError) {
      throw error;
    }
    throw new FetchError('Failed to fetch data', undefined, error);
  }
}
