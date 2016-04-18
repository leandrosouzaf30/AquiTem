'Use Strict';
angular.module('App').controller('escolasController', function ($scope, $ionicPopup, Utils, Escolas) {


  $scope.escola = Escolas.itemlist();

  $scope.escola.$loaded().then(function (Escolas){
      Utils.hide();
    });

    $scope.agregar = function(){

      $scope.data = {};
      var myPopup = $ionicPopup.show({
        template: 'Escola<input type="text" ng-model="data.nome">Endereco<input type="text" ng-model="data.end">Fone:<input type="text" ng-model="data.fone">',
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
          Escolas.createList($scope.data);
       }


     }
    }
   ]
  });
  };


});
