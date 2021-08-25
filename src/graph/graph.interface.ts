import { PrismaClient } from '@prisma/client';
import { auth } from 'firebase-admin';

export interface ContextKanban {
  prisma: PrismaClient;
  decoded: auth.DecodedIdToken;
}

export interface IDefinition {
  value: string;
  query: string;
  resolve?: string;
  definition: string;
  resolverFn: (
    parent: any,
    args: any,
    context: ContextKanban,
    info?: any,
  ) => Promise<any[]>;
}
