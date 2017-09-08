# Monitor basado en AngularJs y NodeJs para la Cubietruck (Cubieboard 3)

[![dependencies Status](https://david-dm.org/juaalta/cubieboard-monitor/status.svg)](https://david-dm.org/juaalta/cubieboard-monitor)
[![devDependencies Status](https://david-dm.org/juaalta/cubieboard-monitor/dev-status.svg)](https://david-dm.org/juaalta/cubieboard-monitor?type=dev)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/704/badge)](https://bestpractices.coreinfrastructure.org/projects/704)
[![Build Status](https://travis-ci.org/juaalta/cubieboard-monitor.svg?branch=master)](https://travis-ci.org/juaalta/cubieboard-monitor)
[![license](https://img.shields.io/badge/license-MIT%20License-blue.svg)](https://choosealicense.com/licenses/mit/)
[![Known Vulnerabilities](https://snyk.io/test/github/juaalta/cubieboard-monitor/badge.svg)](https://snyk.io/test/github/juaalta/cubieboard-monitor)

Para realizarlo me he basado en la plantilla **[AdminLTE](https://almsaeedstudio.com/themes/AdminLTE/index2.html)** de **[Almsaeed Studio](https://almsaeedstudio.com)**

## Uso

Para arrancarlo en la Cubieboard se ha de entrar en la carpeta en la que se ha descargado y/o descomprimido y ejecutar el siguiente comando:

``` bash
export NODE_ENV=cubieboard && node server.js
```

o el siguiente comando

``` bash
npm start-cubieboard
```

Para arrancarlo en un linux:

``` bash
export NODE_ENV=dev && node server.js
```

o el siguiente comando

``` bash
npm start
```

Después de esto desde el navegador acceder al siguiente enlace:

[http://localhost:8081/index.html](http://localhost:8081/index.html)

## Licencia

cubieboard-monitor es un proyecto opensource creado por mí y licenciado bajo licencia [MIT](http://opensource.org/licenses/MIT).
