var fs=require('fs');
var express=require('express');
var app=express();

app.set('port', process.env.PORT || 3030);

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/template'));

var server=app.listen(app.get('port'), function() {
    console.log("We have started our server at", app.get('port'));
});
