'Use Strict';
angular.module('App').controller('homeController', function ($scope, $state,$cordovaOauth,
  $localStorage, $location,$http,$ionicPopup,
  $firebaseObject, Auth, FURL, Utils, $ionicPopup) {

  Auth.$onAuth(function(authData){
    if(authData === null){
      console.log("Usuário não autenticado");
    }else {
      console.log("Usuario esta autenticado");
      console.log(authData);
      Utils.hide();
      $state.go('home');
      console.log("Starter page","Home");
    }
    $scope.authData = authData;
  });
  $scope.login = function(authMethod){

    Auth.$authWithOAuthPopup(authMethod).then(function(authData){

    });

  };

  $scope.logout = function() {
  $state.go('login');

};


  $scope.sobre = function(){

    $scope.data = {};
    var myPopup = $ionicPopup.show({
      template: '<p align="justify">Este é um pequeno guia para os moradores do bairro Novo Maracanaú, com seus principais Estabelecimentos, os usuários podem escolher a melhor opção ou a mais proxima como também adicionar seus locais favoritos!</p><p align="right">Desenvolvido por:<br> Leandro Souza.</p>',
      title: 'Sobre o App.',
      scope: $scope,
      buttons: [

        {text:'<b>Fechar</b>',
      type: 'button-assertive',

  }
 ]
});
};

});
