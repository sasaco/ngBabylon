import { WindowRefService } from '../../services/window-ref.service';
import { ElementRef, Injectable, NgZone } from '@angular/core';
import {
  Engine,
  ArcRotateCamera,
  Scene,
  Light,
  Mesh,
  Color3,
  Color4,
  Vector3,
  HemisphericLight,
  StandardMaterial,
  Texture,
  DynamicTexture,
  Space,
  Matrix,
  VertexData
} from '@babylonjs/core';
import { GridMaterial } from '@babylonjs/materials';
import * as WebIFC from 'web-ifc';


@Injectable({ providedIn: 'root' })
export class EngineService {
  private canvas: HTMLCanvasElement;
  private engine: Engine;
  private camera: ArcRotateCamera;
  private scene: Scene;
  private light: Light;

  private sphere: Mesh;

  private ifcapi = new WebIFC.IfcAPI();


  public constructor(
    private ngZone: NgZone,
    private windowRef: WindowRefService
  ) {
    this.ifcapi.SetWasmPath("./assets/wasm/");
   }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    // Then, load the Babylon 3D engine:
    this.engine = new Engine(this.canvas, true);

    // シーンを作成 create a basic BJS Scene object
    this.scene = new Scene(this.engine);
    this.scene.clearColor = new Color4(0, 0, 0, 0);

    // カメラを作成 create a FreeCamera, and set its position to (x:5, y:10, z:-20 )
    this.camera = new ArcRotateCamera('camera1', -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(5, 10, -20), this.scene);

    // target the camera to scene origin
    this.camera.setTarget(Vector3.Zero());

    // ユーザからの入力でカメラをコントロールするため、カメラをキャンバスにアタッチ
    this.camera.attachControl(this.canvas, false);

    // ライトを作成 create a basic light, aiming 0,1,0 - meaning, to the sky
    this.light = new HemisphericLight('light1', new Vector3(0, 100, 0), this.scene);

        // Ground
    // Kuchinoerabu Island
    // https://ja.wikipedia.org/wiki/%E5%8F%A3%E6%B0%B8%E8%89%AF%E9%83%A8%E5%B3%B6
    const BASE_ASSETS_URL = "https://cx20.github.io/jsdo.it-archives/assets/";
    const ground = Mesh.CreateGroundFromHeightMap("ground", BASE_ASSETS_URL + "4/9/G/4/49G4v.png", 50, 50, 100, 0, 5, this.scene, false);
    const groundMaterial = new GridMaterial("groundMaterial", this.scene);
    groundMaterial.majorUnitFrequency = 5;
    groundMaterial.minorUnitVisibility = 0.45;
    groundMaterial.gridRatio = 0.5;
    groundMaterial.mainColor = new Color3(0, 0.05, 0.2);
    groundMaterial.lineColor = new Color3(0, 1.0, 1.0);
    groundMaterial.opacity = 0.98;

    ground.position.y = -2.5;
    ground.material = groundMaterial;
    ground.material.wireframe = false;
    /*
    // create a built-in "sphere" shape; its constructor takes 4 params: name, subdivisions, radius, scene
    this.sphere = Mesh.CreateSphere('sphere1', 16, 2, this.scene);

    // create the material with its texture for the sphere and assign it to the sphere
    const spherMaterial = new StandardMaterial('sun_surface', this.scene);
    spherMaterial.diffuseTexture = new Texture('assets/textures/sun.jpg', this.scene);
    this.sphere.material = spherMaterial;

    // move the sphere upward 1/2 of its height
    this.sphere.position.y = 1;
    */

    // simple rotation along the y axis
    this.scene.registerAfterRender(() => {
      /*
      this.sphere.rotate(
        new Vector3(0, 1, 0),
        0.02,
        Space.LOCAL
      );
      */
    });

    // generates the world x-y-z axis for better understanding
    this.showWorldAxis(8);
  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      const rendererLoopCallback = () => {
        this.scene.render();
      };

