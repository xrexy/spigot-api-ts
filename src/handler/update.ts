import { Result, SpigotResourceUpdate } from "src/types";
import { SpigotApiAction, craftSpigotApiUrl } from ".";

export async function getResourceUpdate(
  updateId: string
): Promise<Result<SpigotResourceUpdate>> {
  const params = new URLSearchParams();
  params.append("id", updateId);

  const url = craftSpigotApiUrl(SpigotApiAction.GET_RESOURCE_UPDATE, params);

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

export async function getAllResourceUpdates(
  resourceId: string,
  page?: string
): Promise<Result<SpigotResourceUpdate>> {
  const params = new URLSearchParams();
  params.append("id", resourceId);
  if (page) params.append("page", page);

  const url = craftSpigotApiUrl(SpigotApiAction.GET_RESOURCE_UPDATES, params);

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
