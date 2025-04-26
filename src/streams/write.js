import {createWriteStream} from "node:fs"
import path from "node:path";
import process from "node:process"
import { pipeline } from "node:stream/promises";

const write = async () => {
  const filePath = path.join('src', 'streams', 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(filePath)
  await pipeline(process.stdin, writeStream);
};

await write();
