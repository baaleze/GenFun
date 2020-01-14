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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <ul>\n        <li *ngFor=\"let tab of tabs\" [class.active]=\"currentTab === tab\"><a  (click)=\"currentTab = tab\">{{tab}}</a></li>\n    </ul>\n<div class=\"content\">\n<app-fakewords *ngIf=\"currentTab === 'MARKOV'\"></app-fakewords>\n<app-notabot *ngIf=\"currentTab === 'BOT'\"></app-notabot>\n<app-loot *ngIf=\"currentTab === 'LOOT'\"></app-loot>\n<app-grammar *ngIf=\"currentTab === 'GRAMMAR'\"></app-grammar>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fakewords/fakewords.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fakewords/fakewords.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"generation\">\n    <div class=\"btn-container\">\n    <a (click)=\"generate(10)\" class=\"btn\">GENERATE</a>\n    <select [(ngModel)]=\"s\" (change)=\"updateGenSetting()\">\n        <option [value]=\"setting\" *ngFor=\"let setting of settingList\">{{setting}}</option>\n    </select>\n</div>\n    <p *ngFor=\"let w of words\" [@appear] >{{w}}</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/grammar/grammar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/grammar/grammar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"generation\">\n    <div class=\"btn-container\">\n        <a (click)=\"generate(10)\" class=\"btn\">GENERATE</a>\n        <select [(ngModel)]=\"selectedGrammar\" (change)=\"changeGrammar()\">\n            <option [value]=\"g\" *ngFor=\"let g of grammars\">{{g}}</option>\n        </select>\n    </div>\n    <div *ngFor=\"let p of phrases\" [@appear] [innerHTML]=\"p\" class=\"line\"></div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loot/loot.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loot/loot.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"generation\">\n    <div class=\"btn-container\">\n        <a (click)=\"generateItems(10)\" class=\"btn\">GENERATE</a>\n    </div>\n    <div *ngFor=\"let i of items\" [@appear] class=\"item\">\n        <div *ngIf=\"i.uniqueName\" class=\"unique\">{{i.uniqueName}}</div>\n        <div class=\"name\">{{ i.name }} <span class=\"price tooltip\" >\n            {{i.price.compute() | number: '1.0-2'}} or\n            <span class=\"tooltip-text\" [innerHTML]=\"i.price.detail()\"></span>\n        </span></div>\n        <div>\n            <span class=\"stat\" *ngFor=\"let stat of i.stats | keyvalue\">{{i.getStatString(stat.key)}}</span>\n        </div>\n        <div class=\"power\">\n            {{i.powers.join(', ')}}\n        </div>\n        <div class=\"tag\">\n            [ {{i.tags.join(' | ')}} ]\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/notabot/notabot.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notabot/notabot.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"generation\">\n    <div class=\"btn-container\">\n    <a (click)=\"generate(10)\" class=\"btn\">GENERATE</a>\n</div>\n    <p *ngFor=\"let w of words\" [@appear] >{{w}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli {\n  float: left;\n}\n\nli.active {\n  background-color: #111;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* Change the link color to #111 (black) on hover */\n\nli a:hover {\n  background-color: #111;\n}\n\n.content {\n  height: calc(100% - 48px);\n  background-color: #111;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zkcm91bWFndWV0L0NPREUvbWUvZ2VuLXdlYi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURBSTtFQUNFLHNCQUFBO0FDRU47O0FERUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRSxtREFBQTs7QUFDQTtFQUNFLHNCQUFBO0FDQ0o7O0FERUk7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgfVxuICBcbiAgbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgfVxuICB9XG4gIFxuICBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAvKiBDaGFuZ2UgdGhlIGxpbmsgY29sb3IgdG8gIzExMSAoYmxhY2spIG9uIGhvdmVyICovXG4gIGxpIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICAgIH0iLCJ1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG5saSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxubGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbn1cblxubGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQ2hhbmdlIHRoZSBsaW5rIGNvbG9yIHRvICMxMTEgKGJsYWNrKSBvbiBob3ZlciAqL1xubGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG59XG5cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbn0iXX0= */"

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
        this.tabs = [
            'MARKOV', 'LOOT', 'GRAMMAR', 'BOT'
        ];
        this.currentTab = 'MARKOV';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fakewords_fakewords_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fakewords/fakewords.component */ "./src/app/fakewords/fakewords.component.ts");
/* harmony import */ var _loot_loot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loot/loot.component */ "./src/app/loot/loot.component.ts");
/* harmony import */ var _grammar_grammar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grammar/grammar.component */ "./src/app/grammar/grammar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _notabot_notabot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notabot/notabot.component */ "./src/app/notabot/notabot.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _fakewords_fakewords_component__WEBPACK_IMPORTED_MODULE_6__["FakewordsComponent"],
            _loot_loot_component__WEBPACK_IMPORTED_MODULE_7__["LootComponent"],
            _grammar_grammar_component__WEBPACK_IMPORTED_MODULE_8__["GrammarComponent"],
            _notabot_notabot_component__WEBPACK_IMPORTED_MODULE_10__["NotabotComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/fakewords/fakewords.component.scss":
/*!****************************************************!*\
  !*** ./src/app/fakewords/fakewords.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".generation {\n  text-align: center;\n  height: calc(100% - 161px);\n  padding: 60px;\n  font-size: 25px;\n}\n.generation .btn-container {\n  margin-bottom: 50px;\n}\n.generation .btn-container select {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zkcm91bWFndWV0L0NPREUvbWUvZ2VuLXdlYi9zcmMvYXBwL2Zha2V3b3Jkcy9mYWtld29yZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zha2V3b3Jkcy9mYWtld29yZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0ksbUJBQUE7QUNDUjtBREFRO0VBQ0ksZUFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvZmFrZXdvcmRzL2Zha2V3b3Jkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5lcmF0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNjFweCk7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG5cbiAgICAuYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmdlbmVyYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTYxcHgpO1xuICBwYWRkaW5nOiA2MHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uZ2VuZXJhdGlvbiAuYnRuLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uZ2VuZXJhdGlvbiAuYnRuLWNvbnRhaW5lciBzZWxlY3Qge1xuICBmb250LXNpemU6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/fakewords/fakewords.component.ts":
/*!**************************************************!*\
  !*** ./src/app/fakewords/fakewords.component.ts ***!
  \**************************************************/
/*! exports provided: FakewordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakewordsComponent", function() { return FakewordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _markov_markovgenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../markov/markovgenerator */ "./src/app/markov/markovgenerator.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let FakewordsComponent = class FakewordsComponent {
    constructor(http) {
        this.http = http;
        this.settings = {
            'french cities': { file: 'villes_france.csv', factor: 4, end: '$', maxLenght: 20 },
            'french words': { file: 'french.txt', factor: 4, end: '$', maxLenght: 12 },
            'french names': { file: 'prenoms.txt', factor: 3, end: '$', maxLenght: 8 },
            'english words': { file: 'english.txt', factor: 4, end: '$', maxLenght: 10 },
        };
        this.settingList = [
            'french cities',
            'french words',
            'french names',
            'english words'
        ];
        this.words = [];
        this.s = this.settingList[0];
        this.markov = new _markov_markovgenerator__WEBPACK_IMPORTED_MODULE_2__["MarkovCharGenerator"](this.settings[this.s].factor, this.settings[this.s].end, this.settings[this.s].maxLenght);
    }
    ngOnInit() {
    }
    updateGenSetting() {
        this.markov = new _markov_markovgenerator__WEBPACK_IMPORTED_MODULE_2__["MarkovCharGenerator"](this.settings[this.s].factor, this.settings[this.s].end, this.settings[this.s].maxLenght);
    }
    generate(nb) {
        this.generateFor(this.settings[this.s].file, nb);
    }
    generateFor(fileName, toGenerate) {
        this.words = ['loading...'];
        this.markov.loadWordsFromFile(fileName, this.http).subscribe(() => { }, error => { }, () => {
            this.words = [];
            let count = 0;
            while (count < toGenerate) {
                this.words.push(this.markov.generateWord());
                count++;
            }
        });
    }
};
FakewordsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
FakewordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fakewords',
        template: __webpack_require__(/*! raw-loader!./fakewords.component.html */ "./node_modules/raw-loader/index.js!./src/app/fakewords/fakewords.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('appear', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1s')
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./fakewords.component.scss */ "./src/app/fakewords/fakewords.component.scss")]
    })
], FakewordsComponent);



