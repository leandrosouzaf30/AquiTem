'Use Strict';
angular.module('App', ['ionic','ngStorage', 'ngCordova','firebase','ngMessages'])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

    .state('alimentacao', {
      url: '/alimentacao',
      templateUrl: 'views/alimentacao/alimentacao.html',
      controller:'alimentacaoController'
    })
    .state('barbear', {
      url: '/barbear',
      templateUrl: 'views/barbearia/barbear.html',
      controller:'barbeariaController'
    })
    .state('escolas', {
      url: '/escolas',
      templateUrl: 'views/escolas/escolas.html',
      controller:'escolasController'
    })

    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html',
      controller:'homeController'
    })
    .state('padaria', {
      url: '/padaria',
      templateUrl: 'views/padaria/padaria.html',
      controller:'padariaController'
    })
    .state('outros', {
      url: '/outros',
      templateUrl: 'views/outros/outros.html',
      controller:'outrosController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'loginController'
    })

    ;
$urlRouterProvider.otherwise("/login");
})
// Changue this for your Firebase App URL.
.constant('FURL', 'https://cafecomtapioca.firebaseio.com/')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
