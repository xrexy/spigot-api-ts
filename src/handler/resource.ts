import { SpigotApiAction, craftSpigotApiUrl } from ".";
import { parseSpigotResource } from "../parser";
import { Result, SpigotResource } from "../types";

export async function getResourcesByCategory(
  options: Partial<{
    categoryId: string;
    page: number;
  }>
): Promise<Result<SpigotResource[]>> {
  const params = new URLSearchParams();
  if (options.categoryId) params.append("category", options.categoryId);
  if (options.page) params.append("page", options.page.toString());

  const url = craftSpigotApiUrl(SpigotApiAction.LIST_RESOURCES, params);

  const response = await fetch(url.toString());
  if (response.ok) {
    try {
      const json = await response.json();
      return {
        status: "success",
        value: json.map(parseSpigotResource),
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

export async function getResourceById(
  id: string
): Promise<Result<SpigotResource>> {
  const params = new URLSearchParams();
  params.append("id", id);

  const url = craftSpigotApiUrl(SpigotApiAction.GET_RESOURCE, params);
  const response = await fetch(url.toString());
  if (response.ok) {
    try {
      const json = await response.json();
      return {
        status: "success",
        value: parseSpigotResource(json),
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
    error: "Failed to fetch resource",
  };
}

export async function getResourcesByAuthor(
  id: string,
  page?: number
): Promise<Result<SpigotResource[]>> {
  const params = new URLSearchParams();
  params.append("id", id);
  if (page) params.append("page", page.toString());

  const url = craftSpigotApiUrl(SpigotApiAction.GET_RESOURCE_BY_AUTHOR, params);

  const response = await fetch(url.toString());
  if (response.ok) {
    try {
      const json = await response.json();
      return {
        status: "success",
        value: json.map(parseSpigotResource),
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
