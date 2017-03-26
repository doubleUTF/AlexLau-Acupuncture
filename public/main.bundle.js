webpackJsonp([0,3],{

/***/ 1213:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1213;


/***/ }),

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(551);


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_validator__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_validator__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidatorService = (function () {
    function ValidatorService() {
    }
    ValidatorService.prototype.validateEmail = function (c) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_validator__["isEmail"])(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    ValidatorService.prototype.validateAlpha = function (c) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_validator__["isAlpha"])(c.value) ? null : {
            validateAlpha: {
                valid: false
            }
        };
    };
    ValidatorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidatorService);
    return ValidatorService;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/validator.service.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    "DOMAIN": "http://localhost:3000",
    "ACUITY_URL": "https://app.acuityscheduling.com/schedule.php",
    "ACUITY_USER_ID": "13202886",
    "ACUITY_APPT_TYPE": "2462595",
    "ACUITY_OBJECT_ID_FIELD": "2606533"
};
//# sourceMappingURL=F:/App_Projects/myApp/src/environment.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppointmentService = (function () {
    function AppointmentService(http) {
        this.http = http;
    }
    // This gets all appointments, need to reconfigure to
    // only retrieve upcoming appointments
    AppointmentService.prototype.getAppointments = function () {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth': token
        });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].DOMAIN + "/patients/appointments", { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    AppointmentService.prototype.cancelAppointment = function (id) {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth': token
        });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].DOMAIN + "/patients/appointments/" + id, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    AppointmentService.prototype.formatTime = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(date).format('dddd, MMMM Do YYYY, h:mm a');
    };
    AppointmentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AppointmentService);
    return AppointmentService;
    var _a;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/appointment.service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Emits data received from AuthService so dashboard component
    // doesn't need to make an extra call to retreive data.
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isLoggedIn().map(function (e) {
            if (e) {
                _this.authService.emitName([e.firstName, e.lastName]);
                _this.authService.emitUpcomingAppointments(e.upcomingAppointments);
                _this.authService.emitFormComplete(e.formComplete);
                return true;
            }
        }).catch(function () {
            _this.router.navigate(['/patients', 'signin']);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(false);
        });
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/auth.guard.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(850);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BootstrapModule = (function () {
    function BootstrapModule() {
    }
    BootstrapModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["a" /* DropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["c" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["d" /* TabsModule */].forRoot()
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["a" /* DropdownModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* AlertModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["c" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["d" /* TabsModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BootstrapModule);
    return BootstrapModule;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/bootstrap.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(82);
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
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    ;
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isLoggedIn()) {
            setTimeout(function () { return _this.router.navigate(['/patients', 'dashboard']); });
        }
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(884),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/home.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appointment_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentsListComponent = (function () {
    // TODO: Introduce pagination to handle potentially hundreds of past appointments
    function AppointmentsListComponent(appointmentService, authService) {
        this.appointmentService = appointmentService;
        this.authService = authService;
        this.upcomingAppointments = [];
        this.pastAppointments = [];
        this.selectedAppointment = { date: null };
        this.noData = false;
        this.alertStatus = false;
        this.alertMessage = '';
    }
    AppointmentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appointmentService.getAppointments()
            .subscribe(function (data) {
            _this.upcomingAppointments = data.upcomingAppointments;
            _this.pastAppointments = data.pastAppointments;
            if (_this.upcomingAppointments.length == 0 && _this.pastAppointments.length == 0) {
                _this.noData = true;
            }
        }, function (err) {
            _this.authService.signOut();
            console.error(err);
        });
    };
    AppointmentsListComponent.prototype.onCanceled = function (appointment) {
        // console.log(appointment)
        this.selectedAppointment = appointment;
        this.staticModal.show();
    };
    AppointmentsListComponent.prototype.confirmCancel = function (id) {
        var _this = this;
        this.appointmentService.cancelAppointment(id)
            .subscribe(function (data) {
            _this.upcomingAppointments.splice(_this.upcomingAppointments.indexOf(id), 1);
            _this.staticModal.hide();
            var message = "Your appointment on <b>" + _this.appointmentService.formatTime(_this.selectedAppointment.date) + "</b>\n          has been canceled.";
            _this.showAlert(message);
        }, function (err) { return console.error(err); });
    };
    AppointmentsListComponent.prototype.showAlert = function (message) {
        this.alertMessage = message;
        this.alertStatus = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('staticModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["a" /* ModalDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["a" /* ModalDirective */]) === 'function' && _a) || Object)
    ], AppointmentsListComponent.prototype, "staticModal", void 0);
    AppointmentsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'appointments-list',
            template: __webpack_require__(887),
            styles: [__webpack_require__(870)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__appointment_service__["a" /* AppointmentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__appointment_service__["a" /* AppointmentService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], AppointmentsListComponent);
    return AppointmentsListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/appointments-list.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
        this.upcomingAppointments = [];
        this.alertReady = false;
        // Considering refactoring moment related code to another component/directive
        // should the need arise(reusability elsewhere)
        this.timeFormats = {
            sameDay: '[today] dddd, MMMM Do YYYY, h:mm a',
            nextDay: '[tomorrow] dddd, MMMM Do YYYY, h:mm a',
            nextWeek: 'dddd, MMMM Do YYYY, h:mm a',
            sameElse: 'dddd, MMMM Do YYYY, h:mm a'
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.upcomingAppointments.subscribe(function (appointments) { return _this.upcomingAppointments = appointments; }, function (err) { return console.error(err); });
        this.authService.formCompleteSource.subscribe(function (e) { return _this.formComplete = e; }, function (err) { return console.error(err); });
        this.authService.name$.subscribe(function (name) { return _this.firstName = name[0]; }, function (err) { return console.error(err); });
    };
    DashboardComponent.prototype.showUpcomingAlert = function () {
        if (!this.formComplete) {
            this.alert = {
                type: 'warning',
                message: "Forms must be completed in Account Management before\n      receiving treatment"
            };
        }
        else if (this.upcomingAppointments.length == 0) {
            this.alert = {
                type: 'info',
                message: "You have no upcoming appointments"
            };
        }
        else {
            this.alert = {
                type: 'info',
                message: "<i class='glyphicon glyphicon-time' aria-hidden='true'></i>\n        &nbsp;&nbsp;&nbsp;Your next appointment is\n        <b>" + __WEBPACK_IMPORTED_MODULE_2_moment__(this.upcomingAppointments[0].date).calendar(null, this.timeFormats) + "</b>\n        "
            };
        }
        // Displaying multiple dates in one line is rather ugly, will remove on next commit.
        // else {
        //   let appointments=this.upcomingAppointments.map((x)=>{
        //     return x.date
        //   });
        //   let aptString=''
        //   appointments.forEach((date)=>{
        //     aptString+='<b>'+ moment(date).calendar(null,this.timeFormats)+'</b>&nbsp;&nbsp;&nbsp;&nbsp;'
        //   })
        //
        //   this.alert={
        //     type:'info',
        //     message:`You have appointments ${aptString}`
        //   }
        // }
        this.alertReady = true;
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.showUpcomingAlert();
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(888),
            styles: [__webpack_require__(871)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/dashboard.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patient; });
var Patient = (function () {
    function Patient(email, password, firstName, lastName, gender, dateOfBirth, address, city, state, zip, phone, pregnant, emergencyContact, emergencyPhone, insurances, signedDisclosure, referredBy) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.pregnant = pregnant;
        this.emergencyContact = emergencyContact;
        this.emergencyPhone = emergencyPhone;
        this.insurances = insurances;
        this.signedDisclosure = signedDisclosure;
        this.referredBy = referredBy;
    }
    return Patient;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/patient.model.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validator_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = (function () {
    // TODO: Refactor email and password into their own components
    function ProfileComponent(authService, patientService, validatorService) {
        this.authService = authService;
        this.patientService = patientService;
        this.validatorService = validatorService;
        this.phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.dobMask = [/[0-1]/, /\d/, '/', /[0-3]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.profileComplete = false;
        this.insurances = [];
        this.personalAlertState = 'hidden';
        this.canView = false;
        this.currentForm = {};
        this.formDisabled = true;
        this.profileSaved = 'hidden';
        this.errorPresent = false;
        this.errorMessage = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            referredBy: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            primaryPhone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]),
            secondaryPhone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-.●]?([0-9]{4})$/)),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            pregnant: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            dateOfBirth: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/)]),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                street: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                state: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                zip: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^[0-9]{5}$/)]),
            }),
            emergencyContact: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            emergencyPhone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-.●]?([0-9]{4})$/))
        });
        this.authService.getPatientInfo().subscribe(function (data) {
            // If true, send insurances to child Insurances component
            if (data.patientProfile.insurances) {
                _this.insurances = data.patientProfile.insurances;
            }
            _this.currentForm = JSON.parse(JSON.stringify(_this.profileForm.value));
            // Don't display insurance or email in first profile page
            var incomingForm = __WEBPACK_IMPORTED_MODULE_5_lodash__["omit"](data.patientProfile, ['insurances', 'email', '_id', 'consent']);
            // Parse the date into mm/dd/yyyy format
            __WEBPACK_IMPORTED_MODULE_5_lodash__["set"](incomingForm, 'dateOfBirth', __WEBPACK_IMPORTED_MODULE_6_moment__(data.patientProfile.dateOfBirth).format('L'));
            // console.log(this.currentForm)
            for (var p in incomingForm) {
                _this.currentForm[p] = incomingForm[p];
            }
            _this.profileForm.setValue(_this.currentForm);
            _this.email = data.patientProfile.email;
            _this.profileComplete = _this.profileForm.valid;
            setTimeout(function () { return _this.canView = true; });
        }, function (err) { return console.error(err); });
    };
    ProfileComponent.prototype.onSave = function () {
        var _this = this;
        var formModel = this.profileForm.value;
        this.patientService.savePatientInfo(formModel).subscribe(function (data) {
            _this.authService.emitName([formModel.firstName, formModel.lastName]);
            _this.profileSaved = 'show';
        }, function (err) {
            console.error(err);
            _this.showError(err);
        });
        this.currentForm = formModel;
        this.formDisabled = true;
    };
    ProfileComponent.prototype.onEdit = function () {
        this.formDisabled = false;
        this.profileSaved = 'hidden';
    };
    ProfileComponent.prototype.onCancel = function () {
        this.formDisabled = true;
        this.profileForm.reset(this.currentForm);
    };
    ProfileComponent.prototype.showError = function (err) {
        this.errorPresent = true;
        this.errorMessage = err.err;
    };
    ProfileComponent.prototype.ngDoCheck = function () {
        if (this.profileForm.invalid) {
            this.personalAlertState = 'show';
        }
        if (this.profileForm.valid) {
            this.personalAlertState = 'hidden';
        }
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(896),
            styles: [__webpack_require__(879)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('alertState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('hidden=>show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500)),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('show=>hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__patient_service__["a" /* PatientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__patient_service__["a" /* PatientService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_validator_service__["a" /* ValidatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_validator_service__["a" /* ValidatorService */]) === 'function' && _c) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/profile.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_model__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validator_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(authService, validatorService) {
        this.authService = authService;
        this.validatorService = validatorService;
        this.focusEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.patientForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                this.validatorService.validateEmail
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)
            ])
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var patient = new __WEBPACK_IMPORTED_MODULE_2__patient_model__["a" /* Patient */](this.patientForm.value.email, this.patientForm.value.password, this.patientForm.value.firstName, this.patientForm.value.lastName);
        this.authService.register(patient)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('patientId', data.patientId);
        }, function (error) { return console.error(error); });
        this.patientForm.reset({ email: '' });
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.focusEvent.emit(true);
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(897),
            styles: [__webpack_require__(880)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_validator_service__["a" /* ValidatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_validator_service__["a" /* ValidatorService */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/register.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleComponent = (function () {
    function ScheduleComponent(authService) {
        this.authService = authService;
        this.isReady = false;
        this.acuityURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ACUITY_URL;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getPatientInfo().subscribe(function (data) {
            _this.currentPatient = data.patientProfile;
            _this.acuityURL += "?owner=" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ACUITY_USER_ID + "&appointmentType=" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ACUITY_APPT_TYPE + "&firstName=" + _this.currentPatient.firstName + "&lastName=" + _this.currentPatient.lastName + "&email=" + _this.currentPatient.email + "&field:" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ACUITY_OBJECT_ID_FIELD + "=" + _this.currentPatient._id + "&phone=" + _this.currentPatient.primaryPhone;
            _this.isReady = true;
        }, function (err) {
            _this.authService.signOut();
            console.error(err);
        });
    };
    ScheduleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(898),
            styles: [__webpack_require__(881)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ScheduleComponent);
    return ScheduleComponent;
    var _a;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/schedule.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__patient_model__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validator_service__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignInComponent = (function () {
    function SignInComponent(authService, router, validatorService) {
        this.authService = authService;
        this.router = router;
        this.validatorService = validatorService;
        this.focusEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.signInForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                this.validatorService.validateEmail
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)
            ])
        });
    };
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        var patient = new __WEBPACK_IMPORTED_MODULE_4__patient_model__["a" /* Patient */](this.signInForm.value.email, this.signInForm.value.password);
        this.authService.signIn(patient)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token),
                localStorage.setItem('patientId', data.patientId);
            _this.authService.emitName([data.firstName, data.lastName]);
            _this.router.navigateByUrl('/patients/dashboard');
        }, function (err) { return console.error(err); });
        this.signInForm.reset({ email: '' });
    };
    SignInComponent.prototype.ngAfterViewInit = function () {
        this.focusEvent.emit(true);
    };
    SignInComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(899),
            styles: [__webpack_require__(882)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validator_service__["a" /* ValidatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_validator_service__["a" /* ValidatorService */]) === 'function' && _c) || Object])
    ], SignInComponent);
    return SignInComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/sign-in.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 550;


