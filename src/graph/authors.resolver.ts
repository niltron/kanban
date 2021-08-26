import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/common/prisma.service';
import { Board, BoardCreateInput, User } from 'src/common/generated';
import { KanbanContext } from './graph.interface';

@Resolver(() => User)
export class AuthorsResolver {
  constructor(public readonly prisma: PrismaService) {}

  @Query(() => User, { nullable: true })
  author(@Args('id', { type: () => String }) id: string): Promise<User> {
    return this.prisma.client.user.findFirst({
      where: { id },
      include: {
        boards: {
          include: {
            members: true,
            columns: {
              include: {
                tasks: {
                  include: {
                    assigned: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
  @Query(() => [User], { nullable: true })
  authors(): Promise<User[]> {
    return this.prisma.client.user.findMany();
  }

  @Mutation(() => Board)
  addBoard(
    @Context() ctx: KanbanContext,
    @Args('board', { type: () => BoardCreateInput }) board: Board,
  ) {
    // members: [ctx.decoded.sub] TODO Add admin as member if flag found
    return this.prisma.client.board.create({ data: { ...board } });
  }
}
