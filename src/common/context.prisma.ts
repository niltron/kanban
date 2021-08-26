import { ForbiddenError } from 'apollo-server';
import { ServerResponse } from 'http';
import { IncomingMessage } from 'http';
import { KanbanContext } from '../graph/graph.interface';
import { verify } from './auth.utils';

interface CtxData {
  req: IncomingMessage & { ip?: string; body?: { operationName: string } };
  res: ServerResponse;
}

interface WSNnextData {
  connection: {
    context: KanbanContext;
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
    body: { operationName },
    headers: { authorization },
  } = data?.req;

  if (operationName === 'IntrospectionQuery') {
    return null;
  }

  if (!authorization) {
    throw new ForbiddenError('Not authorized');
  }

  const decoded = await verify(authorization);

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
