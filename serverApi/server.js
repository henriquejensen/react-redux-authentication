var express = require('express');
var app     = express();

app.get('/', function(req,res){
    console.log("test API", req.body);
});

app.listen(8000, function() {
    console.log('listening to this joint on port 3000');
})