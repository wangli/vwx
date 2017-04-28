/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/
/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		head.appendChild(script);
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * vwx.js v0.1.2 
 * (c) 2017-2018 wangli 
 * Released under the MIT License.
 */
!function (t) {
  function e(r) {
    if (i[r]) return i[r].exports;var n = i[r] = { i: r, l: !1, exports: {} };return t[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports;
  }var i = {};e.m = t, e.c = i, e.i = function (t) {
    return t;
  }, e.d = function (t, i, r) {
    e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: r });
  }, e.n = function (t) {
    var i = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return e.d(i, "a", i), i;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "", e(e.s = 47);
}([function (t, e, i) {
  "use strict";
  (function (e) {
    function r(t) {
      return "[object Array]" === E.call(t);
    }function n(t) {
      return void 0 !== e && e.isBuffer && e.isBuffer(t);
    }function s(t) {
      return "[object ArrayBuffer]" === E.call(t);
    }function a(t) {
      return "undefined" != typeof FormData && t instanceof FormData;
    }function o(t) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer;
    }function l(t) {
      return "string" == typeof t;
    }function u(t) {
      return "number" == typeof t;
    }function p(t) {
      return void 0 === t;
    }function c(t) {
      return null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
    }function h(t) {
      return "[object Date]" === E.call(t);
    }function d(t) {
      return "[object File]" === E.call(t);
    }function f(t) {
      return "[object Blob]" === E.call(t);
    }function m(t) {
      return "[object Function]" === E.call(t);
    }function g(t) {
      return c(t) && m(t.pipe);
    }function v(t) {
      return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams;
    }function w(t) {
      return t.replace(/^\s*/, "").replace(/\s*$/, "");
    }function y() {
      return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
    }function x(t, e) {
      if (null !== t && void 0 !== t) if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || r(t) || (t = [t]), r(t)) for (var i = 0, n = t.length; i < n; i++) {
        e.call(null, t[i], i, t);
      } else for (var s in t) {
        Object.prototype.hasOwnProperty.call(t, s) && e.call(null, t[s], s, t);
      }
    }function b() {
      function t(t, i) {
        "object" == _typeof(e[i]) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e[i] = b(e[i], t) : e[i] = t;
      }for (var e = {}, i = 0, r = arguments.length; i < r; i++) {
        x(arguments[i], t);
      }return e;
    }function T(t, e, i) {
      return x(e, function (e, r) {
        t[r] = i && "function" == typeof e ? S(e, i) : e;
      }), t;
    }var S = i(9),
        E = Object.prototype.toString;t.exports = { isArray: r, isArrayBuffer: s, isBuffer: n, isFormData: a, isArrayBufferView: o, isString: l, isNumber: u, isObject: c, isUndefined: p, isDate: h, isFile: d, isBlob: f, isFunction: m, isStream: g, isURLSearchParams: v, isStandardBrowserEnv: y, forEach: x, merge: b, extend: T, trim: w };
  }).call(e, i(37).Buffer);
}, function (t, e, i) {
  (function (t, r) {
    var n;(function () {
      function s(t, e) {
        return t.push.apply(t, e), t;
      }function a(t, e, i, r) {
        for (var n = t.length, s = i + (r ? 1 : -1); r ? s-- : ++s < n;) {
          if (e(t[s], s, t)) return s;
        }return -1;
      }function o(t) {
        return function (e) {
          return null == e ? re : e[t];
        };
      }function l(t) {
        return function (e) {
          return null == t ? re : t[e];
        };
      }function u(t, e, i, r, n) {
        return n(t, function (t, n, s) {
          i = r ? (r = !1, t) : e(i, t, n, s);
        }), i;
      }function p(t, e) {
        return _(e, function (e) {
          return t[e];
        });
      }function c(t, e) {
        return function (i) {
          return t(e(i));
        };
      }function h(t) {
        return t instanceof d ? t : new d(t);
      }function d(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e;
      }function f(t, e, i) {
        var r = t[e];De.call(t, e) && zt(r, i) && (i !== re || e in t) || m(t, e, i);
      }function m(t, e, i) {
        t[e] = i;
      }function g(t, e, i) {
        if ("function" != typeof t) throw new TypeError(se);return setTimeout(function () {
          t.apply(re, i);
        }, e);
      }function v(t, e) {
        var i = !0;return Ue(t, function (t, r, n) {
          return i = !!e(t, r, n);
        }), i;
      }function w(t, e, i) {
        for (var r = -1, n = t.length; ++r < n;) {
          var s = t[r],
              a = e(s);if (null != a && (o === re ? a === a && !0 : i(a, o))) var o = a,
              l = s;
        }return l;
      }function y(t, e) {
        var i = [];return Ue(t, function (t, r, n) {
          e(t, r, n) && i.push(t);
        }), i;
      }function x(t, e, i, r, n) {
        var a = -1,
            o = t.length;for (i || (i = J), n || (n = []); ++a < o;) {
          var l = t[a];e > 0 && i(l) ? e > 1 ? x(l, e - 1, i, r, n) : s(n, l) : r || (n[n.length] = l);
        }return n;
      }function b(t, e) {
        return t && Ve(t, e, ui);
      }function T(t, e) {
        return y(e, function (e) {
          return Bt(t[e]);
        });
      }function S(t) {
        return tt(t);
      }function E(t, e) {
        return t > e;
      }function C(t) {
        return Xt(t) && S(t) == ge;
      }function P(t, e, i, r, n) {
        return t === e || (null == t || null == e || !Xt(t) && !Xt(e) ? t !== t && e !== e : z(t, e, i, r, P, n));
      }function z(t, e, i, r, n, s) {
        var a = ti(t),
            o = ti(e),
            l = a ? de : S(t),
            u = o ? de : S(e);l = l == he ? be : l, u = u == he ? be : u;var p = l == be,
            c = u == be,
            h = l == u;s || (s = []);var d = Ke(s, function (e) {
          return e[0] == t;
        }),
            f = Ke(s, function (t) {
          return t[0] == e;
        });if (d && f) return d[1] == e;if (s.push([t, e]), s.push([e, t]), h && !p) {
          var m = a ? q(t, e, i, r, n, s) : K(t, e, l, i, r, n, s);return s.pop(), m;
        }if (!(i & ae)) {
          var g = p && De.call(t, "__wrapped__"),
              v = c && De.call(e, "__wrapped__");if (g || v) {
            var w = g ? t.value() : t,
                y = v ? e.value() : e,
                m = n(w, y, i, r, s);return s.pop(), m;
          }
        }if (!h) return !1;var m = $(t, e, i, r, n, s);return s.pop(), m;
      }function M(t) {
        return Xt(t) && S(t) == Se;
      }function k(t) {
        return "function" == typeof t ? t : null == t ? Kt : ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? Y : o)(t);
      }function A(t, e) {
        return t < e;
      }function _(t, e) {
        var i = -1,
            r = Mt(t) ? Array(t.length) : [];return Ue(t, function (t, n, s) {
          r[++i] = e(t, n, s);
        }), r;
      }function Y(t) {
        var e = We(t);return function (i) {
          var r = e.length;if (null == i) return !r;for (i = Object(i); r--;) {
            var n = e[r];if (!(n in i && P(t[n], i[n], ae | oe))) return !1;
          }return !0;
        };
      }function B(t, e) {
        return t = Object(t), yt(e, function (e, i) {
          return i in t && (e[i] = t[i]), e;
        }, {});
      }function I(t, e) {
        return qe(et(t, e, Kt), t + "");
      }function D(t, e, i) {
        var r = -1,
            n = t.length;e < 0 && (e = -e > n ? 0 : n + e), i = i > n ? n : i, i < 0 && (i += n), n = e > i ? 0 : i - e >>> 0, e >>>= 0;for (var s = Array(n); ++r < n;) {
          s[r] = t[r + e];
        }return s;
      }function X(t) {
        return D(t, 0, t.length);
      }function R(t, e) {
        var i;return Ue(t, function (t, r, n) {
          return !(i = e(t, r, n));
        }), !!i;
      }function L(t, e) {
        var i = t;return yt(e, function (t, e) {
          return e.func.apply(e.thisArg, s([t], e.args));
        }, i);
      }function O(t, e) {
        if (t !== e) {
          var i = t !== re,
              r = null === t,
              n = t === t,
              s = !1,
              a = e !== re,
              o = null === e,
              l = e === e,
              u = !1;if (!o && !u && !s && t > e || s && a && l && !o && !u || r && a && l || !i && l || !n) return 1;if (!r && !s && !u && t < e || u && i && n && !r && !s || o && i && n || !a && n || !l) return -1;
        }return 0;
      }function H(t, e, i, r) {
        var n = !i;i || (i = {});for (var s = -1, a = e.length; ++s < a;) {
          var o = e[s],
              l = r ? r(i[o], t[o], o, i, t) : re;l === re && (l = t[o]), n ? m(i, o, l) : f(i, o, l);
        }return i;
      }function N(t) {
        return I(function (e, i) {
          var r = -1,
              n = i.length,
              s = n > 1 ? i[n - 1] : re;for (s = t.length > 3 && "function" == typeof s ? (n--, s) : re, e = Object(e); ++r < n;) {
            var a = i[r];a && t(e, a, r, s);
          }return e;
        });
      }function W(t, e) {
        return function (i, r) {
          if (null == i) return i;if (!Mt(i)) return t(i, r);for (var n = i.length, s = e ? n : -1, a = Object(i); (e ? s-- : ++s < n) && r(a[s], s, a) !== !1;) {}return i;
        };
      }function G(t) {
        return function (e, i, r) {
          for (var n = -1, s = Object(e), a = r(e), o = a.length; o--;) {
            var l = a[t ? o : ++n];if (i(s[l], l, s) === !1) break;
          }return e;
        };
      }function j(t) {
        return function () {
          var e = arguments,
              i = je(t.prototype),
              r = t.apply(i, e);return Dt(r) ? r : i;
        };
      }function U(t) {
        return function (e, i, r) {
          var n = Object(e);if (!Mt(e)) {
            var s = k(i, 3);e = ui(e), i = function i(t) {
              return s(n[t], t, n);
            };
          }var a = t(e, i, r);return a > -1 ? n[s ? e[a] : a] : re;
        };
      }function V(t, e, i, r) {
        function n() {
          for (var e = -1, o = arguments.length, l = -1, u = r.length, p = Array(u + o), c = this && this !== Ae && this instanceof n ? a : t; ++l < u;) {
            p[l] = r[l];
          }for (; o--;) {
            p[l++] = arguments[++e];
          }return c.apply(s ? i : this, p);
        }if ("function" != typeof t) throw new TypeError(se);var s = e & le,
            a = j(t);return n;
      }function F(t, e, i, r) {
        return t === re || zt(t, Ie[i]) && !De.call(r, i) ? e : t;
      }function q(t, e, i, r, n, s) {
        var a = i & ae,
            o = t.length,
            l = e.length;if (o != l && !(a && l > o)) return !1;for (var u = -1, p = !0, c = i & oe ? [] : re; ++u < o;) {
          var h,
              d = t[u],
              f = e[u];if (h !== re) {
            if (h) continue;p = !1;break;
          }if (c) {
            if (!R(e, function (t, e) {
              if (!lt(c, e) && (d === t || n(d, t, i, r, s))) return c.push(e);
            })) {
              p = !1;break;
            }
          } else if (d !== f && !n(d, f, i, r, s)) {
            p = !1;break;
          }
        }return p;
      }function K(t, e, i, r, n, s, a) {
        switch (i) {case me:case ge:case xe:
            return zt(+t, +e);case ve:
            return t.name == e.name && t.message == e.message;case Se:case Ee:
            return t == e + "";}return !1;
      }function $(t, e, i, r, n, s) {
        var a = i & ae,
            o = ui(t),
            l = o.length;if (l != ui(e).length && !a) return !1;for (var u = l; u--;) {
          var p = o[u];if (!(a ? p in e : De.call(e, p))) return !1;
        }for (var c = !0, h = a; ++u < l;) {
          p = o[u];var d,
              f = t[p],
              m = e[p];if (!(d === re ? f === m || n(f, m, i, r, s) : d)) {
            c = !1;break;
          }h || (h = "constructor" == p);
        }if (c && !h) {
          var g = t.constructor,
              v = e.constructor;g != v && "constructor" in t && "constructor" in e && !("function" == typeof g && g instanceof g && "function" == typeof v && v instanceof v) && (c = !1);
        }return c;
      }function Z(t) {
        return qe(et(t, re, st), t + "");
      }function J(t) {
        return ti(t) || Qe(t);
      }function Q(t) {
        var e = [];if (null != t) for (var i in Object(t)) {
          e.push(i);
        }return e;
      }function tt(t) {
        return Re.call(t);
      }function et(t, e, i) {
        return e = Ge(e === re ? t.length - 1 : e, 0), function () {
          for (var r = arguments, n = -1, s = Ge(r.length - e, 0), a = Array(s); ++n < s;) {
            a[n] = r[e + n];
          }n = -1;for (var o = Array(e + 1); ++n < e;) {
            o[n] = r[n];
          }return o[e] = i(a), t.apply(this, o);
        };
      }function it(t) {
        return y(t, Boolean);
      }function rt() {
        var t = arguments.length;if (!t) return [];for (var e = Array(t - 1), i = arguments[0], r = t; r--;) {
          e[r - 1] = arguments[r];
        }return s(ti(i) ? X(i) : [i], x(e, 1));
      }function nt(t, e, i) {
        var r = null == t ? 0 : t.length;if (!r) return -1;var n = null == i ? 0 : ri(i);return n < 0 && (n = Ge(r + n, 0)), a(t, k(e, 3), n);
      }function st(t) {
        return (null == t ? 0 : t.length) ? x(t, 1) : [];
      }function at(t) {
        return (null == t ? 0 : t.length) ? x(t, pe) : [];
      }function ot(t) {
        return t && t.length ? t[0] : re;
      }function lt(t, e, i) {
        var r = null == t ? 0 : t.length;i = "number" == typeof i ? i < 0 ? Ge(r + i, 0) : i : 0;for (var n = (i || 0) - 1, s = e === e; ++n < r;) {
          var a = t[n];if (s ? a === e : a !== a) return n;
        }return -1;
      }function ut(t) {
        var e = null == t ? 0 : t.length;return e ? t[e - 1] : re;
      }function pt(t, e, i) {
        var r = null == t ? 0 : t.length;return e = null == e ? 0 : +e, i = i === re ? r : +i, r ? D(t, e, i) : [];
      }function ct(t) {
        var e = h(t);return e.__chain__ = !0, e;
      }function ht(t, e) {
        return e(t), t;
      }function dt(t, e) {
        return e(t);
      }function ft() {
        return L(this.__wrapped__, this.__actions__);
      }function mt(t, e, i) {
        return e = i ? re : e, v(t, k(e));
      }function gt(t, e) {
        return y(t, k(e));
      }function vt(t, e) {
        return Ue(t, k(e));
      }function wt(t, e) {
        return _(t, k(e));
      }function yt(t, e, i) {
        return u(t, k(e), i, arguments.length < 3, Ue);
      }function xt(t) {
        return null == t ? 0 : (t = Mt(t) ? t : We(t), t.length);
      }function bt(t, e, i) {
        return e = i ? re : e, R(t, k(e));
      }function Tt(t, e) {
        var i = 0;return e = k(e), _(_(t, function (t, r, n) {
          return { value: t, index: i++, criteria: e(t, r, n) };
        }).sort(function (t, e) {
          return O(t.criteria, e.criteria) || t.index - e.index;
        }), o("value"));
      }function St(t, e) {
        var i;if ("function" != typeof e) throw new TypeError(se);return t = ri(t), function () {
          return --t > 0 && (i = e.apply(this, arguments)), t <= 1 && (e = re), i;
        };
      }function Et(t) {
        if ("function" != typeof t) throw new TypeError(se);return function () {
          var e = arguments;return !t.apply(this, e);
        };
      }function Ct(t) {
        return St(2, t);
      }function Pt(t) {
        return Dt(t) ? ti(t) ? X(t) : H(t, We(t)) : t;
      }function zt(t, e) {
        return t === e || t !== t && e !== e;
      }function Mt(t) {
        return null != t && It(t.length) && !Bt(t);
      }function kt(t) {
        return t === !0 || t === !1 || Xt(t) && S(t) == me;
      }function At(t) {
        return Mt(t) && (ti(t) || Ht(t) || Bt(t.splice) || Qe(t)) ? !t.length : !We(t).length;
      }function _t(t, e) {
        return P(t, e);
      }function Yt(t) {
        return "number" == typeof t && Ne(t);
      }function Bt(t) {
        if (!Dt(t)) return !1;var e = S(t);return e == we || e == ye || e == fe || e == Te;
      }function It(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= ce;
      }function Dt(t) {
        var e = typeof t === "undefined" ? "undefined" : _typeof(t);return null != t && ("object" == e || "function" == e);
      }function Xt(t) {
        return null != t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
      }function Rt(t) {
        return Ot(t) && t != +t;
      }function Lt(t) {
        return null === t;
      }function Ot(t) {
        return "number" == typeof t || Xt(t) && S(t) == xe;
      }function Ht(t) {
        return "string" == typeof t || !ti(t) && Xt(t) && S(t) == Ee;
      }function Nt(t) {
        return t === re;
      }function Wt(t) {
        return Mt(t) ? t.length ? X(t) : [] : Ft(t);
      }function Gt(t) {
        return "string" == typeof t ? t : null == t ? "" : t + "";
      }function jt(t, e) {
        var i = je(t);return null == e ? i : si(i, e);
      }function Ut(t, e) {
        return null != t && De.call(t, e);
      }function Vt(t, e, i) {
        var r = null == t ? re : t[e];return r === re && (r = i), Bt(r) ? r.call(t) : r;
      }function Ft(t) {
        return null == t ? [] : p(t, ui(t));
      }function qt(t) {
        return t = Gt(t), t && Pe.test(t) ? t.replace(Ce, Ye) : t;
      }function Kt(t) {
        return t;
      }function $t(t) {
        return Y(si({}, t));
      }function Zt(t, e, i) {
        var r = ui(e),
            n = T(e, r);null != i || Dt(e) && (n.length || !r.length) || (i = e, e = t, t = this, n = T(e, ui(e)));var a = !(Dt(i) && "chain" in i && !i.chain),
            o = Bt(t);return Ue(n, function (i) {
          var r = e[i];t[i] = r, o && (t.prototype[i] = function () {
            var e = this.__chain__;if (a || e) {
              var i = t(this.__wrapped__);return (i.__actions__ = X(this.__actions__)).push({ func: r, args: arguments, thisArg: t }), i.__chain__ = e, i;
            }return r.apply(t, s([this.value()], arguments));
          });
        }), t;
      }function Jt() {
        return Ae._ === this && (Ae._ = Le), this;
      }function Qt() {}function te(t) {
        var e = ++Xe;return Gt(t) + e;
      }function ee(t) {
        return t && t.length ? w(t, Kt, E) : re;
      }function ie(t) {
        return t && t.length ? w(t, Kt, A) : re;
      }var re,
          ne = "4.17.4",
          se = "Expected a function",
          ae = 1,
          oe = 2,
          le = 1,
          ue = 32,
          pe = 1 / 0,
          ce = 9007199254740991,
          he = "[object Arguments]",
          de = "[object Array]",
          fe = "[object AsyncFunction]",
          me = "[object Boolean]",
          ge = "[object Date]",
          ve = "[object Error]",
          we = "[object Function]",
          ye = "[object GeneratorFunction]",
          xe = "[object Number]",
          be = "[object Object]",
          Te = "[object Proxy]",
          Se = "[object RegExp]",
          Ee = "[object String]",
          Ce = /[&<>"']/g,
          Pe = RegExp(Ce.source),
          ze = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
          Me = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.Object === Object && t,
          ke = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
          Ae = Me || ke || Function("return this")(),
          _e = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && !e.nodeType && e,
          Ye = (_e && "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && r && r.nodeType, l(ze)),
          Be = Array.prototype,
          Ie = Object.prototype,
          De = Ie.hasOwnProperty,
          Xe = 0,
          Re = Ie.toString,
          Le = Ae._,
          Oe = Object.create,
          He = Ie.propertyIsEnumerable,
          Ne = Ae.isFinite,
          We = c(Object.keys, Object),
          Ge = Math.max,
          je = function () {
        function t() {}return function (e) {
          if (!Dt(e)) return {};if (Oe) return Oe(e);t.prototype = e;var i = new t();return t.prototype = re, i;
        };
      }();d.prototype = je(h.prototype), d.prototype.constructor = d;var Ue = W(b),
          Ve = G(),
          Fe = Qt,
          qe = Kt,
          Ke = U(nt),
          $e = I(function (t, e, i) {
        return V(t, le | ue, e, i);
      }),
          Ze = I(function (t, e) {
        return g(t, 1, e);
      }),
          Je = I(function (t, e, i) {
        return g(t, ni(e) || 0, i);
      }),
          Qe = Fe(function () {
        return arguments;
      }()) ? Fe : function (t) {
        return Xt(t) && De.call(t, "callee") && !He.call(t, "callee");
      },
          ti = Array.isArray,
          ei = C,
          ii = M,
          ri = Number,
          ni = Number,
          si = N(function (t, e) {
        H(e, We(e), t);
      }),
          ai = N(function (t, e) {
        H(e, Q(e), t);
      }),
          oi = N(function (t, e, i, r) {
        H(e, pi(e), t, r);
      }),
          li = I(function (t) {
        return t.push(re, F), oi.apply(re, t);
      }),
          ui = We,
          pi = Q,
          ci = Z(function (t, e) {
        return null == t ? {} : B(t, e);
      }),
          hi = k;h.assignIn = ai, h.before = St, h.bind = $e, h.chain = ct, h.compact = it, h.concat = rt, h.create = jt, h.defaults = li, h.defer = Ze, h.delay = Je, h.filter = gt, h.flatten = st, h.flattenDeep = at, h.iteratee = hi, h.keys = ui, h.map = wt, h.matches = $t, h.mixin = Zt, h.negate = Et, h.once = Ct, h.pick = ci, h.slice = pt, h.sortBy = Tt, h.tap = ht, h.thru = dt, h.toArray = Wt, h.values = Ft, h.extend = ai, Zt(h, h), h.clone = Pt, h.escape = qt, h.every = mt, h.find = Ke, h.forEach = vt, h.has = Ut, h.head = ot, h.identity = Kt, h.indexOf = lt, h.isArguments = Qe, h.isArray = ti, h.isBoolean = kt, h.isDate = ei, h.isEmpty = At, h.isEqual = _t, h.isFinite = Yt, h.isFunction = Bt, h.isNaN = Rt, h.isNull = Lt, h.isNumber = Ot, h.isObject = Dt, h.isRegExp = ii, h.isString = Ht, h.isUndefined = Nt, h.last = ut, h.max = ee, h.min = ie, h.noConflict = Jt, h.noop = Qt, h.reduce = yt, h.result = Vt, h.size = xt, h.some = bt, h.uniqueId = te, h.each = vt, h.first = ot, Zt(h, function () {
        var t = {};return b(h, function (e, i) {
          De.call(h.prototype, i) || (t[i] = e);
        }), t;
      }(), { chain: !1 }), h.VERSION = ne, Ue(["pop", "join", "replace", "reverse", "split", "push", "shift", "sort", "splice", "unshift"], function (t) {
        var e = (/^(?:replace|split)$/.test(t) ? String.prototype : Be)[t],
            i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
            r = /^(?:pop|join|replace|shift)$/.test(t);h.prototype[t] = function () {
          var t = arguments;if (r && !this.__chain__) {
            var n = this.value();return e.apply(ti(n) ? n : [], t);
          }return this[i](function (i) {
            return e.apply(ti(i) ? i : [], t);
          });
        };
      }), h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = ft, Ae._ = h, (n = function () {
        return h;
      }.call(e, i, e, r)) !== re && (r.exports = n);
    }).call(this);
  }).call(e, i(10), i(46)(t));
}, function (t, e, i) {
  "use strict";
  (function (e) {
    function r(t, e) {
      !s.isUndefined(t) && s.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
    }function n() {
      var t;return "undefined" != typeof XMLHttpRequest ? t = i(5) : void 0 !== e && (t = i(5)), t;
    }var s = i(0),
        a = i(30),
        o = { "Content-Type": "application/x-www-form-urlencoded" },
        l = { adapter: n(), transformRequest: [function (t, e) {
        return a(e, "Content-Type"), s.isFormData(t) || s.isArrayBuffer(t) || s.isBuffer(t) || s.isStream(t) || s.isFile(t) || s.isBlob(t) ? t : s.isArrayBufferView(t) ? t.buffer : s.isURLSearchParams(t) ? (r(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : s.isObject(t) ? (r(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t;
      }], transformResponse: [function (t) {
        if ("string" == typeof t) try {
          t = JSON.parse(t);
        } catch (t) {}return t;
      }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function validateStatus(t) {
        return t >= 200 && t < 300;
      } };l.headers = { common: { Accept: "application/json, text/plain, */*" } }, s.forEach(["delete", "get", "head"], function (t) {
      l.headers[t] = {};
    }), s.forEach(["post", "put", "patch"], function (t) {
      l.headers[t] = s.merge(o);
    }), t.exports = l;
  }).call(e, i(42));
}, function (t, e) {
  t.exports = vue;
}, function (t, e, i) {
  t.exports = i(16);
}, function (t, e, i) {
  "use strict";
  var r = i(0),
      n = i(22),
      s = i(25),
      a = i(31),
      o = i(29),
      l = i(8),
      u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || i(24);t.exports = function (t) {
    return new Promise(function (e, p) {
      var c = t.data,
          h = t.headers;r.isFormData(c) && delete h["Content-Type"];var d = new XMLHttpRequest(),
          f = "onreadystatechange",
          m = !1;if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || o(t.url) || (d = new window.XDomainRequest(), f = "onload", m = !0, d.onprogress = function () {}, d.ontimeout = function () {}), t.auth) {
        var g = t.auth.username || "",
            v = t.auth.password || "";h.Authorization = "Basic " + u(g + ":" + v);
      }if (d.open(t.method.toUpperCase(), s(t.url, t.params, t.paramsSerializer), !0), d.timeout = t.timeout, d[f] = function () {
        if (d && (4 === d.readyState || m) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
          var i = "getAllResponseHeaders" in d ? a(d.getAllResponseHeaders()) : null;n(e, p, { data: t.responseType && "text" !== t.responseType ? d.response : d.responseText, status: 1223 === d.status ? 204 : d.status, statusText: 1223 === d.status ? "No Content" : d.statusText, headers: i, config: t, request: d }), d = null;
        }
      }, d.onerror = function () {
        p(l("Network Error", t)), d = null;
      }, d.ontimeout = function () {
        p(l("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED")), d = null;
      }, r.isStandardBrowserEnv()) {
        var w = i(27),
            y = (t.withCredentials || o(t.url)) && t.xsrfCookieName ? w.read(t.xsrfCookieName) : void 0;y && (h[t.xsrfHeaderName] = y);
      }if ("setRequestHeader" in d && r.forEach(h, function (t, e) {
        void 0 === c && "content-type" === e.toLowerCase() ? delete h[e] : d.setRequestHeader(e, t);
      }), t.withCredentials && (d.withCredentials = !0), t.responseType) try {
        d.responseType = t.responseType;
      } catch (e) {
        if ("json" !== t.responseType) throw e;
      }"function" == typeof t.onDownloadProgress && d.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && d.upload && d.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function (t) {
        d && (d.abort(), p(t), d = null);
      }), void 0 === c && (c = null), d.send(c);
    });
  };
}, function (t, e, i) {
  "use strict";
  function r(t) {
    this.message = t;
  }r.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, r.prototype.__CANCEL__ = !0, t.exports = r;
}, function (t, e, i) {
  "use strict";
  t.exports = function (t) {
    return !(!t || !t.__CANCEL__);
  };
}, function (t, e, i) {
  "use strict";
  var r = i(21);t.exports = function (t, e, i, n) {
    return r(new Error(t), e, i, n);
  };
}, function (t, e, i) {
  "use strict";
  t.exports = function (t, e) {
    return function () {
      for (var i = new Array(arguments.length), r = 0; r < i.length; r++) {
        i[r] = arguments[r];
      }return t.apply(e, i);
    };
  };
}, function (t, e) {
  var i;i = function () {
    return this;
  }();try {
    i = i || Function("return this")() || (0, eval)("this");
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (i = window);
  }t.exports = i;
}, function (t, e, i) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }var n = i(34),
      s = r(n),
      a = i(33),
      o = r(a);t.exports = { v: "P 0.1", Page: s.default, App: o.default };
}, function (t, e, i) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 });var n = i(41),
      s = r(n),
      a = i(44),
      o = r(a),
      l = null;e.default = { name: "scroll-view", template: o.default, data: function data() {
      return { lowerY: 1, readyRen: !1 };
    }, props: { scrollX: { default: !1 }, scrollY: { default: !0 }, scrollId: { default: ".scrollView" } }, mounted: function mounted() {
      var t = this;l = new s.default(this.scrollId, { scrollX: t.scrollX, scrollY: t.scrollY, probeType: 3, mouseWheel: !0, disableTouch: !1, disableMouse: !0, eventPassthrough: "horizontal" }), l.on("scrollStart", function () {
        t.bindscrollstart(this);
      }), l.on("scrollEnd", function () {
        t.bindscrollend(this), this.y == this.maxScrollY ? t.bindscrolltolower(this) : 0 == this.y && t.bindscrolltoupper(this);
      }), l.on("scroll", function () {
        t.bindscroll(this);
      });
    }, methods: { bindscrollstart: function bindscrollstart(t) {
        this.lowerY <= 0 ? this.readyRen = !0 : this.readyRen = !1, this.$emit("bindscrollstart", t);
      }, bindscrollend: function bindscrollend(t) {
        this.$emit("bindscrollend", t);
      }, bindscrolltoupper: function bindscrolltoupper(t) {
        this.$emit("bindscrolltoupper", t);
      }, bindscrolltolower: function bindscrolltolower(t) {
        this.$emit("bindscrolltolower", t);
      }, bindscroll: function bindscroll(t) {
        this.lowerY = parseInt(t.y - t.maxScrollY), this.$emit("bindscroll", t);
      }, refresh: function refresh() {
        l.refresh();
      } } };
}, function (t, e, i) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 });var n = i(43),
      s = r(n),
      a = i(45),
      o = r(a);i(38);var l = null;e.default = { name: "swiper", template: o.default, props: { indicatorDots: { default: !1 }, autoplay: { default: !1 }, current: { default: 0 }, interval: { default: 300 }, duration: { default: 500 }, circular: { default: !1 }, swiperId: { default: ".swiper" } }, computed: { pagination: function pagination() {
        return this.indicatorDots ? ".swiper-pagination" : "";
      }, intval: function intval() {
        return this.autoplay ? this.interval : 0;
      } }, mounted: function mounted() {
      l = new s.default(this.swiperId, { autoplay: this.intval, pagination: this.pagination, speed: this.duration, initialSlide: this.current, loop: this.circular });
    }, methods: { refresh: function refresh() {
        mySwiper.update();
      } } };
}, function (t, e, i) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }var n = i(35),
      s = r(n);t.exports = { v: .1, request: s.default };
}, function (t, e) {
  t.exports = vue - router;
}, function (t, e, i) {
  "use strict";
  function r(t) {
    var e = new a(t),
        i = s(a.prototype.request, e);return n.extend(i, a.prototype, e), n.extend(i, e), i;
  }var n = i(0),
      s = i(9),
      a = i(18),
      o = i(2),
      l = r(o);l.Axios = a, l.create = function (t) {
    return r(n.merge(o, t));
  }, l.Cancel = i(6), l.CancelToken = i(17), l.isCancel = i(7), l.all = function (t) {
    return Promise.all(t);
  }, l.spread = i(32), t.exports = l, t.exports.default = l;
}, function (t, e, i) {
  "use strict";
  function r(t) {
    if ("function" != typeof t) throw new TypeError("executor must be a function.");var e;this.promise = new Promise(function (t) {
      e = t;
    });var i = this;t(function (t) {
      i.reason || (i.reason = new n(t), e(i.reason));
    });
  }var n = i(6);r.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  }, r.source = function () {
    var t;return { token: new r(function (e) {
        t = e;
      }), cancel: t };
  }, t.exports = r;
}, function (t, e, i) {
  "use strict";
  function r(t) {
    this.defaults = t, this.interceptors = { request: new a(), response: new a() };
  }var n = i(2),
      s = i(0),
      a = i(19),
      o = i(20),
      l = i(28),
      u = i(26);r.prototype.request = function (t) {
    "string" == typeof t && (t = s.merge({ url: arguments[0] }, arguments[1])), t = s.merge(n, this.defaults, { method: "get" }, t), t.baseURL && !l(t.url) && (t.url = u(t.baseURL, t.url));var e = [o, void 0],
        i = Promise.resolve(t);for (this.interceptors.request.forEach(function (t) {
      e.unshift(t.fulfilled, t.rejected);
    }), this.interceptors.response.forEach(function (t) {
      e.push(t.fulfilled, t.rejected);
    }); e.length;) {
      i = i.then(e.shift(), e.shift());
    }return i;
  }, s.forEach(["delete", "get", "head", "options"], function (t) {
    r.prototype[t] = function (e, i) {
      return this.request(s.merge(i || {}, { method: t, url: e }));
    };
  }), s.forEach(["post", "put", "patch"], function (t) {
    r.prototype[t] = function (e, i, r) {
      return this.request(s.merge(r || {}, { method: t, url: e, data: i }));
    };
  }), t.exports = r;
}, function (t, e, i) {
  "use strict";
  function r() {
    this.handlers = [];
  }var n = i(0);r.prototype.use = function (t, e) {
    return this.handlers.push({ fulfilled: t, rejected: e }), this.handlers.length - 1;
  }, r.prototype.eject = function (t) {
    this.handlers[t] && (this.handlers[t] = null);
  }, r.prototype.forEach = function (t) {
    n.forEach(this.handlers, function (e) {
      null !== e && t(e);
    });
  }, t.exports = r;
}, function (t, e, i) {
  "use strict";
  function r(t) {
    t.cancelToken && t.cancelToken.throwIfRequested();
  }var n = i(0),
      s = i(23),
      a = i(7),
      o = i(2);t.exports = function (t) {
    return r(t), t.headers = t.headers || {}, t.data = s(t.data, t.headers, t.transformRequest), t.headers = n.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
      delete t.headers[e];
    }), (t.adapter || o.adapter)(t).then(function (e) {
      return r(t), e.data = s(e.data, e.headers, t.transformResponse), e;
    }, function (e) {
      return a(e) || (r(t), e && e.response && (e.response.data = s(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e);
    });
  };
}, function (t, e, i) {
  "use strict";
  t.exports = function (t, e, i, r) {
    return t.config = e, i && (t.code = i), t.response = r, t;
  };
}, function (t, e, i) {
  "use strict";
  var r = i(8);t.exports = function (t, e, i) {
    var n = i.config.validateStatus;i.status && n && !n(i.status) ? e(r("Request failed with status code " + i.status, i.config, null, i)) : t(i);
  };
}, function (t, e, i) {
  "use strict";
  var r = i(0);t.exports = function (t, e, i) {
    return r.forEach(i, function (i) {
      t = i(t, e);
    }), t;
  };
}, function (t, e, i) {
  "use strict";
  function r() {
    this.message = "String contains an invalid character";
  }function n(t) {
    for (var e, i, n = String(t), a = "", o = 0, l = s; n.charAt(0 | o) || (l = "=", o % 1); a += l.charAt(63 & e >> 8 - o % 1 * 8)) {
      if ((i = n.charCodeAt(o += .75)) > 255) throw new r();e = e << 8 | i;
    }return a;
  }var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype = new Error(), r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", t.exports = n;
}, function (t, e, i) {
  "use strict";
  function r(t) {
    return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }var n = i(0);t.exports = function (t, e, i) {
    if (!e) return t;var s;if (i) s = i(e);else if (n.isURLSearchParams(e)) s = e.toString();else {
      var a = [];n.forEach(e, function (t, e) {
        null !== t && void 0 !== t && (n.isArray(t) && (e += "[]"), n.isArray(t) || (t = [t]), n.forEach(t, function (t) {
          n.isDate(t) ? t = t.toISOString() : n.isObject(t) && (t = JSON.stringify(t)), a.push(r(e) + "=" + r(t));
        }));
      }), s = a.join("&");
    }return s && (t += (t.indexOf("?") === -1 ? "?" : "&") + s), t;
  };
}, function (t, e, i) {
  "use strict";
  t.exports = function (t, e) {
    return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
  };
}, function (t, e, i) {
  "use strict";
  var r = i(0);t.exports = r.isStandardBrowserEnv() ? function () {
    return { write: function write(t, e, i, n, s, a) {
        var o = [];o.push(t + "=" + encodeURIComponent(e)), r.isNumber(i) && o.push("expires=" + new Date(i).toGMTString()), r.isString(n) && o.push("path=" + n), r.isString(s) && o.push("domain=" + s), a === !0 && o.push("secure"), document.cookie = o.join("; ");
      }, read: function read(t) {
        var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));return e ? decodeURIComponent(e[3]) : null;
      }, remove: function remove(t) {
        this.write(t, "", Date.now() - 864e5);
      } };
  }() : function () {
    return { write: function write() {}, read: function read() {
        return null;
      }, remove: function remove() {} };
  }();
}, function (t, e, i) {
  "use strict";
  t.exports = function (t) {
    return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    );
  };
}, function (t, e, i) {
  "use strict";
  var r = i(0);t.exports = r.isStandardBrowserEnv() ? function () {
    function t(t) {
      var e = t;return i && (n.setAttribute("href", e), e = n.href), n.setAttribute("href", e), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname };
    }var e,
        i = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");return e = t(window.location.href), function (i) {
      var n = r.isString(i) ? t(i) : i;return n.protocol === e.protocol && n.host === e.host;
    };
  }() : function () {
    return function () {
      return !0;
    };
  }();
}, function (t, e, i) {
  "use strict";
  var r = i(0);t.exports = function (t, e) {
    r.forEach(t, function (i, r) {
      r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = i, delete t[r]);
    });
  };
}, function (t, e, i) {
  "use strict";
  var r = i(0);t.exports = function (t) {
    var e,
        i,
        n,
        s = {};return t ? (r.forEach(t.split("\n"), function (t) {
      n = t.indexOf(":"), e = r.trim(t.substr(0, n)).toLowerCase(), i = r.trim(t.substr(n + 1)), e && (s[e] = s[e] ? s[e] + ", " + i : i);
    }), s) : s;
  };
}, function (t, e, i) {
  "use strict";
  t.exports = function (t) {
    return function (e) {
      return t.apply(null, e);
    };
  };
}, function (t, e, i) {
  "use strict";
  var r,
      n = function n(t, e) {
    if (void 0 === i) var i = new t({ el: "#app", router: e, template: "<router-view></router-view>" });
  };"undefined" != typeof window && window.getApp && (window.getApp = function () {
    return r;
  }), t.exports = n;
}, function (t, e, i) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }function n(t) {
    if (null == t) throw new TypeError("Cannot destructure undefined");
  }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) {
    void 0 !== t && (l.default.has(t, "data") && l.default.extend(t.data, p.data), l.default.extend(p, t));var e = ["onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "data", "watch"],
        i = {};for (var r in p) {
      l.default.indexOf(e, r) == -1 && (i[r] = p[r]);
    }u.data = function () {
      var t;return t = p.data, n(t), t;
    };var s = "<transition name='animRight' v-on:enter-cancelled='onShow' v-on:leave-cancelled='onHide'>";return s += "<div class='cxPage animated' v-if='show'><slot>", s += p.template, s += "</slot></div>", s += "</transition>", u.template = s, u.created = p.onLoad, u.mounted = p.onReady, u.destroyed = p.onUnload, u.watch = p.watch, u.methods = i, u;
  };var s = i(3),
      a = (r(s), i(4)),
      o = (r(a), i(1)),
      l = r(o),
      u = { name: "namevvs", beforeCreate: function beforeCreate() {}, created: function created() {}, beforeMount: function beforeMount() {}, mounted: function mounted() {}, enterCancelled: function enterCancelled() {}, beforeUpdate: function beforeUpdate() {}, updated: function updated() {}, activated: function activated() {}, deactivated: function deactivated() {}, leaveCancelled: function leaveCancelled() {}, beforeDestroy: function beforeDestroy() {}, destroyed: function destroyed() {} },
      p = { template: "<div><slot></slot></div>", data: { show: !0, pv: 1 }, watch: {}, onLoad: function onLoad(t) {}, onReady: function onReady() {}, onShow: function onShow() {}, onHide: function onHide() {}, onUnload: function onUnload() {}, onPullDownRefresh: function onPullDownRefresh() {}, onReachBottom: function onReachBottom() {}, onShareAppMessage: function onShareAppMessage() {}, setData: function setData(t) {
      var e = this;l.default.forEach(data, function (t, i) {
        e[i] = t;
      });
    } };
}, function (t, e, i) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) {
    var e = {};e.url = "", e.method = "get", e.dataType = "json", e.headers = { "Content-Type": "application/json;charset=utf-8" }, e.success = function (t) {}, e.fail = function (t) {}, e.complete = function (t) {};var i = o.default.clone(e);o.default.has(t, "dataType") && (t.responseType = t.dataType), o.default.extend(i, t), (0, s.default)(i).then(function (t) {
      i.success(t.data), i.complete(t.data);
    }).catch(function (t) {
      i.fail(t), i.complete(t);
    });
  };var n = i(4),
      s = r(n),
      a = i(1),
      o = r(a);
}, function (t, e, i) {
  "use strict";
  function r(t) {
    var e = t.length;if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0;
  }function n(t) {
    return 3 * t.length / 4 - r(t);
  }function s(t) {
    var e,
        i,
        n,
        s,
        a,
        o,
        l = t.length;a = r(t), o = new c(3 * l / 4 - a), n = a > 0 ? l - 4 : l;var u = 0;for (e = 0, i = 0; e < n; e += 4, i += 3) {
      s = p[t.charCodeAt(e)] << 18 | p[t.charCodeAt(e + 1)] << 12 | p[t.charCodeAt(e + 2)] << 6 | p[t.charCodeAt(e + 3)], o[u++] = s >> 16 & 255, o[u++] = s >> 8 & 255, o[u++] = 255 & s;
    }return 2 === a ? (s = p[t.charCodeAt(e)] << 2 | p[t.charCodeAt(e + 1)] >> 4, o[u++] = 255 & s) : 1 === a && (s = p[t.charCodeAt(e)] << 10 | p[t.charCodeAt(e + 1)] << 4 | p[t.charCodeAt(e + 2)] >> 2, o[u++] = s >> 8 & 255, o[u++] = 255 & s), o;
  }function a(t) {
    return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t];
  }function o(t, e, i) {
    for (var r, n = [], s = e; s < i; s += 3) {
      r = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2], n.push(a(r));
    }return n.join("");
  }function l(t) {
    for (var e, i = t.length, r = i % 3, n = "", s = [], a = 16383, l = 0, p = i - r; l < p; l += a) {
      s.push(o(t, l, l + a > p ? p : l + a));
    }return 1 === r ? (e = t[i - 1], n += u[e >> 2], n += u[e << 4 & 63], n += "==") : 2 === r && (e = (t[i - 2] << 8) + t[i - 1], n += u[e >> 10], n += u[e >> 4 & 63], n += u[e << 2 & 63], n += "="), s.push(n), s.join("");
  }e.byteLength = n, e.toByteArray = s, e.fromByteArray = l;for (var u = [], p = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, f = h.length; d < f; ++d) {
    u[d] = h[d], p[h.charCodeAt(d)] = d;
  }p["-".charCodeAt(0)] = 62, p["_".charCodeAt(0)] = 63;
}, function (t, e, i) {
  "use strict";
  (function (t) {
    function r() {
      try {
        var t = new Uint8Array(1);return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
            return 42;
          } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
      } catch (t) {
        return !1;
      }
    }function n() {
      return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }function s(t, e) {
      if (n() < e) throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = a.prototype) : (null === t && (t = new a(e)), t.length = e), t;
    }function a(t, e, i) {
      if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(t, e, i);if ("number" == typeof t) {
        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");return p(this, t);
      }return o(this, t, e, i);
    }function o(t, e, i, r) {
      if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? d(t, e, i, r) : "string" == typeof e ? c(t, e, i) : f(t, e);
    }function l(t) {
      if ("number" != typeof t) throw new TypeError('"size" argument must be a number');if (t < 0) throw new RangeError('"size" argument must not be negative');
    }function u(t, e, i, r) {
      return l(e), e <= 0 ? s(t, e) : void 0 !== i ? "string" == typeof r ? s(t, e).fill(i, r) : s(t, e).fill(i) : s(t, e);
    }function p(t, e) {
      if (l(e), t = s(t, e < 0 ? 0 : 0 | m(e)), !a.TYPED_ARRAY_SUPPORT) for (var i = 0; i < e; ++i) {
        t[i] = 0;
      }return t;
    }function c(t, e, i) {
      if ("string" == typeof i && "" !== i || (i = "utf8"), !a.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding');var r = 0 | v(e, i);t = s(t, r);var n = t.write(e, i);return n !== r && (t = t.slice(0, n)), t;
    }function h(t, e) {
      var i = e.length < 0 ? 0 : 0 | m(e.length);t = s(t, i);for (var r = 0; r < i; r += 1) {
        t[r] = 255 & e[r];
      }return t;
    }function d(t, e, i, r) {
      if (e.byteLength, i < 0 || e.byteLength < i) throw new RangeError("'offset' is out of bounds");if (e.byteLength < i + (r || 0)) throw new RangeError("'length' is out of bounds");return e = void 0 === i && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, i) : new Uint8Array(e, i, r), a.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = a.prototype) : t = h(t, e), t;
    }function f(t, e) {
      if (a.isBuffer(e)) {
        var i = 0 | m(e.length);return t = s(t, i), 0 === t.length ? t : (e.copy(t, 0, 0, i), t);
      }if (e) {
        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || $(e.length) ? s(t, 0) : h(t, e);if ("Buffer" === e.type && Q(e.data)) return h(t, e.data);
      }throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }function m(t) {
      if (t >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");return 0 | t;
    }function g(t) {
      return +t != t && (t = 0), a.alloc(+t);
    }function v(t, e) {
      if (a.isBuffer(t)) return t.length;if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;"string" != typeof t && (t = "" + t);var i = t.length;if (0 === i) return 0;for (var r = !1;;) {
        switch (e) {case "ascii":case "latin1":case "binary":
            return i;case "utf8":case "utf-8":case void 0:
            return U(t).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return 2 * i;case "hex":
            return i >>> 1;case "base64":
            return q(t).length;default:
            if (r) return U(t).length;e = ("" + e).toLowerCase(), r = !0;}
      }
    }function w(t, e, i) {
      var r = !1;if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";if (i >>>= 0, e >>>= 0, i <= e) return "";for (t || (t = "utf8");;) {
        switch (t) {case "hex":
            return B(this, e, i);case "utf8":case "utf-8":
            return k(this, e, i);case "ascii":
            return _(this, e, i);case "latin1":case "binary":
            return Y(this, e, i);case "base64":
            return M(this, e, i);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return I(this, e, i);default:
            if (r) throw new TypeError("Unknown encoding: " + t);t = (t + "").toLowerCase(), r = !0;}
      }
    }function y(t, e, i) {
      var r = t[e];t[e] = t[i], t[i] = r;
    }function x(t, e, i, r, n) {
      if (0 === t.length) return -1;if ("string" == typeof i ? (r = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = n ? 0 : t.length - 1), i < 0 && (i = t.length + i), i >= t.length) {
        if (n) return -1;i = t.length - 1;
      } else if (i < 0) {
        if (!n) return -1;i = 0;
      }if ("string" == typeof e && (e = a.from(e, r)), a.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, i, r, n);if ("number" == typeof e) return e &= 255, a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(t, e, i) : Uint8Array.prototype.lastIndexOf.call(t, e, i) : b(t, [e], i, r, n);throw new TypeError("val must be string, number or Buffer");
    }function b(t, e, i, r, n) {
      function s(t, e) {
        return 1 === a ? t[e] : t.readUInt16BE(e * a);
      }var a = 1,
          o = t.length,
          l = e.length;if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (t.length < 2 || e.length < 2) return -1;a = 2, o /= 2, l /= 2, i /= 2;
      }var u;if (n) {
        var p = -1;for (u = i; u < o; u++) {
          if (s(t, u) === s(e, p === -1 ? 0 : u - p)) {
            if (p === -1 && (p = u), u - p + 1 === l) return p * a;
          } else p !== -1 && (u -= u - p), p = -1;
        }
      } else for (i + l > o && (i = o - l), u = i; u >= 0; u--) {
        for (var c = !0, h = 0; h < l; h++) {
          if (s(t, u + h) !== s(e, h)) {
            c = !1;break;
          }
        }if (c) return u;
      }return -1;
    }function T(t, e, i, r) {
      i = Number(i) || 0;var n = t.length - i;r ? (r = Number(r)) > n && (r = n) : r = n;var s = e.length;if (s % 2 != 0) throw new TypeError("Invalid hex string");r > s / 2 && (r = s / 2);for (var a = 0; a < r; ++a) {
        var o = parseInt(e.substr(2 * a, 2), 16);if (isNaN(o)) return a;t[i + a] = o;
      }return a;
    }function S(t, e, i, r) {
      return K(U(e, t.length - i), t, i, r);
    }function E(t, e, i, r) {
      return K(V(e), t, i, r);
    }function C(t, e, i, r) {
      return E(t, e, i, r);
    }function P(t, e, i, r) {
      return K(q(e), t, i, r);
    }function z(t, e, i, r) {
      return K(F(e, t.length - i), t, i, r);
    }function M(t, e, i) {
      return 0 === e && i === t.length ? Z.fromByteArray(t) : Z.fromByteArray(t.slice(e, i));
    }function k(t, e, i) {
      i = Math.min(t.length, i);for (var r = [], n = e; n < i;) {
        var s = t[n],
            a = null,
            o = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;if (n + o <= i) {
          var l, u, p, c;switch (o) {case 1:
              s < 128 && (a = s);break;case 2:
              l = t[n + 1], 128 == (192 & l) && (c = (31 & s) << 6 | 63 & l) > 127 && (a = c);break;case 3:
              l = t[n + 1], u = t[n + 2], 128 == (192 & l) && 128 == (192 & u) && (c = (15 & s) << 12 | (63 & l) << 6 | 63 & u) > 2047 && (c < 55296 || c > 57343) && (a = c);break;case 4:
              l = t[n + 1], u = t[n + 2], p = t[n + 3], 128 == (192 & l) && 128 == (192 & u) && 128 == (192 & p) && (c = (15 & s) << 18 | (63 & l) << 12 | (63 & u) << 6 | 63 & p) > 65535 && c < 1114112 && (a = c);}
        }null === a ? (a = 65533, o = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), r.push(a), n += o;
      }return A(r);
    }function A(t) {
      var e = t.length;if (e <= tt) return String.fromCharCode.apply(String, t);for (var i = "", r = 0; r < e;) {
        i += String.fromCharCode.apply(String, t.slice(r, r += tt));
      }return i;
    }function _(t, e, i) {
      var r = "";i = Math.min(t.length, i);for (var n = e; n < i; ++n) {
        r += String.fromCharCode(127 & t[n]);
      }return r;
    }function Y(t, e, i) {
      var r = "";i = Math.min(t.length, i);for (var n = e; n < i; ++n) {
        r += String.fromCharCode(t[n]);
      }return r;
    }function B(t, e, i) {
      var r = t.length;(!e || e < 0) && (e = 0), (!i || i < 0 || i > r) && (i = r);for (var n = "", s = e; s < i; ++s) {
        n += j(t[s]);
      }return n;
    }function I(t, e, i) {
      for (var r = t.slice(e, i), n = "", s = 0; s < r.length; s += 2) {
        n += String.fromCharCode(r[s] + 256 * r[s + 1]);
      }return n;
    }function D(t, e, i) {
      if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");if (t + e > i) throw new RangeError("Trying to access beyond buffer length");
    }function X(t, e, i, r, n, s) {
      if (!a.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');if (e > n || e < s) throw new RangeError('"value" argument is out of bounds');if (i + r > t.length) throw new RangeError("Index out of range");
    }function R(t, e, i, r) {
      e < 0 && (e = 65535 + e + 1);for (var n = 0, s = Math.min(t.length - i, 2); n < s; ++n) {
        t[i + n] = (e & 255 << 8 * (r ? n : 1 - n)) >>> 8 * (r ? n : 1 - n);
      }
    }function L(t, e, i, r) {
      e < 0 && (e = 4294967295 + e + 1);for (var n = 0, s = Math.min(t.length - i, 4); n < s; ++n) {
        t[i + n] = e >>> 8 * (r ? n : 3 - n) & 255;
      }
    }function O(t, e, i, r, n, s) {
      if (i + r > t.length) throw new RangeError("Index out of range");if (i < 0) throw new RangeError("Index out of range");
    }function H(t, e, i, r, n) {
      return n || O(t, e, i, 4, 3.4028234663852886e38, -3.4028234663852886e38), J.write(t, e, i, r, 23, 4), i + 4;
    }function N(t, e, i, r, n) {
      return n || O(t, e, i, 8, 1.7976931348623157e308, -1.7976931348623157e308), J.write(t, e, i, r, 52, 8), i + 8;
    }function W(t) {
      if (t = G(t).replace(et, ""), t.length < 2) return "";for (; t.length % 4 != 0;) {
        t += "=";
      }return t;
    }function G(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }function j(t) {
      return t < 16 ? "0" + t.toString(16) : t.toString(16);
    }function U(t, e) {
      e = e || 1 / 0;for (var i, r = t.length, n = null, s = [], a = 0; a < r; ++a) {
        if ((i = t.charCodeAt(a)) > 55295 && i < 57344) {
          if (!n) {
            if (i > 56319) {
              (e -= 3) > -1 && s.push(239, 191, 189);continue;
            }if (a + 1 === r) {
              (e -= 3) > -1 && s.push(239, 191, 189);continue;
            }n = i;continue;
          }if (i < 56320) {
            (e -= 3) > -1 && s.push(239, 191, 189), n = i;continue;
          }i = 65536 + (n - 55296 << 10 | i - 56320);
        } else n && (e -= 3) > -1 && s.push(239, 191, 189);if (n = null, i < 128) {
          if ((e -= 1) < 0) break;s.push(i);
        } else if (i < 2048) {
          if ((e -= 2) < 0) break;s.push(i >> 6 | 192, 63 & i | 128);
        } else if (i < 65536) {
          if ((e -= 3) < 0) break;s.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128);
        } else {
          if (!(i < 1114112)) throw new Error("Invalid code point");if ((e -= 4) < 0) break;s.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128);
        }
      }return s;
    }function V(t) {
      for (var e = [], i = 0; i < t.length; ++i) {
        e.push(255 & t.charCodeAt(i));
      }return e;
    }function F(t, e) {
      for (var i, r, n, s = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) {
        i = t.charCodeAt(a), r = i >> 8, n = i % 256, s.push(n), s.push(r);
      }return s;
    }function q(t) {
      return Z.toByteArray(W(t));
    }function K(t, e, i, r) {
      for (var n = 0; n < r && !(n + i >= e.length || n >= t.length); ++n) {
        e[n + i] = t[n];
      }return n;
    }function $(t) {
      return t !== t;
    } /*!
      * The buffer module from node.js, for the browser.
      *
      * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
      * @license  MIT
      */
    var Z = i(36),
        J = i(39),
        Q = i(40);e.Buffer = a, e.SlowBuffer = g, e.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : r(), e.kMaxLength = n(), a.poolSize = 8192, a._augment = function (t) {
      return t.__proto__ = a.prototype, t;
    }, a.from = function (t, e, i) {
      return o(null, t, e, i);
    }, a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, { value: null, configurable: !0 })), a.alloc = function (t, e, i) {
      return u(null, t, e, i);
    }, a.allocUnsafe = function (t) {
      return p(null, t);
    }, a.allocUnsafeSlow = function (t) {
      return p(null, t);
    }, a.isBuffer = function (t) {
      return !(null == t || !t._isBuffer);
    }, a.compare = function (t, e) {
      if (!a.isBuffer(t) || !a.isBuffer(e)) throw new TypeError("Arguments must be Buffers");if (t === e) return 0;for (var i = t.length, r = e.length, n = 0, s = Math.min(i, r); n < s; ++n) {
        if (t[n] !== e[n]) {
          i = t[n], r = e[n];break;
        }
      }return i < r ? -1 : r < i ? 1 : 0;
    }, a.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
          return !0;default:
          return !1;}
    }, a.concat = function (t, e) {
      if (!Q(t)) throw new TypeError('"list" argument must be an Array of Buffers');if (0 === t.length) return a.alloc(0);var i;if (void 0 === e) for (e = 0, i = 0; i < t.length; ++i) {
        e += t[i].length;
      }var r = a.allocUnsafe(e),
          n = 0;for (i = 0; i < t.length; ++i) {
        var s = t[i];if (!a.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r, n), n += s.length;
      }return r;
    }, a.byteLength = v, a.prototype._isBuffer = !0, a.prototype.swap16 = function () {
      var t = this.length;if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");for (var e = 0; e < t; e += 2) {
        y(this, e, e + 1);
      }return this;
    }, a.prototype.swap32 = function () {
      var t = this.length;if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");for (var e = 0; e < t; e += 4) {
        y(this, e, e + 3), y(this, e + 1, e + 2);
      }return this;
    }, a.prototype.swap64 = function () {
      var t = this.length;if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");for (var e = 0; e < t; e += 8) {
        y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
      }return this;
    }, a.prototype.toString = function () {
      var t = 0 | this.length;return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : w.apply(this, arguments);
    }, a.prototype.equals = function (t) {
      if (!a.isBuffer(t)) throw new TypeError("Argument must be a Buffer");return this === t || 0 === a.compare(this, t);
    }, a.prototype.inspect = function () {
      var t = "",
          i = e.INSPECT_MAX_BYTES;return this.length > 0 && (t = this.toString("hex", 0, i).match(/.{2}/g).join(" "), this.length > i && (t += " ... ")), "<Buffer " + t + ">";
    }, a.prototype.compare = function (t, e, i, r, n) {
      if (!a.isBuffer(t)) throw new TypeError("Argument must be a Buffer");if (void 0 === e && (e = 0), void 0 === i && (i = t ? t.length : 0), void 0 === r && (r = 0), void 0 === n && (n = this.length), e < 0 || i > t.length || r < 0 || n > this.length) throw new RangeError("out of range index");if (r >= n && e >= i) return 0;if (r >= n) return -1;if (e >= i) return 1;if (e >>>= 0, i >>>= 0, r >>>= 0, n >>>= 0, this === t) return 0;for (var s = n - r, o = i - e, l = Math.min(s, o), u = this.slice(r, n), p = t.slice(e, i), c = 0; c < l; ++c) {
        if (u[c] !== p[c]) {
          s = u[c], o = p[c];break;
        }
      }return s < o ? -1 : o < s ? 1 : 0;
    }, a.prototype.includes = function (t, e, i) {
      return this.indexOf(t, e, i) !== -1;
    }, a.prototype.indexOf = function (t, e, i) {
      return x(this, t, e, i, !0);
    }, a.prototype.lastIndexOf = function (t, e, i) {
      return x(this, t, e, i, !1);
    }, a.prototype.write = function (t, e, i, r) {
      if (void 0 === e) r = "utf8", i = this.length, e = 0;else if (void 0 === i && "string" == typeof e) r = e, i = this.length, e = 0;else {
        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e |= 0, isFinite(i) ? (i |= 0, void 0 === r && (r = "utf8")) : (r = i, i = void 0);
      }var n = this.length - e;if ((void 0 === i || i > n) && (i = n), t.length > 0 && (i < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");r || (r = "utf8");for (var s = !1;;) {
        switch (r) {case "hex":
            return T(this, t, e, i);case "utf8":case "utf-8":
            return S(this, t, e, i);case "ascii":
            return E(this, t, e, i);case "latin1":case "binary":
            return C(this, t, e, i);case "base64":
            return P(this, t, e, i);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return z(this, t, e, i);default:
            if (s) throw new TypeError("Unknown encoding: " + r);r = ("" + r).toLowerCase(), s = !0;}
      }
    }, a.prototype.toJSON = function () {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };var tt = 4096;a.prototype.slice = function (t, e) {
      var i = this.length;t = ~~t, e = void 0 === e ? i : ~~e, t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), e < t && (e = t);var r;if (a.TYPED_ARRAY_SUPPORT) r = this.subarray(t, e), r.__proto__ = a.prototype;else {
        var n = e - t;r = new a(n, void 0);for (var s = 0; s < n; ++s) {
          r[s] = this[s + t];
        }
      }return r;
    }, a.prototype.readUIntLE = function (t, e, i) {
      t |= 0, e |= 0, i || D(t, e, this.length);for (var r = this[t], n = 1, s = 0; ++s < e && (n *= 256);) {
        r += this[t + s] * n;
      }return r;
    }, a.prototype.readUIntBE = function (t, e, i) {
      t |= 0, e |= 0, i || D(t, e, this.length);for (var r = this[t + --e], n = 1; e > 0 && (n *= 256);) {
        r += this[t + --e] * n;
      }return r;
    }, a.prototype.readUInt8 = function (t, e) {
      return e || D(t, 1, this.length), this[t];
    }, a.prototype.readUInt16LE = function (t, e) {
      return e || D(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, a.prototype.readUInt16BE = function (t, e) {
      return e || D(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, a.prototype.readUInt32LE = function (t, e) {
      return e || D(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, a.prototype.readUInt32BE = function (t, e) {
      return e || D(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, a.prototype.readIntLE = function (t, e, i) {
      t |= 0, e |= 0, i || D(t, e, this.length);for (var r = this[t], n = 1, s = 0; ++s < e && (n *= 256);) {
        r += this[t + s] * n;
      }return n *= 128, r >= n && (r -= Math.pow(2, 8 * e)), r;
    }, a.prototype.readIntBE = function (t, e, i) {
      t |= 0, e |= 0, i || D(t, e, this.length);for (var r = e, n = 1, s = this[t + --r]; r > 0 && (n *= 256);) {
        s += this[t + --r] * n;
      }return n *= 128, s >= n && (s -= Math.pow(2, 8 * e)), s;
    }, a.prototype.readInt8 = function (t, e) {
      return e || D(t, 1, this.length), 128 & this[t] ? (255 - this[t] + 1) * -1 : this[t];
    }, a.prototype.readInt16LE = function (t, e) {
      e || D(t, 2, this.length);var i = this[t] | this[t + 1] << 8;return 32768 & i ? 4294901760 | i : i;
    }, a.prototype.readInt16BE = function (t, e) {
      e || D(t, 2, this.length);var i = this[t + 1] | this[t] << 8;return 32768 & i ? 4294901760 | i : i;
    }, a.prototype.readInt32LE = function (t, e) {
      return e || D(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, a.prototype.readInt32BE = function (t, e) {
      return e || D(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, a.prototype.readFloatLE = function (t, e) {
      return e || D(t, 4, this.length), J.read(this, t, !0, 23, 4);
    }, a.prototype.readFloatBE = function (t, e) {
      return e || D(t, 4, this.length), J.read(this, t, !1, 23, 4);
    }, a.prototype.readDoubleLE = function (t, e) {
      return e || D(t, 8, this.length), J.read(this, t, !0, 52, 8);
    }, a.prototype.readDoubleBE = function (t, e) {
      return e || D(t, 8, this.length), J.read(this, t, !1, 52, 8);
    }, a.prototype.writeUIntLE = function (t, e, i, r) {
      if (t = +t, e |= 0, i |= 0, !r) {
        X(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
      }var n = 1,
          s = 0;for (this[e] = 255 & t; ++s < i && (n *= 256);) {
        this[e + s] = t / n & 255;
      }return e + i;
    }, a.prototype.writeUIntBE = function (t, e, i, r) {
      if (t = +t, e |= 0, i |= 0, !r) {
        X(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
      }var n = i - 1,
          s = 1;for (this[e + n] = 255 & t; --n >= 0 && (s *= 256);) {
        this[e + n] = t / s & 255;
      }return e + i;
    }, a.prototype.writeUInt8 = function (t, e, i) {
      return t = +t, e |= 0, i || X(this, t, e, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
    }, a.prototype.writeUInt16LE = function (t, e, i) {
      return t = +t, e |= 0, i || X(this, t, e, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : R(this, t, e, !0), e + 2;
    }, a.prototype.writeUInt16BE = function (t, e, i) {
      return t = +t, e |= 0, i || X(this, t, e, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : R(this, t, e, !1), e + 2;
    }, a.prototype.writeUInt32LE = function (t, e, i) {
      return t = +t, e |= 0, i || X(this, t, e, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : L(this, t, e, !0), e + 4;
    }, a.prototype.writeUInt32BE = function (t, e, i) {
      return t = +t, e |= 0, i || X(this, t, e, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4;
    }, a.prototype.writeIntLE = function (t, e, i, r) {
      if (t = +t, e |= 0, !r) {
        var n = Math.pow(2, 8 * i - 1);X(this, t, e, i, n - 1, -n);
      }var s = 0,
          a = 1,
          o = 0;for (this[e] = 255 & t; ++s < i && (a *= 256);) {
        t < 0 && 0 === o && 0 !== this[e + s - 1] && (o = 1), this[e + s] = (t / a >> 0) - o & 255;
      }return e + i;
    }, a.prototype.writeIntBE = function (t, e, i, r) {
      if (t = +t, e |= 0, !r) {
        var n = Math.pow(2, 8 * i - 1);X(this, t, e, i, n - 1, -n);
      }var s = i - 1,
          a = 1,
          o = 0;for (this[e + s] = 255 & t; --s >= 0 && (a *= 256);) {
        t < 0 && 0 === o && 0 !== this[e + s + 1] && (o = 1), this[e + s] = (t / a >> 0) - o & 255;
      }return e + i;
    }, a.prototype.writeInt8 = function (t, e, i) {
      return t = +t, e |= 0, i || X(this, t, e, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
    }, a.prototype.writeInt16LE = function (t, e, i) {
      return t = +t, e |= 0, i || X(this, t, e, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : R(this, t, e, !0), e + 2;
    }, a.prototype.writeInt16BE = function (t, e, i) {
      return t = +t, e |= 0, i || X(this, t, e, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : R(this, t, e, !1), e + 2;
    }, a.prototype.writeInt32LE = function (t, e, i) {
      return t = +t, e |= 0, i || X(this, t, e, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : L(this, t, e, !0), e + 4;
    }, a.prototype.writeInt32BE = function (t, e, i) {
      return t = +t, e |= 0, i || X(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4;
    }, a.prototype.writeFloatLE = function (t, e, i) {
      return H(this, t, e, !0, i);
    }, a.prototype.writeFloatBE = function (t, e, i) {
      return H(this, t, e, !1, i);
    }, a.prototype.writeDoubleLE = function (t, e, i) {
      return N(this, t, e, !0, i);
    }, a.prototype.writeDoubleBE = function (t, e, i) {
      return N(this, t, e, !1, i);
    }, a.prototype.copy = function (t, e, i, r) {
      if (i || (i = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < i && (r = i), r === i) return 0;if (0 === t.length || 0 === this.length) return 0;if (e < 0) throw new RangeError("targetStart out of bounds");if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");if (r < 0) throw new RangeError("sourceEnd out of bounds");r > this.length && (r = this.length), t.length - e < r - i && (r = t.length - e + i);var n,
          s = r - i;if (this === t && i < e && e < r) for (n = s - 1; n >= 0; --n) {
        t[n + e] = this[n + i];
      } else if (s < 1e3 || !a.TYPED_ARRAY_SUPPORT) for (n = 0; n < s; ++n) {
        t[n + e] = this[n + i];
      } else Uint8Array.prototype.set.call(t, this.subarray(i, i + s), e);return s;
    }, a.prototype.fill = function (t, e, i, r) {
      if ("string" == typeof t) {
        if ("string" == typeof e ? (r = e, e = 0, i = this.length) : "string" == typeof i && (r = i, i = this.length), 1 === t.length) {
          var n = t.charCodeAt(0);n < 256 && (t = n);
        }if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");if ("string" == typeof r && !a.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
      } else "number" == typeof t && (t &= 255);if (e < 0 || this.length < e || this.length < i) throw new RangeError("Out of range index");if (i <= e) return this;e >>>= 0, i = void 0 === i ? this.length : i >>> 0, t || (t = 0);var s;if ("number" == typeof t) for (s = e; s < i; ++s) {
        this[s] = t;
      } else {
        var o = a.isBuffer(t) ? t : U(new a(t, r).toString()),
            l = o.length;for (s = 0; s < i - e; ++s) {
          this[s + e] = o[s % l];
        }
      }return this;
    };var et = /[^+\/0-9A-Za-z-_]/g;
  }).call(e, i(10));
}, function (t, e) {}, function (t, e) {
  e.read = function (t, e, i, r, n) {
    var s,
        a,
        o = 8 * n - r - 1,
        l = (1 << o) - 1,
        u = l >> 1,
        p = -7,
        c = i ? n - 1 : 0,
        h = i ? -1 : 1,
        d = t[e + c];for (c += h, s = d & (1 << -p) - 1, d >>= -p, p += o; p > 0; s = 256 * s + t[e + c], c += h, p -= 8) {}for (a = s & (1 << -p) - 1, s >>= -p, p += r; p > 0; a = 256 * a + t[e + c], c += h, p -= 8) {}if (0 === s) s = 1 - u;else {
      if (s === l) return a ? NaN : 1 / 0 * (d ? -1 : 1);a += Math.pow(2, r), s -= u;
    }return (d ? -1 : 1) * a * Math.pow(2, s - r);
  }, e.write = function (t, e, i, r, n, s) {
    var a,
        o,
        l,
        u = 8 * s - n - 1,
        p = (1 << u) - 1,
        c = p >> 1,
        h = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        d = r ? 0 : s - 1,
        f = r ? 1 : -1,
        m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, a = p) : (a = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), e += a + c >= 1 ? h / l : h * Math.pow(2, 1 - c), e * l >= 2 && (a++, l /= 2), a + c >= p ? (o = 0, a = p) : a + c >= 1 ? (o = (e * l - 1) * Math.pow(2, n), a += c) : (o = e * Math.pow(2, c - 1) * Math.pow(2, n), a = 0)); n >= 8; t[i + d] = 255 & o, d += f, o /= 256, n -= 8) {}for (a = a << n | o, u += n; u > 0; t[i + d] = 255 & a, d += f, a /= 256, u -= 8) {}t[i + d - f] |= 128 * m;
  };
}, function (t, e) {
  var i = {}.toString;t.exports = Array.isArray || function (t) {
    return "[object Array]" == i.call(t);
  };
}, function (t, e, i) {
  var r; /*! iScroll v5.2.0-snapshot ~ (c) 2008-2017 Matteo Spinelli ~ http://cubiq.org/license */
  !function (n, s, a) {
    function o(t, e) {
      this.wrapper = "string" == typeof t ? s.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = { resizeScrollbars: !0, mouseWheelSpeed: 20, snapThreshold: .334, disablePointer: !c.hasPointer, disableTouch: c.hasPointer || !c.hasTouch, disableMouse: c.hasPointer || c.hasTouch, startX: 0, startY: 0, scrollY: !0, directionLockThreshold: 5, momentum: !0, bounce: !0, bounceTime: 600, bounceEasing: "", preventDefault: !0, preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }, HWCompositing: !0, useTransition: !0, useTransform: !0, bindToWrapper: void 0 === n.onmousedown };for (var i in e) {
        this.options[i] = e[i];
      }this.translateZ = this.options.HWCompositing && c.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = c.hasTransition && this.options.useTransition, this.options.useTransform = c.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? c.ease[this.options.bounceEasing] || c.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, 3 == this.options.probeType && (this.options.useTransition = !1), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable();
    }function l(t, e, i) {
      var r = s.createElement("div"),
          n = s.createElement("div");return i === !0 && (r.style.cssText = "position:absolute;z-index:9999", n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), n.className = "iScrollIndicator", "h" == t ? (i === !0 && (r.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", n.style.height = "100%"), r.className = "iScrollHorizontalScrollbar") : (i === !0 && (r.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", n.style.width = "100%"), r.className = "iScrollVerticalScrollbar"), r.style.cssText += ";overflow:hidden", e || (r.style.pointerEvents = "none"), r.appendChild(n), r;
    }function u(t, e) {
      this.wrapper = "string" == typeof e.el ? s.querySelector(e.el) : e.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = t, this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 };for (var i in e) {
        this.options[i] = e[i];
      }if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (c.addEvent(this.indicator, "touchstart", this), c.addEvent(n, "touchend", this)), this.options.disablePointer || (c.addEvent(this.indicator, c.prefixPointerEvent("pointerdown"), this), c.addEvent(n, c.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (c.addEvent(this.indicator, "mousedown", this), c.addEvent(n, "mouseup", this))), this.options.fade) {
        this.wrapperStyle[c.style.transform] = this.scroller.translateZ;var r = c.style.transitionDuration;if (!r) return;this.wrapperStyle[r] = c.isBadAndroid ? "0.0001ms" : "0ms";var a = this;c.isBadAndroid && p(function () {
          "0.0001ms" === a.wrapperStyle[r] && (a.wrapperStyle[r] = "0s");
        }), this.wrapperStyle.opacity = "0";
      }
    }var p = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n.msRequestAnimationFrame || function (t) {
      n.setTimeout(t, 1e3 / 60);
    },
        c = function () {
      function t(t) {
        return r !== !1 && ("" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1));
      }var e = {},
          i = s.createElement("div").style,
          r = function () {
        for (var t = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, r = t.length; e < r; e++) {
          if (t[e] + "ransform" in i) return t[e].substr(0, t[e].length - 1);
        }return !1;
      }();e.getTime = Date.now || function () {
        return new Date().getTime();
      }, e.extend = function (t, e) {
        for (var i in e) {
          t[i] = e[i];
        }
      }, e.addEvent = function (t, e, i, r) {
        t.addEventListener(e, i, !!r);
      }, e.removeEvent = function (t, e, i, r) {
        t.removeEventListener(e, i, !!r);
      }, e.prefixPointerEvent = function (t) {
        return n.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t;
      }, e.momentum = function (t, e, i, r, n, s) {
        var o,
            l,
            u = t - e,
            p = a.abs(u) / i;return s = void 0 === s ? 6e-4 : s, o = t + p * p / (2 * s) * (u < 0 ? -1 : 1), l = p / s, o < r ? (o = n ? r - n / 2.5 * (p / 8) : r, u = a.abs(o - t), l = u / p) : o > 0 && (o = n ? n / 2.5 * (p / 8) : 0, u = a.abs(t) + o, l = u / p), { destination: a.round(o), duration: l };
      };var o = t("transform");return e.extend(e, { hasTransform: o !== !1, hasPerspective: t("perspective") in i, hasTouch: "ontouchstart" in n, hasPointer: !(!n.PointerEvent && !n.MSPointerEvent), hasTransition: t("transition") in i }), e.isBadAndroid = function () {
        var t = n.navigator.appVersion;if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
          var e = t.match(/Safari\/(\d+.\d)/);return !(e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length >= 2) || parseFloat(e[1]) < 535.19;
        }return !1;
      }(), e.extend(e.style = {}, { transform: o, transitionTimingFunction: t("transitionTimingFunction"), transitionDuration: t("transitionDuration"), transitionDelay: t("transitionDelay"), transformOrigin: t("transformOrigin"), touchAction: t("touchAction") }), e.hasClass = function (t, e) {
        return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className);
      }, e.addClass = function (t, i) {
        if (!e.hasClass(t, i)) {
          var r = t.className.split(" ");r.push(i), t.className = r.join(" ");
        }
      }, e.removeClass = function (t, i) {
        if (e.hasClass(t, i)) {
          var r = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");t.className = t.className.replace(r, " ");
        }
      }, e.offset = function (t) {
        for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;) {
          e -= t.offsetLeft, i -= t.offsetTop;
        }return { left: e, top: i };
      }, e.preventDefaultException = function (t, e) {
        for (var i in e) {
          if (e[i].test(t[i])) return !0;
        }return !1;
      }, e.extend(e.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 }), e.extend(e.ease = {}, { quadratic: { style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function fn(t) {
            return t * (2 - t);
          } }, circular: { style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function fn(t) {
            return a.sqrt(1 - --t * t);
          } }, back: { style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function fn(t) {
            var e = 4;return (t -= 1) * t * ((e + 1) * t + e) + 1;
          } }, bounce: { style: "", fn: function fn(t) {
            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
          } }, elastic: { style: "", fn: function fn(t) {
            var e = .22;return 0 === t ? 0 : 1 == t ? 1 : .4 * a.pow(2, -10 * t) * a.sin((t - e / 4) * (2 * a.PI) / e) + 1;
          } } }), e.tap = function (t, e) {
        var i = s.createEvent("Event");i.initEvent(e, !0, !0), i.pageX = t.pageX, i.pageY = t.pageY, t.target.dispatchEvent(i);
      }, e.click = function (t) {
        var e,
            i = t.target;/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (e = s.createEvent(n.MouseEvent ? "MouseEvents" : "Event"), e.initEvent("click", !0, !0), e.view = t.view || n, e.detail = 1, e.screenX = i.screenX || 0, e.screenY = i.screenY || 0, e.clientX = i.clientX || 0, e.clientY = i.clientY || 0, e.ctrlKey = !!t.ctrlKey, e.altKey = !!t.altKey, e.shiftKey = !!t.shiftKey, e.metaKey = !!t.metaKey, e.button = 0, e.relatedTarget = null, e._constructed = !0, i.dispatchEvent(e));
      }, e.getTouchAction = function (t, e) {
        var i = "none";return "vertical" === t ? i = "pan-y" : "horizontal" === t && (i = "pan-x"), e && "none" != i && (i += " pinch-zoom"), i;
      }, e.getRect = function (t) {
        if (t instanceof SVGElement) {
          var e = t.getBoundingClientRect();return { top: e.top, left: e.left, width: e.width, height: e.height };
        }return { top: t.offsetTop, left: t.offsetLeft, width: t.offsetWidth, height: t.offsetHeight };
      }, e;
    }();o.prototype = { version: "5.2.0-snapshot", _init: function _init() {
        this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys();
      }, destroy: function destroy() {
        this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy");
      }, _transitionEnd: function _transitionEnd(t) {
        t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")));
      }, _start: function _start(t) {
        if (1 != c.eventType[t.type]) {
          if (0 !== (t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2)) return;
        }if (this.enabled && (!this.initiated || c.eventType[t.type] === this.initiated)) {
          !this.options.preventDefault || c.isBadAndroid || c.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();var e,
              i = t.touches ? t.touches[0] : t;this.initiated = c.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = c.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, e = this.getComputedPosition(), this._translate(a.round(e.x), a.round(e.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = i.pageX, this.pointY = i.pageY, this._execEvent("beforeScrollStart");
        }
      }, _move: function _move(t) {
        if (this.enabled && c.eventType[t.type] === this.initiated) {
          this.options.preventDefault && t.preventDefault();var e,
              i,
              r,
              n,
              s = t.touches ? t.touches[0] : t,
              o = s.pageX - this.pointX,
              l = s.pageY - this.pointY,
              u = c.getTime();if (this.pointX = s.pageX, this.pointY = s.pageY, this.distX += o, this.distY += l, r = a.abs(this.distX), n = a.abs(this.distY), !(u - this.endTime > 300 && r < 10 && n < 10)) {
            if (this.directionLocked || this.options.freeScroll || (r > n + this.options.directionLockThreshold ? this.directionLocked = "h" : n >= r + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
              if ("vertical" == this.options.eventPassthrough) t.preventDefault();else if ("horizontal" == this.options.eventPassthrough) return void (this.initiated = !1);l = 0;
            } else if ("v" == this.directionLocked) {
              if ("horizontal" == this.options.eventPassthrough) t.preventDefault();else if ("vertical" == this.options.eventPassthrough) return void (this.initiated = !1);o = 0;
            }o = this.hasHorizontalScroll ? o : 0, l = this.hasVerticalScroll ? l : 0, e = this.x + o, i = this.y + l, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + o / 3 : e > 0 ? 0 : this.maxScrollX), (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + l / 3 : i > 0 ? 0 : this.maxScrollY), this.directionX = o > 0 ? -1 : o < 0 ? 1 : 0, this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, i), u - this.startTime > 300 && (this.startTime = u, this.startX = this.x, this.startY = this.y, 1 == this.options.probeType && this._execEvent("scroll")), this.options.probeType > 1 && this._execEvent("scroll");
          }
        }
      }, _end: function _end(t) {
        if (this.enabled && c.eventType[t.type] === this.initiated) {
          this.options.preventDefault && !c.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();var e,
              i,
              r = (t.changedTouches && t.changedTouches[0], c.getTime() - this.startTime),
              n = a.round(this.x),
              s = a.round(this.y),
              o = a.abs(n - this.startX),
              l = a.abs(s - this.startY),
              u = 0,
              p = "";if (this.isInTransition = 0, this.initiated = 0, this.endTime = c.getTime(), !this.resetPosition(this.options.bounceTime)) {
            if (this.scrollTo(n, s), !this.moved) return this.options.tap && c.tap(t, this.options.tap), this.options.click && c.click(t), void this._execEvent("scrollCancel");if (this._events.flick && r < 200 && o < 100 && l < 100) return void this._execEvent("flick");if (this.options.momentum && r < 300 && (e = this.hasHorizontalScroll ? c.momentum(this.x, this.startX, r, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: n, duration: 0 }, i = this.hasVerticalScroll ? c.momentum(this.y, this.startY, r, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: s, duration: 0 }, n = e.destination, s = i.destination, u = a.max(e.duration, i.duration), this.isInTransition = 1), this.options.snap) {
              var h = this._nearestSnap(n, s);this.currentPage = h, u = this.options.snapSpeed || a.max(a.max(a.min(a.abs(n - h.x), 1e3), a.min(a.abs(s - h.y), 1e3)), 300), n = h.x, s = h.y, this.directionX = 0, this.directionY = 0, p = this.options.bounceEasing;
            }if (n != this.x || s != this.y) return (n > 0 || n < this.maxScrollX || s > 0 || s < this.maxScrollY) && (p = c.ease.quadratic), void this.scrollTo(n, s, u, p);this._execEvent("scrollEnd");
          }
        }
      }, _resize: function _resize() {
        var t = this;clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
          t.refresh();
        }, this.options.resizePolling);
      }, resetPosition: function resetPosition(t) {
        var e = this.x,
            i = this.y;return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing), !0);
      }, disable: function disable() {
        this.enabled = !1;
      }, enable: function enable() {
        this.enabled = !0;
      }, refresh: function refresh() {
        c.getRect(this.wrapper), this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight;var t = c.getRect(this.scroller);this.scrollerWidth = t.width, this.scrollerHeight = t.height, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, c.hasPointer && !this.options.disablePointer && (this.wrapper.style[c.style.touchAction] = c.getTouchAction(this.options.eventPassthrough, !0), this.wrapper.style[c.style.touchAction] || (this.wrapper.style[c.style.touchAction] = c.getTouchAction(this.options.eventPassthrough, !1))), this.wrapperOffset = c.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition();
      }, on: function on(t, e) {
        this._events[t] || (this._events[t] = []), this._events[t].push(e);
      }, off: function off(t, e) {
        if (this._events[t]) {
          var i = this._events[t].indexOf(e);i > -1 && this._events[t].splice(i, 1);
        }
      }, _execEvent: function _execEvent(t) {
        if (this._events[t]) {
          var e = 0,
              i = this._events[t].length;if (i) for (; e < i; e++) {
            this._events[t][e].apply(this, [].slice.call(arguments, 1));
          }
        }
      }, scrollBy: function scrollBy(t, e, i, r) {
        t = this.x + t, e = this.y + e, i = i || 0, this.scrollTo(t, e, i, r);
      }, scrollTo: function scrollTo(t, e, i, r) {
        r = r || c.ease.circular, this.isInTransition = this.options.useTransition && i > 0;var n = this.options.useTransition && r.style;!i || n ? (n && (this._transitionTimingFunction(r.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, r.fn);
      }, scrollToElement: function scrollToElement(t, e, i, r, n) {
        if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
          var s = c.offset(t);s.left -= this.wrapperOffset.left, s.top -= this.wrapperOffset.top;var o = c.getRect(t),
              l = c.getRect(this.wrapper);i === !0 && (i = a.round(o.width / 2 - l.width / 2)), r === !0 && (r = a.round(o.height / 2 - l.height / 2)), s.left -= i || 0, s.top -= r || 0, s.left = s.left > 0 ? 0 : s.left < this.maxScrollX ? this.maxScrollX : s.left, s.top = s.top > 0 ? 0 : s.top < this.maxScrollY ? this.maxScrollY : s.top, e = void 0 === e || null === e || "auto" === e ? a.max(a.abs(this.x - s.left), a.abs(this.y - s.top)) : e, this.scrollTo(s.left, s.top, e, n);
        }
      }, _transitionTime: function _transitionTime(t) {
        if (this.options.useTransition) {
          t = t || 0;var e = c.style.transitionDuration;if (e) {
            if (this.scrollerStyle[e] = t + "ms", !t && c.isBadAndroid) {
              this.scrollerStyle[e] = "0.0001ms";var i = this;p(function () {
                "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s");
              });
            }if (this.indicators) for (var r = this.indicators.length; r--;) {
              this.indicators[r].transitionTime(t);
            }
          }
        }
      }, _transitionTimingFunction: function _transitionTimingFunction(t) {
        if (this.scrollerStyle[c.style.transitionTimingFunction] = t, this.indicators) for (var e = this.indicators.length; e--;) {
          this.indicators[e].transitionTimingFunction(t);
        }
      }, _translate: function _translate(t, e) {
        if (this.options.useTransform ? this.scrollerStyle[c.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = a.round(t), e = a.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators) for (var i = this.indicators.length; i--;) {
          this.indicators[i].updatePosition();
        }
      }, _initEvents: function _initEvents(t) {
        var e = t ? c.removeEvent : c.addEvent,
            i = this.options.bindToWrapper ? this.wrapper : n;e(n, "orientationchange", this), e(n, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(i, "mousemove", this), e(i, "mousecancel", this), e(i, "mouseup", this)), c.hasPointer && !this.options.disablePointer && (e(this.wrapper, c.prefixPointerEvent("pointerdown"), this), e(i, c.prefixPointerEvent("pointermove"), this), e(i, c.prefixPointerEvent("pointercancel"), this), e(i, c.prefixPointerEvent("pointerup"), this)), c.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(i, "touchmove", this), e(i, "touchcancel", this), e(i, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this);
      }, getComputedPosition: function getComputedPosition() {
        var t,
            e,
            i = n.getComputedStyle(this.scroller, null);return this.options.useTransform ? (i = i[c.style.transform].split(")")[0].split(", "), t = +(i[12] || i[4]), e = +(i[13] || i[5])) : (t = +i.left.replace(/[^-\d.]/g, ""), e = +i.top.replace(/[^-\d.]/g, "")), { x: t, y: e };
      }, _initIndicators: function _initIndicators() {
        function t(t) {
          if (s.indicators) for (var e = s.indicators.length; e--;) {
            t.call(s.indicators[e]);
          }
        }var e,
            i = this.options.interactiveScrollbars,
            r = "string" != typeof this.options.scrollbars,
            n = [],
            s = this;this.indicators = [], this.options.scrollbars && (this.options.scrollY && (e = { el: l("v", i, this.options.scrollbars), interactive: i, defaultScrollbars: !0, customStyle: r, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenX: !1 }, this.wrapper.appendChild(e.el), n.push(e)), this.options.scrollX && (e = { el: l("h", i, this.options.scrollbars), interactive: i, defaultScrollbars: !0, customStyle: r, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenY: !1 }, this.wrapper.appendChild(e.el), n.push(e))), this.options.indicators && (n = n.concat(this.options.indicators));for (var a = n.length; a--;) {
          this.indicators.push(new u(this, n[a]));
        }this.options.fadeScrollbars && (this.on("scrollEnd", function () {
          t(function () {
            this.fade();
          });
        }), this.on("scrollCancel", function () {
          t(function () {
            this.fade();
          });
        }), this.on("scrollStart", function () {
          t(function () {
            this.fade(1);
          });
        }), this.on("beforeScrollStart", function () {
          t(function () {
            this.fade(1, !0);
          });
        })), this.on("refresh", function () {
          t(function () {
            this.refresh();
          });
        }), this.on("destroy", function () {
          t(function () {
            this.destroy();
          }), delete this.indicators;
        });
      }, _initWheel: function _initWheel() {
        c.addEvent(this.wrapper, "wheel", this), c.addEvent(this.wrapper, "mousewheel", this), c.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function () {
          clearTimeout(this.wheelTimeout), this.wheelTimeout = null, c.removeEvent(this.wrapper, "wheel", this), c.removeEvent(this.wrapper, "mousewheel", this), c.removeEvent(this.wrapper, "DOMMouseScroll", this);
        });
      }, _wheel: function _wheel(t) {
        if (this.enabled) {
          t.preventDefault();var e,
              i,
              r,
              n,
              s = this;if (void 0 === this.wheelTimeout && s._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
            s.options.snap || s._execEvent("scrollEnd"), s.wheelTimeout = void 0;
          }, 400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, i = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, i = -t.deltaY);else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, i = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;else if ("wheelDelta" in t) e = i = t.wheelDelta / 120 * this.options.mouseWheelSpeed;else {
            if (!("detail" in t)) return;e = i = -t.detail / 3 * this.options.mouseWheelSpeed;
          }if (e *= this.options.invertWheelDirection, i *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = i, i = 0), this.options.snap) return r = this.currentPage.pageX, n = this.currentPage.pageY, e > 0 ? r-- : e < 0 && r++, i > 0 ? n-- : i < 0 && n++, void this.goToPage(r, n);r = this.x + a.round(this.hasHorizontalScroll ? e : 0), n = this.y + a.round(this.hasVerticalScroll ? i : 0), this.directionX = e > 0 ? -1 : e < 0 ? 1 : 0, this.directionY = i > 0 ? -1 : i < 0 ? 1 : 0, r > 0 ? r = 0 : r < this.maxScrollX && (r = this.maxScrollX), n > 0 ? n = 0 : n < this.maxScrollY && (n = this.maxScrollY), this.scrollTo(r, n, 0), this.options.probeType > 1 && this._execEvent("scroll");
        }
      }, _initSnap: function _initSnap() {
        this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function () {
          var t,
              e,
              i,
              r,
              n,
              s,
              o,
              l = 0,
              u = 0,
              p = 0,
              h = this.options.snapStepX || this.wrapperWidth,
              d = this.options.snapStepY || this.wrapperHeight;if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
            if (this.options.snap === !0) for (i = a.round(h / 2), r = a.round(d / 2); p > -this.scrollerWidth;) {
              for (this.pages[l] = [], t = 0, n = 0; n > -this.scrollerHeight;) {
                this.pages[l][t] = { x: a.max(p, this.maxScrollX), y: a.max(n, this.maxScrollY), width: h, height: d, cx: p - i, cy: n - r }, n -= d, t++;
              }p -= h, l++;
            } else for (s = this.options.snap, t = s.length, e = -1; l < t; l++) {
              o = c.getRect(s[l]), (0 === l || o.left <= c.getRect(s[l - 1]).left) && (u = 0, e++), this.pages[u] || (this.pages[u] = []), p = a.max(-o.left, this.maxScrollX), n = a.max(-o.top, this.maxScrollY), i = p - a.round(o.width / 2), r = n - a.round(o.height / 2), this.pages[u][e] = { x: p, y: n, width: o.width, height: o.height, cx: i, cy: r }, p > this.maxScrollX && u++;
            }this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 == 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = a.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = a.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold));
          }
        }), this.on("flick", function () {
          var t = this.options.snapSpeed || a.max(a.max(a.min(a.abs(this.x - this.startX), 1e3), a.min(a.abs(this.y - this.startY), 1e3)), 300);this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t);
        });
      }, _nearestSnap: function _nearestSnap(t, e) {
        if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };var i = 0,
            r = this.pages.length,
            n = 0;if (a.abs(t - this.absStartX) < this.snapThresholdX && a.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); i < r; i++) {
          if (t >= this.pages[i][0].cx) {
            t = this.pages[i][0].x;break;
          }
        }for (r = this.pages[i].length; n < r; n++) {
          if (e >= this.pages[0][n].cy) {
            e = this.pages[0][n].y;break;
          }
        }return i == this.currentPage.pageX && (i += this.directionX, i < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), t = this.pages[i][0].x), n == this.currentPage.pageY && (n += this.directionY, n < 0 ? n = 0 : n >= this.pages[0].length && (n = this.pages[0].length - 1), e = this.pages[0][n].y), { x: t, y: e, pageX: i, pageY: n };
      }, goToPage: function goToPage(t, e, i, r) {
        r = r || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);var n = this.pages[t][e].x,
            s = this.pages[t][e].y;i = void 0 === i ? this.options.snapSpeed || a.max(a.max(a.min(a.abs(n - this.x), 1e3), a.min(a.abs(s - this.y), 1e3)), 300) : i, this.currentPage = { x: n, y: s, pageX: t, pageY: e }, this.scrollTo(n, s, i, r);
      }, next: function next(t, e) {
        var i = this.currentPage.pageX,
            r = this.currentPage.pageY;i++, i >= this.pages.length && this.hasVerticalScroll && (i = 0, r++), this.goToPage(i, r, t, e);
      }, prev: function prev(t, e) {
        var i = this.currentPage.pageX,
            r = this.currentPage.pageY;i--, i < 0 && this.hasVerticalScroll && (i = 0, r--), this.goToPage(i, r, t, e);
      }, _initKeys: function _initKeys(t) {
        var e,
            i = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };if ("object" == _typeof(this.options.keyBindings)) for (e in this.options.keyBindings) {
          "string" == typeof this.options.keyBindings[e] && (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0));
        } else this.options.keyBindings = {};for (e in i) {
          this.options.keyBindings[e] = this.options.keyBindings[e] || i[e];
        }c.addEvent(n, "keydown", this), this.on("destroy", function () {
          c.removeEvent(n, "keydown", this);
        });
      }, _key: function _key(t) {
        if (this.enabled) {
          var e,
              i = this.options.snap,
              r = i ? this.currentPage.pageX : this.x,
              n = i ? this.currentPage.pageY : this.y,
              s = c.getTime(),
              o = this.keyTime || 0,
              l = .25;switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(a.round(e.x), a.round(e.y)), this.isInTransition = !1), this.keyAcceleration = s - o < 200 ? a.min(this.keyAcceleration + l, 50) : 0, t.keyCode) {case this.options.keyBindings.pageUp:
              this.hasHorizontalScroll && !this.hasVerticalScroll ? r += i ? 1 : this.wrapperWidth : n += i ? 1 : this.wrapperHeight;break;case this.options.keyBindings.pageDown:
              this.hasHorizontalScroll && !this.hasVerticalScroll ? r -= i ? 1 : this.wrapperWidth : n -= i ? 1 : this.wrapperHeight;break;case this.options.keyBindings.end:
              r = i ? this.pages.length - 1 : this.maxScrollX, n = i ? this.pages[0].length - 1 : this.maxScrollY;break;case this.options.keyBindings.home:
              r = 0, n = 0;break;case this.options.keyBindings.left:
              r += i ? -1 : 5 + this.keyAcceleration >> 0;break;case this.options.keyBindings.up:
              n += i ? 1 : 5 + this.keyAcceleration >> 0;break;case this.options.keyBindings.right:
              r -= i ? -1 : 5 + this.keyAcceleration >> 0;break;case this.options.keyBindings.down:
              n -= i ? 1 : 5 + this.keyAcceleration >> 0;break;default:
              return;}if (i) return void this.goToPage(r, n);r > 0 ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollX && (r = this.maxScrollX, this.keyAcceleration = 0), n > 0 ? (n = 0, this.keyAcceleration = 0) : n < this.maxScrollY && (n = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(r, n, 0), this.keyTime = s;
        }
      }, _animate: function _animate(t, e, i, r) {
        function n() {
          var h,
              d,
              f,
              m = c.getTime();if (m >= u) return s.isAnimating = !1, s._translate(t, e), void (s.resetPosition(s.options.bounceTime) || s._execEvent("scrollEnd"));m = (m - l) / i, f = r(m), h = (t - a) * f + a, d = (e - o) * f + o, s._translate(h, d), s.isAnimating && p(n), 3 == s.options.probeType && s._execEvent("scroll");
        }var s = this,
            a = this.x,
            o = this.y,
            l = c.getTime(),
            u = l + i;this.isAnimating = !0, n();
      }, handleEvent: function handleEvent(t) {
        switch (t.type) {case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":
            this._start(t);break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":
            this._move(t);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":
            this._end(t);break;case "orientationchange":case "resize":
            this._resize();break;case "transitionend":case "webkitTransitionEnd":case "oTransitionEnd":case "MSTransitionEnd":
            this._transitionEnd(t);break;case "wheel":case "DOMMouseScroll":case "mousewheel":
            this._wheel(t);break;case "keydown":
            this._key(t);break;case "click":
            this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation());}
      } }, u.prototype = { handleEvent: function handleEvent(t) {
        switch (t.type) {case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":
            this._start(t);break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":
            this._move(t);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":
            this._end(t);}
      }, destroy: function destroy() {
        this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (c.removeEvent(this.indicator, "touchstart", this), c.removeEvent(this.indicator, c.prefixPointerEvent("pointerdown"), this), c.removeEvent(this.indicator, "mousedown", this), c.removeEvent(n, "touchmove", this), c.removeEvent(n, c.prefixPointerEvent("pointermove"), this), c.removeEvent(n, "mousemove", this), c.removeEvent(n, "touchend", this), c.removeEvent(n, c.prefixPointerEvent("pointerup"), this), c.removeEvent(n, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode && this.wrapper.parentNode.removeChild(this.wrapper);
      }, _start: function _start(t) {
        var e = t.touches ? t.touches[0] : t;t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = c.getTime(), this.options.disableTouch || c.addEvent(n, "touchmove", this), this.options.disablePointer || c.addEvent(n, c.prefixPointerEvent("pointermove"), this), this.options.disableMouse || c.addEvent(n, "mousemove", this), this.scroller._execEvent("beforeScrollStart");
      }, _move: function _move(t) {
        var e,
            i,
            r,
            n,
            s = t.touches ? t.touches[0] : t,
            a = c.getTime();this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, e = s.pageX - this.lastPointX, this.lastPointX = s.pageX, i = s.pageY - this.lastPointY, this.lastPointY = s.pageY, r = this.x + e, n = this.y + i, this._pos(r, n), 1 == this.scroller.options.probeType && a - this.startTime > 300 ? (this.startTime = a, this.scroller._execEvent("scroll")) : this.scroller.options.probeType > 1 && this.scroller._execEvent("scroll"), t.preventDefault(), t.stopPropagation();
      }, _end: function _end(t) {
        if (this.initiated) {
          if (this.initiated = !1, t.preventDefault(), t.stopPropagation(), c.removeEvent(n, "touchmove", this), c.removeEvent(n, c.prefixPointerEvent("pointermove"), this), c.removeEvent(n, "mousemove", this), this.scroller.options.snap) {
            var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                i = this.options.snapSpeed || a.max(a.max(a.min(a.abs(this.scroller.x - e.x), 1e3), a.min(a.abs(this.scroller.y - e.y), 1e3)), 300);this.scroller.x == e.x && this.scroller.y == e.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, i, this.scroller.options.bounceEasing));
          }this.moved && this.scroller._execEvent("scrollEnd");
        }
      }, transitionTime: function transitionTime(t) {
        t = t || 0;var e = c.style.transitionDuration;if (e && (this.indicatorStyle[e] = t + "ms", !t && c.isBadAndroid)) {
          this.indicatorStyle[e] = "0.0001ms";var i = this;p(function () {
            "0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s");
          });
        }
      }, transitionTimingFunction: function transitionTimingFunction(t) {
        this.indicatorStyle[c.style.transitionTimingFunction] = t;
      }, refresh: function refresh() {
        this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (c.addClass(this.wrapper, "iScrollBothScrollbars"), c.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (c.removeClass(this.wrapper, "iScrollBothScrollbars"), c.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")), c.getRect(this.wrapper), this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = a.max(a.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = a.max(a.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition();
      }, updatePosition: function updatePosition() {
        var t = this.options.listenX && a.round(this.sizeRatioX * this.scroller.x) || 0,
            e = this.options.listenY && a.round(this.sizeRatioY * this.scroller.y) || 0;this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = a.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = a.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = a.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = a.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[c.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px");
      }, _pos: function _pos(t, e) {
        t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? a.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? a.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e);
      }, fade: function fade(t, e) {
        if (!e || this.visible) {
          clearTimeout(this.fadeTimeout), this.fadeTimeout = null;var i = t ? 250 : 500,
              r = t ? 0 : 300;t = t ? "1" : "0", this.wrapperStyle[c.style.transitionDuration] = i + "ms", this.fadeTimeout = setTimeout(function (t) {
            this.wrapperStyle.opacity = t, this.visible = +t;
          }.bind(this, t), r);
        }
      } }, o.utils = c, void 0 !== t && t.exports ? t.exports = o : void 0 !== (r = function () {
      return o;
    }.call(e, i, e, t)) && (t.exports = r);
  }(window, document, Math);
}, function (t, e) {
  function i() {
    throw new Error("setTimeout has not been defined");
  }function r() {
    throw new Error("clearTimeout has not been defined");
  }function n(t) {
    if (p === setTimeout) return setTimeout(t, 0);if ((p === i || !p) && setTimeout) return p = setTimeout, setTimeout(t, 0);try {
      return p(t, 0);
    } catch (e) {
      try {
        return p.call(null, t, 0);
      } catch (e) {
        return p.call(this, t, 0);
      }
    }
  }function s(t) {
    if (c === clearTimeout) return clearTimeout(t);if ((c === r || !c) && clearTimeout) return c = clearTimeout, clearTimeout(t);try {
      return c(t);
    } catch (e) {
      try {
        return c.call(null, t);
      } catch (e) {
        return c.call(this, t);
      }
    }
  }function a() {
    m && d && (m = !1, d.length ? f = d.concat(f) : g = -1, f.length && o());
  }function o() {
    if (!m) {
      var t = n(a);m = !0;for (var e = f.length; e;) {
        for (d = f, f = []; ++g < e;) {
          d && d[g].run();
        }g = -1, e = f.length;
      }d = null, m = !1, s(t);
    }
  }function l(t, e) {
    this.fun = t, this.array = e;
  }function u() {}var p,
      c,
      h = t.exports = {};!function () {
    try {
      p = "function" == typeof setTimeout ? setTimeout : i;
    } catch (t) {
      p = i;
    }try {
      c = "function" == typeof clearTimeout ? clearTimeout : r;
    } catch (t) {
      c = r;
    }
  }();var d,
      f = [],
      m = !1,
      g = -1;h.nextTick = function (t) {
    var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) {
      e[i - 1] = arguments[i];
    }f.push(new l(t, e)), 1 !== f.length || m || n(o);
  }, l.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = u, h.addListener = u, h.once = u, h.off = u, h.removeListener = u, h.removeAllListeners = u, h.emit = u, h.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, h.cwd = function () {
    return "/";
  }, h.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, h.umask = function () {
    return 0;
  };
}, function (t, e, i) {
  !function () {
    "use strict";
    function t(t) {
      t.fn.swiper = function (e) {
        var r;return t(this).each(function () {
          var t = new i(this, e);r || (r = t);
        }), r;
      };
    }var e,
        i = function i(t, n) {
      function s(t) {
        return Math.floor(t);
      }function a() {
        var t = T.params.autoplay,
            e = T.slides.eq(T.activeIndex);e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || T.params.autoplay), T.autoplayTimeoutId = setTimeout(function () {
          T.params.loop ? (T.fixLoop(), T._slideNext(), T.emit("onAutoplay", T)) : T.isEnd ? n.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0), T.emit("onAutoplay", T)) : (T._slideNext(), T.emit("onAutoplay", T));
        }, t);
      }function o(t, i) {
        var r = e(t.target);if (!r.is(i)) if ("string" == typeof i) r = r.parents(i);else if (i.nodeType) {
          var n;return r.parents().each(function (t, e) {
            e === i && (n = i);
          }), n ? i : void 0;
        }if (0 !== r.length) return r[0];
      }function l(t, e) {
        e = e || {};var i = window.MutationObserver || window.WebkitMutationObserver,
            r = new i(function (t) {
          t.forEach(function (t) {
            T.onResize(!0), T.emit("onObserverUpdate", T, t);
          });
        });r.observe(t, { attributes: void 0 === e.attributes || e.attributes, childList: void 0 === e.childList || e.childList, characterData: void 0 === e.characterData || e.characterData }), T.observers.push(r);
      }function u(t) {
        t.originalEvent && (t = t.originalEvent);var e = t.keyCode || t.charCode;if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === e || !T.isHorizontal() && 40 === e)) return !1;if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === e || !T.isHorizontal() && 38 === e)) return !1;if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
          if (37 === e || 39 === e || 38 === e || 40 === e) {
            var i = !1;if (T.container.parents("." + T.params.slideClass).length > 0 && 0 === T.container.parents("." + T.params.slideActiveClass).length) return;var r = { left: window.pageXOffset, top: window.pageYOffset },
                n = window.innerWidth,
                s = window.innerHeight,
                a = T.container.offset();T.rtl && (a.left = a.left - T.container[0].scrollLeft);for (var o = [[a.left, a.top], [a.left + T.width, a.top], [a.left, a.top + T.height], [a.left + T.width, a.top + T.height]], l = 0; l < o.length; l++) {
              var u = o[l];u[0] >= r.left && u[0] <= r.left + n && u[1] >= r.top && u[1] <= r.top + s && (i = !0);
            }if (!i) return;
          }T.isHorizontal() ? (37 !== e && 39 !== e || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), (39 === e && !T.rtl || 37 === e && T.rtl) && T.slideNext(), (37 === e && !T.rtl || 39 === e && T.rtl) && T.slidePrev()) : (38 !== e && 40 !== e || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 40 === e && T.slideNext(), 38 === e && T.slidePrev()), T.emit("onKeyPress", T, e);
        }
      }function p() {
        var t = "onwheel",
            e = t in document;if (!e) {
          var i = document.createElement("div");i.setAttribute(t, "return;"), e = "function" == typeof i[t];
        }return !e && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e;
      }function c(t) {
        var e = 10,
            i = 40,
            r = 800,
            n = 0,
            s = 0,
            a = 0,
            o = 0;return "detail" in t && (s = t.detail), "wheelDelta" in t && (s = -t.wheelDelta / 120), "wheelDeltaY" in t && (s = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (n = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (n = s, s = 0), a = n * e, o = s * e, "deltaY" in t && (o = t.deltaY), "deltaX" in t && (a = t.deltaX), (a || o) && t.deltaMode && (1 === t.deltaMode ? (a *= i, o *= i) : (a *= r, o *= r)), a && !n && (n = a < 1 ? -1 : 1), o && !s && (s = o < 1 ? -1 : 1), { spinX: n, spinY: s, pixelX: a, pixelY: o };
      }function h(t) {
        t.originalEvent && (t = t.originalEvent);var e = 0,
            i = T.rtl ? -1 : 1,
            r = c(t);if (T.params.mousewheelForceToAxis) {
          if (T.isHorizontal()) {
            if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return;e = r.pixelX * i;
          } else {
            if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return;e = r.pixelY;
          }
        } else e = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * i : -r.pixelY;if (0 !== e) {
          if (T.params.mousewheelInvert && (e = -e), T.params.freeMode) {
            var n = T.getWrapperTranslate() + e * T.params.mousewheelSensitivity,
                s = T.isBeginning,
                a = T.isEnd;if (n >= T.minTranslate() && (n = T.minTranslate()), n <= T.maxTranslate() && (n = T.maxTranslate()), T.setWrapperTransition(0), T.setWrapperTranslate(n), T.updateProgress(), T.updateActiveIndex(), (!s && T.isBeginning || !a && T.isEnd) && T.updateClasses(), T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout), T.mousewheel.timeout = setTimeout(function () {
              T.slideReset();
            }, 300)) : T.params.lazyLoading && T.lazy && T.lazy.load(), T.emit("onScroll", T, t), T.params.autoplay && T.params.autoplayDisableOnInteraction && T.stopAutoplay(), 0 === n || n === T.maxTranslate()) return;
          } else {
            if (new window.Date().getTime() - T.mousewheel.lastScrollTime > 60) if (e < 0) {
              if (T.isEnd && !T.params.loop || T.animating) {
                if (T.params.mousewheelReleaseOnEdges) return !0;
              } else T.slideNext(), T.emit("onScroll", T, t);
            } else if (T.isBeginning && !T.params.loop || T.animating) {
              if (T.params.mousewheelReleaseOnEdges) return !0;
            } else T.slidePrev(), T.emit("onScroll", T, t);T.mousewheel.lastScrollTime = new window.Date().getTime();
          }return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
        }
      }function d(t, i) {
        t = e(t);var r,
            n,
            s,
            a = T.rtl ? -1 : 1;r = t.attr("data-swiper-parallax") || "0", n = t.attr("data-swiper-parallax-x"), s = t.attr("data-swiper-parallax-y"), n || s ? (n = n || "0", s = s || "0") : T.isHorizontal() ? (n = r, s = "0") : (s = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * i * a + "%" : n * i * a + "px", s = s.indexOf("%") >= 0 ? parseInt(s, 10) * i + "%" : s * i + "px", t.transform("translate3d(" + n + ", " + s + ",0px)");
      }function f(t) {
        return 0 !== t.indexOf("on") && (t = t[0] !== t[0].toUpperCase() ? "on" + t[0].toUpperCase() + t.substring(1) : "on" + t), t;
      }if (!(this instanceof i)) return new i(t, n);var m = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, zoom: !1, zoomMax: 3, zoomMin: 1, zoomToggle: !0, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, mousewheelEventsTarged: "container", hashnav: !1, hashnavWatchState: !1, history: !1, replaceState: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", normalizeSlideIndex: !0, allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", paginationClickableClass: "swiper-pagination-clickable", paginationModifierClass: "swiper-pagination-", lazyLoadingClass: "swiper-lazy", lazyStatusLoadingClass: "swiper-lazy-loading", lazyStatusLoadedClass: "swiper-lazy-loaded", lazyPreloaderClass: "swiper-lazy-preloader", notificationClass: "swiper-notification", preloaderClass: "preloader", zoomContainerClass: "swiper-zoom-container", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
          g = n && n.virtualTranslate;n = n || {};var v = {};for (var w in n) {
        if ("object" != _typeof(n[w]) || null === n[w] || n[w].nodeType || n[w] === window || n[w] === document || void 0 !== r && n[w] instanceof r || "undefined" != typeof jQuery && n[w] instanceof jQuery) v[w] = n[w];else {
          v[w] = {};for (var y in n[w]) {
            v[w][y] = n[w][y];
          }
        }
      }for (var x in m) {
        if (void 0 === n[x]) n[x] = m[x];else if ("object" == _typeof(n[x])) for (var b in m[x]) {
          void 0 === n[x][b] && (n[x][b] = m[x][b]);
        }
      }var T = this;if (T.params = n, T.originalParams = v, T.classNames = [], void 0 !== e && void 0 !== r && (e = r), (void 0 !== e || (e = void 0 === r ? window.Dom7 || window.Zepto || window.jQuery : r)) && (T.$ = e, T.currentBreakpoint = void 0, T.getActiveBreakpoint = function () {
        if (!T.params.breakpoints) return !1;var t,
            e = !1,
            i = [];for (t in T.params.breakpoints) {
          T.params.breakpoints.hasOwnProperty(t) && i.push(t);
        }i.sort(function (t, e) {
          return parseInt(t, 10) > parseInt(e, 10);
        });for (var r = 0; r < i.length; r++) {
          (t = i[r]) >= window.innerWidth && !e && (e = t);
        }return e || "max";
      }, T.setBreakpoint = function () {
        var t = T.getActiveBreakpoint();if (t && T.currentBreakpoint !== t) {
          var e = t in T.params.breakpoints ? T.params.breakpoints[t] : T.originalParams,
              i = T.params.loop && e.slidesPerView !== T.params.slidesPerView;for (var r in e) {
            T.params[r] = e[r];
          }T.currentBreakpoint = t, i && T.destroyLoop && T.reLoop(!0);
        }
      }, T.params.breakpoints && T.setBreakpoint(), T.container = e(t), 0 !== T.container.length)) {
        if (T.container.length > 1) {
          var S = [];return T.container.each(function () {
            S.push(new i(this, n));
          }), S;
        }T.container[0].swiper = T, T.container.data("swiper", T), T.classNames.push(T.params.containerModifierClass + T.params.direction), T.params.freeMode && T.classNames.push(T.params.containerModifierClass + "free-mode"), T.support.flexbox || (T.classNames.push(T.params.containerModifierClass + "no-flexbox"), T.params.slidesPerColumn = 1), T.params.autoHeight && T.classNames.push(T.params.containerModifierClass + "autoheight"), (T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0), T.params.touchReleaseOnEdges && (T.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0, T.classNames.push(T.params.containerModifierClass + "3d")) : T.params.effect = "slide"), "slide" !== T.params.effect && T.classNames.push(T.params.containerModifierClass + T.params.effect), "cube" === T.params.effect && (T.params.resistanceRatio = 0, T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.centeredSlides = !1, T.params.spaceBetween = 0, T.params.virtualTranslate = !0), "fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.watchSlidesProgress = !0, T.params.spaceBetween = 0, void 0 === g && (T.params.virtualTranslate = !0)), T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1), T.wrapper = T.container.children("." + T.params.wrapperClass), T.params.pagination && (T.paginationContainer = e(T.params.pagination), T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)), "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass(T.params.paginationModifierClass + "clickable") : T.params.paginationClickable = !1, T.paginationContainer.addClass(T.params.paginationModifierClass + T.params.paginationType)), (T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = e(T.params.nextButton), T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))), T.params.prevButton && (T.prevButton = e(T.params.prevButton), T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))), T.isHorizontal = function () {
          return "horizontal" === T.params.direction;
        }, T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")), T.rtl && T.classNames.push(T.params.containerModifierClass + "rtl"), T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")), T.params.slidesPerColumn > 1 && T.classNames.push(T.params.containerModifierClass + "multirow"), T.device.android && T.classNames.push(T.params.containerModifierClass + "android"), T.container.addClass(T.classNames.join(" ")), T.translate = 0, T.progress = 0, T.velocity = 0, T.lockSwipeToNext = function () {
          T.params.allowSwipeToNext = !1, T.params.allowSwipeToPrev === !1 && T.params.grabCursor && T.unsetGrabCursor();
        }, T.lockSwipeToPrev = function () {
          T.params.allowSwipeToPrev = !1, T.params.allowSwipeToNext === !1 && T.params.grabCursor && T.unsetGrabCursor();
        }, T.lockSwipes = function () {
          T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1, T.params.grabCursor && T.unsetGrabCursor();
        }, T.unlockSwipeToNext = function () {
          T.params.allowSwipeToNext = !0, T.params.allowSwipeToPrev === !0 && T.params.grabCursor && T.setGrabCursor();
        }, T.unlockSwipeToPrev = function () {
          T.params.allowSwipeToPrev = !0, T.params.allowSwipeToNext === !0 && T.params.grabCursor && T.setGrabCursor();
        }, T.unlockSwipes = function () {
          T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0, T.params.grabCursor && T.setGrabCursor();
        }, T.setGrabCursor = function (t) {
          T.container[0].style.cursor = "move", T.container[0].style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", T.container[0].style.cursor = t ? "-moz-grabbin" : "-moz-grab", T.container[0].style.cursor = t ? "grabbing" : "grab";
        }, T.unsetGrabCursor = function () {
          T.container[0].style.cursor = "";
        }, T.params.grabCursor && T.setGrabCursor(), T.imagesToLoad = [], T.imagesLoaded = 0, T.loadImage = function (t, e, i, r, n, s) {
          function a() {
            s && s();
          }var o;t.complete && n ? a() : e ? (o = new window.Image(), o.onload = a, o.onerror = a, r && (o.sizes = r), i && (o.srcset = i), e && (o.src = e)) : a();
        }, T.preloadImages = function () {
          function t() {
            void 0 !== T && null !== T && T && (void 0 !== T.imagesLoaded && T.imagesLoaded++, T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(), T.emit("onImagesReady", T)));
          }T.imagesToLoad = T.container.find("img");for (var e = 0; e < T.imagesToLoad.length; e++) {
            T.loadImage(T.imagesToLoad[e], T.imagesToLoad[e].currentSrc || T.imagesToLoad[e].getAttribute("src"), T.imagesToLoad[e].srcset || T.imagesToLoad[e].getAttribute("srcset"), T.imagesToLoad[e].sizes || T.imagesToLoad[e].getAttribute("sizes"), !0, t);
          }
        }, T.autoplayTimeoutId = void 0, T.autoplaying = !1, T.autoplayPaused = !1, T.startAutoplay = function () {
          return void 0 === T.autoplayTimeoutId && !!T.params.autoplay && !T.autoplaying && (T.autoplaying = !0, T.emit("onAutoplayStart", T), void a());
        }, T.stopAutoplay = function (t) {
          T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplaying = !1, T.autoplayTimeoutId = void 0, T.emit("onAutoplayStop", T));
        }, T.pauseAutoplay = function (t) {
          T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplayPaused = !0, 0 === t ? (T.autoplayPaused = !1, a()) : T.wrapper.transitionEnd(function () {
            T && (T.autoplayPaused = !1, T.autoplaying ? a() : T.stopAutoplay());
          }));
        }, T.minTranslate = function () {
          return -T.snapGrid[0];
        }, T.maxTranslate = function () {
          return -T.snapGrid[T.snapGrid.length - 1];
        }, T.updateAutoHeight = function () {
          var t,
              e = [],
              i = 0;if ("auto" !== T.params.slidesPerView && T.params.slidesPerView > 1) for (t = 0; t < Math.ceil(T.params.slidesPerView); t++) {
            var r = T.activeIndex + t;if (r > T.slides.length) break;e.push(T.slides.eq(r)[0]);
          } else e.push(T.slides.eq(T.activeIndex)[0]);for (t = 0; t < e.length; t++) {
            if (void 0 !== e[t]) {
              var n = e[t].offsetHeight;i = n > i ? n : i;
            }
          }i && T.wrapper.css("height", i + "px");
        }, T.updateContainerSize = function () {
          var t, e;t = void 0 !== T.params.width ? T.params.width : T.container[0].clientWidth, e = void 0 !== T.params.height ? T.params.height : T.container[0].clientHeight, 0 === t && T.isHorizontal() || 0 === e && !T.isHorizontal() || (t = t - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10), e = e - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10), T.width = t, T.height = e, T.size = T.isHorizontal() ? T.width : T.height);
        }, T.updateSlidesSize = function () {
          T.slides = T.wrapper.children("." + T.params.slideClass), T.snapGrid = [], T.slidesGrid = [], T.slidesSizesGrid = [];var t,
              e = T.params.spaceBetween,
              i = -T.params.slidesOffsetBefore,
              r = 0,
              n = 0;if (void 0 !== T.size) {
            "string" == typeof e && e.indexOf("%") >= 0 && (e = parseFloat(e.replace("%", "")) / 100 * T.size), T.virtualSize = -e, T.rtl ? T.slides.css({ marginLeft: "", marginTop: "" }) : T.slides.css({ marginRight: "", marginBottom: "" });var a;T.params.slidesPerColumn > 1 && (a = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length : Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn, "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (a = Math.max(a, T.params.slidesPerView * T.params.slidesPerColumn)));var o,
                l = T.params.slidesPerColumn,
                u = a / l,
                p = u - (T.params.slidesPerColumn * u - T.slides.length);for (t = 0; t < T.slides.length; t++) {
              o = 0;var c = T.slides.eq(t);if (T.params.slidesPerColumn > 1) {
                var h, d, f;"column" === T.params.slidesPerColumnFill ? (d = Math.floor(t / l), f = t - d * l, (d > p || d === p && f === l - 1) && ++f >= l && (f = 0, d++), h = d + f * a / l, c.css({ "-webkit-box-ordinal-group": h, "-moz-box-ordinal-group": h, "-ms-flex-order": h, "-webkit-order": h, order: h })) : (f = Math.floor(t / u), d = t - f * u), c.css("margin-" + (T.isHorizontal() ? "top" : "left"), 0 !== f && T.params.spaceBetween && T.params.spaceBetween + "px").attr("data-swiper-column", d).attr("data-swiper-row", f);
              }"none" !== c.css("display") && ("auto" === T.params.slidesPerView ? (o = T.isHorizontal() ? c.outerWidth(!0) : c.outerHeight(!0), T.params.roundLengths && (o = s(o))) : (o = (T.size - (T.params.slidesPerView - 1) * e) / T.params.slidesPerView, T.params.roundLengths && (o = s(o)), T.isHorizontal() ? T.slides[t].style.width = o + "px" : T.slides[t].style.height = o + "px"), T.slides[t].swiperSlideSize = o, T.slidesSizesGrid.push(o), T.params.centeredSlides ? (i = i + o / 2 + r / 2 + e, 0 === r && 0 !== t && (i = i - T.size / 2 - e), 0 === t && (i = i - T.size / 2 - e), Math.abs(i) < .001 && (i = 0), n % T.params.slidesPerGroup == 0 && T.snapGrid.push(i), T.slidesGrid.push(i)) : (n % T.params.slidesPerGroup == 0 && T.snapGrid.push(i), T.slidesGrid.push(i), i = i + o + e), T.virtualSize += o + e, r = o, n++);
            }T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter;var m;if (T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({ width: T.virtualSize + T.params.spaceBetween + "px" }), T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({ width: T.virtualSize + T.params.spaceBetween + "px" }) : T.wrapper.css({ height: T.virtualSize + T.params.spaceBetween + "px" })), T.params.slidesPerColumn > 1 && (T.virtualSize = (o + T.params.spaceBetween) * a, T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween, T.isHorizontal() ? T.wrapper.css({ width: T.virtualSize + T.params.spaceBetween + "px" }) : T.wrapper.css({ height: T.virtualSize + T.params.spaceBetween + "px" }), T.params.centeredSlides)) {
              for (m = [], t = 0; t < T.snapGrid.length; t++) {
                T.snapGrid[t] < T.virtualSize + T.snapGrid[0] && m.push(T.snapGrid[t]);
              }T.snapGrid = m;
            }if (!T.params.centeredSlides) {
              for (m = [], t = 0; t < T.snapGrid.length; t++) {
                T.snapGrid[t] <= T.virtualSize - T.size && m.push(T.snapGrid[t]);
              }T.snapGrid = m, Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size);
            }0 === T.snapGrid.length && (T.snapGrid = [0]), 0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({ marginLeft: e + "px" }) : T.slides.css({ marginRight: e + "px" }) : T.slides.css({ marginBottom: e + "px" })), T.params.watchSlidesProgress && T.updateSlidesOffset();
          }
        }, T.updateSlidesOffset = function () {
          for (var t = 0; t < T.slides.length; t++) {
            T.slides[t].swiperSlideOffset = T.isHorizontal() ? T.slides[t].offsetLeft : T.slides[t].offsetTop;
          }
        }, T.currentSlidesPerView = function () {
          var t,
              e,
              i = 1;if (T.params.centeredSlides) {
            var r,
                n = T.slides[T.activeIndex].swiperSlideSize;for (t = T.activeIndex + 1; t < T.slides.length; t++) {
              T.slides[t] && !r && (n += T.slides[t].swiperSlideSize, i++, n > T.size && (r = !0));
            }for (e = T.activeIndex - 1; e >= 0; e--) {
              T.slides[e] && !r && (n += T.slides[e].swiperSlideSize, i++, n > T.size && (r = !0));
            }
          } else for (t = T.activeIndex + 1; t < T.slides.length; t++) {
            T.slidesGrid[t] - T.slidesGrid[T.activeIndex] < T.size && i++;
          }return i;
        }, T.updateSlidesProgress = function (t) {
          if (void 0 === t && (t = T.translate || 0), 0 !== T.slides.length) {
            void 0 === T.slides[0].swiperSlideOffset && T.updateSlidesOffset();var e = -t;T.rtl && (e = t), T.slides.removeClass(T.params.slideVisibleClass);for (var i = 0; i < T.slides.length; i++) {
              var r = T.slides[i],
                  n = (e + (T.params.centeredSlides ? T.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + T.params.spaceBetween);if (T.params.watchSlidesVisibility) {
                var s = -(e - r.swiperSlideOffset),
                    a = s + T.slidesSizesGrid[i];(s >= 0 && s < T.size || a > 0 && a <= T.size || s <= 0 && a >= T.size) && T.slides.eq(i).addClass(T.params.slideVisibleClass);
              }r.progress = T.rtl ? -n : n;
            }
          }
        }, T.updateProgress = function (t) {
          void 0 === t && (t = T.translate || 0);var e = T.maxTranslate() - T.minTranslate(),
              i = T.isBeginning,
              r = T.isEnd;0 === e ? (T.progress = 0, T.isBeginning = T.isEnd = !0) : (T.progress = (t - T.minTranslate()) / e, T.isBeginning = T.progress <= 0, T.isEnd = T.progress >= 1), T.isBeginning && !i && T.emit("onReachBeginning", T), T.isEnd && !r && T.emit("onReachEnd", T), T.params.watchSlidesProgress && T.updateSlidesProgress(t), T.emit("onProgress", T, T.progress);
        }, T.updateActiveIndex = function () {
          var t,
              e,
              i,
              r = T.rtl ? T.translate : -T.translate;for (e = 0; e < T.slidesGrid.length; e++) {
            void 0 !== T.slidesGrid[e + 1] ? r >= T.slidesGrid[e] && r < T.slidesGrid[e + 1] - (T.slidesGrid[e + 1] - T.slidesGrid[e]) / 2 ? t = e : r >= T.slidesGrid[e] && r < T.slidesGrid[e + 1] && (t = e + 1) : r >= T.slidesGrid[e] && (t = e);
          }T.params.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), i = Math.floor(t / T.params.slidesPerGroup), i >= T.snapGrid.length && (i = T.snapGrid.length - 1), t !== T.activeIndex && (T.snapIndex = i, T.previousIndex = T.activeIndex, T.activeIndex = t, T.updateClasses(), T.updateRealIndex());
        }, T.updateRealIndex = function () {
          T.realIndex = parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index") || T.activeIndex, 10);
        }, T.updateClasses = function () {
          T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass + " " + T.params.slideDuplicateActiveClass + " " + T.params.slideDuplicateNextClass + " " + T.params.slideDuplicatePrevClass);var t = T.slides.eq(T.activeIndex);t.addClass(T.params.slideActiveClass), n.loop && (t.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass));var i = t.next("." + T.params.slideClass).addClass(T.params.slideNextClass);T.params.loop && 0 === i.length && (i = T.slides.eq(0), i.addClass(T.params.slideNextClass));var r = t.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);if (T.params.loop && 0 === r.length && (r = T.slides.eq(-1), r.addClass(T.params.slidePrevClass)), n.loop && (i.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass), r.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass)), T.paginationContainer && T.paginationContainer.length > 0) {
            var s,
                a = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;if (T.params.loop ? (s = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup), s > T.slides.length - 1 - 2 * T.loopedSlides && (s -= T.slides.length - 2 * T.loopedSlides), s > a - 1 && (s -= a), s < 0 && "bullets" !== T.params.paginationType && (s = a + s)) : s = void 0 !== T.snapIndex ? T.snapIndex : T.activeIndex || 0, "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass), T.paginationContainer.length > 1 ? T.bullets.each(function () {
              e(this).index() === s && e(this).addClass(T.params.bulletActiveClass);
            }) : T.bullets.eq(s).addClass(T.params.bulletActiveClass)), "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(s + 1), T.paginationContainer.find("." + T.params.paginationTotalClass).text(a)), "progress" === T.params.paginationType) {
              var o = (s + 1) / a,
                  l = o,
                  u = 1;T.isHorizontal() || (u = o, l = 1), T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + u + ")").transition(T.params.speed);
            }"custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, s + 1, a)), T.emit("onPaginationRendered", T, T.paginationContainer[0]));
          }T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))));
        }, T.updatePagination = function () {
          if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
            var t = "";if ("bullets" === T.params.paginationType) {
              for (var e = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, i = 0; i < e; i++) {
                t += T.params.paginationBulletRender ? T.params.paginationBulletRender(T, i, T.params.bulletClass) : "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
              }T.paginationContainer.html(t), T.bullets = T.paginationContainer.find("." + T.params.bulletClass), T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination();
            }"fraction" === T.params.paginationType && (t = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>', T.paginationContainer.html(t)), "progress" === T.params.paginationType && (t = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>', T.paginationContainer.html(t)), "custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0]);
          }
        }, T.update = function (t) {
          function e() {
            T.rtl, T.translate;i = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()), T.setWrapperTranslate(i), T.updateActiveIndex(), T.updateClasses();
          }if (T) {
            T.updateContainerSize(), T.updateSlidesSize(), T.updateProgress(), T.updatePagination(), T.updateClasses(), T.params.scrollbar && T.scrollbar && T.scrollbar.set();var i;if (t) {
              T.controller && T.controller.spline && (T.controller.spline = void 0), T.params.freeMode ? (e(), T.params.autoHeight && T.updateAutoHeight()) : (("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0)) || e();
            } else T.params.autoHeight && T.updateAutoHeight();
          }
        }, T.onResize = function (t) {
          T.params.onBeforeResize && T.params.onBeforeResize(T), T.params.breakpoints && T.setBreakpoint();var e = T.params.allowSwipeToPrev,
              i = T.params.allowSwipeToNext;T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0, T.updateContainerSize(), T.updateSlidesSize(), ("auto" === T.params.slidesPerView || T.params.freeMode || t) && T.updatePagination(), T.params.scrollbar && T.scrollbar && T.scrollbar.set(), T.controller && T.controller.spline && (T.controller.spline = void 0);var r = !1;if (T.params.freeMode) {
            var n = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());T.setWrapperTranslate(n), T.updateActiveIndex(), T.updateClasses(), T.params.autoHeight && T.updateAutoHeight();
          } else T.updateClasses(), r = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);T.params.lazyLoading && !r && T.lazy && T.lazy.load(), T.params.allowSwipeToPrev = e, T.params.allowSwipeToNext = i, T.params.onAfterResize && T.params.onAfterResize(T);
        }, T.touchEventsDesktop = { start: "mousedown", move: "mousemove", end: "mouseup" }, window.navigator.pointerEnabled ? T.touchEventsDesktop = { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled && (T.touchEventsDesktop = { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }), T.touchEvents = { start: T.support.touch || !T.params.simulateTouch ? "touchstart" : T.touchEventsDesktop.start, move: T.support.touch || !T.params.simulateTouch ? "touchmove" : T.touchEventsDesktop.move, end: T.support.touch || !T.params.simulateTouch ? "touchend" : T.touchEventsDesktop.end }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container : T.wrapper).addClass("swiper-wp8-" + T.params.direction), T.initEvents = function (t) {
          var e = t ? "off" : "on",
              i = t ? "removeEventListener" : "addEventListener",
              r = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0],
              s = T.support.touch ? r : document,
              a = !!T.params.nested;if (T.browser.ie) r[i](T.touchEvents.start, T.onTouchStart, !1), s[i](T.touchEvents.move, T.onTouchMove, a), s[i](T.touchEvents.end, T.onTouchEnd, !1);else {
            if (T.support.touch) {
              var o = !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && { passive: !0, capture: !1 };r[i](T.touchEvents.start, T.onTouchStart, o), r[i](T.touchEvents.move, T.onTouchMove, a), r[i](T.touchEvents.end, T.onTouchEnd, o);
            }(n.simulateTouch && !T.device.ios && !T.device.android || n.simulateTouch && !T.support.touch && T.device.ios) && (r[i]("mousedown", T.onTouchStart, !1), document[i]("mousemove", T.onTouchMove, a), document[i]("mouseup", T.onTouchEnd, !1));
          }window[i]("resize", T.onResize), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[e]("click", T.onClickNext), T.params.a11y && T.a11y && T.nextButton[e]("keydown", T.a11y.onEnterKey)), T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[e]("click", T.onClickPrev), T.params.a11y && T.a11y && T.prevButton[e]("keydown", T.a11y.onEnterKey)), T.params.pagination && T.params.paginationClickable && (T.paginationContainer[e]("click", "." + T.params.bulletClass, T.onClickIndex), T.params.a11y && T.a11y && T.paginationContainer[e]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)), (T.params.preventClicks || T.params.preventClicksPropagation) && r[i]("click", T.preventClicks, !0);
        }, T.attachEvents = function () {
          T.initEvents();
        }, T.detachEvents = function () {
          T.initEvents(!0);
        }, T.allowClick = !0, T.preventClicks = function (t) {
          T.allowClick || (T.params.preventClicks && t.preventDefault(), T.params.preventClicksPropagation && T.animating && (t.stopPropagation(), t.stopImmediatePropagation()));
        }, T.onClickNext = function (t) {
          t.preventDefault(), T.isEnd && !T.params.loop || T.slideNext();
        }, T.onClickPrev = function (t) {
          t.preventDefault(), T.isBeginning && !T.params.loop || T.slidePrev();
        }, T.onClickIndex = function (t) {
          t.preventDefault();var i = e(this).index() * T.params.slidesPerGroup;T.params.loop && (i += T.loopedSlides), T.slideTo(i);
        }, T.updateClickedSlide = function (t) {
          var i = o(t, "." + T.params.slideClass),
              r = !1;if (i) for (var n = 0; n < T.slides.length; n++) {
            T.slides[n] === i && (r = !0);
          }if (!i || !r) return T.clickedSlide = void 0, void (T.clickedIndex = void 0);if (T.clickedSlide = i, T.clickedIndex = e(i).index(), T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
            var s,
                a = T.clickedIndex,
                l = "auto" === T.params.slidesPerView ? T.currentSlidesPerView() : T.params.slidesPerView;if (T.params.loop) {
              if (T.animating) return;s = parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"), 10), T.params.centeredSlides ? a < T.loopedSlides - l / 2 || a > T.slides.length - T.loopedSlides + l / 2 ? (T.fixLoop(), a = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                T.slideTo(a);
              }, 0)) : T.slideTo(a) : a > T.slides.length - l ? (T.fixLoop(), a = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                T.slideTo(a);
              }, 0)) : T.slideTo(a);
            } else T.slideTo(a);
          }
        };var E,
            C,
            P,
            z,
            M,
            k,
            A,
            _,
            Y,
            B,
            I = "input, select, textarea, button, video",
            D = Date.now(),
            X = [];T.animating = !1, T.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };var R, L;T.onTouchStart = function (t) {
          if (t.originalEvent && (t = t.originalEvent), (R = "touchstart" === t.type) || !("which" in t) || 3 !== t.which) {
            if (T.params.noSwiping && o(t, "." + T.params.noSwipingClass)) return void (T.allowClick = !0);if (!T.params.swipeHandler || o(t, T.params.swipeHandler)) {
              var i = T.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                  r = T.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;if (!(T.device.ios && T.params.iOSEdgeSwipeDetection && i <= T.params.iOSEdgeSwipeThreshold)) {
                if (E = !0, C = !1, P = !0, M = void 0, L = void 0, T.touches.startX = i, T.touches.startY = r, z = Date.now(), T.allowClick = !0, T.updateContainerSize(), T.swipeDirection = void 0, T.params.threshold > 0 && (_ = !1), "touchstart" !== t.type) {
                  var n = !0;e(t.target).is(I) && (n = !1), document.activeElement && e(document.activeElement).is(I) && document.activeElement.blur(), n && t.preventDefault();
                }T.emit("onTouchStart", T, t);
              }
            }
          }
        }, T.onTouchMove = function (t) {
          if (t.originalEvent && (t = t.originalEvent), !R || "mousemove" !== t.type) {
            if (t.preventedByNestedSwiper) return T.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void (T.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);if (T.params.onlyExternal) return T.allowClick = !1, void (E && (T.touches.startX = T.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, T.touches.startY = T.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, z = Date.now()));if (R && T.params.touchReleaseOnEdges && !T.params.loop) if (T.isHorizontal()) {
              if (T.touches.currentX < T.touches.startX && T.translate <= T.maxTranslate() || T.touches.currentX > T.touches.startX && T.translate >= T.minTranslate()) return;
            } else if (T.touches.currentY < T.touches.startY && T.translate <= T.maxTranslate() || T.touches.currentY > T.touches.startY && T.translate >= T.minTranslate()) return;if (R && document.activeElement && t.target === document.activeElement && e(t.target).is(I)) return C = !0, void (T.allowClick = !1);if (P && T.emit("onTouchMove", T, t), !(t.targetTouches && t.targetTouches.length > 1)) {
              if (T.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, T.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, void 0 === M) {
                var i;T.isHorizontal() && T.touches.currentY === T.touches.startY || !T.isHorizontal() && T.touches.currentX === T.touches.startX ? M = !1 : (i = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI, M = T.isHorizontal() ? i > T.params.touchAngle : 90 - i > T.params.touchAngle);
              }if (M && T.emit("onTouchMoveOpposite", T, t), void 0 === L && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (L = !0)), E) {
                if (M) return void (E = !1);if (L) {
                  T.allowClick = !1, T.emit("onSliderMove", T, t), t.preventDefault(), T.params.touchMoveStopPropagation && !T.params.nested && t.stopPropagation(), C || (n.loop && T.fixLoop(), A = T.getWrapperTranslate(), T.setWrapperTransition(0), T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()), B = !1, !T.params.grabCursor || T.params.allowSwipeToNext !== !0 && T.params.allowSwipeToPrev !== !0 || T.setGrabCursor(!0)), C = !0;var r = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY;r *= T.params.touchRatio, T.rtl && (r = -r), T.swipeDirection = r > 0 ? "prev" : "next", k = r + A;var s = !0;if (r > 0 && k > T.minTranslate() ? (s = !1, T.params.resistance && (k = T.minTranslate() - 1 + Math.pow(-T.minTranslate() + A + r, T.params.resistanceRatio))) : r < 0 && k < T.maxTranslate() && (s = !1, T.params.resistance && (k = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - A - r, T.params.resistanceRatio))), s && (t.preventedByNestedSwiper = !0), !T.params.allowSwipeToNext && "next" === T.swipeDirection && k < A && (k = A), !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && k > A && (k = A), T.params.threshold > 0) {
                    if (!(Math.abs(r) > T.params.threshold || _)) return void (k = A);if (!_) return _ = !0, T.touches.startX = T.touches.currentX, T.touches.startY = T.touches.currentY, k = A, void (T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY);
                  }T.params.followFinger && ((T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(), T.params.freeMode && (0 === X.length && X.push({ position: T.touches[T.isHorizontal() ? "startX" : "startY"], time: z }), X.push({ position: T.touches[T.isHorizontal() ? "currentX" : "currentY"], time: new window.Date().getTime() })), T.updateProgress(k), T.setWrapperTranslate(k));
                }
              }
            }
          }
        }, T.onTouchEnd = function (t) {
          if (t.originalEvent && (t = t.originalEvent), P && T.emit("onTouchEnd", T, t), P = !1, E) {
            T.params.grabCursor && C && E && (T.params.allowSwipeToNext === !0 || T.params.allowSwipeToPrev === !0) && T.setGrabCursor(!1);var i = Date.now(),
                r = i - z;if (T.allowClick && (T.updateClickedSlide(t), T.emit("onTap", T, t), r < 300 && i - D > 300 && (Y && clearTimeout(Y), Y = setTimeout(function () {
              T && (T.params.paginationHide && T.paginationContainer.length > 0 && !e(t.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass), T.emit("onClick", T, t));
            }, 300)), r < 300 && i - D < 300 && (Y && clearTimeout(Y), T.emit("onDoubleTap", T, t))), D = Date.now(), setTimeout(function () {
              T && (T.allowClick = !0);
            }, 0), !E || !C || !T.swipeDirection || 0 === T.touches.diff || k === A) return void (E = C = !1);E = C = !1;var n;if (n = T.params.followFinger ? T.rtl ? T.translate : -T.translate : -k, T.params.freeMode) {
              if (n < -T.minTranslate()) return void T.slideTo(T.activeIndex);if (n > -T.maxTranslate()) return void (T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));if (T.params.freeModeMomentum) {
                if (X.length > 1) {
                  var s = X.pop(),
                      a = X.pop(),
                      o = s.position - a.position,
                      l = s.time - a.time;T.velocity = o / l, T.velocity = T.velocity / 2, Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0), (l > 150 || new window.Date().getTime() - s.time > 300) && (T.velocity = 0);
                } else T.velocity = 0;T.velocity = T.velocity * T.params.freeModeMomentumVelocityRatio, X.length = 0;var u = 1e3 * T.params.freeModeMomentumRatio,
                    p = T.velocity * u,
                    c = T.translate + p;T.rtl && (c = -c);var h,
                    d = !1,
                    f = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;if (c < T.maxTranslate()) T.params.freeModeMomentumBounce ? (c + T.maxTranslate() < -f && (c = T.maxTranslate() - f), h = T.maxTranslate(), d = !0, B = !0) : c = T.maxTranslate();else if (c > T.minTranslate()) T.params.freeModeMomentumBounce ? (c - T.minTranslate() > f && (c = T.minTranslate() + f), h = T.minTranslate(), d = !0, B = !0) : c = T.minTranslate();else if (T.params.freeModeSticky) {
                  var m,
                      g = 0;for (g = 0; g < T.snapGrid.length; g += 1) {
                    if (T.snapGrid[g] > -c) {
                      m = g;break;
                    }
                  }c = Math.abs(T.snapGrid[m] - c) < Math.abs(T.snapGrid[m - 1] - c) || "next" === T.swipeDirection ? T.snapGrid[m] : T.snapGrid[m - 1], T.rtl || (c = -c);
                }if (0 !== T.velocity) u = T.rtl ? Math.abs((-c - T.translate) / T.velocity) : Math.abs((c - T.translate) / T.velocity);else if (T.params.freeModeSticky) return void T.slideReset();T.params.freeModeMomentumBounce && d ? (T.updateProgress(h), T.setWrapperTransition(u), T.setWrapperTranslate(c), T.onTransitionStart(), T.animating = !0, T.wrapper.transitionEnd(function () {
                  T && B && (T.emit("onMomentumBounce", T), T.setWrapperTransition(T.params.speed), T.setWrapperTranslate(h), T.wrapper.transitionEnd(function () {
                    T && T.onTransitionEnd();
                  }));
                })) : T.velocity ? (T.updateProgress(c), T.setWrapperTransition(u), T.setWrapperTranslate(c), T.onTransitionStart(), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function () {
                  T && T.onTransitionEnd();
                }))) : T.updateProgress(c), T.updateActiveIndex();
              }return void ((!T.params.freeModeMomentum || r >= T.params.longSwipesMs) && (T.updateProgress(), T.updateActiveIndex()));
            }var v,
                w = 0,
                y = T.slidesSizesGrid[0];for (v = 0; v < T.slidesGrid.length; v += T.params.slidesPerGroup) {
              void 0 !== T.slidesGrid[v + T.params.slidesPerGroup] ? n >= T.slidesGrid[v] && n < T.slidesGrid[v + T.params.slidesPerGroup] && (w = v, y = T.slidesGrid[v + T.params.slidesPerGroup] - T.slidesGrid[v]) : n >= T.slidesGrid[v] && (w = v, y = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
            }var x = (n - T.slidesGrid[w]) / y;if (r > T.params.longSwipesMs) {
              if (!T.params.longSwipes) return void T.slideTo(T.activeIndex);"next" === T.swipeDirection && (x >= T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w)), "prev" === T.swipeDirection && (x > 1 - T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w));
            } else {
              if (!T.params.shortSwipes) return void T.slideTo(T.activeIndex);"next" === T.swipeDirection && T.slideTo(w + T.params.slidesPerGroup), "prev" === T.swipeDirection && T.slideTo(w);
            }
          }
        }, T._slideTo = function (t, e) {
          return T.slideTo(t, e, !0, !0);
        }, T.slideTo = function (t, e, i, r) {
          void 0 === i && (i = !0), void 0 === t && (t = 0), t < 0 && (t = 0), T.snapIndex = Math.floor(t / T.params.slidesPerGroup), T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);var n = -T.snapGrid[T.snapIndex];if (T.params.autoplay && T.autoplaying && (r || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(e) : T.stopAutoplay()), T.updateProgress(n), T.params.normalizeSlideIndex) for (var s = 0; s < T.slidesGrid.length; s++) {
            -Math.floor(100 * n) >= Math.floor(100 * T.slidesGrid[s]) && (t = s);
          }return !(!T.params.allowSwipeToNext && n < T.translate && n < T.minTranslate()) && !(!T.params.allowSwipeToPrev && n > T.translate && n > T.maxTranslate() && (T.activeIndex || 0) !== t) && (void 0 === e && (e = T.params.speed), T.previousIndex = T.activeIndex || 0, T.activeIndex = t, T.updateRealIndex(), T.rtl && -n === T.translate || !T.rtl && n === T.translate ? (T.params.autoHeight && T.updateAutoHeight(), T.updateClasses(), "slide" !== T.params.effect && T.setWrapperTranslate(n), !1) : (T.updateClasses(), T.onTransitionStart(i), 0 === e || T.browser.lteIE9 ? (T.setWrapperTranslate(n), T.setWrapperTransition(0), T.onTransitionEnd(i)) : (T.setWrapperTranslate(n), T.setWrapperTransition(e), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function () {
            T && T.onTransitionEnd(i);
          }))), !0));
        }, T.onTransitionStart = function (t) {
          void 0 === t && (t = !0), T.params.autoHeight && T.updateAutoHeight(), T.lazy && T.lazy.onTransitionStart(), t && (T.emit("onTransitionStart", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)));
        }, T.onTransitionEnd = function (t) {
          T.animating = !1, T.setWrapperTransition(0), void 0 === t && (t = !0), T.lazy && T.lazy.onTransitionEnd(), t && (T.emit("onTransitionEnd", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))), T.params.history && T.history && T.history.setHistory(T.params.history, T.activeIndex), T.params.hashnav && T.hashnav && T.hashnav.setHash();
        }, T.slideNext = function (t, e, i) {
          if (T.params.loop) {
            if (T.animating) return !1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex + T.params.slidesPerGroup, e, t, i);
          }return T.slideTo(T.activeIndex + T.params.slidesPerGroup, e, t, i);
        }, T._slideNext = function (t) {
          return T.slideNext(!0, t, !0);
        }, T.slidePrev = function (t, e, i) {
          if (T.params.loop) {
            if (T.animating) return !1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex - 1, e, t, i);
          }return T.slideTo(T.activeIndex - 1, e, t, i);
        }, T._slidePrev = function (t) {
          return T.slidePrev(!0, t, !0);
        }, T.slideReset = function (t, e, i) {
          return T.slideTo(T.activeIndex, e, t);
        }, T.disableTouchControl = function () {
          return T.params.onlyExternal = !0, !0;
        }, T.enableTouchControl = function () {
          return T.params.onlyExternal = !1, !0;
        }, T.setWrapperTransition = function (t, e) {
          T.wrapper.transition(t), "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(t), T.params.parallax && T.parallax && T.parallax.setTransition(t), T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(t), T.params.control && T.controller && T.controller.setTransition(t, e), T.emit("onSetTransition", T, t);
        }, T.setWrapperTranslate = function (t, e, i) {
          var r = 0,
              n = 0;T.isHorizontal() ? r = T.rtl ? -t : t : n = t, T.params.roundLengths && (r = s(r), n = s(n)), T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + r + "px, " + n + "px, 0px)") : T.wrapper.transform("translate(" + r + "px, " + n + "px)")), T.translate = T.isHorizontal() ? r : n;var a,
              o = T.maxTranslate() - T.minTranslate();a = 0 === o ? 0 : (t - T.minTranslate()) / o, a !== T.progress && T.updateProgress(t), e && T.updateActiveIndex(), "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate), T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate), T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate), T.params.control && T.controller && T.controller.setTranslate(T.translate, i), T.emit("onSetTranslate", T, T.translate);
        }, T.getTranslate = function (t, e) {
          var i, r, n, s;return void 0 === e && (e = "x"), T.params.virtualTranslate ? T.rtl ? -T.translate : T.translate : (n = window.getComputedStyle(t, null), window.WebKitCSSMatrix ? (r = n.transform || n.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function (t) {
            return t.replace(",", ".");
          }).join(", ")), s = new window.WebKitCSSMatrix("none" === r ? "" : r)) : (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = s.toString().split(",")), "x" === e && (r = window.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === e && (r = window.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), T.rtl && r && (r = -r), r || 0);
        }, T.getWrapperTranslate = function (t) {
          return void 0 === t && (t = T.isHorizontal() ? "x" : "y"), T.getTranslate(T.wrapper[0], t);
        }, T.observers = [], T.initObservers = function () {
          if (T.params.observeParents) for (var t = T.container.parents(), e = 0; e < t.length; e++) {
            l(t[e]);
          }l(T.container[0], { childList: !1 }), l(T.wrapper[0], { attributes: !1 });
        }, T.disconnectObservers = function () {
          for (var t = 0; t < T.observers.length; t++) {
            T.observers[t].disconnect();
          }T.observers = [];
        }, T.createLoop = function () {
          T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();var t = T.wrapper.children("." + T.params.slideClass);"auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = t.length), T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10), T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides, T.loopedSlides > t.length && (T.loopedSlides = t.length);var i,
              r = [],
              n = [];for (t.each(function (i, s) {
            var a = e(this);i < T.loopedSlides && n.push(s), i < t.length && i >= t.length - T.loopedSlides && r.push(s), a.attr("data-swiper-slide-index", i);
          }), i = 0; i < n.length; i++) {
            T.wrapper.append(e(n[i].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
          }for (i = r.length - 1; i >= 0; i--) {
            T.wrapper.prepend(e(r[i].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
          }
        }, T.destroyLoop = function () {
          T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(), T.slides.removeAttr("data-swiper-slide-index");
        }, T.reLoop = function (t) {
          var e = T.activeIndex - T.loopedSlides;T.destroyLoop(), T.createLoop(), T.updateSlidesSize(), t && T.slideTo(e + T.loopedSlides, 0, !1);
        }, T.fixLoop = function () {
          var t;T.activeIndex < T.loopedSlides ? (t = T.slides.length - 3 * T.loopedSlides + T.activeIndex, t += T.loopedSlides, T.slideTo(t, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (t = -T.slides.length + T.activeIndex + T.loopedSlides, t += T.loopedSlides, T.slideTo(t, 0, !1, !0));
        }, T.appendSlide = function (t) {
          if (T.params.loop && T.destroyLoop(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.length) for (var e = 0; e < t.length; e++) {
            t[e] && T.wrapper.append(t[e]);
          } else T.wrapper.append(t);T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0);
        }, T.prependSlide = function (t) {
          T.params.loop && T.destroyLoop();var e = T.activeIndex + 1;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.length) {
            for (var i = 0; i < t.length; i++) {
              t[i] && T.wrapper.prepend(t[i]);
            }e = T.activeIndex + t.length;
          } else T.wrapper.prepend(t);T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0), T.slideTo(e, 0, !1);
        }, T.removeSlide = function (t) {
          T.params.loop && (T.destroyLoop(), T.slides = T.wrapper.children("." + T.params.slideClass));var e,
              i = T.activeIndex;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.length) {
            for (var r = 0; r < t.length; r++) {
              e = t[r], T.slides[e] && T.slides.eq(e).remove(), e < i && i--;
            }i = Math.max(i, 0);
          } else e = t, T.slides[e] && T.slides.eq(e).remove(), e < i && i--, i = Math.max(i, 0);T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0), T.params.loop ? T.slideTo(i + T.loopedSlides, 0, !1) : T.slideTo(i, 0, !1);
        }, T.removeAllSlides = function () {
          for (var t = [], e = 0; e < T.slides.length; e++) {
            t.push(e);
          }T.removeSlide(t);
        }, T.effects = { fade: { setTranslate: function setTranslate() {
              for (var t = 0; t < T.slides.length; t++) {
                var e = T.slides.eq(t),
                    i = e[0].swiperSlideOffset,
                    r = -i;T.params.virtualTranslate || (r -= T.translate);var n = 0;T.isHorizontal() || (n = r, r = 0);var s = T.params.fade.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);e.css({ opacity: s }).transform("translate3d(" + r + "px, " + n + "px, 0px)");
              }
            }, setTransition: function setTransition(t) {
              if (T.slides.transition(t), T.params.virtualTranslate && 0 !== t) {
                var e = !1;T.slides.transitionEnd(function () {
                  if (!e && T) {
                    e = !0, T.animating = !1;for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++) {
                      T.wrapper.trigger(t[i]);
                    }
                  }
                });
              }
            } }, flip: { setTranslate: function setTranslate() {
              for (var t = 0; t < T.slides.length; t++) {
                var i = T.slides.eq(t),
                    r = i[0].progress;T.params.flip.limitRotation && (r = Math.max(Math.min(i[0].progress, 1), -1));var n = i[0].swiperSlideOffset,
                    s = -180 * r,
                    a = s,
                    o = 0,
                    l = -n,
                    u = 0;if (T.isHorizontal() ? T.rtl && (a = -a) : (u = l, l = 0, o = -a, a = 0), i[0].style.zIndex = -Math.abs(Math.round(r)) + T.slides.length, T.params.flip.slideShadows) {
                  var p = T.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                      c = T.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), i.append(p)), 0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0));
                }i.transform("translate3d(" + l + "px, " + u + "px, 0px) rotateX(" + o + "deg) rotateY(" + a + "deg)");
              }
            }, setTransition: function setTransition(t) {
              if (T.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), T.params.virtualTranslate && 0 !== t) {
                var i = !1;T.slides.eq(T.activeIndex).transitionEnd(function () {
                  if (!i && T && e(this).hasClass(T.params.slideActiveClass)) {
                    i = !0, T.animating = !1;for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < t.length; r++) {
                      T.wrapper.trigger(t[r]);
                    }
                  }
                });
              }
            } }, cube: { setTranslate: function setTranslate() {
              var t,
                  i = 0;T.params.cube.shadow && (T.isHorizontal() ? (t = T.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), T.wrapper.append(t)), t.css({ height: T.width + "px" })) : (t = T.container.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), T.container.append(t))));for (var r = 0; r < T.slides.length; r++) {
                var n = T.slides.eq(r),
                    s = 90 * r,
                    a = Math.floor(s / 360);T.rtl && (s = -s, a = Math.floor(-s / 360));var o = Math.max(Math.min(n[0].progress, 1), -1),
                    l = 0,
                    u = 0,
                    p = 0;r % 4 == 0 ? (l = 4 * -a * T.size, p = 0) : (r - 1) % 4 == 0 ? (l = 0, p = 4 * -a * T.size) : (r - 2) % 4 == 0 ? (l = T.size + 4 * a * T.size, p = T.size) : (r - 3) % 4 == 0 && (l = -T.size, p = 3 * T.size + 4 * T.size * a), T.rtl && (l = -l), T.isHorizontal() || (u = l, l = 0);var c = "rotateX(" + (T.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (T.isHorizontal() ? s : 0) + "deg) translate3d(" + l + "px, " + u + "px, " + p + "px)";if (o <= 1 && o > -1 && (i = 90 * r + 90 * o, T.rtl && (i = 90 * -r - 90 * o)), n.transform(c), T.params.cube.slideShadows) {
                  var h = T.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                      d = T.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), n.append(h)), 0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(d)), h.length && (h[0].style.opacity = Math.max(-o, 0)), d.length && (d[0].style.opacity = Math.max(o, 0));
                }
              }if (T.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + T.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + T.size / 2 + "px", "transform-origin": "50% 50% -" + T.size / 2 + "px" }), T.params.cube.shadow) if (T.isHorizontal()) t.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");else {
                var f = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                    m = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2),
                    g = T.params.cube.shadowScale,
                    v = T.params.cube.shadowScale / m,
                    w = T.params.cube.shadowOffset;t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (T.height / 2 + w) + "px, " + -T.height / 2 / v + "px) rotateX(-90deg)");
              }var y = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;T.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (T.isHorizontal() ? 0 : i) + "deg) rotateY(" + (T.isHorizontal() ? -i : 0) + "deg)");
            }, setTransition: function setTransition(t) {
              T.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(t);
            } }, coverflow: { setTranslate: function setTranslate() {
              for (var t = T.translate, i = T.isHorizontal() ? -t + T.width / 2 : -t + T.height / 2, r = T.isHorizontal() ? T.params.coverflow.rotate : -T.params.coverflow.rotate, n = T.params.coverflow.depth, s = 0, a = T.slides.length; s < a; s++) {
                var o = T.slides.eq(s),
                    l = T.slidesSizesGrid[s],
                    u = o[0].swiperSlideOffset,
                    p = (i - u - l / 2) / l * T.params.coverflow.modifier,
                    c = T.isHorizontal() ? r * p : 0,
                    h = T.isHorizontal() ? 0 : r * p,
                    d = -n * Math.abs(p),
                    f = T.isHorizontal() ? 0 : T.params.coverflow.stretch * p,
                    m = T.isHorizontal() ? T.params.coverflow.stretch * p : 0;Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(d) < .001 && (d = 0), Math.abs(c) < .001 && (c = 0), Math.abs(h) < .001 && (h = 0);var g = "translate3d(" + m + "px," + f + "px," + d + "px)  rotateX(" + h + "deg) rotateY(" + c + "deg)";if (o.transform(g), o[0].style.zIndex = 1 - Math.abs(Math.round(p)), T.params.coverflow.slideShadows) {
                  var v = T.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                      w = T.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = p > 0 ? p : 0), w.length && (w[0].style.opacity = -p > 0 ? -p : 0);
                }
              }if (T.browser.ie) {
                T.wrapper[0].style.perspectiveOrigin = i + "px 50%";
              }
            }, setTransition: function setTransition(t) {
              T.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t);
            } } }, T.lazy = { initialImageLoaded: !1, loadImageInSlide: function loadImageInSlide(t, i) {
            if (void 0 !== t && (void 0 === i && (i = !0), 0 !== T.slides.length)) {
              var r = T.slides.eq(t),
                  n = r.find("." + T.params.lazyLoadingClass + ":not(." + T.params.lazyStatusLoadedClass + "):not(." + T.params.lazyStatusLoadingClass + ")");!r.hasClass(T.params.lazyLoadingClass) || r.hasClass(T.params.lazyStatusLoadedClass) || r.hasClass(T.params.lazyStatusLoadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function () {
                var t = e(this);t.addClass(T.params.lazyStatusLoadingClass);var n = t.attr("data-background"),
                    s = t.attr("data-src"),
                    a = t.attr("data-srcset"),
                    o = t.attr("data-sizes");T.loadImage(t[0], s || n, a, o, !1, function () {
                  if (void 0 !== T && null !== T && T) {
                    if (n ? (t.css("background-image", 'url("' + n + '")'), t.removeAttr("data-background")) : (a && (t.attr("srcset", a), t.removeAttr("data-srcset")), o && (t.attr("sizes", o), t.removeAttr("data-sizes")), s && (t.attr("src", s), t.removeAttr("data-src"))), t.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass), r.find("." + T.params.lazyPreloaderClass + ", ." + T.params.preloaderClass).remove(), T.params.loop && i) {
                      var e = r.attr("data-swiper-slide-index");if (r.hasClass(T.params.slideDuplicateClass)) {
                        var l = T.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + T.params.slideDuplicateClass + ")");T.lazy.loadImageInSlide(l.index(), !1);
                      } else {
                        var u = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');T.lazy.loadImageInSlide(u.index(), !1);
                      }
                    }T.emit("onLazyImageReady", T, r[0], t[0]);
                  }
                }), T.emit("onLazyImageLoad", T, r[0], t[0]);
              });
            }
          }, load: function load() {
            var t,
                i = T.params.slidesPerView;if ("auto" === i && (i = 0), T.lazy.initialImageLoaded || (T.lazy.initialImageLoaded = !0), T.params.watchSlidesVisibility) T.wrapper.children("." + T.params.slideVisibleClass).each(function () {
              T.lazy.loadImageInSlide(e(this).index());
            });else if (i > 1) for (t = T.activeIndex; t < T.activeIndex + i; t++) {
              T.slides[t] && T.lazy.loadImageInSlide(t);
            } else T.lazy.loadImageInSlide(T.activeIndex);if (T.params.lazyLoadingInPrevNext) if (i > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
              var r = T.params.lazyLoadingInPrevNextAmount,
                  n = i,
                  s = Math.min(T.activeIndex + n + Math.max(r, n), T.slides.length),
                  a = Math.max(T.activeIndex - Math.max(n, r), 0);for (t = T.activeIndex + i; t < s; t++) {
                T.slides[t] && T.lazy.loadImageInSlide(t);
              }for (t = a; t < T.activeIndex; t++) {
                T.slides[t] && T.lazy.loadImageInSlide(t);
              }
            } else {
              var o = T.wrapper.children("." + T.params.slideNextClass);o.length > 0 && T.lazy.loadImageInSlide(o.index());var l = T.wrapper.children("." + T.params.slidePrevClass);l.length > 0 && T.lazy.loadImageInSlide(l.index());
            }
          }, onTransitionStart: function onTransitionStart() {
            T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load();
          }, onTransitionEnd: function onTransitionEnd() {
            T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load();
          } }, T.scrollbar = { isTouched: !1, setDragPosition: function setDragPosition(t) {
            var e = T.scrollbar,
                i = T.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY,
                r = i - e.track.offset()[T.isHorizontal() ? "left" : "top"] - e.dragSize / 2,
                n = -T.minTranslate() * e.moveDivider,
                s = -T.maxTranslate() * e.moveDivider;r < n ? r = n : r > s && (r = s), r = -r / e.moveDivider, T.updateProgress(r), T.setWrapperTranslate(r, !0);
          }, dragStart: function dragStart(t) {
            var e = T.scrollbar;e.isTouched = !0, t.preventDefault(), t.stopPropagation(), e.setDragPosition(t), clearTimeout(e.dragTimeout), e.track.transition(0), T.params.scrollbarHide && e.track.css("opacity", 1), T.wrapper.transition(100), e.drag.transition(100), T.emit("onScrollbarDragStart", T);
          }, dragMove: function dragMove(t) {
            var e = T.scrollbar;e.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), T.wrapper.transition(0), e.track.transition(0), e.drag.transition(0), T.emit("onScrollbarDragMove", T));
          }, dragEnd: function dragEnd(t) {
            var e = T.scrollbar;e.isTouched && (e.isTouched = !1, T.params.scrollbarHide && (clearTimeout(e.dragTimeout), e.dragTimeout = setTimeout(function () {
              e.track.css("opacity", 0), e.track.transition(400);
            }, 1e3)), T.emit("onScrollbarDragEnd", T), T.params.scrollbarSnapOnRelease && T.slideReset());
          }, draggableEvents: function () {
            return T.params.simulateTouch !== !1 || T.support.touch ? T.touchEvents : T.touchEventsDesktop;
          }(), enableDraggable: function enableDraggable() {
            var t = T.scrollbar,
                i = T.support.touch ? t.track : document;e(t.track).on(t.draggableEvents.start, t.dragStart), e(i).on(t.draggableEvents.move, t.dragMove), e(i).on(t.draggableEvents.end, t.dragEnd);
          }, disableDraggable: function disableDraggable() {
            var t = T.scrollbar,
                i = T.support.touch ? t.track : document;e(t.track).off(t.draggableEvents.start, t.dragStart), e(i).off(t.draggableEvents.move, t.dragMove), e(i).off(t.draggableEvents.end, t.dragEnd);
          }, set: function set() {
            if (T.params.scrollbar) {
              var t = T.scrollbar;t.track = e(T.params.scrollbar), T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && t.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (t.track = T.container.find(T.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = T.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = T.size / T.virtualSize, t.moveDivider = t.divider * (t.trackSize / T.size), t.dragSize = t.trackSize * t.divider, T.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", T.params.scrollbarHide && (t.track[0].style.opacity = 0);
            }
          }, setTranslate: function setTranslate() {
            if (T.params.scrollbar) {
              var t,
                  e = T.scrollbar,
                  i = (T.translate, e.dragSize);t = (e.trackSize - e.dragSize) * T.progress, T.rtl && T.isHorizontal() ? (t = -t, t > 0 ? (i = e.dragSize - t, t = 0) : -t + e.dragSize > e.trackSize && (i = e.trackSize + t)) : t < 0 ? (i = e.dragSize + t, t = 0) : t + e.dragSize > e.trackSize && (i = e.trackSize - t), T.isHorizontal() ? (T.support.transforms3d ? e.drag.transform("translate3d(" + t + "px, 0, 0)") : e.drag.transform("translateX(" + t + "px)"), e.drag[0].style.width = i + "px") : (T.support.transforms3d ? e.drag.transform("translate3d(0px, " + t + "px, 0)") : e.drag.transform("translateY(" + t + "px)"), e.drag[0].style.height = i + "px"), T.params.scrollbarHide && (clearTimeout(e.timeout), e.track[0].style.opacity = 1, e.timeout = setTimeout(function () {
                e.track[0].style.opacity = 0, e.track.transition(400);
              }, 1e3));
            }
          }, setTransition: function setTransition(t) {
            T.params.scrollbar && T.scrollbar.drag.transition(t);
          } }, T.controller = { LinearSpline: function LinearSpline(t, e) {
            var i = function () {
              var t, e, i;return function (r, n) {
                for (e = -1, t = r.length; t - e > 1;) {
                  r[i = t + e >> 1] <= n ? e = i : t = i;
                }return t;
              };
            }();this.x = t, this.y = e, this.lastIndex = t.length - 1;var r, n;this.x.length;this.interpolate = function (t) {
              return t ? (n = i(this.x, t), r = n - 1, (t - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
            };
          }, getInterpolateFunction: function getInterpolateFunction(t) {
            T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid, t.slidesGrid) : new T.controller.LinearSpline(T.snapGrid, t.snapGrid));
          }, setTranslate: function setTranslate(t, e) {
            function r(e) {
              t = e.rtl && "horizontal" === e.params.direction ? -T.translate : T.translate, "slide" === T.params.controlBy && (T.controller.getInterpolateFunction(e), s = -T.controller.spline.interpolate(-t)), s && "container" !== T.params.controlBy || (n = (e.maxTranslate() - e.minTranslate()) / (T.maxTranslate() - T.minTranslate()), s = (t - T.minTranslate()) * n + e.minTranslate()), T.params.controlInverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setWrapperTranslate(s, !1, T), e.updateActiveIndex();
            }var n,
                s,
                a = T.params.control;if (Array.isArray(a)) for (var o = 0; o < a.length; o++) {
              a[o] !== e && a[o] instanceof i && r(a[o]);
            } else a instanceof i && e !== a && r(a);
          }, setTransition: function setTransition(t, e) {
            function r(e) {
              e.setWrapperTransition(t, T), 0 !== t && (e.onTransitionStart(), e.wrapper.transitionEnd(function () {
                s && (e.params.loop && "slide" === T.params.controlBy && e.fixLoop(), e.onTransitionEnd());
              }));
            }var n,
                s = T.params.control;if (Array.isArray(s)) for (n = 0; n < s.length; n++) {
              s[n] !== e && s[n] instanceof i && r(s[n]);
            } else s instanceof i && e !== s && r(s);
          } }, T.hashnav = { onHashCange: function onHashCange(t, e) {
            var i = document.location.hash.replace("#", "");i !== T.slides.eq(T.activeIndex).attr("data-hash") && T.slideTo(T.wrapper.children("." + T.params.slideClass + '[data-hash="' + i + '"]').index());
          }, attachEvents: function attachEvents(t) {
            var i = t ? "off" : "on";e(window)[i]("hashchange", T.hashnav.onHashCange);
          }, setHash: function setHash() {
            if (T.hashnav.initialized && T.params.hashnav) if (T.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + T.slides.eq(T.activeIndex).attr("data-hash") || "");else {
              var t = T.slides.eq(T.activeIndex),
                  e = t.attr("data-hash") || t.attr("data-history");document.location.hash = e || "";
            }
          }, init: function init() {
            if (T.params.hashnav && !T.params.history) {
              T.hashnav.initialized = !0;var t = document.location.hash.replace("#", "");if (t) for (var e = 0, i = 0, r = T.slides.length; i < r; i++) {
                var n = T.slides.eq(i),
                    s = n.attr("data-hash") || n.attr("data-history");if (s === t && !n.hasClass(T.params.slideDuplicateClass)) {
                  var a = n.index();T.slideTo(a, e, T.params.runCallbacksOnInit, !0);
                }
              }T.params.hashnavWatchState && T.hashnav.attachEvents();
            }
          }, destroy: function destroy() {
            T.params.hashnavWatchState && T.hashnav.attachEvents(!0);
          } }, T.history = { init: function init() {
            if (T.params.history) {
              if (!window.history || !window.history.pushState) return T.params.history = !1, void (T.params.hashnav = !0);T.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, T.params.runCallbacksOnInit), T.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
            }
          }, setHistoryPopState: function setHistoryPopState() {
            T.history.paths = T.history.getPathValues(), T.history.scrollToSlide(T.params.speed, T.history.paths.value, !1);
          }, getPathValues: function getPathValues() {
            var t = window.location.pathname.slice(1).split("/"),
                e = t.length;return { key: t[e - 2], value: t[e - 1] };
          }, setHistory: function setHistory(t, e) {
            if (T.history.initialized && T.params.history) {
              var i = T.slides.eq(e),
                  r = this.slugify(i.attr("data-history"));window.location.pathname.includes(t) || (r = t + "/" + r), T.params.replaceState ? window.history.replaceState(null, null, r) : window.history.pushState(null, null, r);
            }
          }, slugify: function slugify(t) {
            return t.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
          }, scrollToSlide: function scrollToSlide(t, e, i) {
            if (e) for (var r = 0, n = T.slides.length; r < n; r++) {
              var s = T.slides.eq(r),
                  a = this.slugify(s.attr("data-history"));if (a === e && !s.hasClass(T.params.slideDuplicateClass)) {
                var o = s.index();T.slideTo(o, t, i);
              }
            } else T.slideTo(0, t, i);
          } }, T.disableKeyboardControl = function () {
          T.params.keyboardControl = !1, e(document).off("keydown", u);
        }, T.enableKeyboardControl = function () {
          T.params.keyboardControl = !0, e(document).on("keydown", u);
        }, T.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }, T.params.mousewheelControl && (T.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : p() ? "wheel" : "mousewheel"), T.disableMousewheelControl = function () {
          if (!T.mousewheel.event) return !1;var t = T.container;return "container" !== T.params.mousewheelEventsTarged && (t = e(T.params.mousewheelEventsTarged)), t.off(T.mousewheel.event, h), T.params.mousewheelControl = !1, !0;
        }, T.enableMousewheelControl = function () {
          if (!T.mousewheel.event) return !1;var t = T.container;return "container" !== T.params.mousewheelEventsTarged && (t = e(T.params.mousewheelEventsTarged)), t.on(T.mousewheel.event, h), T.params.mousewheelControl = !0, !0;
        }, T.parallax = { setTranslate: function setTranslate() {
            T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              d(this, T.progress);
            }), T.slides.each(function () {
              var t = e(this);t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                d(this, Math.min(Math.max(t[0].progress, -1), 1));
              });
            });
          }, setTransition: function setTransition(t) {
            void 0 === t && (t = T.params.speed), T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              var i = e(this),
                  r = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;0 === t && (r = 0), i.transition(r);
            });
          } }, T.zoom = { scale: 1, currentScale: 1, isScaling: !1, gesture: { slide: void 0, slideWidth: void 0, slideHeight: void 0, image: void 0, imageWrap: void 0, zoomMax: T.params.zoomMax }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 }, getDistanceBetweenTouches: function getDistanceBetweenTouches(t) {
            if (t.targetTouches.length < 2) return 1;var e = t.targetTouches[0].pageX,
                i = t.targetTouches[0].pageY,
                r = t.targetTouches[1].pageX,
                n = t.targetTouches[1].pageY;return Math.sqrt(Math.pow(r - e, 2) + Math.pow(n - i, 2));
          }, onGestureStart: function onGestureStart(t) {
            var i = T.zoom;if (!T.support.gestures) {
              if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;i.gesture.scaleStart = i.getDistanceBetweenTouches(t);
            }if (!(i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = e(this), 0 === i.gesture.slide.length && (i.gesture.slide = T.slides.eq(T.activeIndex)), i.gesture.image = i.gesture.slide.find("img, svg, canvas"), i.gesture.imageWrap = i.gesture.image.parent("." + T.params.zoomContainerClass), i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || T.params.zoomMax, 0 !== i.gesture.imageWrap.length))) return void (i.gesture.image = void 0);i.gesture.image.transition(0), i.isScaling = !0;
          }, onGestureChange: function onGestureChange(t) {
            var e = T.zoom;if (!T.support.gestures) {
              if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;e.gesture.scaleMove = e.getDistanceBetweenTouches(t);
            }e.gesture.image && 0 !== e.gesture.image.length && (T.support.gestures ? e.scale = t.scale * e.currentScale : e.scale = e.gesture.scaleMove / e.gesture.scaleStart * e.currentScale, e.scale > e.gesture.zoomMax && (e.scale = e.gesture.zoomMax - 1 + Math.pow(e.scale - e.gesture.zoomMax + 1, .5)), e.scale < T.params.zoomMin && (e.scale = T.params.zoomMin + 1 - Math.pow(T.params.zoomMin - e.scale + 1, .5)), e.gesture.image.transform("translate3d(0,0,0) scale(" + e.scale + ")"));
          }, onGestureEnd: function onGestureEnd(t) {
            var e = T.zoom;!T.support.gestures && ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2) || e.gesture.image && 0 !== e.gesture.image.length && (e.scale = Math.max(Math.min(e.scale, e.gesture.zoomMax), T.params.zoomMin), e.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale(" + e.scale + ")"), e.currentScale = e.scale, e.isScaling = !1, 1 === e.scale && (e.gesture.slide = void 0));
          }, onTouchStart: function onTouchStart(t, e) {
            var i = t.zoom;i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === t.device.os && e.preventDefault(), i.image.isTouched = !0, i.image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
          }, onTouchMove: function onTouchMove(t) {
            var e = T.zoom;if (e.gesture.image && 0 !== e.gesture.image.length && (T.allowClick = !1, e.image.isTouched && e.gesture.slide)) {
              e.image.isMoved || (e.image.width = e.gesture.image[0].offsetWidth, e.image.height = e.gesture.image[0].offsetHeight, e.image.startX = T.getTranslate(e.gesture.imageWrap[0], "x") || 0, e.image.startY = T.getTranslate(e.gesture.imageWrap[0], "y") || 0, e.gesture.slideWidth = e.gesture.slide[0].offsetWidth, e.gesture.slideHeight = e.gesture.slide[0].offsetHeight, e.gesture.imageWrap.transition(0), T.rtl && (e.image.startX = -e.image.startX), T.rtl && (e.image.startY = -e.image.startY));var i = e.image.width * e.scale,
                  r = e.image.height * e.scale;if (!(i < e.gesture.slideWidth && r < e.gesture.slideHeight)) {
                if (e.image.minX = Math.min(e.gesture.slideWidth / 2 - i / 2, 0), e.image.maxX = -e.image.minX, e.image.minY = Math.min(e.gesture.slideHeight / 2 - r / 2, 0), e.image.maxY = -e.image.minY, e.image.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, e.image.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !e.image.isMoved && !e.isScaling) {
                  if (T.isHorizontal() && Math.floor(e.image.minX) === Math.floor(e.image.startX) && e.image.touchesCurrent.x < e.image.touchesStart.x || Math.floor(e.image.maxX) === Math.floor(e.image.startX) && e.image.touchesCurrent.x > e.image.touchesStart.x) return void (e.image.isTouched = !1);if (!T.isHorizontal() && Math.floor(e.image.minY) === Math.floor(e.image.startY) && e.image.touchesCurrent.y < e.image.touchesStart.y || Math.floor(e.image.maxY) === Math.floor(e.image.startY) && e.image.touchesCurrent.y > e.image.touchesStart.y) return void (e.image.isTouched = !1);
                }t.preventDefault(), t.stopPropagation(), e.image.isMoved = !0, e.image.currentX = e.image.touchesCurrent.x - e.image.touchesStart.x + e.image.startX, e.image.currentY = e.image.touchesCurrent.y - e.image.touchesStart.y + e.image.startY, e.image.currentX < e.image.minX && (e.image.currentX = e.image.minX + 1 - Math.pow(e.image.minX - e.image.currentX + 1, .8)), e.image.currentX > e.image.maxX && (e.image.currentX = e.image.maxX - 1 + Math.pow(e.image.currentX - e.image.maxX + 1, .8)), e.image.currentY < e.image.minY && (e.image.currentY = e.image.minY + 1 - Math.pow(e.image.minY - e.image.currentY + 1, .8)), e.image.currentY > e.image.maxY && (e.image.currentY = e.image.maxY - 1 + Math.pow(e.image.currentY - e.image.maxY + 1, .8)), e.velocity.prevPositionX || (e.velocity.prevPositionX = e.image.touchesCurrent.x), e.velocity.prevPositionY || (e.velocity.prevPositionY = e.image.touchesCurrent.y), e.velocity.prevTime || (e.velocity.prevTime = Date.now()), e.velocity.x = (e.image.touchesCurrent.x - e.velocity.prevPositionX) / (Date.now() - e.velocity.prevTime) / 2, e.velocity.y = (e.image.touchesCurrent.y - e.velocity.prevPositionY) / (Date.now() - e.velocity.prevTime) / 2, Math.abs(e.image.touchesCurrent.x - e.velocity.prevPositionX) < 2 && (e.velocity.x = 0), Math.abs(e.image.touchesCurrent.y - e.velocity.prevPositionY) < 2 && (e.velocity.y = 0), e.velocity.prevPositionX = e.image.touchesCurrent.x, e.velocity.prevPositionY = e.image.touchesCurrent.y, e.velocity.prevTime = Date.now(), e.gesture.imageWrap.transform("translate3d(" + e.image.currentX + "px, " + e.image.currentY + "px,0)");
              }
            }
          }, onTouchEnd: function onTouchEnd(t, e) {
            var i = t.zoom;if (i.gesture.image && 0 !== i.gesture.image.length) {
              if (!i.image.isTouched || !i.image.isMoved) return i.image.isTouched = !1, void (i.image.isMoved = !1);i.image.isTouched = !1, i.image.isMoved = !1;var r = 300,
                  n = 300,
                  s = i.velocity.x * r,
                  a = i.image.currentX + s,
                  o = i.velocity.y * n,
                  l = i.image.currentY + o;0 !== i.velocity.x && (r = Math.abs((a - i.image.currentX) / i.velocity.x)), 0 !== i.velocity.y && (n = Math.abs((l - i.image.currentY) / i.velocity.y));var u = Math.max(r, n);i.image.currentX = a, i.image.currentY = l;var p = i.image.width * i.scale,
                  c = i.image.height * i.scale;i.image.minX = Math.min(i.gesture.slideWidth / 2 - p / 2, 0), i.image.maxX = -i.image.minX, i.image.minY = Math.min(i.gesture.slideHeight / 2 - c / 2, 0), i.image.maxY = -i.image.minY, i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX), i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY), i.gesture.imageWrap.transition(u).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)");
            }
          }, onTransitionEnd: function onTransitionEnd(t) {
            var e = t.zoom;e.gesture.slide && t.previousIndex !== t.activeIndex && (e.gesture.image.transform("translate3d(0,0,0) scale(1)"), e.gesture.imageWrap.transform("translate3d(0,0,0)"), e.gesture.slide = e.gesture.image = e.gesture.imageWrap = void 0, e.scale = e.currentScale = 1);
          }, toggleZoom: function toggleZoom(t, i) {
            var r = t.zoom;if (r.gesture.slide || (r.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), r.gesture.image = r.gesture.slide.find("img, svg, canvas"), r.gesture.imageWrap = r.gesture.image.parent("." + t.params.zoomContainerClass)), r.gesture.image && 0 !== r.gesture.image.length) {
              var n, s, a, o, l, u, p, c, h, d, f, m, g, v, w, y, x, b;void 0 === r.image.touchesStart.x && i ? (n = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX, s = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (n = r.image.touchesStart.x, s = r.image.touchesStart.y), r.scale && 1 !== r.scale ? (r.scale = r.currentScale = 1, r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), r.gesture.slide = void 0) : (r.scale = r.currentScale = r.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, i ? (x = r.gesture.slide[0].offsetWidth, b = r.gesture.slide[0].offsetHeight, a = r.gesture.slide.offset().left, o = r.gesture.slide.offset().top, l = a + x / 2 - n, u = o + b / 2 - s, h = r.gesture.image[0].offsetWidth, d = r.gesture.image[0].offsetHeight, f = h * r.scale, m = d * r.scale, g = Math.min(x / 2 - f / 2, 0), v = Math.min(b / 2 - m / 2, 0), w = -g, y = -v, p = l * r.scale, c = u * r.scale, p < g && (p = g), p > w && (p = w), c < v && (c = v), c > y && (c = y)) : (p = 0, c = 0), r.gesture.imageWrap.transition(300).transform("translate3d(" + p + "px, " + c + "px,0)"), r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")"));
            }
          }, attachEvents: function attachEvents(t) {
            var i = t ? "off" : "on";if (T.params.zoom) {
              var r = (T.slides, !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && { passive: !0, capture: !1 });T.support.gestures ? (T.slides[i]("gesturestart", T.zoom.onGestureStart, r), T.slides[i]("gesturechange", T.zoom.onGestureChange, r), T.slides[i]("gestureend", T.zoom.onGestureEnd, r)) : "touchstart" === T.touchEvents.start && (T.slides[i](T.touchEvents.start, T.zoom.onGestureStart, r), T.slides[i](T.touchEvents.move, T.zoom.onGestureChange, r), T.slides[i](T.touchEvents.end, T.zoom.onGestureEnd, r)), T[i]("touchStart", T.zoom.onTouchStart), T.slides.each(function (t, r) {
                e(r).find("." + T.params.zoomContainerClass).length > 0 && e(r)[i](T.touchEvents.move, T.zoom.onTouchMove);
              }), T[i]("touchEnd", T.zoom.onTouchEnd), T[i]("transitionEnd", T.zoom.onTransitionEnd), T.params.zoomToggle && T.on("doubleTap", T.zoom.toggleZoom);
            }
          }, init: function init() {
            T.zoom.attachEvents();
          }, destroy: function destroy() {
            T.zoom.attachEvents(!0);
          } }, T._plugins = [];for (var O in T.plugins) {
          var H = T.plugins[O](T, T.params[O]);H && T._plugins.push(H);
        }return T.callPlugins = function (t) {
          for (var e = 0; e < T._plugins.length; e++) {
            t in T._plugins[e] && T._plugins[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
          }
        }, T.emitterEventListeners = {}, T.emit = function (t) {
          T.params[t] && T.params[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);var e;if (T.emitterEventListeners[t]) for (e = 0; e < T.emitterEventListeners[t].length; e++) {
            T.emitterEventListeners[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
          }T.callPlugins && T.callPlugins(t, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }, T.on = function (t, e) {
          return t = f(t), T.emitterEventListeners[t] || (T.emitterEventListeners[t] = []), T.emitterEventListeners[t].push(e), T;
        }, T.off = function (t, e) {
          var i;if (t = f(t), void 0 === e) return T.emitterEventListeners[t] = [], T;if (T.emitterEventListeners[t] && 0 !== T.emitterEventListeners[t].length) {
            for (i = 0; i < T.emitterEventListeners[t].length; i++) {
              T.emitterEventListeners[t][i] === e && T.emitterEventListeners[t].splice(i, 1);
            }return T;
          }
        }, T.once = function (t, e) {
          t = f(t);var i = function i() {
            e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), T.off(t, i);
          };return T.on(t, i), T;
        }, T.a11y = { makeFocusable: function makeFocusable(t) {
            return t.attr("tabIndex", "0"), t;
          }, addRole: function addRole(t, e) {
            return t.attr("role", e), t;
          }, addLabel: function addLabel(t, e) {
            return t.attr("aria-label", e), t;
          }, disable: function disable(t) {
            return t.attr("aria-disabled", !0), t;
          }, enable: function enable(t) {
            return t.attr("aria-disabled", !1), t;
          }, onEnterKey: function onEnterKey(t) {
            13 === t.keyCode && (e(t.target).is(T.params.nextButton) ? (T.onClickNext(t), T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : e(t.target).is(T.params.prevButton) && (T.onClickPrev(t), T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)), e(t.target).is("." + T.params.bulletClass) && e(t.target)[0].click());
          }, liveRegion: e('<span class="' + T.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'), notify: function notify(t) {
            var e = T.a11y.liveRegion;0 !== e.length && (e.html(""), e.html(t));
          }, init: function init() {
            T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton), T.a11y.addRole(T.nextButton, "button"), T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)), T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton), T.a11y.addRole(T.prevButton, "button"), T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)), e(T.container).append(T.a11y.liveRegion);
          }, initPagination: function initPagination() {
            T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function () {
              var t = e(this);T.a11y.makeFocusable(t), T.a11y.addRole(t, "button"), T.a11y.addLabel(t, T.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1));
            });
          }, destroy: function destroy() {
            T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove();
          } }, T.init = function () {
          T.params.loop && T.createLoop(), T.updateContainerSize(), T.updateSlidesSize(), T.updatePagination(), T.params.scrollbar && T.scrollbar && (T.scrollbar.set(), T.params.scrollbarDraggable && T.scrollbar.enableDraggable()), "slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(), T.effects[T.params.effect].setTranslate()), T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit), 0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(), T.lazy && T.params.lazyLoading && (T.lazy.load(), T.lazy.initialImageLoaded = !0))), T.attachEvents(), T.params.observer && T.support.observer && T.initObservers(), T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(), T.params.zoom && T.zoom && T.zoom.init(), T.params.autoplay && T.startAutoplay(), T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(), T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(), T.params.hashnavReplaceState && (T.params.replaceState = T.params.hashnavReplaceState), T.params.history && T.history && T.history.init(), T.params.hashnav && T.hashnav && T.hashnav.init(), T.params.a11y && T.a11y && T.a11y.init(), T.emit("onInit", T);
        }, T.cleanupStyles = function () {
          T.container.removeClass(T.classNames.join(" ")).removeAttr("style"), T.wrapper.removeAttr("style"), T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass), T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass), T.params.prevButton && e(T.params.prevButton).removeClass(T.params.buttonDisabledClass), T.params.nextButton && e(T.params.nextButton).removeClass(T.params.buttonDisabledClass), T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"), T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"));
        }, T.destroy = function (t, e) {
          T.detachEvents(), T.stopAutoplay(), T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(), T.params.loop && T.destroyLoop(), e && T.cleanupStyles(), T.disconnectObservers(), T.params.zoom && T.zoom && T.zoom.destroy(), T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(), T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(), T.params.a11y && T.a11y && T.a11y.destroy(), T.params.history && !T.params.replaceState && window.removeEventListener("popstate", T.history.setHistoryPopState), T.params.hashnav && T.hashnav && T.hashnav.destroy(), T.emit("onDestroy"), t !== !1 && (T = null);
        }, T.init(), T;
      }
    };i.prototype = { isSafari: function () {
        var t = window.navigator.userAgent.toLowerCase();return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
      }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent), isArray: function isArray(t) {
        return "[object Array]" === Object.prototype.toString.apply(t);
      }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1, lteIE9: function () {
          var t = document.createElement("div");return t.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === t.getElementsByTagName("i").length;
        }() }, device: function () {
        var t = window.navigator.userAgent,
            e = t.match(/(Android);?[\s\/]+([\d.]+)?/),
            i = t.match(/(iPad).*OS\s([\d_]+)/),
            r = t.match(/(iPod)(.*OS\s([\d_]+))?/),
            n = !i && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return { ios: i || n || r, android: e };
      }(), support: { touch: window.Modernizr && Modernizr.touch === !0 || function () {
          return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
        }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
          var t = document.createElement("div").style;return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t;
        }(), flexbox: function () {
          for (var t = document.createElement("div").style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < e.length; i++) {
            if (e[i] in t) return !0;
          }
        }(), observer: function () {
          return "MutationObserver" in window || "WebkitMutationObserver" in window;
        }(), passiveListener: function () {
          var t = !1;try {
            var e = Object.defineProperty({}, "passive", { get: function get() {
                t = !0;
              } });window.addEventListener("testPassiveListener", null, e);
          } catch (t) {}return t;
        }(), gestures: function () {
          return "ongesturestart" in window;
        }() }, plugins: {} };for (var r = function () {
      var t = function t(_t2) {
        var e = this,
            i = 0;for (i = 0; i < _t2.length; i++) {
          e[i] = _t2[i];
        }return e.length = _t2.length, this;
      },
          e = function e(_e2, i) {
        var r = [],
            n = 0;if (_e2 && !i && _e2 instanceof t) return _e2;if (_e2) if ("string" == typeof _e2) {
          var s,
              a,
              o = _e2.trim();if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
            var l = "div";for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), a = document.createElement(l), a.innerHTML = _e2, n = 0; n < a.childNodes.length; n++) {
              r.push(a.childNodes[n]);
            }
          } else for (s = i || "#" !== _e2[0] || _e2.match(/[ .<>:~]/) ? (i || document).querySelectorAll(_e2) : [document.getElementById(_e2.split("#")[1])], n = 0; n < s.length; n++) {
            s[n] && r.push(s[n]);
          }
        } else if (_e2.nodeType || _e2 === window || _e2 === document) r.push(_e2);else if (_e2.length > 0 && _e2[0].nodeType) for (n = 0; n < _e2.length; n++) {
          r.push(_e2[n]);
        }return new t(r);
      };return t.prototype = { addClass: function addClass(t) {
          if (void 0 === t) return this;for (var e = t.split(" "), i = 0; i < e.length; i++) {
            for (var r = 0; r < this.length; r++) {
              this[r].classList.add(e[i]);
            }
          }return this;
        }, removeClass: function removeClass(t) {
          for (var e = t.split(" "), i = 0; i < e.length; i++) {
            for (var r = 0; r < this.length; r++) {
              this[r].classList.remove(e[i]);
            }
          }return this;
        }, hasClass: function hasClass(t) {
          return !!this[0] && this[0].classList.contains(t);
        }, toggleClass: function toggleClass(t) {
          for (var e = t.split(" "), i = 0; i < e.length; i++) {
            for (var r = 0; r < this.length; r++) {
              this[r].classList.toggle(e[i]);
            }
          }return this;
        }, attr: function attr(t, e) {
          if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;for (var i = 0; i < this.length; i++) {
            if (2 === arguments.length) this[i].setAttribute(t, e);else for (var r in t) {
              this[i][r] = t[r], this[i].setAttribute(r, t[r]);
            }
          }return this;
        }, removeAttr: function removeAttr(t) {
          for (var e = 0; e < this.length; e++) {
            this[e].removeAttribute(t);
          }return this;
        }, data: function data(t, e) {
          if (void 0 !== e) {
            for (var i = 0; i < this.length; i++) {
              var r = this[i];r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), r.dom7ElementDataStorage[t] = e;
            }return this;
          }if (this[0]) {
            var n = this[0].getAttribute("data-" + t);return n ? n : this[0].dom7ElementDataStorage && (t in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[t] : void 0;
          }
        }, transform: function transform(t) {
          for (var e = 0; e < this.length; e++) {
            var i = this[e].style;i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t;
          }return this;
        }, transition: function transition(t) {
          "string" != typeof t && (t += "ms");for (var e = 0; e < this.length; e++) {
            var i = this[e].style;i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t;
          }return this;
        }, on: function on(t, i, r, n) {
          function s(t) {
            var n = t.target;if (e(n).is(i)) r.call(n, t);else for (var s = e(n).parents(), a = 0; a < s.length; a++) {
              e(s[a]).is(i) && r.call(s[a], t);
            }
          }var a,
              o,
              l = t.split(" ");for (a = 0; a < this.length; a++) {
            if ("function" == typeof i || i === !1) for ("function" == typeof i && (r = arguments[1], n = arguments[2] || !1), o = 0; o < l.length; o++) {
              this[a].addEventListener(l[o], r, n);
            } else for (o = 0; o < l.length; o++) {
              this[a].dom7LiveListeners || (this[a].dom7LiveListeners = []), this[a].dom7LiveListeners.push({ listener: r, liveListener: s }), this[a].addEventListener(l[o], s, n);
            }
          }return this;
        }, off: function off(t, e, i, r) {
          for (var n = t.split(" "), s = 0; s < n.length; s++) {
            for (var a = 0; a < this.length; a++) {
              if ("function" == typeof e || e === !1) "function" == typeof e && (i = arguments[1], r = arguments[2] || !1), this[a].removeEventListener(n[s], i, r);else if (this[a].dom7LiveListeners) for (var o = 0; o < this[a].dom7LiveListeners.length; o++) {
                this[a].dom7LiveListeners[o].listener === i && this[a].removeEventListener(n[s], this[a].dom7LiveListeners[o].liveListener, r);
              }
            }
          }return this;
        }, once: function once(t, e, i, r) {
          function n(a) {
            i(a), s.off(t, e, n, r);
          }var s = this;"function" == typeof e && (e = !1, i = arguments[1], r = arguments[2]), s.on(t, e, n, r);
        }, trigger: function trigger(t, e) {
          for (var i = 0; i < this.length; i++) {
            var r;try {
              r = new window.CustomEvent(t, { detail: e, bubbles: !0, cancelable: !0 });
            } catch (i) {
              r = document.createEvent("Event"), r.initEvent(t, !0, !0), r.detail = e;
            }this[i].dispatchEvent(r);
          }return this;
        }, transitionEnd: function transitionEnd(t) {
          function e(s) {
            if (s.target === this) for (t.call(this, s), i = 0; i < r.length; i++) {
              n.off(r[i], e);
            }
          }var i,
              r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
              n = this;if (t) for (i = 0; i < r.length; i++) {
            n.on(r[i], e);
          }return this;
        }, width: function width() {
          return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
        }, outerWidth: function outerWidth(t) {
          return this.length > 0 ? t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
        }, height: function height() {
          return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
        }, outerHeight: function outerHeight(t) {
          return this.length > 0 ? t ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
        }, offset: function offset() {
          if (this.length > 0) {
            var t = this[0],
                e = t.getBoundingClientRect(),
                i = document.body,
                r = t.clientTop || i.clientTop || 0,
                n = t.clientLeft || i.clientLeft || 0,
                s = window.pageYOffset || t.scrollTop,
                a = window.pageXOffset || t.scrollLeft;return { top: e.top + s - r, left: e.left + a - n };
          }return null;
        }, css: function css(t, e) {
          var i;if (1 === arguments.length) {
            if ("string" != typeof t) {
              for (i = 0; i < this.length; i++) {
                for (var r in t) {
                  this[i].style[r] = t[r];
                }
              }return this;
            }if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(t);
          }if (2 === arguments.length && "string" == typeof t) {
            for (i = 0; i < this.length; i++) {
              this[i].style[t] = e;
            }return this;
          }return this;
        }, each: function each(t) {
          for (var e = 0; e < this.length; e++) {
            t.call(this[e], e, this[e]);
          }return this;
        }, html: function html(t) {
          if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;for (var e = 0; e < this.length; e++) {
            this[e].innerHTML = t;
          }return this;
        }, text: function text(t) {
          if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;for (var e = 0; e < this.length; e++) {
            this[e].textContent = t;
          }return this;
        }, is: function is(i) {
          if (!this[0]) return !1;var r, n;if ("string" == typeof i) {
            var s = this[0];if (s === document) return i === document;if (s === window) return i === window;if (s.matches) return s.matches(i);if (s.webkitMatchesSelector) return s.webkitMatchesSelector(i);if (s.mozMatchesSelector) return s.mozMatchesSelector(i);if (s.msMatchesSelector) return s.msMatchesSelector(i);for (r = e(i), n = 0; n < r.length; n++) {
              if (r[n] === this[0]) return !0;
            }return !1;
          }if (i === document) return this[0] === document;if (i === window) return this[0] === window;if (i.nodeType || i instanceof t) {
            for (r = i.nodeType ? [i] : i, n = 0; n < r.length; n++) {
              if (r[n] === this[0]) return !0;
            }return !1;
          }return !1;
        }, index: function index() {
          if (this[0]) {
            for (var t = this[0], e = 0; null !== (t = t.previousSibling);) {
              1 === t.nodeType && e++;
            }return e;
          }
        }, eq: function eq(e) {
          if (void 0 === e) return this;var i,
              r = this.length;return e > r - 1 ? new t([]) : e < 0 ? (i = r + e, new t(i < 0 ? [] : [this[i]])) : new t([this[e]]);
        }, append: function append(e) {
          var i, r;for (i = 0; i < this.length; i++) {
            if ("string" == typeof e) {
              var n = document.createElement("div");for (n.innerHTML = e; n.firstChild;) {
                this[i].appendChild(n.firstChild);
              }
            } else if (e instanceof t) for (r = 0; r < e.length; r++) {
              this[i].appendChild(e[r]);
            } else this[i].appendChild(e);
          }return this;
        }, prepend: function prepend(e) {
          var i, r;for (i = 0; i < this.length; i++) {
            if ("string" == typeof e) {
              var n = document.createElement("div");for (n.innerHTML = e, r = n.childNodes.length - 1; r >= 0; r--) {
                this[i].insertBefore(n.childNodes[r], this[i].childNodes[0]);
              }
            } else if (e instanceof t) for (r = 0; r < e.length; r++) {
              this[i].insertBefore(e[r], this[i].childNodes[0]);
            } else this[i].insertBefore(e, this[i].childNodes[0]);
          }return this;
        }, insertBefore: function insertBefore(t) {
          for (var i = e(t), r = 0; r < this.length; r++) {
            if (1 === i.length) i[0].parentNode.insertBefore(this[r], i[0]);else if (i.length > 1) for (var n = 0; n < i.length; n++) {
              i[n].parentNode.insertBefore(this[r].cloneNode(!0), i[n]);
            }
          }
        }, insertAfter: function insertAfter(t) {
          for (var i = e(t), r = 0; r < this.length; r++) {
            if (1 === i.length) i[0].parentNode.insertBefore(this[r], i[0].nextSibling);else if (i.length > 1) for (var n = 0; n < i.length; n++) {
              i[n].parentNode.insertBefore(this[r].cloneNode(!0), i[n].nextSibling);
            }
          }
        }, next: function next(i) {
          return new t(this.length > 0 ? i ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(i) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
        }, nextAll: function nextAll(i) {
          var r = [],
              n = this[0];if (!n) return new t([]);for (; n.nextElementSibling;) {
            var s = n.nextElementSibling;i ? e(s).is(i) && r.push(s) : r.push(s), n = s;
          }return new t(r);
        }, prev: function prev(i) {
          return new t(this.length > 0 ? i ? this[0].previousElementSibling && e(this[0].previousElementSibling).is(i) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
        }, prevAll: function prevAll(i) {
          var r = [],
              n = this[0];if (!n) return new t([]);for (; n.previousElementSibling;) {
            var s = n.previousElementSibling;i ? e(s).is(i) && r.push(s) : r.push(s), n = s;
          }return new t(r);
        }, parent: function parent(t) {
          for (var i = [], r = 0; r < this.length; r++) {
            t ? e(this[r].parentNode).is(t) && i.push(this[r].parentNode) : i.push(this[r].parentNode);
          }return e(e.unique(i));
        }, parents: function parents(t) {
          for (var i = [], r = 0; r < this.length; r++) {
            for (var n = this[r].parentNode; n;) {
              t ? e(n).is(t) && i.push(n) : i.push(n), n = n.parentNode;
            }
          }return e(e.unique(i));
        }, find: function find(e) {
          for (var i = [], r = 0; r < this.length; r++) {
            for (var n = this[r].querySelectorAll(e), s = 0; s < n.length; s++) {
              i.push(n[s]);
            }
          }return new t(i);
        }, children: function children(i) {
          for (var r = [], n = 0; n < this.length; n++) {
            for (var s = this[n].childNodes, a = 0; a < s.length; a++) {
              i ? 1 === s[a].nodeType && e(s[a]).is(i) && r.push(s[a]) : 1 === s[a].nodeType && r.push(s[a]);
            }
          }return new t(e.unique(r));
        }, remove: function remove() {
          for (var t = 0; t < this.length; t++) {
            this[t].parentNode && this[t].parentNode.removeChild(this[t]);
          }return this;
        }, add: function add() {
          var t,
              i,
              r = this;for (t = 0; t < arguments.length; t++) {
            var n = e(arguments[t]);for (i = 0; i < n.length; i++) {
              r[r.length] = n[i], r.length++;
            }
          }return r;
        } }, e.fn = t.prototype, e.unique = function (t) {
        for (var e = [], i = 0; i < t.length; i++) {
          e.indexOf(t[i]) === -1 && e.push(t[i]);
        }return e;
      }, e;
    }(), n = ["jQuery", "Zepto", "Dom7"], s = 0; s < n.length; s++) {
      window[n[s]] && t(window[n[s]]);
    }var a;a = void 0 === r ? window.Dom7 || window.Zepto || window.jQuery : r, a && ("transitionEnd" in a.fn || (a.fn.transitionEnd = function (t) {
      function e(s) {
        if (s.target === this) for (t.call(this, s), i = 0; i < r.length; i++) {
          n.off(r[i], e);
        }
      }var i,
          r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
          n = this;if (t) for (i = 0; i < r.length; i++) {
        n.on(r[i], e);
      }return this;
    }), "transform" in a.fn || (a.fn.transform = function (t) {
      for (var e = 0; e < this.length; e++) {
        var i = this[e].style;i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t;
      }return this;
    }), "transition" in a.fn || (a.fn.transition = function (t) {
      "string" != typeof t && (t += "ms");for (var e = 0; e < this.length; e++) {
        var i = this[e].style;i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t;
      }return this;
    }), "outerWidth" in a.fn || (a.fn.outerWidth = function (t) {
      return this.length > 0 ? t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
    })), window.Swiper = i;
  }(), t.exports = window.Swiper;
}, function (t, e) {
  t.exports = '<div class=scrollView v-bind:class="{ scrollbottom: lowerY<0 }"> <div v-bind:class="{ scroller_h: scrollX }"> <slot></slot> </div> </div>';
}, function (t, e) {
  t.exports = "<div class=swiper> <div class=swiper-wrapper> <slot></slot> </div> <div class=swiper-pagination></div> </div>";
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function get() {
        return t.l;
      } }), Object.defineProperty(t, "id", { enumerable: !0, get: function get() {
        return t.i;
      } }), t.webpackPolyfill = 1), t;
  };
}, function (t, e, i) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }var n = i(3),
      s = r(n),
      a = i(15),
      o = r(a),
      l = i(13),
      u = r(l),
      p = i(12),
      c = r(p),
      h = i(14),
      d = r(h),
      f = i(11),
      m = i(1),
      g = r(m),
      v = [u.default, c.default],
      w = function w(t, e) {
    t.use(e), v.map(function (e) {
      t.component(e.name, e);
    }), window.wx = d.default;
  },
      y = function y(t) {
    var e = [];w(s.default, o.default), g.default.extend(e, t.pages);var i = new o.default({ routes: e });(0, f.App)(s.default, i);
  };"undefined" != typeof window && window.Vue && w(window.Vue, o.default), t.exports = { v: "0.1", App: y, Page: f.Page, wx: d.default, Swiper: u.default, ScrollView: c.default };
}]);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v2.5.2
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      if (matched.instances[name] !== vm) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this.$root._route }
  });

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var isarray = index$1;

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path) {
  var regex = index(path);
  if (process.env.NODE_ENV !== 'production') {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    if (called) { return }
    called = true;
    return fn.apply(this, arguments)
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.5.2';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = VueRouter;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * Vue.js v2.2.6
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
      // possible circular reference
      return a === b
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn();
    }
  }
}

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: [
    'component',
    'directive',
    'filter'
  ],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100
};

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) { cb.call(ctx); }
      if (_resolve) { _resolve(ctx); }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

