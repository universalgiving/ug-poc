angular.module('ugApp',[
    'ugApp.controllers',
    'ugApp.services',
    'ugApp.directives',
    'ugApp.filters',
    'angular-meteor',
    'ui.router'
]).run(function($meteor,$rootScope,$state,$localstorage){
    //This code is only for development
    $meteor.autorun($rootScope, function(){
        var id = Meteor.userId();
        if(id == undefined || id == null){
            id = '';
        }
        if($localstorage.get('user_id','') != id){
            $localstorage.set('user_id',id);
            if(Meteor.userId()){
                //On login
                $rootScope.$broadcast('logged-in');
            }else{
                //On logout
                $rootScope.$broadcast('logged-out');
            }
        }
    });
});

angular.module('ugApp.services',[
    'angular-meteor',
    'ui.router'
]);

angular.module('ugApp.filters',[
    'angular-meteor',
    'ui.router',
    'ugApp.services'
]);

angular.module('ugApp.controllers',[
    'angular-meteor',
    'ui.router',
    'ugApp.services',
    'ugApp.filters'
]);

angular.module('ugApp.directives',[
    'angular-meteor',
    'ui.router',
    'ugApp.services',
    'ugApp.filters',
    'ugApp.controllers'
]);


function onReady(){
    angular.bootstrap(document, ['ugApp']);
}

if(Meteor.isCordova){
    angular.element(document).on("deviceready", onReady);
}else{
    angular.element(document).ready(onReady);
}
