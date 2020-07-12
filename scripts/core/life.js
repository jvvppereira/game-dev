class Life {
  constructor(sketch, { maxQuantity, starts, size }) {
    this.sketch = sketch;
    this.maxQuantity = maxQuantity;
    this.starts = starts;
    this.currentQuantity = this.starts;
    this.width = size.width;
    this.height = size.height;
  }

  draw() {
    const marginTop = 10;
    const marginLeft = 10;

    for (let index = 0; index < this.currentQuantity; index++) {
      image(
        this.sketch.getImage('heart').loaded,
        marginLeft * (index + 1) + this.width * index,
        marginTop,
        this.width,
        this.height
      );
    }
  }

  add() {
    if (this.currentQuantity < this.maxQuantity) {
      this.currentQuantity++;
    }
  }

  remove() {
    this.currentQuantity--;
  }

  getQuantity() {
    return this.currentQuantity;
  }
}
