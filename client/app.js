if (Meteor.isClient) {

	angular.module('app', ['angular-meteor']);

	angular.module('app').controller('appCtrl', ['$scope', function ($scope){
	    $scope.items = [{type:"volunteer",
	                        pic:"",
	                        title:"Save cheerleader, save the world",
	                        organization:"Avenger",
	                        timeScope:"1  year",
	                        place:"USA"},
	                        {type:"volunteer",
	                        pic:"",
	                        title:"Save cheerleader, save the world",
	                        organization:"Avenger",
	                        timeScope:"1  year",
	                        place:"China"},
	                        {type:"volunteer",
	                        pic:"",
	                        title:"Save cheerleader, save the world",
	                        organization:"Avenger",
	                        timeScope:"1  year",
	                        place:"OOOO"},
	                        {type:"volunteer",
	                        pic:"",
	                        title:"Save cheerleader, save the world",
	                        organization:"Avenger",
	                        timeScope:"1  year",
	                        place:"OOOO"}];

	        $scope.showPopover = function() {
	                $scope.popoverIsVisible = true;
	        };

	        $scope.hidePopover = function () {
	                $scope.popoverIsVisible = false;
	        };
  }]);
}
