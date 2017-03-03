/**
 * Created by suhas on 3/2/2017.
 */

(function () {
    angular
        .module("ngApp")
        .service("ReviewService", ReviewService);

        function ReviewService($http) {

            var api ={
                "NewReview": NewReview,
                "AllReview": AllReview
            };

            return api;

            function NewReview(review) {
                $http.post("/api/review/",review);
            }

            function AllReview() {
                // console.log("Coming here during get all");
                return $http.get("/api/allreview/");
            }

        };

})();
