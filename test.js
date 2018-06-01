const {exec} = require('child_process');

function commandLinePromise(){
    return new Promise((resolve, reject) => {
        exec('ps aux', (err, stdout, stderr)=> {
            if(err){
                reject(err)
            }else{
                resolve(stdout)
            }
        })
    })   
}
commandLinePromise().then(() => exec('npm run build', (err, stdout, stderr)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(stdout);
    }
}))