/***/ }),

/***/ "./src/app/grammar/grammar.component.scss":
/*!************************************************!*\
  !*** ./src/app/grammar/grammar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".generation {\n  text-align: center;\n  height: calc(100% - 161px);\n  padding: 60px;\n  font-size: 30px;\n}\n.generation .btn-container {\n  margin-bottom: 50px;\n}\n.generation .btn-container select {\n  font-size: 30px;\n}\n.generation .line {\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zkcm91bWFndWV0L0NPREUvbWUvZ2VuLXdlYi9zcmMvYXBwL2dyYW1tYXIvZ3JhbW1hci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3JhbW1hci9ncmFtbWFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURBUTtFQUNJLGVBQUE7QUNFWjtBRENJO0VBQ0ksbUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2dyYW1tYXIvZ3JhbW1hci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5lcmF0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNjFweCk7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG5cbiAgICAuYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxpbmUge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbn0iLCIuZ2VuZXJhdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNjFweCk7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5nZW5lcmF0aW9uIC5idG4tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5nZW5lcmF0aW9uIC5idG4tY29udGFpbmVyIHNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5nZW5lcmF0aW9uIC5saW5lIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/grammar/grammar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/grammar/grammar.component.ts ***!
  \**********************************************/
/*! exports provided: GrammarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrammarComponent", function() { return GrammarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let GrammarComponent = class GrammarComponent {
    constructor() {
        this.grammars = ['FPS Games'];
        this.selectedGrammar = 'FPS Games';
        this.phrases = [];
        this.key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        this.grammarDefinitions = {
            'FPS Games': {
                '<start>': ['<first> <next>'],
                '<first>': ['<main>', '<main>', '<main>', '<main>', '<from> <main>'],
                '<from>': ['%Tom Clancy\'s%%', '', '', '', '', '', '', '', ''],
                '<next>': ['%<main> <end>%%', '<number>', '%<end>%%'],
                '<end>': ['<main>', '<number>', 'GOTY', 'Ultimate', 'Director\'s cut', 'Collector Edition', 'Platinum', '', '', '', '', '', '<next>'],
                '<main>': ['<noun> <lig> <concept>', '<concept> <noun>', '<adjective> <noun>'],
                '<lig>': ['of', 'for', '\'s'],
                '<noun>': ['Medal', 'Fight', 'Band', 'Conflict', 'War', 'Gears', 'Weapons', 'Cell', 'Army', 'Assault', 'Combat', 'Ghost', 'Call', 'Warfare', 'Battlefield', 'Crisis', 'Shadow', 'Armor'],
                '<concept>': ['War', 'Honor', 'Brothers', 'Conflict', 'Terror', 'Infinity', 'Recon', 'Duty', 'Ops', 'Liberty', 'Justice', 'Annihilation', 'Chaos'],
                '<adjective>': ['Ultimate', 'Complete', 'Direct', 'Phantom', 'Total', 'Imminent', 'Close', 'Modern', 'Black', 'Lethal', 'Metal', 'Iron'],
                '<number>': ['NUMBER', 'ROMAN']
            }
        };
    }
    ngOnInit() {
        this.changeGrammar();
    }
    changeGrammar() {
        this.grammar = new RiGrammar(this.grammarDefinitions[this.selectedGrammar]);
    }
    generate(nb) {
        this.phrases = [];
        for (let i = 0; i < nb; i++) {
            let str = this.grammar.expand();
            while (str.indexOf('NUMBER') !== -1) {
                str = str.replace('NUMBER', this.generateNumber(false));
            }
            while (str.indexOf('ROMAN') !== -1) {
                str = str.replace('ROMAN', this.generateNumber(true));
            }
            str = str.replace(/%%/g, '</span>');
            str = str.replace(/%/g, '<span class="subtitle">');
            this.phrases.push(str);
        }
    }
    generateNumber(roman) {
        if (roman) {
            const num = Math.ceil(Math.random() * 12);
            let digits = String(+num).split('');
            let roman = '';
            let i = 3;
            while (i--) {
                roman = (this.key[+digits.pop() + (i * 10)] || '') + roman;
            }
            return Array(+digits.join() + 1).join('M') + roman;
        }
        else if (Math.random() > 0.5) {
            return '' + Math.ceil(Math.random() * 10);
        }
        else {
            return '' + (Math.ceil(Math.random() * 200) + 1900);
        }
    }
};
GrammarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grammar',
        template: __webpack_require__(/*! raw-loader!./grammar.component.html */ "./node_modules/raw-loader/index.js!./src/app/grammar/grammar.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('appear', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s')
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./grammar.component.scss */ "./src/app/grammar/grammar.component.scss")]
    })
], GrammarComponent);



/***/ }),

/***/ "./src/app/loot/loot.component.scss":
/*!******************************************!*\
  !*** ./src/app/loot/loot.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".generation {\n  text-align: center;\n  height: calc(100% - 161px);\n  padding: 60px;\n  font-size: 25px;\n  /* Tooltip text */\n  /* Show the tooltip text when you mouse over the tooltip container */\n}\n.generation .btn-container {\n  margin-bottom: 50px;\n}\n.generation .stat {\n  padding-left: 5px;\n  padding-right: 5px;\n  border: 0.5px solid white;\n}\n.generation .name, .generation .unique {\n  font-weight: bold;\n}\n.generation .name {\n  font-size: 20px;\n}\n.generation .power {\n  font-style: italic;\n}\n.generation .tag {\n  color: #aaa;\n}\n.generation .unique {\n  font-size: 30px;\n  color: magenta;\n}\n.generation .price {\n  color: goldenrod;\n}\n@media (min-width: 750px) {\n  .generation .item {\n    width: 49%;\n    height: 130px;\n  }\n}\n@media (max-width: 750px) {\n  .generation .item {\n    width: 100%;\n  }\n}\n.generation .item {\n  float: left;\n  font-size: 15px;\n  padding: 10px 0px;\n  border: 1px solid #555;\n}\n.generation .tooltip {\n  position: relative;\n  display: inline-block;\n}\n.generation .tooltip .tooltip-text {\n  visibility: hidden;\n  width: 200px;\n  background-color: black;\n  color: #fff;\n  text-align: left;\n  padding: 5px 0;\n  border-radius: 6px;\n  font-size: 15px !important;\n  bottom: 25px;\n  right: 0px;\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  z-index: 1;\n}\n.generation .tooltip:hover .tooltip-text {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zkcm91bWFndWV0L0NPREUvbWUvZ2VuLXdlYi9zcmMvYXBwL2xvb3QvbG9vdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9vdC9sb290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBNERFLGlCQUFBO0VBaUJBLG9FQUFBO0FDMUVOO0FEREk7RUFDSSxtQkFBQTtBQ0dSO0FEQUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNFUjtBRENJO0VBQ0ksaUJBQUE7QUNDUjtBREVJO0VBQ0ksZUFBQTtBQ0FSO0FER0k7RUFDSSxrQkFBQTtBQ0RSO0FESUk7RUFDSSxXQUFBO0FDRlI7QURLSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSFI7QURNSTtFQUNJLGdCQUFBO0FDSlI7QURPSTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGFBQUE7RUNMVjtBQUNGO0FET0k7RUFDSTtJQUNJLFdBQUE7RUNMVjtBQUNGO0FET0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNMUjtBRFFJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ05SO0FEVU07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvREFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1JSO0FEWU07RUFDRSxtQkFBQTtBQ1ZSIiwiZmlsZSI6InNyYy9hcHAvbG9vdC9sb290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlbmVyYXRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE2MXB4KTtcbiAgICBwYWRkaW5nOiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcblxuICAgIC5idG4tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG5cbiAgICAuc3RhdCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgd2hpdGU7XG4gICAgfVxuXG4gICAgLm5hbWUsIC51bmlxdWUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAucG93ZXIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuXG4gICAgLnRhZyB7XG4gICAgICAgIGNvbG9yOiAjYWFhO1xuICAgIH1cblxuICAgIC51bmlxdWUge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGNvbG9yOiBtYWdlbnRhO1xuICAgIH1cblxuICAgIC5wcmljZSB7XG4gICAgICAgIGNvbG9yOiBnb2xkZW5yb2Q7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xuICAgIH1cblxuICAgIC50b29sdGlwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIFRvb2x0aXAgdGV4dCAqL1xuICAgICAgLnRvb2x0aXAgLnRvb2x0aXAtdGV4dCB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICBib3R0b206IDI1cHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwIHRleHQgLSBzZWUgZXhhbXBsZXMgYmVsb3chICovXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogU2hvdyB0aGUgdG9vbHRpcCB0ZXh0IHdoZW4geW91IG1vdXNlIG92ZXIgdGhlIHRvb2x0aXAgY29udGFpbmVyICovXG4gICAgICAudG9vbHRpcDpob3ZlciAudG9vbHRpcC10ZXh0IHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbn0iLCIuZ2VuZXJhdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNjFweCk7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgLyogVG9vbHRpcCB0ZXh0ICovXG4gIC8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xufVxuLmdlbmVyYXRpb24gLmJ0bi1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmdlbmVyYXRpb24gLnN0YXQge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHdoaXRlO1xufVxuLmdlbmVyYXRpb24gLm5hbWUsIC5nZW5lcmF0aW9uIC51bmlxdWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5nZW5lcmF0aW9uIC5uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmdlbmVyYXRpb24gLnBvd2VyIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmdlbmVyYXRpb24gLnRhZyB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLmdlbmVyYXRpb24gLnVuaXF1ZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IG1hZ2VudGE7XG59XG4uZ2VuZXJhdGlvbiAucHJpY2Uge1xuICBjb2xvcjogZ29sZGVucm9kO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIC5nZW5lcmF0aW9uIC5pdGVtIHtcbiAgICB3aWR0aDogNDklO1xuICAgIGhlaWdodDogMTMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuZ2VuZXJhdGlvbiAuaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5nZW5lcmF0aW9uIC5pdGVtIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XG59XG4uZ2VuZXJhdGlvbiAudG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmdlbmVyYXRpb24gLnRvb2x0aXAgLnRvb2x0aXAtdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBib3R0b206IDI1cHg7XG4gIHJpZ2h0OiAwcHg7XG4gIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwIHRleHQgLSBzZWUgZXhhbXBsZXMgYmVsb3chICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cbi5nZW5lcmF0aW9uIC50b29sdGlwOmhvdmVyIC50b29sdGlwLXRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/loot/loot.component.ts":
/*!****************************************!*\
  !*** ./src/app/loot/loot.component.ts ***!
  \****************************************/
/*! exports provided: LootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LootComponent", function() { return LootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_lootgen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/lootgen */ "./src/app/loot/model/lootgen.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let LootComponent = class LootComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    generateItems(nb) {
        _model_lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].default(this.http).subscribe(gen => {
            this.items = [];
            for (let i = 0; i < nb; i++) {
                this.items.push(gen.gen());
            }
        });
    }
};
LootComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loot',
        template: __webpack_require__(/*! raw-loader!./loot.component.html */ "./node_modules/raw-loader/index.js!./src/app/loot/loot.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('appear', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1s')
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./loot.component.scss */ "./src/app/loot/loot.component.scss")]
    })
], LootComponent);



