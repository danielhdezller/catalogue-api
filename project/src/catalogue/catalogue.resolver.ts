import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateCatalogueInput, UpdateCatalogueInput } from 'src/types/graphql';
import { CatalogueService } from './catalogue.service';

@Resolver('Catalogue')
export class CatalogueResolver {
  constructor(private readonly catalogueService: CatalogueService) {}

  @Mutation('createCatalogue')
  create(
    @Args('createCatalogueInput') createCatalogueInput: CreateCatalogueInput,
  ) {
    return this.catalogueService.create(createCatalogueInput);
  }

  @Query('catalogs')
  findAll() {
    return this.catalogueService.findAll();
  }

  @Query('catalogue')
  findOne(@Args('id') id: number) {
    return this.catalogueService.findOne(id);
  }

  @Mutation('updateCatalogue')
  update(
    @Args('updateCatalogueInput') updateCatalogueInput: UpdateCatalogueInput,
  ) {
    return this.catalogueService.update(
      updateCatalogueInput.id,
      updateCatalogueInput,
    );
  }

  @Mutation('removeCatalogue')
  remove(@Args('id') id: number) {
    return this.catalogueService.remove(id);
  }
}
