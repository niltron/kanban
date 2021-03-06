# kanban

A comprehensive task board

## tl;dr

```
docker-compose up
npm i && npm run db:reset && npm run start:dev
// Go to http://localhost:3000/graphql
```

## queries example

```
npm run start:dev

# GET users
query {
  authors {
    id
    name
  }
}

# GET all info for a user
query {
  author(id: "") { <<-- PUT one id from the previous list
    id
    name
    boards {
      id
      name
      members {
        id
        name
        admin
      }
      columns {
        name
        status
        tasks {
          title
          description
          status
          assigned {
            name
          }
        }
      }
    }
  }
}

```

## recommended env vars
```
MYSQL_ROOT_PASSWORD=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
DATABASE_URL=mysql://user:pwd@127.0.0.1:3306/kanban
FIREBASE_DATABASE_URL=https://{{site}}.firebaseio.com
KANBAN_DOMAIN=
```

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

### firebase link
Enable firebase auth
```
npm install -g firebase-tools
firebase login
firebase init
```