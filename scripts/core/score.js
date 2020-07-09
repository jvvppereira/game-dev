class Score {
  constructor() {
    this.points = 0;
  }

  show() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(60);
    text(`score: ` + parseInt(this.points), width - 30, 50);
  }

  getPoints() {
    return this.points;
  }

  addPoint() {
    this.points += 0.1;
  }
}
