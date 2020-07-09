class Button {
  constructor(text, position) {
    this.text = text;
    this.x = position.x;
    this.y = position.y;

    this.button = createButton(this.text);
  }

  draw(fn, classCSS) {
    this.button.position(this.x, this.y);
    this.button.mousePressed(() => {
      fn();
      this.button.remove();
    });

    if (classCSS) {
      this.button.addClass(classCSS);
    }
  }
}
