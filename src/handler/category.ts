import type { Result, SpigotCategory } from "src/types";
import { SpigotApiAction, craftSpigotApiUrl } from ".";

export async function listCategories(): Promise<Result<SpigotCategory[]>> {
  const url = craftSpigotApiUrl(SpigotApiAction.LIST_RESOURCE_CATEGORIES);

  const response = await fetch(url.toString());
  if (response.ok) {
    try {
      return {
        status: "success",
        value: await response.json(),
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
