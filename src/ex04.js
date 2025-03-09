// Graphics, Sprite
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

  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  console.log(texture);

  //Sprite
  const bunny = new Sprite(texture);
  app.stage.addChild(bunny);

  bunny.x = 0; // 위치 설정
  bunny.y = app.screen.height / 2; // 위치 설정
  bunny.anchor.set(0.5); // 해당 텍스처의 위치를 좌상단이 아닌 중앙으로 설정
  bunny.scale.set(2); // anchor기준으로 2배 확대

  // let n = 0;

  app.ticker.add((delta) => {
    // console.log("repeat"); // 반복되는 속도의 기본은 1초에 60번 반복, 하지만 기기마다 다르다
    // console.log(delta.deltaTime); // 1초에 60번 반복되는 속도를 1로 표현
    bunny.x += 2 * delta.deltaTime; // 픽셀단위 이동, 기기마다 다른 속도를 일정하게 만들기 위해 delta.deltaTime을 곱해준다
    bunny.rotation += 0.1 * delta.deltaTime; // 회전속도
    if (bunny.x > app.screen.width) {
      bunny.x = 0;
    } //if

    // console.log(n++);
  });
}
