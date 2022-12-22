
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Catalogue {
    name?: Nullable<string>;
}

export abstract class IQuery {
    abstract catalogue(id: number): Nullable<Catalogue> | Promise<Nullable<Catalogue>>;
}

type Nullable<T> = T | null;
