// This file only serves for deployment purposes for the playground
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use("/playground-dist", express.static(__dirname + '/playground-dist'));

app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname + "/playground" } );
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


