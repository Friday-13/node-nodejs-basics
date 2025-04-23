import process from "node:process"

const parseEnv = () => {
  const prefix = 'RSS_';
  const envPairs = Object.entries(process.env)
  const rssEnvs = envPairs.filter(([key]) => key.startsWith(prefix))
  const rssEnvFormatedStrings = rssEnvs.map(([key, value]) => `${key}=${value};`)
  const output = rssEnvFormatedStrings.join(' ');
  console.log(output)
};

parseEnv();
