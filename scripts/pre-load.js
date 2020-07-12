function preLoad(sketch) {
  sketch.images = [];
  sketch.sounds = [];
  sketch.fonts = [];
  sketch.jsons = [];

  sketch.images.push(
    {
      name: 'background-lvl-01',
      path: 'images/scenario/forest-01/layers/background.png',
    },
    {
      name: 'foreground-lvl-01',
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
      name: 'skull',
      path: 'images/skull/skull.png',
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
      path: 'images/game-over.png',
    },
    {
      name: 'heart',
      path: 'images/heart.png',
    },
    {
      name: 'home',
      path: 'images/home-screen.png',
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
 
  sketch.jsons.push({
    name: 'memory-card',
    path: 'memory-card.json',
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
  sketch.jsons.forEach((json) => {
    json.loaded = loadJSON(json.path);
  });

  sketch.getImage = (name) => images.find((image) => image.name === name);
  sketch.getSound = (name) => sounds.find((sound) => sound.name === name);
  sketch.getFont = (name) => fonts.find((font) => font.name === name);
  sketch.getJSON = (name) => jsons.find((json) => json.name === name);
}
