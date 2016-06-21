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

        $scope.cargaDatosCPUCores = function() {
            $http.get('/CPU_Uso_Cores')
                .success(function(data) {
                  //console.log('varCoresCPU - Recibido: ' + data);
                  if (data!="")
                  {
                    $scope.CPU_Uso_Cores=data;
                  }
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }

        $scope.cargaTemperaturaCPUCores = function() {
            $http.get('/CPU_Temp_Cores')
                .success(function(data) {
                  //console.log('varCoresCPU - Recibido: ' + data);
                  if (data!="")
                  {
                    $scope.CPU_Temp_Cores=data;
                  }
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }

        $scope.cargaInformacionCPU = function() {
            $http.get('/CPU_Info')
                .success(function(data) {
                    $scope.CPU_Info=data;
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
            $scope.cargaTemperaturaCPUCores();
            $scope.cargaInformacionCPU();
        }


    });
})(window.angular);
