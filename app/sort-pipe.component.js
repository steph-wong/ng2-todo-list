System.register(["angular2/core", 'angular2/src/facade/lang'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, lang_1;
    var TodosSortPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            TodosSortPipe = (function () {
                function TodosSortPipe() {
                }
                TodosSortPipe.prototype.transform = function (array, args) {
                    // console.log("test sort pipe");
                    if (lang_1.isBlank(array))
                        return array;
                    array.sort(function (a, b) {
                        if (a.completed < b.completed) {
                            return -1;
                        }
                        else if (a.completed > b.completed) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    });
                    return array;
                };
                TodosSortPipe = __decorate([
                    core_1.Pipe({
                        name: "sort",
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodosSortPipe);
                return TodosSortPipe;
            }());
            exports_1("TodosSortPipe", TodosSortPipe);
        }
    }
});
//# sourceMappingURL=sort-pipe.component.js.map