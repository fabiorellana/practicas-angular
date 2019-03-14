angular.module("ToDoList", ["LocalStorageModule"])
	.controller("ToDoController", function($scope, localStorageService){
		if(localStorageService.get("angular-todolist")){
			$scope.todo = localStorageService.get("angular-todolist");
		}else{
			$scope.todo = [];
		}
		/*
			{
				actividad: 'Terminar el curso Angular',
				fecha: '03-12-2017 02:00 pm'
			}
		*/
		$scope.$watchCollection('todo', function(newValue, oldValue){
			localStorageService.set("angular-todolist", $scope.todo);
		});
		$scope.addAct = function(){
			$scope.todo.push($scope.newAct);
			$scope.newAct = {};
		}

		/*$scope.clean = function(){
			$scope.todo = [];
		}*/
	});