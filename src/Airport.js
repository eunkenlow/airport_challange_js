function Airport(capacity) {
  this.planes = [];
  this.capacity = capacity;
}

Airport.prototype.ReceivePlane = function(plane) {
  if ( this.planes.length >= this.capacity ) {
    throw new Error("Airport is full");
  }
  plane.InstructLand();
  this.planes.push(plane);
}

Airport.prototype.ReleasePlane = function(plane) {
  if ( this.planes.length < 1 ) {
    throw new Error("Airport is empty");
  }
  plane.InstructTakeoff();
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
}
