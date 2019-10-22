(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/impact/impact.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/impact/impact.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"screenshot\">\n    <shared-map\n            [scrollWheelZoom]=\"false\"\n            [showLayersControl]=\"true\"\n            [showLegendControl]=\"true\"\n            [showScaleControl]=\"true\"\n            [interactive]=\"true\"\n            [overlays]=\"'event_id' | sharedImpactOverlays\">\n    </shared-map>\n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map/map.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map/map.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #mapWrapper\n  class=\"shared-map\"\n  [class.noninteractive]=\"interactive === false\"\n  (mousemove)=\"$event?.stopPropagation\">\n</div>\n");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var impact_component_1 = __webpack_require__(/*! ./impact/impact.component */ "./src/app/impact/impact.component.ts");
var routes = [
    { path: 'impact', component: impact_component_1.ImpactComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'web';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var impact_module_1 = __webpack_require__(/*! ./impact/impact.module */ "./src/app/impact/impact.module.ts");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                impact_module_1.ImpactModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/impact/impact.component.scss":
/*!**********************************************!*\
  !*** ./src/app/impact/impact.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#screenshot {\n  height: 500px;\n  width: 500px;\n}\n\nshared-map {\n  display: block;\n  height: 500px;\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kc2xvc2t5L2Rldi9zaGFrZWNhc3QtaW1hZ2luZy9zaGFrZWNhc3RpbWFnaW5nL3dlYi9zcmMvYXBwL2ltcGFjdC9pbXBhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ltcGFjdC9pbXBhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9pbXBhY3QvaW1wYWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NjcmVlbnNob3Qge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuXG5zaGFyZWQtbWFwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbn0iLCIjc2NyZWVuc2hvdCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuc2hhcmVkLW1hcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/impact/impact.component.ts":
/*!********************************************!*\
  !*** ./src/app/impact/impact.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ImpactComponent = /** @class */ (function () {
    function ImpactComponent() {
    }
    ImpactComponent.prototype.ngOnInit = function () {
    };
    ImpactComponent = __decorate([
        core_1.Component({
            selector: 'app-impact',
            template: __importDefault(__webpack_require__(/*! raw-loader!./impact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/impact/impact.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./impact.component.scss */ "./src/app/impact/impact.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ImpactComponent);
    return ImpactComponent;
}());
exports.ImpactComponent = ImpactComponent;


/***/ }),

/***/ "./src/app/impact/impact.module.ts":
/*!*****************************************!*\
  !*** ./src/app/impact/impact.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var impact_component_1 = __webpack_require__(/*! ./impact.component */ "./src/app/impact/impact.component.ts");
var shared_module_1 = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
var ImpactModule = /** @class */ (function () {
    function ImpactModule() {
    }
    ImpactModule = __decorate([
        core_1.NgModule({
            declarations: [
                impact_component_1.ImpactComponent
            ],
            exports: [
                impact_component_1.ImpactComponent
            ],
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule
            ]
        })
    ], ImpactModule);
    return ImpactModule;
}());
exports.ImpactModule = ImpactModule;


/***/ }),

/***/ "./src/app/shared/impact-overlays.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/impact-overlays.pipe.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var url_geojson_overlay_1 = __webpack_require__(/*! @shared/map-overlay/url-geojson-overlay */ "./src/app/shared/map-overlay/url-geojson-overlay.ts");
var ImpactOverlaysPipe = /** @class */ (function () {
    function ImpactOverlaysPipe() {
    }
    ImpactOverlaysPipe.prototype.transform = function (shakemapId) {
        var overlays = [];
        overlays.push(new url_geojson_overlay_1.URLGeoJSONOverlay());
        overlays.forEach(function (overlay) {
            overlay.enabled = true;
            overlay.bounds = overlay.getBounds();
        });
        return overlays;
    };
    ImpactOverlaysPipe = __decorate([
        core_1.Pipe({
            name: 'sharedImpactOverlays'
        })
    ], ImpactOverlaysPipe);
    return ImpactOverlaysPipe;
}());
exports.ImpactOverlaysPipe = ImpactOverlaysPipe;


/***/ }),

/***/ "./src/app/shared/map-overlay/geojson-overlay.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/map-overlay/geojson-overlay.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var L = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * Class for asynchronous overlays used with the shared-map component.
 *
 * Notable methods subclasses may want to override:
 * - onEachFeature(feature: any, layer: L.Layer)
 *   called by leaflet's GeoJSON layer.
 *
 * - parse(json|string)
 *   parse returned data and return a GeoJSON Feature or FeatureCollection.
 *   default implementation converts strings to json
 *   if returned data is not already json
 *
 * - style(feature)
 *   called by leaflet's GeoJSON layer.
 */
