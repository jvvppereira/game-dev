class Animation {
  constructor({
    image,
    objectWidth,
    objectHeight,
    floorGap,
    spritesQuantity,
    spriteLines,
    spriteColumns,
    axisX,
  }) {
    this.image = image;
    this.axisX = axisX;
    this.currentFrameOnRunnig = 0;
    this.objectWidth = objectWidth;
    this.objectHeight = objectHeight;
    this.floorGap = floorGap;
    this.spritesQuantity = spritesQuantity;
    this.spriteLines = spriteLines;
    this.spriteColumns = spriteColumns;
    this.initialAxisY = height - this.objectHeight - this.floorGap;
    this.axisY = this.initialAxisY;
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
    for (let indexLines = 0; indexLines < lines; indexLines++) {
      for (let indexColumns = 0; indexColumns < columns; indexColumns++) {
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
