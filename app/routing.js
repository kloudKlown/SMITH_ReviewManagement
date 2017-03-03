/**
 * Created by suhas on 3/1/2017.
 */
(function(){
    angular
        .module("ngApp", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
                .when("/review",{
                    templateUrl: "/views/AllReview.view.client.html",
                    controller: "reviewController",
                    controllerAs: "revC"
                })
                .when("/new", {
                    templateUrl: "/views/NewReview.view.client.html",
                    controller: "newController",
                    controllerAs: "newC"
                })
                .otherwise({
                    redirectTo: "/review"
                })
        });
})();