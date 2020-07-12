class Home {
  constructor(sketch, button) {
    this.sketch = sketch;
    this.button = button;
  }
  draw() {
    image(this.sketch.getImage('home').loaded, 0, 0, width, height);
    this.write('PetS', { x: width / 2, y: height / 3 });
    this.write('vs', { x: width / 2, y: height / 2 });
    this.write('ZombieS', { x: width / 2, y: (height / 3) * 2 });
    this.createButton();
  }

  write(label, position) {
    textSize(120);
    textFont(this.sketch.getFont('home-screen').loaded);
    textAlign(CENTER);
    text(label, position.x, position.y);
  }

  createButton() {
    this.button.draw(() => {
      this.sketch.changeScreen('game');
    });
  }
}
