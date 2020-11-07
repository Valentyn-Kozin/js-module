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
})({"js/index25.js":[function(require,module,exports) {
// Lesson 25 Functions
//1. Which number is bigger?
var btn_251 = document.getElementById('task_25.1');
btn_251.addEventListener('click', function () {
  var bigger;

  var isBigger = function isBigger(a, b) {
    if (a < b) {
      bigger = -1;
    } else if (a > b) {
      bigger = 1;
    } else bigger = 0;

    return bigger;
  };

  alert("Enter two numbers. If the first one is bigger you'll get -1. If the second one - you'll get 1. If they are equell - you'll get 0.");
  var firstNumber = +prompt("Enter the first number");
  var secondNumber = +prompt("Enter the second number");
  alert(isBigger(firstNumber, secondNumber));
}); //2. Factorial

var btn_252 = document.getElementById('task_25.2');
btn_252.addEventListener('click', function () {
  var userNumber = +prompt("Enter a natural number to find out its factorial");
  var fact;

  function factorial(n) {
    if (n == 1) {
      fact = 1;
    } else {
      fact = factorial(n - 1) * n;
    }

    return fact;
  }

  alert("".concat(factorial(userNumber)));
}); //3. Three digits to number

var btn_253 = document.getElementById('task_25.3');
btn_253.addEventListener('click', function () {
  alert("Enter three digits");
  var digit1 = prompt("Enter the first digit");
  var digit2 = prompt("Enter the second digit");
  var digit3 = prompt("Enter the third digit");

  var getNumber = function getNumber(a, b, c) {
    return a + b + c;
  };

  alert("".concat(getNumber(digit1, digit2, digit3)));
}); //4. Rectangle area

var btn_254 = document.getElementById('task_25.4');
btn_254.addEventListener('click', function () {
  var length = +prompt("Enter the length of the rectangle");
  var width = +prompt("Enter the width of the rectangle");

  var rectangleArea = function rectangleArea(a, b) {
    if (a == 0) {
      return b * b;
    } else if (b == 0) {
      return a * a;
    } else return a * b;
  };

  alert(rectangleArea(length, width));
}); //5. The perfect number

var btn_255 = document.getElementById('task_25.5');
btn_255.addEventListener('click', function () {
  var userNumber = +prompt("Enter a natural number");

  function isPerfect(a) {
    var j = 0;

    for (var i = 1; i < a; i++) {
      if (a % i == 0) {
        j += i;
      }
    }

    if (a == j) {
      alert("".concat(a, " is a perfect number"));
    } else {
      alert("".concat(a, " is not a perfect number"));
    }
  }

  isPerfect(userNumber);
}); //6. The perfect number from a range of numbers

var btn_256 = document.getElementById('task_25.6');
btn_256.addEventListener('click', function () {
  alert("Enter the largest and smallest numbers in the range of natural numbers");
  var smallestNumber = +prompt("Enter the smallest Number");
  var largestNumber = +prompt("Enter the largest Number");
  var count = 0;

  function getPerfect(min, max) {
    for (var i = smallestNumber; i <= largestNumber; i++) {
      isPerfect(i);
    }

    if (count == 0) {
      alert("There are no perfect numbers");
    }
  }

  function isPerfect(a) {
    var j = 0;

    for (var k = 1; k < a; k++) {
      if (a % k == 0) {
        j += k;
      }
    }

    if (a == j) {
      count++;
      alert("".concat(a, " is a perfect number"));
    }
  }

  getPerfect(smallestNumber, largestNumber);
}); //7. Get time

var btn_257 = document.getElementById('task_25.7');
btn_257.addEventListener('click', function () {
  var userHours = +prompt("Enter hours");
  var userMinutes = +prompt("Enter minutes");
  var userSeconds = +prompt("Enter seconds");

  function getTime() {
    var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var time = new Date();
    time.setHours(h, m, s);
    alert("It is ".concat(time.toTimeString()));
  }

  getTime(userHours, userMinutes, userSeconds);
}); //8. Get time in seconds

var btn_258 = document.getElementById('task_25.8');
btn_258.addEventListener('click', function () {
  var userHours = +prompt("Enter hours");
  var userMinutes = +prompt("Enter minutes");
  var userSeconds = +prompt("Enter seconds");

  var getSeconds = function getSeconds(h, m, s) {
    var seconds = h * 3600 + m * 60 + s;
    return seconds;
  };

  alert("The entered time consists of ".concat(getSeconds(userHours, userMinutes, userSeconds), " seconds"));
}); //9. Get time from seconds

var btn_259 = document.getElementById('task_25.9');
btn_259.addEventListener('click', function () {
  var userSeconds = +prompt("Enter seconds");

  var getTime = function getTime(s) {
    var seconds = s % 60;
    var minutes = (s - seconds) / 60 % 3600;
    var hours = (s - minutes * 60 - seconds) / 3600;
    var time = new Date();
    time.setHours(hours, minutes, seconds);
    return time.toTimeString();
  };

  alert("".concat(getTime(userSeconds)));
}); //10. The difference between the two dates

var btn_2510 = document.getElementById('task_25.10');
btn_2510.addEventListener('click', function () {
  var user1Hours = +prompt("Enter hours");
  var user1Minutes = +prompt("Enter minutes");
  var user1Seconds = +prompt("Enter seconds");
  var user2Hours = +prompt("Enter hours");
  var user2Minutes = +prompt("Enter minutes");
  var user2Seconds = +prompt("Enter seconds");

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

  var getTimeDifference = function getTimeDifference(h1, m1, s1, h2, m2, s2) {
    var setSeconds = 0;

    if (getSeconds(h1, m1, s1) > getSeconds(h2, m2, s2)) {
      setSeconds = getSeconds(h1, m1, s1) - getSeconds(h2, m2, s2);
    }

    if (getSeconds(h1, m1, s1) < getSeconds(h2, m2, s2)) {
      setSeconds = getSeconds(h2, m2, s2) - getSeconds(h1, m1, s1);
    }

    return getTime(setSeconds);
  };

  alert("The differense is \n    ".concat(getTimeDifference(user1Hours, user1Minutes, user1Seconds, user2Hours, user2Minutes, user2Seconds)));
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58084" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index25.js"], null)
//# sourceMappingURL=/index25.00f773c8.js.map