import { parseSpigotAuthor } from "src/parser";
import { Result, SpigotAuthor } from "src/types";
import { SpigotApiAction, craftSpigotApiUrl } from ".";

export async function getAuthor(id: string): Promise<Result<SpigotAuthor>> {
  const params = new URLSearchParams();
  params.append("id", id);

  const url = craftSpigotApiUrl(SpigotApiAction.GET_AUTHOR, params);

  const response = await fetch(url.toString());
  if (response.ok) {
    try {
      return {
        status: "success",
        value: parseSpigotAuthor(await response.json()),
      };
    } catch (e) {
      return {
        status: "error",
        error: "Failed to parse response",
        exception: e,
      };
    }
  }

  return {
    status: "error",
    error: "Failed to fetch resources",
  };
}

export async function findAuthor(
  name: string
): Promise<Result<SpigotAuthor | null>> {
  const params = new URLSearchParams();
  params.append("name", name);

  const url = craftSpigotApiUrl(SpigotApiAction.FIND_AUTHOR, params);

  const response = await fetch(url.toString());
  if (response.ok) {
    try {
      return {
        status: "success",
        value: parseSpigotAuthor(await response.json()),
      };
    } catch (e) {
      return {
        status: "error",
        error: "Failed to parse response",
        exception: e,
      };
    }
  }

  if (response.status === 404) {
    return {
      status: "success",
      value: null,
    };
  }

  return {
    status: "error",
    error: "Failed to fetch resources",
  };
}
