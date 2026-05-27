const cluster= require('cluster')
const { pid } = require('process')



// if(cluster.isPrimary)
// {
//     cluster.fork()
//     cluster.fork()
// }
// else
// {
// console.log(pid)
// for(let i = 0; i < 1000000000; i++)
// {
//     Math.sqrt(i)
// }
// console.log(pid)
// for(let i = 0; i < 1000000000; i++)
// {
//     Math.sqrt(i)
// }
// }

// Here both processes will run both the for loops and print 2 times. So single for lopp for each process to seperate code is


// -> 
if(cluster.isPrimary)
{
    cluster.fork()
    cluster.fork()
}

if(cluster.worker.id==1)
{
    console.log('Working from no 1 process/worker. Process id is ',pid)
    for(let i = 0; i < 1000000000; i++)
        {
            Math.sqrt(i)
        }
        setInterval(() => {}, 10000);
}
if(cluster.worker.id==2)
{
    console.log('Working from no 2 process/worker. Process id is ',pid)
    for(let i = 0; i < 1000000000; i++)
        {
            Math.sqrt(i)
        }
        setInterval(() => {}, 10000);
}