// tslint:disable-next-line:variable-name
var GeoJSONOverlay = L.GeoJSON.extend({
    bounds: null,
    // retain layer data to detect whether it's already loaded
    data: null,
    enabled: true,
    // retain url grab errors
    error: Error,
    id: 'async-geojson',
    legends: [],
    // retain  for custom layer adjustments
    map: null,
    // persistent styles (allows alternating styles in geoJSON features)
    styles: {},
    title: 'GeoJSON',
    // url to download geoJSON
    url: null,
    /**
     * Init function
     */
    initialize: function () {
        var _this = this;
        L.GeoJSON.prototype.initialize.call(this, [], {
            onEachFeature: function (feature, layer) { return _this.onEachFeature(feature, layer); },
            pointToLayer: function (feature, layer) { return _this.pointToLayer(feature, layer); },
            style: function (feature) { return _this.style(feature); }
        });
    },
    /**
     * Runs after the geoJSON data is successfully added
     */
    afterAdd: function () {
        // subclasses should override this method
    },
    /**
     * Handling all errors
     *
     * @param {Error}
     *
     * @return {Observable}
     *    For caught errors during http requests
     */
    handleError: function (error) {
        this.error = error;
        this.data = null;
        return rxjs_1.of(null);
    },
    /**
     * Fetch data, and ensure it is parsed into geojson
     */
    loadData: function () {
    },
    /**
     * Get geoJSON data and add it to the existing layer
     */
    onAdd: function (map) {
        this.map = map;
        L.GeoJSON.prototype.onAdd.call(this, map);
        this.loadData();
        this.afterAdd();
    },
    onEachFeature: function (feature, layer) {
        // subclasses should override this method
    },
    pointToLayer: function (feature, latlng) {
        // subclasses should override this method
        var defaultOptions = {
            color: '#000',
            fillColor: '#ff7800',
            fillOpacity: 0.8,
            opacity: 1,
            radius: 8,
            weight: 1
        };
        return L.circleMarker(latlng, defaultOptions);
    },
    /**
     * Parse returned data into GeoJSON.
     *
     * Subclasses may override default parsing:
     * ```
     * data = super.parse(data);
     * // modify data
     * return data;
     * ```
     *
     * @param data {Any}
     *    data ready for parsing (possibly a string)
     * @return {Any}
     *    Parsed geoJSON
     */
    parse: function (data) {
        // parse if needed
        data = typeof data === 'string' ? JSON.parse(data) : data;
        return data;
    },
    style: function (feature) {
        // subclasses should override this method
        return {};
    }
});
exports.GeoJSONOverlay = GeoJSONOverlay;


/***/ }),

/***/ "./src/app/shared/map-overlay/url-geojson-overlay.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/map-overlay/url-geojson-overlay.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var geojson_overlay_1 = __webpack_require__(/*! ./geojson-overlay */ "./src/app/shared/map-overlay/geojson-overlay.ts");
var URLGeoJSONOverlay = geojson_overlay_1.GeoJSONOverlay.extend({
    router: null,
    loadData: function () {
        var data = {
            "type": "Feature",
            "properties": {
                "popupContent": "This is the Auraria West Campus",
                "style": {
                    weight: 2,
                    color: "#999",
                    opacity: 1,
                    fillColor: "#B0DE5C",
                    fillOpacity: 0.8
                }
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [-105.00432014465332, 39.74732195489861],
                            [-105.00715255737305, 39.74620006835170],
                            [-105.00921249389647, 39.74468219277038],
                            [-105.01067161560059, 39.74362625960105],
                            [-105.01195907592773, 39.74290029616054],
                            [-105.00989913940431, 39.74078835902781],
                            [-105.00758171081543, 39.74059036160317],
                            [-105.00346183776855, 39.74059036160317],
                            [-105.00097274780272, 39.74059036160317],
                            [-105.00062942504881, 39.74072235994946],
                            [-105.00020027160645, 39.74191033368865],
                            [-105.00071525573731, 39.74276830198601],
                            [-105.00097274780272, 39.74369225589818],
                            [-105.00097274780272, 39.74461619742136],
                            [-105.00123023986816, 39.74534214278395],
                            [-105.00183105468751, 39.74613407445653],
                            [-105.00432014465332, 39.74732195489861]
                        ], [
                            [-105.00361204147337, 39.74354376414072],
                            [-105.00301122665405, 39.74278480127163],
                            [-105.00221729278564, 39.74316428375108],
                            [-105.00283956527711, 39.74390674342741],
                            [-105.00361204147337, 39.74354376414072]
                        ]
                    ], [
                        [
                            [-105.00942707061768, 39.73989736613708],
                            [-105.00942707061768, 39.73910536278566],
                            [-105.00685214996338, 39.73923736397631],
                            [-105.00384807586671, 39.73910536278566],
                            [-105.00174522399902, 39.73903936209552],
                            [-105.00041484832764, 39.73910536278566],
                            [-105.00041484832764, 39.73979836621592],
                            [-105.00535011291504, 39.73986436617916],
                            [-105.00942707061768, 39.73989736613708]
                        ]
                    ]
                ]
            }
        };
        this.data = data;
        this.addData(data);
    }
});
exports.URLGeoJSONOverlay = URLGeoJSONOverlay;


