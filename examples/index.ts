import { getResourcesByCategory } from "spigot-api-ts";

console.log("test");

getResourcesByCategory({
  categoryId: "23",
}).then(console.log);
