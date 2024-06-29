import { SpigotApiAction, craftSpigotApiUrl } from ".";
import { parseSpigotResource } from "../parser";
import { SpigotResource } from "../types";

export async function getResourcesByCategory(
  options: Partial<{
    categoryId: string;
    page: number;
  }>
): Promise<SpigotResource[]> {
  const params = new URLSearchParams();
  if (options.categoryId) params.append("category", options.categoryId);
  if (options.page) params.append("page", options.page.toString());

  const url = craftSpigotApiUrl(SpigotApiAction.LIST_RESOURCES, params);
  console.log(url.toString());

  const response = await fetch(url.toString());
  if (response.ok) {
    const json = await response.json();
    return json.map(parseSpigotResource);
  }

  console.error(await response.text());

  return [];
}
