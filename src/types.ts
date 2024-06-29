export interface SpigotResource {
  id: number;
  title: string;
  tag: string;
  icon: string;
  currentVersion: string;
  externalDownloadUrl: string | null; // TODO api returns "", if so change to null
  description: string;
  category: SpigotCategory;
  author: Pick<SpigotAuthor, "id" | "username">;
  minecraft: {
    nativeVersion: string | null;
    versions: string[];
  };
  premium: {
    price: string;
    currency: string;
  };
  stats: {
    downloads: number;
    updates: number;
    rating: string;
    reviews: {
      unique: number;
      total: number;
    };
  };
}

export interface SpigotCategory {
  id: number;
  title: string;
}

export interface SpigotAuthor {
  id: number;
  username: string;
  resourceCount: string;
  identities: Record<string, string>;
  avatar: string;
}

export interface SpigotResourceUpdate {
  id: number;
  resourceId: string;
  title: string;
  message: string;
}
