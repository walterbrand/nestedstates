angular.module('app').directive('nav', function($location){
    return {
        restrict : 'E',
        template : '<ul><li ng-repeat="item in items" ng-click="navigate(item.url)">{{item.label}}</li></ul>',
        link: function(scope){
            scope.items = [
                {label: 'home', url : '/'},
                {label : 'nested', url : '/nested'}
            ]
            scope.navigate = function(url){
                $location.path(url)
            }
        }
    }
});