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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var country_service_1 = require("./country.service");
var CountryDetailComponent = (function () {
    function CountryDetailComponent(route, router, countryService) {
        this.route = route;
        this.router = router;
        this.countryService = countryService;
        this.pageTitle = 'Country Detail';
    }
    CountryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var countryCode = params['countryCode'];
            console.log(countryCode);
            _this.getCountryById(countryCode);
        });
    };
    CountryDetailComponent.prototype.getCountryById = function (countryCode) {
        var _this = this;
        this.countryService.getCountryById(countryCode).subscribe(function (country) { return _this.country = country; }, function (error) { return _this.errorMessage = error; });
    };
    CountryDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/country']);
    };
    CountryDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return CountryDetailComponent;
}());
CountryDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'country-detail',
        templateUrl: 'country-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        country_service_1.CountryService])
], CountryDetailComponent);
exports.CountryDetailComponent = CountryDetailComponent;
//# sourceMappingURL=country-detail.component.js.map