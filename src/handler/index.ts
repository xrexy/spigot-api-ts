export const SPIGOT_API_URL = "https://api.spigotmc.org/simple/0.2/index.php";

export enum SpigotApiAction {
  LIST_RESOURCES = "listResources",
  GET_RESOURCE = "getResource",
  GET_RESOURCE_BY_AUTHOR = "getResourceByAuthor",
  LIST_RESOURCE_CATEGORIES = "listResourceCategories",
  GET_RESOURCE_UPDATE = "getResourceUpdate",
  GET_RESOURCE_UPDATES = "getResourceUpdates",
  GET_AUTHOR = "getAuthor",
  FIND_AUTHOR = "findAuthor",
}

export function craftSpigotApiUrl(
  action: SpigotApiAction,
  params?: URLSearchParams
) {
  const url = new URL(`${SPIGOT_API_URL}?action=${action}`);
  params?.forEach((value, key) => url.searchParams.append(key, value));

  return url;
}

export { findAuthor, getAuthor } from "./author";
export { listCategories } from "./category";
export {
  getResourceById,
  getResourcesByAuthor,
  getResourcesByCategory,
} from "./resource";
export { getAllResourceUpdates, getResourceUpdate } from "./update";