var warn = noop;
var tip = noop;
var formatComponentName;

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var formatLocation = function (str) {
    if (str === "<Anonymous>") {
      str += " - use the \"name\" option for better debugging messages.";
    }
    return ("\n(found in " + str + ")")
  };
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.splice(key, 1);
    return
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function'
      ? mergeOptions(parent, extendsFrom.options, vm)
      : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue$3) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = typeof value === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = typeof value === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = typeof value === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = typeof value === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1]
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Error in " + info + ":"), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (!cur) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (!old) {
      if (!cur.fns) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (!oldHook) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (oldHook.fns && oldHook.merged) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (c == null || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (last && last.text) {
        last.text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (c.text && last && last.text) {
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (c.tag && c.key == null && nestedIndex != null) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function getFirstComponentChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  var name, child;
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
        child.data && (name = child.data.slot)) {
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns
) {
  var res = {};
  for (var i = 0; i < fns.length; i++) {
    res[fns[i][0]] = fns[i][1];
  }
  return res
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // remove reference to DOM nodes (prevents leak)
    vm.$options._parentElm = vm.$options._refElm = null;
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = false;
    }
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive == null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var queue = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  queue.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id, vm;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // reset scheduler before updated hook called
  var oldQueue = queue.slice();
  resetSchedulerState();

  // call updated hooks
  index = oldQueue.length;
  while (index--) {
    watcher = oldQueue[index];
    vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    }
  } else {
    value = this.getter.call(vm, vm);
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch) { initWatch(vm, opts.watch); }
}

