import type { SafeParseReturnType } from 'zod';

export function zodGetFirstError(
  errorMessage: SafeParseReturnType<Object, Object>,
) {
  if (errorMessage.success) {
    throw new Error('no zod error message');
  }
  
  return errorMessage.error.errors[0].message;
}
