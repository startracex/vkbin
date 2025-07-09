#!/usr/bin/env node
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { getPackagesSync } from "@manypkg/get-packages";

const getBinFiles = (bin) => {
  if (!bin) {
    return [];
  }
  return [...new Set((typeof bin === "string" ? [bin] : Object.values(bin)).filter(Boolean))];
};

const ensureFileExist = (file, data = "") => {
  if (!existsSync(file)) {
    mkdirSync(dirname(file), {
      recursive: true,
    });
    writeFileSync(file, data);
  }
};

const { packages } = getPackagesSync(process.cwd());

for (const pkg of packages) {
  for (const binFile of getBinFiles(pkg.packageJson.bin)) {
    const target = join(pkg.dir, binFile);
    ensureFileExist(target, "");
  }
}
