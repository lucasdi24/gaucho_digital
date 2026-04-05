import fs from "fs";
import path from "path";

const CONFIG_PATH = path.join(process.cwd(), "image-config.json");

export type ImageConfig = Record<string, string | null>;

export function readImageConfig(): ImageConfig {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function writeImageConfig(config: ImageConfig): void {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
}
