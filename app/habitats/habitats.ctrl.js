angular.module("Zoolandia")
    .controller('HabitatsCtrl', [
        '$scope',
        '$http',
    function($scope, $http){
        $scope.title = "I'm the Habitats page"
        $scope.apiRoot = null

        $http.get("http://localhost:8000/")
            .then((res) => {
                console.log(res.data)
                $scope.apiRoot = res.data;
                $http.get(`${$scope.apiRoot.habitats}`)
                    .then(res => {
                        $scope.habitats = res.data;
                    });
            });
    }]);
