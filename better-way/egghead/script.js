var myApp = angular.module('myApp', []);

myApp.provider('Argle', function() {
    this.$get = function() {
        return {
            message: "I'm a message from a service created by a provider"
        };
    };
});

function FirstCtrl($scope, Argle){
    $scope.data = Argle;
}
function SecondCtrl($scope, Argle){
    $scope.data = Argle;
}

