import fs from "node:fs/promises"
import path from "node:path"

const copy = async () => {
  const pathOrigin = path.join('src', 'fs', 'files');
  const pathTarget = path.join('src', 'fs', 'files_copy');
  const failedMessage = "FS operation failed";

  try {
    const files = await fs.readdir(pathOrigin);
    await fs.mkdir(pathTarget);
    files.map((file) => {
      const fileName = path.join(pathOrigin, file);
      const dest = path.join(pathTarget, file);
      fs.copyFile(fileName, dest);
    })
  } catch (err) {
    if (err.code === "EEXIST" || err.code === "ENOENT") {
      throw new Error(failedMessage)
    } else {
      throw err;
    }
  }
};

await copy();
