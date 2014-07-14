angular.module('app').controller('myController',function($scope, $state){
    $scope.data = {
        stateName: $state.current.name
    }
    console.log($state)
});