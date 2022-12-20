import { Module } from "@nestjs/common";
import { CatalogueResolver } from './catalogue.resolver';

@Module({
    imports: [],
    controllers: [],
    providers: [CatalogueResolver],
  })

  export class CatalogueModule {}