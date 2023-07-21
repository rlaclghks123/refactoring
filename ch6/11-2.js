import { readJSON } from '../fileController.js';

class Order {
  product = {};
  constructor(product) {
    this.product = product;
  }
}

class CommandLine {
  argv;

  constructor(argv) {
    this.argv = argv;
    if (argv.length === 0) throw new Error('파일명을 입력하세요');
  }
  get onlyCountReady() {
    return this.argv.includes('-r');
  }
  get filename() {
    return this.argv[this.argv.length - 1];
  }
}

function countOrders(commandLine) {
  const input = readJSON(commandLine.filename);
  const orders = input.map((item) => new Order(item));

  if (commandLine.onlyCountReady) {
    const readyOrders = orders.filter((o) => o.product.status === 'ready');
    return 'ready', readyOrders.length;
  } else {
    return 'not ready', orders.length;
  }
}

const main = (argv) => {
  try {
    console.log(countOrders(new CommandLine(argv)));
  } catch (err) {
    console.error(err);
  }
};

main(process.argv.slice(2));
