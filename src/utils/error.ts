export function parsedSpigotError(json: any): {
  status: "error";
  error: string;
  code?: number;
} {
  if (typeof json.code !== "number" || typeof json.message !== "string") {
    return {
      status: "error",
      error: "Received an invalid response.",
    };
  }

  if (json.code >= 500) {
    return {
      status: "error",
      error: "Internal server error",
      code: json.code,
    };
  }

  return {
    status: "error",
    error: json.message,
    code: json.code,
  };
}
