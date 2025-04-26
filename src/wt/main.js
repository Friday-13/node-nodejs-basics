import {cpus} from "node:os"
import path from "node:path";
import {Worker} from "node:worker_threads"

const pathToWorker = path.resolve("src", "wt", "worker.js");

const createWorkerPromise =
    (data) => {
      const promise = new Promise((resolve) => {
        const worker = new Worker(pathToWorker, {
          workerData : 10 + data,
        });

        worker.on("message",
                  (value) => {resolve({status : 'resolved', data : value})})
        worker.on("error", () => {resolve({status : 'error', data : null})})
      });
      return promise;
    }

const performCalculations = async () => {
  const queue = [];
  const nWorkers = cpus().length;

  for (let i = 0; i < nWorkers; i += 1) {
    const workerPromise = createWorkerPromise(i);
    queue.push(workerPromise)
  }
  const res = await Promise.all(queue);
  console.log(res)
};

await performCalculations();
