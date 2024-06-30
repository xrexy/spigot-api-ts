import { SpigotApiAction, craftSpigotApiUrl } from ".";
import type { SpigotCategory } from "../types";
import { delegatedHandler } from "../utils/handler";

export async function listCategories() {
  const url = craftSpigotApiUrl(SpigotApiAction.LIST_RESOURCE_CATEGORIES);

  const response = await fetch(url.toString());
  return delegatedHandler(response, (data: SpigotCategory[]) => {
    return {
      status: "success",
      value: data,
    };
  });
}
