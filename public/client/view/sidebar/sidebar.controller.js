/**
 * Created by rstoeffel on 7/7/16.
 */
(function(){

    angular
        .module("FoodaApp")
        .controller("SidebarController",SidebarController);

    function SidebarController($rootScope,$scope,$route, $location){
        $scope.route = $route;
        $scope.add = add;

        function add(){
            console.log("1")
        }

    }
})();