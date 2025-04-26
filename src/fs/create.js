import fs from "node:fs/promises";
import path from "node:path";

const create = async () => {
  const failedMessage = "FS operation failed";
  const filePath = path.join('src', 'fs', 'files', 'fresh.txt');
  try {
    const content = "I am fresh and young";
    await fs.writeFile(filePath, content, {flag : 'ax'});
  } catch (err) {
    if (err.code === "EEXIST") {
      throw new Error(failedMessage)
    } else {
      throw err;
    }
  }
};

await create();
