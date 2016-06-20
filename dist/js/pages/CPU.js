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

        $scope.cargaDatosCPUCores = function() {
            $http.get('/varCoresCPU')
                .success(function(data) {
                  //console.log('varCoresCPU - Recibido: ' + data);
                  if (data!="")
                  {
                    $scope.varCpuCore0=data[0].var;
                    $scope.varCpuCore1=data[1].var;
                  }
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }

        $scope.cargaDatosPantalla = function() {
            $scope.getHostname();
            $scope.cargaTemperaturaCPU();
            $scope.cargaDatosCPU();
            $scope.cargaDatosCPUCores();
        }


    });
})(window.angular);
