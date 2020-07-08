class Scenario {
  constructor({ background, foreground, speed }) {
    this.background = background;
    this.foreground = foreground;
    this.backgroundSpeed = speed;
    this.foregroundSpeed = this.backgroundSpeed / 2;
    this.backgroundInitialAxisX = 0;
    this.backgroundEndAxisX = width;
    this.foregroundInitialAxisX = this.backgroundInitialAxisX;
    this.foregroundEndAxisX = this.backgroundEndAxisX;
  }

  show() {
    image(this.background, this.backgroundInitialAxisX, 0, width, height);
    image(this.background, this.backgroundEndAxisX, 0, width, height);
    image(this.foreground, this.foregroundInitialAxisX, 0, width, height);
    image(this.foreground, this.foregroundEndAxisX, 0, width, height);
  }

  move() {
    this.backgroundInitialAxisX -= this.backgroundSpeed;
    this.backgroundEndAxisX -= this.backgroundSpeed;
    if (this.backgroundInitialAxisX < -width) {
      this.backgroundInitialAxisX = width;
    }
    if (this.backgroundEndAxisX < -width) {
      this.backgroundEndAxisX = width;
    }

    this.foregroundInitialAxisX -= this.foregroundSpeed;
    this.foregroundEndAxisX -= this.foregroundSpeed;
    if (this.foregroundInitialAxisX < -width) {
      this.foregroundInitialAxisX = width;
    }
    if (this.foregroundEndAxisX < -width) {
      this.foregroundEndAxisX = width;
    }
  }
}
