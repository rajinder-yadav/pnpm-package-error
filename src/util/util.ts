'use strict';

export const hello = (): string => {
  return 'Hello DM-Tools!';
};

export function goodbye(): string {
  return 'See you later =)';
}

export class AppError {
  message: string;
  statusCode: number;
  status: string;

  constructor(message: string, statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
    this.status = statusCode < 500 ? 'error' : 'fail';
  }
}
