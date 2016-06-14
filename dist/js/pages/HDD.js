(function(angular) {
    'use strict';
    angular.module('angularTodo', []).controller('mainController', function($scope, $http) {

        $scope.init = function() {
            $scope.cargaDatosPantalla();
        }

        $scope.cargaTemperaturaCPU = function() {
            $http.get('/CPUTemp')
                .success(function(data) {
                    $scope.tempCPU = data;
                    console.log('Datos recibidos 2: ' + data)
                })
                .error(function(data) {
                    console.log('Error 2: ' + data);
                });
        }

        $scope.cargaDatosCPU = function() {
            $http.get('/varCPU')
                .success(function(data) {
                    $scope.varCPU = data;
                    console.log('Datos recibidos 2: ' + data)
                })
                .error(function(data) {
                    console.log('Error 2: ' + data);
                });
        }

        $scope.getHostname = function() {
            $http.get('/hostname')
                .success(function(data) {
                    $scope.hostname = data;
                    console.log('Datos recibidos 2: ' + data)
                })
                .error(function(data) {
                    console.log('Error 2: ' + data);
                });
        }

        $scope.cargaDatosPantalla = function() {
            $scope.cargaTemperaturaCPU();
            $scope.cargaDatosCPU();
            $scope.getHostname();
        }

    });
})(window.angular);