var isReservedProp = { key: 1, ref: 1, slot: 1 };

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      if (isReservedProp[key]) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production') {
      if (getter === undefined) {
        warn(
          ("No getter function has been defined for computed property \"" + key + "\"."),
          vm
        );
        getter = noop;
      }
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    if (!vnode.componentInstance._isMounted) {
      vnode.componentInstance._isMounted = true;
      callHook(vnode.componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      activateChildComponent(vnode.componentInstance, true /* direct */);
    }
  },

  destroy: function destroy (vnode) {
    if (!vnode.componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        vnode.componentInstance.$destroy();
      } else {
        deactivateChildComponent(vnode.componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (!Ctor) {
    return
  }

  var baseCtor = context.$options._base;
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered by the scheduler.
        context.$forceUpdate();
      });
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return
      }
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // transform component v-model data into props & events
  if (data.model) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractProps(data, Ctor, tag);

  // functional component
  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (Ctor.options.abstract) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    props: props,
    data: data,
    parent: context,
    children: children,
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  cb
) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb);
  } else {
    factory.requested = true;
    var cbs = factory.pendingCallbacks = [cb];
    var sync = true;

    var resolve = function (res) {
      if (isObject(res)) {
        res = baseCtor.extend(res);
      }
      // cache resolved
      factory.resolved = res;
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res);
        }
      }
    };

    var reject = function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
    };

    var res = factory(resolve, reject);

    // handle promise
    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject);
    }

    sync = false;
    // return in case resolved synchronously
    return factory.resolved
  }
}

