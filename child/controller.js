angular.module("MyFirstApp", [])
	.run(function($rootScope){
		$rootScope.nombre = "Fabian Orellana";
	})
	.controller("FirstController", function($scope){
		$scope.nombre = "FO";
		setTimeout(function(){
			$scope.$apply(function(){
				$scope.nombre = ":3";
			});
		},1000);
	})
	.controller("ChildController", function($scope){

	});