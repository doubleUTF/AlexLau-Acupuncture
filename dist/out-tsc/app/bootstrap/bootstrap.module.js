var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { DropdownModule, AlertModule } from 'ng2-bootstrap';
var BootstrapModule = (function () {
    function BootstrapModule() {
    }
    return BootstrapModule;
}());
BootstrapModule = __decorate([
    NgModule({
        imports: [
            DropdownModule.forRoot(),
            AlertModule.forRoot()
        ],
        declarations: [],
        exports: [
            DropdownModule,
            AlertModule
        ]
    }),
    __metadata("design:paramtypes", [])
], BootstrapModule);
export { BootstrapModule };
//# sourceMappingURL=../../../../src/app/bootstrap/bootstrap.module.js.map