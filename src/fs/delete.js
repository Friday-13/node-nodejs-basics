import fs from "node:fs/promises"
import path from "node:path"

const remove = async () => {
  const failMessage = "FS operation failed";
  const filePath = path.join("src", "fs", "files", "fileToRemove.txt")
  try {
    await fs.rm(filePath)
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error(failMessage);
    }
    throw err;
  } 
    
};

await remove();
