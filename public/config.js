/**
 * Created by rstoeffel on 7/6/16.
 */
(function(){

    angular
        .module("FoodaApp")
        .config(Configuration);
    
    function Configuration($routeProvider){
        $routeProvider
            .when("/prooda-main",{
                templateUrl:"client/view/prooda/prooda-main.view.html",
                controller:"ProodaMainController"
            })
            .otherwise({
                redirectTo: "/prooda-main"
            })
        
    }
})();