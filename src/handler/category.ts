import type { SpigotCategory } from "src/types";
import { delegatedHandler } from "src/utils/handler";
import { SpigotApiAction, craftSpigotApiUrl } from ".";

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
