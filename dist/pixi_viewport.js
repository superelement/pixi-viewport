import { Point as c, Rectangle as y, Ticker as b, Container as H } from "pixi.js";
class u {
  /** @param {Viewport} parent */
  constructor(t) {
    this.parent = t, this.paused = !1;
  }
  /** Called when plugin is removed */
  destroy() {
  }
  /** Handler for pointerdown PIXI event */
  down(t) {
    return !1;
  }
  /** Handler for pointermove PIXI event */
  move(t) {
    return !1;
  }
  /** Handler for pointerup PIXI event */
  up(t) {
    return !1;
  }
  /** Handler for wheel event on div */
  wheel(t) {
    return !1;
  }
  /**
   * Called on each tick
   * @param {number} elapsed time in millisecond since last update
   */
  update(t) {
  }
  /** Called when the viewport is resized */
  resize() {
  }
  /** Called when the viewport is manually moved */
  reset() {
  }
  /** Pause the plugin */
  pause() {
    this.paused = !0;
  }
  /** Un-pause the plugin */
  resume() {
    this.paused = !1;
  }
}
var S = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function M(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var W = { exports: {} };
(function(l, t) {
  (function() {
    var e, n;
    n = function(i) {
      return l.exports = i;
    }, e = {
      linear: function(i, s, h, o) {
        return h * i / o + s;
      },
      easeInQuad: function(i, s, h, o) {
        return h * (i /= o) * i + s;
      },
      easeOutQuad: function(i, s, h, o) {
        return -h * (i /= o) * (i - 2) + s;
      },
      easeInOutQuad: function(i, s, h, o) {
        return (i /= o / 2) < 1 ? h / 2 * i * i + s : -h / 2 * (--i * (i - 2) - 1) + s;
      },
      easeInCubic: function(i, s, h, o) {
        return h * (i /= o) * i * i + s;
      },
      easeOutCubic: function(i, s, h, o) {
        return h * ((i = i / o - 1) * i * i + 1) + s;
      },
      easeInOutCubic: function(i, s, h, o) {
        return (i /= o / 2) < 1 ? h / 2 * i * i * i + s : h / 2 * ((i -= 2) * i * i + 2) + s;
      },
      easeInQuart: function(i, s, h, o) {
        return h * (i /= o) * i * i * i + s;
      },
      easeOutQuart: function(i, s, h, o) {
        return -h * ((i = i / o - 1) * i * i * i - 1) + s;
      },
      easeInOutQuart: function(i, s, h, o) {
        return (i /= o / 2) < 1 ? h / 2 * i * i * i * i + s : -h / 2 * ((i -= 2) * i * i * i - 2) + s;
      },
      easeInQuint: function(i, s, h, o) {
        return h * (i /= o) * i * i * i * i + s;
      },
      easeOutQuint: function(i, s, h, o) {
        return h * ((i = i / o - 1) * i * i * i * i + 1) + s;
      },
      easeInOutQuint: function(i, s, h, o) {
        return (i /= o / 2) < 1 ? h / 2 * i * i * i * i * i + s : h / 2 * ((i -= 2) * i * i * i * i + 2) + s;
      },
      easeInSine: function(i, s, h, o) {
        return -h * Math.cos(i / o * (Math.PI / 2)) + h + s;
      },
      easeOutSine: function(i, s, h, o) {
        return h * Math.sin(i / o * (Math.PI / 2)) + s;
      },
      easeInOutSine: function(i, s, h, o) {
        return -h / 2 * (Math.cos(Math.PI * i / o) - 1) + s;
      },
      easeInExpo: function(i, s, h, o) {
        return i === 0 ? s : h * Math.pow(2, 10 * (i / o - 1)) + s;
      },
      easeOutExpo: function(i, s, h, o) {
        return i === o ? s + h : h * (-Math.pow(2, -10 * i / o) + 1) + s;
      },
      easeInOutExpo: function(i, s, h, o) {
        return (i /= o / 2) < 1 ? h / 2 * Math.pow(2, 10 * (i - 1)) + s : h / 2 * (-Math.pow(2, -10 * --i) + 2) + s;
      },
      easeInCirc: function(i, s, h, o) {
        return -h * (Math.sqrt(1 - (i /= o) * i) - 1) + s;
      },
      easeOutCirc: function(i, s, h, o) {
        return h * Math.sqrt(1 - (i = i / o - 1) * i) + s;
      },
      easeInOutCirc: function(i, s, h, o) {
        return (i /= o / 2) < 1 ? -h / 2 * (Math.sqrt(1 - i * i) - 1) + s : h / 2 * (Math.sqrt(1 - (i -= 2) * i) + 1) + s;
      },
      easeInElastic: function(i, s, h, o) {
        var r, a, p;
        return p = 1.70158, a = 0, r = h, i === 0 || (i /= o), a || (a = o * 0.3), r < Math.abs(h) ? (r = h, p = a / 4) : p = a / (2 * Math.PI) * Math.asin(h / r), -(r * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * o - p) * (2 * Math.PI) / a)) + s;
      },
      easeOutElastic: function(i, s, h, o) {
        var r, a, p;
        return p = 1.70158, a = 0, r = h, i === 0 || (i /= o), a || (a = o * 0.3), r < Math.abs(h) ? (r = h, p = a / 4) : p = a / (2 * Math.PI) * Math.asin(h / r), r * Math.pow(2, -10 * i) * Math.sin((i * o - p) * (2 * Math.PI) / a) + h + s;
      },
      easeInOutElastic: function(i, s, h, o) {
        var r, a, p;
        return p = 1.70158, a = 0, r = h, i === 0 || (i /= o / 2), a || (a = o * (0.3 * 1.5)), r < Math.abs(h) ? (r = h, p = a / 4) : p = a / (2 * Math.PI) * Math.asin(h / r), i < 1 ? -0.5 * (r * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * o - p) * (2 * Math.PI) / a)) + s : r * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * o - p) * (2 * Math.PI) / a) * 0.5 + h + s;
      },
      easeInBack: function(i, s, h, o, r) {
        return r === void 0 && (r = 1.70158), h * (i /= o) * i * ((r + 1) * i - r) + s;
      },
      easeOutBack: function(i, s, h, o, r) {
        return r === void 0 && (r = 1.70158), h * ((i = i / o - 1) * i * ((r + 1) * i + r) + 1) + s;
      },
      easeInOutBack: function(i, s, h, o, r) {
        return r === void 0 && (r = 1.70158), (i /= o / 2) < 1 ? h / 2 * (i * i * (((r *= 1.525) + 1) * i - r)) + s : h / 2 * ((i -= 2) * i * (((r *= 1.525) + 1) * i + r) + 2) + s;
      },
      easeInBounce: function(i, s, h, o) {
        var r;
        return r = e.easeOutBounce(o - i, 0, h, o), h - r + s;
      },
      easeOutBounce: function(i, s, h, o) {
        return (i /= o) < 1 / 2.75 ? h * (7.5625 * i * i) + s : i < 2 / 2.75 ? h * (7.5625 * (i -= 1.5 / 2.75) * i + 0.75) + s : i < 2.5 / 2.75 ? h * (7.5625 * (i -= 2.25 / 2.75) * i + 0.9375) + s : h * (7.5625 * (i -= 2.625 / 2.75) * i + 0.984375) + s;
      },
      easeInOutBounce: function(i, s, h, o) {
        var r;
        return i < o / 2 ? (r = e.easeInBounce(i * 2, 0, h, o), r * 0.5 + s) : (r = e.easeOutBounce(i * 2 - o, 0, h, o), r * 0.5 + h * 0.5 + s);
      }
    }, n(e);
  }).call(S);
})(W);
var O = W.exports;
const v = /* @__PURE__ */ M(O);
function x(l, t) {
  if (l) {
    if (typeof l == "function")
      return l;
    if (typeof l == "string")
      return v[l];
  } else
    return v[t];
}
const P = {
  removeOnInterrupt: !1,
  ease: "linear",
  time: 1e3
};
class C extends u {
  /**
   * This is called by {@link Viewport.animate}.
   *
   * @param parent
   * @param options
   */
  constructor(t, e = {}) {
    super(t), this.startWidth = null, this.startHeight = null, this.deltaWidth = null, this.deltaHeight = null, this.width = null, this.height = null, this.time = 0, this.options = Object.assign({}, P, e), this.options.ease = x(this.options.ease), this.setupPosition(), this.setupZoom(), this.time = 0;
  }
  /**
   * Setup `startX`, `startY`, `deltaX`, `deltaY`, `keepCenter`.
   *
   * This is called during construction.
   */
  setupPosition() {
    typeof this.options.position < "u" ? (this.startX = this.parent.center.x, this.startY = this.parent.center.y, this.deltaX = this.options.position.x - this.parent.center.x, this.deltaY = this.options.position.y - this.parent.center.y, this.keepCenter = !1) : this.keepCenter = !0;
  }
  /**
   * Setup `startWidth, `startHeight`, `deltaWidth, `deltaHeight, `width`, `height`.
   *
   * This is called during construction.
   */
  setupZoom() {
    this.width = null, this.height = null, typeof this.options.scale < "u" ? this.width = this.parent.screenWidth / this.options.scale : typeof this.options.scaleX < "u" || typeof this.options.scaleY < "u" ? (typeof this.options.scaleX < "u" && (this.width = this.parent.screenWidth / this.options.scaleX), typeof this.options.scaleY < "u" && (this.height = this.parent.screenHeight / this.options.scaleY)) : (typeof this.options.width < "u" && (this.width = this.options.width), typeof this.options.height < "u" && (this.height = this.options.height)), this.width !== null && (this.startWidth = this.parent.screenWidthInWorldPixels, this.deltaWidth = this.width - this.startWidth), this.height !== null && (this.startHeight = this.parent.screenHeightInWorldPixels, this.deltaHeight = this.height - this.startHeight);
  }
  down() {
    return this.options.removeOnInterrupt && this.parent.plugins.remove("animate"), !1;
  }
  complete() {
    this.parent.plugins.remove("animate"), this.width !== null && this.parent.fitWidth(this.width, this.keepCenter, this.height === null), this.height !== null && this.parent.fitHeight(this.height, this.keepCenter, this.width === null), !this.keepCenter && this.options.position && this.parent.moveCenter(this.options.position), this.parent.emit("animate-end", this.parent), this.options.callbackOnComplete && this.options.callbackOnComplete(this.parent);
  }
  update(t) {
    if (this.paused)
      return;
    this.time += t;
    const e = new c(this.parent.scale.x, this.parent.scale.y);
    if (this.time >= this.options.time) {
      const n = this.parent.width, i = this.parent.height;
      this.complete(), (n !== this.parent.width || i !== this.parent.height) && this.parent.emit("zoomed", { viewport: this.parent, original: e, type: "animate" });
    } else {
      const n = this.options.ease(this.time, 0, 1, this.options.time);
      if (this.width !== null) {
        const i = this.startWidth, s = this.deltaWidth;
        this.parent.fitWidth(
          i + s * n,
          this.keepCenter,
          this.height === null
        );
      }
      if (this.height !== null) {
        const i = this.startHeight, s = this.deltaHeight;
        this.parent.fitHeight(
          i + s * n,
          this.keepCenter,
          this.width === null
        );
      }
      if (this.width === null ? this.parent.scale.x = this.parent.scale.y : this.height === null && (this.parent.scale.y = this.parent.scale.x), !this.keepCenter) {
        const i = this.startX, s = this.startY, h = this.deltaX, o = this.deltaY, r = new c(this.parent.x, this.parent.y);
        this.parent.moveCenter(i + h * n, s + o * n), this.parent.emit("moved", { viewport: this.parent, original: r, type: "animate" });
      }
      (this.width || this.height) && this.parent.emit("zoomed", { viewport: this.parent, original: e, type: "animate" });
    }
  }
}
const I = {
  sides: "all",
  friction: 0.5,
  time: 150,
  ease: "easeInOutSine",
  underflow: "center",
  bounceBox: null
};
class k extends u {
  /**
   * This is called by {@link Viewport.bounce}.
   */
  constructor(t, e = {}) {
    super(t), this.options = Object.assign({}, I, e), this.ease = x(this.options.ease, "easeInOutSine"), this.options.sides ? this.options.sides === "all" ? this.top = this.bottom = this.left = this.right = !0 : this.options.sides === "horizontal" ? (this.right = this.left = !0, this.top = this.bottom = !1) : this.options.sides === "vertical" ? (this.left = this.right = !1, this.top = this.bottom = !0) : (this.top = this.options.sides.indexOf("top") !== -1, this.bottom = this.options.sides.indexOf("bottom") !== -1, this.left = this.options.sides.indexOf("left") !== -1, this.right = this.options.sides.indexOf("right") !== -1) : this.left = this.top = this.right = this.bottom = !1;
    const n = this.options.underflow.toLowerCase();
    n === "center" ? (this.underflowX = 0, this.underflowY = 0) : (this.underflowX = n.indexOf("left") !== -1 ? -1 : n.indexOf("right") !== -1 ? 1 : 0, this.underflowY = n.indexOf("top") !== -1 ? -1 : n.indexOf("bottom") !== -1 ? 1 : 0), this.reset();
  }
  isActive() {
    return this.toX !== null || this.toY !== null;
  }
  down() {
    return this.toX = this.toY = null, !1;
  }
  up() {
    return this.bounce(), !1;
  }
  update(t) {
    if (!this.paused) {
      if (this.bounce(), this.toX) {
        const e = this.toX;
        e.time += t, this.parent.emit("moved", { viewport: this.parent, type: "bounce-x" }), e.time >= this.options.time ? (this.parent.x = e.end, this.toX = null, this.parent.emit("bounce-x-end", this.parent)) : this.parent.x = this.ease(e.time, e.start, e.delta, this.options.time);
      }
      if (this.toY) {
        const e = this.toY;
        e.time += t, this.parent.emit("moved", { viewport: this.parent, type: "bounce-y" }), e.time >= this.options.time ? (this.parent.y = e.end, this.toY = null, this.parent.emit("bounce-y-end", this.parent)) : this.parent.y = this.ease(e.time, e.start, e.delta, this.options.time);
      }
    }
  }
  /** @internal */
  calcUnderflowX() {
    let t;
    switch (this.underflowX) {
      case -1:
        t = 0;
        break;
      case 1:
        t = this.parent.screenWidth - this.parent.screenWorldWidth;
        break;
      default:
        t = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
    }
    return t;
  }
  /** @internal */
  calcUnderflowY() {
    let t;
    switch (this.underflowY) {
      case -1:
        t = 0;
        break;
      case 1:
        t = this.parent.screenHeight - this.parent.screenWorldHeight;
        break;
      default:
        t = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
    }
    return t;
  }
  oob() {
    const t = this.options.bounceBox;
    if (t) {
      const e = typeof t.x > "u" ? 0 : t.x, n = typeof t.y > "u" ? 0 : t.y, i = typeof t.width > "u" ? this.parent.worldWidth : t.width, s = typeof t.height > "u" ? this.parent.worldHeight : t.height;
      return {
        left: this.parent.left < e,
        right: this.parent.right > i,
        top: this.parent.top < n,
        bottom: this.parent.bottom > s,
        topLeft: new c(
          e * this.parent.scale.x,
          n * this.parent.scale.y
        ),
        bottomRight: new c(
          i * this.parent.scale.x - this.parent.screenWidth,
          s * this.parent.scale.y - this.parent.screenHeight
        )
      };
    }
    return {
      left: this.parent.left < 0,
      right: this.parent.right > this.parent.worldWidth,
      top: this.parent.top < 0,
      bottom: this.parent.bottom > this.parent.worldHeight,
      topLeft: new c(0, 0),
      bottomRight: new c(
        this.parent.worldWidth * this.parent.scale.x - this.parent.screenWidth,
        this.parent.worldHeight * this.parent.scale.y - this.parent.screenHeight
      )
    };
  }
  bounce() {
    var s, h;
    if (this.paused)
      return;
    let t, e = this.parent.plugins.get("decelerate", !0);
    e && (e.x || e.y) && (e.x && e.percentChangeX === ((s = e.options) == null ? void 0 : s.friction) || e.y && e.percentChangeY === ((h = e.options) == null ? void 0 : h.friction)) && (t = this.oob(), (t.left && this.left || t.right && this.right) && (e.percentChangeX = this.options.friction), (t.top && this.top || t.bottom && this.bottom) && (e.percentChangeY = this.options.friction));
    const n = this.parent.plugins.get("drag", !0) || {}, i = this.parent.plugins.get("pinch", !0) || {};
    if (e = e || {}, !(n != null && n.active) && !(i != null && i.active) && (!this.toX || !this.toY) && (!e.x || !e.y)) {
      t = t || this.oob();
      const o = t.topLeft, r = t.bottomRight;
      if (!this.toX && !e.x) {
        let a = null;
        t.left && this.left ? a = this.parent.screenWorldWidth < this.parent.screenWidth ? this.calcUnderflowX() : -o.x : t.right && this.right && (a = this.parent.screenWorldWidth < this.parent.screenWidth ? this.calcUnderflowX() : -r.x), a !== null && this.parent.x !== a && (this.toX = { time: 0, start: this.parent.x, delta: a - this.parent.x, end: a }, this.parent.emit("bounce-x-start", this.parent));
      }
      if (!this.toY && !e.y) {
        let a = null;
        t.top && this.top ? a = this.parent.screenWorldHeight < this.parent.screenHeight ? this.calcUnderflowY() : -o.y : t.bottom && this.bottom && (a = this.parent.screenWorldHeight < this.parent.screenHeight ? this.calcUnderflowY() : -r.y), a !== null && this.parent.y !== a && (this.toY = { time: 0, start: this.parent.y, delta: a - this.parent.y, end: a }, this.parent.emit("bounce-y-start", this.parent));
      }
    }
  }
  reset() {
    this.toX = this.toY = null, this.bounce();
  }
}
const Y = {
  left: !1,
  right: !1,
  top: !1,
  bottom: !1,
  direction: null,
  underflow: "center"
};
class X extends u {
  /**
   * This is called by {@link Viewport.clamp}.
   */
  constructor(t, e = {}) {
    super(t), this.options = Object.assign({}, Y, e), this.options.direction && (this.options.left = this.options.direction === "x" || this.options.direction === "all" ? !0 : null, this.options.right = this.options.direction === "x" || this.options.direction === "all" ? !0 : null, this.options.top = this.options.direction === "y" || this.options.direction === "all" ? !0 : null, this.options.bottom = this.options.direction === "y" || this.options.direction === "all" ? !0 : null), this.parseUnderflow(), this.last = { x: null, y: null, scaleX: null, scaleY: null }, this.update();
  }
  parseUnderflow() {
    const t = this.options.underflow.toLowerCase();
    t === "none" ? this.noUnderflow = !0 : t === "center" ? (this.underflowX = this.underflowY = 0, this.noUnderflow = !1) : (this.underflowX = t.indexOf("left") !== -1 ? -1 : t.indexOf("right") !== -1 ? 1 : 0, this.underflowY = t.indexOf("top") !== -1 ? -1 : t.indexOf("bottom") !== -1 ? 1 : 0, this.noUnderflow = !1);
  }
  move() {
    return this.update(), !1;
  }
  update() {
    if (this.paused || this.parent.x === this.last.x && this.parent.y === this.last.y && this.parent.scale.x === this.last.scaleX && this.parent.scale.y === this.last.scaleY)
      return;
    const t = new c(this.parent.x, this.parent.y), e = this.parent.plugins.decelerate || {};
    if (this.options.left !== null || this.options.right !== null) {
      let n = !1;
      if (!this.noUnderflow && this.parent.screenWorldWidth < this.parent.screenWidth)
        switch (this.underflowX) {
          case -1:
            this.parent.x !== 0 && (this.parent.x = 0, n = !0);
            break;
          case 1:
            this.parent.x !== this.parent.screenWidth - this.parent.screenWorldWidth && (this.parent.x = this.parent.screenWidth - this.parent.screenWorldWidth, n = !0);
            break;
          default:
            this.parent.x !== (this.parent.screenWidth - this.parent.screenWorldWidth) / 2 && (this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2, n = !0);
        }
      else
        this.options.left !== null && this.parent.left < (this.options.left === !0 ? 0 : this.options.left) && (this.parent.x = -(this.options.left === !0 ? 0 : this.options.left) * this.parent.scale.x, e.x = 0, n = !0), this.options.right !== null && this.parent.right > (this.options.right === !0 ? this.parent.worldWidth : this.options.right) && (this.parent.x = -(this.options.right === !0 ? this.parent.worldWidth : this.options.right) * this.parent.scale.x + this.parent.screenWidth, e.x = 0, n = !0);
      n && this.parent.emit("moved", { viewport: this.parent, original: t, type: "clamp-x" });
    }
    if (this.options.top !== null || this.options.bottom !== null) {
      let n = !1;
      if (!this.noUnderflow && this.parent.screenWorldHeight < this.parent.screenHeight)
        switch (this.underflowY) {
          case -1:
            this.parent.y !== 0 && (this.parent.y = 0, n = !0);
            break;
          case 1:
            this.parent.y !== this.parent.screenHeight - this.parent.screenWorldHeight && (this.parent.y = this.parent.screenHeight - this.parent.screenWorldHeight, n = !0);
            break;
          default:
            this.parent.y !== (this.parent.screenHeight - this.parent.screenWorldHeight) / 2 && (this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2, n = !0);
        }
      else
        this.options.top !== null && this.parent.top < (this.options.top === !0 ? 0 : this.options.top) && (this.parent.y = -(this.options.top === !0 ? 0 : this.options.top) * this.parent.scale.y, e.y = 0, n = !0), this.options.bottom !== null && this.parent.bottom > (this.options.bottom === !0 ? this.parent.worldHeight : this.options.bottom) && (this.parent.y = -(this.options.bottom === !0 ? this.parent.worldHeight : this.options.bottom) * this.parent.scale.y + this.parent.screenHeight, e.y = 0, n = !0);
      n && this.parent.emit("moved", { viewport: this.parent, original: t, type: "clamp-y" });
    }
    this.last.x = this.parent.x, this.last.y = this.parent.y, this.last.scaleX = this.parent.scale.x, this.last.scaleY = this.parent.scale.y;
  }
  reset() {
    this.update();
  }
}
const z = {
  minWidth: null,
  minHeight: null,
  maxWidth: null,
  maxHeight: null,
  minScale: null,
  maxScale: null
};
class A extends u {
  /**
   * This is called by {@link Viewport.clampZoom}.
   */
  constructor(t, e = {}) {
    super(t), this.options = Object.assign({}, z, e), this.clamp();
  }
  resize() {
    this.clamp();
  }
  /** Clamp the viewport scale zoom) */
  clamp() {
    if (!this.paused) {
      if (this.options.minWidth || this.options.minHeight || this.options.maxWidth || this.options.maxHeight) {
        let t = this.parent.worldScreenWidth, e = this.parent.worldScreenHeight;
        if (this.options.minWidth !== null && t < this.options.minWidth) {
          const n = this.parent.scale.x;
          this.parent.fitWidth(this.options.minWidth, !1, !1, !0), this.parent.scale.y *= this.parent.scale.x / n, t = this.parent.worldScreenWidth, e = this.parent.worldScreenHeight, this.parent.emit("zoomed", { viewport: this.parent, type: "clamp-zoom" });
        }
        if (this.options.maxWidth !== null && t > this.options.maxWidth) {
          const n = this.parent.scale.x;
          this.parent.fitWidth(this.options.maxWidth, !1, !1, !0), this.parent.scale.y *= this.parent.scale.x / n, t = this.parent.worldScreenWidth, e = this.parent.worldScreenHeight, this.parent.emit("zoomed", { viewport: this.parent, type: "clamp-zoom" });
        }
        if (this.options.minHeight !== null && e < this.options.minHeight) {
          const n = this.parent.scale.y;
          this.parent.fitHeight(this.options.minHeight, !1, !1, !0), this.parent.scale.x *= this.parent.scale.y / n, t = this.parent.worldScreenWidth, e = this.parent.worldScreenHeight, this.parent.emit("zoomed", { viewport: this.parent, type: "clamp-zoom" });
        }
        if (this.options.maxHeight !== null && e > this.options.maxHeight) {
          const n = this.parent.scale.y;
          this.parent.fitHeight(this.options.maxHeight, !1, !1, !0), this.parent.scale.x *= this.parent.scale.y / n, this.parent.emit("zoomed", { viewport: this.parent, type: "clamp-zoom" });
        }
      } else if (this.options.minScale || this.options.maxScale) {
        const t = { x: null, y: null }, e = { x: null, y: null };
        if (typeof this.options.minScale == "number")
          t.x = this.options.minScale, t.y = this.options.minScale;
        else if (this.options.minScale !== null) {
          const s = this.options.minScale;
          t.x = typeof s.x > "u" ? null : s.x, t.y = typeof s.y > "u" ? null : s.y;
        }
        if (typeof this.options.maxScale == "number")
          e.x = this.options.maxScale, e.y = this.options.maxScale;
        else if (this.options.maxScale !== null) {
          const s = this.options.maxScale;
          e.x = typeof s.x > "u" ? null : s.x, e.y = typeof s.y > "u" ? null : s.y;
        }
        let n = this.parent.scale.x, i = this.parent.scale.y;
        t.x !== null && n < t.x && (n = t.x), e.x !== null && n > e.x && (n = e.x), t.y !== null && i < t.y && (i = t.y), e.y !== null && i > e.y && (i = e.y), (n !== this.parent.scale.x || i !== this.parent.scale.y) && (this.parent.scale.set(n, i), this.parent.emit("zoomed", { viewport: this.parent, type: "clamp-zoom" }));
      }
    }
  }
  reset() {
    this.clamp();
  }
}
const _ = {
  friction: 0.98,
  bounce: 0.8,
  minSpeed: 0.01
}, d = 16;
class T extends u {
  /**
   * This is called by {@link Viewport.decelerate}.
   */
  constructor(t, e = {}) {
    super(t), this.options = Object.assign({}, _, e), this.saved = [], this.timeSinceRelease = 0, this.reset(), this.parent.on("moved", (n) => this.handleMoved(n));
  }
  down() {
    return this.saved = [], this.x = this.y = null, !1;
  }
  isActive() {
    return !!(this.x || this.y);
  }
  move() {
    if (this.paused)
      return !1;
    const t = this.parent.input.count();
    return (t === 1 || t > 1 && !this.parent.plugins.get("pinch", !0)) && (this.saved.push({ x: this.parent.x, y: this.parent.y, time: performance.now() }), this.saved.length > 60 && this.saved.splice(0, 30)), !1;
  }
  /** Listener to viewport's "moved" event. */
  handleMoved(t) {
    if (this.saved.length) {
      const e = this.saved[this.saved.length - 1];
      t.type === "clamp-x" && t.original ? e.x === t.original.x && (e.x = this.parent.x) : t.type === "clamp-y" && t.original && e.y === t.original.y && (e.y = this.parent.y);
    }
  }
  up() {
    if (this.parent.input.count() === 0 && this.saved.length) {
      const t = performance.now();
      for (const e of this.saved)
        if (e.time >= t - 100) {
          const n = t - e.time;
          this.x = (this.parent.x - e.x) / n, this.y = (this.parent.y - e.y) / n, this.percentChangeX = this.percentChangeY = this.options.friction, this.timeSinceRelease = 0;
          break;
        }
    }
    return !1;
  }
  /**
   * Manually activate deceleration, starting from the (x, y) velocity components passed in the options.
   *
   * @param {object} options
   * @param {number} [options.x] - Specify x-component of initial velocity.
   * @param {number} [options.y] - Specify y-component of initial velocity.
   */
  activate(t) {
    t = t || {}, typeof t.x < "u" && (this.x = t.x, this.percentChangeX = this.options.friction), typeof t.y < "u" && (this.y = t.y, this.percentChangeY = this.options.friction);
  }
  update(t) {
    if (this.paused)
      return;
    const e = this.x || this.y, n = this.timeSinceRelease, i = this.timeSinceRelease + t;
    if (this.x) {
      const s = this.percentChangeX, h = Math.log(s);
      this.parent.x += this.x * d / h * (Math.pow(s, i / d) - Math.pow(s, n / d)), this.x *= Math.pow(this.percentChangeX, t / d);
    }
    if (this.y) {
      const s = this.percentChangeY, h = Math.log(s);
      this.parent.y += this.y * d / h * (Math.pow(s, i / d) - Math.pow(s, n / d)), this.y *= Math.pow(this.percentChangeY, t / d);
    }
    this.timeSinceRelease += t, this.x && this.y ? Math.abs(this.x) < this.options.minSpeed && Math.abs(this.y) < this.options.minSpeed && (this.x = 0, this.y = 0) : (Math.abs(this.x || 0) < this.options.minSpeed && (this.x = 0), Math.abs(this.y || 0) < this.options.minSpeed && (this.y = 0)), e && this.parent.emit("moved", { viewport: this.parent, type: "decelerate" });
  }
  reset() {
    this.x = this.y = null;
  }
}
const E = {
  direction: "all",
  pressDrag: !0,
  wheel: !0,
  wheelScroll: 1,
  reverse: !1,
  clampWheel: !1,
  underflow: "center",
  factor: 1,
  mouseButtons: "all",
  keyToPress: null,
  ignoreKeyToPressOnTouch: !1,
  lineHeight: 20,
  wheelSwapAxes: !1
};
class D extends u {
  /**
   * This is called by {@link Viewport.drag}.
   */
  constructor(t, e = {}) {
    super(t), this.windowEventHandlers = [], this.options = Object.assign({}, E, e), this.moved = !1, this.reverse = this.options.reverse ? 1 : -1, this.xDirection = !this.options.direction || this.options.direction === "all" || this.options.direction === "x", this.yDirection = !this.options.direction || this.options.direction === "all" || this.options.direction === "y", this.keyIsPressed = !1, this.parseUnderflow(), this.mouseButtons(this.options.mouseButtons), this.options.keyToPress && this.handleKeyPresses(this.options.keyToPress);
  }
  /**
   * Handles keypress events and set the keyIsPressed boolean accordingly
   *
   * @param {array} codes - key codes that can be used to trigger drag event
   */
  handleKeyPresses(t) {
    const e = (i) => {
      t.includes(i.code) && (this.keyIsPressed = !0);
    }, n = (i) => {
      t.includes(i.code) && (this.keyIsPressed = !1);
    };
    this.addWindowEventHandler("keyup", n), this.addWindowEventHandler("keydown", e);
  }
  addWindowEventHandler(t, e) {
    typeof window > "u" || (window.addEventListener(t, e), this.windowEventHandlers.push({ event: t, handler: e }));
  }
  destroy() {
    typeof window > "u" || this.windowEventHandlers.forEach(({ event: t, handler: e }) => {
      window.removeEventListener(t, e);
    });
  }
  /**
   * initialize mousebuttons array
   * @param {string} buttons
   */
  mouseButtons(t) {
    !t || t === "all" ? this.mouse = [!0, !0, !0] : this.mouse = [
      t.indexOf("left") !== -1,
      t.indexOf("middle") !== -1,
      t.indexOf("right") !== -1
    ];
  }
  parseUnderflow() {
    const t = this.options.underflow.toLowerCase();
    t === "center" ? (this.underflowX = 0, this.underflowY = 0) : (t.includes("left") ? this.underflowX = -1 : t.includes("right") ? this.underflowX = 1 : this.underflowX = 0, t.includes("top") ? this.underflowY = -1 : t.includes("bottom") ? this.underflowY = 1 : this.underflowY = 0);
  }
  /**
   * @param {PIXI.FederatedPointerEvent} event
   * @returns {boolean}
   */
  checkButtons(t) {
    const e = t.pointerType === "mouse", n = this.parent.input.count();
    return !!((n === 1 || n > 1 && !this.parent.plugins.get("pinch", !0)) && (!e || this.mouse[t.button]));
  }
  /**
   * @param {PIXI.FederatedPointerEvent} event
   * @returns {boolean}
   */
  checkKeyPress(t) {
    return !this.options.keyToPress || this.keyIsPressed || this.options.ignoreKeyToPressOnTouch && t.data.pointerType === "touch";
  }
  down(t) {
    return this.paused || !this.options.pressDrag ? !1 : this.checkButtons(t) && this.checkKeyPress(t) ? (this.last = { x: t.global.x, y: t.global.y }, this.current = t.pointerId, !0) : (this.last = null, !1);
  }
  get active() {
    return this.moved;
  }
  move(t) {
    if (this.paused || !this.options.pressDrag)
      return !1;
    if (this.last && this.current === t.data.pointerId) {
      const e = t.global.x, n = t.global.y, i = this.parent.input.count();
      if (i === 1 || i > 1 && !this.parent.plugins.get("pinch", !0)) {
        const s = e - this.last.x, h = n - this.last.y;
        if (this.moved || this.xDirection && this.parent.input.checkThreshold(s) || this.yDirection && this.parent.input.checkThreshold(h)) {
          const o = { x: e, y: n };
          return this.xDirection && (this.parent.x += (o.x - this.last.x) * this.options.factor), this.yDirection && (this.parent.y += (o.y - this.last.y) * this.options.factor), this.last = o, this.moved || this.parent.emit("drag-start", {
            event: t,
            screen: new c(this.last.x, this.last.y),
            world: this.parent.toWorld(new c(this.last.x, this.last.y)),
            viewport: this.parent
          }), this.moved = !0, this.parent.emit("moved", { viewport: this.parent, type: "drag" }), !0;
        }
      } else
        this.moved = !1;
    }
    return !1;
  }
  up(t) {
    if (this.paused)
      return !1;
    const e = this.parent.input.touches;
    if (e.length === 1) {
      const n = e[0];
      return n.last && (this.last = { x: n.last.x, y: n.last.y }, this.current = n.id), this.moved = !1, !0;
    } else if (this.last && this.moved) {
      const n = new c(this.last.x, this.last.y);
      return this.parent.emit("drag-end", {
        event: t,
        screen: n,
        world: this.parent.toWorld(n),
        viewport: this.parent
      }), this.last = null, this.moved = !1, !0;
    }
    return !1;
  }
  wheel(t) {
    if (this.paused)
      return !1;
    if (this.options.wheel) {
      const e = this.parent.plugins.get("wheel", !0);
      if (!e || !e.options.wheelZoom && !t.ctrlKey) {
        const n = t.deltaMode ? this.options.lineHeight : 1, i = [t.deltaX, t.deltaY], [s, h] = this.options.wheelSwapAxes ? i.reverse() : i;
        return this.xDirection && (this.parent.x += s * n * this.options.wheelScroll * this.reverse), this.yDirection && (this.parent.y += h * n * this.options.wheelScroll * this.reverse), this.options.clampWheel && this.clamp(), this.parent.emit("wheel-scroll", this.parent), this.parent.emit("moved", { viewport: this.parent, type: "wheel" }), this.parent.options.passiveWheel || t.preventDefault(), this.parent.options.stopPropagation && t.stopPropagation(), !0;
      }
    }
    return !1;
  }
  resume() {
    this.last = null, this.paused = !1;
  }
  clamp() {
    const t = this.parent.plugins.get("decelerate", !0) || {};
    if (this.options.clampWheel !== "y")
      if (this.parent.screenWorldWidth < this.parent.screenWidth)
        switch (this.underflowX) {
          case -1:
            this.parent.x = 0;
            break;
          case 1:
            this.parent.x = this.parent.screenWidth - this.parent.screenWorldWidth;
            break;
          default:
            this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
        }
      else
        this.parent.left < 0 ? (this.parent.x = 0, t.x = 0) : this.parent.right > this.parent.worldWidth && (this.parent.x = -this.parent.worldWidth * this.parent.scale.x + this.parent.screenWidth, t.x = 0);
    if (this.options.clampWheel !== "x")
      if (this.parent.screenWorldHeight < this.parent.screenHeight)
        switch (this.underflowY) {
          case -1:
            this.parent.y = 0;
            break;
          case 1:
            this.parent.y = this.parent.screenHeight - this.parent.screenWorldHeight;
            break;
          default:
            this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
        }
      else
        this.parent.top < 0 && (this.parent.y = 0, t.y = 0), this.parent.bottom > this.parent.worldHeight && (this.parent.y = -this.parent.worldHeight * this.parent.scale.y + this.parent.screenHeight, t.y = 0);
  }
}
const L = {
  speed: 0,
  acceleration: null,
  radius: null
};
class U extends u {
  /**
   * This is called by {@link Viewport.follow}.
   *
   * @param parent
   * @param target - target to follow
   * @param options
   */
  constructor(t, e, n = {}) {
    super(t), this.target = e, this.options = Object.assign({}, L, n), this.velocity = { x: 0, y: 0 };
  }
  update(t) {
    if (this.paused)
      return;
    const e = this.parent.center;
    let n = this.target.x, i = this.target.y;
    if (this.options.radius)
      if (Math.sqrt(Math.pow(this.target.y - e.y, 2) + Math.pow(this.target.x - e.x, 2)) > this.options.radius) {
        const r = Math.atan2(this.target.y - e.y, this.target.x - e.x);
        n = this.target.x - Math.cos(r) * this.options.radius, i = this.target.y - Math.sin(r) * this.options.radius;
      } else
        return;
    const s = n - e.x, h = i - e.y;
    if (s || h)
      if (this.options.speed)
        if (this.options.acceleration) {
          const o = Math.atan2(i - e.y, n - e.x), r = Math.sqrt(Math.pow(s, 2) + Math.pow(h, 2));
          if (r) {
            const a = (Math.pow(this.velocity.x, 2) + Math.pow(this.velocity.y, 2)) / (2 * this.options.acceleration);
            r > a ? this.velocity = {
              x: Math.min(this.velocity.x + (this.options.acceleration * t, this.options.speed)),
              y: Math.min(this.velocity.y + (this.options.acceleration * t, this.options.speed))
            } : this.velocity = {
              x: Math.max(this.velocity.x - this.options.acceleration * this.options.speed, 0),
              y: Math.max(this.velocity.y - this.options.acceleration * this.options.speed, 0)
            };
            const p = Math.cos(o) * this.velocity.x, f = Math.sin(o) * this.velocity.y, g = Math.abs(p) > Math.abs(s) ? n : e.x + p, w = Math.abs(f) > Math.abs(h) ? i : e.y + f;
            this.parent.moveCenter(g, w), this.parent.emit("moved", { viewport: this.parent, type: "follow" });
          }
        } else {
          const o = Math.atan2(i - e.y, n - e.x), r = Math.cos(o) * this.options.speed, a = Math.sin(o) * this.options.speed, p = Math.abs(r) > Math.abs(s) ? n : e.x + r, f = Math.abs(a) > Math.abs(h) ? i : e.y + a;
          this.parent.moveCenter(p, f), this.parent.emit("moved", { viewport: this.parent, type: "follow" });
        }
      else
        this.parent.moveCenter(n, i), this.parent.emit("moved", { viewport: this.parent, type: "follow" });
  }
}
const F = {
  radius: null,
  distance: null,
  top: null,
  bottom: null,
  left: null,
  right: null,
  speed: 8,
  reverse: !1,
  noDecelerate: !1,
  linear: !1,
  allowButtons: !1
};
class B extends u {
  /**
   * This is called by {@link Viewport.mouseEdges}.
   */
  constructor(t, e = {}) {
    super(t), this.options = Object.assign({}, F, e), this.reverse = this.options.reverse ? 1 : -1, this.radiusSquared = typeof this.options.radius == "number" ? Math.pow(this.options.radius, 2) : null, this.resize();
  }
  resize() {
    const t = this.options.distance;
    t !== null ? (this.left = t, this.top = t, this.right = this.parent.screenWidth - t, this.bottom = this.parent.screenHeight - t) : this.options.radius || (this.left = this.options.left, this.top = this.options.top, this.right = this.options.right === null ? null : this.parent.screenWidth - this.options.right, this.bottom = this.options.bottom === null ? null : this.parent.screenHeight - this.options.bottom);
  }
  down() {
    return this.paused || this.options.allowButtons || (this.horizontal = this.vertical = null), !1;
  }
  move(t) {
    if (this.paused || t.pointerType !== "mouse" && t.pointerId !== 1 || !this.options.allowButtons && t.buttons !== 0)
      return !1;
    const e = t.global.x, n = t.global.y;
    if (this.radiusSquared) {
      const i = this.parent.toScreen(this.parent.center);
      if (Math.pow(i.x - e, 2) + Math.pow(i.y - n, 2) >= this.radiusSquared) {
        const h = Math.atan2(i.y - n, i.x - e);
        this.options.linear ? (this.horizontal = Math.round(Math.cos(h)) * this.options.speed * this.reverse * (60 / 1e3), this.vertical = Math.round(Math.sin(h)) * this.options.speed * this.reverse * (60 / 1e3)) : (this.horizontal = Math.cos(h) * this.options.speed * this.reverse * (60 / 1e3), this.vertical = Math.sin(h) * this.options.speed * this.reverse * (60 / 1e3));
      } else
        this.horizontal && this.decelerateHorizontal(), this.vertical && this.decelerateVertical(), this.horizontal = this.vertical = 0;
    } else
      this.left !== null && e < this.left ? this.horizontal = Number(this.reverse) * this.options.speed * (60 / 1e3) : this.right !== null && e > this.right ? this.horizontal = -1 * this.reverse * this.options.speed * (60 / 1e3) : (this.decelerateHorizontal(), this.horizontal = 0), this.top !== null && n < this.top ? this.vertical = Number(this.reverse) * this.options.speed * (60 / 1e3) : this.bottom !== null && n > this.bottom ? this.vertical = -1 * this.reverse * this.options.speed * (60 / 1e3) : (this.decelerateVertical(), this.vertical = 0);
    return !1;
  }
  decelerateHorizontal() {
    const t = this.parent.plugins.get("decelerate", !0);
    this.horizontal && t && !this.options.noDecelerate && t.activate({ x: this.horizontal * this.options.speed * this.reverse / (1e3 / 60) });
  }
  decelerateVertical() {
    const t = this.parent.plugins.get("decelerate", !0);
    this.vertical && t && !this.options.noDecelerate && t.activate({ y: this.vertical * this.options.speed * this.reverse / (1e3 / 60) });
  }
  up() {
    return this.paused || (this.horizontal && this.decelerateHorizontal(), this.vertical && this.decelerateVertical(), this.horizontal = this.vertical = null), !1;
  }
  update() {
    if (!this.paused && (this.horizontal || this.vertical)) {
      const t = this.parent.center;
      this.horizontal && (t.x += this.horizontal * this.options.speed), this.vertical && (t.y += this.vertical * this.options.speed), this.parent.moveCenter(t), this.parent.emit("moved", { viewport: this.parent, type: "mouse-edges" });
    }
  }
}
const V = {
  noDrag: !1,
  percent: 1,
  center: null,
  factor: 1,
  axis: "all"
};
class N extends u {
  /**
   * This is called by {@link Viewport.pinch}.
   */
  constructor(t, e = {}) {
    super(t), this.active = !1, this.pinching = !1, this.moved = !1, this.options = Object.assign({}, V, e);
  }
  down() {
    return this.parent.input.count() >= 2 ? (this.active = !0, !0) : !1;
  }
  isAxisX() {
    return ["all", "x"].includes(this.options.axis);
  }
  isAxisY() {
    return ["all", "y"].includes(this.options.axis);
  }
  move(t) {
    if (this.paused || !this.active)
      return !1;
    const e = t.global.x, n = t.global.y, i = this.parent.input.touches;
    if (i.length >= 2) {
      const s = i[0], h = i[1], o = s.last && h.last ? Math.sqrt(Math.pow(h.last.x - s.last.x, 2) + Math.pow(h.last.y - s.last.y, 2)) : null;
      if (s.id === t.pointerId ? s.last = { x: e, y: n, data: t } : h.id === t.pointerId && (h.last = { x: e, y: n, data: t }), o) {
        let r;
        const a = new c(
          s.last.x + (h.last.x - s.last.x) / 2,
          s.last.y + (h.last.y - s.last.y) / 2
        );
        this.options.center || (r = this.parent.toLocal(a));
        let p = Math.sqrt(Math.pow(
          h.last.x - s.last.x,
          2
        ) + Math.pow(h.last.y - s.last.y, 2));
        p = p === 0 ? p = 1e-10 : p;
        const f = (1 - o / p) * this.options.percent * (this.isAxisX() ? this.parent.scale.x : this.parent.scale.y);
        this.isAxisX() && (this.parent.scale.x += f), this.isAxisY() && (this.parent.scale.y += f), this.parent.emit("zoomed", { viewport: this.parent, type: "pinch", center: a });
        const g = this.parent.plugins.get("clamp-zoom", !0);
        if (g && g.clamp(), this.options.center)
          this.parent.moveCenter(this.options.center);
        else {
          const w = this.parent.toGlobal(r);
          this.parent.x += (a.x - w.x) * this.options.factor, this.parent.y += (a.y - w.y) * this.options.factor, this.parent.emit("moved", { viewport: this.parent, type: "pinch" });
        }
        !this.options.noDrag && this.lastCenter && (this.parent.x += (a.x - this.lastCenter.x) * this.options.factor, this.parent.y += (a.y - this.lastCenter.y) * this.options.factor, this.parent.emit("moved", { viewport: this.parent, type: "pinch" })), this.lastCenter = a, this.moved = !0;
      } else
        this.pinching || (this.parent.emit("pinch-start", this.parent), this.pinching = !0);
      return !0;
    }
    return !1;
  }
  up() {
    return this.pinching && this.parent.input.touches.length <= 1 ? (this.active = !1, this.lastCenter = null, this.pinching = !1, this.moved = !1, this.parent.emit("pinch-end", this.parent), !0) : !1;
  }
}
const Z = {
  topLeft: !1,
  friction: 0.8,
  time: 1e3,
  ease: "easeInOutSine",
  interrupt: !0,
  removeOnComplete: !1,
  removeOnInterrupt: !1,
  forceStart: !1
};
class j extends u {
  /**
   * This is called by {@link Viewport.snap}.
   */
  constructor(t, e, n, i = {}) {
    super(t), this.options = Object.assign({}, Z, i), this.ease = x(i.ease, "easeInOutSine"), this.x = e, this.y = n, this.options.forceStart && this.snapStart();
  }
  snapStart() {
    this.percent = 0, this.snapping = { time: 0 };
    const t = this.options.topLeft ? this.parent.corner : this.parent.center;
    this.deltaX = this.x - t.x, this.deltaY = this.y - t.y, this.startX = t.x, this.startY = t.y, this.parent.emit("snap-start", this.parent);
  }
  wheel() {
    return this.options.removeOnInterrupt && this.parent.plugins.remove("snap"), !1;
  }
  down() {
    return this.options.removeOnInterrupt ? this.parent.plugins.remove("snap") : this.options.interrupt && (this.snapping = null), !1;
  }
  up() {
    if (this.parent.input.count() === 0) {
      const t = this.parent.plugins.get("decelerate", !0);
      t && (t.x || t.y) && (t.percentChangeX = t.percentChangeY = this.options.friction);
    }
    return !1;
  }
  update(t) {
    if (!this.paused && !(this.options.interrupt && this.parent.input.count() !== 0))
      if (this.snapping) {
        const e = this.snapping;
        e.time += t;
        let n, i, s;
        const h = this.startX, o = this.startY, r = this.deltaX, a = this.deltaY;
        if (e.time > this.options.time)
          n = !0, i = h + r, s = o + a;
        else {
          const p = this.ease(e.time, 0, 1, this.options.time);
          i = h + r * p, s = o + a * p;
        }
        this.options.topLeft ? this.parent.moveCorner(i, s) : this.parent.moveCenter(i, s), this.parent.emit("moved", { viewport: this.parent, type: "snap" }), n && (this.options.removeOnComplete && this.parent.plugins.remove("snap"), this.parent.emit("snap-end", this.parent), this.snapping = null);
      } else {
        const e = this.options.topLeft ? this.parent.corner : this.parent.center;
        (e.x !== this.x || e.y !== this.y) && this.snapStart();
      }
  }
}
const R = {
  width: 0,
  height: 0,
  time: 1e3,
  ease: "easeInOutSine",
  center: null,
  interrupt: !0,
  removeOnComplete: !1,
  removeOnInterrupt: !1,
  forceStart: !1,
  noMove: !1
};
class K extends u {
  /**
   * This is called by {@link Viewport.snapZoom}.
   */
  constructor(t, e = {}) {
    super(t), this.options = Object.assign({}, R, e), this.ease = x(this.options.ease), this.xIndependent = !1, this.yIndependent = !1, this.xScale = 0, this.yScale = 0, this.options.width > 0 && (this.xScale = t.screenWidth / this.options.width, this.xIndependent = !0), this.options.height > 0 && (this.yScale = t.screenHeight / this.options.height, this.yIndependent = !0), this.xScale = this.xIndependent ? this.xScale : this.yScale, this.yScale = this.yIndependent ? this.yScale : this.xScale, this.options.time === 0 ? (t.container.scale.x = this.xScale, t.container.scale.y = this.yScale, this.options.removeOnComplete && this.parent.plugins.remove("snap-zoom")) : e.forceStart && this.createSnapping();
  }
  createSnapping() {
    const t = this.parent.worldScreenWidth, e = this.parent.worldScreenHeight, n = this.parent.screenWidth / this.xScale, i = this.parent.screenHeight / this.yScale;
    this.snapping = {
      time: 0,
      startX: t,
      startY: e,
      deltaX: n - t,
      deltaY: i - e
    }, this.parent.emit("snap-zoom-start", this.parent);
  }
  resize() {
    this.snapping = null, this.options.width > 0 && (this.xScale = this.parent.screenWidth / this.options.width), this.options.height > 0 && (this.yScale = this.parent.screenHeight / this.options.height), this.xScale = this.xIndependent ? this.xScale : this.yScale, this.yScale = this.yIndependent ? this.yScale : this.xScale;
  }
  wheel() {
    return this.options.removeOnInterrupt && this.parent.plugins.remove("snap-zoom"), !1;
  }
  down() {
    return this.options.removeOnInterrupt ? this.parent.plugins.remove("snap-zoom") : this.options.interrupt && (this.snapping = null), !1;
  }
  update(t) {
    if (this.paused || this.options.interrupt && this.parent.input.count() !== 0)
      return;
    let e;
    if (!this.options.center && !this.options.noMove && (e = this.parent.center), !this.snapping)
      (this.parent.scale.x !== this.xScale || this.parent.scale.y !== this.yScale) && this.createSnapping();
    else if (this.snapping) {
      const n = this.snapping;
      if (n.time += t, n.time >= this.options.time)
        this.parent.scale.set(this.xScale, this.yScale), this.options.removeOnComplete && this.parent.plugins.remove("snap-zoom"), this.parent.emit("snap-zoom-end", this.parent), this.snapping = null;
      else {
        const s = this.snapping, h = this.ease(s.time, s.startX, s.deltaX, this.options.time), o = this.ease(s.time, s.startY, s.deltaY, this.options.time);
        this.parent.scale.x = this.parent.screenWidth / h, this.parent.scale.y = this.parent.screenHeight / o;
      }
      const i = this.parent.plugins.get("clamp-zoom", !0);
      i && i.clamp(), this.options.noMove || (this.options.center ? this.parent.moveCenter(this.options.center) : this.parent.moveCenter(e));
    }
  }
  resume() {
    this.snapping = null, super.resume();
  }
}
const q = {
  percent: 0.1,
  smooth: !1,
  interrupt: !0,
  reverse: !1,
  center: null,
  lineHeight: 20,
  axis: "all",
  keyToPress: null,
  trackpadPinch: !1,
  wheelZoom: !0
};
class G extends u {
  /**
   * This is called by {@link Viewport.wheel}.
   */
  constructor(t, e = {}) {
    super(t), this.options = Object.assign({}, q, e), this.keyIsPressed = !1, this.options.keyToPress && this.handleKeyPresses(this.options.keyToPress);
  }
  /**
   * Handles keypress events and set the keyIsPressed boolean accordingly
   *
   * @param {array} codes - key codes that can be used to trigger zoom event
   */
  handleKeyPresses(t) {
    typeof window > "u" || (window.addEventListener("keydown", (e) => {
      t.includes(e.code) && (this.keyIsPressed = !0);
    }), window.addEventListener("keyup", (e) => {
      t.includes(e.code) && (this.keyIsPressed = !1);
    }));
  }
  checkKeyPress() {
    return !this.options.keyToPress || this.keyIsPressed;
  }
  down() {
    return this.options.interrupt && (this.smoothing = null), !1;
  }
  isAxisX() {
    return ["all", "x"].includes(this.options.axis);
  }
  isAxisY() {
    return ["all", "y"].includes(this.options.axis);
  }
  update() {
    if (this.smoothing) {
      const t = this.smoothingCenter, e = this.smoothing;
      let n;
      this.options.center || (n = this.parent.toLocal(t)), this.isAxisX() && (this.parent.scale.x += e.x), this.isAxisY() && (this.parent.scale.y += e.y), this.parent.emit("zoomed", { viewport: this.parent, type: "wheel" });
      const i = this.parent.plugins.get("clamp-zoom", !0);
      if (i && i.clamp(), this.options.center)
        this.parent.moveCenter(this.options.center);
      else {
        const s = this.parent.toGlobal(n);
        this.parent.x += t.x - s.x, this.parent.y += t.y - s.y;
      }
      this.parent.emit("moved", { viewport: this.parent, type: "wheel" }), this.smoothingCount++, this.smoothingCount >= this.options.smooth && (this.smoothing = null);
    }
  }
  pinch(t) {
    if (this.paused)
      return;
    const e = this.parent.input.getPointerPosition(t), n = -t.deltaY * (t.deltaMode ? this.options.lineHeight : 1) / 200, i = Math.pow(2, (1 + this.options.percent) * n);
    let s;
    this.options.center || (s = this.parent.toLocal(e)), this.isAxisX() && (this.parent.scale.x *= i), this.isAxisY() && (this.parent.scale.y *= i), this.parent.emit("zoomed", { viewport: this.parent, type: "wheel" });
    const h = this.parent.plugins.get("clamp-zoom", !0);
    if (h && h.clamp(), this.options.center)
      this.parent.moveCenter(this.options.center);
    else {
      const o = this.parent.toGlobal(s);
      this.parent.x += e.x - o.x, this.parent.y += e.y - o.y;
    }
    this.parent.emit("moved", { viewport: this.parent, type: "wheel" }), this.parent.emit(
      "wheel-start",
      { event: t, viewport: this.parent }
    );
  }
  wheel(t) {
    if (this.paused || !this.checkKeyPress())
      return !1;
    if (t.ctrlKey && this.options.trackpadPinch)
      this.pinch(t);
    else if (this.options.wheelZoom) {
      const e = this.parent.input.getPointerPosition(t), i = (this.options.reverse ? -1 : 1) * -t.deltaY * (t.deltaMode ? this.options.lineHeight : 1) / 500, s = Math.pow(2, (1 + this.options.percent) * i);
      if (this.options.smooth) {
        const h = {
          x: this.smoothing ? this.smoothing.x * (this.options.smooth - this.smoothingCount) : 0,
          y: this.smoothing ? this.smoothing.y * (this.options.smooth - this.smoothingCount) : 0
        };
        this.smoothing = {
          x: ((this.parent.scale.x + h.x) * s - this.parent.scale.x) / this.options.smooth,
          y: ((this.parent.scale.y + h.y) * s - this.parent.scale.y) / this.options.smooth
        }, this.smoothingCount = 0, this.smoothingCenter = e;
      } else {
        let h;
        this.options.center || (h = this.parent.toLocal(e)), this.isAxisX() && (this.parent.scale.x *= s), this.isAxisY() && (this.parent.scale.y *= s), this.parent.emit("zoomed", { viewport: this.parent, type: "wheel" });
        const o = this.parent.plugins.get("clamp-zoom", !0);
        if (o && o.clamp(), this.options.center)
          this.parent.moveCenter(this.options.center);
        else {
          const r = this.parent.toGlobal(h);
          this.parent.x += e.x - r.x, this.parent.y += e.y - r.y;
        }
      }
      this.parent.emit("moved", { viewport: this.parent, type: "wheel" }), this.parent.emit(
        "wheel-start",
        { event: t, viewport: this.parent }
      );
    }
    return !this.parent.options.passiveWheel;
  }
}
class Q {
  constructor(t) {
    this.viewport = t, this.touches = [], this.addListeners();
  }
  /** Add input listeners */
  addListeners() {
    this.viewport.eventMode = "static", this.viewport.forceHitArea || (this.viewport.hitArea = new y(0, 0, this.viewport.worldWidth, this.viewport.worldHeight)), this.viewport.on("pointerdown", this.down, this), this.viewport.options.allowPreserveDragOutside ? this.viewport.on("globalpointermove", this.move, this) : this.viewport.on("pointermove", this.move, this), this.viewport.on("pointerup", this.up, this), this.viewport.on("pointerupoutside", this.up, this), this.viewport.on("pointercancel", this.up, this), this.viewport.options.allowPreserveDragOutside || this.viewport.on("pointerleave", this.up, this), this.wheelFunction = (t) => this.handleWheel(t), this.viewport.options.events.domElement.addEventListener(
      "wheel",
      this.wheelFunction,
      { passive: this.viewport.options.passiveWheel }
    ), this.isMouseDown = !1;
  }
  /**
   * Removes all event listeners from viewport
   * (useful for cleanup of wheel when removing viewport)
   */
  destroy() {
    this.viewport.options.events.domElement.removeEventListener("wheel", this.wheelFunction);
  }
  /**
   * handle down events for viewport
   *
   * @param {PIXI.FederatedPointerEvent} event
   */
  down(t) {
    if (this.viewport.pause || !this.viewport.visible)
      return;
    if (t.pointerType === "mouse" ? this.isMouseDown = !0 : this.get(t.pointerId) || this.touches.push({ id: t.pointerId, last: null }), this.count() === 1) {
      this.last = t.global.clone();
      const n = this.viewport.plugins.get("decelerate", !0), i = this.viewport.plugins.get("bounce", !0);
      (!n || !n.isActive()) && (!i || !i.isActive()) ? this.clickedAvailable = !0 : this.clickedAvailable = !1;
    } else
      this.clickedAvailable = !1;
    this.viewport.plugins.down(t) && this.viewport.options.stopPropagation && t.stopPropagation();
  }
  /** Clears all pointer events */
  clear() {
    this.isMouseDown = !1, this.touches = [], this.last = null;
  }
  /**
   * @param {number} change
   * @returns whether change exceeds threshold
   */
  checkThreshold(t) {
    return Math.abs(t) >= this.viewport.threshold;
  }
  /** Handle move events for viewport */
  move(t) {
    if (this.viewport.pause || !this.viewport.visible)
      return;
    const e = this.viewport.plugins.move(t);
    if (this.clickedAvailable && this.last) {
      const n = t.global.x - this.last.x, i = t.global.y - this.last.y;
      (this.checkThreshold(n) || this.checkThreshold(i)) && (this.clickedAvailable = !1);
    }
    e && this.viewport.options.stopPropagation && t.stopPropagation();
  }
  /** Handle up events for viewport */
  up(t) {
    if (this.viewport.pause || !this.viewport.visible)
      return;
    t.pointerType === "mouse" && (this.isMouseDown = !1), t.pointerType !== "mouse" && this.remove(t.pointerId);
    const e = this.viewport.plugins.up(t);
    this.clickedAvailable && this.count() === 0 && this.last && (this.viewport.emit("clicked", {
      event: t,
      screen: this.last,
      world: this.viewport.toWorld(this.last),
      viewport: this.viewport
    }), this.clickedAvailable = !1), e && this.viewport.options.stopPropagation && t.stopPropagation();
  }
  /** Gets pointer position if this.interaction is set */
  getPointerPosition(t) {
    const e = new c();
    return this.viewport.options.events.mapPositionToPoint(e, t.clientX, t.clientY), e;
  }
  /** Handle wheel events */
  handleWheel(t) {
    if (this.viewport.pause || !this.viewport.visible)
      return;
    const e = this.viewport.toLocal(this.getPointerPosition(t));
    this.viewport.left <= e.x && e.x <= this.viewport.right && this.viewport.top <= e.y && e.y <= this.viewport.bottom && this.viewport.plugins.wheel(t) && !this.viewport.options.passiveWheel && t.preventDefault();
  }
  pause() {
    this.touches = [], this.isMouseDown = !1;
  }
  /** Get touch by id */
  get(t) {
    for (const e of this.touches)
      if (e.id === t)
        return e;
    return null;
  }
  /** Remove touch by number */
  remove(t) {
    for (let e = 0; e < this.touches.length; e++)
      if (this.touches[e].id === t) {
        this.touches.splice(e, 1);
        return;
      }
  }
  /**
   * @returns {number} count of mouse/touch pointers that are down on the viewport
   */
  count() {
    return (this.isMouseDown ? 1 : 0) + this.touches.length;
  }
}
const m = [
  "drag",
  "pinch",
  "wheel",
  "follow",
  "mouse-edges",
  "decelerate",
  "animate",
  "bounce",
  "snap-zoom",
  "clamp-zoom",
  "snap",
  "clamp"
];
class J {
  /** This is called by {@link Viewport} to initialize the {@link Viewport.plugins plugins}. */
  constructor(t) {
    this.viewport = t, this.list = [], this.plugins = {};
  }
  /**
   * Inserts a named plugin or a user plugin into the viewport
   * default plugin order: 'drag', 'pinch', 'wheel', 'follow', 'mouse-edges', 'decelerate', 'bounce',
   * 'snap-zoom', 'clamp-zoom', 'snap', 'clamp'
   *
   * @param {string} name of plugin
   * @param {Plugin} plugin - instantiated Plugin class
   * @param {number} index to insert userPlugin (otherwise inserts it at the end)
   */
  add(t, e, n = m.length) {
    const i = this.plugins[t];
    i && i.destroy(), this.plugins[t] = e;
    const s = m.indexOf(t);
    s !== -1 && m.splice(s, 1), m.splice(n, 0, t), this.sort();
  }
  /**
   * Get plugin
   *
   * @param {string} name of plugin
   * @param {boolean} [ignorePaused] return null if plugin is paused
   */
  get(t, e) {
    var n;
    return e && (n = this.plugins[t]) != null && n.paused ? null : this.plugins[t];
  }
  /**
   * Update all active plugins
   *
   * @internal
   * @ignore
   * @param {number} elapsed type in milliseconds since last update
   */
  update(t) {
    for (const e of this.list)
      e.update(t);
  }
  /**
   * Resize all active plugins
   *
   * @internal
   * @ignore
   */
  resize() {
    for (const t of this.list)
      t.resize();
  }
  /** Clamps and resets bounce and decelerate (as needed) after manually moving viewport */
  reset() {
    for (const t of this.list)
      t.reset();
  }
  /** removes all installed plugins */
  removeAll() {
    this.list.forEach((t) => {
      t.destroy();
    }), this.plugins = {}, this.sort();
  }
  /**
   * Removes installed plugin
   *
   * @param {string} name of plugin (e.g., 'drag', 'pinch')
   */
  remove(t) {
    var e;
    this.plugins[t] && ((e = this.plugins[t]) == null || e.destroy(), delete this.plugins[t], this.viewport.emit("plugin-remove", t), this.sort());
  }
  /**
   * Pause plugin
   *
   * @param {string} name of plugin (e.g., 'drag', 'pinch')
   */
  pause(t) {
    var e;
    (e = this.plugins[t]) == null || e.pause();
  }
  /**
   * Resume plugin
   *
   * @param {string} name of plugin (e.g., 'drag', 'pinch')
   */
  resume(t) {
    var e;
    (e = this.plugins[t]) == null || e.resume();
  }
  /**
   * Sort plugins according to PLUGIN_ORDER
   *
   * @internal
   * @ignore
   */
  sort() {
    this.list = [];
    for (const t of m)
      this.plugins[t] && this.list.push(this.plugins[t]);
  }
  /**
   * Handle down for all plugins
   *
   * @internal
   * @ignore
   */
  down(t) {
    let e = !1;
    for (const n of this.list)
      n.down(t) && (e = !0);
    return e;
  }
  /**
   * Handle move for all plugins
   *
   * @internal
   * @ignore
   */
  move(t) {
    let e = !1;
    for (const n of this.viewport.plugins.list)
      n.move(t) && (e = !0);
    return e;
  }
  /**
   * Handle up for all plugins
   *
   * @internal
   * @ignore
   */
  up(t) {
    let e = !1;
    for (const n of this.list)
      n.up(t) && (e = !0);
    return e;
  }
  /**
   * Handle wheel event for all plugins
   *
   * @internal
   * @ignore
   */
  wheel(t) {
    let e = !1;
    for (const n of this.list)
      n.wheel(t) && (e = !0);
    return e;
  }
}
const $ = {
  screenWidth: typeof window > "u" ? 0 : window.innerWidth,
  screenHeight: typeof window > "u" ? 0 : window.innerHeight,
  worldWidth: null,
  worldHeight: null,
  threshold: 5,
  passiveWheel: !0,
  stopPropagation: !1,
  forceHitArea: null,
  noTicker: !1,
  disableOnContextMenu: !1,
  ticker: b.shared,
  allowPreserveDragOutside: !1
};
class et extends H {
  /**
   * @param {IViewportOptions} ViewportOptions
   * @param {number} [options.screenWidth=window.innerWidth]
   * @param {number} [options.screenHeight=window.innerHeight]
   * @param {number} [options.worldWidth=this.width]
   * @param {number} [options.worldHeight=this.height]
   * @param {number} [options.threshold=5] number of pixels to move to trigger an input event (e.g., drag, pinch)
   * or disable a clicked event
   * @param {boolean} [options.passiveWheel=true] whether the 'wheel' event is set to passive (note: if false,
   * e.preventDefault() will be called when wheel is used over the viewport)
   * @param {boolean} [options.stopPropagation=false] whether to stopPropagation of events that impact the viewport
   * (except wheel events, see options.passiveWheel)
   * @param {HitArea} [options.forceHitArea] change the default hitArea from world size to a new value
   * @param {boolean} [options.noTicker] set this if you want to manually call update() function on each frame
   * @param {PIXI.Ticker} [options.ticker=PIXI.Ticker.shared] use this PIXI.ticker for updates
   * @param {PIXI.EventSystem} [options.events] EventSystem available from app.events or added manually and passed here
   * location on screen
   * @param {boolean} [options.disableOnContextMenu] remove oncontextmenu=() => {} from the pixi's events.domElement
   */
  constructor(t) {
    super(), this._disableOnContextMenu = (e) => e.preventDefault(), this.options = {
      ...$,
      ...t
    }, this.screenWidth = this.options.screenWidth, this.screenHeight = this.options.screenHeight, this._worldWidth = this.options.worldWidth, this._worldHeight = this.options.worldHeight, this.forceHitArea = this.options.forceHitArea, this.threshold = this.options.threshold, this.options.disableOnContextMenu && this.options.events.domElement.addEventListener("contextmenu", this._disableOnContextMenu), this.options.noTicker || (this.tickerFunction = () => this.update(this.options.ticker.elapsedMS), this.options.ticker.add(this.tickerFunction)), this.input = new Q(this), this.plugins = new J(this);
  }
  /** Overrides PIXI.Container's destroy to also remove the 'wheel' and PIXI.Ticker listeners */
  destroy(t) {
    !this.options.noTicker && this.tickerFunction && this.options.ticker.remove(this.tickerFunction), this.options.disableOnContextMenu && this.options.events.domElement.removeEventListener("contextmenu", this._disableOnContextMenu), this.input.destroy(), super.destroy(t);
  }
  /**
   * Update viewport on each frame.
   *
   * By default, you do not need to call this unless you set `options.noTicker=true`.
   *
   * @param {number} elapsed time in milliseconds since last update
   */
  update(t) {
    this.pause || (this.plugins.update(t), this.lastViewport && (this.lastViewport.x !== this.x || this.lastViewport.y !== this.y ? this.moving = !0 : this.moving && (this.emit("moved-end", this), this.moving = !1), this.lastViewport.scaleX !== this.scale.x || this.lastViewport.scaleY !== this.scale.y ? this.zooming = !0 : this.zooming && (this.emit("zoomed-end", this), this.zooming = !1)), this.forceHitArea || (this._hitAreaDefault = new y(this.left, this.top, this.worldScreenWidth, this.worldScreenHeight), this.hitArea = this._hitAreaDefault), this._dirty = this._dirty || !this.lastViewport || this.lastViewport.x !== this.x || this.lastViewport.y !== this.y || this.lastViewport.scaleX !== this.scale.x || this.lastViewport.scaleY !== this.scale.y, this.lastViewport = {
      x: this.x,
      y: this.y,
      scaleX: this.scale.x,
      scaleY: this.scale.y
    }, this.emit("frame-end", this));
  }
  /**
   * Use this to set screen and world sizes, needed for pinch/wheel/clamp/bounce.
   * @param {number} screenWidth=window.innerWidth
   * @param {number} screenHeight=window.innerHeight
   * @param {number} [worldWidth]
   * @param {number} [worldHeight]
   */
  resize(t = typeof window > "u" ? 0 : window.innerWidth, e = typeof window > "u" ? 0 : window.innerHeight, n, i) {
    this.screenWidth = t, this.screenHeight = e, typeof n < "u" && (this._worldWidth = n), typeof i < "u" && (this._worldHeight = i), this.plugins.resize(), this.dirty = !0;
  }
  /** World width, in pixels */
  get worldWidth() {
    return this._worldWidth ? this._worldWidth : this.width / this.scale.x;
  }
  set worldWidth(t) {
    this._worldWidth = t, this.plugins.resize();
  }
  /** World height, in pixels */
  get worldHeight() {
    return this._worldHeight ? this._worldHeight : this.height / this.scale.y;
  }
  set worldHeight(t) {
    this._worldHeight = t, this.plugins.resize();
  }
  /** Get visible world bounds of viewport */
  getVisibleBounds() {
    return new y(this.left, this.top, this.worldScreenWidth, this.worldScreenHeight);
  }
  /**
   * Changes coordinate from screen to world
   * @param {number|PIXI.Point} x
   * @param {number} y
   * @returns {PIXI.Point}
   */
  toWorld(t, e) {
    return arguments.length === 2 ? this.toLocal(new c(t, e)) : this.toLocal(t);
  }
  /**
   * Changes coordinate from world to screen
   * @param {number|PIXI.Point} x
   * @param {number} y
   * @returns {PIXI.Point}
   */
  toScreen(t, e) {
    return arguments.length === 2 ? this.toGlobal(new c(t, e)) : this.toGlobal(t);
  }
  /** Screen width in world coordinates */
  get worldScreenWidth() {
    return this.screenWidth / this.scale.x;
  }
  /** Screen height in world coordinates */
  get worldScreenHeight() {
    return this.screenHeight / this.scale.y;
  }
  /** World width in screen coordinates */
  get screenWorldWidth() {
    return this.worldWidth * this.scale.x;
  }
  /** World height in screen coordinates */
  get screenWorldHeight() {
    return this.worldHeight * this.scale.y;
  }
  /** Center of screen in world coordinates */
  get center() {
    return new c(
      this.worldScreenWidth / 2 - this.x / this.scale.x,
      this.worldScreenHeight / 2 - this.y / this.scale.y
    );
  }
  set center(t) {
    this.moveCenter(t);
  }
  /**
   * Move center of viewport to (x, y)
   * @param {number|PIXI.Point} x
   * @param {number} [y]
   * @return {Viewport}
   */
  moveCenter(...t) {
    let e, n;
    typeof t[0] == "number" ? (e = t[0], n = t[1]) : (e = t[0].x, n = t[0].y);
    const i = (this.worldScreenWidth / 2 - e) * this.scale.x, s = (this.worldScreenHeight / 2 - n) * this.scale.y;
    return (this.x !== i || this.y !== s) && (this.position.set(i, s), this.plugins.reset(), this.dirty = !0), this;
  }
  /** Top-left corner of Viewport */
  get corner() {
    return new c(-this.x / this.scale.x, -this.y / this.scale.y);
  }
  set corner(t) {
    this.moveCorner(t);
  }
  /**
   * MoveCorner
   * @param {number|PIXI.Point} x
   * @param {number} [y]
   * @returns {Viewport}
   */
  moveCorner(...t) {
    let e, n;
    return t.length === 1 ? (e = -t[0].x * this.scale.x, n = -t[0].y * this.scale.y) : (e = -t[0] * this.scale.x, n = -t[1] * this.scale.y), (e !== this.x || n !== this.y) && (this.position.set(e, n), this.plugins.reset(), this.dirty = !0), this;
  }
  /** Get how many world pixels fit in screen's width */
  get screenWidthInWorldPixels() {
    return this.screenWidth / this.scale.x;
  }
  /** Get how many world pixels fit on screen's height */
  get screenHeightInWorldPixels() {
    return this.screenHeight / this.scale.y;
  }
  /**
   * Find the scale value that fits a world width on the screen
   * does not change the viewport (use fit... to change)
   *
   * @param width - Width in world pixels
   * @return - scale
   */
  findFitWidth(t) {
    return this.screenWidth / t;
  }
  /**
   * Finds the scale value that fits a world height on the screens
   * does not change the viewport (use fit... to change)
   *
   * @param height - Height in world pixels
   * @return - scale
   */
  findFitHeight(t) {
    return this.screenHeight / t;
  }
  /**
   * Finds the scale value that fits the smaller of a world width and world height on the screen
   * does not change the viewport (use fit... to change)
   *
   * @param {number} width in world pixels
   * @param {number} height in world pixels
   * @returns {number} scale
   */
  findFit(t, e) {
    const n = this.screenWidth / t, i = this.screenHeight / e;
    return Math.min(n, i);
  }
  /**
   * Finds the scale value that fits the larger of a world width and world height on the screen
   * does not change the viewport (use fit... to change)
   *
   * @param {number} width in world pixels
   * @param {number} height in world pixels
   * @returns {number} scale
   */
  findCover(t, e) {
    const n = this.screenWidth / t, i = this.screenHeight / e;
    return Math.max(n, i);
  }
  /**
   * Change zoom so the width fits in the viewport
   *
   * @param width - width in world coordinates
   * @param center - maintain the same center
   * @param scaleY - whether to set scaleY=scaleX
   * @param noClamp - whether to disable clamp-zoom
   * @returns {Viewport} this
   */
  fitWidth(t = this.worldWidth, e, n = !0, i) {
    let s;
    e && (s = this.center), this.scale.x = this.screenWidth / t, n && (this.scale.y = this.scale.x);
    const h = this.plugins.get("clamp-zoom", !0);
    return !i && h && h.clamp(), e && s && this.moveCenter(s), this;
  }
  /**
   * Change zoom so the height fits in the viewport
   *
   * @param {number} [height=this.worldHeight] in world coordinates
   * @param {boolean} [center] maintain the same center of the screen after zoom
   * @param {boolean} [scaleX=true] whether to set scaleX = scaleY
   * @param {boolean} [noClamp] whether to disable clamp-zoom
   * @returns {Viewport} this
   */
  fitHeight(t = this.worldHeight, e, n = !0, i) {
    let s;
    e && (s = this.center), this.scale.y = this.screenHeight / t, n && (this.scale.x = this.scale.y);
    const h = this.plugins.get("clamp-zoom", !0);
    return !i && h && h.clamp(), e && s && this.moveCenter(s), this;
  }
  /**
   * Change zoom so it fits the entire world in the viewport
   *
   * @param {boolean} center maintain the same center of the screen after zoom
   * @returns {Viewport} this
   */
  fitWorld(t) {
    let e;
    t && (e = this.center), this.scale.x = this.screenWidth / this.worldWidth, this.scale.y = this.screenHeight / this.worldHeight, this.scale.x < this.scale.y ? this.scale.y = this.scale.x : this.scale.x = this.scale.y;
    const n = this.plugins.get("clamp-zoom", !0);
    return n && n.clamp(), t && e && this.moveCenter(e), this;
  }
  /**
   * Change zoom so it fits the size or the entire world in the viewport
   *
   * @param {boolean} [center] maintain the same center of the screen after zoom
   * @param {number} [width=this.worldWidth] desired width
   * @param {number} [height=this.worldHeight] desired height
   * @returns {Viewport} this
   */
  fit(t, e = this.worldWidth, n = this.worldHeight) {
    let i;
    t && (i = this.center), this.scale.x = this.screenWidth / e, this.scale.y = this.screenHeight / n, this.scale.x < this.scale.y ? this.scale.y = this.scale.x : this.scale.x = this.scale.y;
    const s = this.plugins.get("clamp-zoom", !0);
    return s && s.clamp(), t && i && this.moveCenter(i), this;
  }
  /**
   * Zoom viewport to specific value.
   *
   * @param {number} scale value (e.g., 1 would be 100%, 0.25 would be 25%)
   * @param {boolean} [center] maintain the same center of the screen after zoom
   * @return {Viewport} this
   */
  setZoom(t, e) {
    let n;
    e && (n = this.center), this.scale.set(t);
    const i = this.plugins.get("clamp-zoom", !0);
    return i && i.clamp(), e && n && this.moveCenter(n), this;
  }
  /**
   * Zoom viewport by a certain percent (in both x and y direction).
   *
   * @param {number} percent change (e.g., 0.25 would increase a starting scale of 1.0 to 1.25)
   * @param {boolean} [center] maintain the same center of the screen after zoom
   * @return {Viewport} this
   */
  zoomPercent(t, e) {
    return this.setZoom(this.scale.x + this.scale.x * t, e);
  }
  /**
   * Zoom viewport by increasing/decreasing width by a certain number of pixels.
   *
   * @param {number} change in pixels
   * @param {boolean} [center] maintain the same center of the screen after zoom
   * @return {Viewport} this
   */
  zoom(t, e) {
    return this.fitWidth(t + this.worldScreenWidth, e), this;
  }
  /** Changes scale of viewport and maintains center of viewport */
  get scaled() {
    return this.scale.x;
  }
  set scaled(t) {
    this.setZoom(t, !0);
  }
  /**
   * Returns zoom to the desired scale
   *
   * @param {ISnapZoomOptions} options
   * @param {number} [options.width=0] - the desired width to snap (to maintain aspect ratio, choose width or height)
   * @param {number} [options.height=0] - the desired height to snap (to maintain aspect ratio, choose width or height)
   * @param {number} [options.time=1000] - time for snapping in ms
   * @param {(string|function)} [options.ease=easeInOutSine] ease function or name (see http://easings.net/
   *   for supported names)
   * @param {PIXI.Point} [options.center] - place this point at center during zoom instead of center of the viewport
   * @param {boolean} [options.interrupt=true] - pause snapping with any user input on the viewport
   * @param {boolean} [options.removeOnComplete] - removes this plugin after snapping is complete
   * @param {boolean} [options.removeOnInterrupt] - removes this plugin if interrupted by any user input
   * @param {boolean} [options.forceStart] - starts the snap immediately regardless of whether the viewport is at the
   *   desired zoom
   * @param {boolean} [options.noMove] - zoom but do not move
   */
  snapZoom(t) {
    return this.plugins.add("snap-zoom", new K(this, t)), this;
  }
  /** Is container out of world bounds */
  OOB() {
    return {
      left: this.left < 0,
      right: this.right > this.worldWidth,
      top: this.top < 0,
      bottom: this.bottom > this.worldHeight,
      cornerPoint: new c(
        this.worldWidth * this.scale.x - this.screenWidth,
        this.worldHeight * this.scale.y - this.screenHeight
      )
    };
  }
  /** World coordinates of the right edge of the screen */
  get right() {
    return -this.x / this.scale.x + this.worldScreenWidth;
  }
  set right(t) {
    this.x = -t * this.scale.x + this.screenWidth, this.plugins.reset();
  }
  /** World coordinates of the left edge of the screen */
  get left() {
    return -this.x / this.scale.x;
  }
  set left(t) {
    this.x = -t * this.scale.x, this.plugins.reset();
  }
  /** World coordinates of the top edge of the screen */
  get top() {
    return -this.y / this.scale.y;
  }
  set top(t) {
    this.y = -t * this.scale.y, this.plugins.reset();
  }
  /** World coordinates of the bottom edge of the screen */
  get bottom() {
    return -this.y / this.scale.y + this.worldScreenHeight;
  }
  set bottom(t) {
    this.y = -t * this.scale.y + this.screenHeight, this.plugins.reset();
  }
  /**
   * Determines whether the viewport is dirty (i.e., needs to be rendered to the screen because of a change)
   */
  get dirty() {
    return !!this._dirty;
  }
  set dirty(t) {
    this._dirty = t;
  }
  /**
   * Permanently changes the Viewport's hitArea
   *
   * NOTE: if not set then hitArea = PIXI.Rectangle(Viewport.left, Viewport.top, Viewport.worldScreenWidth,
   * Viewport.worldScreenHeight)
   */
  get forceHitArea() {
    return this._forceHitArea;
  }
  set forceHitArea(t) {
    t ? (this._forceHitArea = t, this.hitArea = t) : (this._forceHitArea = null, this.hitArea = new y(0, 0, this.worldWidth, this.worldHeight));
  }
  /**
   * Enable one-finger touch to drag
   *
   * NOTE: if you expect users to use right-click dragging, you should enable `viewport.options.disableOnContextMenu`
   * to avoid the context menu popping up on each right-click drag.
   *
   * @param {IDragOptions} [options]
   * @param {string} [options.direction=all] direction to drag
   * @param {boolean} [options.pressDrag=true] whether click to drag is active
   * @param {boolean} [options.wheel=true] use wheel to scroll in direction (unless wheel plugin is active)
   * @param {number} [options.wheelScroll=1] number of pixels to scroll with each wheel spin
   * @param {boolean} [options.reverse] reverse the direction of the wheel scroll
   * @param {(boolean|string)} [options.clampWheel=false] clamp wheel(to avoid weird bounce with mouse wheel)
   * @param {string} [options.underflow=center] where to place world if too small for screen
   * @param {number} [options.factor=1] factor to multiply drag to increase the speed of movement
   * @param {string} [options.mouseButtons=all] changes which mouse buttons trigger drag, use: 'all', 'left',
   *  'right' 'middle', or some combination, like, 'middle-right'; you may want to set
   *   viewport.options.disableOnContextMenu if you want to use right-click dragging
   * @param {string[]} [options.keyToPress=null] - array containing
   *  {@link key|https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code} codes of keys that can be
   *  pressed for the drag to be triggered, e.g.: ['ShiftLeft', 'ShiftRight'}.
   * @param {boolean} [options.ignoreKeyToPressOnTouch=false] - ignore keyToPress for touch events
   * @param {number} [options.lineHeight=20] - scaling factor for non-DOM_DELTA_PIXEL scrolling events
   * @returns {Viewport} this
   */
  drag(t) {
    return this.plugins.add("drag", new D(this, t)), this;
  }
  /**
   * Clamp to world boundaries or other provided boundaries
   * There are three ways to clamp:
   * 1. direction: 'all' = the world is clamped to its world boundaries, ie, you cannot drag any part of offscreen
   *    direction: 'x' | 'y' = only the x or y direction is clamped to its world boundary
   * 2. left, right, top, bottom = true | number = the world is clamped to the world's pixel location for each side;
   *    if any of these are set to true, then the location is set to the boundary
   *    [0, viewport.worldWidth/viewport.worldHeight], eg: to allow the world to be completely dragged offscreen,
   *    set [-viewport.worldWidth, -viewport.worldHeight, viewport.worldWidth * 2, viewport.worldHeight * 2]
   *
   * Underflow determines what happens when the world is smaller than the viewport
   * 1. none = the world is clamped but there is no special behavior
   * 2. center = the world is centered on the viewport
   * 3. combination of top/bottom/center and left/right/center (case insensitive) = the world is stuck to the
   *     appropriate boundaries
   *
   * NOTES:
   *   clamp is disabled if called with no options; use { direction: 'all' } for all edge clamping
   *   screenWidth, screenHeight, worldWidth, and worldHeight needs to be set for this to work properly
   *
   * @param {object} [options]
   * @param {(number|boolean)} [options.left=false] - clamp left; true = 0
   * @param {(number|boolean)} [options.right=false] - clamp right; true = viewport.worldWidth
   * @param {(number|boolean)} [options.top=false] - clamp top; true = 0
   * @param {(number|boolean)} [options.bottom=false] - clamp bottom; true = viewport.worldHeight
   * @param {string} [direction] - (all, x, or y) using clamps of [0, viewport.worldWidth/viewport.worldHeight];
   *  replaces left/right/top/bottom if set
   * @param {string} [underflow=center] - where to place world if too small for screen (e.g., top-right, center,
   *  none, bottomLeft)     * @returns {Viewport} this
   */
  clamp(t) {
    return this.plugins.add("clamp", new X(this, t)), this;
  }
  /**
   * Decelerate after a move
   *
   * NOTE: this fires 'moved' event during deceleration
   *
   * @param {IDecelerateOptions} [options]
   * @param {number} [options.friction=0.95] - percent to decelerate after movement
   * @param {number} [options.bounce=0.8] - percent to decelerate when past boundaries (only applicable when
   *   viewport.bounce() is active)
   * @param {number} [options.minSpeed=0.01] - minimum velocity before stopping/reversing acceleration
   * @return {Viewport} this
   */
  decelerate(t) {
    return this.plugins.add("decelerate", new T(this, t)), this;
  }
  /**
   * Bounce on borders
   * NOTES:
   *    screenWidth, screenHeight, worldWidth, and worldHeight needs to be set for this to work properly
   *    fires 'moved', 'bounce-x-start', 'bounce-y-start', 'bounce-x-end', and 'bounce-y-end' events
   * @param {object} [options]
   * @param {string} [options.sides=all] - all, horizontal, vertical, or combination of top, bottom, right, left
   *  (e.g., 'top-bottom-right')
   * @param {number} [options.friction=0.5] - friction to apply to decelerate if active
   * @param {number} [options.time=150] - time in ms to finish bounce
   * @param {object} [options.bounceBox] - use this bounceBox instead of (0, 0, viewport.worldWidth, viewport.worldHeight)
   * @param {number} [options.bounceBox.x=0]
   * @param {number} [options.bounceBox.y=0]
   * @param {number} [options.bounceBox.width=viewport.worldWidth]
   * @param {number} [options.bounceBox.height=viewport.worldHeight]
   * @param {string|function} [options.ease=easeInOutSine] - ease function or name
   *  (see http://easings.net/ for supported names)
   * @param {string} [options.underflow=center] - (top/bottom/center and left/right/center, or center)
   *  where to place world if too small for screen
   * @return {Viewport} this
   */
  bounce(t) {
    return this.plugins.add("bounce", new k(this, t)), this;
  }
  /**
   * Enable pinch to zoom and two-finger touch to drag
   *
   * @param {PinchOptions} [options]
   * @param {boolean} [options.noDrag] - disable two-finger dragging
   * @param {number} [options.percent=1] - percent to modify pinch speed
   * @param {number} [options.factor=1] - factor to multiply two-finger drag to increase the speed of movement
   * @param {PIXI.Point} [options.center] - place this point at center during zoom instead of center of two fingers
   * @param {('all'|'x'|'y')} [options.axis=all] - axis to zoom
   * @return {Viewport} this
   */
  pinch(t) {
    return this.plugins.add("pinch", new N(this, t)), this;
  }
  /**
   * Snap to a point
   *
   * @param {number} x
   * @param {number} y
   * @param {ISnapOptions} [options]
   * @param {boolean} [options.topLeft] - snap to the top-left of viewport instead of center
   * @param {number} [options.friction=0.8] - friction/frame to apply if decelerate is active
   * @param {number} [options.time=1000] - time in ms to snap
   * @param {string|function} [options.ease=easeInOutSine] - ease function or name (see http://easings.net/
   *   for supported names)
   * @param {boolean} [options.interrupt=true] - pause snapping with any user input on the viewport
   * @param {boolean} [options.removeOnComplete] - removes this plugin after snapping is complete
   * @param {boolean} [options.removeOnInterrupt] - removes this plugin if interrupted by any user input
   * @param {boolean} [options.forceStart] - starts the snap immediately regardless of whether the viewport is at
   *   the desired location
   * @return {Viewport} this
   */
  snap(t, e, n) {
    return this.plugins.add("snap", new j(this, t, e, n)), this;
  }
  /**
   * Follow a target
   *
   * NOTES:
   *    uses the (x, y) as the center to follow; for PIXI.Sprite to work properly, use sprite.anchor.set(0.5)
   *    options.acceleration is not perfect as it doesn't know the velocity of the target. It adds acceleration
   *    to the start of movement and deceleration to the end of movement when the target is stopped.
   *    To cancel the follow, use: `viewport.plugins.remove('follow')`
   *
   * @fires 'moved' event
   *
   * @param {PIXI.DisplayObject} target to follow
   * @param {IFollowOptions} [options]
   * @param {number} [options.speed=0] - to follow in pixels/frame (0=teleport to location)
   * @param {number} [options.acceleration] - set acceleration to accelerate and decelerate at this rate; speed
   *   cannot be 0 to use acceleration
   * @param {number} [options.radius] - radius (in world coordinates) of center circle where movement is allowed
   *   without moving the viewport     * @returns {Viewport} this
   * @returns {Viewport} this
   */
  follow(t, e) {
    return this.plugins.add("follow", new U(this, t, e)), this;
  }
  /**
   * Zoom using mouse wheel
   *
   * NOTE: the default event listener for 'wheel' event is the options.events.domElement.
   *
   * @param {IWheelOptions} [options]
   * @param {number} [options.percent=0.1] - percent to scroll with each spin
   * @param {number} [options.smooth] - smooth the zooming by providing the number of frames to zoom between wheel spins
   * @param {boolean} [options.interrupt=true] - stop smoothing with any user input on the viewport
   * @param {boolean} [options.reverse] - reverse the direction of the scroll
   * @param {PIXI.Point} [options.center] - place this point at center during zoom instead of current mouse position
   * @param {number} [options.lineHeight=20] - scaling factor for non-DOM_DELTA_PIXEL scrolling events
   * @param {('all'|'x'|'y')} [options.axis=all] - axis to zoom
   * @return {Viewport} this
   */
  wheel(t) {
    return this.plugins.add("wheel", new G(this, t)), this;
  }
  /**
   * Animate the position and/or scale of the viewport
   * To set the zoom level, use: (1) scale, (2) scaleX and scaleY, or (3) width and/or height
   * @param {object} options
   * @param {number} [options.time=1000] - time to animate
   * @param {PIXI.Point} [options.position=viewport.center] - position to move viewport
   * @param {number} [options.width] - desired viewport width in world pixels (use instead of scale;
   *  aspect ratio is maintained if height is not provided)
   * @param {number} [options.height] - desired viewport height in world pixels (use instead of scale;
   *  aspect ratio is maintained if width is not provided)
   * @param {number} [options.scale] - scale to change zoom (scale.x = scale.y)
   * @param {number} [options.scaleX] - independently change zoom in x-direction
   * @param {number} [options.scaleY] - independently change zoom in y-direction
   * @param {(function|string)} [options.ease=linear] - easing function to use
   * @param {function} [options.callbackOnComplete]
   * @param {boolean} [options.removeOnInterrupt] removes this plugin if interrupted by any user input
   * @returns {Viewport} this
   */
  animate(t) {
    return this.plugins.add("animate", new C(this, t)), this;
  }
  /**
   * Enable clamping of zoom to constraints
   *
   * The minWidth/Height settings are how small the world can get (as it would appear on the screen)
   * before clamping. The maxWidth/maxHeight is how larger the world can scale (as it would appear on
   * the screen) before clamping.
   *
   * For example, if you have a world size of 1000 x 1000 and a screen size of 100 x 100, if you set
   * minWidth/Height = 100 then the world will not be able to zoom smaller than the screen size (ie,
   * zooming out so it appears smaller than the screen). Similarly, if you set maxWidth/Height = 100
   * the world will not be able to zoom larger than the screen size (ie, zooming in so it appears
   * larger than the screen).
   *
   * @param {object} [options]
   * @param {number} [options.minWidth] - minimum width
   * @param {number} [options.minHeight] - minimum height
   * @param {number} [options.maxWidth] - maximum width
   * @param {number} [options.maxHeight] - maximum height
   * @param {number} [options.minScale] - minimum scale
   * @param {number} [options.maxScale] - minimum scale
   * @return {Viewport} this
   */
  clampZoom(t) {
    return this.plugins.add("clamp-zoom", new A(this, t)), this;
  }
  /**
   * Scroll viewport when mouse hovers near one of the edges or radius-distance from center of screen.
   *
   * NOTES: fires 'moved' event; there's a known bug where the mouseEdges does not work properly with "windowed" viewports
   *
   * @param {IMouseEdgesOptions} [options]
   * @param {number} [options.radius] - distance from center of screen in screen pixels
   * @param {number} [options.distance] - distance from all sides in screen pixels
   * @param {number} [options.top] - alternatively, set top distance (leave unset for no top scroll)
   * @param {number} [options.bottom] - alternatively, set bottom distance (leave unset for no top scroll)
   * @param {number} [options.left] - alternatively, set left distance (leave unset for no top scroll)
   * @param {number} [options.right] - alternatively, set right distance (leave unset for no top scroll)
   * @param {number} [options.speed=8] - speed in pixels/frame to scroll viewport
   * @param {boolean} [options.reverse] - reverse direction of scroll
   * @param {boolean} [options.noDecelerate] - don't use decelerate plugin even if it's installed
   * @param {boolean} [options.linear] - if using radius, use linear movement (+/- 1, +/- 1) instead of angled
   *   movement (Math.cos(angle from center), Math.sin(angle from center))
   * @param {boolean} [options.allowButtons] allows plugin to continue working even when there's a mousedown event
   */
  mouseEdges(t) {
    return this.plugins.add("mouse-edges", new B(this, t)), this;
  }
  /** Pause viewport (including animation updates such as decelerate) */
  get pause() {
    return !!this._pause;
  }
  set pause(t) {
    this._pause = t, this.lastViewport = null, this.moving = !1, this.zooming = !1, t && this.input.pause();
  }
  /**
   * Move the viewport so the bounding box is visible
   *
   * @param x - left
   * @param y - top
   * @param width
   * @param height
   * @param resizeToFit - Resize the viewport so the box fits within the viewport
   */
  ensureVisible(t, e, n, i, s) {
    s && (n > this.worldScreenWidth || i > this.worldScreenHeight) && (this.fit(!0, n, i), this.emit("zoomed", { viewport: this, type: "ensureVisible" }));
    let h = !1;
    t < this.left ? (this.left = t, h = !0) : t + n > this.right && (this.right = t + n, h = !0), e < this.top ? (this.top = e, h = !0) : e + i > this.bottom && (this.bottom = e + i, h = !0), h && this.emit("moved", { viewport: this, type: "ensureVisible" });
  }
}
export {
  C as Animate,
  k as Bounce,
  X as Clamp,
  A as ClampZoom,
  T as Decelerate,
  D as Drag,
  U as Follow,
  Q as InputManager,
  B as MouseEdges,
  N as Pinch,
  u as Plugin,
  J as PluginManager,
  j as Snap,
  K as SnapZoom,
  et as Viewport,
  G as Wheel
};
