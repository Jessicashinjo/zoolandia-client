angular.module("Zoolandia")
    .controller('LandingCtrl', [
        '$scope',
        '$http',
        '$timeout',
        'RootFactory',
    function($scope, $http, $timeout, RootFactory){
        $scope.title = "I'm the landing page"
        RootFactory.getApiRoot()
            .then(res => $scope.apiRoot = res)
        // console.log('apiRoot', $scope.apiRoot)
    }]);
