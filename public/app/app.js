// Main angular app, with DI
angular.module('app', ['ngResource','ngRoute']);
// Redirects to main controller
angular.module('app').config(function($routeProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
   $routeProvider
    .when('/', {templateUrl: '/partials/main/main', controller: 'mvMainCtrl'});
});
