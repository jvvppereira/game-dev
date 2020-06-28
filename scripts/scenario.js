class Scenario {
  constructor(image, speed) {
    this.image = image;
    this.speed = speed;
    this.initalAxisX = 0;
    this.endAxisX = width;
  }

  show() {
    image(this.image, this.initalAxisX, 0, width, height);
    image(this.image, this.endAxisX, 0, width, height);
  }

  move() {
    this.initalAxisX -= this.speed;
    this.endAxisX -= this.speed;
    if (this.initalAxisX < -width) {
      this.initalAxisX = width;
    }
    if (this.endAxisX < -width) {
      this.initalAxisX = width;
    }
  }
}