/***/ }),

/***/ "./src/app/shared/map/map.component.scss":
/*!***********************************************!*\
  !*** ./src/app/shared/map/map.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".shared-map {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.noninteractive {\n  pointer-events: none;\n}\n\n.leaflet-mouseover-tooltip {\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.75);\n  border: 1px solid #333;\n  border-radius: 3px;\n  display: none;\n  font-size: 12px;\n  left: 0;\n  margin: -1.75em 0 0;\n  padding: 2px 4px;\n  position: absolute;\n  top: 0;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kc2xvc2t5L2Rldi9zaGFrZWNhc3QtaW1hZ2luZy9zaGFrZWNhc3RpbWFnaW5nL3dlYi9zcmMvYXBwL3NoYXJlZC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0Usb0JBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaGFyZWQtbWFwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5ub25pbnRlcmFjdGl2ZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIC5sZWFmbGV0LW1vdXNlb3Zlci10b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IC0xLjc1ZW0gMCAwO1xuICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gICIsIi5zaGFyZWQtbWFwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ub25pbnRlcmFjdGl2ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubGVhZmxldC1tb3VzZW92ZXItdG9vbHRpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IC0xLjc1ZW0gMCAwO1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/map/map.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/map/map.component.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var L = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/**
 * Shared map component for event, shows overall area and mmi contours
 *
 * @param baselayer
 *     Map base layer
 * @param showAttributionControl
 *     Boolean for toggling attribution
 */
