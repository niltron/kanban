import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './common/prisma.service';
import { AuthorsResolver } from './graph/authors.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [],
  providers: [PrismaService, AuthorsResolver],
})
export class AppModule {}
