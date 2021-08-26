import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/common/prisma.service';
import { AuthorsResolver } from './authors.resolver';

describe('AuthorsResolver', () => {
  let resolver: AuthorsResolver;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AuthorsResolver, PrismaService],
    }).compile();

    resolver = app.get<AuthorsResolver>(AuthorsResolver);
  });

  describe('instance', () => {
    it('should be defined', () => {
      expect(resolver).toBeDefined();
    });
  });

  describe('author', () => {
    it('should return the author details', async () => {
      resolver.prisma.client.user.findFirst = jest.fn(() =>
        Promise.resolve({
          name: 'Test',
        }),
      ) as any;
      expect(await resolver.author('ab0001')).toStrictEqual({
        name: 'Test',
      });
    });
  });

  describe('authors', () => {
    it('should return all the authors', async () => {
      resolver.prisma.client.user.findFirst = jest.fn(() =>
        Promise.resolve([
          {
            name: 'Test 2',
          },
        ]),
      ) as any;
      expect(await resolver.author('ab0001')).toStrictEqual([
        {
          name: 'Test 2',
        },
      ]);
    });
  });

  describe('addBoard', () => {
    it('should create a new board', async () => {
      resolver.prisma.client.board.create = jest.fn(() =>
        Promise.resolve({}),
      ) as any;
      expect(
        await resolver.addBoard(
          {} as any,
          {
            name: 'New Board',
          } as any,
        ),
      ).toStrictEqual({});
    });
  });
});
