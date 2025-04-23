import process from 'node:process';

const parseArgs = () => {
  console.log(process.argv)
  const cliArgs = process.argv.slice(2).reduce((args, value) => {
    if (value.startsWith('--')) {
      args.push([ null, null ])
      args[args.length - 1][0] = value.slice(2);
    } else if (args.length > 0) {
      args[args.length - 1][1] = value;
    }
    return args;
  }, [])
  const cliArgsFormated = cliArgs.map(([ key, value ]) => `${key} is ${value}`)
  console.log(cliArgsFormated.join(', '))
};

parseArgs();
