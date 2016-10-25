"use strict";

function Plane() {
  this.land = false;
}

  Plane.prototype.InstructLand = function() {
    this.land = true;
  };

  Plane.prototype.InstructTakeoff = function() {
    this.land = false;
  };

  Plane.prototype.isLand = function() {
    return this.land;
  };
