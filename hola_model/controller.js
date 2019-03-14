angular.module("MyFirstApp",[])
	.controller("FirstController", function($scope){
	$scope.nombre = "Fabian";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			comentario: "Buen curso",
			username: "Fabian"
		},

		{
			comentario: "Mal curso",
			username: "Otro usuario"
		}
	];

	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
});