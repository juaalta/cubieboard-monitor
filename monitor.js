(function(angular) {
  'use strict';
angular.module('angularTodo', []).controller('mainController', function($scope, $http) {
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
