# Catalogue API

## Description

Hi 😀! This is a GraphQL API project to manage a catalogue of any kind of product or service.
My intention is to add new functionalities bit by bit in my free time 🤓.

Note: the project is following the Nestjs GraphQL schema first approach.

## Technologies

[Nest](https://nestjs.com/) a progressive Node.js framework for building efficient, reliable and scalable server-side applications.
[Prisma](https://www.prisma.io/) Next-generation Node.js and TypeScript ORM.
[GraphQL](https://graphql.org/) GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
[PostgreSQL](https://www.postgresql.org/) The World's Most Advanced Open Source Relational Database.

## Docker

```bash
# start the DB
$ cd ./docker
$ docker-compose up
```

## Installation

```bash
# install the node modules
$ cd ./project
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Useful commands

### Prisma

```bash
# generate and apply a migration
$ yarn prisma migrate dev --name

# start prisma studio
$ yarn prisma studio
```

### NestJs

```bash
# generate resource
$ nest generate resource "resource-name"
# then select GraphQl (schema first)

Schematics available on @nestjs/schematics collection:
    ┌───────────────┬─────────────┬──────────────────────────────────────────────┐
    │ name          │ alias       │ description                                  │
    │ application   │ application │ Generate a new application workspace         │
    │ class         │ cl          │ Generate a new class                         │
    │ configuration │ config      │ Generate a CLI configuration file            │
    │ controller    │ co          │ Generate a controller declaration            │
    │ decorator     │ d           │ Generate a custom decorator                  │
    │ filter        │ f           │ Generate a filter declaration                │
    │ gateway       │ ga          │ Generate a gateway declaration               │
    │ guard         │ gu          │ Generate a guard declaration                 │
    │ interceptor   │ in          │ Generate an interceptor declaration          │
    │ interface     │ interface   │ Generate an interface                        │
    │ middleware    │ mi          │ Generate a middleware declaration            │
    │ module        │ mo          │ Generate a module declaration                │
    │ pipe          │ pi          │ Generate a pipe declaration                  │
    │ provider      │ pr          │ Generate a provider declaration              │
    │ resolver      │ r           │ Generate a GraphQL resolver declaration      │
    │ service       │ s           │ Generate a service declaration               │
    │ library       │ lib         │ Generate a new library within a monorepo     │
    │ sub-app       │ app         │ Generate a new application within a monorepo │
    │ resource      │ res         │ Generate a new CRUD resource                 │
    └───────────────┴─────────────┴──────────────────────────────────────────────┘

Options:
  -d, --dry-run                      Report actions that would be taken without writing out results.
  -p, --project [project]            Project in which to generate files.
  --flat                             Enforce flat structure of generated element.
  --spec                             Enforce spec files generation. (default: true)
  --no-spec                          Disable spec files generation.
  -c, --collection [collectionName]  Schematics collection to use.
  -h, --help                         Output usage information.

```

## Stay in touch

- Author - [Daniel Hernández](https://github.com/danielhdezller)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/daniel-hernandez-ller/)
