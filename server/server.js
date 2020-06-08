const path = require('path');
const express = require('express'); // node way of including libraries
const app = express();  // we now have an express app
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // if no port use 3000

app.use(express.static(publicPath)); // we will take the return value from express (a function);

app.get('*', (req, res) => { //necessary to handle routing issues
   res.sendFile(path.join(publicPath, 'index.html'));  
});

app.listen(port, () => {
    console.log('server is up');    // callback function when server is running
});