/***/ }),

/***/ "./src/app/loot/model/item.ts":
/*!************************************!*\
  !*** ./src/app/loot/model/item.ts ***!
  \************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
class Item {
    constructor() {
        this.stats = new Map();
        this.powers = [];
        this.tags = [];
    }
    addStat(stat, value) {
        if (this.stats[stat]) {
            this.stats.set(stat, this.stats[stat] + value);
        }
        else {
            this.stats.set(stat, value);
        }
    }
    addTag(tag) {
        if (tag !== undefined && tag.trim() !== '' && this.tags.indexOf(tag) === -1) {
            this.tags.push(tag);
        }
    }
    addPower(power) {
        if (power !== undefined && power.trim() !== '' && this.powers.indexOf(power) === -1) {
            this.powers.push(power);
        }
    }
    getStatString(statKey) {
        const value = this.stats.get(statKey);
        if (statKey[statKey.length - 1] === '%') {
            return statKey.substring(0, statKey.length - 1).replace('_', ' ') + (value < 0 ? ' ' : ' +') + value + '%';
        }
        else {
            return `${statKey.replace('_', ' ')} ${value < 0 ? '' : '+'} ${value}`;
        }
    }
}
Item.UNIQUE_THRESHOLD = 8;


/***/ }),

/***/ "./src/app/loot/model/lootgen.ts":
/*!***************************************!*\
  !*** ./src/app/loot/model/lootgen.ts ***!
  \***************************************/
/*! exports provided: LootGen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LootGen", function() { return LootGen; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/app/loot/model/item.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _rule_sequence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rule/sequence */ "./src/app/loot/model/rule/sequence.ts");
/* harmony import */ var _rule_noungroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rule/noungroup */ "./src/app/loot/model/rule/noungroup.ts");
/* harmony import */ var _rule_stringtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rule/stringtoken */ "./src/app/loot/model/rule/stringtoken.ts");
/* harmony import */ var src_app_markov_markovgenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/markov/markovgenerator */ "./src/app/markov/markovgenerator.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./price */ "./src/app/loot/model/price.ts");
/* harmony import */ var _terminal_terminalgenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terminal/terminalgenerator */ "./src/app/loot/model/terminal/terminalgenerator.ts");
/* harmony import */ var _terminal_adjective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./terminal/adjective */ "./src/app/loot/model/terminal/adjective.ts");
/* harmony import */ var _terminal_terminaltype__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./terminal/terminaltype */ "./src/app/loot/model/terminal/terminaltype.ts");
/* harmony import */ var _terminal_modifier__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./terminal/modifier */ "./src/app/loot/model/terminal/modifier.ts");
/* harmony import */ var _terminal_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./terminal/material */ "./src/app/loot/model/terminal/material.ts");
/* harmony import */ var _rule_optional__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rule/optional */ "./src/app/loot/model/rule/optional.ts");
/* harmony import */ var _rule_or__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rule/or */ "./src/app/loot/model/rule/or.ts");
/* harmony import */ var _rule_numberednoungroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rule/numberednoungroup */ "./src/app/loot/model/rule/numberednoungroup.ts");
/* harmony import */ var _terminal_gear__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./terminal/gear */ "./src/app/loot/model/terminal/gear.ts");
/* harmony import */ var _terminal_noun__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./terminal/noun */ "./src/app/loot/model/terminal/noun.ts");
/* harmony import */ var _terminal_qualificatif__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./terminal/qualificatif */ "./src/app/loot/model/terminal/qualificatif.ts");



















