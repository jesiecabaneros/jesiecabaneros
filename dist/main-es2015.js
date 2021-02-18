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
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section-1 bg-default-light\">\n  <div class=\"card\">\n    <div class=\"wave\">👋</div>\n    <div class=\"name\">\n      <label for=\"\"> Hello , I am</label>\n      <h4>Jesie</h4></div>\n  </div>\n\n  <div class=\"bg-circle\">\n    <div class=\"circle\">\n  <img class=\"profile\"  src=\"../../assets/img/pic.png\" alt=\"\">\n\n    </div>\n    <div class=\"circle-sm\"></div>\n    <div class=\"circle-xs\"></div>\n  </div>\n\n  <div class=\"card card-1\">\n    <label for=\"\">💻 Software Developer</label>\n  </div>\n\n  <img class=\"plant\" width=\"300\" src=\"../../assets/img/plant.svg\" alt=\"\">\n  <img class=\"table-svg\" width=\"300\" src=\"../../assets/img/work-icon.svg\" alt=\"\">\n  <img class=\"code-svg\" width=\"300\" src=\"../../assets/img/coding-animate.svg\" alt=\"\">\n  <img width=\"486\" class=\"lamp-bg-svg\"  src=\"../../assets/img/lamp.svg\" alt=\"\">\n</div>\n\n<div class=\"section-2\">\n  <h3 class=\"section-title\">Skills and Experience</h3>\n    <div class=\"skills\">\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"cib:angular\" data-inline=\"false\"></span>\n        <label> ANGULAR</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"file-icons:vue\" data-inline=\"false\"></span>\n        <label> VUEJS</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"logos:nodejs-icon\" data-inline=\"false\"></span>\n        <label> NODEJS</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"logos-graphql\" data-inline=\"false\"></span>\n        <label> GRAPHQL</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"cib:typescript\" data-inline=\"false\"></span>\n        <label> TYPESCRIPT</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"cib:nativescript\" data-inline=\"false\"></span>\n        <label> NATIVESCRIPT</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"raphael-js\" data-inline=\"false\"></span>\n        <label> JAVASCRIPT</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"cib-html5\" data-inline=\"false\"></span>\n        <label> HTML5</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"cib-css3\" data-inline=\"false\"></span>\n        <label> CSS3</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"cib-npm\" data-inline=\"false\"></span>\n        <label> NPM</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"cib-php\" data-inline=\"false\"></span>\n        <label> PHP</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"cib-magento\" data-inline=\"false\"></span>\n        <label> MAGENTO</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"cib-wordpress\" data-inline=\"false\"></span>\n        <label> WORDPRESS</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"cib-bootstrap\" data-inline=\"false\"></span>\n        <label> BOOTSTRAP</label>\n      </div>\n      <div class=\"skill\" >\n        <span class=\"iconify icon-skills\" data-icon=\"cib-adobe-photoshop\" data-inline=\"false\"></span>\n        <label> ADOBE PHOTOSHOP</label>\n      </div>\n\n\n\n    </div>\n    <div class=\"center-item\">\n      <div class=\"experience\">\n        <img class=\"skill-svg\" width=\"500\" src=\"../../assets/img/skills.svg\" alt=\"\">\n        <div class=\"experience-panel\">\n          <div *ngFor=\"let exp of experinces\" class=\"experience-cont\">\n            <div class=\"exp-year\">{{exp.year}}</div>\n            <div class=\"exp-details\">\n              <h4 class=\"exp-position\">{{exp.position}}</h4>\n              <div class=\"exp-company\">{{exp.company}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"section-3 bg-default\">\n  <div class=\"center-item \" >\n    <div class=\"big-companies\">\n      <p>©2021 JESIE CABANEROS</p>\n      <P>ALL RIGHTS RESERVED</P>\n    </div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"medias\">\n  <a href=\"https://www.linkedin.com/in/jesie-cabaneros-53a03916b/\" target=\"_blank\" rel=\"noopener noreferrer\">\n    <span class=\"iconify\" data-icon=\"entypo-social:linkedin-with-circle\" data-inline=\"false\"></span>\n  </a>\n  <a href=\"https://www.facebook.com/jesie.cabaneros/\" target=\"_blank\" rel=\"noopener noreferrer\">\n    <span class=\"iconify\" data-icon=\"mdi:facebook\" data-inline=\"false\"></span>\n  </a>\n  <a href=\"https://github.com/j3sie\" target=\"_blank\" rel=\"noopener noreferrer\">\n    <span class=\"iconify\" data-icon=\"el:github\" data-inline=\"false\"></span>\n  </a>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-cont std-padding bg-default-light\">\n  <h1 class=\"txt-blue\">\n    <span style=\"font-size: 2rem;\">< </span>\n    <span class=\"fname-sign\" > Jesie</span><span class=\"lname-sign\" >Cabaneros </span>\n    <span style=\"font-size: 2rem;\">> </span>\n  </h1>\n  <div>\n<!--\n    <ul class=\"header-menu\">\n      <li>Portfolio</li>\n      <li>Home</li>\n    </ul> -->\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");


 // CLI imports router

