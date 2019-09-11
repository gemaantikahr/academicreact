var express = require('express');
var bp = require('body-parser');
var app = express();

app.use(bp.urlencoded({extended : true}));
app.use(bp.json());

var route = require('./routes');
route(app);

app.listen(8000, ()=>{
    console.log("running at 8000 port");
})