function extractProps (data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && attrs.hasOwnProperty(keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey) ||
      checkProp(res, domProps, key, altKey);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (on[event]) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (alwaysNormalize) { normalizationType = ALWAYS_NORMALIZE; }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (data && data.__ob__) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
      typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (vnode) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (vnode.children) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (child.tag && !child.ns) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && process.env.NODE_ENV !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];
        }
      }
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function initRender (vm) {
  vm.$vnode = null; // the placeholder node in parent tree
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$options._parentVnode;
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = _toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var inject = vm.$options.inject;
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    var isArray = Array.isArray(inject);
    var keys = isArray
      ? inject
      : hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    var loop = function ( i ) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          /* istanbul ignore else */
          if (process.env.NODE_ENV !== 'production') {
            defineReactive$$1(vm, key, source._provided[provideKey], function () {
              warn(
                "Avoid mutating an injected value directly since the changes will be " +
                "overwritten whenever the provided component re-renders. " +
                "injection being mutated: \"" + key + "\"",
                vm
              );
            });
          } else {
            defineReactive$$1(vm, key, source._provided[provideKey]);
          }
          break
        }
        source = source.$parent;
      }
    };

    for (var i = 0; i < keys.length; i++) loop( i );
  }
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    for (var i = 0; i < latest.length; i++) {
      if (sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$3)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (pattern instanceof RegExp) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cachedNode);
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    if (!vnode.componentInstance._inactive) {
      callHook(vnode.componentInstance, 'deactivated');
    }
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Vue$3.version = '2.2.6';

