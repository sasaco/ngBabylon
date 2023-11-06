"use strict";
(self["webpackChunkng_babylon_template"] = self["webpackChunkng_babylon_template"] || []).push([["main"],{

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_engine_engine_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/engine/engine.component */ 12263);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu.component */ 16075);



class AppComponent {
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    consts: [[1, "ui-wrapper"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-engine");
      }
    },
    dependencies: [_components_engine_engine_component__WEBPACK_IMPORTED_MODULE_0__.EngineComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _services_window_ref_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/window-ref.service */ 86889);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 24987);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 52484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var _components_engine_engine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/engine/engine.component */ 12263);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu/menu.component */ 16075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);












class AppModule {
  static ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_services_window_ref_service__WEBPACK_IMPORTED_MODULE_0__.WindowRefService],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_engine_engine_component__WEBPACK_IMPORTED_MODULE_2__.EngineComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule]
  });
})();

/***/ }),

/***/ 12263:
/*!*******************************************************!*\
  !*** ./src/app/components/engine/engine.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EngineComponent: () => (/* binding */ EngineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _engine_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.service */ 14758);


const _c0 = ["rendererCanvas"];
class EngineComponent {
  engServ;
  rendererCanvas;
  constructor(engServ) {
    this.engServ = engServ;
  }
  ngOnInit() {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }
  static ɵfac = function EngineComponent_Factory(t) {
    return new (t || EngineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_engine_service__WEBPACK_IMPORTED_MODULE_0__.EngineService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EngineComponent,
    selectors: [["app-engine"]],
    viewQuery: function EngineComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rendererCanvas = _t.first);
      }
    },
    decls: 3,
    vars: 0,
    consts: [[1, "engine-wrapper"], ["id", "renderCanvas"], ["rendererCanvas", ""]],
    template: function EngineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 14758:
/*!*****************************************************!*\
  !*** ./src/app/components/engine/engine.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EngineService: () => (/* binding */ EngineService)
/* harmony export */ });
/* harmony import */ var D_Document_Project_ngBabylon_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core */ 68911);
/* harmony import */ var _babylonjs_materials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/materials */ 20307);
/* harmony import */ var web_ifc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web-ifc */ 15170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_window_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/window-ref.service */ 86889);






