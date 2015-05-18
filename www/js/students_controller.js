(function() {

  var app = angular.module('studentsController', []);

  app.controller('StudentsController',
    function($scope, $http) {
      var url = 'http://localhost:3000/students';

      $http.get(url)
        .success(function(students) {
          $scope.students = students;
        })
        .error(function(data) {
          console.log('sever side error occured.');
        });
    }
  );

})();