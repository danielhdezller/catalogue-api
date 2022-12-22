import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';

@Module({
  imports: [],
  providers: [ItemResolver, ItemService],
  exports: [ItemService],
})
export class ItemModule {}
