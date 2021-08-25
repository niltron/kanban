# kanban

A comprehensive task board

## type first approach

By default prisma register types under node_modules. To handle traceability print the model under the generate/index.ts file.

## about lack of services

Prisma is able to autocomplete all the services.

## notes about apollo-server@2.25.2 and apollo-server-express@2.25.2

Use fixed versions instead of latest versions to prevent Errors on start.

## start local env

### start the database

```
docker-compose up
```

### update the environment

Drop, migrate, update definitions and execute the seeds with a single command

```
npm run db:reset
```