class EngineService {
  ngZone;
  windowRef;
  canvas;
  engine;
  camera;
  scene;
  light;
  sphere;
  ifcapi = new web_ifc__WEBPACK_IMPORTED_MODULE_3__.IfcAPI();
  constructor(ngZone, windowRef) {
    this.ngZone = ngZone;
    this.windowRef = windowRef;
    this.ifcapi.SetWasmPath("./assets/wasm/");
  }
  createScene(canvas) {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;
    // Then, load the Babylon 3D engine:
    this.engine = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Engine(this.canvas, true);
    // シーンを作成 create a basic BJS Scene object
    this.scene = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Scene(this.engine);
    this.scene.clearColor = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Color4(255, 255, 255, 0);
    // カメラを作成 create a FreeCamera, and set its position to (x:5, y:10, z:-20 )
    this.camera = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.ArcRotateCamera('camera1', -Math.PI / 2, Math.PI / 2.5, 3, new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(5, 10, -20), this.scene);
    // target the camera to scene origin
    this.camera.setTarget(_babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero());
    // ユーザからの入力でカメラをコントロールするため、カメラをキャンバスにアタッチ
    this.camera.attachControl(this.canvas, false);
    // ライトを作成 create a basic light, aiming 0,1,0 - meaning, to the sky
    this.light = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.HemisphericLight('light1', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 100, 0), this.scene);
    // 床を生成 create a Ground
    const ground = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.MeshBuilder.CreateGround("ground", {
      width: 100,
      height: 100
    }, this.scene);
    const groundMaterial = new _babylonjs_materials__WEBPACK_IMPORTED_MODULE_2__.GridMaterial("groundMaterial", this.scene);
    groundMaterial.majorUnitFrequency = 5;
    groundMaterial.minorUnitVisibility = 0.45;
    groundMaterial.gridRatio = 0.5;
    groundMaterial.mainColor = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Color3(0, 0.05, 0.2);
    groundMaterial.lineColor = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Color3(0, 1.0, 1.0);
    groundMaterial.opacity = 0.98;
    ground.position.y = 0;
    ground.material = groundMaterial;
    ground.material.wireframe = false;
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
  animate() {
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
  showWorldAxis(size) {
    const makeTextPlane = (text, color, textSize) => {
      const dynamicTexture = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.DynamicTexture('DynamicTexture', 50, this.scene, true);
      dynamicTexture.hasAlpha = true;
      dynamicTexture.drawText(text, 5, 40, 'bold 36px Arial', color, 'transparent', true);
      const plane = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Mesh.CreatePlane('TextPlane', textSize, this.scene, true);
      const material = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial('TextPlaneMaterial', this.scene);
      material.backFaceCulling = false;
      material.specularColor = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Color3(0, 0, 0);
      material.diffuseTexture = dynamicTexture;
      plane.material = material;
      return plane;
    };
    const axisX = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Mesh.CreateLines('axisX', [_babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(size, 0, 0), new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(size * 0.95, 0.05 * size, 0), new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(size, 0, 0), new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(size * 0.95, -0.05 * size, 0)], this.scene, true);
    axisX.color = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Color3(1, 0, 0);
    const xChar = makeTextPlane('X', 'red', size / 10);
    xChar.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(0.9 * size, -0.05 * size, 0);
    const axisY = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Mesh.CreateLines('axisY', [_babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, size, 0), new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(-0.05 * size, size * 0.95, 0), new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, size, 0), new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(0.05 * size, size * 0.95, 0)], this.scene, true);
    axisY.color = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Color3(0, 1, 0);
    const yChar = makeTextPlane('Y', 'green', size / 10);
    yChar.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0.9 * size, -0.05 * size);
    const axisZ = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Mesh.CreateLines('axisZ', [_babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, size), new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -0.05 * size, size * 0.95), new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, size), new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0.05 * size, size * 0.95)], this.scene, true);
    axisZ.color = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Color3(0, 0, 1);
    const zChar = makeTextPlane('Z', 'blue', size / 10);
    zChar.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0.05 * size, 0.9 * size);
  }
  //#region IFCからメッシュの読み込み
  loadIFCFile(buffer) {
    var _this = this;
    return (0,D_Document_Project_ngBabylon_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.ifcapi.Init();
      const modelID = _this.ifcapi.OpenModel(buffer);
      _this.createMesh(modelID);
      // アニメーションさせる場合
      _this.createMeshAnimation(modelID);
    })();
  }
  // メッシュの作成
  createMesh(modelID) {
    this.ifcapi.StreamAllMeshes(modelID, mesh => this.loadMesh(modelID, mesh));
  }
  // アニメーションをさせてメッシュを作成
  createMeshAnimation(modelID) {
    if (this.scene === null) return;
    // すべてのメッシュを同期取得
    let meshData = [];
    const meshes = this.ifcapi.LoadAllGeometry(modelID);
    for (let i = 0; i < meshes.size(); i++) {
      const mesh = meshes.get(i);
      for (const geometry of this.loadGeometry(modelID, mesh)) {
        meshData.push(geometry);
      }
    }
    // 表示順のソート設定
    meshData = meshData.map(v => {
      let posy = 100000;
      for (let i = 0; i < v.vertexData.positions.length; i += 3) {
        posy = Math.min(posy, v.vertexData.positions[i + 2]);
      }
      return {
        ...v,
        sortKey: v.flatTransformation[13] + posy
      };
    });
    meshData.sort((a, b) => a.sortKey - b.sortKey);
    // 10秒かけて表示されるように
    const msec = 10000 / meshData.length;
    meshData.forEach((v, i) => {
      setTimeout(() => {
        this.ifc2babylonMesh(this.scene, v.vertexData, v.flatTransformation, v.color);
      }, msec * i);
    });
  }
  // IFCからメッシュの読み込み
  loadMesh(modelID, mesh) {
    if (this.scene === null) return;
    // IFCからBabylon.jsのメッシュを構築
    for (const geometry of this.loadGeometry(modelID, mesh)) {
      this.ifc2babylonMesh(this.scene, geometry.vertexData, geometry.flatTransformation, geometry.color);
    }
  }
  // IFCからメッシュ情報を取得するジェネレータ
  *loadGeometry(modelID, mesh) {
    const placedGeometries = mesh.geometries;
    const size = placedGeometries.size();
    for (let i = 0; i < size; i++) {
      const placedGeometry = placedGeometries.get(i);
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
        indices: Array.from(indices)
      };
      // 頂点と変形行列と色情報を返す
      const geometoryData = {
        vertexData: vertexData,
        flatTransformation: placedGeometry.flatTransformation,
        color: placedGeometry.color
      };
      yield geometoryData;
    }
  }
  // IFCの形状情報からBabylon.jsのメッシュを作成
  ifc2babylonMesh(scene, vertexData, flatTransformation, color) {
    // メッシュ作成
    const mesh = this.createMeshFromData(scene, vertexData);
    // メッシュの移動・変形
    const transformationMatrix = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromArray(flatTransformation);
    mesh.setPivotMatrix(transformationMatrix, false);
    // 奥行きZの左手系に
    mesh.scaling.z *= -1;
    // 面を反転
    mesh.flipFaces(true);
    // 色設定
    const {
      x,
      y,
      z,
      w
    } = color;
    const material = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial("material", scene);
    material.diffuseColor = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Color3(x, y, z);
    material.alpha = w;
    material.backFaceCulling = false;
    mesh.material = material;
  }
  // 頂点データ化からメッシュ作成
  createMeshFromData(scene, vertexData) {
    const mesh = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.Mesh("mesh", scene);
    const vertexDataForBabylon = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__.VertexData();
    vertexDataForBabylon.positions = vertexData.positions;
    vertexDataForBabylon.normals = vertexData.normals;
    vertexDataForBabylon.indices = vertexData.indices;
    vertexDataForBabylon.applyToMesh(mesh);
    return mesh;
  }
  static ɵfac = function EngineService_Factory(t) {
    return new (t || EngineService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_window_ref_service__WEBPACK_IMPORTED_MODULE_4__.WindowRefService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: EngineService,
    factory: EngineService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 16075:
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var D_Document_Project_ngBabylon_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _engine_engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engine/engine.service */ 14758);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 52484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 78128);







