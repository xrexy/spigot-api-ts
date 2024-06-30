import { parseSpigotAuthor } from "src/parser";
import { delegatedHandler } from "src/utils/handler";
import { SpigotApiAction, craftSpigotApiUrl } from ".";

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