var MapComponent = /** @class */ (function () {
    function MapComponent(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        // value of bounds property
        this._bounds = null;
        this._interactive = false;
        this._isMobile = false;
        // value of overlays property
        this._overlays = [];
        this._showLayersControl = false;
        this._showLegendControl = false;
        this._showMousePosition = false;
        this._showScaleControl = false;
        this.baselayer = 'Topographic';
        // overlays currently part of the layers control
        this.overlaysAdded = [];
        this.scrollWheelZoom = false;
        this.showAttributionControl = true;
    }
    /**
     * Get the overlay bounds
     *
     * @return {any}
     */
    MapComponent.prototype.getOverlayBounds = function () {
        var bounds = null;
        // set bounds based on data
        this.overlays.forEach(function (overlay) {
            if (overlay.bounds !== null) {
                if (bounds === null) {
                    bounds = L.latLngBounds(overlay.bounds);
                }
                else {
                    bounds = bounds.extend(overlay.bounds);
                }
            }
        });
        return bounds;
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        var worldTopoLayer = L.tileLayer('https://services.arcgisonline.com/' +
            'arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Esri, HERE, Garmin, Intermap, increment P Corp., ' +
                'GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, ' +
                'Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), ' +
                'swisstopo, © OpenStreetMap contributors, and the GIS User ' +
                'Community',
            maxZoom: 16
        });
        var worldImageryLayer = L.tileLayer('https://services.arcgisonline.com/' +
            'arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Esri, DigitalGlobe, GeoEye, Earthstar Geographics, ' +
                'CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS ' +
                'User Community',
            maxZoom: 16
        });
        var worldStreetLayer = L.tileLayer('https://services.arcgisonline.com/' +
            'arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Esri, HERE, Garmin, USGS, Intermap, INCREMENT P, ' +
                'NRCan, Esri Japan, METI, Esri China (Hong Kong), Esri Korea, ' +
                'Esri (Thailand), NGCC, © OpenStreetMap contributors, and the ' +
                'GIS User Community',
            maxZoom: 16
        });
        var grayscaleLayer = L.tileLayer('https://services.arcgisonline.com/' +
            'arcgis/rest/services/Canvas/World_Light_Gray_Base/' +
            'MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Esri, HERE, Garmin, © OpenStreetMap contributors, ' +
                'and the GIS user community',
            maxZoom: 16
        });
        var baselayers = {
            Aerial: worldImageryLayer,
            Grayscale: grayscaleLayer,
            Street: worldStreetLayer,
            Topographic: worldTopoLayer
        };
        this.map = L.map(this.mapWrapper.nativeElement, {
            attributionControl: this.showAttributionControl,
            // noninteractive map setting defaults
            // managed by updateControls & updateInteractive
            boxZoom: true,
            doubleClickZoom: true,
            dragging: true,
            keyboard: true,
            layers: [baselayers[this.baselayer]],
            scrollWheelZoom: this.scrollWheelZoom,
            tap: true,
            touchZoom: true,
            zoomControl: false,
            zoomSnap: 0
        });
        this.layersControl = L.control.layers(baselayers, {});
        // this.legendControl = L.control.legend({ position: 'topright' });
        this.scaleControl = L.control.scale({ position: 'bottomleft' });
        this.zoomControl = L.control.zoom();
        // this.updateControls();
        // this.updateInteractive();
        this.updateOverlays();
        if (this.map) {
            // Restrict latitudinal scrolling to 90 degrees both directions, but
            // allow user to pan longitudinally for 2 full globes, this helps to
            // not push the centerpoint off until they have zoomed out 1 full globe
            var northEastGlobal = L.latLng(-90.0, -180.0 * 2);
            var southWestGlobal = L.latLng(90.0, 180.0 * 2);
            var globalBounds = L.latLngBounds(northEastGlobal, southWestGlobal);
            this.map.setMaxBounds(globalBounds);
        }
    };
    Object.defineProperty(MapComponent.prototype, "bounds", {
        /**
         * Get map bounds
         *
         * @return {Array<number>}
         */
        get: function () {
            return this._bounds;
        },
        /**
         * Set map bounds
         *
         * @param bounds
         *     Array of bounds for map
         */
        set: function (bounds) {
            this._bounds = bounds;
            this.setBounds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "interactive", {
        /**
         * Get the _interactive value
         *
         * @return {boolean}
         */
        get: function () {
            return this._interactive;
        },
        /**
         * Set whether or not to show an interactive map
         *
         * @param interactive
         *     Is map interactive?
         */
        set: function (interactive) {
            this._interactive = interactive;
            this.updateControls();
            this.updateInteractive();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "overlays", {
        /**
         * Get map overlays
         *
         * @return {Array<L.layer>}
         */
        get: function () {
            return this._overlays;
        },
        /**
         * Set map overlays
         *
         * @param overlays
         *     Array of different map overlays
         */
        set: function (overlays) {
            this._overlays = overlays;
            this.updateOverlays();
            this.updateLegend();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "showLayersControl", {
        /**
         * Get the _showLayersControl value
         *
         * @return {boolean}
         */
        get: function () {
            return this._showLayersControl;
        },
        /**
         * Set whether or not to show layers control
         *
         * @param showLayersControl
         *     Show layers control?
         */
        set: function (showLayersControl) {
            this._showLayersControl = showLayersControl;
            this.updateControls();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "showLegendControl", {
        /**
         * Get the showLegendControl value
         *
         * @return {boolean}
         */
        get: function () {
            return this._showLegendControl;
        },
        /**
         * Set whether or not to show legend control
         *
         * @param showLegendControl
         *     Show the legend control?
         */
        set: function (showLegendControl) {
            this._showLegendControl = showLegendControl;
            this.updateControls();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "showScaleControl", {
        /**
         * Get the showScaleControl
         *
         * @return {boolean}
         */
        get: function () {
            return this._showScaleControl;
        },
        /**
         * Set whether or not to show scale control
         *
         * @param showScaleControl
         *     The boolean value, show scale controls?
         */
        set: function (showScaleControl) {
            this._showScaleControl = showScaleControl;
            this.updateControls();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set map to match overlay bounds
     */
    MapComponent.prototype.setBounds = function () {
        var _this = this;
        if (!this.map) {
            return;
        }
        var bounds = this.bounds;
        // use overlays if no explicit bounds set
        if (!bounds || (bounds.isValid && !bounds.isValid())) {
            bounds = this.getOverlayBounds();
        }
        // default to world if no overlay bounds
        if (!bounds || (bounds.isValid && !bounds.isValid())) {
            bounds = [[85.0, 179.999], [-85.0, -179.999]];
        }
        setTimeout(function () {
            if (_this.map) {
                _this.map.fitBounds(bounds);
                _this.map.invalidateSize();
            }
        }, 0);
    };
    /**
     * Update/add map controls
     */
    MapComponent.prototype.updateControls = function () {
        if (!this.map) {
            return;
        }
        if (!this._isMobile && this.interactive === true) {
            this.map.addControl(this.mousePositionControl);
        }
        else {
            this.map.removeControl(this.mousePositionControl);
        }
        if (this.showLayersControl && this.interactive === true) {
            this.map.addControl(this.layersControl);
        }
        else {
            this.map.removeControl(this.layersControl);
        }
        if (this.showLegendControl && this.interactive === true) {
            // this.map.addControl(this.legendControl);
        }
        else {
            // this.map.removeControl(this.legendControl);
        }
        if (this.showScaleControl) {
            this.map.addControl(this.scaleControl);
        }
        else {
            this.map.removeControl(this.scaleControl);
        }
        if (this.interactive) {
            this.map.addControl(this.zoomControl);
        }
        else {
            this.map.removeControl(this.zoomControl);
        }
    };
    /**
     * Make the map interactive
     */
    MapComponent.prototype.updateInteractive = function () {
        if (!this.map) {
            return;
        }
        var handlers = [
            this.map.boxZoom,
            this.map.doubleClickZoom,
            this.map.dragging,
            this.map.keyboard,
            this.map.tap,
            this.map.touchZoom
        ];
        var interactive = this.interactive;
        handlers.forEach(function (handler) {
            if (!handler) {
                return;
            }
            if (interactive) {
                handler.enable();
            }
            else {
                handler.disable();
            }
        });
    };
    /**
     * Update legend control
     */
    MapComponent.prototype.updateLegend = function () {
        if (!this.legendControl) {
            return;
        }
        this.legendControl.displayLegends();
    };
    /**
     * Update map overlays
     */
    MapComponent.prototype.updateOverlays = function () {
        var _this = this;
        // // check if layer control has been created
        if (!this.map || !this.layersControl) {
            return;
        }
        var overlays = this._overlays;
        // remove overlays from map and layer control
        this.overlaysAdded = this.overlaysAdded.filter(function (overlay) {
            if (!overlays.includes(overlay)) {
                _this.layersControl.removeLayer(overlay);
                _this.map.removeLayer(overlay);
                return false;
            }
            else {
                return true;
            }
        });
        // add overlays to layer control and add/remove overlay to/from map
        overlays.forEach(function (overlay) {
            if (overlay.hasOwnProperty('httpClient')) {
                overlay.httpClient = _this.httpClient;
            }
            if (overlay.hasOwnProperty('router')) {
                overlay.router = _this.router;
            }
            if (!_this.overlaysAdded.includes(overlay)) {
                _this.overlaysAdded.push(overlay);
                _this.layersControl.addOverlay(overlay, overlay.title);
            }
            if (overlay.enabled) {
                _this.map.addLayer(overlay);
            }
            else {
                _this.map.removeLayer(overlay);
            }
        });
        this.setBounds();
    };
    MapComponent.ctorParameters = function () { return [
        { type: http_1.HttpClient },
        { type: router_1.Router }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "baselayer", void 0);
    __decorate([
        core_1.ViewChild('mapWrapper', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], MapComponent.prototype, "mapWrapper", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "scrollWheelZoom", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "showAttributionControl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], MapComponent.prototype, "bounds", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MapComponent.prototype, "interactive", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], MapComponent.prototype, "overlays", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MapComponent.prototype, "showLayersControl", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MapComponent.prototype, "showLegendControl", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MapComponent.prototype, "showScaleControl", null);
    MapComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'shared-map',
            template: __importDefault(__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map/map.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./map.component.scss */ "./src/app/shared/map/map.component.scss")).default]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var map_component_1 = __webpack_require__(/*! ./map/map.component */ "./src/app/shared/map/map.component.ts");
var impact_overlays_pipe_1 = __webpack_require__(/*! ./impact-overlays.pipe */ "./src/app/shared/impact-overlays.pipe.ts");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [map_component_1.MapComponent, impact_overlays_pipe_1.ImpactOverlaysPipe],
            exports: [
                map_component_1.MapComponent,
                impact_overlays_pipe_1.ImpactOverlaysPipe
            ],
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dslosky/dev/shakecast-imaging/shakecastimaging/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map