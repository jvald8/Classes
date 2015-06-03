describe('FirstController', function() {
  beforeEach(module('myApp'));

  var firstController;
  var httpBackend;
  var scope;

  beforeEach(
    inject(function($injector, $controller, $rootScope) {
      scope = $rootScope.$new();
      httpBackend = $injector.get('$httpBackend');
      firstController = $controller('FirstController', {
        $scope: scope
      });
    }));


  it('should return an empty array with a 200 status code', function() {
    httpBackend.expectGET('/notes').respond(200, []);
    httpBackend.flush();
    expect(scope.notes.length).toEqual(0);
  });

  it('should add a note object with a 201 status code', function() {
    httpBackend.expectGET('/notes').respond(200, []);
    httpBackend.flush();
    scope.noteName = 'new note';
    httpBackend.expectPOST('/notes').respond(201, {'id':'0', 'name':'new note'});
    scope.addNote();
    httpBackend.flush();
    expect(scope.notes.length).toEqual(1);
    expect(scope.notes[0].name).toEqual('new note');
  });

  it('should delete the third object', function() {
    httpBackend.expectGET('/notes').respond(200, [{'id':'0', 'name':'new note'},{'id':'1', 'name':'first note'},{'id':'2', 'name':'second note'}, {'id':'3', 'name':'third note'}]);
    httpBackend.flush();
    expect(scope.notes.length).toEqual(4);
    httpBackend.expectDELETE('/notes/3').respond(201);
    scope.removeNote({'id':'3', 'name':'third note'});
    httpBackend.flush();
    expect(scope.notes.length).toEqual(3);
    expect(scope.notes[1].name).toEqual('first note');
  });

  it('should delete the third object', function() {
    httpBackend.expectGET('/notes').respond(200, [{'id':'0', 'name':'new note'},{'id':'1', 'name':'first note'},{'id':'2', 'name':'second note'}, {'id':'3', 'name':'third note'}]);
    httpBackend.flush();
    expect(scope.notes.length).toEqual(4);
    httpBackend.expectDELETE('/notes/3').respond(201);
    scope.removeNote({'id':'3', 'name':'third note'});
    httpBackend.flush();
    expect(scope.notes.length).toEqual(3);
    expect(scope.notes[1].name).toEqual('first note');
  });

  /*it('should edit the first object name to zero note', function() {
    httpBackend.expectGET('/notes').respond(200, [{'id':'0', 'name':'new note'}]);
    httpBackend.flush();
    expect(scope.notes.length).toEqual(1);
    httpBackend.expectPUT('/notes/0').respond(201, {'id':'0', 'name':'zero note'});
    //scope.updateNote({'id':'0', 'name':'zero note'});
    //httpBackend.flush();
    console.log(scope.notes);
    expect(scope.notes[0].name).toEqual('zero note');
  });*/
});