class MenuComponent {
  engServ;
  constructor(engServ) {
    this.engServ = engServ;
  }
  // ファイルを開く
  open(event) {
    const file = event.target.files[0];
    if (file) {
      this.loadIFCFile(file);
    }
    event.target.value = "";
  }
  // IFCファイルの読み込み
  loadIFCFile(file) {
    var _this = this;
    const reader = new FileReader();
    reader.onload = /*#__PURE__*/function () {
      var _ref = (0,D_Document_Project_ngBabylon_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
        const buffer = new Uint8Array(event.target?.result);
        yield _this.engServ.loadIFCFile(buffer);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    reader.readAsArrayBuffer(file);
  }
  static ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_engine_engine_service__WEBPACK_IMPORTED_MODULE_1__.EngineService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    decls: 32,
    vars: 1,
    consts: [["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["type", "file", "file-handler", "", 2, "display", "none", 3, "change"], ["mat-menu-item", "", "disabled", ""], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar")(1, "button", 0)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", null, 1)(6, "button", 2)(7, "label")(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MenuComponent_Template_input_change_12_listener($event) {
          return ctx.open($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 4)(14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "voicemail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Check voice mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 2)(19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Disable alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "My App");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 6)(27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 7)(30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      }
    },
    dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger],
    styles: [".mdc-icon-button[_ngcontent-%COMP%] {\n  z-index: auto;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubWRjLWljb24tYnV0dG9uIHtcclxuICB6LWluZGV4OiBhdXRvO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 84511:
/*!***************************************!*\
  !*** ./src/app/mock/document.mock.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentMock: () => (/* binding */ DocumentMock)
/* harmony export */ });
class DocumentMock extends Document {
  readyState = 'loading';
}

/***/ }),

