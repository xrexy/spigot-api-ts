import { SpigotApiAction, craftSpigotApiUrl } from ".";
import { parseSpigotAuthor } from "../parser";
import { delegatedHandler } from "../utils/handler";

export async function getAuthor(id: string) {
  const params = new URLSearchParams();
  params.append("id", id);

  const url = craftSpigotApiUrl(SpigotApiAction.GET_AUTHOR, params);

  const response = await fetch(url.toString());
  return delegatedHandler(response, (data) => ({
    status: "success",
    value: parseSpigotAuthor(data),
  }));
}

export async function findAuthor(name: string) {
  const params = new URLSearchParams();
  params.append("name", name);

  const url = craftSpigotApiUrl(SpigotApiAction.FIND_AUTHOR, params);

  const response = await fetch(url.toString());
  return delegatedHandler(response, (data) => ({
    status: "success",
    value: parseSpigotAuthor(data),
  }));
}
