class Scenario {
  constructor({ background, foreground }, speed) {
    this.background = background;
    this.foreground = foreground;
    this.backgroundSpeed = speed;
    this.foregroundSpeed = this.backgroundSpeed / 2 ;
    this.backgroundInitalAxisX = 0;
    this.backgroundEndAxisX = width;
    this.foregroundInitalAxisX = this.backgroundInitalAxisX;
    this.foregroundEndAxisX = this.backgroundEndAxisX;
  }

  show() {
    image(this.background, this.backgroundInitalAxisX, 0, width, height);
    image(this.background, this.backgroundEndAxisX, 0, width, height);
    image(this.foreground, this.foregroundInitalAxisX, 0, width, height);
    image(this.foreground, this.foregroundEndAxisX, 0, width, height);
  }

  move() {
    this.backgroundInitalAxisX -= this.backgroundSpeed;
    this.backgroundEndAxisX -= this.backgroundSpeed;
    if (this.backgroundInitalAxisX < -width) {
      this.backgroundInitalAxisX = width;
    }
    if (this.backgroundEndAxisX < -width) {
      this.backgroundEndAxisX = width;
    }

    this.foregroundInitalAxisX -= this.foregroundSpeed;
    this.foregroundEndAxisX -= this.foregroundSpeed;
    if (this.foregroundInitalAxisX < -width) {
      this.foregroundInitalAxisX = width;
    }
    if (this.foregroundEndAxisX < -width) {
      this.foregroundEndAxisX = width;
    }
  }
}
