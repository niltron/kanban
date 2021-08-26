import { ForbiddenError } from 'apollo-server';
import { ServerResponse } from 'http';
import { IncomingMessage } from 'http';
import { ContextKanban } from '../graph/graph.interface';

interface CtxData {
  req: IncomingMessage & { ip?: string; body?: { operationName: string } };
  res: ServerResponse;
}

interface WSNnextData {
  connection: {
    context: ContextKanban;
  };
  payload: {
    operationName: string;
  };
}

export const context = async (data: CtxData & WSNnextData) => {
  if (data?.connection?.context?.decoded) {
    return data.connection.context;
  }

  const {
    ip,
    body: { operationName },
    headers,
  } = data?.req;

  if (operationName === 'IntrospectionQuery') {
    return null;
  }

  if (!headers.authorization) {
    throw new ForbiddenError('Not authorized');
  }

  const decoded = await verify(headers.authorization);

  if (!decoded) {
    return null;
  }

  if (!decoded.email_verified) {
    throw new ForbiddenError('Email is not verified');
  }

  return {
    decoded,
    operationName,
  };
};

// TODO: review
function verify(authorization: string): any {
  throw new Error('Function not implemented.');
}
