meuapp.controller('empController', function($scope,$route,$routeParams,$http){
	$scope.getClientes = function(){
		$http.get('/api/clientes/').then(function(response){
			$scope.clientes = response.data;
		});
	};
	$scope.showCliente = function(){
		var id = $routeParams.id;
		$http.get('/api/clientes/'+ id).then(function(response){
			$scope.cliente = response.data;
		});
	};
	$scope.addCliente  = function(){
		//var id = $routeParams.id;
		$http.post('/api/clientes/', $scope.cliente).then(function(response){
			window.location.href = '/';
		});
	};
	$scope.updateCliente  = function(){
		var id = $routeParams.id;
		$http.put('/api/clientes/'+ id , $scope.cliente).then(function(response){
			window.location.href = '/';
		});
	};
	$scope.deleteCliente  = function(id){
		var id = id;
		$http.delete('/api/clientes/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});