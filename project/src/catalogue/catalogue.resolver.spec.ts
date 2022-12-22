import { Test, TestingModule } from '@nestjs/testing';
import { CatalogueResolver } from './catalogue.resolver';
import { CatalogueService } from './catalogue.service';

describe('CatalogueResolver', () => {
  let resolver: CatalogueResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogueResolver, CatalogueService],
    }).compile();

    resolver = module.get<CatalogueResolver>(CatalogueResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
