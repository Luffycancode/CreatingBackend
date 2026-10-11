let fs= require('fs');
let path='/Users/omkarjoshi/Documents/imp/CodePracs/March_new/23M/largefile.txt';
let before= Date.now();
fs.readFileSync(path,'utf-8');
console.log(`${Date.now()-before}`)