/*  */

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (childNode.componentInstance) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: child.class
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (staticClass || dynamicClass) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  var res = '';
  if (!value) {
    return res
  }
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if ((stringified = stringifyClass(value[i]))) {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.tag === b.tag &&
    a.isComment === b.isComment &&
    isDef(a.data) === isDef(b.data) &&
    sameInputType(a, b)
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (isDef(parent)) {
      if (isDef(ref)) {
        nodeOps.insertBefore(parent, elm, ref);
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }
    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important
) {
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
      "if (!Array.isArray($$exp)){" +
        value + "=" + assignment + "}" +
      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== 'production') {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + value + "=$$c}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number || type === 'number') {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (on[RANGE_TOKEN]) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (on[CHECKBOX_RADIO_TOKEN]) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once,
  capture
) {
  if (once) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(event, handler, capture);
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (!oldVnode.data.domProps && !vnode.data.domProps) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (props.__ob__) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = cur == null ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if ((modifiers && modifiers.number) || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal)
  }
  if (modifiers && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    el.style[normalize(name)] = val;
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (!data.staticStyle && !data.style &&
      !oldData.staticStyle && !oldData.style) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldVnode.data.staticStyle;
  var oldStyleBinding = oldVnode.data.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  vnode.data.style = style.__ob__ ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (newStyle[name] == null) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (el._leaveCb) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return
  }

  /* istanbul ignore if */
  if (el._enterCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (el._enterCb) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return rm()
  }

  /* istanbul ignore if */
  if (el._leaveCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitLeaveDuration != null) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (!fn) { return false }
  var invokerFns = fn.fns;
  if (invokerFns) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (!vnode.data.show) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (!vnode.data.show) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  return /\d-keep-alive$/.test(rawChild.tag)
    ? h('keep-alive')
    : null
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
        mode && mode !== 'in-out' && mode !== 'out-in') {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (process.env.NODE_ENV !== 'production' &&
      config.productionTip !== false &&
      inBrowser && typeof console !== 'undefined') {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\">";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var decoder;

function decode (html) {
  decoder = decoder || document.createElement('div');
  decoder.innerHTML = html;
  return decoder.textContent
}

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          continue
        }
      }

      var text = (void 0), rest$1 = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest$1 = html.slice(textEnd);
        while (
          !endTag.test(rest$1) &&
          !startTagOpen.test(rest$1) &&
          !comment.test(rest$1) &&
          !conditionalComment.test(rest$1)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest$1.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest$1 = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var endTagLength = 0;
      var rest = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest.length;
      html = rest;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' &&
            (i > pos || !tagName) &&
            options.warn) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;
  platformGetTagNamespace = options.getTagNamespace || no;
  platformMustUseProp = options.mustUseProp || no;
  platformIsPreTag = options.isPreTag || no;
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  transforms = pluckModuleFunction(options.modules, 'transformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (process.env.NODE_ENV !== 'production') {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      process.env.NODE_ENV !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
        }
        if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (process.env.NODE_ENV !== 'production' && map[attrs[i].name] && !isIE) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      walkThroughConditionsBlocks(node.ifConditions, isInFor);
    }
  }
}