class LootGen {
    constructor(gear, noun, adj, qualif, modifier, material, names) {
        LootGen.generators = new Map();
        LootGen.generators.set(_terminal_terminaltype__WEBPACK_IMPORTED_MODULE_10__["TerminalType"].Gear, new _terminal_terminalgenerator__WEBPACK_IMPORTED_MODULE_8__["TerminalGenerator"](gear, s => _terminal_gear__WEBPACK_IMPORTED_MODULE_16__["Gear"].parse(s)));
        LootGen.generators.set(_terminal_terminaltype__WEBPACK_IMPORTED_MODULE_10__["TerminalType"].Noun, new _terminal_terminalgenerator__WEBPACK_IMPORTED_MODULE_8__["TerminalGenerator"](noun, s => _terminal_noun__WEBPACK_IMPORTED_MODULE_17__["Noun"].parse(s)));
        LootGen.generators.set(_terminal_terminaltype__WEBPACK_IMPORTED_MODULE_10__["TerminalType"].Adjective, new _terminal_terminalgenerator__WEBPACK_IMPORTED_MODULE_8__["TerminalGenerator"](adj, s => _terminal_adjective__WEBPACK_IMPORTED_MODULE_9__["Adjective"].parse(s)));
        LootGen.generators.set(_terminal_terminaltype__WEBPACK_IMPORTED_MODULE_10__["TerminalType"].Qualificatif, new _terminal_terminalgenerator__WEBPACK_IMPORTED_MODULE_8__["TerminalGenerator"](qualif, s => _terminal_qualificatif__WEBPACK_IMPORTED_MODULE_18__["Qualificatif"].parse(s)));
        LootGen.generators.set(_terminal_terminaltype__WEBPACK_IMPORTED_MODULE_10__["TerminalType"].Modifier, new _terminal_terminalgenerator__WEBPACK_IMPORTED_MODULE_8__["TerminalGenerator"](modifier, s => _terminal_modifier__WEBPACK_IMPORTED_MODULE_11__["Modifier"].parse(s)));
        LootGen.generators.set(_terminal_terminaltype__WEBPACK_IMPORTED_MODULE_10__["TerminalType"].Material, new _terminal_terminalgenerator__WEBPACK_IMPORTED_MODULE_8__["TerminalGenerator"](material, s => _terminal_material__WEBPACK_IMPORTED_MODULE_12__["Material"].parse(s)));
        this.loadUniqueNames(names);
        this.defaultTree();
    }
    static default(http) {
        if (!LootGen.instance) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(LootGen.getAllLines('gear.txt', http), LootGen.getAllLines('nouns.txt', http), LootGen.getAllLines('adjectives.txt', http), LootGen.getAllLines('qualif.txt', http), LootGen.getAllLines('modifier.txt', http), LootGen.getAllLines('material.txt', http), LootGen.getAllLines('names.txt', http)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([gear, noun, adj, qualif, mod, mat, name]) => {
                LootGen.instance = new LootGen(gear, noun, adj, qualif, mod, mat, name);
                return LootGen.instance;
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(LootGen.instance);
        }
    }
    static getAllLines(fileName, http) {
        return http.get('/assets/' + fileName, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(text => text.split('\n')));
    }
    static random(from, to) {
        return Math.floor(Math.random() * (to - from + 1)) + from;
    }
    static randomBetween(values) {
        return values[Math.floor(Math.random() * values.length)];
    }
    static randomIndexWithChancesArray(chances) {
        const percent = LootGen.random(0, 100);
        let cumul = 0;
        for (let i = 0; i < chances.length; i++) {
            cumul += chances[i];
            if (percent < cumul) {
                return i;
            }
        }
        return 0;
    }
    defaultTree() {
        const nounGroup = new _rule_noungroup__WEBPACK_IMPORTED_MODULE_4__["NounGroup"](new _rule_stringtoken__WEBPACK_IMPORTED_MODULE_5__["StringToken"]('de la', 'des', 'du', 'des', 'de l\''), undefined, undefined, _terminal_terminaltype__WEBPACK_IMPORTED_MODULE_10__["TerminalType"].Noun, 0, 5);
        const numberNounGroup = new _rule_numberednoungroup__WEBPACK_IMPORTED_MODULE_15__["NumberedNounGroup"](new _rule_stringtoken__WEBPACK_IMPORTED_MODULE_5__["StringToken"]('de la', 'des', 'du', 'des', 'de l\''), undefined, _terminal_terminaltype__WEBPACK_IMPORTED_MODULE_10__["TerminalType"].Noun, 0, 5);
        this.start = new _rule_sequence__WEBPACK_IMPORTED_MODULE_3__["Sequence"]([
            new _rule_noungroup__WEBPACK_IMPORTED_MODULE_4__["NounGroup"](undefined, undefined, false, _terminal_terminaltype__WEBPACK_IMPORTED_MODULE_10__["TerminalType"].Gear, 20, 20),
            new _rule_optional__WEBPACK_IMPORTED_MODULE_13__["Optional"](new _rule_or__WEBPACK_IMPORTED_MODULE_14__["Or"]([nounGroup, numberNounGroup], [70, 30]), 40)
        ]);
    }
    loadUniqueNames(names) {
        this.markov = new src_app_markov_markovgenerator__WEBPACK_IMPORTED_MODULE_6__["MarkovCharGenerator"](2, '$', 12);
        this.markov.loadWords(names);
    }
    generateUniqueName() {
        return this.markov.generateWord();
    }
    gen() {
        const item = new _item__WEBPACK_IMPORTED_MODULE_1__["Item"]();
        const p = new _price__WEBPACK_IMPORTED_MODULE_7__["Price"]();
        const res = this.start.gen(item, false, false, false, p).trim();
        item.name = res.substring(0, 1).toUpperCase() + res.substring(1);
        item.price = p;
        if (item.stats.size + item.powers.length + item.tags.length > _item__WEBPACK_IMPORTED_MODULE_1__["Item"].UNIQUE_THRESHOLD) {
            item.uniqueName = this.generateUniqueName();
        }
        return item;
    }
}
LootGen.ctorParameters = () => [
    { type: Array },
    { type: Array },
    { type: Array },
    { type: Array },
    { type: Array },
    { type: Array },
    { type: Array }
];


/***/ }),

/***/ "./src/app/loot/model/price.ts":
/*!*************************************!*\
  !*** ./src/app/loot/model/price.ts ***!
  \*************************************/
/*! exports provided: Price */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Price", function() { return Price; });
class Price {
    constructor() {
        this.subPrices = [];
    }
    static parse(s, source) {
        let op;
        switch (s[0]) {
            case '+':
                op = '+';
                break;
            case '-':
                op = '-';
                break;
            case '*':
                op = '*';
                break;
            case '/':
                op = '/';
                break;
            default:
        }
        const p = new Price();
        p.operation = op;
        p.value = Number(s.substring(1));
        p.source = source;
        return p;
    }
    computeOp(cumul = 0) {
        switch (this.operation) {
            case '+':
                return cumul + this.value;
            case '*':
                return cumul * this.value;
            case '-':
                return cumul - this.value;
            case '/':
                return cumul / this.value;
            default:
                return cumul + this.value;
        }
    }
    compute(cumul = 0) {
        if (this.subPrices) {
            let res = cumul;
            // additions first
            this.subPrices.forEach(p => {
                if (p.operation) {
                    if (p.operation !== '*' && p.operation !== '/') {
                        res = p.computeOp(res);
                    }
                }
                else {
                    res = p.compute(res);
                }
            });
            // multiplications
            this.subPrices.forEach(p => {
                if (p.operation) {
                    if (p.operation === '*' || p.operation === '/') {
                        res = p.computeOp(res);
                    }
                }
            });
            return Math.max(0, res);
        }
        else {
            return this.computeOp(cumul);
        }
    }
    addPrices(prices) {
        prices.forEach(p => this.subPrices.push(p));
    }
    addPrice(p) {
        this.subPrices.push(p);
    }
    detail(tab = 0) {
        let res = '';
        // additions first
        this.subPrices.forEach(p => {
            if (p.operation) {
                if (p.operation !== '*' && p.operation !== '/') {
                    res += `${this.spaces(tab)}[${p.source}] ${p.operation}${p.value}<br>`;
                }
            }
            else {
                res += p.detail(tab + 1);
            }
        });
        // multiplications
        this.subPrices.forEach(p => {
            if (p.operation) {
                if (p.operation === '*') {
                    res += `${this.spaces(tab)}[${p.source}] x${p.value}<br>`;
                }
                if (p.operation === '/') {
                    res += `${this.spaces(tab)}[${p.source}] x${(1 / p.value).toFixed(2)}<br>`;
                }
            }
        });
        return res;
    }
    spaces(tabs) {
        let res = '';
        for (let i = 0; i < tabs; i++) {
            res += '&nbsp;&nbsp;';
        }
        return res;
    }
}


/***/ }),

/***/ "./src/app/loot/model/rule/noungroup.ts":
/*!**********************************************!*\
  !*** ./src/app/loot/model/rule/noungroup.ts ***!
  \**********************************************/
/*! exports provided: NounGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NounGroup", function() { return NounGroup; });
/* harmony import */ var _stringtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringtoken */ "./src/app/loot/model/rule/stringtoken.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../price */ "./src/app/loot/model/price.ts");
/* harmony import */ var _lootgen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lootgen */ "./src/app/loot/model/lootgen.ts");
/* harmony import */ var _terminal_terminaltype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terminal/terminaltype */ "./src/app/loot/model/terminal/terminaltype.ts");
/* harmony import */ var _qualificatifgroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qualificatifgroup */ "./src/app/loot/model/rule/qualificatifgroup.ts");





