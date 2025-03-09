// Interfaction
import "./style.css";
import { Application, Assets, Sprite } from "pixi.js";

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

  //Sprite
  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  const bunny = new Sprite(texture);
  app.stage.addChild(bunny);
  bunny.anchor.set(0.5); // 중심점 설정
  bunny.x = app.screen.width / 2; // 위치 설정
  bunny.y = app.screen.height / 2; // 위치 설정

  bunny.eventMode = "static";
  bunny.cursor = "pointer";

  let n = 1;

  //PC, Mobile 모두 클릭이 되게 하기 위해 pointertap 사용(click은 모바일에서 동작 안함)
  bunny.on("pointertap", () => {
    bunny.scale.set(++n);
  });
}