/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(670);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=F:/App_Projects/myApp/src/main.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.nameSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.name$ = this.nameSource.asObservable();
        this.upcomingAppointments = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.formCompleteSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    AuthService.prototype.emitName = function (nameArray) {
        this.nameSource.next(nameArray);
    };
    AuthService.prototype.emitUpcomingAppointments = function (appointmentsArray) {
        this.upcomingAppointments.next(appointmentsArray);
    };
    AuthService.prototype.emitFormComplete = function (e) {
        this.formCompleteSource.next(e);
    };
    AuthService.prototype.register = function (patient) {
        var body = JSON.stringify(patient);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].DOMAIN + '/patients/register', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error); });
    };
    AuthService.prototype.signIn = function (patient) {
        var body = JSON.stringify(patient);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].DOMAIN + '/patients/signin', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'x-auth': token });
        this.http.delete(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].DOMAIN + '/patients/token', { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); })
            .subscribe(function (data) {
            localStorage.clear();
            _this.router.navigate(['/patients', 'signin']);
        }, function (err) {
            localStorage.clear();
            _this.router.navigate(['/patients', 'signin']);
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'x-auth': token });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].DOMAIN + '/patients/auth', { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.getPatientInfo = function () {
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'x-auth': token });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].DOMAIN + '/patients/me', { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/auth.service.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(883),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/app.component.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bootstrap_module__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patients_patients_module__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_guard__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__bootstrap_module__["a" /* BootstrapModule */],
                __WEBPACK_IMPORTED_MODULE_5__patients_patients_module__["a" /* PatientsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__auth_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/app.module.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patients_patients_routing__ = __webpack_require__(677);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'patients', children: __WEBPACK_IMPORTED_MODULE_2__patients_patients_routing__["a" /* PATIENTS_ROUTES */] },
    { path: '**', redirectTo: '/' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=F:/App_Projects/myApp/src/app.routing.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator; }), multi: true }
            ]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')), 
        __metadata('design:paramtypes', [String, String])
    ], EqualValidator);
    return EqualValidator;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/equal-validator.directive.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FocusDirective = (function () {
    function FocusDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    FocusDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.focusEvent.subscribe(function (event) {
            _this.renderer.invokeElementMethod(_this.element.nativeElement, 'focus');
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('focus'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], FocusDirective.prototype, "focusEvent", void 0);
    FocusDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[focus]'
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _c) || Object])
    ], FocusDirective);
    return FocusDirective;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/focus.directive.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(56);
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
    function NavComponent(router, authService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.firstName = '';
        this.lastName = '';
        authService.name$.subscribe(function (nameSource) {
            _this.firstName = nameSource[0];
            _this.lastName = nameSource[1];
            _this.updateMenuTitle();
        });
    }
    NavComponent.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    ;
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.updateMenuTitle = function () {
        if (!this.firstName || !this.lastName) {
            return 'Menu';
        }
        return this.firstName + ' ' + this.lastName;
    };
    NavComponent.prototype.onSignOut = function () {
        this.authService.signOut();
        this.firstName, this.lastName = '', '';
        this.updateMenuTitle();
    };
    NavComponent.prototype.ngDoCheck = function () {
        this.updateMenuTitle();
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(885),
            styles: [__webpack_require__(868)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], NavComponent);
    return NavComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/nav.component.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appointment_service__ = __webpack_require__(260);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppointmentItemComponent = (function () {
    function AppointmentItemComponent(appointmentService) {
        this.appointmentService = appointmentService;
        this.viewReceipt = false;
        this.canCancel = false;
        this.onCanceled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AppointmentItemComponent.prototype.ngOnInit = function () {
    };
    AppointmentItemComponent.prototype.onCancel = function (id) {
        this.onCanceled.emit(id);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], AppointmentItemComponent.prototype, "viewReceipt", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], AppointmentItemComponent.prototype, "canCancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AppointmentItemComponent.prototype, "appointment", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], AppointmentItemComponent.prototype, "onCanceled", void 0);
    AppointmentItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'appointment-item',
            template: __webpack_require__(886),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__appointment_service__["a" /* AppointmentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__appointment_service__["a" /* AppointmentService */]) === 'function' && _a) || Object])
    ], AppointmentItemComponent);
    return AppointmentItemComponent;
    var _a;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/appointment-item.component.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bootstrap_module__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_schedule_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sign_in_sign_in_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_focus_directive__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_safe_pipe__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__appointments_list_appointments_list_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__appointments_list_appointment_item_appointment_item_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__appointments_list_appointment_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_text_mask__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__patient_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validator_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_equal_validator_directive__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__profile_insurances_insurance_card_insurance_card_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__profile_insurances_insurances_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_insurances_insurance_creator_insurance_creator_component__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__profile_insurances_color_picker_color_picker_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__profile_consent_consent_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__profile_password_password_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__profile_email_email_component__ = __webpack_require__(679);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var PatientsModule = (function () {
    function PatientsModule() {
    }
    PatientsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__bootstrap_module__["a" /* BootstrapModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular2_text_mask__["TextMaskModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__directives_focus_directive__["a" /* FocusDirective */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_safe_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_11__appointments_list_appointments_list_component__["a" /* AppointmentsListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__appointments_list_appointment_item_appointment_item_component__["a" /* AppointmentItemComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__directives_equal_validator_directive__["a" /* EqualValidator */],
                __WEBPACK_IMPORTED_MODULE_19__profile_insurances_insurance_card_insurance_card_component__["a" /* InsuranceCardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__profile_insurances_insurances_component__["a" /* InsurancesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__profile_insurances_insurance_creator_insurance_creator_component__["a" /* InsuranceCreatorComponent */],
                __WEBPACK_IMPORTED_MODULE_22__profile_insurances_color_picker_color_picker_component__["a" /* ColorPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__profile_consent_consent_component__["a" /* ConsentComponent */],
                __WEBPACK_IMPORTED_MODULE_24__profile_password_password_component__["a" /* PasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_25__profile_email_email_component__["a" /* EmailComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__appointments_list_appointment_service__["a" /* AppointmentService */],
                __WEBPACK_IMPORTED_MODULE_16__patient_service__["a" /* PatientService */],
                __WEBPACK_IMPORTED_MODULE_17__services_validator_service__["a" /* ValidatorService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PatientsModule);
    return PatientsModule;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/patients.module.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_schedule_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointments_list_appointments_list_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_guard__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PATIENTS_ROUTES; });







var PATIENTS_ROUTES = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_1__schedule_schedule_component__["a" /* ScheduleComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'appointments-list', component: __WEBPACK_IMPORTED_MODULE_4__appointments_list_appointments_list_component__["a" /* AppointmentsListComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */] },
    { path: '**', redirectTo: '/patients/signin' }
];
// export const patientRouting=RouterModule.forChild(PATIENTS_ROUTES)
//# sourceMappingURL=F:/App_Projects/myApp/src/patients.routing.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_service__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsentComponent = (function () {
    function ConsentComponent(patientService) {
        this.patientService = patientService;
        this.date = new Date();
    }
    ConsentComponent.prototype.ngOnInit = function () {
        this.consentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            signature: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.date, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    };
    // TODO: Do not allow user to resign form after it has been signed. Need
    // to research ESIGN federal law and what constitues as digital
    // signature to become compliant.
    ConsentComponent.prototype.onSubmit = function () {
        this.patientService.savePatientInfo({ consent: this.consentForm.value }).subscribe(function (data) { return console.log('Successfully saved:' + data); }, function (error) { return console.error(error); });
    };
    ConsentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile-consent',
            template: __webpack_require__(889),
            styles: [__webpack_require__(872)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__patient_service__["a" /* PatientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__patient_service__["a" /* PatientService */]) === 'function' && _a) || Object])
    ], ConsentComponent);
    return ConsentComponent;
    var _a;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/consent.component.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validator_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_service__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailComponent = (function () {
    // TODO use double opt security if patient wants to change
    // email or password. This will require implementation of new
    // methods of node email verification.
    function EmailComponent(validatorService, patientService) {
        this.validatorService = validatorService;
        this.patientService = patientService;
        this.emailSaved = false;
        this.emailAlertState = 'hidden';
    }
    EmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emailForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            currentEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: '', disabled: true }, this.validatorService.validateEmail),
            newEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', this.validatorService.validateEmail),
            retypeEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', this.validatorService.validateEmail),
        });
        setTimeout(function () { return _this.emailForm.patchValue({ currentEmail: _this.email }); });
    };
    EmailComponent.prototype.onUpdateEmail = function () {
        var _this = this;
        this.newEmail = this.emailForm.value.newEmail;
        this.patientService.savePatientInfo({
            email: this.newEmail })
            .subscribe(function (data) {
            _this.emailForm.patchValue({ currentEmail: _this.newEmail });
            _this.emailSaved = true;
            _this.emailAlertState = 'show';
        }, function (err) { return console.error(err); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], EmailComponent.prototype, "email", void 0);
    EmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(890),
            styles: [__webpack_require__(873)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('alertState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('hidden=>show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500)),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('show=>hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validator_service__["a" /* ValidatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_validator_service__["a" /* ValidatorService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__patient_service__["a" /* PatientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__patient_service__["a" /* PatientService */]) === 'function' && _b) || Object])
    ], EmailComponent);
    return EmailComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/email.component.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorPickerComponent = (function () {
    function ColorPickerComponent() {
        this.colors = [];
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isSelectorVisible = false;
    }
    ColorPickerComponent.prototype.showSelector = function (value) {
        this.isSelectorVisible = value;
    };
    ColorPickerComponent.prototype.ngOnInit = function () {
    };
    ColorPickerComponent.prototype.selectColor = function (color) {
        this.showSelector(false);
        this.selected.emit(color);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ColorPickerComponent.prototype, "colors", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ColorPickerComponent.prototype, "selected", void 0);
    ColorPickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'color-picker',
            template: __webpack_require__(891),
            styles: [__webpack_require__(874)]
        }), 
        __metadata('design:paramtypes', [])
    ], ColorPickerComponent);
    return ColorPickerComponent;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/color-picker.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InsuranceCardComponent = (function () {
    function InsuranceCardComponent() {
        this.insurance = {};
        this.checkedPrimary = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showCheck = false;
    }
    InsuranceCardComponent.prototype.ngOnInit = function () {
    };
    InsuranceCardComponent.prototype.checkPrimary = function () {
        this.checkedPrimary.emit();
    };
    InsuranceCardComponent.prototype.toggleCheck = function () {
        this.showCheck = !this.showCheck;
    };
    InsuranceCardComponent.prototype.remove = function () {
        this.removed.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], InsuranceCardComponent.prototype, "insurance", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], InsuranceCardComponent.prototype, "checkedPrimary", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], InsuranceCardComponent.prototype, "removed", void 0);
    InsuranceCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'insurance-card',
            template: __webpack_require__(892),
            styles: [__webpack_require__(875)]
        }), 
        __metadata('design:paramtypes', [])
    ], InsuranceCardComponent);
    return InsuranceCardComponent;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/insurance-card.component.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceCreatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsuranceCreatorComponent = (function () {
    function InsuranceCreatorComponent() {
        this.createInsurance = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dateMask = [/[0-1]/, /\d/, '/', /[0-3]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.fullForm = false;
        this.colors = [
            'rgb(255, 138, 128)',
            'rgb(255, 209, 128)',
            'rgb(255, 255, 141)',
            'rgb(207, 216, 220)',
            'rgb(128, 216, 255)',
            'rgb(167, 255, 235)',
            'rgb(204, 255, 144)',
            'rgb(255, 255, 255)'
        ];
    }
    InsuranceCreatorComponent.prototype.ngOnInit = function () {
        this.insuranceForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            groupName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            otherInsurance: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            memberId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            startDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            color: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('')
        });
    };
    InsuranceCreatorComponent.prototype.onCreateInsurance = function () {
        if (this.insuranceForm.value.groupName == 'Other') {
            this.insuranceForm.patchValue({ groupName: this.insuranceForm.value.otherInsurance });
        }
        this.createInsurance.emit(this.insuranceForm.value);
        this.insuranceForm.reset();
        this.insuranceForm.patchValue({ groupName: '' });
    };
    InsuranceCreatorComponent.prototype.ngDoCheck = function () {
        if (this.insuranceForm.value.groupName) {
            this.fullForm = true;
        }
        else {
            this.fullForm = false;
        }
    };
    InsuranceCreatorComponent.prototype.onColorSelect = function (color) {
        this.insuranceForm.patchValue({ color: color });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], InsuranceCreatorComponent.prototype, "createInsurance", void 0);
    InsuranceCreatorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'insurance-creator',
            template: __webpack_require__(893),
            styles: [__webpack_require__(876)]
        }), 
        __metadata('design:paramtypes', [])
    ], InsuranceCreatorComponent);
    return InsuranceCreatorComponent;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/insurance-creator.component.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient_service__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsurancesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsurancesComponent = (function () {
    function InsurancesComponent(patientService) {
        this.patientService = patientService;
        this.changed = false;
        this.profileComplete = false;
        this.insuranceSaved = false;
        this.insuranceError = false;
        this.insurances = [];
    }
    InsurancesComponent.prototype.ngOnInit = function () {
    };
    InsurancesComponent.prototype.onCheckedPrimary = function (i) {
        this.insurances.forEach(function (insurance) {
            insurance.primary = false;
        });
        this.insurances[i].primary = true;
        this.changed = true;
    };
    InsurancesComponent.prototype.onRemoved = function (i) {
        this.insurances.splice(i, 1);
        this.changed = true;
    };
    InsurancesComponent.prototype.onCreateInsurance = function (insurance) {
        if (this.insurances.length == 0) {
            insurance.primary = true;
        }
        this.insurances.push(insurance);
        this.changed = true;
    };
    InsurancesComponent.prototype.saveInsurances = function () {
        var _this = this;
        this.patientService.savePatientInfo({ insurances: this.insurances })
            .subscribe(function (data) {
            _this.insuranceSaved = true;
            _this.changed = false;
        }, function (err) {
            _this.insuranceError = true;
            _this.insuranceSaved = false;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], InsurancesComponent.prototype, "profileComplete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], InsurancesComponent.prototype, "insurances", void 0);
    InsurancesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-insurances',
            template: __webpack_require__(894),
            styles: [__webpack_require__(877)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__patient_service__["a" /* PatientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__patient_service__["a" /* PatientService */]) === 'function' && _a) || Object])
    ], InsurancesComponent);
    return InsurancesComponent;
    var _a;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/insurances.component.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_service__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordComponent = (function () {
    // TODO use double opt security if patient wants to change
    // email or password. This will require implementation of new
    // methods of node email verification.
    function PasswordComponent(patientService) {
        this.patientService = patientService;
        this.passwordSaved = false;
        this.passwordUnsuccessful = false;
        this.passwordAlertState = 'hidden';
    }
    PasswordComponent.prototype.ngOnInit = function () {
        this.passwordForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            currentPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            newPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)]),
            retypePassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    };
    // TODO send an email notifying the patient's password has changed
    PasswordComponent.prototype.onUpdatePassword = function () {
        var _this = this;
        this.patientService.updatePassword({
            currentPassword: this.passwordForm.value.currentPassword,
            newPassword: this.passwordForm.value.newPassword
        }).subscribe(function (data) {
            _this.passwordSaved = true;
            _this.passwordUnsuccessful = false;
            _this.passwordAlertState = 'show';
            _this.passwordForm.reset();
            _this.passwordForm.disabled;
        }, function (err) {
            _this.passwordUnsuccessful = true;
            _this.passwordAlertState = 'show';
            _this.passwordForm.reset();
        });
    };
    PasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(895),
            styles: [__webpack_require__(878)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('alertState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('hidden=>show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500)),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('show=>hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__patient_service__["a" /* PatientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__patient_service__["a" /* PatientService */]) === 'function' && _a) || Object])
    ], PasswordComponent);
    return PasswordComponent;
    var _a;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/password.component.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safe'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/safe.pipe.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=F:/App_Projects/myApp/src/polyfills.js.map

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "div>i{\r\n  font-size: 80px;\r\n}\r\n"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = ".navbar-collapse.collapse {\r\n  display: block!important;\r\n}\r\n\r\n.navbar-nav>li, .navbar-nav {\r\n  float: left !important;\r\n}\r\n\r\n.navbar-nav.navbar-right:last-child {\r\n  margin-right: -15px !important;\r\n}\r\n\r\n.navbar-right {\r\n  float: right!important;\r\n}\r\n"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = ".options{\r\n  display:inline-block;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  float:right;\r\n}\r\n\r\na:hover{\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = ".thumb-hover{\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.thumbnail{\r\n  padding-top: 10%;\r\n}\r\n"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = ".thumb-hover{\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.thumbnail{\r\n  padding-top: 7%;\r\n}\r\n\r\n.glyphicon{\r\n  margin-right:15px;\r\n}\r\n\r\n.text{\r\n  color:black;\r\n}\r\n\r\n.list-group li{\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = ".consentForm{\r\n  padding-bottom:200px;\r\n}\r\n\r\np{\n  font-size: 16px;\r\n  padding-bottom:16px;\r\n}\r\n\r\n.indent{\r\n  padding-left: 2.5em;\r\n}\r\n"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = ".color-selector {\r\n  position: relative;\r\n}\r\n.selector {\r\n  min-width: 120px;\r\n  border: 1px solid lightgrey;\r\n  padding: 10px;\r\n  background-color: #efefef;\r\n  position: absolute;\r\n  top: -50px;\r\n  left: 0;\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n}\r\n.color {\r\n  height: 30px;\r\n  width: 30px;\r\n  border-radius: 100%;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.color:hover {\r\n  border: 2px solid darkgrey;\r\n}\r\n.icon {\r\n  font-size: 2rem;\r\n  color: grey;\r\n  cursor: pointer;\r\n}\n"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = ".shadow-1 {\r\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n  -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n}\r\n\r\n.shadow-1:hover {\r\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n}\r\n\r\n.insurance-card {\r\n  padding: 15px;\r\n  border-radius: 2px;\r\n  width: 100%;\r\n  position: relative;\r\n  margin-top:15px;\r\n  margin-bottom:15px;\r\n}\r\n\r\n.title {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  text-align: left;\r\n  color: rgba(0,0,0,0.8);\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n.value {\r\n  text-align: left;\r\n  font-size: 2.2rem;\r\n  font-weight: 200;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.icon {\r\n  position: absolute;\r\n  color: black;\r\n  border: 1px solid lightgrey;\r\n  background-color: white;\r\n  font-size: 30px;\r\n  top: -10px;\r\n  left: -10px;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.icon2 {\r\n  position: absolute;\r\n  color: black;\r\n  border: 1px solid lightgrey;\r\n  background-color: white;\r\n  font-size: 30px;\r\n  top: -10px;\r\n  right: -10px;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.glyphicon{\r\n  font-size: 2.7rem;\r\n  -webkit-transform: translateX(5px);\r\n          transform: translateX(5px);\r\n}\r\n"

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = ".insurance-creator {\r\n  padding: 20px;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n}\r\n.title {\r\n  font-weight: bold;\r\n  color: rgba(0,0,0,0.8);\r\n}\r\n.full {\r\n  height: 100px;\r\n}\r\n.shadow-2 {\r\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\nselect,input {\r\n  border: none;\r\n  background-color: transparent;\r\n  outline: none;\r\n  color: rgba(0,0,0,0.6);\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.btn-light {\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 2px;\r\n  min-width: 60px;\r\n  color: rgba(0,0,0, 0.6);\r\n  text-transform: uppercase;\r\n  line-spacing: 1px;\r\n  padding: 5px;\r\n  text-align: center;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-light:hover {\r\n  background-color: rgba(0,0,0, 0.2);\r\n}\r\n\r\n.btn-light:disabled, .btn-light[disabled], .btn-light.disabled {\r\n  cursor: not-allowed;\r\n  background-color: rgba(0,0,0,.12);\r\n  color: rgba(0,0,0,.26);\r\n}\r\n\r\n* {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 2rem;\r\n}\r\n\r\n.actions{\r\n  margin-left:1px;\r\n}\r\n"

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

module.exports = ".creator{\r\n  padding-top: 20px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.alert{\r\n  padding-top:30px;\r\n  padding-bottom:25px;\r\n}\r\n"

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = ".btn{\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\ninput.ng-invalid.ng-dirty{\r\n  border: 1px solid red;\r\n}\r\n\r\n.insurances {\r\n  padding-top: 50px;\r\n}\r\n.creator {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.required{\r\n  color: rgb(252, 0, 0)\r\n}\r\n"

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1>My Clinic</h1>\r\n  <p>We provide acupuncture services and herbal remedies.</p>\r\n  <p>\r\n    <a class=\"btn btn-success btn-lg\" routerLink='patients/register' role=\"button\">Create account</a>\r\n    <a class=\"btn btn-success btn-lg\" routerLink='patients/signin' role=\"button\">Login</a>\r\n  </p>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"text-center\">\r\n      <h2>1. Create an account</h2>\r\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"text-center\">\r\n      <h2>2. Make an appointment</h2>\r\n      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"text-center\">\r\n      <h2>3. Get treatment</h2>\r\n      <i class=\"fa fa-user-md\" aria-hidden=\"true\"></i>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"nav navbar-nav navbar-left\">\r\n      <a class=\"navbar-brand\" routerLink=''>My Clinic</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf='isLoggedIn()'><a routerLink='patients/dashboard'>\r\n          <span class=\"glyphicon glyphicon-th\" aria-hidden=\"true\" style='font-size:150%'></span></a></li>\r\n        <li class=\"dropdown\" dropdown>\r\n          <a href=\"#\" class=\"dropdown-toggle\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\r\n           dropdownToggle>{{updateMenuTitle()}}<span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\" dropdownMenu >\r\n            <li *ngIf='isLoggedIn()'><a routerLink='patients/appointments-list'>View appointments</a></li>\r\n            <li *ngIf='isLoggedIn()'><a routerLink='patients/schedule'>Schedule appointment</a></li>\r\n            <li *ngIf='isLoggedIn()'><a routerLink='patients/profile'>Manage account</a></li>\r\n            <li *ngIf='!isLoggedIn()'><a routerLink='patients/register'>Register an account</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li *ngIf='!isLoggedIn()'><a routerLink='patients/signin'>Sign in</a></li>\r\n            <li *ngIf='isLoggedIn()'><a style='cursor:pointer' (click)='onSignOut()'>Sign out</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n"

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item\">\n  {{this.appointmentService.formatTime(appointment.date)}}\n  <span class='options'>\n    <a *ngIf='canCancel' (click)='onCancel(appointment)'>Cancel</a>\n    <a *ngIf='viewReceipt'>View Receipt</a>\n  </span>\n</li>\n"

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = "  <h2>View appointments</h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-8 col-sm-push-2\">\r\n      <alert *ngIf='alertStatus' type='info'>\r\n        <p [innerHTML]='alertMessage'></p>\r\n      </alert>\r\n      <div *ngIf='upcomingAppointments.length>0'>\r\n        <h3>Upcoming</h3>\r\n          <ul class=\"list-group\">\r\n            <appointment-item *ngFor='let appointment of upcomingAppointments'\r\n            [appointment]='appointment' (onCanceled)='onCanceled($event)' [canCancel]='true'></appointment-item>\r\n          </ul>\r\n      </div>\r\n      <div *ngIf='pastAppointments.length>0'>\r\n        <h3>Past appointments</h3>\r\n        <ul class=\"list-group\">\r\n          <appointment-item *ngFor='let appointment of pastAppointments'\r\n          [appointment]='appointment' [viewReceipt]='true'></appointment-item>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf='noData'>\r\n        <h3 class='text-center'>No appointments found</h3>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n       tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title pull-left\">Are you sure?</h4>\r\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class='row'>\r\n          <div class=\"col-xs-12\">\r\n            <p>Confirm cancel appointment on {{this.appointmentService.formatTime(this.selectedAppointment.date)}}</p>\r\n            <div class=\"thumbnail\">\r\n              <a class='thumb-hover' (click)='confirmCancel(this.selectedAppointment._id)'>\r\n              <span class=\"glyphicon glyphicon-ok text-center\" style='display:block; font-size:50px; color:green' aria-hidden=\"true\"></span>\r\n              <div class=\"caption\">\r\n                <h3 class='text-center'>Yes, cancel</h3>\r\n              </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xs-12\">\r\n            <div class=\"thumbnail\">\r\n              <a class='thumb-hover' (click)='staticModal.hide()'>\r\n              <span class=\"glyphicon glyphicon-remove text-center\" style='display:block; font-size:50px; color:red' aria-hidden=\"true\"></span>\r\n              <div class=\"caption\">\r\n                <h3 class='text-center'>No, don't cancel</h3>\r\n              </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n          <!-- Cancel appointment {{appointmentId}}\r\n          Click <b>&times;</b> to close modal. -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = "  <h2>\r\n    {{firstName}}'s Dashboard\r\n  </h2>\r\n\r\n<div class=\"row\">\r\n  <div class='col-xs-12 col-sm-8 col-sm-push-4'>\r\n    <alert *ngIf='alertReady' [type]='alert.type'>\r\n      <span [innerHTML]='alert.message'></span>\r\n    </alert>\r\n  </div>\r\n  <div class='col-xs-12 col-sm-4 col-sm-pull-8'>\r\n    <ul class='list-group'>\r\n      <a class='thumb-hover' routerLink='../appointments-list'>\r\n      <li class='list-group-item'>\r\n        <span class=\"glyphicon glyphicon-list\" aria-hidden=\"true\"></span>\r\n        <span class='text'>&nbsp;View appointments</span></li>\r\n      </a>\r\n      <a class='thumb-hover' routerLink='../schedule'>\r\n        <li class='list-group-item'>\r\n          <span class=\"glyphicon glyphicon-calendar\" aria-hidden=\"true\"></span>\r\n          <span class='text'>Make an appointment</span></li>\r\n      </a>\r\n      <a class='thumb-hover' routerLink='../profile'>\r\n        <li class='list-group-item'>\r\n          <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\r\n          <span class='text'>Account management</span></li>\r\n      </a>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-->TODO: Need to implement media query so the list items above appear as it\r\ndoes below when view-screen is larger<-->\r\n\r\n<!-- Commenting out large thumbnails in lieu of mobile first-->\r\n<!-- <div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n    <div class=\"thumbnail\">\r\n      <a class='thumb-hover' routerLink='../appointments-list'>\r\n        <span class=\"glyphicon glyphicon-list text-center\" style='display:block; font-size:100px'\r\n        aria-hidden=\"true\"></span>\r\n      <div class=\"caption\">\r\n        <h3 class='text-center'>View appointments</h3>\r\n      </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n    <div class=\"thumbnail\">\r\n      <a class='thumb-hover' routerLink='../schedule'>\r\n      <span class=\"glyphicon glyphicon-calendar text-center\" style='display:block; font-size:100px' aria-hidden=\"true\"></span>\r\n      <div class=\"caption\">\r\n        <h3 class='text-center'>Make an appointment</h3>\r\n      </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n    <div class=\"thumbnail\">\r\n      <a class='thumb-hover' routerLink='../profile'>\r\n      <span class=\"glyphicon glyphicon-user text-center\" style='display:block; font-size:100px' aria-hidden=\"true\"></span>\r\n      <div class=\"caption\">\r\n        <h3 class='text-center'>Account management</h3>\r\n      </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "<h3>Consent Form</h3>\n<h4>Please read and sign this form before receiving treatment</h4>\n<div class=\"row consentForm\">\n  <div class=\"col-sm-8 col-sm-push-2\">\n    <h4 class='text-center'>Information about Acupuncture Treatment</h4>\n    <p><span class='indent'></span>\n      Acupuncture is a healing art that involves the stimulation of specific points on the body. It has the effect of normalizing physiological function, modifying the perception of pain, and treating certain diseases or dysfunctions of the body. The stimulation may be produced by needles, heat, digital pressure, electric currents, or other means, but most frequently produced by needling. Herbs and nutritional supplements may be recommended and are considered safe in the practice of Chinese Medicine.</p>\n    <p><span class='indent'></span>Acupuncture is considered a safe method of treatment, but occasionally there may be some bruising or tingling near the needling sites that last a few days. There have been rare instances reported in which a patient fainted, developed a scar or infection, experiences a spontaneous abortion, or sustained a pneumothorax (air in the chest cavity that could cause a collapsed lung), or got burnt on heat treatment.\n    Contraindications for acupuncture treatment and certain herbs include history of a bleeding disorder or current anticoagulant therapy, an implanted pacemaker or prosthetic heart valve, use of certain medication, and/or pregnancy.\n    </p>\n    <h4 class='text-center'>Insurance Information Disclosure</h4>\n    <p>\n      <span class='indent'></span>\n      I give permission to Aculau Acupuncture to release information to my insurance company for claim processing and for direct payment of medical benefits to Aculau Acupuncture for services provided.\n    </p>\n    <h4 class='text-center'>Consent to Acupuncture Treatment</h4>\n    <p>\n      <span class='indent'></span>\n    Aculau Acupuncture and/or associates, has explained the benefits and possible risks of treatment by acupuncture and use of Chinese herbal medicine to me. My questions have been answered and I wish to proceed with acupuncture treatment. No guarantee of results have been made.\n    I do not have an implanted or prosthetic heart valve. I do not take steroids or anticoagulants.\n    I may request a copy of this information and consent form at any time.\n    I also understand that acupuncture might cause some discomfort such as pain, bruising, numbness, etc..\n    I have read this information sheet and consent to receive acupuncture treatment.\n    </p>\n    <h4 class='text-center'>Data usage and security disclosure</h4>\n    <p>(Additional terms pertaining to HIPAA regulations and data security...)</p>\n    <form class='form-horizontal' [formGroup]='consentForm'>\n      <div class=\"form-group col-sm-10\">\n        <label for=\"signature\" class='col-sm-4'>Full Name</label>\n      <div class=\"input-group col-sm-8\">\n        <span class='input-group-addon'><i class='glyphicon glyphicon-pencil' aria-hidden='true'></i></span>\n        <input type='text' class='form-control' id='signature' formControlName='signature'/>\n      </div>\n    </div>\n    <div class='form-group col-sm-10'>\n      <label for='date' class='col-sm-4'>Date</label>\n      <div class=\"col-sm-4\">{{date|date}}</div>\n    </div>\n  </form>\n  <button type='button' class='btn btn-default' (click)='onSubmit()'\n  [disabled]='consentForm.invalid'>Submit</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "<h3>Update Email</h3>\n<div [@alertState]='emailAlertState'>\n  <alert type='success' *ngIf='emailSaved'>\n    Your email has successfully been updated to {{newEmail}}\n  </alert>\n</div>\n<div class=\"row\" style='padding-top:20px'>\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <form class='form-horizontal' [formGroup]='emailForm' novalidate>\n      <div class=\"form-group\">\n        <label for=\"currentEmail\" class='col-sm-4'>Current Email</label>\n        <div class=\"input-group col-sm-8\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-at\" aria-hidden='true'></i></span>\n          <input type=\"email\" class='form-control' id='currentEmail' formControlName='currentEmail'>\n        </div>\n        </div>\n\n      <div class=\"form-group\">\n        <label for=\"newEmail\" class='col-sm-4'>New Email</label>\n        <div class=\"input-group col-sm-8\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-at\" aria-hidden='true'></i></span>\n          <input validateEqual='retypeEmail' type=\"email\" class='form-control'\n          id='newEmail' formControlName='newEmail' reverse='true'>\n        </div>\n        <small [hidden]=\"emailForm.controls.newEmail.valid || emailForm.controls.newEmail.pristine\" class=\"text-danger\">\nEmail is required and format should be <i>john@doe.com</i>.</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"retypeEmail\" class='col-sm-4'>Retype New Email</label>\n        <div class=\"input-group col-sm-8\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-at\" aria-hidden='true'></i></span>\n          <input validateEqual='newEmail' type=\"email\" class='form-control'\n          id='retypeEmail' formControlName='retypeEmail' reverse='false'>\n        </div>\n        <small [hidden]=\"emailForm.controls.retypeEmail.valid || emailForm.controls.retypeEmail.pristine\" class=\"text-danger\">\n          Email must match with new email.</small>\n      </div>\n      <div class=\"col-sm-8 col-sm-push-4\">\n        <button [disabled]='emailForm.invalid || emailSaved' type='button' class='btn btn-success' (click)='onUpdateEmail()'>\n          <span class='glyphicon glyphicon-floppy-disk' aria-hidden='true'></span>&nbsp;Save new email</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "<div class=\"color-selector\">\n  <i class=\"glyphicon glyphicon-tint\" aria-hidden='true' (click)='showSelector(true)'></i>\n  <div class=\"selector row\" *ngIf='isSelectorVisible'>\n    <div class=\"color\" *ngFor='let color of colors'\n    (click)='selectColor(color)' [ngStyle]='{\"background-color\":color}'></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "<div class=\"insurance-card row shadow-1\"\n[ngStyle]='{\"background-color\":insurance.color}'\n(mouseenter)='toggleCheck()' (mouseleave)='toggleCheck()'>\n  <div class=\"icon\" (click)=\"checkPrimary()\" *ngIf='showCheck'>\n    <!-- <i class=\"material-icons\">check</i> -->\n    <i class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"icon2\" (click)='remove()' *ngIf='showCheck'>\n    <!-- <i class=\"material-icons\">clear</i> -->\n    <i class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"col-xs-12 title\">\n    {{ insurance.groupName }} <span *ngIf='insurance.primary'>(Primary)</span>\n  </div>\n  <div class=\"col-xs-12 value\">\n    ID: {{ insurance.memberId }}\n  </div>\n  <div class=\"col-xs-12 value\">\n    Start date: {{insurance.startDate}}\n  </div>\n</div>\n"

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = "<div class=\"insurance-creator shadow-2\" [ngStyle]='{\"background-color\":insuranceForm.value.color}'>\n  <form class=\"row\" [formGroup]='insuranceForm'>\n    <select\n      formControlName=\"groupName\"\n      placeholder=\"Insurance Group\"\n      class=\"col-xs-10 title\"\n    >\n      <option value=\"\" [selected]>Add Insurance</option>\n      <option>Aetna</option>\n      <option>American Specialty Health</option>\n      <option>Blue Cross</option>\n      <option>Blue Shield of California</option>\n      <option>Cigna</option>\n      <option>Health Net</option>\n      <option>Optum Physical Health</option>\n      <option>Samba Federal Health Plan</option>\n      <option>United Health Care</option>\n      <option>United Medical Resources</option>\n      <option>Other</option>\n  </select>\n    <input\n      *ngIf='insuranceForm.value.groupName==\"Other\"'\n      type=\"text\"\n      formControlName=\"otherInsurance\"\n      placeholder=\"Insurance Name\"\n      class=\"col-xs-10\"\n    >\n    <input\n      type=\"text\"\n      formControlName=\"memberId\"\n      placeholder=\"Member ID\"\n      class=\"col-xs-10\"\n      *ngIf='fullForm'\n    >\n    <input\n      type=\"text\"\n      formControlName=\"startDate\"\n      placeholder=\"Coverage date: mm/dd/yyyy\"\n      class=\"col-xs-10\"\n      [textMask]='{mask:dateMask}'\n      *ngIf='fullForm'\n    >\n    <div class=\"actions col-xs-12 row between-xs\" *ngIf='fullForm'>\n      <div class=\"col-xs-3\">\n        <color-picker [colors]='colors'\n        (selected)='onColorSelect($event)'></color-picker>\n      </div>\n      <button\n        type=\"submit\"\n        class=\"btn-light\"\n        [disabled]='insuranceForm.invalid'\n        (click)='onCreateInsurance()'\n       >\n        Enter\n      </button>\n    </div>\n  </form>\n  <!-- <pre>\n    {{insuranceForm.value| json}}\n  </pre> -->\n</div>\n"

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n  <main class=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 creator\">\r\n        <insurance-creator\r\n          (createInsurance)='onCreateInsurance($event)'\r\n        ></insurance-creator>\r\n      </div>\r\n      <div class=\"col-sm-6 alert\">\r\n        <alert type='info' *ngIf='!profileComplete'>\r\n          Profile info must be complete before insurance can be verified.\r\n        </alert>\r\n        <alert type='danger' *ngIf='insuranceError'>\r\n          Server error, could not save insurances. Try another time.\r\n        </alert>\r\n        <alert type='success' *ngIf='insuranceSaved'>\r\n          Insurance information saved!\r\n        </alert>\r\n      </div>\r\n      <div class=\"insurances col-xs-12\">\r\n        <h3 class='text-center'>Current Insurances</h3>\r\n          <insurance-card\r\n            class=\"col-xs-12 col-sm-6\"\r\n            [insurance]=\"insurance\"\r\n            *ngFor='let insurance of insurances; let i=index'\r\n            (checkedPrimary)='onCheckedPrimary(i)'\r\n            (removed)='onRemoved(i)'>\r\n          </insurance-card>\r\n      </div>\r\n    </div>\r\n    <div class=\"row text-center\">\r\n      <button type='button' class='btn btn-primary' (click)='saveInsurances()'\r\n      [disabled]='!changed'>\r\n        <span class='glyphicon glyphicon-floppy-disk' aria-hidden='true'></span>\r\n        &nbsp;Save Insurances</button>\r\n    </div>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = "<h3>Update Password</h3>\n  <div class=\"row\">\n    <div [@alertState]='passwordAlertState'>\n      <alert type='success' *ngIf='passwordSaved'>\n        Password has been succesfully updated\n      </alert>\n      <alert type='danger' *ngIf='passwordUnsuccessful'>\n        Unable to update, incorrect password\n      </alert>\n    </div>\n    <div class=\"col-sm-6 col-sm-push-3\">\n    <form class='form-horizontal' [formGroup]='passwordForm'>\n      <div class=\"form-group\">\n        <label for=\"currentPassword\" class='col-sm-4'>Current password</label>\n        <div class=\"input-group col-sm-8\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-key\" aria-hidden='true'></i></span>\n          <input type=\"password\" class='form-control' id='currentPassword'\n          formControlName='currentPassword'>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"newPassword\" class='col-sm-4'>New password</label>\n        <div class=\"input-group col-sm-8\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-unlock-alt\" aria-hidden='true'></i></span>\n          <input type=\"password\" class='form-control' id='newPassword' reverse='true'\n          formControlName='newPassword' validateEqual='retypePassword'>\n        </div>\n        <small [hidden]=\"passwordForm.controls.newPassword.valid || passwordForm.controls.newPassword.pristine\" class=\"text-danger\">\n          New password must be 6 characters in length or greater.</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"retypePassword\" class='col-sm-4'>Retype password</label>\n        <div class=\"input-group col-sm-8\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-unlock-alt\" aria-hidden='true'></i></span>\n          <input type=\"password\" class='form-control' id='retypePassword' reverse='false'\n          formControlName='retypePassword' validateEqual='newPassword'>\n        </div>\n        <small [hidden]=\"passwordForm.controls.retypePassword.valid || passwordForm.controls.retypePassword.pristine\" class=\"text-danger\">\n          Passwords must match</small>\n      </div>\n      <div class=\"col-sm-8 col-sm-push-4\">\n        <button [disabled]='passwordForm.invalid || passwordSaved' type='button' class='btn btn-success' (click)='onUpdatePassword()'>\n          <span class='glyphicon glyphicon-floppy-disk' aria-hidden='true'></span>&nbsp;Save new password</button>\n      </div>\n    </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h2>Account Settings</h2>\r\n\r\n    <tabset>\r\n      <tab heading='Profile info'>\r\n        <h3>Profile Information</h3>\r\n        <div [@alertState]='personalAlertState'>\r\n          <alert type=\"info\" *ngIf='profileForm.invalid && canView'>\r\n            Please fill out the remaining form to verify insurance and receive treatment.\r\n          </alert>\r\n        </div>\r\n        <div [@alertState]='profileSaved'>\r\n          <alert type='success' *ngIf='profileSaved==\"show\"'>\r\n            Profile updated!\r\n          </alert>\r\n        </div>\r\n        <alert type='danger' *ngIf='errorPresent'>\r\n          {{errorMessage}}\r\n        </alert>\r\n\r\n        <form class='form-horizontal' [formGroup]='profileForm' novalidate>\r\n          <div class=\"row\">\r\n            <div class=\"text-center\" style='padding-bottom:15px; padding-top:15px'>\r\n              <!-- <button type='button' (click)='debug()' class='btn btn-default'>Debug</button> -->\r\n              <button *ngIf='formDisabled' type='button' (click)='onEdit()' class='btn btn-primary'>\r\n                <span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>&nbsp;Edit</button>\r\n              <button *ngIf='!formDisabled' (click)='onSave()' type=\"button\"\r\n               class=\"btn btn-success\" [disabled]='!profileForm.valid|| profileForm.pristine'>\r\n                <span class='glyphicon glyphicon-floppy-disk' aria-hidden='true'></span>&nbsp;Save</button>\r\n              <button *ngIf='!formDisabled' (click)='onCancel()' type=\"button\" class=\"btn btn-danger\">\r\n                <span class='glyphicon glyphicon-remove' aria-hidden='true'></span>&nbsp;Cancel</button>\r\n            </div>\r\n          </div>\r\n          <fieldset [disabled]='formDisabled'>\r\n            <div class=\"row\">\r\n              <div class=\"form-group col-sm-6\">\r\n                <label for=\"firstName\" class='col-sm-4 control-label'>\r\n                  <span class='required'>*&nbsp;</span>First Name</label>\r\n                <div class=\"input-group col-sm-8\">\r\n                  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\" aria-hidden='true'></i></span>\r\n                  <input type=\"text\" class=\"form-control\" id=\"firstName\" formControlName='firstName'>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-sm-6\">\r\n                <label for=\"lastName\" class='col-sm-4 control-label'>\r\n                  <span class='required'>*&nbsp;</span>Last Name</label>\r\n                <div class=\"input-group col-sm-8\">\r\n                   <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\" aria-hidden='true'></i></span>\r\n                  <input type=\"text\" class=\"form-control\" id=\"lastName\" formControlName='lastName'>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-sm-6\">\r\n              <label for=\"gender\" class='col-sm-4 control-label'>\r\n                <span class='required'>*&nbsp;</span>Gender</label>\r\n              <div class=\"input-group col-sm-8\">\r\n                <label class=\"radio-inline\">\r\n                  <input type=\"radio\" name=\"gender\" id=\"maleRadio\"\r\n                   value=\"male\" formControlName='gender'>Male\r\n                </label>\r\n                <label class=\"radio-inline\">\r\n                  <input type=\"radio\" name=\"gender\" id=\"femaleRadio\"\r\n                   value=\"female\" formControlName='gender'>Female\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-sm-6\" *ngIf='profileForm.value.gender==\"female\"'>\r\n              <label for=\"pregnant\" class='col-sm-5 control-label'>Pregnant</label>\r\n              <div class=\"input-group col-sm-7\">\r\n                <label for=\"no\" class=\"radio-inline\">\r\n                  <input type=\"radio\" name=\"pregnant\" id=\"noRadio\"\r\n                   [value]=\"false\" formControlName='pregnant'>No\r\n                </label>\r\n                <label for=\"yes\" class='radio-inline'>\r\n                  <input type=\"radio\" name=\"pregnant\" id=\"yesRadio\"\r\n                   [value]=\"true\" formControlName='pregnant'>Yes\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-sm-6\">\r\n            <label for=\"primaryPhone\" class='col-sm-4 control-label'>\r\n              <span class='required'>*&nbsp;</span>Primary phone</label>\r\n            <div class=\"input-group col-sm-8\">\r\n              <span class=\"input-group-addon\"><i class='glyphicon glyphicon-earphone' aria-hidden='true'></i></span>\r\n              <input [textMask]='{mask:phoneMask}' type=\"text\" id=\"primaryPhone\" class='form-control'\r\n              placeholder='(___) ___-____' formControlName='primaryPhone'>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-sm-6\">\r\n            <label for=\"secondaryPhone\" class='col-sm-4 control-label'>Secondary phone</label>\r\n            <div class=\"input-group col-sm-8\">\r\n              <span class=\"input-group-addon\"><i class='glyphicon glyphicon-earphone' aria-hidden='true'></i></span>\r\n              <input [textMask]='{mask:phoneMask}' type=\"text\" id=\"secondaryPhone\" class='form-control'\r\n              placeholder='(___) ___-____' formControlName='secondaryPhone'>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 form-group\">\r\n            <label for=\"referredBy\" class='col-sm-4 control-label'>Referred by</label>\r\n            <div class=\"input-group col-sm-8\">\r\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\" aria-hidden='true'></i></span>\r\n              <input type=\"text\" class=\"form-control\" id=\"referredBy\" formControlName='referredBy'>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-sm-6\">\r\n            <label for=\"dateOfBirth\" class='col-sm-4 control-label'>\r\n              <span class='required'>*&nbsp;</span>Date of Birth</label>\r\n            <div class=\"input-group col-sm-8\">\r\n              <span class=\"input-group-addon\"><i class='glyphicon glyphicon-calendar' aria-hidden='true'></i></span>\r\n              <input [textMask]='{mask:dobMask}' type=\"text\" id=\"dateOfBirth\" class='form-control'\r\n              placeholder='mm/dd/yyyy' formControlName='dateOfBirth'>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      <div formGroupName='address'>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-sm-6\">\r\n            <label for=\"address\" class='col-sm-4 control-label'>\r\n              <span class='required'>*&nbsp;</span>Street Address</label>\r\n            <div class=\"input-group col-sm-8\">\r\n             <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\" aria-hidden='true'></i></span>\r\n              <input type=\"text\" class=\"form-control\" id=\"address\" formControlName='street'>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-sm-6\">\r\n            <label for=\"email\" class='col-sm-4 control-label'>\r\n              <span class='required'>*&nbsp;</span>City</label>\r\n            <div class=\"input-group col-sm-8\">\r\n             <span class=\"input-group-addon\"><i class=\"fa fa-building\" aria-hidden='true'></i></span>\r\n              <input type=\"text\" class=\"form-control\" id=\"city\" formControlName='city'>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-sm-6\">\r\n          <label for=\"email\" class='col-sm-4 control-label'>\r\n            <span class='required'>*&nbsp;</span>State</label>\r\n          <div class=\"input-group col-sm-8\">\r\n           <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-th-list\" aria-hidden='true'></i></span>\r\n           <select name=\"state\" class=\"form-control selectpicker\" formControlName='state'>\r\n          <option value=\"\" >Please select your state</option>\r\n          <option value='AL'>Alabama</option>\r\n          <option value='AK'>Alaska</option>\r\n          <option value='AZ'>Arizona</option>\r\n          <option value='AR'>Arkansas</option>\r\n          <option value='CA'>California</option>\r\n          <option value='CO'>Colorado</option>\r\n          <option value='CT'>Connecticut</option>\r\n          <option value='DE'>Delaware</option>\r\n          <option value='DC'>District of Columbia</option>\r\n          <option value='FL'>Florida</option>\r\n          <option value='GA'>Georgia</option>\r\n          <option value='HI'>Hawaii</option>\r\n          <option value='ID'>Idaho</option>\r\n          <option value='IL'>Illinois</option>\r\n          <option value='IN'>Indiana</option>\r\n          <option value='IA'>Iowa</option>\r\n          <option value='KS'> Kansas</option>\r\n          <option value='KY'>Kentucky</option>\r\n          <option value='LA'>Louisiana</option>\r\n          <option value='ME'>Maine</option>\r\n          <option value='MD'>Maryland</option>\r\n          <option value='MA'>Massachusetts</option>\r\n          <option value='MI'>Michigan</option>\r\n          <option value='MN'>Minnesota</option>\r\n          <option value='MS'>Mississippi</option>\r\n          <option value='MO'>Missouri</option>\r\n          <option value='MT'>Montana</option>\r\n          <option value='NE'>Nebraska</option>\r\n          <option value='NV'>Nevada</option>\r\n          <option value='NH'>New Hampshire</option>\r\n          <option value='NJ'>New Jersey</option>\r\n          <option value='NM'>New Mexico</option>\r\n          <option value='NY'>New York</option>\r\n          <option value='NC'>North Carolina</option>\r\n          <option value='ND'>North Dakota</option>\r\n          <option value='OH'>Ohio</option>\r\n          <option value='OK'>Oklahoma</option>\r\n          <option value='OR'>Oregon</option>\r\n          <option value='PA'>Pennsylvania</option>\r\n          <option value='RI'>Rhode Island</option>\r\n          <option value='SC'>South Carolina</option>\r\n          <option value='SD'>South Dakota</option>\r\n          <option value='TN'>Tennessee</option>\r\n          <option value='TX'>Texas</option>\r\n          <option value='UT'>Utah</option>\r\n          <option value='VT'>Vermont</option>\r\n          <option value='VA'>Virginia</option>\r\n          <option value='WA'>Washington</option>\r\n          <option value='WV'>West Virginia</option>\r\n          <option value='WI'>Wisconsin</option>\r\n          <option value='WY'>Wyoming</option>\r\n          </select>\r\n          </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-sm-6\">\r\n            <label for=\"zip\" class='col-sm-4 control-label'>\r\n              <span class='required'>*&nbsp;</span>Zip code</label>\r\n            <div class=\"input-group col-sm-8\">\r\n             <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\r\n              <input type=\"text\" class=\"form-control\" id=\"zip\" formControlName='zip'\r\n              maxlength=\"5\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-sm-6\">\r\n            <label for=\"emergencyContact\" class='col-sm-4 control-label'>Emergency contact</label>\r\n            <div class=\"input-group col-sm-8\">\r\n             <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\" aria-hidden='true'></i></span>\r\n             <input type=\"text\" class=\"form-control col-sm-8\" id=\"emergencyContact\"\r\n              formControlName='emergencyContact'>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-sm-6\">\r\n            <label for=\"emergencyPhone\" class='col-sm-4 control-label'>Emergency phone</label>\r\n            <div class=\"input-group col-sm-8\">\r\n              <span class=\"input-group-addon\"><i class='glyphicon glyphicon-earphone' aria-hidden='true'></i></span>\r\n              <input [textMask]='{mask:phoneMask}' type=\"text\" id=\"emergencyPhone\" class='form-control'\r\n              placeholder='(___) ___-____' formControlName='emergencyPhone'>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        </fieldset>\r\n        </form>\r\n      </tab>\r\n      <tab heading='Insurances'>\r\n        <app-insurances [insurances]='insurances'\r\n        [profileComplete]='profileComplete'></app-insurances>\r\n      </tab>\r\n\r\n      <tab heading='Email'>\r\n        <app-email [email]='email'></app-email>\r\n      </tab>\r\n\r\n      <tab heading='Password'>\r\n        <app-password></app-password>\r\n      </tab>\r\n\r\n      <tab heading='Consent'>\r\n        <profile-consent></profile-consent>\r\n      </tab>\r\n    </tabset>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "  <h2>\r\n    Register an account\r\n  </h2>\r\n  <div class='row'>\r\n  <div class=\"col-xs-12 col-sm-5 col-sm-push-6\">\r\n    <h3>Why create an account?</h3>\r\n    <ul class='list-group'>\r\n      <li class=\"list-group-item\">Schedule and manage appointments</li>\r\n      <li class=\"list-group-item\">View medical records, physician instructions</li>\r\n      <li class=\"list-group-item\">Online payment and retrieve receipts</li>\r\n      <li class=\"list-group-item\">Complete forms digitally, no paper</li>\r\n      <li class=\"list-group-item\">Submit and check insurance for benefits</li>\r\n    </ul>\r\n  </div>\r\n<div class=\"col-xs-12 col-sm-4 col-sm-pull-4\">\r\n  <form [formGroup]='patientForm' (ngSubmit)='onSubmit()'>\r\n    <div class=\"form-group\">\r\n      <label for=\"firstNameInput\">First Name</label>\r\n      <input formControlName='firstName' type=\"text\" class='form-control'\r\n       id='firstNameInput' placeholder='First name' [focus]='focusEvent'>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"lastNameInput\">Last Name</label>\r\n      <input formControlName='lastName' type=\"text\" class='form-control'\r\n       id='lastNameInput' placeholder='Last name'>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"emailInput\">Email</label>\r\n      <input formControlName='email' type=\"text\" class='form-control'\r\n       id='emailInput' placeholder='billy212@example.com'>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"passwordInput\">Password</label>\r\n      <input formControlName='password' type=\"password\" class='form-control'\r\n       id='passwordInput' placeholder='superSecret'>\r\n    </div>\r\n    <button type='submit' class='btn btn-default'\n     [disabled]='!patientForm.valid'>Submit</button>\r\n  </form>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "  <h2>Make an appointment</h2>\r\n  <p>\r\n    Total appointment time should last approximately <b>one hour</b>.\r\n  </p>\r\n  <iframe *ngIf=\"isReady\" [src]='acuityURL | safe' width=\"80%\" height=\"600\" frameBorder=\"0\"></iframe>\r\n"

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-sm-4 col-sm-push-4\">\n  <h2>Sign in</h2>\n  <form [formGroup]='signInForm' (ngSubmit)='onSubmit()'>\n    <div class=\"form-group\">\n      <label for=\"emailInput\">Email</label>\n      <input formControlName='email' type=\"text\" class='form-control'\n       id='emailInput' [focus]='focusEvent'>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passwordInput\">Password</label>\n      <input formControlName='password' type=\"password\" class='form-control'\n       id='passwordInput'>\n    </div>\n    <button type='submit' class='btn btn-default'\n     [disabled]='!signInForm.valid'>Submit</button>\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientService = (function () {
    function PatientService(http) {
        this.http = http;
    }
    PatientService.prototype.savePatientInfo = function (patient) {
        var body = patient;
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'x-auth': token });
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].DOMAIN + '/patients/me', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    PatientService.prototype.updatePassword = function (passwordObj) {
        var body = passwordObj;
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'x-auth': token });
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].DOMAIN + '/patients/me/password', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    PatientService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], PatientService);
    return PatientService;
    var _a;
}());
//# sourceMappingURL=F:/App_Projects/myApp/src/patient.service.js.map

/***/ })

},[1214]);
//# sourceMappingURL=main.bundle.map