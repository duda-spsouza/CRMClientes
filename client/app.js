var meuapp = angular.module('meuapp',['ngRoute']);
meuapp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'empController'
		})
		.when('/clientes', {
			templateUrl:'templates/list.html',
			controller:'empController'
		})
		.when('/clientes/create', {
			templateUrl:'templates/add.html',
			controller:'empController'
		})
		.when('/clientes/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'empController'
		})
		.when('/clientes/:id/show', {
			templateUrl:'templates/show.html',
			controller:'empController'
		});
})