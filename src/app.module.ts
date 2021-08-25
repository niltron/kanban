import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  providers: [AuthorsResolver],
})
export class AppModule {}
