export interface ApiError {
  message: string;
  status?: number;
  originalError?: unknown;
}

export class FetchError extends Error {
  status?: number;
  originalError?: unknown;

  constructor(message: string, status?: number, originalError?: unknown) {
    super(message);
    this.name = 'FetchError';
    this.status = status;
    this.originalError = originalError;
  }
}
