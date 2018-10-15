# Raven Notes Server

## Some Example Queries

### Current User

```graphql
query {
  me {
    name
    email
    memberOf {
      id
      name
    }
  }
}
```

```json
{
  "data": {
    "me": {
      "name": "Bob",
      "email": "bob@raven.io",
      "memberOf": [
        {
          "id": "group-id-fantasyland",
          "name": "Fantasyland"
        }
      ]
    }
  }
}
```

```graphql
mutation createNote {
  createNote(data: { group: "group-id-fantasyland", contentText: "My favorite superheroes ✨" }) {
    id
    contentText
    contentJson
    author {
      id
      name
      email
    }
  }
}
```

```json
{
  "data": {
    "createNote": {
      "id": "c5f941d5-4943-47f3-80ee-ae11c171cf26",
      "contentText": "My favorite superheroes ✨",
      "contentJson": null,
      "author": {
        "id": "user-id-bob",
        "name": "Bob",
        "email": "bob@raven.io"
      }
    }
  }
}
```

```graphql
mutation updateNote {
  updateNote(
    where: { id: "17de238e-a556-4874-8cb5-717a45bd1eb2" }
    data: { contentText: "My favorite evil villains 😈" }
  ) {
    id
    contentJson
    contentText
    createdAt
    updatedAt
    author {
      id
      email
      name
    }
    group {
      id
      name
      members {
        id
        email
        name
      }
    }
  }
}
```

```json
{
  "data": {
    "updateNote": {
      "id": "17de238e-a556-4874-8cb5-717a45bd1eb2",
      "contentJson": null,
      "contentText": "My favorite evil villains 😈",
      "createdAt": "2018-10-14T20:16:24.000Z",
      "updatedAt": "2018-10-14T20:16:33.075Z",
      "author": {
        "id": "user-id-bob",
        "email": "bob@raven.io",
        "name": "Bob"
      },
      "group": {
        "id": "group-id-fantasyland",
        "name": "Fantasyland",
        "members": [
          {
            "id": "user-id-alice",
            "email": "alice@raven.io",
            "name": "Alice"
          },
          {
            "id": "user-id-bob",
            "email": "bob@raven.io",
            "name": "Bob"
          }
        ]
      }
    }
  }
}
```
