var doIt = (...args) => console.log(args.join(''))

doIt("a");  // outputs a
doIt("a", "b"); // outputs ab
doIt("a", "b", "c"); // outputs abc