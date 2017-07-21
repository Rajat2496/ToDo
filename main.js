var ngtodo = angular.module('ngtodo', []);
ngtodo.controller('mainController', function($scope) {
	$scope.lists = [
	                 {
	                 	title:'Do my homework',
	                 	details:'I must do my homework today'
	                 },
	                 {
	                 	title:'Do my assignment',
	                 	details:'I must do my assignment today'
	                 },
	                 {
	                 	title:'Do my Project',
	                 	details:''
	                 },
	                 {
	                 	title:'Eat my breakfast',
	                 	details:'I ate my breakfast'
	                 },
	                 {
	                 	title:'Watch Movie',
	                 	details:'I am watching'
	                 }
	                ];

	$scope.addTodo = function(title,details) {
		$scope.lists.push({title,details});

	}
	$scope.deleteTodo = function(index) {
		$scope.lists.splice(index, 1);
	}

});