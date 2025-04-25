import {fork} from "node:child_process"
import path from "node:path";
import process from "node:process"

const spawnChildProcess = async (args) => {
  const scriptPath = path.join('src', 'cp', 'files', 'script.js')
  const childProcess = fork(scriptPath, args);
  process.on('message', (message) => childProcess.stdin(message))
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['hehe', 'haha']);
