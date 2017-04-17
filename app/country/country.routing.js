"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var country_list_component_1 = require("./country-list.component");
var country_detail_component_1 = require("./country-detail.component");
var routes = [
    { path: 'country', component: country_list_component_1.CountryListComponent },
    { path: 'country/:countryCode', component: country_detail_component_1.CountryDetailComponent },
];
var CountryRoutingModule = (function () {
    function CountryRoutingModule() {
    }
    return CountryRoutingModule;
}());
CountryRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
    })
], CountryRoutingModule);
exports.CountryRoutingModule = CountryRoutingModule;
//# sourceMappingURL=country.routing.js.map