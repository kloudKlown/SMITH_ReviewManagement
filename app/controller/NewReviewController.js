/**
 * Created by suhas on 3/1/2017.
 */

(function()
{
    angular
        .module("ngApp")
        .controller("newController", newController)
        .directive("starRating",starRating);

  function newController($location,ReviewService ) {
      var vm = this;
      vm.rating1 = -1;
      vm.rating2 = -1;
      vm.rating3 = -1;
      vm.isReadonly = true;
      vm.SubmitReview = SubmitReview;

      function SubmitReview(review) {

          ReviewService.NewReview(review)
          {
              $location.url("/review");
          };
      }

  }
  function starRating() {
          return {
              restrict: 'EA',
              template: '<ul class="star-rating" ng-class="{readonly: readonly}">' +
              '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
              '    <i class="fa fa-star"></i>' + // or &#9733
              '  </li>' +
              '</ul>',
              scope: {
                  ratingValue: '=ngModel',
                  max: '=?', // optional (default is 5)
                  onRatingSelect: '&?',
                  readonly: '=?'
              },
              link: function (scope, element, attributes) {
                  if (scope.max == undefined) {
                      scope.max = 5;
                  }
                  function updateStars() {
                      scope.stars = [];
                      for (var i = 0; i < scope.max; i++) {
                          scope.stars.push({
                              filled: i < scope.ratingValue
                          });
                      }
                  };
                  scope.toggle = function (index) {
                      if (scope.readonly == undefined || scope.readonly === false) {
                          scope.ratingValue = index + 1;
                          scope.onRatingSelect({
                              rating: index + 1
                          });
                      }
                  };
                  scope.$watch('ratingValue', function (oldValue, newValue) {
                      if (newValue) {
                          updateStars();
                      }
                  });
              }
          };
      }


})();