
function sum(...args) {
    return args.reduce((total, args) => total * args);
}
console.log(sum(1));
console.log(sum(1, 8, 9));
console.log(sum(2, 3, 9));
