import { Query, Resolver } from '@nestjs/graphql';
import { Catalogue } from 'src/schema';

@Resolver('Catalogue')
export class CatalogueResolver {
    @Query(() => Catalogue)
    catalogue(id: number): Catalogue {
        return {name: 'Catalogue'}
    }
}
