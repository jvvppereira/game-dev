class Enemy extends Animation {
  constructor(config) {
    super(config);
    this.speed = config.speed;
    this.axisX = width;
  }

  attack() {
    this.axisX -= this.speed;
  }

  showUp() {
    this.axisX = width;
  }

  isOnScreen() {
    return this.axisX < -this.objectWidth;
  }
}
