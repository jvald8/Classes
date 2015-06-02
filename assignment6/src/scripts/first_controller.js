var app = angular.module('myApp');

app.controller('FirstController', ['$scope', '$http', function($scope, $http) {
  $scope.testVariable = 'string';

  $scope.updatedName = '';

  $http.get('http://localhost:3001/notes')
  .success(function(data, status, headers, config) {
    $scope.notes = data;
  })
  .error(function(data, status, headers, config) {
    throw new Error('get error!');
  });

  $scope.addNote = function() {
    $http.post('http://localhost:3001/notes', {"id":$scope.notes.length,"name":$scope.noteName})
    .success(function(data, status, headers, config) {
      $scope.notes.push(data);
    })
    .error(function(data, status, headers, config) {
      throw new Error('adding error!');
    });
  };

  $scope.removeNote = function(note) {
    window.alert(note.id);
    $http.delete('http://localhost:3001/notes/' + note.id)
    .success(function(data, status, headers, config) {
      $scope.notes.splice($scope.notes.indexOf(note), 1);
    })
    .error(function(data, status, headers, config) {
      throw new Error('delete error!');
    });
  };
  // still working through this one.
  $scope.updateNote = function(note) {
    window.alert(note.updatedName);
    $http.put('http://localhost:3001/notes/' + note.id, {"id":note.id,"name":note.updatedName})
    .success(function(data, status, headers, config) {

      note.name = note.updatedName;
    })
    .error(function(data, status, headers, config) {
      throw new Error('update error!');
    });
  };
}])
