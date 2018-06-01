const {exec} = require('child_process');





exec('./test.sh');
// function commandLinePromise(){
//     return new Promise((resolve, reject) => {
//         exec('git pull', (err, stdout, stderr)=> {
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(stdout)
//             }
//         })
//     })   
// }
// commandLinePromise().then(() => exec('npm run build', (err, stdout, stderr)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(stdout);
//     }
// }))


