//
//	angular.module('ugApp', ['angular-meteor']);
//
//	angular.module('ugApp').controller('MainCtrl', ['$scope', function ($scope){
//	    $scope.items = [{type:"volunteer",
//	                        pic:"",
//	                        title:"Save cheerleader, save the world",
//	                        organization:"Avenger",
//	                        timeScope:"1  year",
//	                        place:"USA"},
//	                        {type:"volunteer",
//	                        pic:"",
//	                        title:"Save cheerleader, save the world",
//	                        organization:"Avenger",
//	                        timeScope:"1  year",
//	                        place:"China"},
//	                        {type:"volunteer",
//	                        pic:"",
//	                        title:"Save cheerleader, save the world",
//	                        organization:"Avenger",
//	                        timeScope:"1  year",
//	                        place:"OOOO"},
//	                        {type:"volunteer",
//	                        pic:"",
//	                        title:"Save cheerleader, save the world",
//	                        organization:"Avenger",
//	                        timeScope:"1  year",
//	                        place:"OOOO"}];
//
//	        $scope.showPopover = function() {
//	                $scope.popoverIsVisible = true;
//	        };
//
//	        $scope.hidePopover = function () {
//	                $scope.popoverIsVisible = false;
//	        };
//  }]);
//
////
////
angular.module('ugApp.controllers').controller("MainCtrl",
    function($meteor, $rootScope, $scope, $state, currentUser){

         //$scope.users = $scope.$meteorCollection(Users);
         //$scope.user = $scope.$meteorObject(Users, $stateParams.user_id , false);

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

    });