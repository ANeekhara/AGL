(function() {
    'use strict';

    angular
        .module('AGLApp')
        .controller('peopleOverviewController', peopleOverviewController);

    peopleOverviewController.$inject = ['$location', 'overviewSvc'];
    function peopleOverviewController($location, overview) {

        var vm = this;
        vm.isDataFetched = true;
        init();

        function init() {
            var peopleModel = overview.getData();
            peopleModel.then(function(response) {
                if (response != null) {
                    vm.peopleArray = response.data;
                    }
                },
                function (reason) {
                    vm.isDataFetched = false;
                    window.alert("No data found");
                    window.console && console.log(reason.status + ':Unhandled error -');
                },
                function(update) {
                    window.console && console.log('Got notification: ' + update);
                });
        }
    }
})();
