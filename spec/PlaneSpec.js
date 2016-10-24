
describe("Plane", function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("plane is in the air at default", function() {
    expect(plane.land).toBe(false);
  });

  it("lands a plane at an airport", function() {
    plane.InstructLand();
    expect(plane.land).toBe(true);
  });

  it("takes off a plane from an airport", function() {
    plane.InstructTakeoff();
    expect(plane.land).toBe(false);
  });

});
