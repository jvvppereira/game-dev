class Character {
  constructor(image) {
    this.image = image;
    this.currentFrameOnRunnig = 0;
  }

  show() {
    const characterWidth = 480;
    const characterHeight = 480;
    const axisX = 0;
    const axisY = height - characterHeight / 2;
    const spritesQuantity = 8;
    const spriteLines = 3;
    const spriteColumns = 3;

    this.imagePositon = this.generateMatrixPosition(
      spritesQuantity,
      spriteLines,
      spriteColumns,
      characterWidth + 60,
      characterHeight
    );

    image(
      this.image,
      axisX,
      axisY,
      characterWidth / 2,
      characterHeight / 2,
      this.imagePositon[this.currentFrameOnRunnig][0],
      this.imagePositon[this.currentFrameOnRunnig][1],
      characterWidth,
      characterHeight
    );

    this.run();
  }

  generateMatrixPosition(size, lines, columns, imageWidht, imageHeight) {
    const matrix = [];
    let index = 0;
    for (let indexColumns = 0; indexColumns < columns; indexColumns++) {
      for (let indexLines = 0; indexLines < lines; indexLines++) {
        if (indexColumns + indexLines + 2 <= size) {
          matrix[index] = [indexLines * imageWidht, indexColumns * imageHeight];
          index++;
        }
      }
    }
    return matrix;
  }

  run() {
    this.currentFrameOnRunnig++;

    if (this.currentFrameOnRunnig >= this.imagePositon.length - 1) {
      this.currentFrameOnRunnig = 0;
    }
  }
}
