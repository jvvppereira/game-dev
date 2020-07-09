function preLoad(sketch) {
  sketch.images = [];
  sketch.sounds = [];
  sketch.fonts = [];

  sketch.images.push(
    {
      name: 'background',
      path: 'images/scenario/forest-01/layers/background.png',
    },
    {
      name: 'foreground',
      path: 'images/scenario/forest-01/layers/foreground.png',
    },
    {
      name: 'characterRun',
      path: 'images/dog/ltr/run.png',
    },
    {
      name: 'enemyRun',
      path: 'images/cat/rtl/slide.png',
    },
    {
      name: 'bigEnemy',
      path: 'images/zombie/male/rtl/walk.png',
    },
    {
      name: 'flyEnemy',
      path: 'images/bat/rtl/fly.png',
    },
    {
      name: 'gameOver',
      path: 'images/assets/game-over.png',
    },
    {
      name: 'home',
      path: 'images/assets/home-screen.png',
    }
  );

  sketch.sounds.push(
    {
      name: 'gameMusic',
      path: 'audios/game-music.mp3',
    },
    {
      name: 'jump',
      path: 'audios/jump.mp3',
    }
  );

  sketch.fonts.push({
    name: 'home-screen',
    path: 'fonts/home-screen.otf',
  });

  sketch.images.forEach((image) => {
    image.loaded = loadImage(image.path);
  });
  sketch.sounds.forEach((sound) => {
    sound.loaded = loadSound(sound.path);
  });
  sketch.fonts.forEach((font) => {
    font.loaded = loadFont(font.path);
  });

  sketch.getImage = (name) => images.find((image) => image.name == name);
  sketch.getSound = (name) => sounds.find((sound) => sound.name == name);
  sketch.getFont = (name) => fonts.find((font) => font.name == name);
}