class NounGroup {
    constructor(prefix, suffix, plural, type, qualifChance, materialChance, nbAdj = 0) {
        this.prefix = prefix;
        this.suffix = suffix;
        this.plural = plural;
        this.type = type;
        this.qualifChance = qualifChance;
        this.materialChance = materialChance;
        this.nbAdj = nbAdj;
    }
    gen(item, dontcare, osef, ahah, p) {
        this.nbAdj = _lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].randomBetween([0, 0, 1, 1, 1, 2, 2, 3]);
        return this.getTokens(item, p).join(' ');
    }
    getTokens(item, p) {
        // get noun
        const actualNoun = _lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].generators.get(this.type).gen();
        p.addPrice(actualNoun.price);
        // get gender and plurality
        const masculine = actualNoun.masculine;
        let plural = this.plural !== undefined ? this.plural : Math.random() > 0.5;
        let vowel = actualNoun.beginsWithVowel();
        if (actualNoun.plural === '') {
            plural = false;
        }
        // generate strings
        const adjBef = [];
        const adjAft = [];
        let a;
        let i = this.nbAdj;
        while (i > 0) {
            a = _lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].generators.get(_terminal_terminaltype__WEBPACK_IMPORTED_MODULE_3__["TerminalType"].Adjective).gen();
            // check if already present
            if (!adjAft.includes(a) && !adjBef.includes(a)) {
                if (a.goesBefore) {
                    adjBef.push(a);
                }
                else {
                    adjAft.push(a);
                }
                p.addPrice(a.price);
                i--;
            } // else ignore adj and generate another one
        }
        if (adjBef.length > 0) {
            vowel = adjBef[0].beginsWithVowel();
        }
        const n = actualNoun.gen(item, masculine, plural);
        const pref = this.prefix !== undefined ? this.prefix.gen(item, masculine, plural, vowel, p) : '';
        const suff = this.suffix !== undefined ? this.suffix.gen(item, masculine, plural, vowel, p) : '';
        const adjAftStr = this.map(item, masculine, plural, adjAft).join(' ');
        const adjBefStr = this.map(item, masculine, plural, adjBef).join(' ');
        const tokens = [pref, adjBefStr, n, adjAftStr, suff];
        // material
        if (_lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].random(0, 100) < this.materialChance) {
            // add material
            const material = _lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].generators.get(_terminal_terminaltype__WEBPACK_IMPORTED_MODULE_3__["TerminalType"].Material).gen();
            tokens.push(material.gen(item, masculine, plural));
            p.addPrice(material.price);
        }
        // qualificatif
        if (_lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].random(0, 100) < this.qualifChance) {
            const price = new _price__WEBPACK_IMPORTED_MODULE_1__["Price"]();
            tokens.push(new _qualificatifgroup__WEBPACK_IMPORTED_MODULE_4__["QualificatifGroup"]().gen(item, masculine, plural, vowel, price));
            p.addPrice(price);
        }
        return tokens;
    }
    map(item, masculine, plural, adjAft) {
        return adjAft.map(a => a.gen(item, masculine, plural));
    }
}
NounGroup.ctorParameters = () => [
    { type: _stringtoken__WEBPACK_IMPORTED_MODULE_0__["StringToken"] },
    { type: _stringtoken__WEBPACK_IMPORTED_MODULE_0__["StringToken"] },
    { type: Boolean },
    { type: undefined },
    { type: Number },
    { type: Number },
    null
];


/***/ }),

/***/ "./src/app/loot/model/rule/numberednoungroup.ts":
/*!******************************************************!*\
  !*** ./src/app/loot/model/rule/numberednoungroup.ts ***!
  \******************************************************/
/*! exports provided: NumberedNounGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberedNounGroup", function() { return NumberedNounGroup; });
/* harmony import */ var _noungroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noungroup */ "./src/app/loot/model/rule/noungroup.ts");
/* harmony import */ var _stringtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringtoken */ "./src/app/loot/model/rule/stringtoken.ts");


class NumberedNounGroup extends _noungroup__WEBPACK_IMPORTED_MODULE_0__["NounGroup"] {
    constructor(prefix, suffix, type, qualifChance, materialChance) {
        super(prefix, suffix, true, type, qualifChance, materialChance);
    }
    getTokens(item, p) {
        const tokens = super.getTokens(item, p);
        tokens.splice(1, 0, '' + Math.floor(Math.pow((Math.random() * 15 + 1), 2)));
        return tokens;
    }
}
NumberedNounGroup.ctorParameters = () => [
    { type: _stringtoken__WEBPACK_IMPORTED_MODULE_1__["StringToken"] },
    { type: _stringtoken__WEBPACK_IMPORTED_MODULE_1__["StringToken"] },
    { type: undefined },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/app/loot/model/rule/optional.ts":
/*!*********************************************!*\
  !*** ./src/app/loot/model/rule/optional.ts ***!
  \*********************************************/
/*! exports provided: Optional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Optional", function() { return Optional; });
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../price */ "./src/app/loot/model/price.ts");

class Optional {
    constructor(token, chance) {
        this.token = token;
        this.chance = chance;
    }
    gen(item, masculine, plural, vowel, p) {
        if (Math.random() < (this.chance / 100.0)) {
            const price = new _price__WEBPACK_IMPORTED_MODULE_0__["Price"]();
            p.addPrice(price);
            return this.token.gen(item, masculine, plural, vowel, price);
        }
        else {
            return '';
        }
    }
}
Optional.ctorParameters = () => [
    { type: undefined },
    { type: Number }
];


/***/ }),

/***/ "./src/app/loot/model/rule/or.ts":
/*!***************************************!*\
  !*** ./src/app/loot/model/rule/or.ts ***!
  \***************************************/
/*! exports provided: Or */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Or", function() { return Or; });
/* harmony import */ var _lootgen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lootgen */ "./src/app/loot/model/lootgen.ts");

class Or {
    constructor(tokens, chances) {
        this.tokens = tokens;
        this.chances = chances;
    }
    gen(item, masculine, plural, vowel, p) {
        // choose one at random
        return this.tokens[_lootgen__WEBPACK_IMPORTED_MODULE_0__["LootGen"].randomIndexWithChancesArray(this.chances)].gen(item, masculine, plural, vowel, p);
    }
}
Or.ctorParameters = () => [
    { type: Array },
    { type: Array }
];


/***/ }),

/***/ "./src/app/loot/model/rule/qualificatifgroup.ts":
/*!******************************************************!*\
  !*** ./src/app/loot/model/rule/qualificatifgroup.ts ***!
  \******************************************************/
/*! exports provided: QualificatifGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualificatifGroup", function() { return QualificatifGroup; });
/* harmony import */ var _stringtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringtoken */ "./src/app/loot/model/rule/stringtoken.ts");
/* harmony import */ var _terminal_terminaltype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../terminal/terminaltype */ "./src/app/loot/model/terminal/terminaltype.ts");
/* harmony import */ var _lootgen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lootgen */ "./src/app/loot/model/lootgen.ts");



class QualificatifGroup {
    constructor() {
        this.pref = new _stringtoken__WEBPACK_IMPORTED_MODULE_0__["StringToken"]('de la', 'des', 'du', 'des', 'de l\'');
    }
    gen(item, masculine, plural, vowel, p) {
        this.type = _lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].random(0, 100) < 50 ? _terminal_terminaltype__WEBPACK_IMPORTED_MODULE_1__["TerminalType"].Gear : _terminal_terminaltype__WEBPACK_IMPORTED_MODULE_1__["TerminalType"].Noun;
        this.nbAdj = _lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].randomBetween([0, 0, 0, 1, 1, 1, 2, 2]);
        return '\'' + this.getToken(item, masculine, plural, p).trim() + '\'';
    }
    getToken(item, masculineParent, pluralParent, p) {
        // get noun
        const actualNoun = _lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].generators.get(this.type).gen();
        p.addPrice(actualNoun.price);
        // get gender and plurality
        const masculine = actualNoun.masculine;
        const plural = actualNoun.plural === '' ? false : Math.random() > 0.5;
        let vowel = _stringtoken__WEBPACK_IMPORTED_MODULE_0__["StringToken"].vowels.indexOf(actualNoun.get(plural).substring(0, 1)) !== -1;
        // generate strings
        const adjBef = [];
        const adjAft = [];
        let a;
        for (let i = 0; i < this.nbAdj; i++) {
            a = _lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].generators.get(_terminal_terminaltype__WEBPACK_IMPORTED_MODULE_1__["TerminalType"].Adjective).gen();
            if (a.goesBefore) {
                adjBef.push(a);
            }
            else {
                adjAft.push(a);
            }
            p.addPrice(a.price);
        }
        if (adjBef.length > 0) {
            vowel = adjBef[0].beginsWithVowel();
        }
        const qualif = _lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].generators.get(_terminal_terminaltype__WEBPACK_IMPORTED_MODULE_1__["TerminalType"].Qualificatif).gen();
        const q = qualif.gen(item, masculineParent, pluralParent);
        p.addPrice(qualif.price);
        const n = actualNoun.gen(item, masculine, plural);
        const pref = this.pref !== undefined ? this.pref.gen(item, masculine, plural, vowel, p) : '';
        const adjAftStr = this.map(item, masculine, plural, adjAft).join(' ');
        const adjBefStr = this.map(item, masculine, plural, adjBef).join(' ');
        return [q, pref, adjBefStr, n, adjAftStr].join(' ');
    }
    map(item, masculine, plural, adjAft) {
        return adjAft.map(a => a.gen(item, masculine, plural));
    }
}


