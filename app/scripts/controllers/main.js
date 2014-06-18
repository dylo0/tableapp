'use strict';

angular.module('tableappApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/getItems').success(function(items) {
      $scope.items = items;
    });



    $scope.addItem = function () {
    	$scope.item.addTime = new Date().toJSON();
    	console.log($scope.item);

    	$http.post('/api/newItem', $scope.item).
    	success(function (data) {
    		$scope.items.push($scope.item);
    		$scope.item = {}
    		console.log('item added');
;    	}).
    	error(function (data) {
    		console.log(data);
    	});
    }

  });
