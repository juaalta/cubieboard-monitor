(function(angular) {
    'use strict';
    angular.module('angularTodo', []).controller('mainController', function($scope, $http) {


        $scope.init = function() {
            $scope.cargaDatosPantalla();
        }

        $scope.getHostname = function() {
            $http.get('/SYS_hostname')
                .success(function(data) {
                    $scope.hostname = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }


        $scope.cargaTemperaturaCPU = function() {
            $http.get('/CPU_Temp')
                .success(function(data) {
                    $scope.CPU_Temp = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }

        $scope.cargaDatosCPU = function() {
            $http.get('/CPU_Uso')
                .success(function(data) {
                    $scope.CPU_Uso = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }


        $scope.cargaTemperaturaHDD = function() {
            $http.get('/HDD_Temp')
                .success(function(data) {
                    $scope.HDD_Temp = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }

        $scope.cargaDatosHDD = function() {
            $http.get('/HDD_Uso')
                .success(function(data) {
                    $scope.HDD_Uso = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }

        $scope.cargaDatosPantalla = function() {
            $scope.getHostname();
            $scope.cargaTemperaturaCPU();
            $scope.cargaDatosCPU();
            $scope.cargaTemperaturaHDD();
            $scope.cargaDatosHDD();
        }


    });
})(window.angular);
