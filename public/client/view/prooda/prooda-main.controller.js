
(function() {

        angular
            .module("FoodaApp")
            .controller("ProodaMainController", ProodaMainController);


        function ProodaMainController($rootScope, $scope,$q, $http) {

            $scope.stories = [];
            $scope.stories2=[
                {title:"this",rank:1,points:4,url:"tewt",username:"price",comments:5},
                {title:"that",rank:2,points:4,url:"tewt",username:"price",comments:5}
                
            ];

            function init(){

                $http.get('/scrape-hacker')
                    .success(
                        function(response){
                            $scope.stories = response;
                        }
                    )


            }init();

        }

    }

)();