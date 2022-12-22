
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCatalogueInput {
    name: string;
}

export class UpdateCatalogueInput {
    id: number;
    name: string;
}

export class CreateItemInput {
    name: string;
    catalogueId?: Nullable<number>;
}

export class UpdateItemInput {
    id: number;
    name: string;
    catalogueId?: Nullable<number>;
}

export class Catalogue {
    id: number;
    name: string;
    items?: Nullable<Nullable<Item>[]>;
}

export abstract class IQuery {
    abstract catalogs(): Nullable<Catalogue>[] | Promise<Nullable<Catalogue>[]>;

    abstract catalogue(id: number): Nullable<Catalogue> | Promise<Nullable<Catalogue>>;

    abstract items(): Nullable<Item>[] | Promise<Nullable<Item>[]>;

    abstract item(id: number): Nullable<Item> | Promise<Nullable<Item>>;
}

export abstract class IMutation {
    abstract createCatalogue(createCatalogueInput: CreateCatalogueInput): Catalogue | Promise<Catalogue>;

    abstract updateCatalogue(updateCatalogueInput: UpdateCatalogueInput): Catalogue | Promise<Catalogue>;

    abstract removeCatalogue(id: number): Nullable<Catalogue> | Promise<Nullable<Catalogue>>;

    abstract createItem(createItemInput: CreateItemInput): Item | Promise<Item>;

    abstract updateItem(updateItemInput: UpdateItemInput): Item | Promise<Item>;

    abstract removeItem(id: number): Nullable<Item> | Promise<Nullable<Item>>;
}

export class Item {
    id: number;
    name: string;
    catalogue?: Nullable<Catalogue>;
}

type Nullable<T> = T | null;
