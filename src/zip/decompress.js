import path  from "node:path"
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs"
import {  createUnzip } from "node:zlib";

const decompress = async () => {
  const sourcePath = path.join("src", "zip", "files", "archive.gz");
  const targetPath = path.join("src", "zip", "files", "fileToCompress.txt");
  const readStram = createReadStream(sourcePath);
  const writeStream = createWriteStream(targetPath)
  const unzipStream = createUnzip();
  await pipeline(readStram, unzipStream, writeStream);
};

await decompress();