/***/ }),

/***/ "./src/app/loot/model/rule/sequence.ts":
/*!*********************************************!*\
  !*** ./src/app/loot/model/rule/sequence.ts ***!
  \*********************************************/
/*! exports provided: Sequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sequence", function() { return Sequence; });
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../price */ "./src/app/loot/model/price.ts");

class Sequence {
    constructor(tokens) {
        this.tokens = tokens;
    }
    gen(item, masculine, plural, vowel, p) {
        const sequence = [];
        this.tokens.forEach(t => {
            const price = new _price__WEBPACK_IMPORTED_MODULE_0__["Price"]();
            sequence.push(t.gen(item, masculine, plural, vowel, price));
            p.addPrice(price);
        });
        return sequence.join(' ');
    }
}
Sequence.ctorParameters = () => [
    { type: Array }
];


/***/ }),

/***/ "./src/app/loot/model/rule/stringtoken.ts":
/*!************************************************!*\
  !*** ./src/app/loot/model/rule/stringtoken.ts ***!
  \************************************************/
/*! exports provided: StringToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringToken", function() { return StringToken; });
class StringToken {
    constructor(feminineSingular, femininePlural, masculineSingular, masculinePlural, singularVowel) {
        this.feminineSingular = feminineSingular;
        this.femininePlural = femininePlural;
        this.masculineSingular = masculineSingular;
        this.masculinePlural = masculinePlural;
        this.singularVowel = singularVowel;
    }
    gen(item, masculine, plural, vowel, p) {
        return masculine
            ? (plural ? this.masculinePlural : (vowel ? this.singularVowel : this.masculineSingular))
            : (plural ? this.femininePlural : (vowel ? this.singularVowel : this.feminineSingular));
    }
}
StringToken.vowels = 'aeiouyéèàêôîâû';
StringToken.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/loot/model/terminal/adjective.ts":
/*!**************************************************!*\
  !*** ./src/app/loot/model/terminal/adjective.ts ***!
  \**************************************************/
/*! exports provided: Adjective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adjective", function() { return Adjective; });
/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminal */ "./src/app/loot/model/terminal/terminal.ts");
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifier */ "./src/app/loot/model/terminal/modifier.ts");
/* harmony import */ var _lootgen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lootgen */ "./src/app/loot/model/lootgen.ts");
/* harmony import */ var _terminaltype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terminaltype */ "./src/app/loot/model/terminal/terminaltype.ts");
/* harmony import */ var _rule_stringtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rule/stringtoken */ "./src/app/loot/model/rule/stringtoken.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../price */ "./src/app/loot/model/price.ts");






class Adjective extends _terminal__WEBPACK_IMPORTED_MODULE_0__["Terminal"] {
    constructor(goesBefore, masculineSingular, masculinePlural, feminineSingular, femininePlural, mod) {
        super();
        this.goesBefore = goesBefore;
        this.masculineSingular = masculineSingular;
        this.masculinePlural = masculinePlural;
        this.feminineSingular = feminineSingular;
        this.femininePlural = femininePlural;
        this.mod = mod;
    }
    static parse(s) {
        const split = s.split('\.', 9);
        if (split.length !== 9) {
            console.error(s + ' is not a valid Adjective');
        }
        const adj = new Adjective('B' === split[0], split[1], split[2], split[3], split[4], undefined);
        // stat
        adj.stats = new Map();
        split[5].split('\|').forEach(stat => {
            if (stat.indexOf('=') !== -1) {
                const statSplit = stat.split('=');
                adj.stats.set(statSplit[0], Number(statSplit[1]));
            }
        });
        // tag
        adj.tags = split[6].split('\|');
        // power
        adj.powers = split[7].split('\|');
        // price
        adj.price = _price__WEBPACK_IMPORTED_MODULE_5__["Price"].parse(split[8], split[1]);
        return adj;
    }
    gen(item, masculine, plural) {
        if (this.mod !== undefined) {
            this.addStatsTagsAndPowers(item, this.mod.factor);
            return this.mod.gen(item, masculine, plural) + ' '
                + this.get(masculine, plural);
        }
        else {
            this.addStatsTagsAndPowers(item);
            return this.get(masculine, plural);
        }
    }
    get(masculine, plural) {
        return masculine
            ? plural ? this.masculinePlural : this.masculineSingular
            : plural ? this.femininePlural : this.feminineSingular;
    }
    beginsWithVowel() {
        if (Math.random() < 0.3) {
            this.mod = _lootgen__WEBPACK_IMPORTED_MODULE_2__["LootGen"].generators.get(_terminaltype__WEBPACK_IMPORTED_MODULE_3__["TerminalType"].Modifier).gen();
            return _rule_stringtoken__WEBPACK_IMPORTED_MODULE_4__["StringToken"].vowels.indexOf(this.mod.value.substring(0, 1)) !== -1;
        }
        else {
            this.mod = undefined;
            return _rule_stringtoken__WEBPACK_IMPORTED_MODULE_4__["StringToken"].vowels.indexOf(this.masculinePlural.substring(0, 1)) !== -1;
        }
    }
}
Adjective.ctorParameters = () => [
    { type: Boolean },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: _modifier__WEBPACK_IMPORTED_MODULE_1__["Modifier"] }
];


/***/ }),

/***/ "./src/app/loot/model/terminal/gear.ts":
/*!*********************************************!*\
  !*** ./src/app/loot/model/terminal/gear.ts ***!
  \*********************************************/
/*! exports provided: Gear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gear", function() { return Gear; });
/* harmony import */ var _noun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noun */ "./src/app/loot/model/terminal/noun.ts");

class Gear extends _noun__WEBPACK_IMPORTED_MODULE_0__["Noun"] {
}


/***/ }),

/***/ "./src/app/loot/model/terminal/material.ts":
/*!*************************************************!*\
  !*** ./src/app/loot/model/terminal/material.ts ***!
  \*************************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminal */ "./src/app/loot/model/terminal/terminal.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../price */ "./src/app/loot/model/price.ts");


class Material extends _terminal__WEBPACK_IMPORTED_MODULE_0__["Terminal"] {
    static parse(s) {
        const split = s.split('\.', 5);
        if (split.length !== 5) {
            console.error(s + ' is not a valid Material');
        }
        const mat = new Material();
        mat.material = split[0];
        // stat
        mat.stats = new Map();
        split[1].split('\|').forEach(stat => {
            if (stat.indexOf('=') !== -1) {
                const statSplit = stat.split('=');
                mat.stats.set(statSplit[0], Number(statSplit[1]));
            }
        });
        // tag
        mat.tags = split[2].split('\|');
        // power
        mat.powers = split[3].split('\|');
        mat.price = _price__WEBPACK_IMPORTED_MODULE_1__["Price"].parse(split[4], split[0]);
        return mat;
    }
    gen(item, masculine, plural) {
        this.addStatsTagsAndPowers(item);
        return this.material;
    }
}


/***/ }),

/***/ "./src/app/loot/model/terminal/modifier.ts":
/*!*************************************************!*\
  !*** ./src/app/loot/model/terminal/modifier.ts ***!
  \*************************************************/
/*! exports provided: Modifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modifier", function() { return Modifier; });
/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminal */ "./src/app/loot/model/terminal/terminal.ts");

