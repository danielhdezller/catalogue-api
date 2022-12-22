import { Injectable } from '@nestjs/common';
import { CatalogueService } from 'src/catalogue/catalogue.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemInput, UpdateItemInput } from 'src/types/graphql';

@Injectable()
export class ItemService {
  constructor(private readonly prisma: PrismaService) {}

  create(createItemInput: CreateItemInput) {
    return this.prisma.item.create({
      data: {
        name: createItemInput.name,
        catalogueId: createItemInput.catalogueId,
      },
      include: { catalogue: true },
    });
  }

  findAll() {
    return this.prisma.item.findMany({
      include: { catalogue: true },
    });
  }

  findOne(id: number) {
    return this.prisma.item.findUnique({
      where: { id },
      include: { catalogue: true },
    });
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return this.prisma.item.update({
      where: { id },
      data: {
        name: updateItemInput.name,
        catalogueId: updateItemInput.catalogueId,
      },
    });
  }

  remove(id: number) {
    return this.prisma.item.delete({
      where: { id },
    });
  }
}
