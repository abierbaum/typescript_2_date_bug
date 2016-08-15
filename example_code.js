var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function klsDec() {
    return function (constructor) {
        // do nothing
    };
}
function propDec() {
    return function (proto, name) {
        console.log('prop decorated: ' + name);
    };
}
var BaseClass = (function () {
    function BaseClass() {
    }
    return BaseClass;
}());
var ChildClass = (function () {
    function ChildClass() {
    }
    return ChildClass;
}());
var Blah = (function () {
    function Blah() {
    }
    __decorate([
        propDec(), 
        __metadata('design:type', String)
    ], Blah.prototype, "myString", void 0);
    __decorate([
        propDec(), 
        __metadata('design:type', Object)
    ], Blah.prototype, "myObject", void 0);
    __decorate([
        propDec(), 
        __metadata('design:type', Number)
    ], Blah.prototype, "myNum", void 0);
    __decorate([
        propDec(), 
        __metadata('design:type', BaseClass)
    ], Blah.prototype, "myBase", void 0);
    __decorate([
        propDec(), 
        __metadata('design:type', ChildClass)
    ], Blah.prototype, "myChild", void 0);
    __decorate([
        propDec(), 
        __metadata('design:type', Date)
    ], Blah.prototype, "myDate", void 0);
    return Blah;
}());
console.log('Hello World');
