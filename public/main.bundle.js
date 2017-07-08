webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap{\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-height: 100vh;\r\n  background-color: #222;\r\n}\r\n\r\n.content{\r\n  -webkit-box-flex:1;\r\n      -ms-flex:1;\r\n          flex:1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\r\n  <app-nav></app-nav>\r\n  <div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootstrap_bootstrap_module__ = __webpack_require__("../../../../../src/app/bootstrap/bootstrap.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__bootstrap_bootstrap_module__["a" /* BootstrapModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routing */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_routing__ = __webpack_require__("../../../../../src/app/home/home.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var APP_ROUTES = [
    { path: '', children: __WEBPACK_IMPORTED_MODULE_1__home_home_routing__["a" /* HomeRoutes */] },
    { path: '**', redirectTo: '/' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=F:/App_Projects/myApp/src/app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/bootstrap/bootstrap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BootstrapModule = (function () {
    function BootstrapModule() {
    }
    BootstrapModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* CollapseModule */].forRoot()
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* CollapseModule */]
            ]
        })
    ], BootstrapModule);
    return BootstrapModule;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/bootstrap.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#profile{\r\n  padding-top:36px;\r\n}\r\n\r\n@media (max-width:768px) {\r\n  .side-menu{\r\n    margin-top: 16px;\r\n    margin-bottom:26px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-8\">\r\n      <div class=\"page-header\">\r\n        <h1>About</h1>\r\n      </div>\r\n      <p>Since 2001, Alex Lau Acupuncture has been a family-run business serving the Foster City Bay Area for over 16 years to deliver\r\nquality acupuncture services. We have nurtured our community with exceptional care and are highly trusted amongst health professionals.\r\n      </p>\r\n      <div class=\"row\" style='padding-top:36px'>\r\n        <div class=\"person col-md-5\">\r\n          <img class=\"img-responsive center-block\" src=\"../../assets/alex_lau.jpg\" alt=\"Alex Lau\">\r\n        </div>\r\n        <div class=\"person-detail col-md-7\">\r\n          <h3>Alex Lau, L.Ac.</h3>\r\n          <p>Alex Lau is a board certified acupuncturist in the state of California with nearly two decades of experience. He is the designated onsite acupuncturist at Electronic Arts and Oracle Corporation. Alex holds a Masters from American College of Traditional Chinese Medicine and Bachelors from Columbia University. </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-4\">\r\n      <div class=\"side-menu\">\r\n      <div class=\"media\">\r\n        <div class=\"media-left media-middle\">\r\n           <a routerLink='/appointment'><span class=\"glyphicon glyphicon-calendar font\" aria-hidden='true'></span></a>\r\n        </div>\r\n        <div class=\"media-body\">\r\n          <h4 class=\"media-heading\">Schedule</h4>\r\n          <p>Schedule an appointment to feel better sooner than later. Just click the icon to the left!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"media\">\r\n        <div class=\"media-left media-middle\">\r\n           <span class=\"glyphicon glyphicon-earphone font\" aria-hidden='true'></span>\r\n        </div>\r\n        <div class=\"media-body\">\r\n          <h4 class=\"media-heading\">Call us</h4>\r\n          <p>We are available to answer your questions at (650) 799-9088.</p>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <h4 class='text-center'>Check us out on Yelp:</h4>\r\n        <div id=\"yelp-biz-badge-rrc-i90qGSHnWWxXLSo9FLCpaw\" class='text-center'><a href=\"http://yelp.com/biz/alex-lau-acupuncture-and-herbs-foster-city?utm_medium=badge_star_rating_reviews&amp;utm_source=biz_review_badge\" target=\"_blank\"></a></div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent(elemRef) {
        this.elemRef = elemRef;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.innerHTML = "(function(d, t) {var g = d.createElement(t);var s = d.getElementsByTagName(t)[0];g.id = \"yelp-biz-badge-script-rrc-i90qGSHnWWxXLSo9FLCpaw\";g.src = \"//yelp.com/biz_badge_js/en_US/rrc/i90qGSHnWWxXLSo9FLCpaw.js\";s.parentNode.insertBefore(g, s);}(document, 'script'));";
        this.elemRef.nativeElement.appendChild(s);
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/home/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/about/about.component.css"), __webpack_require__("../../../../../src/app/home/shared_comp.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/about.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/appointment/appointment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-success{\r\n  background-color: #408E2F;\r\n  border:none;\r\n  color: #CDE1C9;\r\n}\r\n\r\n.btn-success:hover{\r\n  background-color: #156005;\r\n}\r\n\r\n#buttons{\r\n  margin-bottom: 32px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/appointment/appointment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-8 col-sm-push-2\">\r\n      <div class=\"page-header\">\r\n        <h1>Appointment</h1>\r\n      </div>\r\n      <p>To make an appointment with us, you can call us at (650) 799-9088 or\r\n        schedule online below. Same day appointments can be made only via phone.\r\n      </p>\r\n\r\n      <router-outlet></router-outlet>\r\n      <div *ngIf='showButtons' id='buttons'>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 text-center\">\r\n            <h3>New patients</h3>\r\n            <p>\r\n              <button routerLink='full' type='button' class='btn btn-success btn-lg'>Consultation & treatment</button>\r\n            </p>\r\n            <p>\r\n              <button routerLink='consultation' type='button' class='btn btn-success btn-lg'>Consultation only</button>\r\n            </p>\r\n          </div>\r\n          <div class=\"col-sm-6 text-center\">\r\n            <h3>Returning patients</h3>\r\n            <button routerLink='follow-up' type='button' class='btn btn-success btn-lg'>Follow-up treatment</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/appointment/appointment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppointmentComponent = (function () {
    function AppointmentComponent(route) {
        this.route = route;
        this.showButtons = true;
    }
    AppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.url != '/appointment') {
            this.showButtons = false;
        }
        this.route.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                if (event.url != '/appointment') {
                    _this.showButtons = false;
                }
                else
                    (_this.showButtons = true);
            }
        });
    };
    AppointmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appointment',
            template: __webpack_require__("../../../../../src/app/home/appointment/appointment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/appointment/appointment.component.css"), __webpack_require__("../../../../../src/app/home/shared_comp.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
    ], AppointmentComponent);
    return AppointmentComponent;
    var _a;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/appointment.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/appointment/consultation/consultation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/appointment/consultation/consultation.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe src=\"https://app.acuityscheduling.com/schedule.php?owner=13202886&appointmentType=3531691\" width=\"100%\" height=\"600\" frameBorder=\"0\"></iframe>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/appointment/consultation/consultation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConsultationComponent = (function () {
    function ConsultationComponent() {
    }
    ConsultationComponent.prototype.ngOnInit = function () {
    };
    ConsultationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-consultation',
            template: __webpack_require__("../../../../../src/app/home/appointment/consultation/consultation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/appointment/consultation/consultation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsultationComponent);
    return ConsultationComponent;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/consultation.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/appointment/follow-up/follow-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3{\r\n  color:#CDE1C9;\r\n  margin-top: 120px;\r\n}\r\n\r\n.thumb-hover{\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.thumbnail{\r\n  padding-top: 10%;\r\n  background-color: #373a37;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/appointment/follow-up/follow-up.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe src=\"https://app.acuityscheduling.com/schedule.php?owner=13202886&appointmentType=2462595\" width=\"100%\" height=\"600\" frameBorder=\"0\"></iframe>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/appointment/follow-up/follow-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FollowUpComponent = (function () {
    function FollowUpComponent() {
    }
    FollowUpComponent.prototype.ngOnInit = function () {
    };
    FollowUpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-follow-up',
            template: __webpack_require__("../../../../../src/app/home/appointment/follow-up/follow-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/appointment/follow-up/follow-up.component.css"), __webpack_require__("../../../../../src/app/home/appointment/appointment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FollowUpComponent);
    return FollowUpComponent;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/follow-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/appointment/full/full.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/appointment/full/full.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe src=\"https://app.acuityscheduling.com/schedule.php?owner=13202886&appointmentType=3531670\" width=\"100%\" height=\"600\" frameBorder=\"0\"></iframe>\n"

/***/ }),

/***/ "../../../../../src/app/home/appointment/full/full.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullComponent = (function () {
    function FullComponent() {
    }
    FullComponent.prototype.ngOnInit = function () {
    };
    FullComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-full',
            template: __webpack_require__("../../../../../src/app/home/appointment/full/full.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/appointment/full/full.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FullComponent);
    return FullComponent;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/full.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n  list-style: none;\r\n  font-size: 16px;\r\n}\r\n\r\ni.fa{\r\n  padding-right:12px;\r\n}\r\n\r\nul{\r\n  -webkit-padding-start: 0px;\r\n}\r\n\r\nspan{\r\n  font-weight:bold;\r\n}\r\n\r\nul>li{\r\n  margin-bottom: 16px;\r\n}\r\n\r\naddress{\r\n  font-size: 16px;\r\n  color:#CDE1C9;\r\n}\r\n\r\nagm-map{\r\n  height:300px;\r\n}\r\n\r\n.regular{\r\n  color:black;\r\n  text-align: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-5 col-sm-offset-2\">\r\n      <div class=\"page-header\">\r\n        <h1>Contact</h1>\r\n      </div>\r\n      <address>\r\n        <strong>Alex Lau Acupuncture and Herbs</strong><br>\r\n        1098 Foster City Blvd. Ste 301 <br>\r\n        Foster City, CA 94404 <br>\r\n        Phone: (650) 799-9088 <br>\r\n        Fax: (650) 212-7298 <br>\r\n        Email: aculau@gmail.com\r\n      </address>\r\n      <h3>Location</h3>\r\n      <div>\r\n        <p><b>Directions</b>: Take 92 and exit off Foster City Blvd.\r\n          We are located in the offices left of the 99 Ranch/Marlin Cove Marketplace.\r\n          Enter the lobby and take the elevator to the third floor.\r\n          Parking is free and available.</p>\r\n        </div>\r\n      <agm-map [latitude]='lat' [longitude]='lng' [zoom]='zoom'>\r\n        <agm-marker [latitude]='markerLat' [longitude]='markerLng'\r\n        [label]='label'>\r\n        <agm-info-window [isOpen]='true'>\r\n          <div class='agm-info-window-content'>\r\n            <div id=\"content\" style=\"max-width:250px\">\r\n              <h5>Alex Lau Acupuncture</h5>\r\n            </div>\r\n          </div>\r\n        </agm-info-window>\r\n      </agm-marker>\r\n      </agm-map>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-3\">\r\n      <div class=\"side-menu text-center\">\r\n        <h3><b>Open Hours</b></h3>\r\n        <ul>\r\n          <li><span>Monday</span><br> 8:30 AM to 5:00 PM</li>\r\n          <li><span>Tuesday</span><br> 8:30 AM to 5:00 PM</li>\r\n          <li><span>Wednesday</span><br> 8:30 AM to 10:00 AM<br /> 3:00 PM to 5:00 PM </li>\r\n          <li><span>Thursday</span><br> 8:30 AM to 5:00 PM</li>\r\n          <li><span>Friday</span><br> 8:30 AM to 5:00 PM</li>\r\n          <li><span>Saturday</span><br> 8:30 AM to 12:00 PM</li>\r\n          <li>After hours are available upon request.</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.lat = 37.557826;
        this.lng = -122.265209;
        this.zoom = 14;
        this.markerLat = 37.553282;
        this.markerLng = -122.256321;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/home/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/contact/contact.component.css"), __webpack_require__("../../../../../src/app/home/shared_comp.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div>i{\r\n  font-size: 70px;\r\n}\r\n\r\n.jumbotron{\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/zen_tiny.jpg") + ");\r\n  background-color:#222;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center 75%;\r\n  height:65vh;\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  color:white;\r\n  margin-bottom: 0px;\r\n  transition: opacity 800ms;\r\n  opacity: 0;\r\n}\r\n\r\n.ng-lazyloaded{\r\n  opacity:1;\r\n}\r\n\r\n#three-columns{\r\n  padding-top: 48px;\r\n  padding-bottom:70px;\r\n  background: #222;\r\n  color:#CDE1C9;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n  .jumbotron{\r\n    background-position:75%;\r\n  }\r\n\r\n  .body-text{\r\n    padding-bottom: 26px;\r\n  }\r\n}\r\n\r\n@media screen and (max-height:700px){\r\n  .jumbotron{\r\n    height:87vh;\r\n  }\r\n}\r\n\r\n.body-text{\r\n  margin-top: 16px;\r\n  font-size: 18px;\r\n  line-height: 1.5em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" [lazyLoad]='image'>\r\n  <div class=\"container\">\r\n  <h1>Alex Lau Acupuncture</h1>\r\n  <p>We provide acupuncture services and herbal remedies.</p>\r\n  <p>\r\n    <a class=\"btn btn-success btn-lg\" routerLink='appointment' role=\"button\">Schedule appointment</a>\r\n  </p>\r\n</div>\r\n</div>\r\n\r\n<section id='three-columns'>\r\n  <h1 class='text-center' style='padding-bottom:46px;'>Make Your Health Great Again</h1>\r\n  <div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"text-center\">\r\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n        <p class='body-text'>We are here to make you feel better. When you come into our clinic,\r\n          it is all about you and your health.</p>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"text-center\">\r\n        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n        <p class=\"body-text\">Same day appointments and online scheduling are available to make your life easier.</p>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"text-center\">\r\n        <i class=\"fa fa-user-md\" aria-hidden=\"true\"></i>\r\n        <p class=\"body-text\">We are highly qualified with over 16 years of experience treating patients.</p>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        // Homepage background image
        this.image = '../../assets/zen.jpg';
        this.defaultImage = '../../assets/zen_tiny.jpg'; // Initial small image
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__ = __webpack_require__("../../../../ng-lazyload-image/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_services_component__ = __webpack_require__("../../../../../src/app/home/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__insurance_insurance_component__ = __webpack_require__("../../../../../src/app/home/insurance/insurance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/home/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__appointment_appointment_component__ = __webpack_require__("../../../../../src/app/home/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("../../../../../src/app/home/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__appointment_full_full_component__ = __webpack_require__("../../../../../src/app/home/appointment/full/full.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__appointment_consultation_consultation_component__ = __webpack_require__("../../../../../src/app/home/appointment/consultation/consultation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__appointment_follow_up_follow_up_component__ = __webpack_require__("../../../../../src/app/home/appointment/follow-up/follow-up.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCP_Vy7_B9ESJi11tTb58XKlLT-iR4aOMY'
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__insurance_insurance_component__["a" /* InsuranceComponent */],
                __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__appointment_appointment_component__["a" /* AppointmentComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__appointment_full_full_component__["a" /* FullComponent */],
                __WEBPACK_IMPORTED_MODULE_13__appointment_consultation_consultation_component__["a" /* ConsultationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__appointment_follow_up_follow_up_component__["a" /* FollowUpComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_services_component__ = __webpack_require__("../../../../../src/app/home/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__insurance_insurance_component__ = __webpack_require__("../../../../../src/app/home/insurance/insurance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/home/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointment_appointment_component__ = __webpack_require__("../../../../../src/app/home/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/home/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appointment_full_full_component__ = __webpack_require__("../../../../../src/app/home/appointment/full/full.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appointment_consultation_consultation_component__ = __webpack_require__("../../../../../src/app/home/appointment/consultation/consultation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__appointment_follow_up_follow_up_component__ = __webpack_require__("../../../../../src/app/home/appointment/follow-up/follow-up.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });









var HomeRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_1__services_services_component__["a" /* ServicesComponent */] },
    { path: 'insurance', component: __WEBPACK_IMPORTED_MODULE_2__insurance_insurance_component__["a" /* InsuranceComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'appointment', component: __WEBPACK_IMPORTED_MODULE_4__appointment_appointment_component__["a" /* AppointmentComponent */], children: [
            { path: 'full', component: __WEBPACK_IMPORTED_MODULE_6__appointment_full_full_component__["a" /* FullComponent */] },
            { path: 'consultation', component: __WEBPACK_IMPORTED_MODULE_7__appointment_consultation_consultation_component__["a" /* ConsultationComponent */] },
            { path: 'follow-up', component: __WEBPACK_IMPORTED_MODULE_8__appointment_follow_up_follow_up_component__["a" /* FollowUpComponent */] }
        ] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] }
];
//# sourceMappingURL=F:/App_Projects/myApp/src/home.routing.js.map

/***/ }),

/***/ "../../../../../src/app/home/insurance/insurance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group{\r\n  padding-bottom: 20px;\r\n}\r\n\r\nli{\r\n  font-size: 16px;\r\n  border:none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/insurance/insurance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-8\">\r\n      <div class=\"page-header\">\r\n        <h1>Insurance</h1>\r\n      </div>\r\n      <p>We accept most major health insurance networks, auto cases, and worker's compensation.</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 col-sm-offset-3\">\r\n          <div class=\"text-center\">\r\n            <h4><u>Accepted networks</u></h4>\r\n          </div>\r\n          <ul class=\"list-group text-center\">\r\n            <li class=\"list-group-item\">Aetna</li>\r\n            <li class=\"list-group-item\">American Specialty Health</li>\r\n            <li class=\"list-group-item\">Anthem Blue Cross</li>\r\n            <li class=\"list-group-item\">Blue Shield of California</li>\r\n            <li class=\"list-group-item\">Cigna</li>\r\n            <li class=\"list-group-item\">Health Net</li>\r\n            <li class=\"list-group-item\">Optum Health</li>\r\n            <li class=\"list-group-item\">United Health Care</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4 col-xs-12\">\r\n      <div class=\"side-menu\">\r\n        <div class=\"media\">\r\n          <div class=\"media-left media-middle\">\r\n             <a href=\"javascript:void( window.open( 'https://form.jotform.us/50855923828163', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) \">\r\n               <span class=\"glyphicon glyphicon-search font\" aria-hidden='true'></span>\r\n             </a>\r\n          </div>\r\n          <div class=\"media-body\">\r\n            <h4 class=\"media-heading\">Check Insurance</h4>\r\n            <p>\r\n            To verify if you have acupuncture coverage,\r\n            please submit your information through our secure form by clicking the icon to the left.\r\n            </p>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/insurance/insurance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InsuranceComponent = (function () {
    function InsuranceComponent() {
    }
    InsuranceComponent.prototype.ngOnInit = function () {
    };
    InsuranceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-insurance',
            template: __webpack_require__("../../../../../src/app/home/insurance/insurance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/insurance/insurance.component.css"), __webpack_require__("../../../../../src/app/home/shared_comp.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InsuranceComponent);
    return InsuranceComponent;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/insurance.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa{\r\n  font-size:70px;\r\n  margin-left: 13px;\r\n  margin-right: 13px;\r\n  color:rgb(158, 77, 0);\r\n}\r\n\r\n@media screen and (max-width:768px){\r\n  .side-menu{\r\n    display: none;\r\n  }\r\n\r\n  .page-header{\r\n    margin-top:20px;\r\n  }\r\n}\r\n\r\nul{\r\n  list-style-type: none;\r\n  font-size: 16px;\r\n  padding-bottom: 14px;\r\n}\r\n\r\nul>li{\r\n  margin-bottom: 14px;\r\n}\r\n\r\n@media screen and (min-width:768px){\r\n  .h3margin{\r\n    padding-top: 13px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-8\">\r\n      <div class=\"page-header\">\r\n        <h1>Services</h1>\r\n      </div>\r\n      <div class=\"media\">\r\n        <div class=\"media-left media-middle\">\r\n          <img class=\"media-object\" src=\"../../assets/acu_icon.png\"\r\n           alt=\"Acupuncture needles\">\r\n        </div>\r\n        <div class=\"media-body\">\r\n          <h4 class=\"media-heading\">Acupuncture and Electroacupuncture</h4>\r\n          <p>Acupuncture is a therapeutic modality of Traditional Chinese Medicine to treat pain and improve blood circulation. It can be enhanced by applying heat or electrical stimulation at select acupuncture points.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"media\">\r\n        <div class=\"media-left media-middle\">\r\n          <img class=\"media-object\" src=\"../../assets/herbs.png\"\r\n           alt=\"Herbs\">\r\n        </div>\r\n        <div class=\"media-body\">\r\n          <h4 class=\"media-heading\">Herbal Medicine</h4>\r\n          <p>For symptoms that acupuncture alone cannot address, Chinese herbs are prescribed to treat the internal body. Raw herbs are more effective but take time to cook. Pill forms are available as well for convenience.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"media\">\r\n        <div class=\"media-left media-middle\">\r\n          <img class=\"media-object\" src=\"../../assets/massage.png\"\r\n           alt=\"Massage\">\r\n        </div>\r\n        <div class=\"media-body\">\r\n          <h4 class=\"media-heading\">Integrative Massage</h4>\r\n          <p>Light massage and manual therapy are included to relax the body before and after the treatment.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"media\">\r\n        <div class=\"media-left media-middle\">\r\n          <img class=\"media-object\" src=\"../../assets/cupping.png\"\r\n           alt=\"Cupping\">\r\n        </div>\r\n        <div class=\"media-body\">\r\n          <h4 class=\"media-heading\">Cupping</h4>\r\n          <p>This modality is used to improve circulation and relieve pain.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"media\">\r\n        <div class=\"media-left media-middle\">\r\n          <i class=\"fa fa-briefcase\" aria-hidden=\"true\" style='font-size:66px; margin'></i>\r\n        </div>\r\n        <div class=\"media-body\">\r\n          <h4 class=\"media-heading\">Corporate and On-site treatments</h4>\r\n          <p>Alex Lau serves as the onsite acupuncturist at Electronic Arts and Oracle Corporation on Wednesdays. For on-call services, please call our office at (650) 799-9088.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-sm-4\">\r\n      <div class=\"page-header\">\r\n        <h3 class='h3margin'>Symptoms treated</h3>\r\n      </div>\r\n      <ul>\r\n        <li>Back pain</li>\r\n        <li>Muscle spasm</li>\r\n        <li>Sciatica</li>\r\n        <li>Infertility</li>\r\n        <li>Headache</li>\r\n        <li>Joint problem</li>\r\n        <li>Digestive disorders</li>\r\n        <li>Common cold, allergies, fever</li>\r\n        <li>Stress, anxiety, sleep issues</li>\r\n        <li>Fatigue, low energy</li>\r\n        <li>Frozen shoulder</li>\r\n        <li>Bell's Palsy</li>\r\n        <li>Poor blood circulation</li>\r\n        <li>Gynecological issues</li>\r\n        <li>Eczema, rashes</li>\r\n        <li>Weight management</li>\r\n        <li>Smoking</li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-services',
            template: __webpack_require__("../../../../../src/app/home/services/services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/services/services.component.css"), __webpack_require__("../../../../../src/app/home/shared_comp.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/services.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/shared_comp.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h3, h4, p{\r\n  color:rgb(205,225,201);\r\n}\r\n\r\np{\r\n  font-size: 16px;\r\n}\r\n\r\n.page-header{\r\n  border-bottom: 1px solid #CDE1C9;\r\n}\r\n\r\n.media-object{\r\n  width:96px;\r\n}\r\n\r\n.media{\r\n  margin-bottom: 26px;\r\n}\r\n\r\n@media screen and (min-width:768px){\r\n  .side-menu{\r\n    margin-top:119px;\r\n  }\r\n}\r\n\r\nul>li{\r\n  background-color: #222;\r\n  color:#CDE1C9;\r\n  border-color: #717171;\r\n}\r\n\r\n.font{\r\n  font-size: 50px !important;\r\n  color:#D1D1D1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-nav>li, .navbar-nav {\r\n  float: left !important;\r\n}\r\n\r\n.navbar-nav.navbar-right:last-child {\r\n  margin-right: -15px !important;\r\n}\r\n\r\n.navbar-toggle{\r\n  border: none;\r\n}\r\n.navbar-right {\r\n  float: right!important;\r\n}\r\n\r\n.navbar {\r\n  margin-bottom: 0px !important;\r\n  background-color: #408E2F;\r\n  /*background-color: #373a37;*/\r\n}\r\n\r\n.navbar-header>a{\r\n  color:#CDE1C9;\r\n}\r\n\r\n.navbar-nav>li>a{\r\n  color:#CDE1C9;\r\n}\r\n\r\n.navbar-nav>li>a:hover{\r\n  background-color: #373a37;\r\n  transition: 0.7s;\r\n}\r\n.navbar-inverse{\r\n  border:none;\r\n}\r\n\r\n.navbar-nav >.open>a{\r\n  background-color: #373a37;\r\n}\r\n\r\n@media (min-width: 768px){\r\n.navbar {\r\n    border-radius: 0px;\r\n  }\r\n}\r\n\r\n.dropdown-menu{\r\n  background-color: #373a37;\r\n}\r\n\r\n.sidenav {\r\n    height: 100%; /* 100% Full-height */\r\n    width: 0; /* 0 width - change this with JavaScript */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Stay on top */\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #111; /* Black*/\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    padding-top: 60px; /* Place content 60px from the top */\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\r\n}\r\n\r\n/* The navigation menu links */\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s\r\n}\r\n\r\n/* When you mouse over the navigation links, change their color */\r\n.sidenav a:hover, .offcanvas a:focus{\r\n    color: #CDE1C9;\r\n}\r\n\r\n/* Position and style the close button (top right corner) */\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\r\n#main {\r\n    transition: margin-left .5s;\r\n    padding: 20px;\r\n}\r\n\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n\r\n@media screen and (min-width:768px){\r\n  .sidenav{\r\n    display:none;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" routerLink='' (click)='closeNav()'>Alex Lau Acupuncture</a>\r\n      <button class='navbar-toggle collapsed' (click)='openNav()'>\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class='navbar-collapse' [collapse]='true'>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a routerLink='appointment'>Appointment</a></li>\r\n        <li><a routerLink='services'>Services</a></li>\r\n        <li><a routerLink='insurance'>Insurance</a></li>\r\n        <li><a routerLink='about'>About</a></li>\r\n        <li><a routerLink='contact'>Contact</a></li>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n<div id=\"mySidenav\" class=\"sidenav\" [ngStyle]='{\"width\":navWidth}'>\r\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)='closeNav()'>&times;</a>\r\n  <a [routerLink]=\"['/']\" (click)='closeNav()'>Home</a>\r\n  <a [routerLink]=\"['/','appointment']\" (click)='closeNav()'>Appointment</a>\r\n  <a [routerLink]=\"['/','services']\" (click)='closeNav()'>Services</a>\r\n  <a [routerLink]=\"['/','insurance']\" (click)='closeNav()'>Insurance</a>\r\n  <a [routerLink]=\"['/','about']\" (click)='closeNav()'>About</a>\r\n  <a [routerLink]=\"['/','contact']\" (click)='closeNav()'>Contact</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
        this.navWidth = '0px';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.openNav = function () {
        this.navWidth = '250px';
    };
    NavComponent.prototype.closeNav = function () {
        this.navWidth = '0px';
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer p{\r\n  padding:25px 0;\r\n  color:#CDE1C9;\r\n  margin:0;\r\n}\r\n\r\n#footer{\r\n  background-color: #111;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section id='footer'>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <footer>\r\n        <div class=\"col-xs-12\">\r\n          <p>Alex Lau Acupuncture - 2017 All Rights Reserved</p>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=F:/App_Projects/myApp/src/shared.module.js.map

/***/ }),

/***/ "../../../../../src/assets/zen_tiny.jpg":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QN4aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBSaWdodHM6TWFya2VkPSJGYWxzZSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzdDNzE2NjU3RDkxMUU3QTdEQzlEMEY2QThDM0JDRSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzdDNzE2NTU3RDkxMUU3QTdEQzlEMEY2QThDM0JDRSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1MzIFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMEQ5NThCQzNDMTQxMUU3OTgwM0Q1MUZEOTdBNTJFQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMEQ5NThCRDNDMTQxMUU3OTgwM0Q1MUZEOTdBNTJFQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uACZBZG9iZQBkwAAAAAEDABUEAwYKDQAABbkAAAYKAAAGnwAAB2X/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//CABEIABkAKAMBEQACEQEDEQH/xACrAAACAgMAAAAAAAAAAAAAAAADBAIFAAEGAQACAwEBAAAAAAAAAAAAAAABAgADBAUGEAABBAEEAgMAAAAAAAAAAAABAAIDBBEQIBITMDIUBRURAAECBQMFAQAAAAAAAAAAAAEAESECEjIDMYGhIEFRYXFSEgADAQAAAAAAAAAAAAAAAAAgMEAREwEAAgIBAwQDAQAAAAAAAAABABEhMUEQUWEg8HGBkaGxwf/aAAwDAQACEQMRAAABufM86w0aMtbnQKJ4zRUR2CSh0rZ4gt1QVYAGsts3SHdazVoiIgoyf//aAAgBAQABBQL4ddVa9ZrZmwg2Q1rLZxB+i4iO+VNfU32AbHcdmnEyENPUE4sVmVr3utyPhj9SipE5f//aAAgBAgABBQJN0KC4LCwmRhD26wuoLrGnAbv/2gAIAQMAAQUC4po2jQaYWFjwf//aAAgBAgIGPwJ2l//aAAgBAwIGPwKT/9oACAEBAQY/AtFCUOtAsk4DmD/HWT1mbZlcrlcqKRPXqayOFX+sr8BRDqEqtThwB2Idt0MZsER56v/aAAgBAQMBPyG0zb5irMbmMSwYDB4MTUClFFaa/sJAw8oCw1rAN5KcXhEvYbuK+pgrO7zahVwJjBAB3Tg5k3FLZydqzVOM1OnSf//aAAgBAgMBPyH0Bz9S0Ky8oW7g0ne9Dt3d6v/aAAgBAwMBPyFMMMRJUqMcWDHXWVgSvV//2gAMAwEAAhEDEQAAEC17uhYXtU1f/9oACAEBAwE/EMqb8l/saDJxLxHATGaCX04BlVMFaJfEBoBSpjflAPed4SLEt54ivNxnLDaFYiRACK8KMobZBbPNsT7l5zmbofgiJCGgVnKJ4zC6Cf4NZF9jtNG/hyr5B1Pf+Jp8SfrTb6m75n//2gAIAQIDAT8QFOZmZlgzKiYoe1sbo4lzKUL+UIQ4E/cK9lj5PzAOH8zAAcRTFj96hqMY9P/aAAgBAwMBPxBOyYgh3DdIlK89GKHfTP8AsQsOlURnmHo//9k="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
};
//# sourceMappingURL=F:/App_Projects/myApp/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=F:/App_Projects/myApp/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=F:/App_Projects/myApp/src/polyfills.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map