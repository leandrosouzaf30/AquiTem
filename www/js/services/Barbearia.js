angular.module('App').factory('Barbearia', function(FURL, $firebaseArray){

var ref = new Firebase(FURL);


var Barbearia = {

  createList:function(data){

    var item = {
      Nome: data.nome,
      Endereco: data.end,
      Fone: data.fone

    };

    var itemcreate = $firebaseArray(ref.child('Categoria/Barbearia'));
    return itemcreate.$add(item).then(function(ref){
      var id = ref.key();
      console.log('Adicionado o id: ' + id);
      itemcreate.$indexFor(id);
    });

  },

  itemlist:function(){
    return $firebaseArray(ref.child('Categoria/Barbearia'));
  },
  

  };

return Barbearia;

});
