function Weather() {
  this.condition = "sunny";
}

Weather.prototype.Generate = function() {
  if (this.Change() === 1) {
    this.condition = "stormy";
  }
  else {
    this.condition = "sunny";
  }
};

Weather.prototype.Change = function() {
  return Math.floor((Math.random() * 4) + 1);
};
