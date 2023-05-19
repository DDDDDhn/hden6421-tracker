const express = require('express');
// import the express package


const app = express();
// Initialise the express framework

app.use(express.static('public'));
// Serve static files from the public folder

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})
//    Serve the index file for the root ("/") path

let server = app.listen(8888, function(){
    console.log("App server is running on port 8888");
});
// Start the server, listening for incoming traffic and logging a message to the console

