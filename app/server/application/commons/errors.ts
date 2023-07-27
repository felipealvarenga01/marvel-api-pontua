import { logger } from '~/server/infra/logger';

export class InputError extends Error {
  constructor(public field: string, public message: string) {
    super(message);
  }
}

type ErrorsFunctions = {
  badRequest?: () => void;
  internalServerError?: () => void;
};

type HandleErrorOptions = {
  triggerDefaultError: boolean;
  json: any;
};

export function handleError(
  status: number,
  functions?: ErrorsFunctions,
  options?: HandleErrorOptions,
) {
  const defaultBadRequest = () => {
    throw new Error('common.errors.badRequest');
  };
  
  const defaultInternalServerError = () => {
    throw new Error('common.errors.internalServerError');
  };
  
  const [statusRange] = status.toString().split('');
  if (statusRange !== '2') {
    logger.error(`error status: ${status} - ${JSON.stringify(options?.json)}`);
  }
  const badRequest = functions?.badRequest || defaultBadRequest;
  const internalServerError =
    functions?.internalServerError || defaultInternalServerError;
  
  switch (statusRange) {
    case '5':
      internalServerError();
      options?.triggerDefaultError && defaultInternalServerError();
      break;
    
    case '4':
      badRequest();
      options?.triggerDefaultError && defaultBadRequest();
      break;
    
    default:
      break;
  }
}
