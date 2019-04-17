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


        $scope.cargaTemperaturaHDD = function() {
            $http({
                    method: 'GET',
                    url: '/HDD_Temp'
                 }).then(function (response){
                    $scope.HDD_Temp = response.data;
                 },function (error){
                    console.log('Error: ' + error.data || 'Request failed');
                 });
        }

        $scope.cargaDatosHDD = function() {
            $http({
                    method: 'GET',
                    url: '/HDD_Uso'
                 }).then(function (response){
                    $scope.HDD_Uso = response.data;
                 },function (error){
                    console.log('Error: ' + error.data || 'Request failed');
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
