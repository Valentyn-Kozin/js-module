// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index26.js":[function(require,module,exports) {
// Lesson 25 Objects
//1. Object, cars & travels
var btn_261 = document.getElementById('task_26.1');
btn_261.addEventListener('click', function () {
  var carManufacturer = prompt("Enter the car manufacturer");
  var carModel = prompt("Enter the car model");
  var carYear = +prompt("Enter the year of the car manufacturing");
  var carSpeed = +prompt("Enter the cruising speed of the car");
  var carDistance = +prompt("Enter the distance you need to drive");

  function Car(manufacturer, model, year, speed) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.speed = speed;

    this.print = function () {
      alert("The car manufacturer is ".concat(this.manufacturer, "\n            The car model is ").concat(this.model, "\n            The year of the car manufacturing is ").concat(this.year, "\n            The cruising speed of the car is ").concat(this.speed));
    };

    this.timeTrip = function (distance) {
      var time = distance / this.speed + Math.trunc(distance / this.speed / 4);
      return time;
    };
  }

  car = new Car(carManufacturer, carModel, carYear, carSpeed);
  car.print();
  alert(car.timeTrip(carDistance));
}); //2. Operations with numerators and denominators

var btn_262 = document.getElementById('task_26.2');
btn_262.addEventListener('click', function () {
  function Fraction(num, denom) {
    this.num = num;
    this.denom = denom;

    this.fractionReduce = function () {
      var n = Math.abs(this.num);
      var d = Math.abs(this.denom);

      for (var i = 2; i <= n && i <= d; i++) {
        if (n % i == 0 && d % i == 0) {
          n /= i;
          d /= i;
          i--;
        }
      }

      alert("".concat(n * Math.sign(this.num), "/").concat(d * Math.sign(this.denom))); // return {
      //     num: n * Math.sign(this.num),
      //     denom: d * Math.sign(this.denom),
      // }
    };
  }

  ;

  function FractionOperations(num1, denom1, num2, denom2) {
    this.fraction1 = new Fraction(num1, denom1);
    this.fraction2 = new Fraction(num2, denom2);
    this.add = new Fraction(num1 * denom2 + num2 * denom1, denom1 * denom2);
    this.subtr = new Fraction(num1 * denom2 - num2 * denom1, denom1 * denom2);
    this.mult = new Fraction(num1 * num2, denom1 * denom2);
    this.div = new Fraction(num1 * denom2, denom1 * num2);
  }

  ;
  var num1 = prompt("Enter numerator of the first fraction");
  var denom1 = prompt("Enter denominator of the first fraction");
  var num2 = prompt("Enter numerator of the second fraction");
  var denom2 = prompt("Enter denominator of the second fraction");
  alert("You entered fractions ".concat(num1, "/").concat(denom1, " and ").concat(num2, "/").concat(denom2));
  alert("The results of arithmetic operations are as follows");
  fractions = new FractionOperations(num1, denom1, num2, denom2);
  fractions.fraction1.fractionReduce();
  fractions.fraction2.fractionReduce();
  fractions.add.fractionReduce();
  fractions.subtr.fractionReduce();
  fractions.mult.fractionReduce();
  fractions.div.fractionReduce();
}); //3. Time object.

var btn_263 = document.getElementById('task_26.3');
btn_263.addEventListener('click', function () {
  function Time(h, m, s) {
    this.h = h;
    this.m = m;
    this.s = s;

    this.showTime = function () {
      var getTime = new Date();
      getTime.setHours(this.h, this.m, this.s);
      alert("It is ".concat(getTime.toTimeString()));
    };

    this.addSeconds = function (as) {
      var newTime = getTime(getSeconds(this.h, this.m, this.s + as));
      return newTime;
    };

    this.addMinutes = function (am) {
      var newTime = getTime(getSeconds(this.h, this.m + am, this.s));
      return newTime;
    };

    this.addHours = function (ah) {
      var newTime = getTime(getSeconds(this.h + ah, this.m, this.s));
      return newTime;
    };
  }

  var getSeconds = function getSeconds(h, m, s) {
    var seconds = h * 3600 + m * 60 + s;
    return seconds;
  };

  var getTime = function getTime(s) {
    var seconds = s % 60;
    var minutes = (s - seconds) / 60 % 3600;
    var hours = (s - minutes * 60 - seconds) / 3600;
    var time = new Date();
    time.setHours(hours, minutes, seconds);
    return time.toTimeString();
  };

  var userHours = +prompt("Enter hours");
  var userMinutes = +prompt("Enter minutes");
  var userSeconds = +prompt("Enter seconds");
  time = new Time(userHours, userMinutes, userSeconds);
  time.showTime();
  var userChangeSeconds = +prompt("Enter the number of seconds for which you want to change the previously entered time.");
  alert("Changed time is ".concat(time.addSeconds(userChangeSeconds)));
  var userChangeMinutes = +prompt("Enter the number of minutes for which you want to change the previously entered time.");
  alert("Changed time is ".concat(time.addMinutes(userChangeMinutes)));
  var userChangeHours = +prompt("Enter the number of hours for which you want to change the previously entered time.");
  alert("Changed time is ".concat(time.addHours(userChangeHours)));
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57779" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index26.js"], null)
//# sourceMappingURL=/index26.c0a8140e.js.map