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
})({"js/index23.js":[function(require,module,exports) {
// Lesson 23 Data types and operators
//1. User age
var btn_231 = document.getElementById('task_23.1');
btn_231.addEventListener('click', function () {
  var userAge = +prompt('Enter your age please');

  if (userAge < 0) {
    alert("See you after your birth in this world");
  } else if (userAge < 3) {
    alert("Your baby is very clever");
  } else if (userAge < 12) {
    alert("Hello, kid!");
  } else if (userAge < 19) {
    alert("How you doing, man?!");
  } else if (userAge < 60) {
    alert("Glad to see You, Sir/Mam!");
  } else {
    alert("I hope you applied for the correct address.");
  }
}); //2. Number & symbol

var btn_232 = document.getElementById('task_23.2');
btn_232.addEventListener('click', function () {
  var buttonWithNumber = +prompt('Press the number key on the keyboard please');

  switch (buttonWithNumber) {
    case 1:
      alert('!');
      break;

    case 2:
      alert('@');
      break;

    case 3:
      alert('#');
      break;

    case 4:
      alert('$');
      break;

    case 5:
      alert('%');
      break;

    case 6:
      alert('^');
      break;

    case 7:
      alert('&');
      break;

    case 8:
      alert('*');
      break;

    case 9:
      alert('(');
      break;

    case 0:
      alert(')');
      break;

    default:
      alert('Press the number key on the keyboard please');
  }
}); //3. check for the same numbers

var btn_233 = document.getElementById('task_23.3');
btn_233.addEventListener('click', function () {
  var threeDigitNumber = +prompt('Please enter a three-digit number');
  var threeDigitString = String(threeDigitNumber);

  if (threeDigitString.length == 3) {
    var digit1 = Math.floor(threeDigitNumber / 100);
    var digit2 = Math.floor((threeDigitNumber - digit1 * 100) / 10);
    var digit3 = threeDigitNumber - digit1 * 100 - digit2 * 10;

    if (digit1 != digit2 && digit1 != digit3 && digit2 != digit3) {
      alert('There are no identical digits in the number');
    } else {
      alert('There are identical digits in the number');
    }
  } else {
    alert('You entered wrong number');
  }
}); //4. Check for leap year

var btn_234 = document.getElementById('task_23.4');
btn_234.addEventListener('click', function () {
  var userYear = +prompt('Please enter a year to check if it is leap');

  if (userYear < 1583) {
    if (userYear % 4 == 0) {
      alert("".concat(userYear, " is a leap year"));
    } else {
      alert("".concat(userYear, " is not a leap year"));
    }
  } else if (userYear % 400 == 0 || userYear % 4 == 0 && userYear % 100 != 0) {
    alert("".concat(userYear, " is a leap year"));
  } else {
    alert("".concat(userYear, " is not a leap year"));
  }
}); //5. Five digit palindrome

var btn_235 = document.getElementById('task_23.5');
btn_235.addEventListener('click', function () {
  var fiveDigitNumber = +prompt('Enter five-digit number');

  if (fiveDigitNumber > 9999 && fiveDigitNumber < 100000) {
    var digit1 = Math.floor(fiveDigitNumber / 10000);
    var remainder = fiveDigitNumber - digit1 * 10000;
    var digit2 = Math.floor(remainder / 1000);
    remainder = remainder - digit2 * 1000;
    var digit3 = Math.floor(remainder / 100);
    remainder = remainder - digit3 * 100;
    var digit4 = Math.floor(remainder / 10);
    var digit5 = remainder - digit4 * 10;
    var newNumber = digit5 * 10000 + digit4 * 1000 + digit3 * 100 + digit2 * 10 + digit1;

    if (fiveDigitNumber == newNumber) {
      alert("You entered a palindrome number");
    } else {
      alert("You entered a non polindrome number");
    }
  } else {
    alert("You did not enter a five-digit number");
  }
}); //6. Currency converter

var btn_236 = document.getElementById('task_23.6');
btn_236.addEventListener('click', function () {
  var userDollar = +prompt('How much dollars you want to convert?');
  var userCurrency = prompt('Enter a currency to convert - EUR, UAH or AZN');
  var eur = Math.round(userDollar * 0.8475, 2);
  var uah = Math.round(userDollar * 28.35);
  var azn = Math.round(userDollar * 1.7);

  switch (userCurrency) {
    case 'EUR':
    case 'Eur':
    case 'eur':
      alert("You can get ".concat(eur, " EUR"));
      break;

    case 'UAH':
    case 'Uah':
    case 'uah':
      alert("You can get ".concat(uah, " UAH"));
      break;

    case 'AZN':
    case 'Azn':
    case 'azn':
      alert("You can get ".concat(azn, " AZN"));
      break;

    default:
      alert('Enter the correct currency to convert');
  }
}); //7. Discount payment

var btn_237 = document.getElementById('task_23.7');
btn_237.addEventListener('click', function () {
  var userAmount = +prompt('Enter the amount of your purchase');
  var discount0 = 0;
  var discount1 = 0.03;
  var discount2 = 0.05;
  var discount3 = 0.07;
  var rate1 = 200;
  var rate2 = 300;
  var rate3 = 500;

  if (0 <= userAmount && userAmount < rate1) {
    alert("Amount to be paid is ".concat(userAmount));
  } else if (rate1 <= userAmount && userAmount < rate2) {
    alert("Amount to be paid is ".concat(Math.round(userAmount * (1 - discount1), 2)));
  } else if (rate2 <= userAmount && userAmount < rate3) {
    alert("".concat(Math.round(userAmount * (1 - discount2), 2)));
  } else if (rate3 <= userAmount) {
    alert("".concat(Math.round(userAmount * (1 - discount3), 2)));
  } else {
    alert("Enter the correct amount of your purchase");
  }
}); //8. A circle inscribed in a square

var btn_238 = document.getElementById('task_23.8');
btn_238.addEventListener('click', function () {
  var circleLength = +prompt('Enter the length of the circle');
  var squarePerimeter = +prompt('Enter the perimeter of the square');

  if (circleLength / Math.PI <= squarePerimeter / 4) {
    alert("This circle can fit into the specified square");
  } else {
    alert("This circle can not fit into the specified square");
  }
}); //9. Three qoestions

var btn_239 = document.getElementById('task_23.9');
btn_239.addEventListener('click', function () {
  alert("You will receive 3 questions. Choose the correct answer and enter its serial number.");
  var question1 = prompt('Which plants are associated with the evolution of horses, primates and rodents in the Tertiary period of the Cenozoic era?', "1 - cereal plants, 2 - spore plants, 3 - cycad plants");
  var question2 = prompt('in what period of the Paleozoic era was the extinction of ancient clowns, horsetails, ferns?', '1 - Silurian, 2 - Permian, 3 - Carbonian');
  var question3 = prompt('What invertebrates are distributed and dominate in the Cambrian, Ordovician, Silurian and Devonian?', '1 - corals, 2 - swordtails, 3 - trilobites');
  var points = 0;

  if (question1 == 1) {
    points += 2;
  }

  if (question2 == 2) {
    points += 2;
  }

  if (question3 == 3) {
    points += 2;
  }

  alert("You've got ".concat(points, " points"));
}); //10. Get the next day after users birthday

var btn_2310 = document.getElementById('task_23.10');
btn_2310.addEventListener('click', function () {
  var userBirthYear = prompt('Enter the year of yor birth');
  var userBirthMonth = prompt('Enter the month of your birth');
  var userBirthDay = prompt('Enter the day of your birth');
  var userDate = new Date(userBirthYear, userBirthMonth - 1, userBirthDay);
  userDate.setDate(userDate.getDate() + 1);
  alert("The next day after your birthday is ".concat(userDate));
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50081" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index23.js"], null)
//# sourceMappingURL=/index23.44f7dacc.js.map