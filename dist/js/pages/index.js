(function(angular) {
    'use strict';
    angular.module('angularTodo', []).controller('mainController', function($scope, $http) {


        $scope.init = function() {
            $scope.cargaDatosPantalla();
        }

        $scope.getHostname = function() {
            $http.get('/hostname')
                .success(function(data) {
                    $scope.hostname = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }


        $scope.cargaTemperaturaCPU = function() {
            $http.get('/CPUTemp')
                .success(function(data) {
                    $scope.tempCPU = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }

        $scope.cargaDatosCPU = function() {
            $http.get('/varCPU')
                .success(function(data) {
                    $scope.varCPU = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }


        $scope.cargaTemperaturaHDD = function() {
            $http.get('/HDDTemp')
                .success(function(data) {
                    $scope.tempHDD = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }

        $scope.cargaDatosHDD = function() {
            $http.get('/varHDD')
                .success(function(data) {
                    $scope.varHDD = data;
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
