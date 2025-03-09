// Sprite animation
import "./style.css";
import {
  AnimatedSprite,
  Application,
  Assets,
  Texture,
  Rectangle,
} from "pixi.js";

export default async function main() {
  //Application
  const app = new Application();

  await app.init({
    background: "royalblue",
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
  });

  app.canvas.id = "app-canvas";

  document.body.appendChild(app.canvas);

  const texture = await Assets.load("/images/Attack.png");
  // const frames = [
  //   new Texture({ source: texture, frame: new Rectangle(0, 0, 128, 128) }),
  //   new Texture({ source: texture, frame: new Rectangle(128, 0, 128, 128) }),
  //   new Texture({ source: texture, frame: new Rectangle(256, 0, 128, 128) }),
  //   new Texture({ source: texture, frame: new Rectangle(384, 0, 128, 128) }),
  //   new Texture({ source: texture, frame: new Rectangle(512, 0, 128, 128) }),
  // ];

  const frames = [];
  for (let i = 0; i < 5; i++) {
    frames.push(
      new Texture({
        source: texture,
        frame: new Rectangle(128 * i, 0, 128, 128),
      })
    );
  }

  const zombie = new AnimatedSprite(frames);
  app.stage.addChild(zombie);

  zombie.animationSpeed = 0.2;
  zombie.loop = false;
  // zombie.play();

  zombie.eventMode = "static";
  zombie.cursor = "pointer";
  zombie.on("pointertap", () => {
    // zombie.play();
    zombie.gotoAndPlay(0); // play from frame 0
  });

  zombie.onComplete = () => {
    zombie.gotoAndStop(0);
  };
}
