angular.module('myApp', [])
  .controller('MyController', function($scope, $timeout) {
    $scope.title = 'I am Hungry! :(';
    $scope.firstname = '';

    $timeout(function() {
      $scope.title = 'What\'s in my fridge!?';
    }, 3000);

    $scope.onSubmit = function() {
      console.log('Form submitted with firstname:', $scope.firstname);
    };
  });