class Modifier extends _terminal__WEBPACK_IMPORTED_MODULE_0__["Terminal"] {
    constructor(value, factor) {
        super();
        this.value = value;
        this.factor = factor;
    }
    static parse(s) {
        const split = s.split('\|', 2);
        if (split.length !== 2) {
            console.error(s + 'is not a valid Modifier');
        }
        return new Modifier(split[0], Number(split[1]));
    }
    gen(item, masculine, plural) {
        return this.value;
    }
}
Modifier.ctorParameters = () => [
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/app/loot/model/terminal/noun.ts":
/*!*********************************************!*\
  !*** ./src/app/loot/model/terminal/noun.ts ***!
  \*********************************************/
/*! exports provided: Noun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Noun", function() { return Noun; });
/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminal */ "./src/app/loot/model/terminal/terminal.ts");
/* harmony import */ var _rule_stringtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rule/stringtoken */ "./src/app/loot/model/rule/stringtoken.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../price */ "./src/app/loot/model/price.ts");



class Noun extends _terminal__WEBPACK_IMPORTED_MODULE_0__["Terminal"] {
    /**
     * Format is <code>[MF].singularform.pluralform.stat1=statvalue1|stat2=statvalue2.tag1|tag2|tag3.power 1|another power\n</code>
     */
    static parse(s) {
        const split = s.split('\.', 7);
        if (split.length !== 7) {
            console.error(s + ' is not a valid Noun');
        }
        const noun = new Noun();
        // gender
        noun.masculine = 'M' === split[0];
        // singular/plural
        noun.singular = split[1];
        noun.plural = split[2];
        // stat
        noun.stats = new Map();
        split[3].split('\|').forEach(stat => {
            if (stat.indexOf('=') !== -1) {
                const statSplit = stat.split('=');
                noun.stats.set(statSplit[0], Number(statSplit[1]));
            }
        });
        // tag
        noun.tags = split[4].split('\|');
        // power
        noun.powers = split[5].split('\|');
        noun.price = _price__WEBPACK_IMPORTED_MODULE_2__["Price"].parse(split[6], split[1]);
        return noun;
    }
    get(plural) {
        return plural ? this.plural : this.singular;
    }
    gen(item, masculine, plural) {
        this.addStatsTagsAndPowers(item);
        return this.get(plural);
    }
    beginsWithVowel() {
        return _rule_stringtoken__WEBPACK_IMPORTED_MODULE_1__["StringToken"].vowels.indexOf(this.singular.substring(0, 1)) !== -1;
    }
}


/***/ }),

/***/ "./src/app/loot/model/terminal/qualificatif.ts":
/*!*****************************************************!*\
  !*** ./src/app/loot/model/terminal/qualificatif.ts ***!
  \*****************************************************/
/*! exports provided: Qualificatif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qualificatif", function() { return Qualificatif; });
/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminal */ "./src/app/loot/model/terminal/terminal.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../price */ "./src/app/loot/model/price.ts");


class Qualificatif extends _terminal__WEBPACK_IMPORTED_MODULE_0__["Terminal"] {
    static parse(s) {
        const split = s.split('\.', 8);
        if (split.length !== 8) {
            console.error(s + ' is not a valid Qualificatif');
        }
        const qual = new Qualificatif();
        // singular/plural
        qual.masculineSingular = split[0];
        qual.mascuinePlural = split[1];
        qual.feminineSingular = split[2];
        qual.femininePlural = split[3];
        // stat
        qual.stats = new Map();
        split[4].split('\|').forEach(stat => {
            if (stat.indexOf('=') !== -1) {
                const statSplit = stat.split('=');
                qual.stats.set(statSplit[0], Number(statSplit[1]));
            }
        });
        // tag
        qual.tags = split[5].split('\|');
        // power
        qual.powers = split[6].split('\|');
        qual.price = _price__WEBPACK_IMPORTED_MODULE_1__["Price"].parse(split[7], split[0]);
        return qual;
    }
    gen(item, masculine, plural) {
        this.addStatsTagsAndPowers(item);
        return ' ' + this.get(masculine, plural);
    }
    get(masculine, plural) {
        return masculine
            ? plural ? this.mascuinePlural : this.masculineSingular
            : plural ? this.femininePlural : this.feminineSingular;
    }
}


/***/ }),

/***/ "./src/app/loot/model/terminal/terminal.ts":
/*!*************************************************!*\
  !*** ./src/app/loot/model/terminal/terminal.ts ***!
  \*************************************************/
/*! exports provided: Terminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terminal", function() { return Terminal; });
class Terminal {
    init() {
        this.tags = [];
        this.stats = new Map();
        this.powers = [];
    }
    addStatsTagsAndPowers(item, factor = 1) {
        this.stats.forEach((value, key) => item.addStat(key, value * factor));
        this.powers.forEach(p => item.addPower(p));
        this.tags.forEach(t => item.addTag(t));
    }
}


/***/ }),

/***/ "./src/app/loot/model/terminal/terminalgenerator.ts":
/*!**********************************************************!*\
  !*** ./src/app/loot/model/terminal/terminalgenerator.ts ***!
  \**********************************************************/
/*! exports provided: TerminalGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalGenerator", function() { return TerminalGenerator; });
class TerminalGenerator {
    constructor(items, parsingFun) {
        this.pool = items.map(i => parsingFun(i));
    }
    gen() {
        return this.pool[Math.floor(Math.random() * this.pool.length)];
    }
}
TerminalGenerator.ctorParameters = () => [
    { type: Array },
    { type: Function }
];


/***/ }),

/***/ "./src/app/loot/model/terminal/terminaltype.ts":
/*!*****************************************************!*\
  !*** ./src/app/loot/model/terminal/terminaltype.ts ***!
  \*****************************************************/
/*! exports provided: TerminalType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalType", function() { return TerminalType; });
var TerminalType;
(function (TerminalType) {
    TerminalType[TerminalType["Adjective"] = 0] = "Adjective";
    TerminalType[TerminalType["Gear"] = 1] = "Gear";
    TerminalType[TerminalType["Noun"] = 2] = "Noun";
    TerminalType[TerminalType["Material"] = 3] = "Material";
    TerminalType[TerminalType["Modifier"] = 4] = "Modifier";
    TerminalType[TerminalType["Qualificatif"] = 5] = "Qualificatif";
})(TerminalType || (TerminalType = {}));


/***/ }),

/***/ "./src/app/markov/endingchecker.ts":
/*!*****************************************!*\
  !*** ./src/app/markov/endingchecker.ts ***!
  \*****************************************/
/*! exports provided: StringEndingChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringEndingChecker", function() { return StringEndingChecker; });
class StringEndingChecker {
    constructor(end) {
        this.end = end;
    }
    isEnd(t) {
        return t.charAt(t.length - 1) === this.end;
    }
}
StringEndingChecker.ctorParameters = () => [
    { type: String }
];


/***/ }),

/***/ "./src/app/markov/markovgenerator.ts":
/*!*******************************************!*\
  !*** ./src/app/markov/markovgenerator.ts ***!
  \*******************************************/
/*! exports provided: MarkovCharGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkovCharGenerator", function() { return MarkovCharGenerator; });
/* harmony import */ var _probas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./probas */ "./src/app/markov/probas.ts");
/* harmony import */ var _endingchecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endingchecker */ "./src/app/markov/endingchecker.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class MarkovCharGenerator {
    constructor(factor, end, max) {
        this.factor = factor;
        this.end = end;
        this.max = max;
        this.probas = new Map();
        this.checker = new _endingchecker__WEBPACK_IMPORTED_MODULE_1__["StringEndingChecker"](this.end);
    }
    // OUT
    generateWord() {
        // starting with empty token
        let token = '';
        let word = '';
        let nextChar = '';
        // only stop when reaching end character or max length
        while (true) {
            // get next char chain
            token = this.probas.get(token).random(word.length > this.max);
            // get the last char
            nextChar = token.charAt(token.length - 1);
            if (nextChar === this.end) {
                // end char, we stop!
                break;
            }
            // append it to the word
            word = word.concat(nextChar);
        }
        return word.toString();
    }
    // IN
    loadWord(w) {
        // get chars from string and append the end char at then end
        const chars = w + this.end;
        let charChain = chars.substring(0, this.factor);
        let currentToken = '';
        for (const char of chars) {
            // shift chain to the rigth
            // nic >> ice (+e)
            charChain = charChain.substring(1) + char;
            const p = this.probas.get(currentToken);
            if (p === undefined) {
                // new proba
                this.probas.set(currentToken, new _probas__WEBPACK_IMPORTED_MODULE_0__["Probas"](charChain, this.checker));
            }
            else {
                p.addValue(charChain);
            }
            currentToken = charChain;
        }
    }
    loadWords(words) {
        words.forEach(w => this.loadWord(w));
    }
    loadWordsFromFile(fileName, http) {
        if (this.probas.size === 0) {
            return this.readResource(fileName, http);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
    }
    readResource(fileName, http) {
        return http.get('/assets/' + fileName, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(text => {
            this.loadWords(text.split('\n'));
        }));
    }
}
MarkovCharGenerator.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/app/markov/markovwordgenerator.ts":
/*!***********************************************!*\
  !*** ./src/app/markov/markovwordgenerator.ts ***!
  \***********************************************/
