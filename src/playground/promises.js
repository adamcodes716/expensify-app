const promise = new Promise((resolve, reject) => {
     //resolve('This is my resolve data');
     reject('something went wrong')
});

promise.then((data) => { // runs on completion of promise
    console.log(data);
}).catch((error) => {
console.log('error ', error);
});