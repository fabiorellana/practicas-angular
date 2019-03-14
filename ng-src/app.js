angular.module("CustomDirective", [])
.directive('backImg', function () {
	return function (scope, iElement, iAttrs) {
			iAttrs.$observe('backImg', function(value){
				iElement.css({
					"background": "url("+value+")",
					"background-size": "cover",
					"background-position": "center"
				});
			});
		}
})
/*
style="background:url();background-position: center;background-size:cover;"
*/
.controller("AppCtrl", function($scope,$http){
	$scope.repos = {};
	$scope.loading = true;
	$http.get("https://api.github.com/users/fabiorellana/repos")
	.then(function(response){
		$scope.repos = response.data;
		$scope.loading = false;
	},function(err){
		console.log(err);
		$scope.loading = false;
	});

});