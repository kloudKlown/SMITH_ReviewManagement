/**
 * Created by suhas on 3/3/2017.
 */

(function () {
    angular
        .module("ngApp")
        .controller("reviewController", reviewController);

    function reviewController($location,ReviewService) {

        var vm = this;
        function init() {
            ReviewService.AllReview()
                .success( function (reviews) {
                    console.log(reviews);
                    vm.review = reviews;
                    vm.length = reviews.length;
                    console.log(vm.length)
                });

        };
        init();
        vm.reviewPerPage = 6;
        vm.current = 0;
        vm.sortType=false;


        vm.numberOfPages = function() {
                return Math.ceil(vm.length / vm.reviewPerPage);
        };


    };



})();

angular.module("ngApp").filter('pagination', function()
{
    return function(input, start)
    {
        start = +start;
        return input.slice(start);
    };
});