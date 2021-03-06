# Change Log

Monitorización la temperatura y el uso de CPU y discos duros.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security


## 1.3.0 - 2019-04-17

### Changed

- Actualizada la versión de AngularJs a la 1.7.8.
- Actualizadas las librerías usadas por el proyecto.
- Actualizado el código del front para que se solucionen los bugs aparecidos en la actualización de las librerías.
- Actualizado el código del back para que se solucionen los bugs aparecidos en la actualización de las librerías.


## 1.2.0 - 2017-03-23

### Added

- Añadidos test unitarios, mediante Mocha y Supertest, de los servicios rest.
- Añadida integración con [Travis CI](https://travis-ci.org/juaalta/cubieboard-monitor) para añadir al proyecto integración contínua.
- Añadida integración con [David](https://david-dm.org/juaalta/cubieboard-monitor) para conocer el estado de las dependencias del proyecto.
- Añadida integración con [Snyk](https://snyk.io/test/github/juaalta/cubieboard-monitor) para conocer el estado de las vulnerabilidades de la aplicación.
- Añadida integración de [CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/704) para intentar realizar unas mejores prácticas a la hora de crear y mantener el proyecto.
- Añadido fichero CHANGELOG.md y rellenado con los datos hasta la actualidad.
- Añadido selección de carpeta de scripts a partir de configuración.
- Añadido script a package.json para arranque en Cubieboard.

### Changed

- Modificación del arranque de la aplicación para que el travis-ci pueda realizar los test de forma automática.
- Modificación del ficher README.md para añadir las insignias de estado de las integraciones con Travis, David, Synk y CII Best Practices, además de la insigina de estado del la licencia de la aplicación.
- Borrados todos los ficheros que son innecesarios para el proyecto.
- Borrados ficheros de scripts de carpeta raiz de scripts.


## 1.1.0 - 2016-07-15

### Changed

- Refactorización del código para:

  - Estandarización de nombres de scripts.
  - Estandarización de nombres de métodos.

- Todos los comandos llamados se han pasado a scripts.


## 1.0.0 - 2016-06-28

### Added

- En esta versión se monitoriza la temperatura y el uso de CPU y discos duros.

