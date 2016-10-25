"use strict";

function Airport(capacity, weather) {
  var CAPACITY = 5;
  this.planes = [];
  this.capacity = capacity || CAPACITY;
  this.weather = new Weather(weather);
}

Airport.prototype.ReceivePlane = function(plane) {
  if ( this.planes.length >= this.capacity ) {
    throw new Error("Airport is full");
  }
  if ( this.isStormy() === true ) {
    throw new Error("Bad weather, unable to land");
  }
  plane.InstructLand();
  this.planes.push(plane);
};

Airport.prototype.ReleasePlane = function(plane) {
  if ( this.planes.length < 1 ) {
    throw new Error("Airport is empty");
  }
  if ( this.isStormy() === true ) {
    throw new Error("Bad weather, unable to takeoff");
  }
  plane.InstructTakeoff();
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
  };

Airport.prototype.isStormy = function() {
  this.weather.Generate();
  if ( this.weather.condition === "stormy" ) {
    return true;
  }
  else {
    return false;
  }
};
