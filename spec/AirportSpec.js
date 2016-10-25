describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe("capacity", function() {
    it("has a default capacity of 5", function() {
      expect(airport.capacity).toEqual(5);
    });

    it("is able to set capacity to any value", function() {
      airport = new Airport(10);
      expect(airport.capacity).toEqual(10);
    });
  });

  describe("empty or full", function() {
    it("does not land a plane when airport is full", function() {

      for (i = 1; i <= 5; i++){
        airport.ReceivePlane(plane);
      }
      expect( function(){ airport.ReceivePlane(plane); } ).toThrow(new Error("Airport is full"));
    });

    it("does not takeoff a plane when airport is empty", function() {
      expect( function(){ airport.ReleasePlane(plane); } ).toThrow(new Error("Airport is empty"));
    });
  });

  describe("takeoff and landing in good weather", function() {
    it("confirms plane landing at airport", function() {
      airport.ReceivePlane(plane);
      expect(airport.planes).toContain(plane);
    });

    it("confirms release of plane from airport", function() {
      airport.ReceivePlane(plane);
      airport.ReleasePlane(plane);
      expect(airport.planes).not.toContain(plane);
    });
  });

  describe("takeoff and landing in bad weather", function() {
    it('prevents takeoff when weather is stormy', function(){
      airport.ReceivePlane(plane);
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ airport.ReleasePlane(plane);}).toThrowError('Bad weather, unable to takeoff');
      expect(airport.planes).toContain(plane);
    });

    it('prevents landing when weather is stormy', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ airport.ReceivePlane(plane);}).toThrowError('Bad weather, unable to land');
    });
  });

});
