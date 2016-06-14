(function(angular) {
  'use strict';
angular.module('angularTodo', []).controller('mainController', function($scope, $http) {

  // Cuando se cargue la página, pide del API la temperatura de la CPU
  /*$http.get('/CPUTemp')
      .success(function(data) {
          $scope.tempCPU = data;
          console.log('Datos recibidos: '+data)
      })
      .error(function(data) {
          console.log('Error: ' + data);
      });*/

      $scope.init = function () {
    // check if there is query in url
    // and fire search in case its value is not empty
    $scope.cargaDatosPantalla();
}



 $scope.cargaTemperaturaCPU = function(){
   $http.get('/CPUTemp')
       .success(function(data) {
           $scope.tempCPU = data;
           console.log('Datos recibidos 2: '+data)
       })
       .error(function(data) {
           console.log('Error 2: ' + data);
       });
  }

  $scope.cargaDatosCPU = function(){
    $http.get('/varCPU')
        .success(function(data) {
            $scope.varCPU = data;
            console.log('Datos recibidos 2: '+data)
        })
        .error(function(data) {
            console.log('Error 2: ' + data);
        });
   }

   $scope.getHostname = function(){
     $http.get('/hostname')
         .success(function(data) {
             $scope.hostname = data;
             console.log('Datos recibidos 2: '+data)
         })
         .error(function(data) {
             console.log('Error 2: ' + data);
         });
    }


$scope.cargaDatosPantalla = function()
{
  $scope.cargaTemperaturaCPU();
  $scope.cargaDatosCPU();
  $scope.getHostname();
}


});
})(window.angular);



/*angular.module('angularTodo', []);

function mainController($scope, $http) {
    $scope.Juansal="Juansal";

    // Cuando se cargue la página, pide del API la temperatura de la CPU
    $http.get('/CPUTemp')
        .success(function(data) {
            $scope.tempCPU = data;
            console.log('Datos recibidos: '+data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

   $scope.cargaTemperatua = function(){
     $http.get('/CPUTemp')
         .success(function(data) {
           $scope.Juansal="Juansal2";
             $scope.tempCPU = data;
             console.log('Datos recibidos 2: '+data)
         })
         .error(function(data) {
             console.log('Error 2: ' + data);
         });
    }

}*/
