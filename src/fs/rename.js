import fs from "node:fs/promises"
import path from "node:path"

const rename = async () => {
  const failMessage = "FS operation failed";
  const basePath = path.join('src', 'fs', 'files');
  const wrongFileName = path.join(basePath, 'wrongFilename.txt');
  const fixedFileName = path.join(basePath, 'properFilename.md')

  try {
    await fs.rename(wrongFileName, fixedFileName)
  } catch (err) {
    if (err.code === "ENOENT" || err.code === "EEXIST") {
      throw new Error(failMessage);
    }
    throw err;
  }
};

await rename();
