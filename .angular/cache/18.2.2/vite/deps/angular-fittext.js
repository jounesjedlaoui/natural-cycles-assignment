import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
  Renderer2
} from "./chunk-VZD2ANCY.js";
import "./chunk-2CVCC5YH.js";

// node_modules/angular-fittext/fesm5/angular-fittext.js
var AngularFittextDirective = (
  /** @class */
  function() {
    function AngularFittextDirective2(el, renderer) {
      var _this = this;
      this.el = el;
      this.renderer = renderer;
      this.fittext = true;
      this.compression = 1;
      this.activateOnResize = true;
      this.minFontSize = 0;
      this.maxFontSize = Number.POSITIVE_INFINITY;
      this.delay = 100;
      this.fontUnit = "px";
      this.calcSize = 10;
      this.onWindowResize = function() {
        if (_this.activateOnResize) {
          _this.setFontSize();
        }
      };
      this.setFontSize = function() {
        _this.resizeTimeout = setTimeout((function() {
          if (_this.fittextElement.offsetHeight * _this.fittextElement.offsetWidth !== 0) {
            _this.setStyles(_this.calcSize, 1, "inline-block");
            _this.setStyles(_this.calculateNewFontSize(), _this.lineHeight, _this.display);
          }
        }).bind(_this), _this.delay);
      };
      this.calculateNewFontSize = function() {
        var ratio = _this.calcSize * _this.newlines / _this.fittextElement.offsetWidth / _this.newlines;
        return Math.max(Math.min((_this.fittextParent.offsetWidth - (parseFloat(getComputedStyle(_this.fittextParent).paddingLeft) + parseFloat(getComputedStyle(_this.fittextParent).paddingRight)) - 6) * ratio * _this.compression, _this.fittextMaxFontSize), _this.fittextMinFontSize);
      };
      this.setStyles = function(fontSize, lineHeight, display) {
        _this.renderer.setStyle(_this.fittextElement, "fontSize", fontSize.toString() + _this.fontUnit);
        _this.renderer.setStyle(_this.fittextElement, "lineHeight", lineHeight.toString());
        _this.renderer.setStyle(_this.fittextElement, "display", display);
      };
      this.fittextElement = el.nativeElement;
      this.fittextParent = this.fittextElement.parentElement;
      this.computed = window.getComputedStyle(this.fittextElement);
      this.newlines = this.fittextElement.childElementCount > 0 ? this.fittextElement.childElementCount : 1;
      this.lineHeight = this.computed["line-height"];
      this.display = this.computed["display"];
    }
    AngularFittextDirective2.prototype.ngOnInit = /**
    * @return {?}
    */
    function() {
      this.fittextMinFontSize = this.minFontSize === "inherit" ? this.computed["font-size"] : this.minFontSize;
      this.fittextMaxFontSize = this.maxFontSize === "inherit" ? this.computed["font-size"] : this.maxFontSize;
    };
    AngularFittextDirective2.prototype.ngAfterViewInit = /**
    * @return {?}
    */
    function() {
      this.setFontSize();
    };
    AngularFittextDirective2.prototype.ngOnChanges = /**
    * @param {?} changes
    * @return {?}
    */
    function(changes) {
      if (changes["compression"] && !changes["compression"].firstChange) {
        this.setFontSize();
      }
      if (changes["ngModel"]) {
        this.fittextElement.innerHTML = this.ngModel;
        this.setFontSize();
      }
    };
    AngularFittextDirective2.decorators = [{
      type: Directive,
      args: [{
        selector: "[fittext]"
      }]
    }];
    AngularFittextDirective2.ctorParameters = function() {
      return [{
        type: ElementRef
      }, {
        type: Renderer2
      }];
    };
    AngularFittextDirective2.propDecorators = {
      "fittext": [{
        type: Input
      }],
      "compression": [{
        type: Input
      }],
      "activateOnResize": [{
        type: Input
      }],
      "minFontSize": [{
        type: Input
      }],
      "maxFontSize": [{
        type: Input
      }],
      "delay": [{
        type: Input
      }],
      "ngModel": [{
        type: Input
      }],
      "fontUnit": [{
        type: Input
      }],
      "onWindowResize": [{
        type: HostListener,
        args: ["window:resize"]
      }]
    };
    return AngularFittextDirective2;
  }()
);
var AngularFittextModule = (
  /** @class */
  function() {
    function AngularFittextModule2() {
    }
    AngularFittextModule2.decorators = [{
      type: NgModule,
      args: [{
        declarations: [AngularFittextDirective],
        exports: [AngularFittextDirective]
      }]
    }];
    return AngularFittextModule2;
  }()
);
export {
  AngularFittextDirective,
  AngularFittextModule
};
//# sourceMappingURL=angular-fittext.js.map
