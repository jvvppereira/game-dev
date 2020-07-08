class Home {
  constructor(sketch) {
    this.sketch = sketch;
  }
  setup() {}
  draw() {
    image(this.sketch.getImage(`home`).loaded, 0, 0, width, height);
  }
}
