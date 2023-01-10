import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { PrismaModule } from './prisma/prisma.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { ItemModule } from './item/item.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/types/graphql.ts'),
        outputAs: 'class',
      },
    }),
    PrismaModule,
    CatalogueModule,
    ItemModule,
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
