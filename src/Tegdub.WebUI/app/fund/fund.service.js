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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var FundService = (function () {
    function FundService(http) {
        this.http = http;
        this.serviceUrl = 'http://localhost:7357/api/funds';
    }
    FundService.prototype.getFunds = function () {
        return this.http.get(this.serviceUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FundService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    FundService.prototype.handleError = function (error) {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    };
    FundService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FundService);
    return FundService;
}());
exports.FundService = FundService;
//# sourceMappingURL=fund.service.js.map