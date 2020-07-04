class Animate {
  constructor(image) {
    this.image = image;
    this.currentFrameOnRunnig = 0;
  }

  show() {
    this.imagePositon = this.generateMatrixPosition(
      this.spritesQuantity,
      this.spriteLines,
      this.spriteColumns,
      this.objectWidth,
      this.objectHeight
    );

    image(
      this.image,
      this.axisX,
      this.axisY,
      this.objectWidth,
      this.objectHeight,
      this.imagePositon[this.currentFrameOnRunnig][0],
      this.imagePositon[this.currentFrameOnRunnig][1],
      this.objectWidth,
      this.objectHeight
    );

    this.move();
  }

  generateMatrixPosition(size, lines, columns, imageWidth, imageHeight) {
    const matrix = [];
    let index = 0;
    for (let indexColumns = 0; indexColumns < columns; indexColumns++) {
      for (let indexLines = 0; indexLines < lines; indexLines++) {
        if (indexColumns + indexLines + 2 <= size) {
          matrix[index] = [indexColumns * imageWidth, indexLines * imageHeight];
          index++;
        }
      }
    }
    return matrix;
  }

  move() {
    this.currentFrameOnRunnig++;

    if (this.currentFrameOnRunnig >= this.imagePositon.length - 1) {
      this.currentFrameOnRunnig = 0;
    }
  }
}
