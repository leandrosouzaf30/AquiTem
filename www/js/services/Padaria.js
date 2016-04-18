angular.module('App').factory('Padaria', function(FURL, $firebaseArray){

var ref = new Firebase(FURL);


var Padaria = {

  createList:function(data){

    var item = {
      Nome: data.nome,
      Endereco: data.end,
      Fone: data.fone

    };

    var itemcreate = $firebaseArray(ref.child('Categoria/Padaria'));
    return itemcreate.$add(item).then(function(ref){
      var id = ref.key();
      console.log('Adicionado o id: ' + id);
      itemcreate.$indexFor(id);
    });

  },

  itemlist:function(){
    return $firebaseArray(ref.child('Categoria/Padaria'));
  },


  };

return Padaria;

});
