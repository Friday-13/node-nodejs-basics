import {createReadStream} from "node:fs";
import path from "node:path";
import process from "node:process"

const read = async () => {
  const filePath = path.join('src', 'streams', 'files', 'fileToRead.txt');
  const readStream = createReadStream(filePath);
  readStream.on("data", (chunk) => {process.stdout.write(chunk)})
  readStream.on("end", () => {process.stdout.write("\n")})
};

await read();