function walkThroughConditionsBlocks (conditionBlocks, isInFor) {
  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
    markStaticRoots(conditionBlocks[i].block, isInFor);
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (events, native) {
  var res = native ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  bind: bind$1,
  cloak: noop
};

/*  */

// configurable state
var warn$3;
var transforms$1;
var dataGenFns;
var platformDirectives$1;
var isPlatformReservedTag$1;
var staticRenderFns;
var onceCount;
var currentOptions;

function generate (
  ast,
  options
) {
  // save previous staticRenderFns so generate calls can be nested
  var prevStaticRenderFns = staticRenderFns;
  var currentStaticRenderFns = staticRenderFns = [];
  var prevOnceCount = onceCount;
  onceCount = 0;
  currentOptions = options;
  warn$3 = options.warn || baseWarn;
  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
  dataGenFns = pluckModuleFunction(options.modules, 'genData');
  platformDirectives$1 = options.directives || {};
  isPlatformReservedTag$1 = options.isReservedTag || no;
  var code = ast ? genElement(ast) : '_c("div")';
  staticRenderFns = prevStaticRenderFns;
  onceCount = prevOnceCount;
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: currentStaticRenderFns
  }
}

function genElement (el) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el)
  } else if (el.for && !el.forProcessed) {
    return genFor(el)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el);
    } else {
      var data = el.plain ? undefined : genData(el);

      var children = el.inlineTemplate ? null : genChildren(el, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < transforms$1.length; i++) {
      code = transforms$1[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el) {
  el.staticProcessed = true;
  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && warn$3(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el)
    }
    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el)
  }
}

