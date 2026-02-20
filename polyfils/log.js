const originalLog = console.log;

console.log = function (...args) {
  const modifiedArgs = args.map(arg => {
    if (arg === 'rishabh') {
      return 'rishabh parsediya';
    }
    return arg;
  });

  originalLog.apply(console, modifiedArgs);
};

// Test
console.log('rishabh'); // rishabh parsediya
console.log('hello');   // hello