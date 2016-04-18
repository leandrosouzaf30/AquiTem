'Use Strict';
angular.module('App').controller('loginController',
function ($scope, $state,$cordovaOauth,
  $localStorage, $location,$http,$ionicPopup,
  $firebaseObject, Auth, FURL, Utils) {

  var ref = new Firebase(FURL);

  Auth.$onAuth(function(authData){
    if(authData === null){
      console.log("Usuário não autenticado");
    }else {
      console.log("Usuario esta autenticado");
      console.log(authData);
      $state.go('home');
      console.log("Starter page","Home");
    }
    $scope.logout = function(){
        delete $localStorage.accessToken;
        $location.path("/login");
    };
    $scope.authData = authData;
  });
  $scope.login = function(authMethod){

    Auth.$authWithOAuthPopup(authMethod).then(function(authData){

    });

  };

});
