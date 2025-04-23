import fs from "node:fs/promises"
import path from "node:path"

const read = async () => {
  const failMessage = "FS operation failed";
  const filePath = path.join("src", "fs", "files", "fileToRead.txt");
  
  try {
    const content = await fs.readFile(filePath, {encoding: "utf-8"});
    console.log(content);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error(failMessage);
    }
    throw err
  }
};

await read();
