
angular.module('FingerPrintModule')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })
  .state('signup',{
    url: '/signup',
    templateUrl: 'templates/signUp.html'
  })
  .state('success',{
    url: '/success',
    templateUrl: 'templates/success.html'
  })
  .state('failure',{
    url: '/failure',
    templateUrl: 'templates/failure.html'
  })
  $urlRouterProvider.otherwise('/');
}
