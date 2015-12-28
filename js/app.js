var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var App = (function () {
    function App() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], App.prototype, "panoUrl");
    App = __decorate([
        angular2_1.Component({
            selector: 'cardboard-gl'
        }),
        angular2_1.View({
            template: "\n        <a-scene>\n          <a-sky src=\"img/panorama2.jpg\" rotation=\"0 -130 0\"></a-sky>\n        </a-scene>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
/*class App {

    viewContainer: ViewContainerRef;
    protoViewRef: ProtoViewRef;
    view: View;

    constructor(viewContainer: ViewContainerRef, protoViewRef: ProtoViewRef) {
        this.viewContainer = viewContainer;
        this.protoViewRef = protoViewRef;
    }
}*/
angular2_1.bootstrap(App);
//# sourceMappingURL=app.js.map