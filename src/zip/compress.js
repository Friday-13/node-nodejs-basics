import path  from "node:path"
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs"
import { createGzip } from "node:zlib";

const compress = async () => {
  const sourcePath = path.join("src", "zip", "files", "fileToCompress.txt");
  const targetPath = path.join("src", "zip", "files", "archive.gz");
  const readStram = createReadStream(sourcePath);
  const writeStream = createWriteStream(targetPath)
  const zipStream = createGzip();
  await pipeline(readStram, zipStream, writeStream);
};

await compress();
