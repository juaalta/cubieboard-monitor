var express = require('express');
var app = express();
//var fs = require("fs");
//var util = require('util')
var exec = require('child_process').exec;
var child;

var logger = require('express-logger');
//var bodyParser = require('body-parser');
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
//app.use(bodyParser());
//For delete and put API methods
app.use(methodOverride());

/*
 * Servicios Rest
 */

//Obtención de la temperatura general de la CPU
app.get('/CPU_Temp', function(req, res) {
    child = exec("./scripts/CPU_Temp.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})

//Obtención del uso general de la CPU
app.get('/CPU_Uso', function(req, res) {
    child = exec("./scripts/CPU_Uso.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})

//Obtención del uso de la CPU por cada uno de sus 2 cores
app.get('/CPU_Uso_Cores', function(req, res) {

    var result = [];

    child = exec("./scripts/CPU_Uso_Cores.sh 0", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        result.push({
            core: 0,
            var: stdout
        });
        child = exec("./scripts/CPU_Uso_Cores.sh 1", function(error2, stdout2, stderr2) {
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
    child = exec("./scripts/CPU_Temp_Cores.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }

        var result = [];
        var filas = stdout.split("\n");

        if (filas.length > 0) {
            //La última fila siempre esta vacía
            for (i = 0; i < filas.length - 1; i++) {
                var columnas = filas[i].split(" ");
                if (columnas.length > 0) {
                    result.push({
                        core: columnas[0],
                        temp: columnas[1]
                    });
                }
            }
        }

        res.contentType('application/json');
        console.log("Resultado: " + result);
        console.log("Resultado: " + JSON.stringify(result));
        res.send(JSON.stringify(result));
    });

})

//Obtención del uso general de la CPU
app.get('/CPU_Info', function(req, res) {
    child = exec("./scripts/CPU_Info.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})



//Obtención de la temperatura del HDD
app.get('/HDD_Temp', function(req, res) {
    child = exec("./scripts/HDD_Temp.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})

//Obtención del uso del HDD
app.get('/HDD_Uso', function(req, res) {
    child = exec("./scripts/HDD_Uso.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})

//Obtención de la información SMART del disco duro
app.get('/HDD_smart', function(req, res) {
    child = exec("./scripts/HDD_smart.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout);
    });
})

//Obtención del uso del espacio de las particiones montadas
app.get('/HDD_Uso_Particiones', function(req, res) {
    child = exec("./scripts/HDD_Uso_Particiones.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }

        var result = [];
        var filas = stdout.split("\n");
        //Se mira si es mayor que 1, ya que la primera línea contiene la cabecera y no nos interesa
        if (filas.length > 1) {
            //La última fila siempre esta vacía
            for (i = 1; i < filas.length - 1; i++) {
                var columnas = filas[i].split(" ");
                if (columnas.length > 0) {
                    result.push({
                        particion: columnas[0],
                        tamano: columnas[1],
                        usado: columnas[2],
                        uso: columnas[3]
                    });
                }
            }
        }

        res.contentType('application/json');
        //console.log("Resultado: " + result);
        //console.log("Resultado: " + JSON.stringify(result));
        res.send(JSON.stringify(result));
    });
})


//Obtención del nombre de la máquina.
app.get('/SYS_hostname', function(req, res) {
    child = exec("./scripts/SYS_hostname.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.end(stdout)
    });
})

//Apagado de la máquina.
app.get('/SYS_shutdown', function() {
    child = exec("./scripts/SYS_shutdown.sh", function(error, stdout, stderr) {
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
    res.sendFile('./index.html');
});

//Configuración del puerto en el que se serviran los servicios web.
var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Servidor rest arrancado en: http://%s:%s", host, port)

})


