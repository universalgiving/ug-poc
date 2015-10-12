if (Meteor.isClient) {
  angular.module('socially', ['angular-meteor']);
 
  angular.module('socially').controller('PartiesListCtrl', ['$scope', function ($scope) {
    $scope.tasks = [
        { text: 'This is task 1' },
        { text: 'This is task 2' },
        { text: 'This is task 3' }
      ];
  }]);
}