/***/ 68942:
/*!**************************************!*\
  !*** ./src/app/mock/storage.mock.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageMock: () => (/* binding */ StorageMock)
/* harmony export */ });
class StorageMock {
  length = 0;
  clear() {
    return null;
  }
  getItem(key) {
    return null;
  }
  key(index) {
    return null;
  }
  removeItem(key) {
    return null;
  }
  setItem(key, value) {
    return null;
  }
}

/***/ }),

/***/ 23436:
/*!*************************************!*\
  !*** ./src/app/mock/window.mock.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowMock: () => (/* binding */ WindowMock)
/* harmony export */ });
/* harmony import */ var _document_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document.mock */ 84511);
/* harmony import */ var _storage_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.mock */ 68942);


class WindowMock extends Window {
  document = new _document_mock__WEBPACK_IMPORTED_MODULE_0__.DocumentMock();
  localStorage = new _storage_mock__WEBPACK_IMPORTED_MODULE_1__.StorageMock();
  sessionStorage = new _storage_mock__WEBPACK_IMPORTED_MODULE_1__.StorageMock();
}

/***/ }),

/***/ 86889:
/*!************************************************!*\
  !*** ./src/app/services/window-ref.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowRefService: () => (/* binding */ WindowRefService)
/* harmony export */ });
/* harmony import */ var _mock_window_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/window.mock */ 23436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


const getWindow = () => window != null ? window : new _mock_window_mock__WEBPACK_IMPORTED_MODULE_0__.WindowMock();
class WindowRefService {
  windowObject;
  constructor() {
    this.windowObject = getWindow();
  }
  get window() {
    return this.windowObject;
  }
  get document() {
    return this.window.document;
  }
  get localStore() {
    return this.window.localStorage;
  }
  get sessionStorage() {
    return this.window.sessionStorage;
  }
  static ɵfac = function WindowRefService_Factory(t) {
    return new (t || WindowRefService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: WindowRefService,
    factory: WindowRefService.ɵfac
  });
}

/***/ }),

/***/ 20553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! package.json */ 4147);
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
  production: false,
  version: package_json__WEBPACK_IMPORTED_MODULE_0__.version
};

/***/ }),

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 78629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 20553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, [{
  defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None
}]).catch(err => console.log(err));

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ng-babylon-template","version":"16.2.0","license":"MIT","scripts":{"setup":"npm i && npm run _wasmcopy1 && npm run _wasmcopy2","_wasmcopy1":"node -e \\"require(\'fs\').copyFileSync(\'node_modules/web-ifc/web-ifc.wasm\', \'src/assets/wasm/web-ifc.wasm\')\\"","_wasmcopy2":"node -e \\"require(\'fs\').copyFileSync(\'node_modules/web-ifc/web-ifc-mt.wasm\', \'src/assets/wasm/web-ifc-mt.wasm\')\\"","start":"npm run setup && ng serve -o","build":"npm run setup && ng build -c development","build:prod":"npm run setup && ng build --configuration production --base-href \\"https://frameweb.malme.app/\\" && angular-cli-ghpages","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"~16.2.1","@angular/cdk":"^16.2.11","@angular/common":"~16.2.1","@angular/compiler":"~16.2.1","@angular/core":"~16.2.1","@angular/forms":"~16.2.1","@angular/material":"^16.2.11","@angular/platform-browser":"~16.2.1","@angular/platform-browser-dynamic":"~16.2.1","@angular/router":"~16.2.1","@babylonjs/core":"^6.17.0","@babylonjs/materials":"^6.17.0","bootstrap":"^5.3.1","rxjs":"~7.8.0","tslib":"^2.4.0","web-ifc":"^0.0.44","zone.js":"~0.13.1"},"devDependencies":{"@angular-devkit/build-angular":"~16.2.0","@angular/cli":"~16.2.0","@angular/compiler-cli":"~16.2.1","@angular/language-service":"~16.2.1","@types/jasmine":"~4.3.5","@types/node":"^18.17.5","jasmine-core":"~4.6.0","karma":"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0","typescript":"~5.1.6"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map