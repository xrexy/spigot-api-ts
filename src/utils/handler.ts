import { Result } from "../types";
import { parsedSpigotError } from "./error";

export async function delegatedHandler<Input = unknown, Output = any>(
  response: Response,
  cb: (data: Input) => Result<Output>
): Promise<Result<Output extends Array<any> ? Output : Output | null>> {
  let json = null;
  try {
    json = await response.json();
  } catch (e) {
    return {
      status: "error",
      error: "Failed to parse response",
      exception: e,
    };
  }

  if (response.status === 404 && !Array.isArray(json)) {
    return {
      status: "success",
      // @ts-expect-error ts can't properly infer the type
      value: null,
    };
  }

  if (response.status === 200) {
    // @ts-expect-error ts can't properly infer the type
    return cb(json);
  }

  return parsedSpigotError(json);
}
