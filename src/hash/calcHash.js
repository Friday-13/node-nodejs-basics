import { createHash } from "node:crypto"
import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import process from "node:process"
import path from "node:path"

const calculateHash = async () => {
  const secret = 'super-secret'
  const filePath = path.join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');
  const readStream = createReadStream(filePath);
  const hmac = createHash('sha256', secret);
  await pipeline(readStream, hmac);
  process.stdout.write(hmac.digest('hex'));
  process.stdout.write('\n');
};

await calculateHash();
