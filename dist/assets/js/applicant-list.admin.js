(function($) {
var currentAction = null;

angular.module('applicantList', [])
  .controller('ListController', function($scope){
    $scope.data = [];

    for (var i = 0; i < 5; i++) {
      $scope.data.push(
        {
          partnerID: 'adf' + i,
          doNotShow:  Math.random() < 0.5 ? true : false
          deleteUrl: "";
        }
      );
    }

  })

  .directive('applicantItem', function() {

    var link = function($scope) {
      $scope.alert = function() {
        alert('sssss');
      }
    }

    return {
      restrict: 'E',
      templateUrl: '../../html/angular-template/applicant-item.html',
      scope: {
        info: "=info"
      },

      link: link
    };

  });

})(jQuery);