import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { indentify } from './utils.prisma';

interface PrismaParams {
  action: string;
  args: {
    data: { id: string };
  };
}

@Injectable()
export class PrismaService {
  client = new PrismaClient();

  constructor() {
    this.client.$use((params: PrismaParams, next: (arg0: any) => any) => {
      if (params?.action === 'create' && params?.args?.data?.id) {
        params.args.data.id = indentify();
      }

      return next(params);
    });
  }
}
