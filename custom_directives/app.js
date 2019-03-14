angular.module("CustomDirective", [])
.directive('myAutocomplete', function(){
	function link(scope, element, attr){
		$(element).autocomplete({
			source: scope.$eval(attr.myAutocomplete),
			select: function(ev, ui){
				ev.preventDefault();
				if(ui.item){
					scope.optionSelected(ui.item.value);
				}
			},
			focus: function(ev, ui){
				ev.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};
	return {
		link: link
	};
})
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
	$scope.repos = [];
	
	$http.get("https://api.github.com/users/fabiorellana/repos")
	.then(function(response){
		$scope.posts = response.data;
		for(var i = response.data.length - 1; i >= 0; i--){
			var repo = response.data[i];
			$scope.repos.push(repo.name);
		}
	},function(err){
		console.log(err);
	});

	$scope.optionSelected = function(response){
		$scope.$apply(function(){
			$scope.main_repo = response.data;
		})
	}

});