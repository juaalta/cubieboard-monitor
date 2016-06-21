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
            $scope.cargaTemperaturaHDD();
            $scope.cargaDatosHDD();
        }


    });
})(window.angular);
