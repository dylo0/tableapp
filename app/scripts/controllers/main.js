'use strict';

angular.module('tableappApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/getItems').success(function(items) {
      $.each(items, function (i) {
        items[i]['removable'] = false;
      });
      $scope.items = items;
    });

    $scope.addItem = function () {
    	$scope.item.addTime = new Date().toJSON();

    	$http.post('/api/newItem', $scope.item).
    	success(function (data) {
        data['removable'] = true;
        setTimeout(function () {
          $.each($scope.items, function (i) {
            if ($scope.items[i]._id === data._id) {
              $scope.$apply(function () {
                $scope.items[i]['removable'] = false;              
              });
            };
          });
        }, 60000);
    		$scope.items.push(data);
    		$scope.item = {};
        $("[name = 'name']").focus();
    	}).
    	error(function (data) {
    		console.log(data);
    	});
    };

    $scope.removeItem = function (item) {
      if (item.removable) {
        $http.post('/api/removeItem', {_id: item._id}).
          success(function (data) {
            $.each($scope.items, function (i) {
              if($scope.items[i]._id === data._id) {
                $scope.items.splice(i, 1);
                return false;
              };
            });
        });
      };
    };

    $scope.removable = function (item) {
      return removableComponents.indexOf(item._id) >= 0;
    };
});


