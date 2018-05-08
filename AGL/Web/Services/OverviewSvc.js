(function () {
    'use strict';

    angular
        .module('AGLApp')
        .factory('overviewSvc', overviewSvc);

    overviewSvc.$inject = ['$http', '$q'];

    function overviewSvc($http, $q) {
        var service = {
            getData: getData
        };

        return service;

        function getData() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'http://agl-developer-test.azurewebsites.net/people.json'
            }).then(function successCallback(response) {
                deferred.resolve(response);
                return response;
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                deferred.reject(response);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
            return deferred.promise;
        }
    }
})();