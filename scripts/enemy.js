class Enemy extends Animation {
  constructor(config) {
    super(config);
    this.speed = config.speed;
    this.delay = config.delay;

    this.axisX = width + this.delay;
  }

  attack() {
    this.axisX -= this.speed;
    if (this.axisX < -this.objectWidth - this.delay) {
      this.axisX = width;
    }
  }
}
