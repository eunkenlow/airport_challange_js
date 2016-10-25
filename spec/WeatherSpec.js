describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("generates stormy weather", function() {
    spyOn(weather,'Change').and.returnValue(1);
    weather.Generate();
    expect(weather.condition).toEqual("stormy");
  });

  it("generates sunny weather", function() {
    spyOn(weather,'Change').and.returnValue(2);
    weather.Generate();
    expect(weather.condition).toEqual("sunny");
  });
});
