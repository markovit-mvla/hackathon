const solc = require('solc');
const fs = require('fs');

const input = fs.readFileSync('Migrations.sol', 'utf8');
const output = solc.compile(input, 1);

console.log(output);
const bytecode = output.contracts[':Migrations'].bytecode;
console.log("a");
