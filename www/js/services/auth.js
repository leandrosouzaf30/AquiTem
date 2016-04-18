angular.module('App').factory('Auth', function(FURL, $firebaseAuth, $firebaseArray, $firebaseObject, Utils) {

	var ref = new Firebase(FURL);
	var auth = $firebaseAuth(ref);

	return $firebaseAuth(ref);

	return Auth;

});
