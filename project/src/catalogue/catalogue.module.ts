import { Module } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';
import { CatalogueResolver } from './catalogue.resolver';

@Module({
  providers: [CatalogueResolver, CatalogueService],
  exports: [CatalogueService],
})
export class CatalogueModule {}
