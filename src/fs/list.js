import fs from "node:fs/promises"
import path from "node:path"

const list = async () => {
  const failMessage = "FS operation failed";
  const dirPath = path.join("src", "fs", "files");

  try {
    const files = await fs.readdir(dirPath);
    console.log(files)
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error(failMessage);
    }
    throw err
  }
};

await list();