/*! exports provided: MarkovWordGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkovWordGenerator", function() { return MarkovWordGenerator; });
/* harmony import */ var _probas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./probas */ "./src/app/markov/probas.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _endingchecker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endingchecker */ "./src/app/markov/endingchecker.ts");




class MarkovWordGenerator {
    constructor(factor, max) {
        this.factor = factor;
        this.max = max;
        this.probas = new Map();
        this.end = '$';
        this.endChecker = new _endingchecker__WEBPACK_IMPORTED_MODULE_3__["StringEndingChecker"](this.end);
    }
    // OUT
    generateSentence() {
        // starting with empty token
        let token = 'ST$RT';
        const sentence = [];
        let nextWord = '';
        let tokenAsWords;
        let prob;
        // only stop when reaching end character or max length
        while (sentence.length < 200) {
            // get next word chain
            prob = this.probas.get(token);
            if (!prob) {
                console.log(token);
            }
            token = prob.random(sentence.length > this.max);
            // get the last word (only the last is new, the rest is what we have already)
            // e.g. "the last word" will generate "last word is". We only get "is"
            tokenAsWords = token.match(/.*?[\.\s]+?/g);
            nextWord = tokenAsWords[tokenAsWords.length - 1];
            if (token.charAt(token.length - 1) === this.end) {
                // end char, we stop!
                break;
            }
            // append it to the sentence
            if (sentence.length === 0) {
                sentence.push(token);
            }
            else {
                sentence.push(nextWord);
            }
        }
        return sentence.join('');
    }
    // IN
    loadText(t) {
        // split into sentences
        const sentences = t.match(/[^\.!\?]+[\.!\?]+/g);
        sentences.forEach((s, i) => {
            if (i % 100 === 0) {
                console.log('LOADING SENTENCE ' + i + ' /' + sentences.length);
            }
            this.loadSentence(s);
        });
    }
    loadSentence(w) {
        // get chars from string and append the end char at then end
        const words = w.match(/.*?[\.\s]+?/g);
        if (words === null) {
            return;
        }
        words.push(this.end);
        let wordChain;
        let currentToken = 'ST$RT';
        for (let i = 0; (i + this.factor) < words.length + 1; i++) {
            wordChain = words.slice(i, i + this.factor).join('');
            const p = this.probas.get(currentToken);
            if (p === undefined) {
                // new proba
                this.probas.set(currentToken, new _probas__WEBPACK_IMPORTED_MODULE_0__["Probas"](wordChain, this.endChecker));
            }
            else {
                p.addValue(wordChain);
            }
            currentToken = wordChain;
        }
    }
    loadSentencesFromFile(fileName, http) {
        if (this.probas.size === 0) {
            return this.readResource(fileName, http);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }
    }
    readResource(fileName, http) {
        return http.get('/assets/' + fileName, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(text => {
            this.loadText(text);
        }));
    }
}
MarkovWordGenerator.ctorParameters = () => [
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/app/markov/probas.ts":
/*!**********************************!*\
  !*** ./src/app/markov/probas.ts ***!
  \**********************************/
/*! exports provided: Probas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Probas", function() { return Probas; });
class Probas {
    // when building a proba at least one value must be provided
    constructor(firstPossibleValue, endingChecker) {
        this.endingChecker = endingChecker;
        this.sum = 0;
        this.possibleValues = new Map();
        this.addValue(firstPossibleValue);
    }
    // OUT
    random(endIfPossible, validator) {
        // the word needs to end, get the first token that is valid
        if (endIfPossible) {
            this.possibleValues.forEach((value, key) => {
                if (this.endingChecker.isEnd(key)) {
                    return key;
                }
            });
        }
        // do we need to filter ?
        let possibleValuesToUse = this.possibleValues;
        let sumToUse = this.sum;
        if (validator) {
            possibleValuesToUse = new Map();
            sumToUse = 0;
            this.possibleValues.forEach((value, key) => {
                if (validator.endIsInPool(key)) {
                    possibleValuesToUse.set(key, value);
                    sumToUse += value;
                }
            });
        }
        // random int between 0 and sum
        const r = Math.floor(Math.random() * sumToUse);
        let cumul = 0;
        for (const e of possibleValuesToUse) {
            cumul += e[1];
            if (r < cumul) {
                return e[0];
            }
        }
        // should not happen
        return undefined;
    }
    // IN
    addValue(value) {
        const p = this.possibleValues.get(value);
        if (p !== undefined) {
            // add
            this.possibleValues.set(value, p + 1);
        }
        else {
            // new
            this.possibleValues.set(value, 1);
        }
        // increment global sum
        this.sum++;
    }
    addValues(values) {
        values.forEach(v => this.addValue(v));
    }
}
Probas.ctorParameters = () => [
    { type: undefined },
    { type: undefined }
];


/***/ }),

/***/ "./src/app/notabot/notabot.component.scss":
/*!************************************************!*\
  !*** ./src/app/notabot/notabot.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".generation {\n  text-align: center;\n  height: calc(100% - 161px);\n  padding: 60px;\n  font-size: 25px;\n}\n.generation .btn-container {\n  margin-bottom: 50px;\n}\n.generation .btn-container select {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zkcm91bWFndWV0L0NPREUvbWUvZ2VuLXdlYi9zcmMvYXBwL25vdGFib3Qvbm90YWJvdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbm90YWJvdC9ub3RhYm90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURBUTtFQUNJLGVBQUE7QUNFWiIsImZpbGUiOiJzcmMvYXBwL25vdGFib3Qvbm90YWJvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5lcmF0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNjFweCk7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG5cbiAgICAuYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmdlbmVyYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTYxcHgpO1xuICBwYWRkaW5nOiA2MHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uZ2VuZXJhdGlvbiAuYnRuLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uZ2VuZXJhdGlvbiAuYnRuLWNvbnRhaW5lciBzZWxlY3Qge1xuICBmb250LXNpemU6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/notabot/notabot.component.ts":
/*!**********************************************!*\
  !*** ./src/app/notabot/notabot.component.ts ***!
  \**********************************************/
/*! exports provided: NotabotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotabotComponent", function() { return NotabotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _markov_markovwordgenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../markov/markovwordgenerator */ "./src/app/markov/markovwordgenerator.ts");





let NotabotComponent = class NotabotComponent {
    constructor(http) {
        this.http = http;
        this.settings = { file: 'lexicon.txt', factor: 2, end: '$', maxLenght: 50 };
        this.words = [];
        this.markov = new _markov_markovwordgenerator__WEBPACK_IMPORTED_MODULE_4__["MarkovWordGenerator"](this.settings.factor, this.settings.maxLenght);
    }
    ngOnInit() {
    }
    generate(nb) {
        this.generateFor(this.settings.file, nb);
    }
    generateFor(fileName, toGenerate) {
        this.words = ['loading...'];
        this.markov.loadSentencesFromFile(fileName, this.http).subscribe(() => { }, error => { }, () => {
            this.words = [];
            let count = 0;
            while (count < toGenerate) {
                this.words.push(this.markov.generateSentence());
                count++;
            }
        });
    }
};
NotabotComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NotabotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notabot',
        template: __webpack_require__(/*! raw-loader!./notabot.component.html */ "./node_modules/raw-loader/index.js!./src/app/notabot/notabot.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('appear', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s')
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./notabot.component.scss */ "./src/app/notabot/notabot.component.scss")]
    })
], NotabotComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fdroumaguet/CODE/me/gen-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map