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
app.get('/CPU_Temp', function(req, res) {
    child = exec("./scripts/temp_CPU.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})

//Obtención del uso general de la CPU
app.get('/CPU_Uso', function(req, res) {
    child = exec("./scripts/var_CPU.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})

//Obtención del uso de la CPU por cada uno de sus 2 cores
app.get('/CPU_Uso_Cores', function(req, res) {

    var result = [];

    child = exec("./scripts/var_CPU_id.sh 0", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        result.push({
            core: 0,
            var: stdout
        });
        child = exec("./scripts/var_CPU_id.sh 1", function(error2, stdout2, stderr2) {
            if (error2 !== null) {
                console.log('exec error: ' + error2);
            }
            result.push({
                core: 1,
                var: stdout
            });
            res.contentType('application/json');
            //console.log("Resultado: " + result);
            //console.log("Resultado: " + JSON.stringify(result));
            res.send(JSON.stringify(result));
        });
    });

})

//Obtención de la temperatura de la CPU por cada uno de sus 2 cores
app.get('/CPU_Temp_Cores', function(req, res) {

    var result = [];

    child = exec("./scripts/temp_CPU_id.sh 0", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        result.push({
            core: 0,
            temp: stdout
        });
        child = exec("./scripts/temp_CPU_id.sh 1", function(error2, stdout2, stderr2) {
            if (error2 !== null) {
                console.log('exec error: ' + error2);
            }
            result.push({
                core: 1,
                temp: stdout
            });
            res.contentType('application/json');
            //console.log("Resultado: " + result);
            //console.log("Resultado: " + JSON.stringify(result));
            res.send(JSON.stringify(result));
        });
    });

})

//Obtención del uso general de la CPU
app.get('/CPU_Info', function(req, res) {
    child = exec("cat /proc/cpuinfo", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})


//Obtención de la temperatura del HDD
app.get('/HDD_Temp', function(req, res) {
    child = exec("./scripts/temp_HDD.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})

//Obtención del uso del HDD
app.get('/HDD_Uso', function(req, res) {
    child = exec("./scripts/var_HDD.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})



//Obtención del nombre de la máquina.
app.get('/hostname', function(req, res) {
    child = exec("hostname", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})

//Apagado de la máquina.
app.get('/shutdown', function() {
    child = exec("sudo shutdown -h 0", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });

})

/*
 * Configuración conexión
 */

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
