const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Andrew',
        age: 26
      });
      // reject('Something went wrong!');
    }, 5000);
  });
  
  console.log('before');
  
  promise.then((data) => {  // first promise
    console.log('1', data);  
  
    return 'some data';
  }).then((str) => {    // second promise.  It receives data from successful first promise
    console.log('does this run?', str);
  }).catch((error) => {
    console.log('error: ', error);
  });
  
  console.log('after');
  