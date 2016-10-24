describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport(5);
    plane = new Plane();
  });

  it("confirms plane landing at airport", function() {
    airport.ReceivePlane(plane);
    expect(airport.planes).toContain(plane);
  });

  it("confirms release of plane from airport", function() {
    airport.ReceivePlane(plane);
    airport.ReleasePlane(plane);
    expect(airport.planes).not.toContain(plane);
  });

  it("does not land a plane when airport is full", function() {
    airport.ReceivePlane(plane);
    airport.ReceivePlane(plane);
    airport.ReceivePlane(plane);
    airport.ReceivePlane(plane);
    airport.ReceivePlane(plane);
    expect( function(){ airport.ReceivePlane(plane); } ).toThrow(new Error("Airport is full"));
  });

  it("does not takeoff a plane when airport is empty", function() {
    expect( function(){ airport.ReleasePlane(plane); } ).toThrow(new Error("Airport is empty"));
  });

});