      if (this.windowRef.document.readyState !== 'loading') {
        this.engine.runRenderLoop(rendererLoopCallback);
      } else {
        this.windowRef.window.addEventListener('DOMContentLoaded', () => {
          this.engine.runRenderLoop(rendererLoopCallback);
        });
      }

      this.windowRef.window.addEventListener('resize', () => {
        this.engine.resize();
      });
    });
  }

  /**
   * creates the world axes
   *
   * Source: https://doc.babylonjs.com/snippets/world_axes
   *
   * @param size number
   */
  public showWorldAxis(size: number): void {

    const makeTextPlane = (text: string, color: string, textSize: number) => {
      const dynamicTexture = new DynamicTexture('DynamicTexture', 50, this.scene, true);
      dynamicTexture.hasAlpha = true;
      dynamicTexture.drawText(text, 5, 40, 'bold 36px Arial', color, 'transparent', true);
      const plane = Mesh.CreatePlane('TextPlane', textSize, this.scene, true);
      const material = new StandardMaterial('TextPlaneMaterial', this.scene);
      material.backFaceCulling = false;
      material.specularColor = new Color3(0, 0, 0);
      material.diffuseTexture = dynamicTexture;
      plane.material = material;

      return plane;
    };

    const axisX = Mesh.CreateLines(
      'axisX',
      [
        Vector3.Zero(),
        new Vector3(size, 0, 0), new Vector3(size * 0.95, 0.05 * size, 0),
        new Vector3(size, 0, 0), new Vector3(size * 0.95, -0.05 * size, 0)
      ],
      this.scene,
      true
    );

    axisX.color = new Color3(1, 0, 0);
    const xChar = makeTextPlane('X', 'red', size / 10);
    xChar.position = new Vector3(0.9 * size, -0.05 * size, 0);

    const axisY = Mesh.CreateLines(
      'axisY',
      [
        Vector3.Zero(),
        new Vector3(0, size, 0), new Vector3(-0.05 * size, size * 0.95, 0),
        new Vector3(0, size, 0), new Vector3(0.05 * size, size * 0.95, 0)
      ],
      this.scene,
      true
    );

    axisY.color = new Color3(0, 1, 0);
    const yChar = makeTextPlane('Y', 'green', size / 10);
    yChar.position = new Vector3(0, 0.9 * size, -0.05 * size);

    const axisZ = Mesh.CreateLines(
      'axisZ',
      [
        Vector3.Zero(),
        new Vector3(0, 0, size), new Vector3(0, -0.05 * size, size * 0.95),
        new Vector3(0, 0, size), new Vector3(0, 0.05 * size, size * 0.95)
      ],
      this.scene,
      true
    );

    axisZ.color = new Color3(0, 0, 1);
    const zChar = makeTextPlane('Z', 'blue', size / 10);
    zChar.position = new Vector3(0, 0.05 * size, 0.9 * size);
  }




  //#region IFCからメッシュの読み込み
  public async loadIFCFile(buffer: Uint8Array){
      await this.ifcapi.Init();
      const modelID = this.ifcapi.OpenModel(buffer)
      this.createMesh(modelID)
      // アニメーションさせる場合
      this.createMeshAnimation(modelID)
  }

    // メッシュの作成
    private createMesh(modelID: number) {
      this.ifcapi.StreamAllMeshes(modelID, (mesh) => this.loadMesh(modelID, mesh))
    }
  // アニメーションをさせてメッシュを作成
  private createMeshAnimation(modelID: number) {
    if (this.scene === null) return

    // すべてのメッシュを同期取得
    let meshData = []
    const meshes = this.ifcapi.LoadAllGeometry(modelID)
    for (let i = 0; i < meshes.size(); i++) {
      const mesh = meshes.get(i)
      for(const geometry of this.loadGeometry(modelID, mesh)){
        meshData.push(geometry)
      }
    }

    // 表示順のソート設定
    meshData = meshData.map(v => {
      let posy = 100000
      for (let i = 0; i < v.vertexData.positions.length; i += 3) {
        posy = Math.min(posy, v.vertexData.positions[i + 2])
      }
      return { ...v, sortKey: v.flatTransformation[13] + posy }
    })
    meshData.sort((a, b) => a.sortKey - b.sortKey)

    // 10秒かけて表示されるように
    const msec = 10000 / meshData.length
    meshData.forEach((v, i) => {
      setTimeout(() => {
        this.ifc2babylonMesh(this.scene, v.vertexData, v.flatTransformation, v.color)
      }, msec * i);
    })
  }

  // IFCからメッシュの読み込み
  private loadMesh(modelID: number, mesh: WebIFC.FlatMesh) {
    if (this.scene === null) return;

    // IFCからBabylon.jsのメッシュを構築
    for(const geometry of this.loadGeometry(modelID, mesh)){
      this.ifc2babylonMesh(
        this.scene,
        geometry.vertexData,
        geometry.flatTransformation,
        geometry.color
      )
    }
  }

  // IFCからメッシュ情報を取得するジェネレータ
  private* loadGeometry(modelID: number, mesh: WebIFC.FlatMesh) {
    const placedGeometries = mesh.geometries;
    const size = placedGeometries.size();
    for (let i = 0; i < size; i++) {
      const placedGeometry = placedGeometries.get(i)
      const geometry = this.ifcapi.GetGeometry(modelID, placedGeometry.geometryExpressID);
      // 6つで一組のデータ： x, y, z, normalx, normaly, normalz
      const verts = this.ifcapi.GetVertexArray(geometry.GetVertexData(), geometry.GetVertexDataSize());
      // 3つで一組のデータ：頂点index 1, 2, 3
      const indices = this.ifcapi.GetIndexArray(geometry.GetIndexData(), geometry.GetIndexDataSize());

      // 頂点の座標と法線を分離
      const positions = [];
      const normals = [];
      for (let i = 0; i < verts.length; i += 6) {
        positions.push(verts[i], verts[i + 1], verts[i + 2]);
        normals.push(verts[i + 3], verts[i + 4], verts[i + 5]);
      }

      const vertexData = {
        positions: positions,
        normals: normals,
        indices: Array.from(indices),
      }

      // 頂点と変形行列と色情報を返す
      const geometoryData = {
        vertexData: vertexData,
        flatTransformation: placedGeometry.flatTransformation,
        color: placedGeometry.color,
      };

      yield geometoryData;
    }
  }

  // IFCの形状情報からBabylon.jsのメッシュを作成
  private ifc2babylonMesh(
    scene: Scene,
    vertexData: { positions: number[], normals: number[], indices: number[] },
    flatTransformation: number[],
    color: { x: number, y: number, z: number, w: number },
  ) {
    // メッシュ作成
    const mesh = this.createMeshFromData(scene, vertexData)

    // メッシュの移動・変形
    const transformationMatrix = Matrix.FromArray(flatTransformation);
    mesh.setPivotMatrix(transformationMatrix, false);

    // 奥行きZの左手系に
    mesh.scaling.z *= -1;

    // 面を反転
    mesh.flipFaces(true);

    // 色設定
    const { x, y, z, w } = color
    const material = new StandardMaterial("material", scene);
    material.diffuseColor = new Color3(x, y, z);
    material.alpha = w
    material.backFaceCulling = false;
    mesh.material = material;
  }

  // 頂点データ化からメッシュ作成
  private createMeshFromData(scene: Scene, vertexData: { positions: number[], normals: number[], indices: number[] }) {
    const mesh = new Mesh("mesh", scene);
    const vertexDataForBabylon = new VertexData();
    vertexDataForBabylon.positions = vertexData.positions;
    vertexDataForBabylon.normals = vertexData.normals;
    vertexDataForBabylon.indices = vertexData.indices;
    vertexDataForBabylon.applyToMesh(mesh);
    return mesh;
  }
  //#endregion

}
