angular.module('App').factory('Outros', function(FURL, $firebaseArray){

var ref = new Firebase(FURL);


var Outros = {

  createList:function(data){

    var item = {
      Nome: data.nome,
      Endereco: data.end,
      Fone: data.fone

    };

    var itemcreate = $firebaseArray(ref.child('Categoria/Outros'));
    return itemcreate.$add(item).then(function(ref){
      var id = ref.key();
      console.log('Adicionado o id: ' + id);
      itemcreate.$indexFor(id);
    });

  },

  itemlist:function(){
    return $firebaseArray(ref.child('Categoria/Outros'));
  },

  edititem:function(todo,scope){
    todo.Nome = scope;
    var edit = $firebaseArray(ref.child('Lista'));
    return edit.$save(todo).then(function(ref){
      ref.key() === todo.$id; //true
      console.log("Editado registro " + todo.$id);
    });
  },// Final do edit*/

 del:function(todo){
    var delitem = $firebaseArray(ref.child('Lista'));
    return delitem.$remove(item).then(function(ref){
    ref.key() === item.$id; //true
    console.log("ID: " + item.$id + " Fui eliminado");
  });
},

  };

return Outros;

});
