import { findAuthor, getAuthor } from "./handler/author";
import { listCategories } from "./handler/category";
import {
  getResourceById,
  getResourcesByAuthor,
  getResourcesByCategory,
} from "./handler/resource";
import { getAllResourceUpdates, getResourceUpdate } from "./handler/update";

export class SpigotAPI {
  public get resource() {
    return {
      byCategory: getResourcesByCategory.bind(this),
      byId: getResourceById.bind(this),
      byAuthor: getResourcesByAuthor.bind(this),
    };
  }

  public get update() {
    return {
      byId: getResourceUpdate.bind(this),
      byResource: getAllResourceUpdates.bind(this),
    };
  }

  public get author() {
    return {
      byId: getAuthor.bind(this),
      find: findAuthor.bind(this),
    };
  }

  public get category() {
    return {
      list: listCategories.bind(this),
    };
  }
}

export * from "./handler";
export * from "./types";

export default SpigotAPI;
