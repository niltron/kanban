import { PrismaClient } from '@prisma/client';
import { indentify } from './utils.prisma';

export const prisma = new PrismaClient();

prisma.$use(
  (
    params: { action: string; args: { data: { id: string } } },
    next: (arg0: any) => any,
  ) => {
    if (params?.action === 'create' && params?.args?.data?.id) {
      params.args.data.id = indentify();
    }

    return next(params);
  },
);
