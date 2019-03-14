angular.module("MyFirstApp",[])
	.controller("FirstController", function($scope, $http){
		$scope.posts = {};
		$scope.newPost = {};
		$http.get("https://jsonplaceholder.typicode.com/posts")
			.then(function(response){
				console.log(response.data);
				$scope.posts = response.data;
			},function(err){
				console.log(err);
			});
		$scope.addPost = function(){
			$http.post("https://jsonplaceholder.typicode.com/posts", {
				title: $scope.newPost.title,
				body: $scope.newPost.body,
				userId: 1,
			})
			.then(function(data, status, headers, config){
				console.log(data);
				$scope.posts.push($scope.newPost);
				$scope.newPost = {};
			},function(error, status, headers, config){
				console.log(error);
			});
		}
	});