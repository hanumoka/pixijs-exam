// Filter
import "./style.css";
import {
  Application,
  Assets,
  Sprite,
  BlurFilter,
  ColorMatrixFilter,
  DisplacementFilter,
  AlphaFilter,
  NoiseFilter,
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

  //Sprite
  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  const bunny = new Sprite(texture);
  app.stage.addChild(bunny);
  bunny.anchor.set(0.5); // 중심점 설정
  bunny.x = app.screen.width / 2; // 위치 설정
  bunny.y = app.screen.height / 2; // 위치 설정
  bunny.scale.set(2);

  //Filter
  // const blurFilter = new BlurFilter({ strength: 3 });
  // bunny.filters = [blurFilter];
  const colorMatrixFilter = new ColorMatrixFilter(); // 색상 효과
  colorMatrixFilter.hue(Math.random() * 360);

  const filterTexture = await Assets.load(
    "https://pixijs.com/assets/tutorials/fish-pond/displacement_map.png"
  );
  const filterSprite = new Sprite(filterTexture);

  const filters = [
    new BlurFilter({ strength: 5 }), // 흐림 효과
    colorMatrixFilter,
    new DisplacementFilter(filterSprite), //이미지를 이용하여 외곡 효과
    new AlphaFilter({ alpha: 0.3 }), // 투명도 조절
    new NoiseFilter({ noise: 0.5 }), // 노이즈 효과
  ];

  bunny.filters = filters[2];
}
