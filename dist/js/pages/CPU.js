(function(angular) {
    'use strict';
    angular.module('angularTodo', []).controller('mainController', function($scope, $http) {


        $scope.init = function() {
            $scope.cargaDatosPantalla();
        }

        $scope.getHostname = function() {
            $http({
                method: 'GET',
                url: '/SYS_hostname'
             }).then(function (response){
                $scope.hostname = response.data;
             },function (error){
                console.log('Error: ' + error.data || 'Request failed');
             });
        }


        $scope.cargaTemperaturaCPU = function() {
                $http({
                    method: 'GET',
                    url: '/CPU_Temp'
                 }).then(function (response){
                    $scope.CPU_Temp = response.data;
                 },function (error){
                    console.log('Error: ' + error.data || 'Request failed');
                 });
        }

        $scope.cargaDatosCPU = function() {
            $http({
                    method: 'GET',
                    url: '/CPU_Uso'
                 }).then(function (response){
                    $scope.CPU_Uso = response.data;
                 },function (error){
                    console.log('Error: ' + error.data || 'Request failed');
                 });
        }

        $scope.cargaDatosCPUCores = function() {
            $http({
                    method: 'GET',
                    url: '/CPU_Uso_Cores'
                 }).then(function (response){
                     //console.log('varCoresCPU - Recibido: ' + data);
                  if (response.data!="")
                  {
                    $scope.CPU_Uso_Cores = response.data;
                  }
                 },function (error){
                    console.log('Error: ' + error.data || 'Request failed');
                 });
        }

        $scope.cargaTemperaturaCPUCores = function() {
            $http({
                    method: 'GET',
                    url: '/CPU_Temp_Cores'
                 }).then(function (response){
              //console.log('varCoresCPU - Recibido: ' + data);
              if (response.data!="")
                  {
                    $scope.CPU_Temp_Cores = response.data;
                  }
                 },function (error){
                    console.log('Error: ' + error.data || 'Request failed');
                 });
        }

        $scope.cargaInformacionCPU = function() {
                $http({
                    method: 'GET',
                    url: '/CPU_Info'
                 }).then(function (response){
                    $scope.CPU_Info = response.data;
                 },function (error){
                    console.log('Error: ' + error.data || 'Request failed');
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
