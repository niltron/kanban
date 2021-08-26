import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { context } from './common/context.prisma';
import { PrismaService } from './common/prisma.service';
import { AuthorsResolver } from './graph/authors.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context,
      playground: true,
      debug: true,
      tracing: true,
      stopOnTerminationSignals: true,
      autoSchemaFile: 'schema.gql',
      cors: {
        origin: [
          // HERE YOUR SITE,
          'http://localhost:3000',
        ],
      },
    }),
  ],
  controllers: [],
  providers: [PrismaService, AuthorsResolver],
})
export class AppModule {}
