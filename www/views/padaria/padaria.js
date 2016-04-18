'Use Strict';
angular.module('App').controller('padariaController', function ($scope, $ionicPopup, Utils, Padaria) {


  $scope.padaria = Padaria.itemlist();

  $scope.padaria.$loaded().then(function (Padaria){
      Utils.hide();
    });

    $scope.agregar = function(){

      $scope.data = {};
      var myPopup = $ionicPopup.show({
        template: 'Estabelecimento<input type="text" ng-model="data.nome">Endereco<input type="text" ng-model="data.end">Fone:<input type="text" ng-model="data.fone">',
        title: 'Adicionar um Estabelecimento',
        scope: $scope,
        buttons: [
          {text: 'Cancelar'},
          {text:'<b>Inserir</b>',
        type: 'button-assertive',
      onTap: function(e){
        if(!$scope.data.nome){
          console.log("Não inseriu nada");
          e.preventDefault();
        }else{
          console.log($scope.data.nome);
          Padaria.createList($scope.data);
       }


     }
    }
   ]
  });
  };


});
