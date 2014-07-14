angular.module('app', ['ui.router']);
angular.module('app').config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.state({
        name: 'home',
        url: '/',
        template: '<b>Home template :{{data.stateName}}</b>',
        controller: 'myController'
    })

    $stateProvider.state({
        name: 'nested',
        url:'/nested',
        template: '<div ui-view="nested.a"></div>'
    });

    $stateProvider.state({
        name: 'nested.a',
        template: '<i>Nested {{data.stateName}}</i>',
        controller : 'myController'
    });

});