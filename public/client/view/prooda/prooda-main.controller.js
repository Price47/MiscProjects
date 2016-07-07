/**
 * Created by rstoeffel on 7/6/16.
 */
(function() {

        angular
            .module("FoodaApp")
            .controller("ProodaMainController", ProodaMainController);


        function ProodaMainController($scope, ProodaService,$http) {

            $scope.rez = [
                {name: "NotReal", location:"nonEYa"},
                {name:"alsoFake",location:"bizzness"}
            ];
            $scope.add = add;

            function add(){
                $scope.number += 1;
                console.log($scope.number);
                ProodaService.addRestaurant()
                
            }
        }

    }

)();