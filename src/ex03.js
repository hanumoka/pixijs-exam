// Graphics, Sprite
import "./style.css";
import { Application, Assets, Sprite, Graphics } from "pixi.js";

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

  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  console.log(texture);

  //Sprite
  const bunny = new Sprite(texture);
  app.stage.addChild(bunny);

  // bunny.position.x = 100;
  // bunny.position.y = 200;
  // bunny.x = 100;
  // bunny.y = 200;
  bunny.x = app.screen.width / 2; // 위치 설정
  bunny.y = app.screen.height / 2; // 위치 설정
  bunny.anchor.set(0.5); // 해당 텍스처의 위치를 좌상단이 아닌 중앙으로 설정
  // bunny.scale.set(2); // anchor기준으로 2배 확대

  //Graphics
  const border = new Graphics();
  border.rect(50, 200, 100, 100);
  border.fill("orange");
  app.stage.addChild(border);

  const line = new Graphics();
  line.moveTo(0, 100); // 시작 팬의 위치
  line.lineTo(app.screen.width, 100); // 끝 팬의 위치
  line.stroke({
    color: "#fff",
    width: 5,
  }); // 팬의 색상
  app.stage.addChild(line);
}
