import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCatalogueInput, UpdateCatalogueInput } from 'src/types/graphql';

@Injectable()
export class CatalogueService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCatalogueInput: CreateCatalogueInput) {
    return this.prisma.catalogue.create({
      data: { name: createCatalogueInput.name },
    });
  }

  findAll() {
    return this.prisma.catalogue.findMany({
      include: { items: true },
    });
  }

  findOne(id: number) {
    return this.prisma.catalogue.findUnique({
      where: { id },
      include: { items: true },
    });
  }

  update(id: number, updateCatalogueInput: UpdateCatalogueInput) {
    return this.prisma.catalogue.update({
      where: { id },
      data: {
        name: updateCatalogueInput.name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.catalogue.delete({
      where: { id },
    });
  }
}
