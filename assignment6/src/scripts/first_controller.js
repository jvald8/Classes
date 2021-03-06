var app = angular.module('myApp');

app.controller('FirstController', ['$scope', '$http', function($scope, $http) {
  $scope.testVariable = 'string';

  $scope.updatedName = '';

  $http.get('/notes')
  .success(function(data, status, headers, config) {
    $scope.notes = data;
  })
  .error(function(data, status, headers, config) {
    throw new Error('get error!');
  });

  $scope.addNote = function() {
    $http.post('/notes', {"id":$scope.notes.length,"name":$scope.noteName})
    .success(function(data, status, headers, config) {
      $scope.notes.push(data);
    })
    .error(function(data, status, headers, config) {
      throw new Error('adding error!');
    });
  };

  $scope.removeNote = function(note) {
    $http.delete('/notes/' + note.id)
    .success(function(data, status, headers, config) {
      $scope.notes.splice($scope.notes.indexOf(note), 1);
    })
    .error(function(data, status, headers, config) {
      throw new Error('delete error!');
    });
  };

  $scope.updateNote = function(note) {
    $http.put('/notes/' + note.id, {"id":note.id,"name":note.updatedName})
    .success(function(data, status, headers, config) {
      note.name = note.updatedName;
    })
    .error(function(data, status, headers, config) {
      throw new Error('update error!');
    });
  };
}])
