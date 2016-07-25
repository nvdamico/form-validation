// app.js
// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope) {

    $scope.user = {};
    $scope.ssnNumbers = /^\d+$/;

    $scope.confirmEmailMatch = function() {
        return $scope.user.email === $scope.user.emailConfirm;
    };

    $scope.isValidSSN = function() {
        console.log('calling this');
        return $scope.user.ssn !== 123456789 && $scope.user.ssn !== 987654321;
    }

  // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }

  };

});
