// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _parallaxJs = require("parallax-js");
var _parallaxJsDefault = parcelHelpers.interopDefault(_parallaxJs);
const scene = document.getElementById("scene");
const parallaxInstance = new (0, _parallaxJsDefault.default)(scene);

},{"parallax-js":"8KDV2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8KDV2":[function(require,module,exports) {
var global = arguments[3];
(function(f) {
    var g;
    module.exports = f();
})(function() {
    var define, module1, exports;
    return (function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = undefined;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f;
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            }
            return n[o].exports;
        }
        var i = undefined;
        for(var o = 0; o < r.length; o++)s(r[o]);
        return s;
    })({
        1: [
            function(require, module1, exports) {
                /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ "use strict";
                /* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                var propIsEnumerable = Object.prototype.propertyIsEnumerable;
                function toObject(val) {
                    if (val === null || val === undefined) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(val);
                }
                function shouldUseNative() {
                    try {
                        if (!Object.assign) return false;
                        // Detect buggy property enumeration order in older V8 versions.
                        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                        var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
                        test1[5] = "de";
                        if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
                        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                        var test2 = {};
                        for(var i = 0; i < 10; i++)test2["_" + String.fromCharCode(i)] = i;
                        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                            return test2[n];
                        });
                        if (order2.join("") !== "0123456789") return false;
                        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                        var test3 = {};
                        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                            test3[letter] = letter;
                        });
                        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
                        return true;
                    } catch (err) {
                        // We don't expect any of the above to throw, but better to be safe.
                        return false;
                    }
                }
                module1.exports = shouldUseNative() ? Object.assign : function(target, source) {
                    var from;
                    var to = toObject(target);
                    var symbols;
                    for(var s = 1; s < arguments.length; s++){
                        from = Object(arguments[s]);
                        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
                        if (getOwnPropertySymbols) {
                            symbols = getOwnPropertySymbols(from);
                            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
                        }
                    }
                    return to;
                };
            },
            {}
        ],
        2: [
            function(require, module1, exports) {
                (function(process) {
                    // Generated by CoffeeScript 1.12.2
                    (function() {
                        var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
                        if (typeof performance !== "undefined" && performance !== null && performance.now) module1.exports = function() {
                            return performance.now();
                        };
                        else if (typeof process !== "undefined" && process !== null && process.hrtime) {
                            module1.exports = function() {
                                return (getNanoSeconds() - nodeLoadTime) / 1e6;
                            };
                            hrtime = process.hrtime;
                            getNanoSeconds = function() {
                                var hr;
                                hr = hrtime();
                                return hr[0] * 1e9 + hr[1];
                            };
                            moduleLoadTime = getNanoSeconds();
                            upTime = process.uptime() * 1e9;
                            nodeLoadTime = moduleLoadTime - upTime;
                        } else if (Date.now) {
                            module1.exports = function() {
                                return Date.now() - loadTime;
                            };
                            loadTime = Date.now();
                        } else {
                            module1.exports = function() {
                                return new Date().getTime() - loadTime;
                            };
                            loadTime = new Date().getTime();
                        }
                    }).call(this);
                }).call(this, require("_process"));
            },
            {
                "_process": 3
            }
        ],
        3: [
            function(require, module1, exports) {
                // shim for using process in browser
                var process = module1.exports = {};
                // cached from whatever global is present so that test runners that stub it
                // don't break things.  But we need to wrap it in a try catch in case it is
                // wrapped in strict mode code which doesn't define any globals.  It's inside a
                // function because try/catches deoptimize in certain engines.
                var cachedSetTimeout;
                var cachedClearTimeout;
                function defaultSetTimout() {
                    throw new Error("setTimeout has not been defined");
                }
                function defaultClearTimeout() {
                    throw new Error("clearTimeout has not been defined");
                }
                (function() {
                    try {
                        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
                        else cachedSetTimeout = defaultSetTimout;
                    } catch (e) {
                        cachedSetTimeout = defaultSetTimout;
                    }
                    try {
                        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
                        else cachedClearTimeout = defaultClearTimeout;
                    } catch (e1) {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                })();
                function runTimeout(fun) {
                    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
                    return setTimeout(fun, 0);
                    // if setTimeout wasn't available but was latter defined
                    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                        cachedSetTimeout = setTimeout;
                        return setTimeout(fun, 0);
                    }
                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        return cachedSetTimeout(fun, 0);
                    } catch (e) {
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                            return cachedSetTimeout.call(null, fun, 0);
                        } catch (e1) {
                            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                            return cachedSetTimeout.call(this, fun, 0);
                        }
                    }
                }
                function runClearTimeout(marker) {
                    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
                    return clearTimeout(marker);
                    // if clearTimeout wasn't available but was latter defined
                    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                        cachedClearTimeout = clearTimeout;
                        return clearTimeout(marker);
                    }
                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        return cachedClearTimeout(marker);
                    } catch (e) {
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                            return cachedClearTimeout.call(null, marker);
                        } catch (e1) {
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
                    if (!draining || !currentQueue) return;
                    draining = false;
                    if (currentQueue.length) queue = currentQueue.concat(queue);
                    else queueIndex = -1;
                    if (queue.length) drainQueue();
                }
                function drainQueue() {
                    if (draining) return;
                    var timeout = runTimeout(cleanUpNextTick);
                    draining = true;
                    var len = queue.length;
                    while(len){
                        currentQueue = queue;
                        queue = [];
                        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
                        queueIndex = -1;
                        len = queue.length;
                    }
                    currentQueue = null;
                    draining = false;
                    runClearTimeout(timeout);
                }
                process.nextTick = function(fun) {
                    var args = new Array(arguments.length - 1);
                    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
                    queue.push(new Item(fun, args));
                    if (queue.length === 1 && !draining) runTimeout(drainQueue);
                };
                // v8 likes predictible objects
                function Item(fun, array) {
                    this.fun = fun;
                    this.array = array;
                }
                Item.prototype.run = function() {
                    this.fun.apply(null, this.array);
                };
                process.title = "browser";
                process.browser = true;
                process.env = {};
                process.argv = [];
                process.version = ""; // empty string to avoid regexp issues
                process.versions = {};
                function noop() {}
                process.on = noop;
                process.addListener = noop;
                process.once = noop;
                process.off = noop;
                process.removeListener = noop;
                process.removeAllListeners = noop;
                process.emit = noop;
                process.prependListener = noop;
                process.prependOnceListener = noop;
                process.listeners = function(name) {
                    return [];
                };
                process.binding = function(name) {
                    throw new Error("process.binding is not supported");
                };
                process.cwd = function() {
                    return "/";
                };
                process.chdir = function(dir) {
                    throw new Error("process.chdir is not supported");
                };
                process.umask = function() {
                    return 0;
                };
            },
            {}
        ],
        4: [
            function(require, module1, exports) {
                (function(global) {
                    var now = require("performance-now"), root = typeof window === "undefined" ? global : window, vendors = [
                        "moz",
                        "webkit"
                    ], suffix = "AnimationFrame", raf = root["request" + suffix], caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
                    for(var i = 0; !raf && i < vendors.length; i++){
                        raf = root[vendors[i] + "Request" + suffix];
                        caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
                    }
                    // Some versions of FF have rAF but not cAF
                    if (!raf || !caf) {
                        var last = 0, id = 0, queue = [], frameDuration = 1000 / 60;
                        raf = function(callback) {
                            if (queue.length === 0) {
                                var _now = now(), next = Math.max(0, frameDuration - (_now - last));
                                last = next + _now;
                                setTimeout(function() {
                                    var cp = queue.slice(0);
                                    // Clear queue here to prevent
                                    // callbacks from appending listeners
                                    // to the current frame's queue
                                    queue.length = 0;
                                    for(var i = 0; i < cp.length; i++){
                                        if (!cp[i].cancelled) try {
                                            cp[i].callback(last);
                                        } catch (e) {
                                            setTimeout(function() {
                                                throw e;
                                            }, 0);
                                        }
                                    }
                                }, Math.round(next));
                            }
                            queue.push({
                                handle: ++id,
                                callback: callback,
                                cancelled: false
                            });
                            return id;
                        };
                        caf = function(handle) {
                            for(var i = 0; i < queue.length; i++)if (queue[i].handle === handle) queue[i].cancelled = true;
                        };
                    }
                    module1.exports = function(fn) {
                        // Wrap in a new function to prevent
                        // `cancel` potentially being assigned
                        // to the native rAF function
                        return raf.call(root, fn);
                    };
                    module1.exports.cancel = function() {
                        caf.apply(root, arguments);
                    };
                    module1.exports.polyfill = function() {
                        root.requestAnimationFrame = raf;
                        root.cancelAnimationFrame = caf;
                    };
                }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
            },
            {
                "performance-now": 2
            }
        ],
        5: [
            function(require, module1, exports) {
                "use strict";
                var _createClass = function() {
                    function defineProperties(target, props) {
                        for(var i = 0; i < props.length; i++){
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }
                    return function(Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) defineProperties(Constructor, staticProps);
                        return Constructor;
                    };
                }();
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                /**
* Parallax.js
* @author Matthew Wagerfield - @wagerfield, René Roth - mail@reneroth.org
* @description Creates a parallax effect between an array of layers,
*              driving the motion from the gyroscope output of a smartdevice.
*              If no gyroscope is available, the cursor position is used.
*/ var rqAnFr = require("raf");
                var objectAssign = require("object-assign");
                var helpers = {
                    propertyCache: {},
                    vendors: [
                        null,
                        [
                            "-webkit-",
                            "webkit"
                        ],
                        [
                            "-moz-",
                            "Moz"
                        ],
                        [
                            "-o-",
                            "O"
                        ],
                        [
                            "-ms-",
                            "ms"
                        ]
                    ],
                    clamp: function clamp(value, min, max) {
                        return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
                    },
                    data: function data(element, name) {
                        return helpers.deserialize(element.getAttribute("data-" + name));
                    },
                    deserialize: function deserialize(value) {
                        if (value === "true") return true;
                        else if (value === "false") return false;
                        else if (value === "null") return null;
                        else if (!isNaN(parseFloat(value)) && isFinite(value)) return parseFloat(value);
                        else return value;
                    },
                    camelCase: function camelCase(value) {
                        return value.replace(/-+(.)?/g, function(match, character) {
                            return character ? character.toUpperCase() : "";
                        });
                    },
                    accelerate: function accelerate(element) {
                        helpers.css(element, "transform", "translate3d(0,0,0) rotate(0.0001deg)");
                        helpers.css(element, "transform-style", "preserve-3d");
                        helpers.css(element, "backface-visibility", "hidden");
                    },
                    transformSupport: function transformSupport(value) {
                        var element = document.createElement("div"), propertySupport = false, propertyValue = null, featureSupport = false, cssProperty = null, jsProperty = null;
                        for(var i = 0, l = helpers.vendors.length; i < l; i++){
                            if (helpers.vendors[i] !== null) {
                                cssProperty = helpers.vendors[i][0] + "transform";
                                jsProperty = helpers.vendors[i][1] + "Transform";
                            } else {
                                cssProperty = "transform";
                                jsProperty = "transform";
                            }
                            if (element.style[jsProperty] !== undefined) {
                                propertySupport = true;
                                break;
                            }
                        }
                        switch(value){
                            case "2D":
                                featureSupport = propertySupport;
                                break;
                            case "3D":
                                if (propertySupport) {
                                    var body = document.body || document.createElement("body"), documentElement = document.documentElement, documentOverflow = documentElement.style.overflow, isCreatedBody = false;
                                    if (!document.body) {
                                        isCreatedBody = true;
                                        documentElement.style.overflow = "hidden";
                                        documentElement.appendChild(body);
                                        body.style.overflow = "hidden";
                                        body.style.background = "";
                                    }
                                    body.appendChild(element);
                                    element.style[jsProperty] = "translate3d(1px,1px,1px)";
                                    propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
                                    featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== "none";
                                    documentElement.style.overflow = documentOverflow;
                                    body.removeChild(element);
                                    if (isCreatedBody) {
                                        body.removeAttribute("style");
                                        body.parentNode.removeChild(body);
                                    }
                                }
                                break;
                        }
                        return featureSupport;
                    },
                    css: function css(element, property, value) {
                        var jsProperty = helpers.propertyCache[property];
                        if (!jsProperty) for(var i = 0, l = helpers.vendors.length; i < l; i++){
                            if (helpers.vendors[i] !== null) jsProperty = helpers.camelCase(helpers.vendors[i][1] + "-" + property);
                            else jsProperty = property;
                            if (element.style[jsProperty] !== undefined) {
                                helpers.propertyCache[property] = jsProperty;
                                break;
                            }
                        }
                        element.style[jsProperty] = value;
                    }
                };
                var MAGIC_NUMBER = 30, DEFAULTS = {
                    relativeInput: false,
                    clipRelativeInput: false,
                    inputElement: null,
                    hoverOnly: false,
                    calibrationThreshold: 100,
                    calibrationDelay: 500,
                    supportDelay: 500,
                    calibrateX: false,
                    calibrateY: true,
                    invertX: true,
                    invertY: true,
                    limitX: false,
                    limitY: false,
                    scalarX: 10.0,
                    scalarY: 10.0,
                    frictionX: 0.1,
                    frictionY: 0.1,
                    originX: 0.5,
                    originY: 0.5,
                    pointerEvents: false,
                    precision: 1,
                    onReady: null,
                    selector: null
                };
                var Parallax = function() {
                    function Parallax(element, options) {
                        _classCallCheck(this, Parallax);
                        this.element = element;
                        var data = {
                            calibrateX: helpers.data(this.element, "calibrate-x"),
                            calibrateY: helpers.data(this.element, "calibrate-y"),
                            invertX: helpers.data(this.element, "invert-x"),
                            invertY: helpers.data(this.element, "invert-y"),
                            limitX: helpers.data(this.element, "limit-x"),
                            limitY: helpers.data(this.element, "limit-y"),
                            scalarX: helpers.data(this.element, "scalar-x"),
                            scalarY: helpers.data(this.element, "scalar-y"),
                            frictionX: helpers.data(this.element, "friction-x"),
                            frictionY: helpers.data(this.element, "friction-y"),
                            originX: helpers.data(this.element, "origin-x"),
                            originY: helpers.data(this.element, "origin-y"),
                            pointerEvents: helpers.data(this.element, "pointer-events"),
                            precision: helpers.data(this.element, "precision"),
                            relativeInput: helpers.data(this.element, "relative-input"),
                            clipRelativeInput: helpers.data(this.element, "clip-relative-input"),
                            hoverOnly: helpers.data(this.element, "hover-only"),
                            inputElement: document.querySelector(helpers.data(this.element, "input-element")),
                            selector: helpers.data(this.element, "selector")
                        };
                        for(var key in data)if (data[key] === null) delete data[key];
                        objectAssign(this, DEFAULTS, data, options);
                        if (!this.inputElement) this.inputElement = this.element;
                        this.calibrationTimer = null;
                        this.calibrationFlag = true;
                        this.enabled = false;
                        this.depthsX = [];
                        this.depthsY = [];
                        this.raf = null;
                        this.bounds = null;
                        this.elementPositionX = 0;
                        this.elementPositionY = 0;
                        this.elementWidth = 0;
                        this.elementHeight = 0;
                        this.elementCenterX = 0;
                        this.elementCenterY = 0;
                        this.elementRangeX = 0;
                        this.elementRangeY = 0;
                        this.calibrationX = 0;
                        this.calibrationY = 0;
                        this.inputX = 0;
                        this.inputY = 0;
                        this.motionX = 0;
                        this.motionY = 0;
                        this.velocityX = 0;
                        this.velocityY = 0;
                        this.onMouseMove = this.onMouseMove.bind(this);
                        this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
                        this.onDeviceMotion = this.onDeviceMotion.bind(this);
                        this.onOrientationTimer = this.onOrientationTimer.bind(this);
                        this.onMotionTimer = this.onMotionTimer.bind(this);
                        this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
                        this.onAnimationFrame = this.onAnimationFrame.bind(this);
                        this.onWindowResize = this.onWindowResize.bind(this);
                        this.windowWidth = null;
                        this.windowHeight = null;
                        this.windowCenterX = null;
                        this.windowCenterY = null;
                        this.windowRadiusX = null;
                        this.windowRadiusY = null;
                        this.portrait = false;
                        this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
                        this.motionSupport = !!window.DeviceMotionEvent && !this.desktop;
                        this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop;
                        this.orientationStatus = 0;
                        this.motionStatus = 0;
                        this.initialise();
                    }
                    _createClass(Parallax, [
                        {
                            key: "initialise",
                            value: function initialise() {
                                if (this.transform2DSupport === undefined) {
                                    this.transform2DSupport = helpers.transformSupport("2D");
                                    this.transform3DSupport = helpers.transformSupport("3D");
                                }
                                // Configure Context Styles
                                if (this.transform3DSupport) helpers.accelerate(this.element);
                                var style = window.getComputedStyle(this.element);
                                if (style.getPropertyValue("position") === "static") this.element.style.position = "relative";
                                // Pointer events
                                if (!this.pointerEvents) this.element.style.pointerEvents = "none";
                                // Setup
                                this.updateLayers();
                                this.updateDimensions();
                                this.enable();
                                this.queueCalibration(this.calibrationDelay);
                            }
                        },
                        {
                            key: "doReadyCallback",
                            value: function doReadyCallback() {
                                if (this.onReady) this.onReady();
                            }
                        },
                        {
                            key: "updateLayers",
                            value: function updateLayers() {
                                if (this.selector) this.layers = this.element.querySelectorAll(this.selector);
                                else this.layers = this.element.children;
                                if (!this.layers.length) console.warn("ParallaxJS: Your scene does not have any layers.");
                                this.depthsX = [];
                                this.depthsY = [];
                                for(var index = 0; index < this.layers.length; index++){
                                    var layer = this.layers[index];
                                    if (this.transform3DSupport) helpers.accelerate(layer);
                                    layer.style.position = index ? "absolute" : "relative";
                                    layer.style.display = "block";
                                    layer.style.left = 0;
                                    layer.style.top = 0;
                                    var depth = helpers.data(layer, "depth") || 0;
                                    this.depthsX.push(helpers.data(layer, "depth-x") || depth);
                                    this.depthsY.push(helpers.data(layer, "depth-y") || depth);
                                }
                            }
                        },
                        {
                            key: "updateDimensions",
                            value: function updateDimensions() {
                                this.windowWidth = window.innerWidth;
                                this.windowHeight = window.innerHeight;
                                this.windowCenterX = this.windowWidth * this.originX;
                                this.windowCenterY = this.windowHeight * this.originY;
                                this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX);
                                this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);
                            }
                        },
                        {
                            key: "updateBounds",
                            value: function updateBounds() {
                                this.bounds = this.inputElement.getBoundingClientRect();
                                this.elementPositionX = this.bounds.left;
                                this.elementPositionY = this.bounds.top;
                                this.elementWidth = this.bounds.width;
                                this.elementHeight = this.bounds.height;
                                this.elementCenterX = this.elementWidth * this.originX;
                                this.elementCenterY = this.elementHeight * this.originY;
                                this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX);
                                this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);
                            }
                        },
                        {
                            key: "queueCalibration",
                            value: function queueCalibration(delay) {
                                clearTimeout(this.calibrationTimer);
                                this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
                            }
                        },
                        {
                            key: "enable",
                            value: function enable() {
                                if (this.enabled) return;
                                this.enabled = true;
                                if (this.orientationSupport) {
                                    this.portrait = false;
                                    window.addEventListener("deviceorientation", this.onDeviceOrientation);
                                    this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay);
                                } else if (this.motionSupport) {
                                    this.portrait = false;
                                    window.addEventListener("devicemotion", this.onDeviceMotion);
                                    this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay);
                                } else {
                                    this.calibrationX = 0;
                                    this.calibrationY = 0;
                                    this.portrait = false;
                                    window.addEventListener("mousemove", this.onMouseMove);
                                    this.doReadyCallback();
                                }
                                window.addEventListener("resize", this.onWindowResize);
                                this.raf = rqAnFr(this.onAnimationFrame);
                            }
                        },
                        {
                            key: "disable",
                            value: function disable() {
                                if (!this.enabled) return;
                                this.enabled = false;
                                if (this.orientationSupport) window.removeEventListener("deviceorientation", this.onDeviceOrientation);
                                else if (this.motionSupport) window.removeEventListener("devicemotion", this.onDeviceMotion);
                                else window.removeEventListener("mousemove", this.onMouseMove);
                                window.removeEventListener("resize", this.onWindowResize);
                                rqAnFr.cancel(this.raf);
                            }
                        },
                        {
                            key: "calibrate",
                            value: function calibrate(x, y) {
                                this.calibrateX = x === undefined ? this.calibrateX : x;
                                this.calibrateY = y === undefined ? this.calibrateY : y;
                            }
                        },
                        {
                            key: "invert",
                            value: function invert(x, y) {
                                this.invertX = x === undefined ? this.invertX : x;
                                this.invertY = y === undefined ? this.invertY : y;
                            }
                        },
                        {
                            key: "friction",
                            value: function friction(x, y) {
                                this.frictionX = x === undefined ? this.frictionX : x;
                                this.frictionY = y === undefined ? this.frictionY : y;
                            }
                        },
                        {
                            key: "scalar",
                            value: function scalar(x, y) {
                                this.scalarX = x === undefined ? this.scalarX : x;
                                this.scalarY = y === undefined ? this.scalarY : y;
                            }
                        },
                        {
                            key: "limit",
                            value: function limit(x, y) {
                                this.limitX = x === undefined ? this.limitX : x;
                                this.limitY = y === undefined ? this.limitY : y;
                            }
                        },
                        {
                            key: "origin",
                            value: function origin(x, y) {
                                this.originX = x === undefined ? this.originX : x;
                                this.originY = y === undefined ? this.originY : y;
                            }
                        },
                        {
                            key: "setInputElement",
                            value: function setInputElement(element) {
                                this.inputElement = element;
                                this.updateDimensions();
                            }
                        },
                        {
                            key: "setPosition",
                            value: function setPosition(element, x, y) {
                                x = x.toFixed(this.precision) + "px";
                                y = y.toFixed(this.precision) + "px";
                                if (this.transform3DSupport) helpers.css(element, "transform", "translate3d(" + x + "," + y + ",0)");
                                else if (this.transform2DSupport) helpers.css(element, "transform", "translate(" + x + "," + y + ")");
                                else {
                                    element.style.left = x;
                                    element.style.top = y;
                                }
                            }
                        },
                        {
                            key: "onOrientationTimer",
                            value: function onOrientationTimer() {
                                if (this.orientationSupport && this.orientationStatus === 0) {
                                    this.disable();
                                    this.orientationSupport = false;
                                    this.enable();
                                } else this.doReadyCallback();
                            }
                        },
                        {
                            key: "onMotionTimer",
                            value: function onMotionTimer() {
                                if (this.motionSupport && this.motionStatus === 0) {
                                    this.disable();
                                    this.motionSupport = false;
                                    this.enable();
                                } else this.doReadyCallback();
                            }
                        },
                        {
                            key: "onCalibrationTimer",
                            value: function onCalibrationTimer() {
                                this.calibrationFlag = true;
                            }
                        },
                        {
                            key: "onWindowResize",
                            value: function onWindowResize() {
                                this.updateDimensions();
                            }
                        },
                        {
                            key: "onAnimationFrame",
                            value: function onAnimationFrame() {
                                this.updateBounds();
                                var calibratedInputX = this.inputX - this.calibrationX, calibratedInputY = this.inputY - this.calibrationY;
                                if (Math.abs(calibratedInputX) > this.calibrationThreshold || Math.abs(calibratedInputY) > this.calibrationThreshold) this.queueCalibration(0);
                                if (this.portrait) {
                                    this.motionX = this.calibrateX ? calibratedInputY : this.inputY;
                                    this.motionY = this.calibrateY ? calibratedInputX : this.inputX;
                                } else {
                                    this.motionX = this.calibrateX ? calibratedInputX : this.inputX;
                                    this.motionY = this.calibrateY ? calibratedInputY : this.inputY;
                                }
                                this.motionX *= this.elementWidth * (this.scalarX / 100);
                                this.motionY *= this.elementHeight * (this.scalarY / 100);
                                if (!isNaN(parseFloat(this.limitX))) this.motionX = helpers.clamp(this.motionX, -this.limitX, this.limitX);
                                if (!isNaN(parseFloat(this.limitY))) this.motionY = helpers.clamp(this.motionY, -this.limitY, this.limitY);
                                this.velocityX += (this.motionX - this.velocityX) * this.frictionX;
                                this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                                for(var index = 0; index < this.layers.length; index++){
                                    var layer = this.layers[index], depthX = this.depthsX[index], depthY = this.depthsY[index], xOffset = this.velocityX * (depthX * (this.invertX ? -1 : 1)), yOffset = this.velocityY * (depthY * (this.invertY ? -1 : 1));
                                    this.setPosition(layer, xOffset, yOffset);
                                }
                                this.raf = rqAnFr(this.onAnimationFrame);
                            }
                        },
                        {
                            key: "rotate",
                            value: function rotate(beta, gamma) {
                                // Extract Rotation
                                var x = (beta || 0) / MAGIC_NUMBER, //  -90 :: 90
                                y = (gamma || 0) / MAGIC_NUMBER; // -180 :: 180
                                // Detect Orientation Change
                                var portrait = this.windowHeight > this.windowWidth;
                                if (this.portrait !== portrait) {
                                    this.portrait = portrait;
                                    this.calibrationFlag = true;
                                }
                                if (this.calibrationFlag) {
                                    this.calibrationFlag = false;
                                    this.calibrationX = x;
                                    this.calibrationY = y;
                                }
                                this.inputX = x;
                                this.inputY = y;
                            }
                        },
                        {
                            key: "onDeviceOrientation",
                            value: function onDeviceOrientation(event) {
                                var beta = event.beta;
                                var gamma = event.gamma;
                                if (beta !== null && gamma !== null) {
                                    this.orientationStatus = 1;
                                    this.rotate(beta, gamma);
                                }
                            }
                        },
                        {
                            key: "onDeviceMotion",
                            value: function onDeviceMotion(event) {
                                var beta = event.rotationRate.beta;
                                var gamma = event.rotationRate.gamma;
                                if (beta !== null && gamma !== null) {
                                    this.motionStatus = 1;
                                    this.rotate(beta, gamma);
                                }
                            }
                        },
                        {
                            key: "onMouseMove",
                            value: function onMouseMove(event) {
                                var clientX = event.clientX, clientY = event.clientY;
                                // reset input to center if hoverOnly is set and we're not hovering the element
                                if (this.hoverOnly && (clientX < this.elementPositionX || clientX > this.elementPositionX + this.elementWidth || clientY < this.elementPositionY || clientY > this.elementPositionY + this.elementHeight)) {
                                    this.inputX = 0;
                                    this.inputY = 0;
                                    return;
                                }
                                if (this.relativeInput) {
                                    // Clip mouse coordinates inside element bounds.
                                    if (this.clipRelativeInput) {
                                        clientX = Math.max(clientX, this.elementPositionX);
                                        clientX = Math.min(clientX, this.elementPositionX + this.elementWidth);
                                        clientY = Math.max(clientY, this.elementPositionY);
                                        clientY = Math.min(clientY, this.elementPositionY + this.elementHeight);
                                    }
                                    // Calculate input relative to the element.
                                    if (this.elementRangeX && this.elementRangeY) {
                                        this.inputX = (clientX - this.elementPositionX - this.elementCenterX) / this.elementRangeX;
                                        this.inputY = (clientY - this.elementPositionY - this.elementCenterY) / this.elementRangeY;
                                    }
                                } else // Calculate input relative to the window.
                                if (this.windowRadiusX && this.windowRadiusY) {
                                    this.inputX = (clientX - this.windowCenterX) / this.windowRadiusX;
                                    this.inputY = (clientY - this.windowCenterY) / this.windowRadiusY;
                                }
                            }
                        },
                        {
                            key: "destroy",
                            value: function destroy() {
                                this.disable();
                                clearTimeout(this.calibrationTimer);
                                clearTimeout(this.detectionTimer);
                                this.element.removeAttribute("style");
                                for(var index = 0; index < this.layers.length; index++)this.layers[index].removeAttribute("style");
                                delete this.element;
                                delete this.layers;
                            }
                        },
                        {
                            key: "version",
                            value: function version() {
                                return "3.1.0";
                            }
                        }
                    ]);
                    return Parallax;
                }();
                module1.exports = Parallax;
            },
            {
                "object-assign": 1,
                "raf": 4
            }
        ]
    }, {}, [
        5
    ])(5);
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequirefa1e")

//# sourceMappingURL=index.975ef6c8.js.map
