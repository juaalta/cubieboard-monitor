var express = require('express');
var app = express();
var fs = require("fs");
var util = require('util')
var exec = require('child_process').exec;
var child;

var logger = require('express-logger');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

/*
 * Configuración
 */

/*app.configure(function() {
    // Localización de los ficheros estÃ¡ticos
    app.use(express.static(__dirname + '/'));
    // Muestra un log de todos los request en la consola
    app.use(express.logger('dev'));
    // Permite cambiar el HTML con el método POST
    app.use(express.bodyParser());
    // Simula DELETE y PUT
    app.use(express.methodOverride());
});*/

//File localization
app.use(express.static(__dirname + '/'));
// Show a log of every request in the terminal console
app.use(logger({
    path: "logfile.txt"
}));
//Change html
app.use(bodyParser());
//For delete and put API methods
app.use(methodOverride());

/*
 * Servicios Rest
 */

//Obtención de la temperatura general de la CPU
app.get('/CPUTemp', function(req, res) {
    child = exec("./scripts/temperatura.sh", function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})

//Obtención del uso general de la CPU
app.get('/varCPU', function(req, res) {
    child = exec("./scripts/var_CPU.sh", function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})

//Obtención del uso general de la CPU
app.get('/varCPUCores', function(req, res) {
    var result = []
    child = exec("./scripts/var_CPU_id.sh 0", function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        result.push({
            core: 0,
            var: stdout
        });
    });

    child = exec("./scripts/var_CPU_id.sh 1", function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        result.push({
            core: 1,
            var: stdout
        });
    });

    res.contentType('application/json');
    console.log(result);
    res.send(JSON.stringify(result));
})

//Obtención de la temperatura del HDD
app.get('/CPUTemp', function(req, res) {
    child = exec("sudo hddtemp /dev/sda | awk '{print $4d}'", function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})


//Obtención del nombre de la máquina.
app.get('/hostname', function(req, res) {
    child = exec("hostname", function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})

//Apagado de la máquina.
app.get('/shutdown', function() {
    child = exec("sudo shutdown -h 0", function(error, stdout, stderr) {
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

//Configuración del puerto en el que se serviran los servicios web.
var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Servidor rest arrancado en: http://%s:%s", host, port)

})
