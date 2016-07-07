/**
 * Created by rstoeffel on 7/6/16.
 */
(function(){
    angular
        .module("FoodaApp")
        .factory("ProodaService",ProodaService);

    function ProodaService($rootScope, $http) {
        var api = {

            addRestaurant: getUser

        };
        return api;

        function getUser() {
            var date = new Date();
            return $http.get("/scrape/" + date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear())
        }
    }


})();
