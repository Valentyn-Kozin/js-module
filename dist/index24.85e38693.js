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
})({"js/index24.js":[function(require,module,exports) {
// Lesson 24 Loops
//1. Calculate the sum of all numbers in a user-specified range.
var btn_241 = document.getElementById('task_24.1');
btn_241.addEventListener('click', function () {
  var lowerLimit = +prompt('Enter the lower limit of the range of numbers');
  var upperLimit = +prompt('Enter the upper limit of the range of numbers');
  var i = lowerLimit;
  var sum = 0;

  do {
    sum += i;
    i++;
  } while (i <= upperLimit);

  alert("The sum of all numbers in the range is ".concat(sum));
}); //2. The greatest common divisor of two numbers

var btn_242 = document.getElementById('task_24.2');
btn_242.addEventListener('click', function () {
  var userNumber1 = +prompt('Enter the first number');
  var userNumber2 = +prompt('Enter the second number');
  var divisor = 1;

  for (var i = 2; i <= userNumber1 && i <= userNumber2; i++) {
    if (userNumber1 % i == 0 && userNumber2 % i == 0) {
      divisor = i;
    }
  }

  alert("The greatest common divisor of these two numbers is ".concat(divisor));
}); //3. All divisors of the number

var btn_243 = document.getElementById('task_24.3');
btn_243.addEventListener('click', function () {
  var userNumber = +prompt('Enter a number');
  var divisors = '1';

  for (var i = 2; i <= userNumber; i++) {
    if (userNumber % i == 0) {
      divisors += ", ".concat(i);
    }
  }

  alert("All divisors of the number are ".concat(divisors, "."));
}); //4. Determine the number of digits in the entered number.

var btn_244 = document.getElementById('task_24.4');
btn_244.addEventListener('click', function () {
  var userNumber = +prompt('Enter a number');
  var i = 1;
  var j = 10;

  while (userNumber - j > 0) {
    j *= 10;
    i++;
  }

  alert("The number digits in your your number is ".concat(i));
}); //5. counting the number of integers

var btn_245 = document.getElementById('task_24.5');
btn_245.addEventListener('click', function () {
  alert('Enter ten integers');
  var zero = 0;
  var positiveNumber = 0;
  var negativeNumber = 0;
  var evenNumber = 0;
  var oddNumber = 0;

  for (var i = 1; i < 11; i++) {
    var userNumber = +prompt('Enter a number');

    if (userNumber > 0) {
      positiveNumber++;
    } else if (userNumber < 0) {
      negativeNumber++;
    } else {
      zero++;
    }

    if (userNumber % 2 == 0) {
      evenNumber++;
    } else {
      oddNumber++;
    }
  }

  alert("You entered ".concat(zero, " zeros, ").concat(positiveNumber, " positive numbers, \n    ").concat(negativeNumber, " negative numbers, ").concat(evenNumber, " even numbers and \n    ").concat(oddNumber, " odd numbers"));
}); //6. Loop calculator.

var btn_246 = document.getElementById('task_24.6');
btn_246.addEventListener('click', function () {
  var arithmeticResult;
  var question = true;

  while (question) {
    var number1 = +prompt('Enter a number');
    var number2 = +prompt('Enter a number');
    var arithmeticOperation = prompt('Enter the sign of the arithmetic operation - +, -, *, /');

    if (arithmeticOperation == '+') {
      arithmeticResult = number1 + number2;
    } else if (arithmeticOperation == '-') {
      arithmeticResult = number1 - number2;
    } else if (arithmeticOperation == '*') {
      arithmeticResult = number1 * number2;
    } else if (arithmeticOperation == '/') {
      arithmeticResult = number1 / number2;
    } else {
      alert('Enter the correct sign of the arithmetic operation - +, -, *, /');
    }

    alert("The result of the arithmetic operation is ".concat(arithmeticResult));
    question = confirm("Do you want to repeat the operation?");
  }
}); //7. Shift number

var btn_247 = document.getElementById('task_24.7');
btn_247.addEventListener('click', function () {
  var userNumber = prompt("Enter a natural number");
  var shiftNumber = +prompt("Enter the number of digits to which you want to move your number");
  var newNumber = userNumber;

  for (var i = 1; i <= shiftNumber; i++) {
    newNumber = newNumber.slice(1) + newNumber.slice(0, 1);
  }

  alert("".concat(newNumber));
}); //8. Day of week

var btn_248 = document.getElementById('task_24.8');
btn_248.addEventListener('click', function () {
  var userDay = new Date(prompt("Enter any date using yyyy-mm-dd"));
  var nextDay = userDay;
  var question = true;

  while (question) {
    var weekDay = void 0;

    switch (nextDay.getDay()) {
      case 0:
        weekDay = 'Sunday';
        break;

      case 1:
        weekDay = 'Monday';
        break;

      case 2:
        weekDay = 'Tuesday';
        break;

      case 3:
        weekDay = 'Wednesday';
        break;

      case 4:
        weekDay = 'Thersday';
        break;

      case 5:
        weekDay = 'Friday';
        break;

      case 6:
        weekDay = 'Saturday';
        break;
    }

    nextDay.setDate(nextDay.getDate() + 1);
    question = confirm("".concat(weekDay, " Do you want to see the next day?"));
  }
}); //9. Multiplication table

var btn_249 = document.getElementById('task_24.9');
btn_249.addEventListener('click', function () {
  alert("Let's take a look at the multiplication table");
  var multiplicationTable = "";
  var multiplicationResult;

  for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 10; j++) {
      multiplicationResult = i * j;
      multiplicationTable += "".concat(i, "*").concat(j, "=").concat(multiplicationResult, " ");
    }
  }

  alert("Here it is!\n    ".concat(multiplicationTable));
}); //10. Guess the number game

var btn_2410 = document.getElementById('task_24.10');
btn_2410.addEventListener('click', function () {
  alert("Guess a number from 0 to 100");
  var i = 0;
  var j = 100;
  var guesNumber;

  while (guesNumber != 2) {
    var N = Math.round((i + j) / 2);
    guesNumber = +prompt("Enter 1, if your number is less then ".concat(N, ".\n        Enter 2, if your number is equel to ").concat(N, ".\n        Enter 3, if your number is bigger then ").concat(N, "."));

    switch (guesNumber) {
      case 1:
        j = --N;
        break;

      case 2:
        alert("That was easy))");
        break;

      case 3:
        i = ++N;
        break;
    }
  }
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53973" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index24.js"], null)
//# sourceMappingURL=/index24.85e38693.js.map