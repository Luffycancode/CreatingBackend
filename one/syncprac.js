const fs= require('fs');

const time=Date.now();
const dataa= fs.readFileSync('random.txt','utf8')

console.log( `${Date.now()-time} ms`)
console.log('testing');
// console.log(read);

// This is sync code and which is without callback function
// So it will block the main thread until job gets over
