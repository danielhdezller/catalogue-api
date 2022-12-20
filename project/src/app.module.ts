import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CatalogueModule } from './catalogue/catalogue.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./src/**/*.gql'],
      definitions: {
        path: join(process.cwd(), 'src/schema.ts'),
        outputAs: 'class',
      }
    }),
    CatalogueModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
