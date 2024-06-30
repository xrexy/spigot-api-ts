# Spigot TS API <a href="https://www.npmjs.com/package/spigotmc-api" target="_blank">![](https://img.shields.io/npm/v/spigotmc-api?color=blue)</a> <a href="https://www.npmjs.com/package/spigotmc-api" target="_blank">![](https://img.shields.io/npm/dm/spigotmc-api?color=blue)</a>

A simple wrapper around [XenforoResourceManagerAPI](https://github.com/SpigotMC/XenforoResourceManagerAPI)(An API that exposes some SpigotMC information)

# Installation

```bash
# Use your own package manager
npm install -S spigotmc-api
```

# Usage

```ts
import { SpigotAPI } from "spigotmc-api";

const api = new SpigotAPI();

const authorResponse = await api.author.find("xrexy");
if (authorResponse.status === "error") {
  console.log(authorResponse.error, authorResponse.code);
  console.log(authorResponse.exception);
  return;
}

const author = authorResponse.value;
if (author === null) {
  console.log("Author not found");
  return;
}

const resourcesResponse = await api.resource.byAuthor(author.id.toString());
if (resourcesResponse.status === "success") {
  console.log(
    `Found ${resourcesResponse.value.length} resources by ${author.username}`
  );
}
```
