(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('myApp', []);

},{}],2:[function(require,module,exports){
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
    window.alert(note.id);
    $http.delete('/notes/' + note.id)
    .success(function(data, status, headers, config) {
      $scope.notes.splice($scope.notes.indexOf(note), 1);
    })
    .error(function(data, status, headers, config) {
      throw new Error('delete error!');
    });
  };

  $scope.updateNote = function(note) {
    window.alert(note.updatedName);
    $http.put('/notes/' + note.id, {"id":note.id,"name":note.updatedName})
    .success(function(data, status, headers, config) {

      note.name = note.updatedName;
    })
    .error(function(data, status, headers, config) {
      throw new Error('update error!');
    });
  };
}])

},{}]},{},[1,2]);
