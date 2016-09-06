angular.module("Zoolandia")
    .controller('EmployeesCtrl', [
        '$scope',
        '$http',
    function($scope, $http){
        $scope.title = "I'm the employees page"
        $scope.apiRoot = null

        $http.get("http://localhost:8000/")
            .then((res) => {
                console.log(res.data)
                $scope.apiRoot = res.data;
                $http.get(`${$scope.apiRoot.employees}`)
                    .then(res => {
                        $scope.employees = res.data;
                    });
            });
    }]);
