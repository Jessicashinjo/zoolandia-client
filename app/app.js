angular.module('Zoolandia', ['ngRoute'])
    .factory('RootFactory', ($http) => {
        let apiRoot = null;
        return {
            getApiRoot: () => {
                if(apiRoot !== null){
                    return $timeout().then(() => apiRoot);
                } else {
                return $http.get("http://localhost:8000/")
                    .then((res) => {
                        // console.log(res.data)
                        apiRoot = res.data;
                        return apiRoot;
                })
            }
        }
    }})
