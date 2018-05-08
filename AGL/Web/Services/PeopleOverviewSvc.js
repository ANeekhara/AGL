//(function() {
//    'use strict';
//    angular
//        .module('AGLApp')
//        .factory('peopleOverviewSvc', peopleOverviewSvc);

//  //  peopleOverviewSvc.$inject = ['$resource', '$q'];

//    //function peopleOverviewSvc($resource, $q) {
//         function peopleOverviewSvc() {
//        var service = {
//            getPeopleData: _getPeopleData
//        };

//        return service;

//        function _getPeopleData() {
//            var request = $resource("http://agl-developer-test.azurewebsites.net/people.json");
//            var deferred = $q.defer();
//            request.query()
//                .$promise
//                .then(function(result) {
//                        deferred.resolve(result);
//                    },
//                    function(errorMsg) {
//                        deferred.reject(errorMsg);
//                    });
//            return deferred.promise;
//        }
//    }
//})();