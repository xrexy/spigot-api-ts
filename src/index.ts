export class SpigotAPI {
  public get resource() {
    return {
      all: () => [],
    };
  }

  public get update() {
    return {};
  }

  public get author() {
    return {};
  }
}

export * from "./handler/index";
export { getResourcesByCategory } from "./handler/resource";
export * from "./types";

export default SpigotAPI;
