import { SpigotApiAction, craftSpigotApiUrl } from ".";
import { SpigotResourceUpdate } from "../types";
import { delegatedHandler } from "../utils/handler";

export async function getResourceUpdate(updateId: string) {
  const params = new URLSearchParams();
  params.append("id", updateId);

  const url = craftSpigotApiUrl(SpigotApiAction.GET_RESOURCE_UPDATE, params);

  const response = await fetch(url.toString());
  return delegatedHandler(response, (data: SpigotResourceUpdate) => ({
    status: "success",
    value: data,
  }));
}

export async function getAllResourceUpdates(resourceId: string, page?: string) {
  const params = new URLSearchParams();
  params.append("id", resourceId);
  if (page) params.append("page", page);

  const url = craftSpigotApiUrl(SpigotApiAction.GET_RESOURCE_UPDATES, params);

  const response = await fetch(url.toString());
  return delegatedHandler(response, (data: SpigotResourceUpdate) => ({
    status: "success",
    value: data,
  }));
}
