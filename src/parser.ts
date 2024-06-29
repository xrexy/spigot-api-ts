import { SpigotResource } from "./types";

export function parseSpigotResource(json: any): SpigotResource {
  return {
    id: json.id,
    title: json.title,
    tag: json.tag,
    currentVersion: json.current_version,
    category: json.category,
    minecraft: {
      nativeVersion: json.native_minecraft_version || null,
      versions: json.supported_minecraft_versions || [],
    },
    author: json.author,
    premium: json.premium,
    stats: json.stats,
    externalDownloadUrl: json.external_download_url || null,
    description: json.description,
    icon: json.icon_link,
  };
}