function genIf (el) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice())
}

function genIfConditions (conditions) {
  if (!conditions.length) {
    return '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return el.once ? genOnce(el) : genElement(el)
  }
}

function genFor (el) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (
    process.env.NODE_ENV !== 'production' &&
    maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key
  ) {
    warn$3(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genElement(el)) +
    '})'
}

function genData (el) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < dataGenFns.length; i++) {
    data += dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  return data
}

function genDirectives (el) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, warn$3);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (
    el.children.length > 1 || ast.type !== 1
  )) {
    warn$3('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, currentOptions);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (slots) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) { return genScopedSlot(key, slots[key]); }).join(',')) + "])")
}

function genScopedSlot (key, el) {
  return "[" + key + ",function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el) || 'void 0'
      : genElement(el)) + "}]"
}

function genChildren (el, checkSkip) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot') {
      return genElement(el$1)
    }
    var normalizationType = checkSkip ? getNormalizationType(children) : 0;
    return ("[" + (children.map(genNode).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (children) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function maybeComponent (el) {
  return !isPlatformReservedTag$1(el.tag)
}

function genNode (node) {
  if (node.type === 1) {
    return genElement(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genSlot (el) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (componentName, el) {
  var children = el.inlineTemplate ? null : genChildren(el, true);
  return ("_c(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var keywordMatch = exp.replace(stripStringRE, '').match(unaryOperatorsRE);
  if (keywordMatch) {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
}

function makeFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompiler (baseOptions) {
  var functionCompileCache = Object.create(null);

  function compile (
    template,
    options
  ) {
    var finalOptions = Object.create(baseOptions);
    var errors = [];
    var tips = [];
    finalOptions.warn = function (msg, tip$$1) {
      (tip$$1 ? tips : errors).push(msg);
    };

    if (options) {
      // merge custom modules
      if (options.modules) {
        finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
      }
      // merge custom directives
      if (options.directives) {
        finalOptions.directives = extend(
          Object.create(baseOptions.directives),
          options.directives
        );
      }
      // copy other options
      for (var key in options) {
        if (key !== 'modules' && key !== 'directives') {
          finalOptions[key] = options[key];
        }
      }
    }

    var compiled = baseCompile(template, finalOptions);
    if (process.env.NODE_ENV !== 'production') {
      errors.push.apply(errors, detectErrors(compiled.ast));
    }
    compiled.errors = errors;
    compiled.tips = tips;
    return compiled
  }

  function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (functionCompileCache[key]) {
      return functionCompileCache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = makeFunction(compiled.render, fnGenErrors);
    var l = compiled.staticRenderFns.length;
    res.staticRenderFns = new Array(l);
    for (var i = 0; i < l; i++) {
      res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i], fnGenErrors);
    }

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (functionCompileCache[key] = res)
  }

  return {
    compile: compile,
    compileToFunctions: compileToFunctions
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData$1
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$2 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$2
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["default"] = Vue$3;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
__webpack_require__(6);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);