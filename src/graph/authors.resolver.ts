import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { prisma } from 'src/common/database.prisma';
import { Board, BoardCreateInput, User } from 'src/common/generated';
import { ContextKanban } from './graph.interface';

@Resolver(() => User)
export class AuthorsResolver {
  @Query(() => User, { nullable: true })
  author(@Args('id', { type: () => String }) id: string): Promise<User> {
    return prisma.user.findFirst({
      where: { id },
      include: {
        boards: {
          include: {
            members: true,
            columns: { include: { tasks: { include: { assigned: true } } } },
          },
        },
      },
    });
  }
  @Query(() => [User], { nullable: true })
  authors(): Promise<User[]> {
    return prisma.user.findMany();
  }

  @Mutation(() => Board)
  addBoard(
    @Context() ctx: ContextKanban,
    @Args('board', { type: () => BoardCreateInput }) board: Board,
  ) {
    console.log(ctx);
    // members: [ctx.decoded.sub] TODO Add admin as member if flag found
    return prisma.board.create({ data: { ...board } });
  }
}