const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Portfolio';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared-components/shared-components.module */ "./src/app/shared-components/shared-components.module.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-1{\r\n  position: relative;\r\n  height: 88vh;\r\n}\r\n.section-1 .card{\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: 200px;\r\n  padding: 17px 22px;\r\n  left: 20%;\r\n  background: #fff;\r\n  margin: 0 auto;\r\n  border-radius: 11px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.card .wave {\r\n  font-size: 3.5rem;\r\n}\r\n.card .name {\r\n  margin-left:  1rem;\r\n}\r\n.card .name label {\r\n  font-size: 15px;\r\n}\r\n.card h4 {\r\n  margin: 0;\r\n  font-size: 4rem;\r\n  letter-spacing: .1rem;\r\n}\r\n.bg-circle{\r\nwidth: 100%;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n.bg-circle .circle{\r\n  background: rgb(236,241,247);\r\n  background: linear-gradient(100deg, rgba(236,241,247,1) 0%, rgba(218,225,235,1) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ecf1f7\",endColorstr=\"#dae1eb\",GradientType=1);\r\n  border-radius: 50%;\r\n  height: 40rem;\r\n  width: 40rem;\r\n  margin: 6rem auto 0;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.bg-circle .circle img{\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  width: 580px;\r\n}\r\n.bg-circle .circle-sm{\r\n  background-color:#dae1eb !important;\r\n  border-radius: 50%;\r\n  height: 10rem;\r\n  width: 10rem;\r\n  position: absolute;\r\n  bottom: 150px;\r\n  left: 122px;\r\n}\r\n.bg-circle .circle-xs{\r\n  background-color:#dae1eb !important;\r\n  border-radius: 50%;\r\n  height: 3rem;\r\n  width: 3em;\r\n  position: absolute;\r\n  bottom: 250px;\r\n  left: 20%;\r\n}\r\n.card.card-1 {\r\n  top: 350px !important;\r\n  left: 25% !important;\r\n}\r\n.plant{\r\n  position: absolute;\r\n  bottom: 80px;\r\n  left: 27%;\r\n}\r\n.table-svg{\r\n  position: absolute;\r\n  top: 80px;\r\n  right: 20%;\r\n}\r\n.code-svg {\r\n  position: absolute;\r\n  right: 16%;\r\n  top: 503px;\r\n}\r\n/* section 2 */\r\n.section-2{\r\n  margin: 0 8rem;\r\n}\r\n.section-title {\r\n  text-align: center;\r\n  font-family: 'Lato-Black';\r\n  font-size: 2rem;\r\n}\r\n.skills{\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  max-width: 850px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n.skills .skill {\r\n  display: grid;\r\n  text-align: center;\r\n  font-family: 'Lato-Regular';\r\n  font-size: 11px;\r\n  color:#868e96;\r\n  margin-bottom: 20px;\r\n}\r\n.icon-skills{\r\n  font-size: 5rem;\r\n  padding: 1rem 3rem;\r\n  color: #dae1eb;\r\n}\r\n::ng-deep .icon-skills path{\r\n  fill: #dae1eb !important;\r\n}\r\n::ng-deep .icon-skills:hover path{\r\n  fill: #4a52ad !important;\r\n}\r\n.icon-skills:hover{\r\n  color: #4a52ad;\r\n}\r\n.experience{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.experience-panel{\r\n  width: 600px;\r\n  margin-left: 7rem;\r\n}\r\n.experience-cont{\r\n  grid-template-columns: 165px auto;\r\n  grid-template-rows: auto;\r\n  display: grid;\r\n  align-items: baseline;\r\n  margin-bottom: 2em;\r\n}\r\n.experience-cont .exp-year{\r\n  color: #4a52ad;\r\n  font-family: 'Lato-Black';\r\n}\r\n.experience-cont .exp-details .exp-position{\r\n  margin: 0;\r\n  font-family: 'Lato-Black';\r\n  font-size: 1.5rem;\r\n}\r\n.experience-cont .exp-details .exp-company{\r\n  margin-top: .5rem;\r\n  font-family: 'Lato-Regular';\r\n  color: #7e7e7e;\r\n}\r\n.big-companies{\r\n  width: 100%;\r\n  max-width: 800px;\r\n  text-align: center;\r\n  padding: 1rem;\r\n}\r\n.big-companies p {\r\n  margin: 0;\r\n  font-family: 'Lato-Regular';\r\n  font-size: 14px;\r\n}\r\n@media (max-width: 768px) {\r\n  .section-1 {\r\n    height: 422px;\r\n  }\r\n  .bg-circle .circle {\r\n    border-radius: 50%;\r\n    height: 23rem;\r\n    width: 100%;\r\n    margin: 6rem auto 0;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  .bg-circle .circle img {\r\n    width: 100%;\r\n  }\r\n\r\n  .card h4 {\r\n    font-size: 2rem;\r\n  }\r\n  .card .wave {\r\n    font-size: 2rem;\r\n  }\r\n  .section-1 .card {\r\n    top: unset;\r\n    bottom: 100px;\r\n    left: 7%;\r\n  }\r\n\r\n  .card.card-1 {\r\n    bottom: 30px !important;\r\n    left: 20% !important;\r\n    top: unset !important;\r\n  }\r\n\r\n  .bg-circle .circle-sm, .bg-circle .circle-xs, .code-svg, .table-svg, .plant, .lamp-bg-svg{\r\n    display: none;\r\n  }\r\n  .experience  {\r\n    display: block !important;\r\n  }\r\n  .experience-cont {\r\n    grid-template-columns: 90px auto;\r\n    grid-template-rows: auto;\r\n    display: grid;\r\n    align-items: baseline;\r\n    margin-bottom: 2em;\r\n  }\r\n  .section-2{\r\n    margin: 0 30px;\r\n  }\r\n  .icon-skills {\r\n    font-size: 3rem;\r\n    padding: 1rem 1rem;\r\n  }\r\n  .skill-svg{\r\n    width: 200px;\r\n    margin: 0 20%;\r\n  }\r\n  .experience-panel{\r\n    margin: 0;\r\n    width: 100%;\r\n  }\r\n  .medias {\r\n    position: unset !important;\r\n    display: block !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUNBO0FBQ0EsV0FBVztFQUNULGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLDRCQUE0QjtFQUc1QixxRkFBcUY7RUFDckYsZ0hBQWdIO0VBQ2hILGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFHQSxjQUFjO0FBRWQ7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsU0FBUztFQUNULDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCO0FBS0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IsUUFBUTtFQUNWOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUNBO0lBQ0UsU0FBUztJQUNULFdBQVc7RUFDYjtFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi0xe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDg4dmg7XHJcbn1cclxuLnNlY3Rpb24tMSAuY2FyZHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDE3cHggMjJweDtcclxuICBsZWZ0OiAyMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2FyZCAud2F2ZSB7XHJcbiAgZm9udC1zaXplOiAzLjVyZW07XHJcbn1cclxuLmNhcmQgLm5hbWUge1xyXG4gIG1hcmdpbi1sZWZ0OiAgMXJlbTtcclxufVxyXG4uY2FyZCAubmFtZSBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5jYXJkIGg0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxufVxyXG4uYmctY2lyY2xle1xyXG53aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbi5iZy1jaXJjbGUgLmNpcmNsZXtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjM2LDI0MSwyNDcpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEwMGRlZywgcmdiYSgyMzYsMjQxLDI0NywxKSAwJSwgcmdiYSgyMTgsMjI1LDIzNSwxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMDBkZWcsIHJnYmEoMjM2LDI0MSwyNDcsMSkgMCUsIHJnYmEoMjE4LDIyNSwyMzUsMSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEwMGRlZywgcmdiYSgyMzYsMjQxLDI0NywxKSAwJSwgcmdiYSgyMTgsMjI1LDIzNSwxKSAxMDAlKTtcclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVwiI2VjZjFmN1wiLGVuZENvbG9yc3RyPVwiI2RhZTFlYlwiLEdyYWRpZW50VHlwZT0xKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiA0MHJlbTtcclxuICB3aWR0aDogNDByZW07XHJcbiAgbWFyZ2luOiA2cmVtIGF1dG8gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5iZy1jaXJjbGUgLmNpcmNsZSBpbWd7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB3aWR0aDogNTgwcHg7XHJcbn1cclxuXHJcbi5iZy1jaXJjbGUgLmNpcmNsZS1zbXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNkYWUxZWIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuICB3aWR0aDogMTByZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTUwcHg7XHJcbiAgbGVmdDogMTIycHg7XHJcbn1cclxuLmJnLWNpcmNsZSAuY2lyY2xlLXhze1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2RhZTFlYiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDNlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyNTBweDtcclxuICBsZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtMSB7XHJcbiAgdG9wOiAzNTBweCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDI1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGxhbnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogODBweDtcclxuICBsZWZ0OiAyNyU7XHJcbn1cclxuXHJcbi50YWJsZS1zdmd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogODBweDtcclxuICByaWdodDogMjAlO1xyXG59XHJcblxyXG4uY29kZS1zdmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTYlO1xyXG4gIHRvcDogNTAzcHg7XHJcbn1cclxuXHJcblxyXG4vKiBzZWN0aW9uIDIgKi9cclxuXHJcbi5zZWN0aW9uLTJ7XHJcbiAgbWFyZ2luOiAwIDhyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvLUJsYWNrJztcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuLnNraWxsc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXgtd2lkdGg6IDg1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5za2lsbHMgLnNraWxsIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xhdG8tUmVndWxhcic7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiM4NjhlOTY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uaWNvbi1za2lsbHN7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcclxuICBjb2xvcjogI2RhZTFlYjtcclxufVxyXG46Om5nLWRlZXAgLmljb24tc2tpbGxzIHBhdGh7XHJcbiAgZmlsbDogI2RhZTFlYiAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAuaWNvbi1za2lsbHM6aG92ZXIgcGF0aHtcclxuICBmaWxsOiAjNGE1MmFkICFpbXBvcnRhbnQ7XHJcbn1cclxuLmljb24tc2tpbGxzOmhvdmVye1xyXG4gIGNvbG9yOiAjNGE1MmFkO1xyXG59XHJcbi5leHBlcmllbmNle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZXhwZXJpZW5jZS1wYW5lbHtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDdyZW07XHJcbn1cclxuLmV4cGVyaWVuY2UtY29udHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2NXB4IGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG4uZXhwZXJpZW5jZS1jb250IC5leHAteWVhcntcclxuICBjb2xvcjogIzRhNTJhZDtcclxuICBmb250LWZhbWlseTogJ0xhdG8tQmxhY2snO1xyXG59XHJcbi5leHBlcmllbmNlLWNvbnQgLmV4cC1kZXRhaWxzIC5leHAtcG9zaXRpb257XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0by1CbGFjayc7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLmV4cGVyaWVuY2UtY29udCAuZXhwLWRldGFpbHMgLmV4cC1jb21wYW55e1xyXG4gIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0by1SZWd1bGFyJztcclxuICBjb2xvcjogIzdlN2U3ZTtcclxufVxyXG4uYmlnLWNvbXBhbmllc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5iaWctY29tcGFuaWVzIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogJ0xhdG8tUmVndWxhcic7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc2VjdGlvbi0xIHtcclxuICAgIGhlaWdodDogNDIycHg7XHJcbiAgfVxyXG4gIC5iZy1jaXJjbGUgLmNpcmNsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDIzcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDZyZW0gYXV0byAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuYmctY2lyY2xlIC5jaXJjbGUgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgaDQge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICAuY2FyZCAud2F2ZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG4gIC5zZWN0aW9uLTEgLmNhcmQge1xyXG4gICAgdG9wOiB1bnNldDtcclxuICAgIGJvdHRvbTogMTAwcHg7XHJcbiAgICBsZWZ0OiA3JTtcclxuICB9XHJcblxyXG4gIC5jYXJkLmNhcmQtMSB7XHJcbiAgICBib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDIwJSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJnLWNpcmNsZSAuY2lyY2xlLXNtLCAuYmctY2lyY2xlIC5jaXJjbGUteHMsIC5jb2RlLXN2ZywgLnRhYmxlLXN2ZywgLnBsYW50LCAubGFtcC1iZy1zdmd7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZXhwZXJpZW5jZSAge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmV4cGVyaWVuY2UtY29udCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwcHggYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgfVxyXG4gIC5zZWN0aW9uLTJ7XHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxuICB9XHJcbiAgLmljb24tc2tpbGxzIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICB9XHJcbiAgLnNraWxsLXN2Z3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCAyMCU7XHJcbiAgfVxyXG4gIC5leHBlcmllbmNlLXBhbmVse1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tZWRpYXMge1xyXG4gICAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.experinces = [
            { year: '2018 - Present', position: 'Front-end Developer', company: 'Hyperstacks Inc.' },
            { year: '2017', position: 'Internship Php Developer', company: 'Syntactics Inc.' },
        ];
        this.skills = [
            { name: 'ANGULAR', icon: 'cib:angular' },
            { name: 'VUEJS', icon: 'file-icons:vue' },
        ];
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/shared-components/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared-components/footer/footer.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n::ng-deep .medias{\r\n  font-size: 2.5rem;\r\n  position: fixed;\r\n  bottom: 1.5rem;\r\n  left: 2rem;\r\n  display: grid;\r\n  grid-row-gap: 10px;\r\n}\r\n::ng-deep .medias path{\r\n  fill: #6b6b6b !important;\r\n}\r\n::ng-deep .medias path:hover{\r\n  fill: #4a52ad !important;\r\n}\r\n@media (max-width: 768px) {\r\n  .medias {\r\n    position: unset !important;\r\n    display: flex !important;\r\n    justify-content: center;\r\n    background: #dae1eb;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztFQUNkLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46Om5nLWRlZXAgLm1lZGlhc3tcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxLjVyZW07XHJcbiAgbGVmdDogMnJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtcm93LWdhcDogMTBweDtcclxufVxyXG46Om5nLWRlZXAgLm1lZGlhcyBwYXRoe1xyXG4gIGZpbGw6ICM2YjZiNmIgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1lZGlhcyBwYXRoOmhvdmVye1xyXG4gIGZpbGw6ICM0YTUyYWQgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWVkaWFzIHtcclxuICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGFlMWViO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared-components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared-components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/shared-components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared-components/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared-components/header/header.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-cont{\r\n  /* background-color:#dae1eb; */\r\n  padding: 0.5rem 0;\r\n  color:#fff;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\np {\r\n  font-family: 'Lato-Black' !important;\r\n}\r\n.header-menu{\r\n  font-family: 'Lato-Light';\r\n  color: #686868;\r\n}\r\n.fname-sign{\r\n  font-family: 'Lato-Black';\r\n  letter-spacing: -2px;\r\n\r\n}\r\n.lname-sign{\r\n  font-family: 'Lato-LightItalic';\r\n  letter-spacing: -2px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7O0FBRXRCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0Isb0JBQW9COztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiNkYWUxZWI7ICovXHJcbiAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0by1CbGFjaycgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyLW1lbnV7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvLUxpZ2h0JztcclxuICBjb2xvcjogIzY4Njg2ODtcclxufVxyXG4uZm5hbWUtc2lnbntcclxuICBmb250LWZhbWlseTogJ0xhdG8tQmxhY2snO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMnB4O1xyXG5cclxufVxyXG4ubG5hbWUtc2lnbntcclxuICBmb250LWZhbWlseTogJ0xhdG8tTGlnaHRJdGFsaWMnO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMnB4O1xyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared-components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared-components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/shared-components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared-components/shared-components.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared-components/shared-components.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared-components/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared-components/footer/footer.component.ts");





let SharedComponentsModule = class SharedComponentsModule {
};
SharedComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
        ]
    })
], SharedComponentsModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\personal proj\jesie\jesie.github.io\j3sie.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map