import process from "node:process"
import {pipeline} from "node:stream/promises"
import {Transform} from "node:stream"

const transform = async () => {
  class ReverseTransform extends Transform {
    _transform(chunk, _encoding, callback) {
      const pieceOfString = chunk.toString('utf8');
      callback(null, pieceOfString.split("").reverse().join(""))
    }
  }
  const reverseStream = new ReverseTransform();
  await pipeline(process.stdin, reverseStream, process.stdout);
};

await transform();
