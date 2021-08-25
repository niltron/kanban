import { PrismaClient } from '@prisma/client';
import { v4 } from 'uuid';

const prisma = new PrismaClient();
const indentify = () => v4().replace(/-/g, '');

async function seed() {
  const FIXED_BOARD = '27c907e679304b5bb88b27c0c0c5c2b1';
  const FIXED_ADMIN = 'f2abe20bdef04e42b85d07af2c81c301';
  const admin = prisma.user.upsert({
    where: { email: 'admin@wrine.co' },
    update: {},
    create: {
      id: FIXED_ADMIN,
      name: 'Admin',
      email: 'admin@wrine.co',
      admin: true,
    },
  });

  const board = prisma.board.upsert({
    where: { id: FIXED_BOARD },
    update: {},
    create: {
      id: indentify(),
      name: 'Default Board',
      members: {
        create: [
          {
            id: indentify(),
            name: 'Member Alice',
            email: 'alice@wrine.co',
            admin: false,
          },
          {
            id: indentify(),
            name: 'Member Bob',
            email: 'bob@wrine.co',
            admin: false,
          },
        ],
      },
      columns: {
        create: [
          {
            name: 'To Do',
            tasks: {
              create: [{ title: 'Start', description: 'Publish site' }],
            },
          },
          {
            name: 'Doing',
            tasks: {
              create: [
                {
                  title: 'Better',
                  description: 'Improving testing',
                  ponctuation: 8,
                  assignedId: FIXED_ADMIN,
                },
              ],
            },
          },
          {
            name: 'Done',
            tasks: {
              create: [{ title: 'Build', description: 'Build Version One' }],
            },
          },
          { name: 'Backlog' },
        ],
      },
    },
  });

  await prisma.$transaction([admin, board]);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
