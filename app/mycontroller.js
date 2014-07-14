angular.module('app').controller('myController',function($scope, $state){
    $scope.data = {
        stateName: $state.current.name
    }

    $scope.$on('$locationChangeStart', function(evt){
        //evt.preventDefault();
    })
});