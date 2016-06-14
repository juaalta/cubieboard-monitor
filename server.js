var express = require('express');
var app = express();
var fs = require("fs");
var util = require('util')
var exec = require('child_process').exec;
var child;

// Configuración
app.configure(function() {
    // Localización de los ficheros estÃ¡ticos
    app.use(express.static(__dirname + '/'));
    // Muestra un log de todos los request en la consola
    app.use(express.logger('dev'));
    // Permite cambiar el HTML con el método POST
    app.use(express.bodyParser());
    // Simula DELETE y PUT
    app.use(express.methodOverride());
});


app.get('/CPUTemp', function (req, res) {
  // executes `pwd`
  child = exec("./scripts/temperatura.sh", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    res.end(stdout)
  });
})

app.get('/varCPU', function (req, res) {
  // executes `pwd`
  child = exec("./scripts/var_CPU.sh", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    res.end(stdout)
  });
})

app.get('/hostname', function (req, res) {
  // executes `pwd`
  child = exec("hostname", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    res.end(stdout)
  });
})

// Carga una vista HTML simple donde irá nuestra Single App Page
// Angular Manejará el Frontend
app.get('*', function(req, res) {
    res.sendfile('./index.html');
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Servidor rest arrancado en: http://%s:%s", host, port)

})
