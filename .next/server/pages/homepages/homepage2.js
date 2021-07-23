module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/homepages/homepage2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/apis/cart.js":
/*!**************************!*\
  !*** ./src/apis/cart.js ***!
  \**************************/
/*! exports provided: fetchCartData, fetchProductIdCartData, addCartData, removeCartData, updateCartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartData", function() { return fetchCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdCartData", function() { return fetchProductIdCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartData", function() { return addCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartData", function() { return removeCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartData", function() { return updateCartData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/cart";
const fetchCartData = cartId => {
  let endpoint = cartId ? _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}` : _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdCartData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("productId", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addCartData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeCartData = cartId => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};
const updateCartData = (cartId, data) => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].patch(endpoint, data);
};

/***/ }),

/***/ "./src/apis/shop.js":
/*!**************************!*\
  !*** ./src/apis/shop.js ***!
  \**************************/
/*! exports provided: fetchProductsData, fetchSaleProductsData, fetchFeaturedProductsData, fetchBestSellerProductsData, fetchDaleProductsData, fetchProductDetailData, fetchSearchedProductData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsData", function() { return fetchProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsData", function() { return fetchSaleProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsData", function() { return fetchFeaturedProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsData", function() { return fetchBestSellerProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsData", function() { return fetchDaleProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailData", function() { return fetchProductDetailData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductData", function() { return fetchSearchedProductData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/product";

const renderUrl = (url, limit, category) => {
  return url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", limit) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", category);
}; //Fetch list of products


const fetchProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_page", query.page) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_sort", query.sort.sort) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_order", query.sort.order) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("q", query.q) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("specifications.color", query.color) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("specifications.size", query.size) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("tag_like", query.tag);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchSaleProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchFeaturedProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchBestSellerProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchDaleProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
}; //Fetch product detail

const fetchProductDetailData = slug => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("slug", slug);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
}; //Fetch serched product by query

const fetchSearchedProductData = query => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("q", query.input) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", query.category) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", query.limit);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};

/***/ }),

/***/ "./src/apis/wishlist.js":
/*!******************************!*\
  !*** ./src/apis/wishlist.js ***!
  \******************************/
/*! exports provided: fetchWishlistData, fetchProductIdWishlistData, addWishlistData, removeWishlistData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishlistData", function() { return fetchWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdWishlistData", function() { return fetchProductIdWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWishlistData", function() { return addWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWishlistData", function() { return removeWishlistData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/wishlist";
const fetchWishlistData = () => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("id", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addWishlistData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${pid}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};

/***/ }),

/***/ "./src/common/axiosService.js":
/*!************************************!*\
  !*** ./src/common/axiosService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class AxiosService {
  constructor() {
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  patch(url, body) {
    return this.instance.patch(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AxiosService());

/***/ }),

/***/ "./src/common/cartServices.js":
/*!************************************!*\
  !*** ./src/common/cartServices.js ***!
  \************************************/
/*! exports provided: onAddProductToCart, onRemoveProductFromCart, onChangeProductCartQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddProductToCart", function() { return onAddProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRemoveProductFromCart", function() { return onRemoveProductFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeProductCartQuantity", function() { return onChangeProductCartQuantity; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/cart */ "./src/apis/cart.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const onAddProductToCart = ({
  product,
  quantity = 1,
  onSuccess,
  onError,
  getQuantityAvailable = () => true
}) => {
  Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchProductIdCartData"])(product.id).then(res => {
    if (res.data.length === 0) {
      if (product.quantity === 0) {
        onError && onError("Reached maximum number of products");
        getQuantityAvailable && getQuantityAvailable(false);
      } else {
        Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["addCartData"])(_objectSpread(_objectSpread({}, product), {}, {
          id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
          productId: product.id,
          cartQuantity: quantity
        })).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Add product to cart failed, please try again", err));
      }
    } else {
      let pData = res.data[0];

      if (pData.cartQuantity + quantity > pData.quantity) {
        onError && onError("Reached maximum number of products");
        getQuantityAvailable(false);
      } else {
        Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["updateCartData"])(pData.id, {
          cartQuantity: pData.cartQuantity + quantity
        }).then(res => {
          onSuccess && onSuccess(res);
        }).catch(err => onError && onError("Add product to cart failed, please try again", err));
      }
    }
  }).catch(err => onError && onError("Add product to cart failed, please try again", err));
};
const onRemoveProductFromCart = ({
  cartId,
  onSuccess,
  onError
}) => {
  if (cartId && cartId !== "" && cartId !== null) {
    Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["removeCartData"])(cartId).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Remove product failm, pleaser try again", err));
  }
};
const onChangeProductCartQuantity = ({
  product,
  quantity,
  onSuccess
}) => {
  if (quantity > product.quantity || quantity < 1) {
    return;
  }

  Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["updateCartData"])(product.id, {
    cartQuantity: quantity
  }).then(res => onSuccess && onSuccess(res)).catch(err => console.log(err));
};

/***/ }),

/***/ "./src/common/defines.js":
/*!*******************************!*\
  !*** ./src/common/defines.js ***!
  \*******************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = "https://ogami-api.herokuapp.com";

/***/ }),

/***/ "./src/common/shopUtils.js":
/*!*********************************!*\
  !*** ./src/common/shopUtils.js ***!
  \*********************************/
/*! exports provided: getProductsBySlug, calculateTotalPrice, checkProductInCart, checkProductCartQuantity, checkProductInWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsBySlug", function() { return getProductsBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTotalPrice", function() { return calculateTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductInCart", function() { return checkProductInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductCartQuantity", function() { return checkProductCartQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductInWishlist", function() { return checkProductInWishlist; });
const getProductsBySlug = (arr, slug) => {
  return slug && typeof slug === "string" ? arr.find(p => p.slug.toLowerCase() === slug.toLowerCase()) : arr;
};
const calculateTotalPrice = arr => {
  let total = 0;
  arr.forEach(item => {
    if (item.discount) {
      total += item.cartQuantity ? (item.price - item.discount) * item.cartQuantity : item.price - item.discount;
    } else {
      total += item.cartQuantity ? item.price * item.cartQuantity : item.price;
    }
  });
  return total;
}; //Cart

const checkProductInCart = (cartArr, pid) => {
  return pid ? cartArr.find(item => item.productId === pid) : undefined;
};
const checkProductCartQuantity = (cartArr, pid) => {
  const productsInCart = cartArr.filter(item => item.productId === pid);

  if (productsInCart && productsInCart.length > 0) {
    const totalProductQuantityInCart = productsInCart.reduce((total, item) => total + item.cartQuantity, 0);
    return totalProductQuantityInCart;
  } else {
    return 0;
  }
}; //Wishlist

const checkProductInWishlist = (wishlistArr, pid) => {
  return pid ? wishlistArr.find(item => item.id === pid) : undefined;
};

/***/ }),

/***/ "./src/common/useDebound.js":
/*!**********************************!*\
  !*** ./src/common/useDebound.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
}

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! exports provided: formatCurrency, renderParam, formatDate, removeDash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderParam", function() { return renderParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDash", function() { return removeDash; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const formatCurrency = (price, locales = "us-US", currency = "USD") => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency
  }).format(price);
};
const renderParam = (paramName, paramValue) => {
  if (paramValue && paramValue !== "" && paramValue !== null) {
    return `&${paramName}=${paramValue}`;
  }

  return "";
};
const formatDate = (date, inputFormat = "YYYY-MM-DD", outputFormat = "MMM DD, YYYY") => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, inputFormat).format(outputFormat);
};
const removeDash = str => {
  return str.replace(/-/g, " ");
};

/***/ }),

/***/ "./src/common/wishlistServices.js":
/*!****************************************!*\
  !*** ./src/common/wishlistServices.js ***!
  \****************************************/
/*! exports provided: onAddProductToWishlist, onRemoveProductFromWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddProductToWishlist", function() { return onAddProductToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRemoveProductFromWishlist", function() { return onRemoveProductFromWishlist; });
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/wishlist */ "./src/apis/wishlist.js");

const onAddProductToWishlist = ({
  product,
  onSuccess,
  onError
}) => {
  Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["fetchProductIdWishlistData"])(product.id).then(res => {
    if (res.data.length === 0) {
      Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["addWishlistData"])(product).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Add product to wislist failed, please try again", err));
    } else {
      onError && onError("Product already in wishlist");
    }
  }).catch(err => onError && onError("Add product to wislist failed, please try again", err));
};
const onRemoveProductFromWishlist = ({
  productId,
  onSuccess,
  onError
}) => {
  if (productId && productId !== "" && productId !== null) {
    Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["removeWishlistData"])(productId).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Remove product fail, pleaser try again", err));
  }
};

/***/ }),

/***/ "./src/common/withHeaderScroll.js":
/*!****************************************!*\
  !*** ./src/common/withHeaderScroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withHeaderScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\common\\withHeaderScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function withHeaderScroll(WrappedComponent) {
  return function (props) {
    const headerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    const {
      0: scroll,
      1: setScroll
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    const {
      0: isHeaderFixed,
      1: setIsHeaderFixed
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (scroll >= headerRef.current.offsetHeight) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    }, [scroll]);

    function handleScroll() {
      setScroll(window.scrollY);
    }

    return __jsx("div", {
      ref: headerRef,
      className: `header ${classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        fixed: isHeaderFixed
      }, props.className)}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, __jsx(WrappedComponent, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    })));
  };
}

/***/ }),

/***/ "./src/components/detail/product/ProductDetailLayout.js":
/*!**************************************************************!*\
  !*** ./src/components/detail/product/ProductDetailLayout.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/ProductDetailImages */ "./src/components/detail/product/elements/ProductDetailImages.js");
/* harmony import */ var _elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/ProductDetailContent */ "./src/components/detail/product/elements/ProductDetailContent.js");
/* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/ProductDetailTab */ "./src/components/detail/product/elements/ProductDetailTab.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\detail\\product\\ProductDetailLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function ProductDetailLayout({
  data,
  type,
  hideTab,
  style
}) {
  if (type === "fluid") {
    return __jsx("div", {
      className: "product-detail",
      style: style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      gutter: 30,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx(_elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "column",
      images: data.images,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 14,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, __jsx(_elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "fluid",
      data: data,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 24,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, !hideTab && __jsx(_elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fullDescription: data.fullDescription,
      specifications: data.specifications,
      reviews: data.reviews,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }))));
  }

  return __jsx("div", {
    className: "product-detail",
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    images: data.images,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 24,
    md: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, !hideTab && __jsx(_elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fullDescription: data.fullDescription,
    specifications: data.specifications,
    reviews: data.reviews,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailLayout));

/***/ }),

/***/ "./src/components/detail/product/elements/ProductDetailContent.js":
/*!************************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailContent.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetailContent; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../other/QuantitySelector */ "./src/components/other/QuantitySelector.js");
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
/* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/cartServices */ "./src/common/cartServices.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











function ProductDetailContent({
  data,
  type
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: currentQuantity,
    1: setCurrentQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: addToCartLoading,
    1: setAddToCartLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cartReducer);
  const compareState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.compareReducer);
  const productInCompare = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["checkProductInWishlist"])(compareState, data.id);
  const avaiableQuantity = data.quantity - Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["checkProductCartQuantity"])(cartState.data, data.id);
  console.log(avaiableQuantity);

  const onAddToCart = (product, quantity) => {
    if (addToCartLoading) {
      return;
    }

    setAddToCartLoading(true);
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_8__["onAddProductToCart"])({
      product,
      quantity,
      onSuccess: data => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("Product added to cart");
        dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["fetchCartRequest"])());
      },
      onError: (mes, err) => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(mes);
        console.log(err);
      }
    });
  };

  const onAddToCompare = product => {
    if (productInCompare) {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__["removeFromCompare"])(product.id));
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error("Product removed from compare");
    } else {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__["addToCompare"])(product));
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("Product added to compare");
    }
  };

  if (type === "fluid") {
    return __jsx("div", {
      className: "product-detail-content -wide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      xs: 24,
      sm: 24,
      xl: 16,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "product-detail-content__left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx("h5", {
      className: "product-type",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, data.category), __jsx("h2", {
      className: "product-detail-content__name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, data.name), __jsx("div", {
      className: "product-detail-content__description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem")), __jsx("ul", {
      className: "product-detail-content__meta",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, "SKU:"), " A1359"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, "Categories:"), " Fastfood"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 19
      }
    }, "Tag:"), " Food, Organic")), __jsx("div", {
      className: "product-detail-content__share",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, "Share link:"), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      xs: 24,
      sm: 24,
      xl: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "product-detail-content__right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "product-detail-content__delivery",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, "Free delivery"), __jsx("h3", {
      className: "product-detail-content__price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    }, data.discount && __jsx("del", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 35
      }
    }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("div", {
      className: "product-detail-content__price-discount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 19
      }
    }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Rate"], {
      defaultValue: data.rate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    })))), __jsx(_other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onChange: val => setCurrentQuantity(val),
      max: avaiableQuantity,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "product-detail-content__actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      loading: addToCartLoading,
      onClick: () => onAddToCart(data, currentQuantity),
      shape: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, "Add to cart"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      onClick: () => onAddToCompare(data),
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        active: productInCompare
      }),
      shape: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, "Add to compare")), __jsx("ul", {
      className: "product-detail-content__benefits",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }, "Satisfaction 100% Guaranteed"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, "Free shipping on orders over $99"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, "14 day easy Return"))))));
  }

  return __jsx("div", {
    className: "product-detail-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }
  }, __jsx("h5", {
    className: "product-type",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, data.category), __jsx("h2", {
    className: "product-detail-content__name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, data.name), __jsx("p", {
    className: "product-detail-content__description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"), __jsx("div", {
    className: "product-detail-content__delivery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, "Free delivery"), __jsx("h3", {
    className: "product-detail-content__price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, data.discount && __jsx("del", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 27
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("div", {
    className: "product-detail-content__price-discount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Rate"], {
    defaultValue: data.rate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  })))), __jsx(_other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: val => setCurrentQuantity(val),
    max: avaiableQuantity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "product-detail-content__actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    loading: addToCartLoading,
    onClick: () => onAddToCart(data, currentQuantity),
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, "Add to cart"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: () => onAddToCompare(data),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: productInCompare
    }),
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, "Add to compare")), __jsx("div", {
    className: "product-detail-content__share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, "Share link:"), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  })));
}

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProductDetailContent);

/***/ }),

/***/ "./src/components/detail/product/elements/ProductDetailImages.js":
/*!***********************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailImages.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function ProductDetailImages({
  type,
  images
}) {
  const slider1Settings = {
    arrows: false
  };
  const slider2Settings = {
    arrows: false,
    slidesToShow: 3,
    focusOnSelect: true,
    vertical: type === "column" ? true : false,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [{
      breakpoint: 992,
      settings: {
        vertical: type === "column" && false
      }
    }]
  };
  const {
    0: nav1,
    1: setNav1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: nav2,
    1: setNav2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(); // if (type === "column") {
  //   return <h1>Column</h1>;
  // }

  return __jsx("div", {
    className: `product-detail-images ${classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "-column": type === "column"
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-detail-images-big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    asNavFor: nav2,
    ref: c => setNav1(c)
  }, slider1Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), images && images.map((img, index) => __jsx("div", {
    key: index,
    className: "slide-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "product-detail-images-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    asNavFor: nav1,
    ref: c => setNav2(c)
  }, slider2Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), images && images.map((img, index) => __jsx("div", {
    key: index,
    className: "slide-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailImages));

/***/ }),

/***/ "./src/components/detail/product/elements/ProductDetailTab.js":
/*!********************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailTab.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailTab.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];

const ReviewItem = ({
  data
}) => {
  console.log(data);
  return __jsx("div", {
    className: "product-detail-tab__reviews-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-detail-tab__reviews-item__avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "" + data.user.avatar,
    alt: "Customer avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    defaultValue: 5,
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "product-detail-tab__reviews-item__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, data.commentDate), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, data.user.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, data.review)));
};

function ProductDetailTab({
  fullDescription,
  specifications,
  reviews
}) {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return __jsx("div", {
    className: "product-detail-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "1",
    type: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(TabPane, {
    tab: "Description",
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-detail-tab__description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, fullDescription)), __jsx(TabPane, {
    tab: "Specifications",
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-detail-tab__specifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "Weight"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, specifications.weight)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, "Dimensions"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, specifications.dimensions.long, " x", " ", specifications.dimensions.width, " x", " ", specifications.dimensions.height)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, "Color"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, specifications.color)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, "Size"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, specifications.size)))))), __jsx(TabPane, {
    tab: "Reviews",
    key: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-detail-tab__reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, reviews.map((item, index) => __jsx(ReviewItem, {
    key: index,
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "product-detail-tab__reviews-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "Add Review"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "review",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 15,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "name",
    rules: [{
      required: true,
      message: "Please input your name!"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "email",
    rules: [{
      required: true,
      message: "Please input your email!"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "rate",
    label: "Your rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    placeholder: "Message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }, "Submit Review"))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailTab));

/***/ }),

/***/ "./src/components/footer/FooterFluid.js":
/*!**********************************************!*\
  !*** ./src/components/footer/FooterFluid.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/footer-links.json */ "./src/data/footer-links.json");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/footer-links.json */ "./src/data/footer-links.json", 1);
/* harmony import */ var _elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/FooterQuickLinks */ "./src/components/footer/elements/FooterQuickLinks.js");
/* harmony import */ var _elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/FooterInfomation */ "./src/components/footer/elements/FooterInfomation.js");
/* harmony import */ var _elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/FooterSubcribeInput */ "./src/components/footer/elements/FooterSubcribeInput.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\footer\\FooterFluid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function FooterFluid() {
  return __jsx("div", {
    className: "footer -fluid -style-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "footer-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 15,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 9,
    lg: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 15,
    lg: 13,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
    colSize: {
      span: 8
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer-subcribe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "footer-subcribe__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, "Join Our Newsletter Now"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }
  }, "Get E-mail updates about our latest shop and special offers.")), __jsx(_elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    url: "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  })))))), __jsx("div", {
    className: "footer-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-bottom__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Copyright \xA9 2019 Ogami - All Rights Reserved."), __jsx("img", {
    src: "" + "/assets/images/footer/payment.png",
    alt: "Payment methods",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FooterFluid));

/***/ }),

/***/ "./src/components/footer/elements/FooterInfomation.js":
/*!************************************************************!*\
  !*** ./src/components/footer/elements/FooterInfomation.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterInfomation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\footer\\elements\\FooterInfomation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function FooterInfomation() {
  return __jsx("div", {
    className: "footer-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "footer-info__logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, "E-Shoper"))), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Address: 60-49 Road 11378 New York"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Phone: +65 11.188.888"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Email: info.E-shoper@gmail.com")), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "primary",
    shape: "circle",
    className: "-btn-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/footer/elements/FooterQuickLinks.js":
/*!************************************************************!*\
  !*** ./src/components/footer/elements/FooterQuickLinks.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/footer-links.json */ "./src/data/footer-links.json");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/footer-links.json */ "./src/data/footer-links.json", 1);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\footer\\elements\\FooterQuickLinks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function FooterQuickLinks({
  colSize
}) {
  return __jsx("div", {
    className: "footer-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 10,
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], _extends({
    key: index
  }, colSize, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "footer-links__group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, item.title), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, item.items.map((link, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + link.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 23
    }
  }, " ", link.title)), " "))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FooterQuickLinks));

/***/ }),

/***/ "./src/components/footer/elements/FooterSubcribeInput.js":
/*!***************************************************************!*\
  !*** ./src/components/footer/elements/FooterSubcribeInput.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterSubcribeInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mailchimp-subscribe */ "react-mailchimp-subscribe");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\footer\\elements\\FooterSubcribeInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CustomForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  status,
  message,
  onValidated
}) => {
  const onFinish = value => {
    console.log("Success:", value);
    value && onValidated({
      EMAIL: value.email
    });
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    name: "basic",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    className: "footer-subcribe__form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    name: "email",
    rules: [{
      type: "email",
      message: "The input is not valid E-mail!"
    }, {
      required: true,
      message: "Please input your E-mail!"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Enter your email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "link",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "SUBSCRIBE"))), status === "sending" && __jsx("div", {
    style: {
      color: "blue"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 32
    }
  }, "sending..."), status === "error" && __jsx("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), status === "success" && __jsx("div", {
    style: {
      color: "green"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }));
});
function FooterSubcribeInput({
  url
}) {
  return __jsx(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default.a, {
    url: url,
    render: ({
      subscribe,
      status,
      message
    }) => __jsx(CustomForm, {
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./src/components/header/HeaderTwo.js":
/*!********************************************!*\
  !*** ./src/components/header/HeaderTwo.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderTwo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu_MenuTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/MenuTwo */ "./src/components/header/menu/MenuTwo.js");
/* harmony import */ var _top_nav_TopNavOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-nav/TopNavOne */ "./src/components/header/top-nav/TopNavOne.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\header\\HeaderTwo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function HeaderTwo() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_top_nav_TopNavOne__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerFluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_menu_MenuTwo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    containerFluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/header/elements/FunctionItems.js":
/*!*********************************************************!*\
  !*** ./src/components/header/elements/FunctionItems.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/shopUtils */ "./src/common/shopUtils.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\header\\elements\\FunctionItems.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function FunctionItems({
  hideTotal,
  hideWishlist
}) {
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cartReducer);
  return __jsx("div", {
    className: "function-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, !hideWishlist && __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/shop/wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "function-items-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "icon_heart_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/shop/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "function-items-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "icon_bag_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), !hideTotal && (cartState.data ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_4__["calculateTotalPrice"])(cartState.data))) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(0))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(FunctionItems));

/***/ }),

/***/ "./src/components/header/elements/MobileMenuOpener.js":
/*!************************************************************!*\
  !*** ./src/components/header/elements/MobileMenuOpener.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MobileNavigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileNavigator */ "./src/components/header/elements/MobileNavigator.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\header\\elements\\MobileMenuOpener.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function MobileMenuOpener() {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onShowDrawer = () => {
    setVisible(true);
  };

  const onCloseDrawer = () => {
    setVisible(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
    onClick: onShowDrawer,
    className: "menu-mobile-opener",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "fas fa-bars",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    title: "Close",
    placement: "right",
    closable: true,
    onClose: onCloseDrawer,
    visible: visible,
    placement: "left",
    width: 320,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_MobileNavigator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MobileMenuOpener));

/***/ }),

/***/ "./src/components/header/elements/MobileNavigator.js":
/*!***********************************************************!*\
  !*** ./src/components/header/elements/MobileNavigator.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/navigator.json */ "./src/data/navigator.json");
var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/navigator.json */ "./src/data/navigator.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\header\\elements\\MobileNavigator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function MobileNavigator() {
  const {
    SubMenu
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("mail");

  const handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  return __jsx("div", {
    className: "menu-mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    className: "menu-mobile-navigator",
    onClick: handleClick,
    selectedKeys: [current],
    mode: "inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(SubMenu, {
    key: "homepage",
    title: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.subMenu.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, " ", item.title))))), __jsx(SubMenu, {
    key: "shop",
    title: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(SubMenu, {
    key: "shop layout",
    title: "Layout shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.layout.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, " ", item.title))))), __jsx(SubMenu, {
    key: "shop detail",
    title: "Detail shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.detail.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, " ", item.title))))), __jsx(SubMenu, {
    key: "shop pages",
    title: "Pages shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.pages.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, " ", item.title)))))), __jsx(SubMenu, {
    key: "pages",
    title: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.subMenu.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, " ", item.title))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "alipay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://ant.design",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title)))), __jsx("div", {
    className: "menu-mobile-functions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/other/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "menu-mobile-functions__login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "Login / Register")), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MobileNavigator));

/***/ }),

/***/ "./src/components/header/elements/Navigator.js":
/*!*****************************************************!*\
  !*** ./src/components/header/elements/Navigator.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/navigator.json */ "./src/data/navigator.json");
var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/navigator.json */ "./src/data/navigator.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\header\\elements\\Navigator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Navigator() {
  const {
    SubMenu
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("mail");

  const handleClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return __jsx("ul", {
    className: "navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("li", {
    className: "navigation-item -toggleable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.title)), __jsx("ul", {
    className: "navigation-item__submenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.subMenu.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, item.title)))))), __jsx("li", {
    className: "navigation-item -toggleable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.title)), __jsx("ul", {
    className: "navigation-item__submenu -wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "navigation-item__submenu-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Layout shop"), _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.layout.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, item.title))))), __jsx("div", {
    className: "navigation-item__submenu-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Detail shop"), _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.detail.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, item.title))))), __jsx("div", {
    className: "navigation-item__submenu-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Pages shop"), _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.pages.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, item.title))))))), __jsx("li", {
    className: "navigation-item -toggleable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.title)), __jsx("ul", {
    className: "navigation-item__submenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.subMenu.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, item.title)))))), __jsx("li", {
    className: "navigation-item -toggleable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.title)), __jsx("ul", {
    className: "navigation-item__submenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.subMenu.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, item.title)))))), __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Navigator));

/***/ }),

/***/ "./src/components/header/elements/SearchForm.js":
/*!******************************************************!*\
  !*** ./src/components/header/elements/SearchForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/categories.json */ "./src/data/categories.json");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/categories.json */ "./src/data/categories.json", 1);
/* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/useDebound */ "./src/common/useDebound.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\header\\elements\\SearchForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function SearchForm({
  enterButton = "Search",
  hideSelect
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: currentSearch,
    1: setCurrentSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: currentCategory,
    1: setCurrentCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const deboundValue = Object(_common_useDebound__WEBPACK_IMPORTED_MODULE_5__["default"])(currentSearch, 300);
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shopReducer);
  const {
    searchedProducts
  } = shopState;

  const onChange = val => {
    setCurrentSearch(val);
  };

  const onSelectOption = (value, option) => {
    setCurrentSearch(value);
  };

  const onSearch = val => {
    if (!currentSearch || currentSearch === "") {
      return;
    } else {
      router.push({
        pathname: "" + "/shop/shop-3-column",
        query: {
          q: currentSearch
        }
      });
    }
  };

  const onChooseCateogry = val => {
    setCurrentCategory(val);
  };

  const options = searchedProducts.data.length > 0 && searchedProducts.data.map(item => ({
    value: item.name
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__["fetchSearchedProductRequest"])({
      input: currentSearch,
      limit: 10,
      category: currentCategory
    }));
  }, [deboundValue, currentCategory]);
  return __jsx("div", {
    className: "search-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "search-form-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, !hideSelect && __jsx("div", {
    className: "search-form-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: currentCategory,
    suffixIcon: __jsx("i", {
      className: "far fa-angle-down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 27
      }
    }),
    bordered: false,
    onChange: onChooseCateogry,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(Option, {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "All categories"), _data_categories_json__WEBPACK_IMPORTED_MODULE_4__.map((item, index) => __jsx(Option, {
    key: index,
    value: item.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, item.name)))), __jsx("div", {
    className: "search-form-input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    backfill: true,
    value: currentSearch,
    onSelect: onSelectOption,
    onChange: onChange,
    options: options,
    filterOption: (inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
    placeholder: "What do you need",
    size: "large",
    enterButton: enterButton,
    bordered: false,
    loading: searchedProducts.loading,
    onSearch: onSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SearchForm));

/***/ }),

/***/ "./src/components/header/menu/MenuTwo.js":
/*!***********************************************!*\
  !*** ./src/components/header/menu/MenuTwo.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuTwo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _elements_Navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/Navigator */ "./src/components/header/elements/Navigator.js");
/* harmony import */ var _elements_FunctionItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/FunctionItems */ "./src/components/header/elements/FunctionItems.js");
/* harmony import */ var _elements_MobileMenuOpener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/MobileMenuOpener */ "./src/components/header/elements/MobileMenuOpener.js");
/* harmony import */ var _elements_SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/SearchForm */ "./src/components/header/elements/SearchForm.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\header\\menu\\MenuTwo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function MenuTwo({
  containerFluid
}) {
  return __jsx("div", {
    className: "menu -style-two",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fluid: containerFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "menu-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_elements_MobileMenuOpener__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "menu-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "E-Shoper"))), __jsx(_elements_SearchForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    enterButton: __jsx("i", {
      className: "icon_search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 36
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx(_elements_Navigator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx(_elements_FunctionItems__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/header/top-nav/TopNavOne.js":
/*!****************************************************!*\
  !*** ./src/components/header/top-nav/TopNavOne.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopNavOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\header\\top-nav\\TopNavOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const flagData = [{
  name: "english",
  image: "/assets/images/header/flag-usa.png"
}, {
  name: "japanese",
  image: "/assets/images/header/flag-jp.png"
}, {
  name: "vietnamese",
  image: "/assets/images/header/flag-vn.png"
}];
function TopNavOne({
  containerFluid
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_3__["Select"];
  return __jsx("div", {
    className: "top-nav-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fluid: containerFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "top-nav-one-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "top-nav-one-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fas fa-envelope",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), "info.E-shoper@gmail.com"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fas fa-phone-alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), "+65 11.188.888"))), __jsx("div", {
    className: "top-nav-one-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "top-nav-one-right__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "top-nav-one-right__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: "english",
    width: 125,
    bordered: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, flagData.map((item, index) => __jsx(Option, {
    key: index,
    value: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, __jsx("img", {
    style: {
      height: 13 / 16 + "em",
      width: 20 / 16 + "em",
      objectFit: "contain",
      marginTop: -3 / 16 + "em",
      marginRight: 5 / 16 + "em"
    },
    src: "" + item.image,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), item.name)))), __jsx("div", {
    className: "top-nav-one-right__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "" + "/auth/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }), "Login")))))));
}

/***/ }),

/***/ "./src/components/layout/LayoutTwo.js":
/*!********************************************!*\
  !*** ./src/components/layout/LayoutTwo.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_HeaderTwo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/HeaderTwo */ "./src/components/header/HeaderTwo.js");
/* harmony import */ var _common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/withHeaderScroll */ "./src/common/withHeaderScroll.js");
/* harmony import */ var _footer_FooterFluid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/FooterFluid */ "./src/components/footer/FooterFluid.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\layout\\LayoutTwo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ScrolledHeader = Object(_common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_4__["default"])(_header_HeaderTwo__WEBPACK_IMPORTED_MODULE_3__["default"]);

function LayoutOne({
  title,
  children
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, title)), __jsx(ScrolledHeader, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), children, __jsx(_footer_FooterFluid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(LayoutOne));

/***/ }),

/***/ "./src/components/other/Benefits.js":
/*!******************************************!*\
  !*** ./src/components/other/Benefits.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/benefits.json */ "./src/data/benefits.json");
var _data_benefits_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/benefits.json */ "./src/data/benefits.json", 1);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\other\\Benefits.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function Benefits({
  containerFluid,
  column,
  threeCol,
  style,
  className
}) {
  const renderCol = () => {
    return threeCol ? {
      xs: 24,
      md: 8
    } : column ? {
      xs: 24,
      sm: 12,
      md: 6,
      lg: 24
    } : {
      xs: 24,
      md: 6
    };
  };

  const col = renderCol();
  return __jsx("div", {
    className: `benefits ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      "-column": column
    })}`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "benefits-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__.slice(0, threeCol ? 3 : _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__.length).map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
    key: index
  }, renderCol(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "benefits-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "benefits-item__image",
    src: "" + item.iconSrc,
    alt: "Benefit icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }), __jsx("h5", {
    className: "benefits-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, item.name), __jsx("p", {
    className: "benefits-item__description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, item.description)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Benefits));

/***/ }),

/***/ "./src/components/other/Container.js":
/*!*******************************************!*\
  !*** ./src/components/other/Container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\other\\Container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Container({
  fluid,
  children
}) {
  return __jsx("div", {
    className: fluid ? "container-fluid" : "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./src/components/other/FetchDataHandle.js":
/*!*************************************************!*\
  !*** ./src/components/other/FetchDataHandle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FetchDataHandle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\other\\FetchDataHandle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FetchDataHandle({
  data,
  errorMessage = "Get products fail, please try again",
  emptyDescription = "No product in this category",
  renderData
}) {
  return data.loading ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }) : data.error ? __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, errorMessage) : data.data.length > 0 ? renderData && renderData(data.data) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: emptyDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./src/components/other/QuantitySelector.js":
/*!**************************************************!*\
  !*** ./src/components/other/QuantitySelector.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/useDebound */ "./src/common/useDebound.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\other\\QuantitySelector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function QuantitySelector({
  min,
  max,
  defaultValue = 1,
  className,
  onChange,
  onDecrease,
  onIncrease
}) {
  const firstUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue);
  const deboundValue = Object(_common_useDebound__WEBPACK_IMPORTED_MODULE_3__["default"])(value, 300);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    onChange && onChange(value);
  }, [deboundValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const decreaseValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (min && value <= min) {
      return;
    } else {
      if (value <= 1) {
        return;
      }

      onDecrease && onDecrease();
      setValue(value - 1);
    }
  }, [value]);
  const increaseValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (value >= max) {
      return;
    }

    onIncrease && onIncrease();
    setValue(value + 1);
  }, [value]);
  return __jsx("div", {
    className: `quantity-selector ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "quantity-selector-number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, value), __jsx("div", {
    className: "quantity-selector-controller",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    disabled: value <= min || value <= 1,
    onClick: decreaseValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "-"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    disabled: value >= max,
    onClick: increaseValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "+")));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(QuantitySelector));

/***/ }),

/***/ "./src/components/other/SectionTitle.js":
/*!**********************************************!*\
  !*** ./src/components/other/SectionTitle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\other\\SectionTitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SectionTitle({
  title,
  hideDecoration,
  className,
  style
}) {
  return __jsx("div", {
    className: `section-title ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, title), !hideDecoration && __jsx("div", {
    className: "section-title-decoration",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 27
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SectionTitle));

/***/ }),

/***/ "./src/components/other/SocialIcons.js":
/*!*********************************************!*\
  !*** ./src/components/other/SocialIcons.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialIcons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\other\\SocialIcons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SocialIcons({
  className,
  type = "link",
  shape
}) {
  return __jsx("ul", {
    className: `social-icons ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-invision",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-pinterest-p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/product/Product.js":
/*!*******************************************!*\
  !*** ./src/components/product/Product.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-countdown */ "react-countdown");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
/* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/cartServices */ "./src/common/cartServices.js");
/* harmony import */ var _common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/wishlistServices */ "./src/common/wishlistServices.js");
/* harmony import */ var _detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../detail/product/ProductDetailLayout */ "./src/components/detail/product/ProductDetailLayout.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\product\\Product.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function Product({
  data,
  className,
  type,
  countdownLast = 100000000
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: addToCartLoading,
    1: setAddToCartLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: addToWishlistLoading,
    1: setAddToWishlistLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.cartReducer);
  const wishlistState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.wishlistReducer);
  const compareState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.compareReducer);
  const productInWishlist = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_8__["checkProductInWishlist"])(wishlistState.data, data.id);
  const productInCompare = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_8__["checkProductInWishlist"])(compareState, data.id);

  const showModal = () => {
    setModalVisible(true);
  };

  const onModalClose = e => {
    setModalVisible(false);
  };

  const onAddToCart = product => {
    if (addToCartLoading) {
      return;
    }

    setAddToCartLoading(true);
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_12__["onAddProductToCart"])({
      product,
      onSuccess: data => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to cart");
        dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["fetchCartRequest"])());
      },
      onError: (mes, err) => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
      }
    });
  };

  const onAddWishlist = product => {
    if (addToWishlistLoading) {
      return;
    }

    setAddToWishlistLoading(true);

    if (!productInWishlist) {
      Object(_common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__["onAddProductToWishlist"])({
        product,
        onSuccess: data => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to wishlist");
          dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__["fetchWishListRequest"])());
        },
        onError: (mes, err) => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
          console.log(err);
        }
      });
    } else {
      Object(_common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__["onRemoveProductFromWishlist"])({
        productId: product.id,
        onSuccess: data => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from wishlist");
          dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__["fetchWishListRequest"])());
        },
        onError: (mes, err) => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
          console.log(err);
        }
      });
    }
  };

  const onAddToCompare = product => {
    if (productInCompare) {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__["removeFromCompare"])(product.id));
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from compare");
    } else {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__["addToCompare"])(product));
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to compare");
    }
  };

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const rederProductType = type => {
    switch (type) {
      case "tiny":
        return __jsx("div", {
          className: `product-tiny ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-tiny-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 19
          }
        })))), __jsx("div", {
          className: "product-tiny-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-tiny-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-tiny-price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))));

      case "dale":
        return __jsx("div", {
          className: `product-dale ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-dale-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 19
          }
        })))), __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
          date: Date.now() + getRandomArbitrary(100000000, 150000000),
          renderer: ({
            days,
            hours,
            minutes,
            seconds
          }) => {
            return __jsx("div", {
              className: "product-dale-countdown",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 19
              }
            }, __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(days)), " ", __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 48
              }
            }, "days")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(hours)), " ", __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 49
              }
            }, "hr")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(minutes), " "), __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 23
              }
            }, "min")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(seconds)), " ", __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 51
              }
            }, "sec")));
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }
        }), __jsx("div", {
          className: "product-dale-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-dale-type",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-dale-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-dale-price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-dale-select",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to wishlist",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddWishlist(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInWishlist
          })}`,
          type: "primary",
          shape: "round",
          icon: addToWishlistLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-heart",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to cart",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: addToCartLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-shopping-bag",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to compare",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })}`,
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-random",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Quick view",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: showModal,
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 17
          }
        }))));

      case "list":
        return __jsx("div", {
          className: "product-list",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 19
          }
        }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          onClick: showModal,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 15
          }
        }, "Quick view")), __jsx("div", {
          className: "product-list-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-type",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 17
          }
        }, data.name)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"], {
          className: "product-rate",
          disabled: true,
          defaultValue: data.rate,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 15
          }
        }), __jsx("p", {
          className: "product-description",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 15
          }
        }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor niam"), data.quantity > 0 ? __jsx("h5", {
          className: "product-availability -instock",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 17
          }
        }, "Availability: ", __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 33
          }
        }, " ", data.quantity, " in stock")) : __jsx("h5", {
          className: "product-availability -outstock",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 17
          }
        }, "Availability: ", __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 33
          }
        }, " Out stock"))), __jsx("div", {
          className: "product-list-actions",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "product-detail-content__delivery",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 15
          }
        }, "Free delivery"), __jsx("h3", {
          className: "product-detail-content__price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 15
          }
        }, data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)), __jsx("div", {
          className: "product-detail-content__price-discount",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 17
          }
        }, __jsx("h5", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 19
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-detail-content__actions",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          loading: addToCartLoading,
          shape: "round",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 17
          }
        }, "Add to cart"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          shape: "round",
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 17
          }
        }, "Add to compare"))));

      default:
        return __jsx("div", {
          className: `product ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 19
          }
        })))), __jsx("div", {
          className: "product-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-type",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-select",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 13
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to wishlist",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddWishlist(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInWishlist
          })}`,
          type: "primary",
          shape: "round",
          icon: addToWishlistLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-heart",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to cart",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: addToCartLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-shopping-bag",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 385,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to compare",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })}`,
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-random",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Quick view",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: showModal,
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 407,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 402,
            columnNumber: 17
          }
        }))));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, rederProductType(type), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    visible: modalVisible,
    onCancel: onModalClose,
    footer: null,
    header: null,
    width: 860,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 7
    }
  }, __jsx(_detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      marginBottom: 0
    },
    hideTab: true,
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Product));

/***/ }),

/***/ "./src/components/sections/banner/BannerOne.js":
/*!*****************************************************!*\
  !*** ./src/components/sections/banner/BannerOne.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\sections\\banner\\BannerOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function BannerOne({
  data
}) {
  return __jsx("div", {
    className: "banner-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [30, 30],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, data.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    key: index,
    sm: 24,
    lg: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "banner-one-item up-down-anim-hover",
    style: {
      backgroundImage: `url('${"" + item.background}')`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    align: "middle",
    justify: "space-around",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    sm: 24,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "banner-one-item__img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "" + item.image,
    alt: "Introduction image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    sm: 24,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "banner-one-item__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 23
    }
  }, item.content.main, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, " ", item.content.span)), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/shop/shop-3-column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "" + "/shop/shop-3-column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 27
    }
  }, "Shop now"))))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(BannerOne));

/***/ }),

/***/ "./src/components/sections/dale-of-week/DowTwo.js":
/*!********************************************************!*\
  !*** ./src/components/sections/dale-of-week/DowTwo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countdown */ "react-countdown");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\sections\\dale-of-week\\DowTwo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function DowTwo({
  countdownLast
}) {
  return __jsx("div", {
    className: "dow-two",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    align: "middle",
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    sm: 24,
    lg: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "dow-two-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Deal Of The Week",
    hideDecoration: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elitt incididunt ut labore"), __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    date: Date.now() + countdownLast,
    renderer: ({
      days,
      hours,
      minutes,
      seconds
    }) => {
      return __jsx("div", {
        className: "dow-two-countdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "dow-two-countdown-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 23
        }
      }, __jsx("h6", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_3__["zeroPad"])(days)), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 50
        }
      }, "days")), __jsx("div", {
        className: "dow-two-countdown-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 23
        }
      }, __jsx("h6", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_3__["zeroPad"])(hours)), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 51
        }
      }, "hr")), __jsx("div", {
        className: "dow-two-countdown-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 23
        }
      }, __jsx("h6", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_3__["zeroPad"])(minutes), " "), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }
      }, "min")), __jsx("div", {
        className: "dow-two-countdown-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 23
        }
      }, __jsx("h6", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_3__["zeroPad"])(seconds)), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 53
        }
      }, "sec")));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/shop/shop-3-column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "" + "/shop/shop-3-column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, "Shop now"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    lg: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, " ", __jsx("div", {
    className: "dow-two-img up-down-anim",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/sections/dale-of-week/two/1.png",
    alt: "Dale of the week image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(DowTwo));

/***/ }),

/***/ "./src/components/sections/hero-slider/HeroSliderTwo.js":
/*!**************************************************************!*\
  !*** ./src/components/sections/hero-slider/HeroSliderTwo.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/utils */ "./src/common/utils.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\sections\\hero-slider\\HeroSliderTwo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function HeroSliderTwo({
  containerFluid,
  data
}) {
  return __jsx("div", {
    className: "hero-slider -single -style-two",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: containerFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "hero-slider-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "hero-slider-background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "" + data.background,
    alt: "Hero slider background image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "hero-slider-content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "center",
    align: "middle",
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "hero-slider-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 19
    }
  }, data.subTitle), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }
  }, data.title), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 19
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price.main), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "/", data.price.unit)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "" + "/shop/shop-3-column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "" + "/shop/shop-3-column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 23
    }
  }, "Shop now"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "hero-slider-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "" + "/assets/images/hero-slider/one/1.png",
    alt: "Hero slider image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  })))))), __jsx("div", {
    className: "hero-slider-subitems",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 15,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, Array.from(Array(3), (e, i) => {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      key: i,
      sm: 8,
      md: 12,
      lg: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "" + "/shop/shop-3-column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: "" + "/shop/shop-3-column",
      className: "zoom-in",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "" + `/assets/images/hero-slider/two/${i + 1}.png`,
      alt: "Hero slider sub item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 23
      }
    }))));
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(HeroSliderTwo));

/***/ }),

/***/ "./src/components/sections/product-thumb/ProductGrid.js":
/*!**************************************************************!*\
  !*** ./src/components/sections/product-thumb/ProductGrid.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../product/Product */ "./src/components/product/Product.js");
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
/* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\sections\\product-thumb\\ProductGrid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function ProductGrid({
  style,
  productClassName,
  productCol,
  productType,
  data,
  headerTitle,
  headerClass,
  hideHeader,
  fiveCol,
  className,
  gutter = [{
    xs: 0,
    md: 15
  }, {
    xs: 0,
    md: 15
  }]
}) {
  return __jsx("div", {
    className: `product-grid ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, !hideHeader && __jsx("div", {
    className: `product-grid-header ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(headerClass)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: headerTitle,
    hideDecoration: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "product-grid-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    renderData: data => __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      gutter: gutter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, data.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], _extends({
      key: index
    }, productCol, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "five-col": fiveCol
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }), __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: productType,
      className: productClassName,
      data: item,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 19
      }
    })))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProductGrid));

/***/ }),

/***/ "./src/components/sections/product-thumb/ProductTab.js":
/*!*************************************************************!*\
  !*** ./src/components/sections/product-thumb/ProductTab.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product/Product */ "./src/components/product/Product.js");
/* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js");
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\components\\sections\\product-thumb\\ProductTab.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function ProductTab({
  style,
  data,
  className,
  onTabChange,
  productClassName,
  headerCategories,
  headerTitle,
  headerClass,
  showTitleDecoration = false,
  headerType = "grid",
  productCol
}) {
  const {
    TabPane
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];

  const onChooseCategory = key => {
    onTabChange(key);
  };

  const renderTabContent = () => __jsx(_other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    renderData: data => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      gutter: [{
        xs: 0,
        md: 15
      }, {
        xs: 0,
        md: 15
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, data.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
      key: index
    }, productCol, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }), __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: productClassName,
      data: item,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    })))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  });

  return __jsx("div", {
    className: `product-tab ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `product-tab-header ${headerType === "row" ? "-style-two" : "style-one"}  ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(headerClass)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, headerType === "grid" && __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: headerTitle,
    className: "-center",
    hideDecoration: showTitleDecoration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    tabBarExtraContent: headerType === "row" ? {
      left: __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: headerTitle,
        className: "-center",
        hideDecoration: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      })
    } : null,
    defaultActiveKey: "1",
    centered: headerType === "row" ? false : true,
    onChange: onChooseCategory,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(TabPane, {
    tab: "All",
    key: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, renderTabContent()), headerCategories.map((item, index) => __jsx(TabPane, {
    tab: item,
    key: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, renderTabContent())))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductTab));

/***/ }),

/***/ "./src/data/benefits.json":
/*!********************************!*\
  !*** ./src/data/benefits.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"iconSrc\":\"/assets/images/other/benefits/1.png\",\"name\":\"FREE SHIPPING\",\"description\":\"For all order over 99$\"},{\"iconSrc\":\"/assets/images/other/benefits/2.png\",\"name\":\"DELIVERY ON TIME\",\"description\":\"If good have prolems\"},{\"iconSrc\":\"/assets/images/other/benefits/3.png\",\"name\":\"SECURE PAYMENT\",\"description\":\"100% secure payment\"},{\"iconSrc\":\"/assets/images/other/benefits/4.png\",\"name\":\"24/7 SUPPORT\",\"description\":\"Dedicated support\"}]");

/***/ }),

/***/ "./src/data/categories.json":
/*!**********************************!*\
  !*** ./src/data/categories.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"bread\",\"value\":\"bread\"},{\"name\":\"fastfood\",\"value\":\"fast-food\"},{\"name\":\"fresh meat\",\"value\":\"fresh-meat\"},{\"name\":\"ocean foods\",\"value\":\"ocean-foods\"},{\"name\":\"oranges\",\"value\":\"oranges\"},{\"name\":\"organic drinks\",\"value\":\"organic-drinks\"},{\"name\":\"vegetables\",\"value\":\"vegetables\"}]");

/***/ }),

/***/ "./src/data/footer-links.json":
/*!************************************!*\
  !*** ./src/data/footer-links.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"INFOMATION\",\"items\":[{\"title\":\"About us\",\"href\":\"/other/about-us\"},{\"title\":\"Check out\",\"href\":\"/shop/checkout\"},{\"title\":\"Contact\",\"href\":\"/other/contact-us\"},{\"title\":\"Service\",\"href\":\"#\"}]},{\"title\":\"MY ACCOUNT\",\"items\":[{\"title\":\"My account\",\"href\":\"#\"},{\"title\":\"Contact\",\"href\":\"/other/contact-us\"},{\"title\":\"Shop Cart\",\"href\":\"/shop/cart\"},{\"title\":\"Tracking Order\",\"href\":\"#\"}]},{\"title\":\"QUICK SHOP\",\"items\":[{\"title\":\"About us\",\"href\":\"/other/about-us\"},{\"title\":\"Check out\",\"href\":\"/shop/checkout\"},{\"title\":\"Contact\",\"href\":\"/other/contact-us\"},{\"title\":\"Service\",\"href\":\"#\"}]}]");

/***/ }),

/***/ "./src/data/navigator.json":
/*!*********************************!*\
  !*** ./src/data/navigator.json ***!
  \*********************************/
/*! exports provided: HOME, SHOP, BLOG, PAGES, ABOUT, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"HOME\":{\"title\":\"Home\",\"href\":\"#\",\"subMenu\":[{\"title\":\"Homepage 1\",\"href\":\"/\"},{\"title\":\"Homepage 2\",\"href\":\"/homepages/homepage2\"},{\"title\":\"Homepage 3\",\"href\":\"/homepages/homepage3\"},{\"title\":\"Homepage 4\",\"href\":\"/homepages/homepage4\"},{\"title\":\"Homepage 5\",\"href\":\"/homepages/homepage5\"}]},\"SHOP\":{\"title\":\"Shop\",\"href\":\"/shop/shop-grid-3-column\",\"subMenu\":{\"layout\":[{\"title\":\"Shop Fullwidth\",\"href\":\"/shop/shop-fullwidth\"},{\"title\":\"Shop 3 Column\",\"href\":\"/shop/shop-3-column\"}],\"detail\":[{\"title\":\"Shop Detail Fullwidth\",\"href\":\"/shop/product-detail-fullwidth\"},{\"title\":\"Shop Detail Sidebar\",\"href\":\"/shop/product-detail-sidebar\"}],\"pages\":[{\"title\":\"Checkout\",\"href\":\"/shop/checkout\"},{\"title\":\"Order Complete\",\"href\":\"/shop/order-complete\"},{\"title\":\"Wishlist\",\"href\":\"/shop/wishlist\"},{\"title\":\"Compare\",\"href\":\"/shop/compare\"},{\"title\":\"Cart\",\"href\":\"/shop/cart\"}]}},\"BLOG\":{\"title\":\"Blog\",\"href\":\"/blog/blog-list-sidebar\",\"subMenu\":[{\"title\":\"Blog List Sidebar\",\"href\":\"/blog/blog-list-sidebar\"},{\"title\":\"Blog Grid 2 Column\",\"href\":\"/blog/blog-grid-2-column\"},{\"title\":\"Blog Grid Sidebar\",\"href\":\"/blog/blog-grid-sidebar\"},{\"title\":\"Blog Masonry\",\"href\":\"/blog/blog-masonry\"},{\"title\":\"Blog Grid 1 Column Sidebar\",\"href\":\"/blog/blog-grid-1-column-sidebar\"},{\"title\":\"Blog Detail Sidebar\",\"href\":\"/blog/blog-detail\"}]},\"PAGES\":{\"title\":\"Pages\",\"href\":\"#\",\"subMenu\":[{\"title\":\"Login\",\"href\":\"/auth/login\"},{\"title\":\"Register\",\"href\":\"/auth/register\"},{\"title\":\"FAQ\",\"href\":\"/other/faq\"},{\"title\":\"Coming Soon\",\"href\":\"/other/coming-soon\"},{\"title\":\"Contact Us\",\"href\":\"/other/contact-us\"}]},\"ABOUT\":{\"title\":\"About us\",\"href\":\"/other/about-us\"}}");

/***/ }),

/***/ "./src/data/sections/banner.json":
/*!***************************************!*\
  !*** ./src/data/sections/banner.json ***!
  \***************************************/
/*! exports provided: one, three, four, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"one\":[{\"content\":{\"main\":\"Strawberry Jam 100% Natural Fruit Juice\",\"span\":\"Sale Off 65%\"},\"background\":\"/assets/images/sections/banner/one/bg-1.png\",\"image\":\"/assets/images/sections/banner/one/1.png\"},{\"content\":{\"main\":\"Cake 100% Natural Fruit Juice\",\"span\":\"Sale Off 65%\"},\"background\":\"/assets/images/sections/banner/one/bg-2.png\",\"image\":\"/assets/images/sections/banner/one/2.png\"}],\"three\":[{\"background\":\"/assets/images/sections/banner/three/bg-1.png\",\"image\":\"/assets/images/sections/banner/three/1.png\",\"title\":{\"main\":\"Black friday\",\"bold\":\"Sale off\",\"discount\":\"60%\"}},{\"background\":\"/assets/images/sections/banner/three/bg-2.png\",\"image\":\"/assets/images/sections/banner/three/2.png\",\"title\":{\"main\":\"Summer\",\"bold\":\"Sale off\",\"discount\":\"50%\"}}],\"four\":[{\"type\":\"small\",\"image\":\"/assets/images/sections/banner/four/small-1.png\",\"background\":\"/assets/images/sections/banner/four/small-bg-1.png\"},{\"type\":\"big\",\"image\":\"/assets/images/sections/banner/four/big-1.png\",\"background\":\"/assets/images/sections/banner/four/big-bg-1.png\",\"content\":\"Offer 50% Off The Week\"},{\"type\":\"big\",\"image\":\"/assets/images/sections/banner/four/big-2.png\",\"background\":\"/assets/images/sections/banner/four/big-bg-2.png\",\"content\":\"Offer 60% Off The Week\"},{\"type\":\"small\",\"image\":\"/assets/images/sections/banner/four/small-2.png\",\"background\":\"/assets/images/sections/banner/four/small-bg-2.png\"}]}");

/***/ }),

/***/ "./src/data/sections/hero-slider.json":
/*!********************************************!*\
  !*** ./src/data/sections/hero-slider.json ***!
  \********************************************/
/*! exports provided: one, four, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"one\":[{\"background\":\"/assets/images/hero-slider/one/bg-1.png\",\"subTitle\":\"Fruit Fresh\",\"title\":\"Orange Lemon\",\"price\":{\"main\":\"14\",\"unit\":\"pakage\"}},{\"background\":\"/assets/images/hero-slider/one/bg-2.png\",\"subTitle\":\"Butter & Eggs\",\"title\":\"Spice 100% Oganic\",\"price\":{\"main\":\"16\",\"unit\":\"pakage\"}}],\"four\":[{\"image\":\"/assets/images/hero-slider/four/1.png\",\"background\":\"/assets/images/hero-slider/four/bg-1.png\"},{\"image\":\"/assets/images/hero-slider/four/1.png\",\"background\":\"/assets/images/hero-slider/four/bg-2.png\"}]}");

/***/ }),

/***/ "./src/pages/homepages/homepage2.js":
/*!******************************************!*\
  !*** ./src/pages/homepages/homepage2.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return homepage2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var _components_layout_LayoutTwo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/LayoutTwo */ "./src/components/layout/LayoutTwo.js");
/* harmony import */ var _components_sections_hero_slider_HeroSliderTwo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sections/hero-slider/HeroSliderTwo */ "./src/components/sections/hero-slider/HeroSliderTwo.js");
/* harmony import */ var _components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/sections/product-thumb/ProductTab */ "./src/components/sections/product-thumb/ProductTab.js");
/* harmony import */ var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json");
var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json", 1);
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/categories.json */ "./src/data/categories.json");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/categories.json */ "./src/data/categories.json", 1);
/* harmony import */ var _components_other_Benefits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/other/Benefits */ "./src/components/other/Benefits.js");
/* harmony import */ var _components_sections_product_thumb_ProductGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/sections/product-thumb/ProductGrid */ "./src/components/sections/product-thumb/ProductGrid.js");
/* harmony import */ var _components_sections_dale_of_week_DowTwo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/sections/dale-of-week/DowTwo */ "./src/components/sections/dale-of-week/DowTwo.js");
/* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _components_sections_banner_BannerOne__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/sections/banner/BannerOne */ "./src/components/sections/banner/BannerOne.js");
/* harmony import */ var _data_sections_banner_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/sections/banner.json */ "./src/data/sections/banner.json");
var _data_sections_banner_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/sections/banner.json */ "./src/data/sections/banner.json", 1);
var _jsxFileName = "C:\\Users\\Soona\\Team-Projects\\ogami-main\\ogami\\src\\pages\\homepages\\homepage2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function homepage2() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: currentProductTabsCategory,
    1: setCurrentProductTabsCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    featuredProducts: "",
    saleProducts: "",
    bestSellerProducts: ""
  });
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.shopReducer);
  const {
    products,
    saleProducts,
    featuredProducts,
    bestSellerProducts
  } = shopState;
  const {
    fetchSaleProductsRequest,
    fetchFeaturedProductsRequest,
    fetchBestSellerProductsRequest,
    fetchProductsRequest
  } = _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_2__;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(fetchProductsRequest({
      limit: 10,
      sort: {}
    }));
    dispatch(fetchFeaturedProductsRequest({
      limit: 12
    }));
    dispatch(fetchSaleProductsRequest({
      limit: 6
    }));
    dispatch(fetchBestSellerProductsRequest({
      limit: 6
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(fetchFeaturedProductsRequest({
      limit: 12,
      category: currentProductTabsCategory.featuredProducts
    }));
  }, [currentProductTabsCategory.featuredProducts]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(fetchSaleProductsRequest({
      limit: 6,
      category: currentProductTabsCategory.saleProducts
    }));
  }, [currentProductTabsCategory.saleProducts]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(fetchBestSellerProductsRequest({
      limit: 6,
      category: currentProductTabsCategory.bestSellerProducts
    }));
  }, [currentProductTabsCategory.bestSellerProducts]);
  return __jsx(_components_layout_LayoutTwo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Homepage 2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(_components_sections_hero_slider_HeroSliderTwo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    containerFluid: true,
    data: _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6__.one[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: featuredProducts,
    onTabChange: val => setCurrentProductTabsCategory(_objectSpread(_objectSpread({}, currentProductTabsCategory), {}, {
      featuredProducts: val
    })),
    headerCategories: _data_categories_json__WEBPACK_IMPORTED_MODULE_7__.slice(0, 5).map(item => item.name),
    headerTitle: "Featured Product",
    productClassName: "-borderless",
    productCol: {
      xs: 12,
      sm: 8,
      lg: 6,
      xl: 4
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  })), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(_components_other_Benefits__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "-bordered",
    containerFluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  })), __jsx(_components_sections_dale_of_week_DowTwo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    countdownLast: 100000000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(_components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: bestSellerProducts,
    onTabChange: val => setCurrentProductTabsCategory(_objectSpread(_objectSpread({}, currentProductTabsCategory), {}, {
      bestSellerProducts: val
    })),
    headerCategories: _data_categories_json__WEBPACK_IMPORTED_MODULE_7__.slice(0, 5).map(item => item.name),
    headerType: "row",
    headerTitle: "Best seller",
    productClassName: "-borderless",
    productCol: {
      xs: 12,
      sm: 8,
      lg: 6,
      xl: 4
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }), __jsx(_components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: saleProducts,
    onTabChange: val => setCurrentProductTabsCategory(_objectSpread(_objectSpread({}, currentProductTabsCategory), {}, {
      saleProducts: val
    })),
    headerCategories: _data_categories_json__WEBPACK_IMPORTED_MODULE_7__.slice(0, 5).map(item => item.name),
    headerType: "row",
    headerTitle: "Featured Products",
    productClassName: "-borderless",
    productCol: {
      xs: 12,
      sm: 8,
      lg: 6,
      xl: 4
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), __jsx(_components_sections_product_thumb_ProductGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: products,
    headerTitle: "New Products",
    productCol: {
      xs: 24,
      sm: 12,
      md: 8,
      lg: 6
    },
    productType: "tiny",
    fiveCol: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  })), __jsx(_components_sections_banner_BannerOne__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: _data_sections_banner_json__WEBPACK_IMPORTED_MODULE_13__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/*! exports provided: SHOP, BLOG, SHOP_FILTER, CART, WISHLIST, COMPARE, BLOG_FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_FILTER", function() { return SHOP_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPARE", function() { return COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_FILTER", function() { return BLOG_FILTER; });
const SHOP = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAIL: "FETCH_PRODUCTS_FAIL",
  FETCH_SALE_PRODUCTS: "FETCH_SALE_PRODUCTS",
  FETCH_SALE_PRODUCTS_SUCCESS: "FETCH_SALE_PRODUCTS_SUCCESS",
  FETCH_SALE_PRODUCTS_FAIL: "FETCH_SALE_PRODUCTS_FAIL",
  FETCH_FEATURED_PRODUCTS: "FETCH_FEATURED_PRODUCTS",
  FETCH_FEATURED_PRODUCTS_SUCCESS: "FETCH_FEATURED_PRODUCTS_SUCCESS",
  FETCH_FEATURED_PRODUCTS_FAIL: "FETCH_FEATURED_PRODUCTS_FAIL",
  FETCH_BEST_SELLER_PRODUCTS: "FETCH_BEST_SELLER_PRODUCTS",
  FETCH_BEST_SELLER_PRODUCTS_SUCCESS: "FETCH_BEST_SELLER_PRODUCTS_SUCCESS",
  FETCH_BEST_SELLER_PRODUCTS_FAIL: "FETCH_BEST_SELLER_PRODUCTS_FAIL",
  FETCH_DALE_PRODUCTS: "FETCH_DALE_PRODUCTS",
  FETCH_DALE_PRODUCTS_SUCCESS: "FETCH_DALE_PRODUCTS_SUCCESS",
  FETCH_DALE_PRODUCTS_FAIL: "FETCH_DALE_PRODUCTS_FAIL",
  FETCH_PRODUCT_DETAIL: "FETCH_PRODUCT_DETAIL",
  FETCH_PRODUCT_DETAIL_SUCCESS: "FETCH_PRODUCT_DETAIL_SUCCESS",
  FETCH_PRODUCT_DETAIL_FAIL: "FETCH_PRODUCT_DETAIL_FAIL",
  FETCH_SEARCHED_PRODUCTS: "FETCH_SEARCHED_PRODUCTS",
  FETCH_SEARCHED_PRODUCTS_SUCCESS: "FETCH_SEARCHED_PRODUCTS_SUCCESS",
  FETCH_SEARCHED_PRODUCTS_FAIL: "FETCH_SEARCHED_PRODUCTS_FAIL"
};
const BLOG = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAIL: "FETCH_POSTS_FAIL",
  FETCH_POST_DETAIL: "FETCH_POST_DETAIL",
  FETCH_POST_DETAIL_SUCCESS: "FETCH_POST_DETAIL_SUCCESS",
  FETCH_POST_DETAIL_FAIL: "FETCH_POST_DETAIL_FAIL",
  FETCH_RECENT_POSTS: "FETCH_RECENT_POSTS",
  FETCH_RECENT_POSTS_SUCCESS: "FETCH_RECENT_POSTS_SUCCESS",
  FETCH_RECENT_POSTS_FAIL: "FETCH_RECENT_POSTS_FAIL"
};
const SHOP_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_SORT: "SET_SORT",
  SET_SHOW: "SET_SHOW",
  SET_VIEW: "SET_VIEW",
  SET_CATEGORY: "SET_CATEGORY",
  SET_COLOR: "SET_COLOR",
  SET_SIZE: "SET_SIZE",
  SET_TAG: "SET_TAG"
};
const CART = {
  FETCH_CART: "FETCH_CART",
  FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
  FETCH_CART_FAIL: "FETCH_CART_FAIL"
};
const WISHLIST = {
  FETCH_WISHLIST: "FETCH_WISHLIST",
  FETCH_WISHLIST_SUCCESS: "FETCH_WISHLIST_SUCCESS",
  FETCH_WISHLIST_FAIL: "FETCH_WISHLIST_FAIL"
};
const COMPARE = {
  ADD_TO_COMPARE: "ADD_TO_COMPARE",
  REMOVE_FROM_COMPARE: "REMOVE_FROM_COMPARE"
};
const BLOG_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_CATEGORY: "SET_CATEGORY",
  SET_TAG: "SET_TAG"
};

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: fetchCart, fetchCartSuccess, fetchCartFail, fetchCartRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCart", function() { return fetchCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartSuccess", function() { return fetchCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartFail", function() { return fetchCartFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartRequest", function() { return fetchCartRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/cart */ "./src/apis/cart.js");

 //Get cart data

const fetchCart = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART
});
const fetchCartSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS,
  payload: {
    data
  }
});
const fetchCartFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL,
  payload: {
    err
  }
});
const fetchCartRequest = () => {
  return dispatch => {
    dispatch(fetchCart());
    _apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchCartData"]().then(res => {
      dispatch(fetchCartSuccess(res.data));
    }).catch(err => {
      dispatch(fetchCartFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/compareActions.js":
/*!*********************************************!*\
  !*** ./src/redux/actions/compareActions.js ***!
  \*********************************************/
/*! exports provided: addToCompare, removeFromCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCompare", function() { return addToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCompare", function() { return removeFromCompare; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");

const addToCompare = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].ADD_TO_COMPARE,
  payload: {
    data
  }
});
const removeFromCompare = productId => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].REMOVE_FROM_COMPARE,
  payload: {
    productId
  }
});

/***/ }),

/***/ "./src/redux/actions/shopActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/shopActions.js ***!
  \******************************************/
/*! exports provided: fetchProducts, fetchProductsSuccess, fetchProductsFail, fetchProductsRequest, fetchSaleProducts, fetchSaleProductsSuccess, fetchSaleProductsFail, fetchSaleProductsRequest, fetchFeaturedProducts, fetchFeaturedProductsSuccess, fetchFeaturedProductsFail, fetchFeaturedProductsRequest, fetchBestSellerProducts, fetchBestSellerProductsSuccess, fetchBestSellerProductsFail, fetchBestSellerProductsRequest, fetchDaleProducts, fetchDaleProductsSuccess, fetchDaleProductsFail, fetchDaleProductsRequest, fetchProductDetail, fetchProductDetailSuccess, fetchProductDetailFail, fetchProductDetailRequest, fetchSearchedProduct, fetchSearchedProductSuccess, fetchSearchedProductFail, fetchSearchedProductRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsSuccess", function() { return fetchProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsFail", function() { return fetchProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsRequest", function() { return fetchProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProducts", function() { return fetchSaleProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsSuccess", function() { return fetchSaleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsFail", function() { return fetchSaleProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsRequest", function() { return fetchSaleProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProducts", function() { return fetchFeaturedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsSuccess", function() { return fetchFeaturedProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsFail", function() { return fetchFeaturedProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsRequest", function() { return fetchFeaturedProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProducts", function() { return fetchBestSellerProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsSuccess", function() { return fetchBestSellerProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsFail", function() { return fetchBestSellerProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsRequest", function() { return fetchBestSellerProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProducts", function() { return fetchDaleProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsSuccess", function() { return fetchDaleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsFail", function() { return fetchDaleProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsRequest", function() { return fetchDaleProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetail", function() { return fetchProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailSuccess", function() { return fetchProductDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailFail", function() { return fetchProductDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailRequest", function() { return fetchProductDetailRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProduct", function() { return fetchSearchedProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductSuccess", function() { return fetchSearchedProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductFail", function() { return fetchSearchedProductFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductRequest", function() { return fetchSearchedProductRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/shop */ "./src/apis/shop.js");

 //Get all products

const fetchProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS
});
const fetchProductsSuccess = (data, productCount) => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_SUCCESS,
  payload: {
    data,
    productCount
  }
});
const fetchProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchProductsRequest = query => {
  return dispatch => {
    dispatch(fetchProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchProductsData"](query).then(res => {
      dispatch(fetchProductsSuccess(res.data, res.headers["x-total-count"]));
    }).catch(err => {
      dispatch(fetchProductsFail(err));
    });
  };
}; //Get sale products

const fetchSaleProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS
});
const fetchSaleProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchSaleProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchSaleProductsRequest = query => {
  return dispatch => {
    dispatch(fetchSaleProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchSaleProductsData"](query).then(res => {
      dispatch(fetchSaleProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchSaleProductsFail(err));
    });
  };
}; //Get featured products

const fetchFeaturedProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS
});
const fetchFeaturedProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchFeaturedProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchFeaturedProductsRequest = query => {
  return dispatch => {
    dispatch(fetchFeaturedProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchFeaturedProductsData"](query).then(res => {
      dispatch(fetchFeaturedProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchFeaturedProductsFail(err));
    });
  };
}; //Get best seller products

const fetchBestSellerProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS
});
const fetchBestSellerProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchBestSellerProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchBestSellerProductsRequest = query => {
  return dispatch => {
    dispatch(fetchBestSellerProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchBestSellerProductsData"](query).then(res => {
      dispatch(fetchBestSellerProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchBestSellerProductsFail(err));
    });
  };
}; //Get best seller products

const fetchDaleProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS
});
const fetchDaleProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchDaleProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchDaleProductsRequest = query => {
  return dispatch => {
    dispatch(fetchDaleProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchDaleProductsData"](query).then(res => {
      dispatch(fetchDaleProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchDaleProductsFail(err));
    });
  };
}; //Get product detail

const fetchProductDetail = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL
});
const fetchProductDetailSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_SUCCESS,
  payload: {
    data
  }
});
const fetchProductDetailFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_FAIL,
  payload: {
    err
  }
});
const fetchProductDetailRequest = slug => {
  return dispatch => {
    dispatch(fetchProductDetail());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchProductDetailData"](slug).then(res => {
      dispatch(fetchProductDetailSuccess(res.data));
    }).catch(err => {
      dispatch(fetchProductDetailFail(err));
    });
  };
}; //Get searched product

const fetchSearchedProduct = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS
});
const fetchSearchedProductSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchSearchedProductFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchSearchedProductRequest = query => {
  return dispatch => {
    dispatch(fetchSearchedProduct());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchSearchedProductData"](query).then(res => {
      dispatch(fetchSearchedProductSuccess(res.data));
    }).catch(err => {
      dispatch(fetchSearchedProductFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/wishlistActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/wishlistActions.js ***!
  \**********************************************/
/*! exports provided: fetchWishListRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishListRequest", function() { return fetchWishListRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/wishlist */ "./src/apis/wishlist.js");

 //Get cart data

const fetchWishList = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST
});

const fetchWishListSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS,
  payload: {
    data
  }
});

const fetchWishListFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL,
  payload: {
    err
  }
});

const fetchWishListRequest = () => {
  return dispatch => {
    dispatch(fetchWishList());
    _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__["fetchWishlistData"]().then(res => {
      dispatch(fetchWishListSuccess(res.data));
    }).catch(err => {
      dispatch(fetchWishListFail(err));
    });
  };
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countdown":
/*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countdown");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-mailchimp-subscribe":
/*!********************************************!*\
  !*** external "react-mailchimp-subscribe" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvd2lzaGxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9heGlvc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jYXJ0U2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kZWZpbmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc2hvcFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXNlRGVib3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2lzaGxpc3RTZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpdGhIZWFkZXJTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsL3Byb2R1Y3QvUHJvZHVjdERldGFpbExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvcHJvZHVjdC9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvcHJvZHVjdC9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsSW1hZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldGFpbC9wcm9kdWN0L2VsZW1lbnRzL1Byb2R1Y3REZXRhaWxUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3RlckZsdWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJJbmZvbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJRdWlja0xpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJTdWJjcmliZUlucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJUd28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL0Z1bmN0aW9uSXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL01vYmlsZU1lbnVPcGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL01vYmlsZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9TZWFyY2hGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tZW51L01lbnVUd28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3RvcC1uYXYvVG9wTmF2T25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9MYXlvdXRUd28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvQmVuZWZpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL0ZldGNoRGF0YUhhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9RdWFudGl0eVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL1NlY3Rpb25UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9Tb2NpYWxJY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvYmFubmVyL0Jhbm5lck9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9kYWxlLW9mLXdlZWsvRG93VHdvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL2hlcm8tc2xpZGVyL0hlcm9TbGlkZXJUd28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJvZHVjdC10aHVtYi9Qcm9kdWN0R3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9wcm9kdWN0LXRodW1iL1Byb2R1Y3RUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWVwYWdlcy9ob21lcGFnZTIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NvbXBhcmVBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY291bnRkb3duXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInJlc29sdmVkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJ2YWx1ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiZmV0Y2hDYXJ0RGF0YSIsImNhcnRJZCIsImVuZHBvaW50IiwiQVBJX1VSTCIsImF4aW9zU2VydmljZSIsImZldGNoUHJvZHVjdElkQ2FydERhdGEiLCJwaWQiLCJyZW5kZXJQYXJhbSIsImFkZENhcnREYXRhIiwicG9zdCIsInJlbW92ZUNhcnREYXRhIiwiZGVsZXRlIiwidXBkYXRlQ2FydERhdGEiLCJwYXRjaCIsInJlbmRlclVybCIsImxpbWl0IiwiY2F0ZWdvcnkiLCJmZXRjaFByb2R1Y3RzRGF0YSIsInNvcnQiLCJvcmRlciIsInEiLCJjb2xvciIsInNpemUiLCJ0YWciLCJmZXRjaFNhbGVQcm9kdWN0c0RhdGEiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhIiwiZmV0Y2hEYWxlUHJvZHVjdHNEYXRhIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YSIsInNsdWciLCJmZXRjaFNlYXJjaGVkUHJvZHVjdERhdGEiLCJpbnB1dCIsImZldGNoV2lzaGxpc3REYXRhIiwiZmV0Y2hQcm9kdWN0SWRXaXNobGlzdERhdGEiLCJhZGRXaXNobGlzdERhdGEiLCJyZW1vdmVXaXNobGlzdERhdGEiLCJBeGlvc1NlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwicmVqZWN0IiwiYm9keSIsIm9uQWRkUHJvZHVjdFRvQ2FydCIsInByb2R1Y3QiLCJxdWFudGl0eSIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJnZXRRdWFudGl0eUF2YWlsYWJsZSIsImlkIiwidGhlbiIsImxlbmd0aCIsInV1aWR2NCIsInByb2R1Y3RJZCIsImNhcnRRdWFudGl0eSIsImNhdGNoIiwicERhdGEiLCJvblJlbW92ZVByb2R1Y3RGcm9tQ2FydCIsIm9uQ2hhbmdlUHJvZHVjdENhcnRRdWFudGl0eSIsImxvZyIsImdldFByb2R1Y3RzQnlTbHVnIiwiYXJyIiwiZmluZCIsInRvTG93ZXJDYXNlIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsInRvdGFsIiwiZm9yRWFjaCIsImRpc2NvdW50IiwicHJpY2UiLCJjaGVja1Byb2R1Y3RJbkNhcnQiLCJjYXJ0QXJyIiwidW5kZWZpbmVkIiwiY2hlY2tQcm9kdWN0Q2FydFF1YW50aXR5IiwicHJvZHVjdHNJbkNhcnQiLCJmaWx0ZXIiLCJ0b3RhbFByb2R1Y3RRdWFudGl0eUluQ2FydCIsInJlZHVjZSIsImNoZWNrUHJvZHVjdEluV2lzaGxpc3QiLCJ3aXNobGlzdEFyciIsInVzZURlYm91bmNlIiwiZGVsYXkiLCJkZWJvdW5jZWRWYWx1ZSIsInNldERlYm91bmNlZFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZm9ybWF0Q3VycmVuY3kiLCJsb2NhbGVzIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJmb3JtYXQiLCJwYXJhbU5hbWUiLCJwYXJhbVZhbHVlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJpbnB1dEZvcm1hdCIsIm91dHB1dEZvcm1hdCIsIm1vbWVudCIsInJlbW92ZURhc2giLCJvbkFkZFByb2R1Y3RUb1dpc2hsaXN0Iiwib25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0Iiwid2l0aEhlYWRlclNjcm9sbCIsIldyYXBwZWRDb21wb25lbnQiLCJoZWFkZXJSZWYiLCJ1c2VSZWYiLCJzZXRTY3JvbGwiLCJpc0hlYWRlckZpeGVkIiwic2V0SXNIZWFkZXJGaXhlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsIm9mZnNldEhlaWdodCIsInNjcm9sbFkiLCJjbGFzc05hbWVzIiwiZml4ZWQiLCJjbGFzc05hbWUiLCJQcm9kdWN0RGV0YWlsTGF5b3V0IiwidHlwZSIsImhpZGVUYWIiLCJpbWFnZXMiLCJmdWxsRGVzY3JpcHRpb24iLCJzcGVjaWZpY2F0aW9ucyIsInJldmlld3MiLCJtZW1vIiwiUHJvZHVjdERldGFpbENvbnRlbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY3VycmVudFF1YW50aXR5Iiwic2V0Q3VycmVudFF1YW50aXR5IiwiYWRkVG9DYXJ0TG9hZGluZyIsInNldEFkZFRvQ2FydExvYWRpbmciLCJjYXJ0U3RhdGUiLCJ1c2VTZWxlY3RvciIsImNhcnRSZWR1Y2VyIiwiY29tcGFyZVN0YXRlIiwiY29tcGFyZVJlZHVjZXIiLCJwcm9kdWN0SW5Db21wYXJlIiwiYXZhaWFibGVRdWFudGl0eSIsIm9uQWRkVG9DYXJ0IiwiZmV0Y2hDYXJ0UmVxdWVzdCIsIm1lcyIsIm9uQWRkVG9Db21wYXJlIiwicmVtb3ZlRnJvbUNvbXBhcmUiLCJhZGRUb0NvbXBhcmUiLCJyYXRlIiwidmFsIiwiYWN0aXZlIiwiUHJvZHVjdERldGFpbEltYWdlcyIsInNsaWRlcjFTZXR0aW5ncyIsImFycm93cyIsInNsaWRlcjJTZXR0aW5ncyIsInNsaWRlc1RvU2hvdyIsImZvY3VzT25TZWxlY3QiLCJ2ZXJ0aWNhbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJuYXYxIiwic2V0TmF2MSIsIm5hdjIiLCJzZXROYXYyIiwiYyIsIm1hcCIsImltZyIsImluZGV4IiwiVGFiUGFuZSIsIlRhYnMiLCJSZXZpZXdJdGVtIiwidXNlciIsImF2YXRhciIsImNvbW1lbnREYXRlIiwicmV2aWV3IiwiUHJvZHVjdERldGFpbFRhYiIsIm9uRmluaXNoIiwidmFsdWVzIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJ3ZWlnaHQiLCJkaW1lbnNpb25zIiwibG9uZyIsIndpZHRoIiwiaGVpZ2h0IiwicmVxdWlyZWQiLCJGb290ZXJGbHVpZCIsInNwYW4iLCJGb290ZXJJbmZvbWF0aW9uIiwiRm9vdGVyUXVpY2tMaW5rcyIsImNvbFNpemUiLCJmb290ZXJMaW5rcyIsInRpdGxlIiwiaXRlbXMiLCJsaW5rIiwiQ3VzdG9tRm9ybSIsInN0YXR1cyIsIm9uVmFsaWRhdGVkIiwiRU1BSUwiLCJlbWFpbCIsIl9faHRtbCIsIkZvb3RlclN1YmNyaWJlSW5wdXQiLCJzdWJzY3JpYmUiLCJmb3JtRGF0YSIsIkhlYWRlclR3byIsIkZ1bmN0aW9uSXRlbXMiLCJoaWRlVG90YWwiLCJoaWRlV2lzaGxpc3QiLCJNb2JpbGVNZW51T3BlbmVyIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJvblNob3dEcmF3ZXIiLCJvbkNsb3NlRHJhd2VyIiwiTW9iaWxlTmF2aWdhdG9yIiwiU3ViTWVudSIsIk1lbnUiLCJzZXRDdXJyZW50IiwiaGFuZGxlQ2xpY2siLCJzZXRTdGF0ZSIsIm5hdmlnYXRvckRhdGEiLCJIT01FIiwic3ViTWVudSIsIlNIT1AiLCJsYXlvdXQiLCJkZXRhaWwiLCJQQUdFUyIsIkFCT1VUIiwiTmF2aWdhdG9yIiwiQkxPRyIsIlNlYXJjaEZvcm0iLCJlbnRlckJ1dHRvbiIsImhpZGVTZWxlY3QiLCJPcHRpb24iLCJTZWxlY3QiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50U2VhcmNoIiwic2V0Q3VycmVudFNlYXJjaCIsImN1cnJlbnRDYXRlZ29yeSIsInNldEN1cnJlbnRDYXRlZ29yeSIsImRlYm91bmRWYWx1ZSIsInNob3BTdGF0ZSIsInNob3BSZWR1Y2VyIiwic2VhcmNoZWRQcm9kdWN0cyIsIm9uQ2hhbmdlIiwib25TZWxlY3RPcHRpb24iLCJvcHRpb24iLCJvblNlYXJjaCIsIm9uQ2hvb3NlQ2F0ZW9ncnkiLCJmZXRjaFNlYXJjaGVkUHJvZHVjdFJlcXVlc3QiLCJjYXRlZ29yaWVzIiwiaW5wdXRWYWx1ZSIsInRvVXBwZXJDYXNlIiwiaW5kZXhPZiIsImxvYWRpbmciLCJNZW51VHdvIiwiY29udGFpbmVyRmx1aWQiLCJmbGFnRGF0YSIsImltYWdlIiwiVG9wTmF2T25lIiwib2JqZWN0Rml0IiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJTY3JvbGxlZEhlYWRlciIsIkxheW91dE9uZSIsIkJlbmVmaXRzIiwiY29sdW1uIiwidGhyZWVDb2wiLCJyZW5kZXJDb2wiLCJ4cyIsIm1kIiwic20iLCJsZyIsImNvbCIsImJlbmVmaXRzRGF0YSIsInNsaWNlIiwiaWNvblNyYyIsImRlc2NyaXB0aW9uIiwiQ29udGFpbmVyIiwiZmx1aWQiLCJGZXRjaERhdGFIYW5kbGUiLCJlcnJvck1lc3NhZ2UiLCJlbXB0eURlc2NyaXB0aW9uIiwicmVuZGVyRGF0YSIsIkVtcHR5IiwiUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSIsIlF1YW50aXR5U2VsZWN0b3IiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJvbkRlY3JlYXNlIiwib25JbmNyZWFzZSIsImZpcnN0VXBkYXRlIiwic2V0VmFsdWUiLCJkZWNyZWFzZVZhbHVlIiwidXNlQ2FsbGJhY2siLCJpbmNyZWFzZVZhbHVlIiwiU2VjdGlvblRpdGxlIiwiaGlkZURlY29yYXRpb24iLCJTb2NpYWxJY29ucyIsInNoYXBlIiwiUHJvZHVjdCIsImNvdW50ZG93bkxhc3QiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJhZGRUb1dpc2hsaXN0TG9hZGluZyIsInNldEFkZFRvV2lzaGxpc3RMb2FkaW5nIiwid2lzaGxpc3RTdGF0ZSIsIndpc2hsaXN0UmVkdWNlciIsInByb2R1Y3RJbldpc2hsaXN0Iiwic2hvd01vZGFsIiwib25Nb2RhbENsb3NlIiwib25BZGRXaXNobGlzdCIsImZldGNoV2lzaExpc3RSZXF1ZXN0IiwiZ2V0UmFuZG9tQXJiaXRyYXJ5IiwiTWF0aCIsInJhbmRvbSIsInJlZGVyUHJvZHVjdFR5cGUiLCJjb3ZlckltYWdlIiwiRGF0ZSIsIm5vdyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiemVyb1BhZCIsIm1hcmdpbkJvdHRvbSIsIkJhbm5lck9uZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJjb250ZW50IiwibWFpbiIsIkRvd1R3byIsIkhlcm9TbGlkZXJUd28iLCJzdWJUaXRsZSIsInVuaXQiLCJmcm9tIiwiUHJvZHVjdEdyaWQiLCJwcm9kdWN0Q2xhc3NOYW1lIiwicHJvZHVjdENvbCIsInByb2R1Y3RUeXBlIiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJDbGFzcyIsImhpZGVIZWFkZXIiLCJmaXZlQ29sIiwiZ3V0dGVyIiwiUHJvZHVjdFRhYiIsIm9uVGFiQ2hhbmdlIiwiaGVhZGVyQ2F0ZWdvcmllcyIsInNob3dUaXRsZURlY29yYXRpb24iLCJoZWFkZXJUeXBlIiwib25DaG9vc2VDYXRlZ29yeSIsInJlbmRlclRhYkNvbnRlbnQiLCJsZWZ0IiwiaG9tZXBhZ2UyIiwiY3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnkiLCJzZXRDdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSIsImZlYXR1cmVkUHJvZHVjdHMiLCJzYWxlUHJvZHVjdHMiLCJiZXN0U2VsbGVyUHJvZHVjdHMiLCJwcm9kdWN0cyIsImZldGNoU2FsZVByb2R1Y3RzUmVxdWVzdCIsImZldGNoRmVhdHVyZWRQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaFByb2R1Y3RzUmVxdWVzdCIsInNob3BBY3Rpb25zIiwiaGVyb3NsaWRlclR3b0RhdGEiLCJvbmUiLCJ4bCIsImJhbm5lckRhdGEiLCJGRVRDSF9QUk9EVUNUUyIsIkZFVENIX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfU0FMRV9QUk9EVUNUUyIsIkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUyIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfREFMRV9QUk9EVUNUUyIsIkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTCIsIkZFVENIX1BST0RVQ1RfREVUQUlMIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUyIsIkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUwiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUyIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfUE9TVFMiLCJGRVRDSF9QT1NUU19TVUNDRVNTIiwiRkVUQ0hfUE9TVFNfRkFJTCIsIkZFVENIX1BPU1RfREVUQUlMIiwiRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUyIsIkZFVENIX1BPU1RfREVUQUlMX0ZBSUwiLCJGRVRDSF9SRUNFTlRfUE9TVFMiLCJGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyIsIkZFVENIX1JFQ0VOVF9QT1NUU19GQUlMIiwiU0hPUF9GSUxURVIiLCJSRVNFVF9GSUxURVJTIiwiU0VUX1NPUlQiLCJTRVRfU0hPVyIsIlNFVF9WSUVXIiwiU0VUX0NBVEVHT1JZIiwiU0VUX0NPTE9SIiwiU0VUX1NJWkUiLCJTRVRfVEFHIiwiQ0FSVCIsIkZFVENIX0NBUlQiLCJGRVRDSF9DQVJUX1NVQ0NFU1MiLCJGRVRDSF9DQVJUX0ZBSUwiLCJXSVNITElTVCIsIkZFVENIX1dJU0hMSVNUIiwiRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUyIsIkZFVENIX1dJU0hMSVNUX0ZBSUwiLCJDT01QQVJFIiwiQUREX1RPX0NPTVBBUkUiLCJSRU1PVkVfRlJPTV9DT01QQVJFIiwiQkxPR19GSUxURVIiLCJmZXRjaENhcnQiLCJmZXRjaENhcnRTdWNjZXNzIiwicGF5bG9hZCIsImZldGNoQ2FydEZhaWwiLCJjYXJ0QXBpcyIsImZldGNoUHJvZHVjdHMiLCJmZXRjaFByb2R1Y3RzU3VjY2VzcyIsInByb2R1Y3RDb3VudCIsImZldGNoUHJvZHVjdHNGYWlsIiwic2hvcEFwaXMiLCJoZWFkZXJzIiwiZmV0Y2hTYWxlUHJvZHVjdHMiLCJmZXRjaFNhbGVQcm9kdWN0c1N1Y2Nlc3MiLCJmZXRjaFNhbGVQcm9kdWN0c0ZhaWwiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHMiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNTdWNjZXNzIiwiZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRmFpbCIsImZldGNoQmVzdFNlbGxlclByb2R1Y3RzIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNTdWNjZXNzIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNGYWlsIiwiZmV0Y2hEYWxlUHJvZHVjdHMiLCJmZXRjaERhbGVQcm9kdWN0c1N1Y2Nlc3MiLCJmZXRjaERhbGVQcm9kdWN0c0ZhaWwiLCJmZXRjaERhbGVQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaFByb2R1Y3REZXRhaWwiLCJmZXRjaFByb2R1Y3REZXRhaWxTdWNjZXNzIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRmFpbCIsImZldGNoUHJvZHVjdERldGFpbFJlcXVlc3QiLCJmZXRjaFNlYXJjaGVkUHJvZHVjdCIsImZldGNoU2VhcmNoZWRQcm9kdWN0U3VjY2VzcyIsImZldGNoU2VhcmNoZWRQcm9kdWN0RmFpbCIsImZldGNoV2lzaExpc3QiLCJmZXRjaFdpc2hMaXN0U3VjY2VzcyIsImZldGNoV2lzaExpc3RGYWlsIiwid2lzaGxpc3RBcGlzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7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USxDQUFDbVUsYUFBYSxFQUFkLENBQVI7QUFDQUcsb0VBQUEsR0FFR3JaLElBRkgsQ0FFU3BPLEdBQUQsSUFBUztBQUNibVQsY0FBUSxDQUFDb1Usb0JBQW9CLENBQUN2bkIsR0FBRyxDQUFDOEUsSUFBTCxDQUFyQixDQUFSO0FBQ0QsS0FKSCxFQUtHMkosS0FMSCxDQUtVblUsR0FBRCxJQUFTO0FBQ2Q2WSxjQUFRLENBQUNxVSxpQkFBaUIsQ0FBQ2x0QixHQUFELENBQWxCLENBQVI7QUFDRCxLQVBIO0FBUUQsR0FWRDtBQVdELENBWk0sQzs7Ozs7Ozs7Ozs7QUN2QlAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvaG9tZXBhZ2VzL2hvbWVwYWdlMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2hvbWVwYWdlcy9ob21lcGFnZTIuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFzLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gZGVub3JtYWxpemVQYWdlUGF0aChkZWxCYXNlUGF0aChwYXRobmFtZSEpKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhZ2UpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24oXG4gICAgICBtYXRjaGVyUmVnZXgsXG4gICAgICBrZXlzLFxuICAgICAgbWF0Y2hlck9wdGlvbnNcbiAgICApXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpXG4gICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICApXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZW5jb2RlVVJJKFxuICAgICAgZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uL2NvbW1vbi9heGlvc1NlcnZpY2VcIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29tbW9uL2RlZmluZXNcIjtcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xuXG5jb25zdCB1cmwgPSBcIi9jYXJ0XCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnREYXRhID0gKGNhcnRJZCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBjYXJ0SWQgPyBBUElfVVJMICsgdXJsICsgYC8ke2NhcnRJZH1gIDogQVBJX1VSTCArIHVybDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdElkQ2FydERhdGEgPSAocGlkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwicHJvZHVjdElkXCIsIHBpZCk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRDYXJ0RGF0YSA9IChkYXRhKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmw7XG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FydERhdGEgPSAoY2FydElkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBgLyR7Y2FydElkfWA7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZGVsZXRlKGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJ0RGF0YSA9IChjYXJ0SWQsIGRhdGEpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wYXRjaChlbmRwb2ludCwgZGF0YSk7XG59O1xuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XG5cbmNvbnN0IHVybCA9IFwiL3Byb2R1Y3RcIjtcblxuY29uc3QgcmVuZGVyVXJsID0gKHVybCwgbGltaXQsIGNhdGVnb3J5KSA9PiB7XG4gIHJldHVybiAoXG4gICAgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcIl9saW1pdFwiLCBsaW1pdCkgKyByZW5kZXJQYXJhbShcImNhdGVnb3J5XCIsIGNhdGVnb3J5KVxuICApO1xufTtcblxuLy9GZXRjaCBsaXN0IG9mIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID1cbiAgICByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KSArXG4gICAgcmVuZGVyUGFyYW0oXCJfcGFnZVwiLCBxdWVyeS5wYWdlKSArXG4gICAgcmVuZGVyUGFyYW0oXCJfc29ydFwiLCBxdWVyeS5zb3J0LnNvcnQpICtcbiAgICByZW5kZXJQYXJhbShcIl9vcmRlclwiLCBxdWVyeS5zb3J0Lm9yZGVyKSArXG4gICAgcmVuZGVyUGFyYW0oXCJxXCIsIHF1ZXJ5LnEpICtcbiAgICByZW5kZXJQYXJhbShcInNwZWNpZmljYXRpb25zLmNvbG9yXCIsIHF1ZXJ5LmNvbG9yKSArXG4gICAgcmVuZGVyUGFyYW0oXCJzcGVjaWZpY2F0aW9ucy5zaXplXCIsIHF1ZXJ5LnNpemUpICtcbiAgICByZW5kZXJQYXJhbShcInRhZ19saWtlXCIsIHF1ZXJ5LnRhZyk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG4vL0ZldGNoIHByb2R1Y3QgZGV0YWlsXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YSA9IChzbHVnKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwic2x1Z1wiLCBzbHVnKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuLy9GZXRjaCBzZXJjaGVkIHByb2R1Y3QgYnkgcXVlcnlcbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdERhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID1cbiAgICBBUElfVVJMICtcbiAgICB1cmwgK1xuICAgIFwiP1wiICtcbiAgICByZW5kZXJQYXJhbShcInFcIiwgcXVlcnkuaW5wdXQpICtcbiAgICByZW5kZXJQYXJhbShcImNhdGVnb3J5XCIsIHF1ZXJ5LmNhdGVnb3J5KSArXG4gICAgcmVuZGVyUGFyYW0oXCJfbGltaXRcIiwgcXVlcnkubGltaXQpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XG5cbmNvbnN0IHVybCA9IFwiL3dpc2hsaXN0XCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFdpc2hsaXN0RGF0YSA9ICgpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdElkV2lzaGxpc3REYXRhID0gKHBpZCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcImlkXCIsIHBpZCk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRXaXNobGlzdERhdGEgPSAoZGF0YSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVdpc2hsaXN0RGF0YSA9IChwaWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtwaWR9YDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5kZWxldGUoZW5kcG9pbnQpO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY2xhc3MgQXhpb3NTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoKTtcbiAgICBpbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHRoaXMuaGFuZGxlU3VjY2VzcywgdGhpcy5oYW5kbGVFcnJvcik7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICB9XG5cbiAgaGFuZGxlU3VjY2VzcyhyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIGhhbmRsZUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuXG4gIGdldCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXQodXJsKTtcbiAgfVxuXG4gIHBvc3QodXJsLCBib2R5KSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucG9zdCh1cmwsIGJvZHkpO1xuICB9XG5cbiAgcGF0Y2godXJsLCBib2R5KSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucGF0Y2godXJsLCBib2R5KTtcbiAgfVxuXG4gIGRlbGV0ZSh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5kZWxldGUodXJsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXhpb3NTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YSxcbiAgYWRkQ2FydERhdGEsXG4gIHVwZGF0ZUNhcnREYXRhLFxuICByZW1vdmVDYXJ0RGF0YSxcbn0gZnJvbSBcIi4uL2FwaXMvY2FydFwiO1xuXG5leHBvcnQgY29uc3Qgb25BZGRQcm9kdWN0VG9DYXJ0ID0gKHtcbiAgcHJvZHVjdCxcbiAgcXVhbnRpdHkgPSAxLFxuICBvblN1Y2Nlc3MsXG4gIG9uRXJyb3IsXG4gIGdldFF1YW50aXR5QXZhaWxhYmxlID0gKCkgPT4gdHJ1ZSxcbn0pID0+IHtcbiAgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YShwcm9kdWN0LmlkKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHByb2R1Y3QucXVhbnRpdHkgPT09IDApIHtcbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZWFjaGVkIG1heGltdW0gbnVtYmVyIG9mIHByb2R1Y3RzXCIpO1xuICAgICAgICAgIGdldFF1YW50aXR5QXZhaWxhYmxlICYmIGdldFF1YW50aXR5QXZhaWxhYmxlKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDYXJ0RGF0YSh7XG4gICAgICAgICAgICAuLi5wcm9kdWN0LFxuICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmlkLFxuICAgICAgICAgICAgY2FydFF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gb25TdWNjZXNzICYmIG9uU3VjY2VzcyhyZXMpKVxuICAgICAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgICAoZXJyKSA9PlxuICAgICAgICAgICAgICAgIG9uRXJyb3IgJiZcbiAgICAgICAgICAgICAgICBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gY2FydCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBEYXRhID0gcmVzLmRhdGFbMF07XG4gICAgICAgIGlmIChwRGF0YS5jYXJ0UXVhbnRpdHkgKyBxdWFudGl0eSA+IHBEYXRhLnF1YW50aXR5KSB7XG4gICAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiUmVhY2hlZCBtYXhpbXVtIG51bWJlciBvZiBwcm9kdWN0c1wiKTtcbiAgICAgICAgICBnZXRRdWFudGl0eUF2YWlsYWJsZShmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBkYXRlQ2FydERhdGEocERhdGEuaWQsIHtcbiAgICAgICAgICAgIGNhcnRRdWFudGl0eTogcERhdGEuY2FydFF1YW50aXR5ICsgcXVhbnRpdHksXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgb25TdWNjZXNzICYmIG9uU3VjY2VzcyhyZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgICAgKGVycikgPT5cbiAgICAgICAgICAgICAgICBvbkVycm9yICYmXG4gICAgICAgICAgICAgICAgb25FcnJvcihcIkFkZCBwcm9kdWN0IHRvIGNhcnQgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluXCIsIGVycilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChcbiAgICAgIChlcnIpID0+XG4gICAgICAgIG9uRXJyb3IgJiYgb25FcnJvcihcIkFkZCBwcm9kdWN0IHRvIGNhcnQgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluXCIsIGVycilcbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uUmVtb3ZlUHJvZHVjdEZyb21DYXJ0ID0gKHsgY2FydElkLCBvblN1Y2Nlc3MsIG9uRXJyb3IgfSkgPT4ge1xuICBpZiAoY2FydElkICYmIGNhcnRJZCAhPT0gXCJcIiAmJiBjYXJ0SWQgIT09IG51bGwpIHtcbiAgICByZW1vdmVDYXJ0RGF0YShjYXJ0SWQpXG4gICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgICAuY2F0Y2goXG4gICAgICAgIChlcnIpID0+XG4gICAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiUmVtb3ZlIHByb2R1Y3QgZmFpbG0sIHBsZWFzZXIgdHJ5IGFnYWluXCIsIGVycilcbiAgICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBvbkNoYW5nZVByb2R1Y3RDYXJ0UXVhbnRpdHkgPSAoe1xuICBwcm9kdWN0LFxuICBxdWFudGl0eSxcbiAgb25TdWNjZXNzLFxufSkgPT4ge1xuICBpZiAocXVhbnRpdHkgPiBwcm9kdWN0LnF1YW50aXR5IHx8IHF1YW50aXR5IDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuICB1cGRhdGVDYXJ0RGF0YShwcm9kdWN0LmlkLCB7IGNhcnRRdWFudGl0eTogcXVhbnRpdHkgfSlcbiAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xufTtcbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gXCJodHRwczovL29nYW1pLWFwaS5oZXJva3VhcHAuY29tXCI7XG4iLCJleHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNCeVNsdWcgPSAoYXJyLCBzbHVnKSA9PiB7XG4gIHJldHVybiBzbHVnICYmIHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiXG4gICAgPyBhcnIuZmluZCgocCkgPT4gcC5zbHVnLnRvTG93ZXJDYXNlKCkgPT09IHNsdWcudG9Mb3dlckNhc2UoKSlcbiAgICA6IGFycjtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVUb3RhbFByaWNlID0gKGFycikgPT4ge1xuICBsZXQgdG90YWwgPSAwO1xuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmRpc2NvdW50KSB7XG4gICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eVxuICAgICAgICA/IChpdGVtLnByaWNlIC0gaXRlbS5kaXNjb3VudCkgKiBpdGVtLmNhcnRRdWFudGl0eVxuICAgICAgICA6IGl0ZW0ucHJpY2UgLSBpdGVtLmRpc2NvdW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eSA/IGl0ZW0ucHJpY2UgKiBpdGVtLmNhcnRRdWFudGl0eSA6IGl0ZW0ucHJpY2U7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRvdGFsO1xufTtcblxuLy9DYXJ0XG5leHBvcnQgY29uc3QgY2hlY2tQcm9kdWN0SW5DYXJ0ID0gKGNhcnRBcnIsIHBpZCkgPT4ge1xuICByZXR1cm4gcGlkID8gY2FydEFyci5maW5kKChpdGVtKSA9PiBpdGVtLnByb2R1Y3RJZCA9PT0gcGlkKSA6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RDYXJ0UXVhbnRpdHkgPSAoY2FydEFyciwgcGlkKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzSW5DYXJ0ID0gY2FydEFyci5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdElkID09PSBwaWQpO1xuICBpZiAocHJvZHVjdHNJbkNhcnQgJiYgcHJvZHVjdHNJbkNhcnQubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0ID0gcHJvZHVjdHNJbkNhcnQucmVkdWNlKFxuICAgICAgKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0uY2FydFF1YW50aXR5LFxuICAgICAgMFxuICAgICk7XG4gICAgcmV0dXJuIHRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuXG4vL1dpc2hsaXN0XG5leHBvcnQgY29uc3QgY2hlY2tQcm9kdWN0SW5XaXNobGlzdCA9ICh3aXNobGlzdEFyciwgcGlkKSA9PiB7XG4gIHJldHVybiBwaWQgPyB3aXNobGlzdEFyci5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwaWQpIDogdW5kZWZpbmVkO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURlYm91bmNlKHZhbHVlLCBkZWxheSkge1xuICBjb25zdCBbZGVib3VuY2VkVmFsdWUsIHNldERlYm91bmNlZFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXREZWJvdW5jZWRWYWx1ZSh2YWx1ZSk7XG4gICAgfSwgZGVsYXkpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiBkZWJvdW5jZWRWYWx1ZTtcbn1cbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAocHJpY2UsIGxvY2FsZXMgPSBcInVzLVVTXCIsIGN1cnJlbmN5ID0gXCJVU0RcIikgPT4ge1xuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIHtcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgIGN1cnJlbmN5OiBjdXJyZW5jeSxcbiAgfSkuZm9ybWF0KHByaWNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQYXJhbSA9IChwYXJhbU5hbWUsIHBhcmFtVmFsdWUpID0+IHtcbiAgaWYgKHBhcmFtVmFsdWUgJiYgcGFyYW1WYWx1ZSAhPT0gXCJcIiAmJiBwYXJhbVZhbHVlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGAmJHtwYXJhbU5hbWV9PSR7cGFyYW1WYWx1ZX1gO1xuICB9XG4gIHJldHVybiBcIlwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoXG4gIGRhdGUsXG4gIGlucHV0Rm9ybWF0ID0gXCJZWVlZLU1NLUREXCIsXG4gIG91dHB1dEZvcm1hdCA9IFwiTU1NIERELCBZWVlZXCJcbikgPT4ge1xuICByZXR1cm4gbW9tZW50KGRhdGUsIGlucHV0Rm9ybWF0KS5mb3JtYXQob3V0cHV0Rm9ybWF0KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVEYXNoID0gKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLy0vZywgXCIgXCIpO1xufTtcbiIsImltcG9ydCB7XG4gIGZldGNoUHJvZHVjdElkV2lzaGxpc3REYXRhLFxuICBhZGRXaXNobGlzdERhdGEsXG4gIHJlbW92ZVdpc2hsaXN0RGF0YSxcbn0gZnJvbSBcIi4uL2FwaXMvd2lzaGxpc3RcIjtcblxuZXhwb3J0IGNvbnN0IG9uQWRkUHJvZHVjdFRvV2lzaGxpc3QgPSAoeyBwcm9kdWN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IgfSkgPT4ge1xuICBmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YShwcm9kdWN0LmlkKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWRkV2lzaGxpc3REYXRhKHByb2R1Y3QpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gb25TdWNjZXNzICYmIG9uU3VjY2VzcyhyZXMpKVxuICAgICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgIChlcnIpID0+XG4gICAgICAgICAgICAgIG9uRXJyb3IgJiZcbiAgICAgICAgICAgICAgb25FcnJvcihcIkFkZCBwcm9kdWN0IHRvIHdpc2xpc3QgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluXCIsIGVycilcbiAgICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiUHJvZHVjdCBhbHJlYWR5IGluIHdpc2hsaXN0XCIpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKFxuICAgICAgKGVycikgPT5cbiAgICAgICAgb25FcnJvciAmJlxuICAgICAgICBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gd2lzbGlzdCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3Qgb25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0ID0gKHtcbiAgcHJvZHVjdElkLFxuICBvblN1Y2Nlc3MsXG4gIG9uRXJyb3IsXG59KSA9PiB7XG4gIGlmIChwcm9kdWN0SWQgJiYgcHJvZHVjdElkICE9PSBcIlwiICYmIHByb2R1Y3RJZCAhPT0gbnVsbCkge1xuICAgIHJlbW92ZVdpc2hsaXN0RGF0YShwcm9kdWN0SWQpXG4gICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgICAuY2F0Y2goXG4gICAgICAgIChlcnIpID0+XG4gICAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiUmVtb3ZlIHByb2R1Y3QgZmFpbCwgcGxlYXNlciB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhIZWFkZXJTY3JvbGwoV3JhcHBlZENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgY29uc3QgaGVhZGVyUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbaXNIZWFkZXJGaXhlZCwgc2V0SXNIZWFkZXJGaXhlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsID49IGhlYWRlclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCkge1xuICAgICAgICBzZXRJc0hlYWRlckZpeGVkKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SXNIZWFkZXJGaXhlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgW3Njcm9sbF0pO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xuICAgICAgc2V0U2Nyb2xsKHdpbmRvdy5zY3JvbGxZKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2hlYWRlclJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyICR7Y2xhc3NOYW1lcyhcbiAgICAgICAgICB7IGZpeGVkOiBpc0hlYWRlckZpeGVkIH0sXG4gICAgICAgICAgcHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICl9YH1cbiAgICAgID5cbiAgICAgICAgPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgUHJvZHVjdERldGFpbEltYWdlcyBmcm9tIFwiLi9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsSW1hZ2VzXCI7XG5pbXBvcnQgUHJvZHVjdERldGFpbENvbnRlbnQgZnJvbSBcIi4vZWxlbWVudHMvUHJvZHVjdERldGFpbENvbnRlbnRcIjtcbmltcG9ydCBGZXRjaERhdGFIYW5kbGUgZnJvbSBcIi4uLy4uL290aGVyL0ZldGNoRGF0YUhhbmRsZVwiO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxUYWIgZnJvbSBcIi4vZWxlbWVudHMvUHJvZHVjdERldGFpbFRhYlwiO1xuXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsTGF5b3V0KHsgZGF0YSwgdHlwZSwgaGlkZVRhYiwgc3R5bGUgfSkge1xuICBpZiAodHlwZSA9PT0gXCJmbHVpZFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8Um93IGd1dHRlcj17MzB9PlxuICAgICAgICAgIDxDb2wgbWQ9ezEwfT5cbiAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsSW1hZ2VzIHR5cGU9XCJjb2x1bW5cIiBpbWFnZXM9e2RhdGEuaW1hZ2VzfSAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbWQ9ezE0fT5cbiAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsQ29udGVudCB0eXBlPVwiZmx1aWRcIiBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cbiAgICAgICAgICAgIHshaGlkZVRhYiAmJiAoXG4gICAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsVGFiXG4gICAgICAgICAgICAgICAgZnVsbERlc2NyaXB0aW9uPXtkYXRhLmZ1bGxEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBzcGVjaWZpY2F0aW9ucz17ZGF0YS5zcGVjaWZpY2F0aW9uc31cbiAgICAgICAgICAgICAgICByZXZpZXdzPXtkYXRhLnJldmlld3N9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxSb3cgZ3V0dGVyPXszMH0+XG4gICAgICAgIDxDb2wgbWQ9ezEyfT5cbiAgICAgICAgICA8UHJvZHVjdERldGFpbEltYWdlcyBpbWFnZXM9e2RhdGEuaW1hZ2VzfSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgIDxQcm9kdWN0RGV0YWlsQ29udGVudCBkYXRhPXtkYXRhfSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsyNH0+XG4gICAgICAgICAgeyFoaWRlVGFiICYmIChcbiAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsVGFiXG4gICAgICAgICAgICAgIGZ1bGxEZXNjcmlwdGlvbj17ZGF0YS5mdWxsRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIHNwZWNpZmljYXRpb25zPXtkYXRhLnNwZWNpZmljYXRpb25zfVxuICAgICAgICAgICAgICByZXZpZXdzPXtkYXRhLnJldmlld3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdERldGFpbExheW91dCk7XG4iLCJpbXBvcnQgeyBCdXR0b24sIENvbCwgUmF0ZSwgUm93LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7XG4gIGNoZWNrUHJvZHVjdENhcnRRdWFudGl0eSxcbiAgY2hlY2tQcm9kdWN0SW5XaXNobGlzdCxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gXCIuLi8uLi8uLi9vdGhlci9RdWFudGl0eVNlbGVjdG9yXCI7XG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uLy4uLy4uL290aGVyL1NvY2lhbEljb25zXCI7XG5pbXBvcnQgeyBvbkFkZFByb2R1Y3RUb0NhcnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2NhcnRTZXJ2aWNlc1wiO1xuaW1wb3J0IHsgZmV0Y2hDYXJ0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XG5pbXBvcnQge1xuICBhZGRUb0NvbXBhcmUsXG4gIHJlbW92ZUZyb21Db21wYXJlLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jb21wYXJlQWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlsQ29udGVudCh7IGRhdGEsIHR5cGUgfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtjdXJyZW50UXVhbnRpdHksIHNldEN1cnJlbnRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2FkZFRvQ2FydExvYWRpbmcsIHNldEFkZFRvQ2FydExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcbiAgY29uc3QgY29tcGFyZVN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21wYXJlUmVkdWNlcik7XG4gIGNvbnN0IHByb2R1Y3RJbkNvbXBhcmUgPSBjaGVja1Byb2R1Y3RJbldpc2hsaXN0KGNvbXBhcmVTdGF0ZSwgZGF0YS5pZCk7XG4gIGNvbnN0IGF2YWlhYmxlUXVhbnRpdHkgPVxuICAgIGRhdGEucXVhbnRpdHkgLSBjaGVja1Byb2R1Y3RDYXJ0UXVhbnRpdHkoY2FydFN0YXRlLmRhdGEsIGRhdGEuaWQpO1xuICBjb25zb2xlLmxvZyhhdmFpYWJsZVF1YW50aXR5KTtcbiAgY29uc3Qgb25BZGRUb0NhcnQgPSAocHJvZHVjdCwgcXVhbnRpdHkpID0+IHtcbiAgICBpZiAoYWRkVG9DYXJ0TG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRBZGRUb0NhcnRMb2FkaW5nKHRydWUpO1xuICAgIG9uQWRkUHJvZHVjdFRvQ2FydCh7XG4gICAgICBwcm9kdWN0LFxuICAgICAgcXVhbnRpdHksXG4gICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHNldEFkZFRvQ2FydExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnRcIik7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydFJlcXVlc3QoKSk7XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogKG1lcywgZXJyKSA9PiB7XG4gICAgICAgIHNldEFkZFRvQ2FydExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBtZXNzYWdlLmVycm9yKG1lcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBjb25zdCBvbkFkZFRvQ29tcGFyZSA9IChwcm9kdWN0KSA9PiB7XG4gICAgaWYgKHByb2R1Y3RJbkNvbXBhcmUpIHtcbiAgICAgIGRpc3BhdGNoKHJlbW92ZUZyb21Db21wYXJlKHByb2R1Y3QuaWQpKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBjb21wYXJlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChhZGRUb0NvbXBhcmUocHJvZHVjdCkpO1xuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjb21wYXJlXCIpO1xuICAgIH1cbiAgfTtcbiAgaWYgKHR5cGUgPT09IFwiZmx1aWRcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQgLXdpZGVcIj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsyNH0gc209ezI0fSB4bD17MTZ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19sZWZ0XCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXR5cGVcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fbmFtZVwiPntkYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZFxuICAgICAgICAgICAgICAgICAgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvXG4gICAgICAgICAgICAgICAgICBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkXG4gICAgICAgICAgICAgICAgICBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGFcbiAgICAgICAgICAgICAgICAgIHF1aSBvZmZpY2lhIG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtXG4gICAgICAgICAgICAgICAgICBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZVxuICAgICAgICAgICAgICAgICAgaXBzYSBxdWFlIGFiIGlsbG8gaW52ZW50b3IuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTmVtbyBlbmltIGlwc2FtIHZvbHVwdGF0ZW0gcXVpYSB2b2x1cHRhcyBzaXQgYXNwZXJuYXR1ciBhdXRcbiAgICAgICAgICAgICAgICAgIG9kaXQgYXV0IGZ1Z2l0LCBzZWQgcXVpYSBjb25zZXF1dW50dXIgbWFnbmkgZG9sb3JlcyBlb3MgcXVpXG4gICAgICAgICAgICAgICAgICByYXRpb25lIHZvbHVwdGF0ZW1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fbWV0YVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlNLVTo8L3NwYW4+IEExMzU5XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5DYXRlZ29yaWVzOjwvc3Bhbj4gRmFzdGZvb2RcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlRhZzo8L3NwYW4+IEZvb2QsIE9yZ2FuaWNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3NoYXJlXCI+XG4gICAgICAgICAgICAgICAgPGg1PlNoYXJlIGxpbms6PC9oNT5cbiAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsyNH0gc209ezI0fSB4bD17OH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3JpZ2h0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fZGVsaXZlcnlcIj5cbiAgICAgICAgICAgICAgICBGcmVlIGRlbGl2ZXJ5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2VcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19wcmljZS1kaXNjb3VudFwiPlxuICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cbiAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPFJhdGUgZGVmYXVsdFZhbHVlPXtkYXRhLnJhdGV9IC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxRdWFudGl0eVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHNldEN1cnJlbnRRdWFudGl0eSh2YWwpfVxuICAgICAgICAgICAgICAgIG1heD17YXZhaWFibGVRdWFudGl0eX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgbG9hZGluZz17YWRkVG9DYXJ0TG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9DYXJ0KGRhdGEsIGN1cnJlbnRRdWFudGl0eSl9XG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9Db21wYXJlKGRhdGEpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5Db21wYXJlLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBZGQgdG8gY29tcGFyZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2JlbmVmaXRzXCI+XG4gICAgICAgICAgICAgICAgPGxpPlNhdGlzZmFjdGlvbiAxMDAlIEd1YXJhbnRlZWQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5GcmVlIHNoaXBwaW5nIG9uIG9yZGVycyBvdmVyICQ5OTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjE0IGRheSBlYXN5IFJldHVybjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50XCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC10eXBlXCI+e2RhdGEuY2F0ZWdvcnl9PC9oNT5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19uYW1lXCI+e2RhdGEubmFtZX08L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgICAgIHRlbXBvclxuICAgICAgICB7LyogQ2hhbmdlIHRvIHtkYXRhLmRlc2NyaXB0aW9ufSAqL31cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fZGVsaXZlcnlcIj5GcmVlIGRlbGl2ZXJ5PC9kaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2VcIj5cbiAgICAgICAge2RhdGEuZGlzY291bnQgJiYgPGRlbD57Zm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9PC9kZWw+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3ByaWNlLWRpc2NvdW50XCI+XG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAge2RhdGEuZGlzY291bnRcbiAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcbiAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPFJhdGUgZGVmYXVsdFZhbHVlPXtkYXRhLnJhdGV9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaDM+XG4gICAgICA8UXVhbnRpdHlTZWxlY3RvclxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0Q3VycmVudFF1YW50aXR5KHZhbCl9XG4gICAgICAgIG1heD17YXZhaWFibGVRdWFudGl0eX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2FjdGlvbnNcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGxvYWRpbmc9e2FkZFRvQ2FydExvYWRpbmd9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSwgY3VycmVudFF1YW50aXR5KX1cbiAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluQ29tcGFyZSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0byBjb21wYXJlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3NoYXJlXCI+XG4gICAgICAgIDxoNT5TaGFyZSBsaW5rOjwvaDU+XG4gICAgICAgIDxTb2NpYWxJY29ucyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlYWN0Lm1lbW8oUHJvZHVjdERldGFpbENvbnRlbnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZnVuY3Rpb24gUHJvZHVjdERldGFpbEltYWdlcyh7IHR5cGUsIGltYWdlcyB9KSB7XG4gIGNvbnN0IHNsaWRlcjFTZXR0aW5ncyA9IHtcbiAgICBhcnJvd3M6IGZhbHNlLFxuICB9O1xuICBjb25zdCBzbGlkZXIyU2V0dGluZ3MgPSB7XG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICB2ZXJ0aWNhbDogdHlwZSA9PT0gXCJjb2x1bW5cIiA/IHRydWUgOiBmYWxzZSxcbiAgICAvLyBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgLz4sXG4gICAgLy8gbmV4dEFycm93OiA8TmV4dEFycm93IC8+LFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHZlcnRpY2FsOiB0eXBlID09PSBcImNvbHVtblwiICYmIGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICBjb25zdCBbbmF2MSwgc2V0TmF2MV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbmF2Miwgc2V0TmF2Ml0gPSB1c2VTdGF0ZSgpO1xuICAvLyBpZiAodHlwZSA9PT0gXCJjb2x1bW5cIikge1xuICAvLyAgIHJldHVybiA8aDE+Q29sdW1uPC9oMT47XG4gIC8vIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWRldGFpbC1pbWFnZXMgJHtjbGFzc05hbWVzKHtcbiAgICAgICAgXCItY29sdW1uXCI6IHR5cGUgPT09IFwiY29sdW1uXCIsXG4gICAgICB9KX1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtaW1hZ2VzLWJpZ1wiPlxuICAgICAgICA8U2xpZGVyIGFzTmF2Rm9yPXtuYXYyfSByZWY9eyhjKSA9PiBzZXROYXYxKGMpfSB7Li4uc2xpZGVyMVNldHRpbmdzfT5cbiAgICAgICAgICB7aW1hZ2VzICYmXG4gICAgICAgICAgICBpbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic2xpZGUtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaW1nfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtaW1hZ2VzLXNtYWxsXCI+XG4gICAgICAgIDxTbGlkZXIgYXNOYXZGb3I9e25hdjF9IHJlZj17KGMpID0+IHNldE5hdjIoYyl9IHsuLi5zbGlkZXIyU2V0dGluZ3N9PlxuICAgICAgICAgIHtpbWFnZXMgJiZcbiAgICAgICAgICAgIGltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzbGlkZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpbWd9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFByb2R1Y3REZXRhaWxJbWFnZXMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmF0ZSwgVGFicywgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XG5cbmNvbnN0IFJldmlld0l0ZW0gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3Jldmlld3MtaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3Jldmlld3MtaXRlbV9fYXZhdGFyXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBkYXRhLnVzZXIuYXZhdGFyfVxuICAgICAgICAgIGFsdD1cIkN1c3RvbWVyIGF2YXRhclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxSYXRlIGRlZmF1bHRWYWx1ZT17NX0gZGlzYWJsZWQgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3Jldmlld3MtaXRlbV9fY29udGVudFwiPlxuICAgICAgICA8aDU+e2RhdGEuY29tbWVudERhdGV9PC9oNT5cbiAgICAgICAgPGgzPntkYXRhLnVzZXIubmFtZX08L2gzPlxuICAgICAgICA8cD57ZGF0YS5yZXZpZXd9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsVGFiKHsgZnVsbERlc2NyaXB0aW9uLCBzcGVjaWZpY2F0aW9ucywgcmV2aWV3cyB9KSB7XG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzczpcIiwgdmFsdWVzKTtcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZDpcIiwgZXJyb3JJbmZvKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYlwiPlxuICAgICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIiB0eXBlPVwiY2FyZFwiPlxuICAgICAgICA8VGFiUGFuZSB0YWI9XCJEZXNjcmlwdGlvblwiIGtleT1cIjFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIHtmdWxsRGVzY3JpcHRpb259XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgPFRhYlBhbmUgdGFiPVwiU3BlY2lmaWNhdGlvbnNcIiBrZXk9XCIyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3NwZWNpZmljYXRpb25zXCI+XG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+V2VpZ2h0PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57c3BlY2lmaWNhdGlvbnMud2VpZ2h0fTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+RGltZW5zaW9uczwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIHtzcGVjaWZpY2F0aW9ucy5kaW1lbnNpb25zLmxvbmd9IHh7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtzcGVjaWZpY2F0aW9ucy5kaW1lbnNpb25zLndpZHRofSB4e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7c3BlY2lmaWNhdGlvbnMuZGltZW5zaW9ucy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPkNvbG9yPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57c3BlY2lmaWNhdGlvbnMuY29sb3J9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD5TaXplPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57c3BlY2lmaWNhdGlvbnMuc2l6ZX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgIDxUYWJQYW5lIHRhYj1cIlJldmlld3NcIiBrZXk9XCIzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3Jldmlld3NcIj5cbiAgICAgICAgICAgIHtyZXZpZXdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFJldmlld0l0ZW0ga2V5PXtpbmRleH0gZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3Jldmlld3MtZm9ybVwiPlxuICAgICAgICAgICAgICA8aDU+QWRkIFJldmlldzwvaDU+XG4gICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgbmFtZT1cInJldmlld1wiXG4gICAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNX0+XG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBuYW1lIVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIGVtYWlsIVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJyYXRlXCIgbGFiZWw9XCJZb3VyIHJhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxSYXRlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBzaGFwZT1cInJvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXQgUmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RhYlBhbmU+XG4gICAgICA8L1RhYnM+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdERldGFpbFRhYik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL290aGVyL0NvbnRhaW5lclwiO1xuXG5pbXBvcnQgZm9vdGVyTGlua3MgZnJvbSBcIi4uLy4uL2RhdGEvZm9vdGVyLWxpbmtzLmpzb25cIjtcbmltcG9ydCBGb290ZXJRdWlja0xpbmtzIGZyb20gXCIuL2VsZW1lbnRzL0Zvb3RlclF1aWNrTGlua3NcIjtcbmltcG9ydCBGb290ZXJJbmZvbWF0aW9uIGZyb20gXCIuL2VsZW1lbnRzL0Zvb3RlckluZm9tYXRpb25cIjtcbmltcG9ydCBGb290ZXJTdWJjcmliZUlucHV0IGZyb20gXCIuL2VsZW1lbnRzL0Zvb3RlclN1YmNyaWJlSW5wdXRcIjtcblxuZnVuY3Rpb24gRm9vdGVyRmx1aWQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXIgLWZsdWlkIC1zdHlsZS1vbmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRvcFwiPlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNX0+XG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezl9IGxnPXs2fT5cbiAgICAgICAgICAgICAgPEZvb3RlckluZm9tYXRpb24gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxNX0gbGc9ezEzfT5cbiAgICAgICAgICAgICAgPEZvb3RlclF1aWNrTGlua3MgY29sU2l6ZT17eyBzcGFuOiA4IH19IC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgbGc9ezV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zdWJjcmliZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8aDU+Sm9pbiBPdXIgTmV3c2xldHRlciBOb3c8L2g1PlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEdldCBFLW1haWwgdXBkYXRlcyBhYm91dCBvdXIgbGF0ZXN0IHNob3AgYW5kIHNwZWNpYWwgb2ZmZXJzLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxGb290ZXJTdWJjcmliZUlucHV0IHVybD1cImh0dHBzOi8vanN0ZXIudXM3Lmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PWVkNDBjMDA4NGEwYzViYTMxYjMzNjVkNjUmaWQ9ZWM2ZjMyYmY1ZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3R0b21cIj5cbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3R0b21fX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxwPkNvcHlyaWdodCDCqSAyMDE5IE9nYW1pIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZC48L3A+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Fzc2V0cy9pbWFnZXMvZm9vdGVyL3BheW1lbnQucG5nXCJ9XG4gICAgICAgICAgICAgIGFsdD1cIlBheW1lbnQgbWV0aG9kc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXJGbHVpZCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tIFwiLi4vLi4vb3RoZXIvU29jaWFsSWNvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVySW5mb21hdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1pbmZvXCI+XG4gICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJmb290ZXItaW5mb19fbG9nb1wiPlxuICAgICAgICAgIDxoND5FLVNob3BlcjwvaDQ+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkFkZHJlc3M6IDYwLTQ5IFJvYWQgMTEzNzggTmV3IFlvcms8L2xpPlxuICAgICAgICA8bGk+UGhvbmU6ICs2NSAxMS4xODguODg4PC9saT5cbiAgICAgICAgPGxpPkVtYWlsOiBpbmZvLkUtc2hvcGVyQGdtYWlsLmNvbTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPFNvY2lhbEljb25zIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJjaXJjbGVcIiBjbGFzc05hbWU9XCItYnRuLWxpZ2h0XCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IGZvb3RlckxpbmtzIGZyb20gXCIuLi8uLi8uLi9kYXRhL2Zvb3Rlci1saW5rcy5qc29uXCI7XG5cbmZ1bmN0aW9uIEZvb3RlclF1aWNrTGlua3MoeyBjb2xTaXplIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rc1wiPlxuICAgICAgPFJvdyBndXR0ZXI9ezEwfSBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICB7Zm9vdGVyTGlua3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDb2wga2V5PXtpbmRleH0gey4uLmNvbFNpemV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3NfX2dyb3VwXCI+XG4gICAgICAgICAgICAgIDxoNT57aXRlbS50aXRsZX08L2g1PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2l0ZW0uaXRlbXMubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbGluay5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YT4ge2xpbmsudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICApKX1cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZvb3RlclF1aWNrTGlua3MpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1haWxjaGltcFN1YnNjcmliZSBmcm9tIFwicmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZVwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCBDdXN0b21Gb3JtID0gUmVhY3QubWVtbygoeyBzdGF0dXMsIG1lc3NhZ2UsIG9uVmFsaWRhdGVkIH0pID0+IHtcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3M6XCIsIHZhbHVlKTtcbiAgICB2YWx1ZSAmJlxuICAgICAgb25WYWxpZGF0ZWQoe1xuICAgICAgICBFTUFJTDogdmFsdWUuZW1haWwsXG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZDpcIiwgZXJyb3JJbmZvKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybVxuICAgICAgICBuYW1lPVwiYmFzaWNcIlxuICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlX19mb3JtXCJcbiAgICAgID5cbiAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgIG5vU3R5bGU9e3RydWV9XG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIGlucHV0IGlzIG5vdCB2YWxpZCBFLW1haWwhXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBFLW1haWwhXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCIgLz5cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDxGb3JtLkl0ZW0gbm9TdHlsZT17dHJ1ZX0+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTVUJTQ1JJQkVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8L0Zvcm0+XG4gICAgICB7c3RhdHVzID09PSBcInNlbmRpbmdcIiAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fT5zZW5kaW5nLi4uPC9kaXY+fVxuICAgICAge3N0YXR1cyA9PT0gXCJlcnJvclwiICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtZXNzYWdlIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3N0YXR1cyA9PT0gXCJzdWNjZXNzXCIgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJTdWJjcmliZUlucHV0KHsgdXJsIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TWFpbGNoaW1wU3Vic2NyaWJlXG4gICAgICB1cmw9e3VybH1cbiAgICAgIHJlbmRlcj17KHsgc3Vic2NyaWJlLCBzdGF0dXMsIG1lc3NhZ2UgfSkgPT4gKFxuICAgICAgICA8Q3VzdG9tRm9ybVxuICAgICAgICAgIHN0YXR1cz17c3RhdHVzfVxuICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAgICAgb25WYWxpZGF0ZWQ9eyhmb3JtRGF0YSkgPT4gc3Vic2NyaWJlKGZvcm1EYXRhKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZW51VHdvIGZyb20gXCIuL21lbnUvTWVudVR3b1wiO1xuXG5pbXBvcnQgVG9wTmF2T25lIGZyb20gXCIuL3RvcC1uYXYvVG9wTmF2T25lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlclR3bygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRvcE5hdk9uZSBjb250YWluZXJGbHVpZCAvPlxuICAgICAgPE1lbnVUd28gY29udGFpbmVyRmx1aWQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVRvdGFsUHJpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xuXG5mdW5jdGlvbiBGdW5jdGlvbkl0ZW1zKHsgaGlkZVRvdGFsLCBoaWRlV2lzaGxpc3QgfSkge1xuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmN0aW9uLWl0ZW1zXCI+XG4gICAgICB7IWhpZGVXaXNobGlzdCAmJiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL3dpc2hsaXN0XCJ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZ1bmN0aW9uLWl0ZW1zLWl0ZW1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25faGVhcnRfYWx0XCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG5cbiAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL2NhcnRcIn0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImZ1bmN0aW9uLWl0ZW1zLWl0ZW1cIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2JhZ19hbHRcIiAvPlxuXG4gICAgICAgICAgeyFoaWRlVG90YWwgJiZcbiAgICAgICAgICAgIChjYXJ0U3RhdGUuZGF0YSA/IChcbiAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdEN1cnJlbmN5KGNhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlLmRhdGEpKX08L3NwYW4+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0Q3VycmVuY3koMCl9PC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGdW5jdGlvbkl0ZW1zKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IE1vYmlsZU5hdmlnYXRvciBmcm9tIFwiLi9Nb2JpbGVOYXZpZ2F0b3JcIjtcblxuZnVuY3Rpb24gTW9iaWxlTWVudU9wZW5lcigpIHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvblNob3dEcmF3ZXIgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgfTtcbiAgY29uc3Qgb25DbG9zZURyYXdlciA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGEgb25DbGljaz17b25TaG93RHJhd2VyfSBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1vcGVuZXJcIiBocmVmPVwiI1wiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiIC8+XG4gICAgICA8L2E+XG4gICAgICA8RHJhd2VyXG4gICAgICAgIHRpdGxlPVwiQ2xvc2VcIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlRHJhd2VyfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCJcbiAgICAgICAgd2lkdGg9ezMyMH1cbiAgICAgID5cbiAgICAgICAgPE1vYmlsZU5hdmlnYXRvciAvPlxuICAgICAgPC9EcmF3ZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTW9iaWxlTWVudU9wZW5lcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgbmF2aWdhdG9yRGF0YSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9uYXZpZ2F0b3IuanNvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNvY2lhbEljb25zIGZyb20gXCIuLi8uLi9vdGhlci9Tb2NpYWxJY29uc1wiO1xuXG5mdW5jdGlvbiBNb2JpbGVOYXZpZ2F0b3IoKSB7XG4gIGNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnQ6IGUua2V5IH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGVcIj5cbiAgICAgIDxNZW51XG4gICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlLW5hdmlnYXRvclwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX1cbiAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICA+XG4gICAgICAgIDxTdWJNZW51IGtleT1cImhvbWVwYWdlXCIgdGl0bGU9e25hdmlnYXRvckRhdGEuSE9NRS50aXRsZX0+XG4gICAgICAgICAge25hdmlnYXRvckRhdGEuSE9NRS5zdWJNZW51Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICA8U3ViTWVudSBrZXk9XCJzaG9wXCIgdGl0bGU9e25hdmlnYXRvckRhdGEuU0hPUC50aXRsZX0+XG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcCBsYXlvdXRcIiB0aXRsZT1cIkxheW91dCBzaG9wXCI+XG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUubGF5b3V0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcCBkZXRhaWxcIiB0aXRsZT1cIkRldGFpbCBzaG9wXCI+XG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUuZGV0YWlsLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcCBwYWdlc1wiIHRpdGxlPVwiUGFnZXMgc2hvcFwiPlxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LnBhZ2VzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgPFN1Yk1lbnUga2V5PVwicGFnZXNcIiB0aXRsZT17bmF2aWdhdG9yRGF0YS5QQUdFUy50aXRsZX0+XG4gICAgICAgICAge25hdmlnYXRvckRhdGEuUEFHRVMuc3ViTWVudS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+IHtpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJhbGlwYXlcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5BQk9VVC5ocmVmfT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FudC5kZXNpZ25cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hdmlnYXRvckRhdGEuQUJPVVQudGl0bGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgIDwvTWVudT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtZnVuY3Rpb25zXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9vdGhlci9sb2dpblwifT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1mdW5jdGlvbnNfX2xvZ2luXCI+TG9naW4gLyBSZWdpc3RlcjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE1vYmlsZU5hdmlnYXRvcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgbmF2aWdhdG9yRGF0YSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9uYXZpZ2F0b3IuanNvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBOYXZpZ2F0b3IoKSB7XG4gIGNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW0gLXRvZ2dsZWFibGVcIj5cbiAgICAgICAgPExpbmsgaHJlZj17bmF2aWdhdG9yRGF0YS5IT01FLmhyZWZ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5IT01FLnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX19zdWJtZW51XCI+XG4gICAgICAgICAge25hdmlnYXRvckRhdGEuSE9NRS5zdWJNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW0gLXRvZ2dsZWFibGVcIj5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuU0hPUC5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuU0hPUC50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudSAtd2lkZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX19zdWJtZW51LWdyb3VwXCI+XG4gICAgICAgICAgICA8aDU+TGF5b3V0IHNob3A8L2g1PlxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LmxheW91dC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudS1ncm91cFwiPlxuICAgICAgICAgICAgPGg1PkRldGFpbCBzaG9wPC9oNT5cbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5kZXRhaWwubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnUtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxoNT5QYWdlcyBzaG9wPC9oNT5cbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5wYWdlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtIC10b2dnbGVhYmxlXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkJMT0cuaHJlZn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkJMT0cudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5CTE9HLnN1Yk1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbSAtdG9nZ2xlYWJsZVwiPlxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5QQUdFUy5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuUEFHRVMudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5QQUdFUy5zdWJNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuQUJPVVQuaHJlZn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkFCT1VULnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE5hdmlnYXRvcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlbGVjdCwgQXV0b0NvbXBsZXRlLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgY2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jYXRlZ29yaWVzLmpzb25cIjtcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3VzZURlYm91bmRcIjtcbmltcG9ydCB7IGZldGNoU2VhcmNoZWRQcm9kdWN0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIFNlYXJjaEZvcm0oeyBlbnRlckJ1dHRvbiA9IFwiU2VhcmNoXCIsIGhpZGVTZWxlY3QgfSkge1xuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbY3VycmVudFNlYXJjaCwgc2V0Q3VycmVudFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRDYXRlZ29yeSwgc2V0Q3VycmVudENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkZWJvdW5kVmFsdWUgPSB1c2VEZWJvdW5jZShjdXJyZW50U2VhcmNoLCAzMDApO1xuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcbiAgY29uc3QgeyBzZWFyY2hlZFByb2R1Y3RzIH0gPSBzaG9wU3RhdGU7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgIHNldEN1cnJlbnRTZWFyY2godmFsKTtcbiAgfTtcbiAgY29uc3Qgb25TZWxlY3RPcHRpb24gPSAodmFsdWUsIG9wdGlvbikgPT4ge1xuICAgIHNldEN1cnJlbnRTZWFyY2godmFsdWUpO1xuICB9O1xuICBjb25zdCBvblNlYXJjaCA9ICh2YWwpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRTZWFyY2ggfHwgY3VycmVudFNlYXJjaCA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIsXG4gICAgICAgIHF1ZXJ5OiB7IHE6IGN1cnJlbnRTZWFyY2ggfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25DaG9vc2VDYXRlb2dyeSA9ICh2YWwpID0+IHtcbiAgICBzZXRDdXJyZW50Q2F0ZWdvcnkodmFsKTtcbiAgfTtcbiAgY29uc3Qgb3B0aW9ucyA9XG4gICAgc2VhcmNoZWRQcm9kdWN0cy5kYXRhLmxlbmd0aCA+IDAgJiZcbiAgICBzZWFyY2hlZFByb2R1Y3RzLmRhdGEubWFwKChpdGVtKSA9PiAoeyB2YWx1ZTogaXRlbS5uYW1lIH0pKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0KHtcbiAgICAgICAgaW5wdXQ6IGN1cnJlbnRTZWFyY2gsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgY2F0ZWdvcnk6IGN1cnJlbnRDYXRlZ29yeSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW2RlYm91bmRWYWx1ZSwgY3VycmVudENhdGVnb3J5XSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS13cmFwcGVyXCI+XG4gICAgICAgIHshaGlkZVNlbGVjdCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS1zZWxlY3RcIj5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXJyZW50Q2F0ZWdvcnl9XG4gICAgICAgICAgICAgIHN1ZmZpeEljb249ezxpIGNsYXNzTmFtZT1cImZhciBmYS1hbmdsZS1kb3duXCIgLz59XG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hvb3NlQ2F0ZW9ncnl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj5BbGwgY2F0ZWdvcmllczwvT3B0aW9uPlxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbS52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm0taW5wdXRcIj5cbiAgICAgICAgICA8QXV0b0NvbXBsZXRlXG4gICAgICAgICAgICBiYWNrZmlsbFxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3RPcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXRWYWx1ZSwgb3B0aW9uKSA9PlxuICAgICAgICAgICAgICBvcHRpb24udmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGlucHV0VmFsdWUudG9VcHBlckNhc2UoKSkgIT09XG4gICAgICAgICAgICAgIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0LlNlYXJjaFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG5lZWRcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBlbnRlckJ1dHRvbj17ZW50ZXJCdXR0b259XG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgbG9hZGluZz17c2VhcmNoZWRQcm9kdWN0cy5sb2FkaW5nfVxuICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlYXJjaEZvcm0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcbmltcG9ydCBOYXZpZ2F0b3IgZnJvbSBcIi4uL2VsZW1lbnRzL05hdmlnYXRvclwiO1xuaW1wb3J0IEZ1bmN0aW9uSXRlbXMgZnJvbSBcIi4uL2VsZW1lbnRzL0Z1bmN0aW9uSXRlbXNcIjtcbmltcG9ydCBNb2JpbGVNZW51T3BlbmVyIGZyb20gXCIuLi9lbGVtZW50cy9Nb2JpbGVNZW51T3BlbmVyXCI7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi4vZWxlbWVudHMvU2VhcmNoRm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51VHdvKHsgY29udGFpbmVyRmx1aWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSAtc3R5bGUtdHdvXCI+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPXtjb250YWluZXJGbHVpZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS13cmFwcGVyXCI+XG4gICAgICAgICAgPE1vYmlsZU1lbnVPcGVuZXIgLz5cbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1sb2dvXCI+XG4gICAgICAgICAgICA8aDQ+RS1TaG9wZXI8L2g0PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8U2VhcmNoRm9ybSBlbnRlckJ1dHRvbj17PGkgY2xhc3NOYW1lPVwiaWNvbl9zZWFyY2hcIiAvPn0gLz5cbiAgICAgICAgICA8TmF2aWdhdG9yIC8+XG4gICAgICAgICAgPEZ1bmN0aW9uSXRlbXMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IFNvY2lhbEljb25zIGZyb20gXCIuLi8uLi9vdGhlci9Tb2NpYWxJY29uc1wiO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgZmxhZ0RhdGEgPSBbXG4gIHsgbmFtZTogXCJlbmdsaXNoXCIsIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2hlYWRlci9mbGFnLXVzYS5wbmdcIiB9LFxuICB7IG5hbWU6IFwiamFwYW5lc2VcIiwgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2ZsYWctanAucG5nXCIgfSxcbiAgeyBuYW1lOiBcInZpZXRuYW1lc2VcIiwgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2ZsYWctdm4ucG5nXCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcE5hdk9uZSh7IGNvbnRhaW5lckZsdWlkIH0pIHtcbiAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtb25lXCI+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPXtjb250YWluZXJGbHVpZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmUtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmUtbGVmdFwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlXCIgLz5cbiAgICAgICAgICAgICAgICBpbmZvLkUtc2hvcGVyQGdtYWlsLmNvbVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lLWFsdFwiIC8+XG4gICAgICAgICAgICAgICAgKzY1IDExLjE4OC44ODhcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodF9faXRlbVwiPlxuICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodF9faXRlbVwiPlxuICAgICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT1cImVuZ2xpc2hcIiB3aWR0aD17MTI1fSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIHtmbGFnRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTMgLyAxNiArIFwiZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCAvIDE2ICsgXCJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogLTMgLyAxNiArIFwiZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1IC8gMTYgKyBcImVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmUtcmlnaHRfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2F1dGgvbG9naW5cIn0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBCYWNrVG9wIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IEhlYWRlclR3byBmcm9tIFwiLi4vaGVhZGVyL0hlYWRlclR3b1wiO1xuaW1wb3J0IHdpdGhIZWFkZXJTY3JvbGwgZnJvbSBcIi4uLy4uL2NvbW1vbi93aXRoSGVhZGVyU2Nyb2xsXCI7XG5pbXBvcnQgRm9vdGVyRmx1aWQgZnJvbSBcIi4uL2Zvb3Rlci9Gb290ZXJGbHVpZFwiO1xuXG5jb25zdCBTY3JvbGxlZEhlYWRlciA9IHdpdGhIZWFkZXJTY3JvbGwoSGVhZGVyVHdvKTtcblxuZnVuY3Rpb24gTGF5b3V0T25lKHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTY3JvbGxlZEhlYWRlciAvPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPEZvb3RlckZsdWlkIC8+XG4gICAgICA8QmFja1RvcCAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKExheW91dE9uZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgYmVuZWZpdHNEYXRhIGZyb20gXCIuLi8uLi9kYXRhL2JlbmVmaXRzLmpzb25cIjtcblxuZnVuY3Rpb24gQmVuZWZpdHMoeyBjb250YWluZXJGbHVpZCwgY29sdW1uLCB0aHJlZUNvbCwgc3R5bGUsIGNsYXNzTmFtZSB9KSB7XG4gIGNvbnN0IHJlbmRlckNvbCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhyZWVDb2xcbiAgICAgID8geyB4czogMjQsIG1kOiA4IH1cbiAgICAgIDogY29sdW1uXG4gICAgICA/IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA2LCBsZzogMjQgfVxuICAgICAgOiB7IHhzOiAyNCwgbWQ6IDYgfTtcbiAgfTtcbiAgY29uc3QgY29sID0gcmVuZGVyQ29sKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgYmVuZWZpdHMgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSwgeyBcIi1jb2x1bW5cIjogY29sdW1uIH0pfWB9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZW5lZml0cy13cmFwcGVyXCI+XG4gICAgICAgIDxSb3cgZ3V0dGVyPXsxMH0+XG4gICAgICAgICAge2JlbmVmaXRzRGF0YVxuICAgICAgICAgICAgLnNsaWNlKDAsIHRocmVlQ29sID8gMyA6IGJlbmVmaXRzRGF0YS5sZW5ndGgpXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IHsuLi5yZW5kZXJDb2woKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZW5lZml0cy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJlbmVmaXRzLWl0ZW1fX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5pY29uU3JjfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJCZW5lZml0IGljb25cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJiZW5lZml0cy1pdGVtX190aXRsZVwiPntpdGVtLm5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJlbmVmaXRzLWl0ZW1fX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJlbmVmaXRzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHsgZmx1aWQsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Zmx1aWQgPyBcImNvbnRhaW5lci1mbHVpZFwiIDogXCJjb250YWluZXJcIn0+e2NoaWxkcmVufTwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2tlbGV0b24sIEVtcHR5IH0gZnJvbSBcImFudGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmV0Y2hEYXRhSGFuZGxlKHtcbiAgZGF0YSxcbiAgZXJyb3JNZXNzYWdlID0gXCJHZXQgcHJvZHVjdHMgZmFpbCwgcGxlYXNlIHRyeSBhZ2FpblwiLFxuICBlbXB0eURlc2NyaXB0aW9uID0gXCJObyBwcm9kdWN0IGluIHRoaXMgY2F0ZWdvcnlcIixcbiAgcmVuZGVyRGF0YSxcbn0pIHtcbiAgcmV0dXJuIGRhdGEubG9hZGluZyA/IChcbiAgICA8U2tlbGV0b24gYWN0aXZlIC8+XG4gICkgOiBkYXRhLmVycm9yID8gKFxuICAgIDxoMz57ZXJyb3JNZXNzYWdlfTwvaDM+XG4gICkgOiBkYXRhLmRhdGEubGVuZ3RoID4gMCA/IChcbiAgICByZW5kZXJEYXRhICYmIHJlbmRlckRhdGEoZGF0YS5kYXRhKVxuICApIDogKFxuICAgIDxFbXB0eVxuICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XG4gICAgICBkZXNjcmlwdGlvbj17ZW1wdHlEZXNjcmlwdGlvbn1cbiAgICAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSBcIi4uLy4uL2NvbW1vbi91c2VEZWJvdW5kXCI7XG5cbmZ1bmN0aW9uIFF1YW50aXR5U2VsZWN0b3Ioe1xuICBtaW4sXG4gIG1heCxcbiAgZGVmYXVsdFZhbHVlID0gMSxcbiAgY2xhc3NOYW1lLFxuICBvbkNoYW5nZSxcbiAgb25EZWNyZWFzZSxcbiAgb25JbmNyZWFzZSxcbn0pIHtcbiAgY29uc3QgZmlyc3RVcGRhdGUgPSB1c2VSZWYodHJ1ZSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKTtcbiAgY29uc3QgZGVib3VuZFZhbHVlID0gdXNlRGVib3VuY2UodmFsdWUsIDMwMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZpcnN0VXBkYXRlLmN1cnJlbnQpIHtcbiAgICAgIGZpcnN0VXBkYXRlLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UodmFsdWUpO1xuICB9LCBbZGVib3VuZFZhbHVlXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VmFsdWUoZGVmYXVsdFZhbHVlKTtcbiAgfSwgW2RlZmF1bHRWYWx1ZV0pO1xuICBjb25zdCBkZWNyZWFzZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChtaW4gJiYgdmFsdWUgPD0gbWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSA8PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG9uRGVjcmVhc2UgJiYgb25EZWNyZWFzZSgpO1xuICAgICAgc2V0VmFsdWUodmFsdWUgLSAxKTtcbiAgICB9XG4gIH0sIFt2YWx1ZV0pO1xuICBjb25zdCBpbmNyZWFzZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh2YWx1ZSA+PSBtYXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb25JbmNyZWFzZSAmJiBvbkluY3JlYXNlKCk7XG4gICAgc2V0VmFsdWUodmFsdWUgKyAxKTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BxdWFudGl0eS1zZWxlY3RvciAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHktc2VsZWN0b3ItbnVtYmVyXCI+e3ZhbHVlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eS1zZWxlY3Rvci1jb250cm9sbGVyXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwibGlua1wiXG4gICAgICAgICAgZGlzYWJsZWQ9e3ZhbHVlIDw9IG1pbiB8fCB2YWx1ZSA8PSAxfVxuICAgICAgICAgIG9uQ2xpY2s9e2RlY3JlYXNlVmFsdWV9XG4gICAgICAgID5cbiAgICAgICAgICAtXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgZGlzYWJsZWQ9e3ZhbHVlID49IG1heH0gb25DbGljaz17aW5jcmVhc2VWYWx1ZX0+XG4gICAgICAgICAgK1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFF1YW50aXR5U2VsZWN0b3IpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZnVuY3Rpb24gU2VjdGlvblRpdGxlKHsgdGl0bGUsIGhpZGVEZWNvcmF0aW9uLCBjbGFzc05hbWUsIHN0eWxlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHNlY3Rpb24tdGl0bGUgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIHshaGlkZURlY29yYXRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlLWRlY29yYXRpb25cIiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTZWN0aW9uVGl0bGUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2lhbEljb25zKHsgY2xhc3NOYW1lLCB0eXBlID0gXCJsaW5rXCIsIHNoYXBlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtgc29jaWFsLWljb25zICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW52aXNpb25cIj48L2k+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPXt0eXBlfSBzaGFwZT17c2hhcGV9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXBpbnRlcmVzdC1wXCI+PC9pPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBCdXR0b24sIG1lc3NhZ2UsIFJhdGUsIFRvb2x0aXAsIE1vZGFsIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDb3VudGRvd24sIHsgemVyb1BhZCB9IGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcblxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgeyBjaGVja1Byb2R1Y3RJbldpc2hsaXN0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcbmltcG9ydCB7IGZldGNoQ2FydFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xuaW1wb3J0IHsgZmV0Y2hXaXNoTGlzdFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy93aXNobGlzdEFjdGlvbnNcIjtcbmltcG9ydCB7XG4gIGFkZFRvQ29tcGFyZSxcbiAgcmVtb3ZlRnJvbUNvbXBhcmUsXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NvbXBhcmVBY3Rpb25zXCI7XG5pbXBvcnQgeyBvbkFkZFByb2R1Y3RUb0NhcnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NhcnRTZXJ2aWNlc1wiO1xuaW1wb3J0IHtcbiAgb25BZGRQcm9kdWN0VG9XaXNobGlzdCxcbiAgb25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0LFxufSBmcm9tIFwiLi4vLi4vY29tbW9uL3dpc2hsaXN0U2VydmljZXNcIjtcbmltcG9ydCBQcm9kdWN0RGV0YWlsTGF5b3V0IGZyb20gXCIuLi9kZXRhaWwvcHJvZHVjdC9Qcm9kdWN0RGV0YWlsTGF5b3V0XCI7XG5cbmZ1bmN0aW9uIFByb2R1Y3QoeyBkYXRhLCBjbGFzc05hbWUsIHR5cGUsIGNvdW50ZG93bkxhc3QgPSAxMDAwMDAwMDAgfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFttb2RhbFZpc2libGUsIHNldE1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthZGRUb0NhcnRMb2FkaW5nLCBzZXRBZGRUb0NhcnRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FkZFRvV2lzaGxpc3RMb2FkaW5nLCBzZXRBZGRUb1dpc2hsaXN0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xuICBjb25zdCB3aXNobGlzdFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS53aXNobGlzdFJlZHVjZXIpO1xuICBjb25zdCBjb21wYXJlU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbXBhcmVSZWR1Y2VyKTtcbiAgY29uc3QgcHJvZHVjdEluV2lzaGxpc3QgPSBjaGVja1Byb2R1Y3RJbldpc2hsaXN0KHdpc2hsaXN0U3RhdGUuZGF0YSwgZGF0YS5pZCk7XG4gIGNvbnN0IHByb2R1Y3RJbkNvbXBhcmUgPSBjaGVja1Byb2R1Y3RJbldpc2hsaXN0KGNvbXBhcmVTdGF0ZSwgZGF0YS5pZCk7XG4gIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbFZpc2libGUodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IG9uTW9kYWxDbG9zZSA9IChlKSA9PiB7XG4gICAgc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgfTtcbiAgY29uc3Qgb25BZGRUb0NhcnQgPSAocHJvZHVjdCkgPT4ge1xuICAgIGlmIChhZGRUb0NhcnRMb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEFkZFRvQ2FydExvYWRpbmcodHJ1ZSk7XG4gICAgb25BZGRQcm9kdWN0VG9DYXJ0KHtcbiAgICAgIHByb2R1Y3QsXG4gICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHNldEFkZFRvQ2FydExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnRcIik7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydFJlcXVlc3QoKSk7XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogKG1lcywgZXJyKSA9PiB7XG4gICAgICAgIHNldEFkZFRvQ2FydExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBtZXNzYWdlLmVycm9yKG1lcyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBjb25zdCBvbkFkZFdpc2hsaXN0ID0gKHByb2R1Y3QpID0+IHtcbiAgICBpZiAoYWRkVG9XaXNobGlzdExvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0QWRkVG9XaXNobGlzdExvYWRpbmcodHJ1ZSk7XG4gICAgaWYgKCFwcm9kdWN0SW5XaXNobGlzdCkge1xuICAgICAgb25BZGRQcm9kdWN0VG9XaXNobGlzdCh7XG4gICAgICAgIHByb2R1Y3QsXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRBZGRUb1dpc2hsaXN0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byB3aXNobGlzdFwiKTtcbiAgICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0UmVxdWVzdCgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogKG1lcywgZXJyKSA9PiB7XG4gICAgICAgICAgc2V0QWRkVG9XaXNobGlzdExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IobWVzKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uUmVtb3ZlUHJvZHVjdEZyb21XaXNobGlzdCh7XG4gICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcbiAgICAgICAgb25TdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldEFkZFRvV2lzaGxpc3RMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiUHJvZHVjdCByZW1vdmVkIGZyb20gd2lzaGxpc3RcIik7XG4gICAgICAgICAgZGlzcGF0Y2goZmV0Y2hXaXNoTGlzdFJlcXVlc3QoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IChtZXMsIGVycikgPT4ge1xuICAgICAgICAgIHNldEFkZFRvV2lzaGxpc3RMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKG1lcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25BZGRUb0NvbXBhcmUgPSAocHJvZHVjdCkgPT4ge1xuICAgIGlmIChwcm9kdWN0SW5Db21wYXJlKSB7XG4gICAgICBkaXNwYXRjaChyZW1vdmVGcm9tQ29tcGFyZShwcm9kdWN0LmlkKSk7XG4gICAgICBtZXNzYWdlLmVycm9yKFwiUHJvZHVjdCByZW1vdmVkIGZyb20gY29tcGFyZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goYWRkVG9Db21wYXJlKHByb2R1Y3QpKTtcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2R1Y3QgYWRkZWQgdG8gY29tcGFyZVwiKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldFJhbmRvbUFyYml0cmFyeSA9IChtaW4sIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gIH07XG4gIGNvbnN0IHJlZGVyUHJvZHVjdFR5cGUgPSAodHlwZSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInRpbnlcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3QtdGlueSAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC10aW55LWltZ1wiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9e2RhdGEubmFtZX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5jb3ZlckltYWdlfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXRpbnktY29udGVudFwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC10aW55LW5hbWVcIiB0aXRsZT1cIlB1cmUgUGluZWFwcGxlXCI+XG4gICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC10aW55LXByaWNlXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnRcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpXG4gICAgICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIDxkZWw+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvZGVsPn1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgY2FzZSBcImRhbGVcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3QtZGFsZSAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWltZ1wiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9e2RhdGEubmFtZX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5jb3ZlckltYWdlfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Q291bnRkb3duXG4gICAgICAgICAgICAgIGRhdGU9e0RhdGUubm93KCkgKyBnZXRSYW5kb21BcmJpdHJhcnkoMTAwMDAwMDAwLCAxNTAwMDAwMDApfVxuICAgICAgICAgICAgICByZW5kZXJlcj17KHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1jb3VudGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQoZGF5cyl9PC9oNj4gPHNwYW4+ZGF5czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvdW50ZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKGhvdXJzKX08L2g2PiA8c3Bhbj5ocjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvdW50ZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKG1pbnV0ZXMpfSA8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm1pbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvdW50ZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKHNlY29uZHMpfTwvaDY+IDxzcGFuPnNlYzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS10eXBlXCI+e2RhdGEuY2F0ZWdvcnl9PC9oNT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1uYW1lXCIgdGl0bGU9XCJQdXJlIFBpbmVhcHBsZVwiPlxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1wcmljZVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XG4gICAgICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50KVxuICAgICAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLXNlbGVjdFwiPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFkZCB0byB3aXNobGlzdFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkV2lzaGxpc3QoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWJ0biAke2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbldpc2hsaXN0LFxuICAgICAgICAgICAgICAgICAgfSl9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvV2lzaGxpc3RMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1oZWFydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIGNhcnRcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ2FydChkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydExvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXNob3BwaW5nLWJhZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIGNvbXBhcmVcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ29tcGFyZShkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtYnRuICR7Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluQ29tcGFyZSxcbiAgICAgICAgICAgICAgICAgIH0pfWB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGljb249ezxpIGNsYXNzTmFtZT1cImZhciBmYS1yYW5kb21cIiAvPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiUXVpY2sgdmlld1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWV5ZVwiIC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgY2FzZSBcImxpc3RcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbGlzdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltZ1wiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9e2RhdGEubmFtZX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5jb3ZlckltYWdlfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3Nob3dNb2RhbH0+XG4gICAgICAgICAgICAgICAgUXVpY2sgdmlld1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC10eXBlXCI+e2RhdGEuY2F0ZWdvcnl9PC9oNT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiIHRpdGxlPVwiUHVyZSBQaW5lYXBwbGVcIj5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxSYXRlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1yYXRlXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5yYXRlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIG5pYW1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICB7ZGF0YS5xdWFudGl0eSA+IDAgPyAoXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtYXZhaWxhYmlsaXR5IC1pbnN0b2NrXCI+XG4gICAgICAgICAgICAgICAgICBBdmFpbGFiaWxpdHk6IDxzcGFuPiB7ZGF0YS5xdWFudGl0eX0gaW4gc3RvY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC1hdmFpbGFiaWxpdHkgLW91dHN0b2NrXCI+XG4gICAgICAgICAgICAgICAgICBBdmFpbGFiaWxpdHk6IDxzcGFuPiBPdXQgc3RvY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2RlbGl2ZXJ5XCI+XG4gICAgICAgICAgICAgICAgRnJlZSBkZWxpdmVyeVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3ByaWNlXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnQgJiYgPGRlbD57Zm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9PC9kZWw+fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2UtZGlzY291bnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnRcbiAgICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50KVxuICAgICAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9XG4gICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ2FydChkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2FkZFRvQ2FydExvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9Db21wYXJlKGRhdGEpfVxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbkNvbXBhcmUsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBZGQgdG8gY29tcGFyZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3QgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1nXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSB0aXRsZT17ZGF0YS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmNvdmVySW1hZ2V9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC10eXBlXCI+e2RhdGEuY2F0ZWdvcnl9PC9oNT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiIHRpdGxlPVwiUHVyZSBQaW5lYXBwbGVcIj5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnRcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpXG4gICAgICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIDxkZWw+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvZGVsPn1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXNlbGVjdFwiPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFkZCB0byB3aXNobGlzdFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkV2lzaGxpc3QoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWJ0biAke2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbldpc2hsaXN0LFxuICAgICAgICAgICAgICAgICAgfSl9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvV2lzaGxpc3RMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1oZWFydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIGNhcnRcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ2FydChkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydExvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXNob3BwaW5nLWJhZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIGNvbXBhcmVcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ29tcGFyZShkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtYnRuICR7Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluQ29tcGFyZSxcbiAgICAgICAgICAgICAgICAgIH0pfWB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGljb249ezxpIGNsYXNzTmFtZT1cImZhciBmYS1yYW5kb21cIiAvPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiUXVpY2sgdmlld1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWV5ZVwiIC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3JlZGVyUHJvZHVjdFR5cGUodHlwZSl9XG4gICAgICA8TW9kYWxcbiAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxuICAgICAgICBvbkNhbmNlbD17b25Nb2RhbENsb3NlfVxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgIGhlYWRlcj17bnVsbH1cbiAgICAgICAgd2lkdGg9ezg2MH1cbiAgICAgID5cbiAgICAgICAgPFByb2R1Y3REZXRhaWxMYXlvdXQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19IGhpZGVUYWIgZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdCk7XG4iLCJpbXBvcnQgeyBCdXR0b24sIENvbCwgUm93IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xuXG5mdW5jdGlvbiBCYW5uZXJPbmUoeyBkYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1vbmVcIj5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbMzAsIDMwXX0+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENvbCBrZXk9e2luZGV4fSBzbT17MjR9IGxnPXsxMn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXItb25lLWl0ZW0gdXAtZG93bi1hbmltLWhvdmVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5iYWNrZ3JvdW5kXG4gICAgICAgICAgICAgICAgICB9JylgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Um93IGFsaWduPVwibWlkZGxlXCIganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgPENvbCBzbT17MjR9IG1kPXsxMH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLW9uZS1pdGVtX19pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSW50cm9kdWN0aW9uIGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCBzbT17MjR9IG1kPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItb25lLWl0ZW1fX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnQubWFpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7aXRlbS5jb250ZW50LnNwYW59PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvcCBub3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJhbm5lck9uZSk7XG4iLCJpbXBvcnQgeyBCdXR0b24sIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb3VudGRvd24sIHsgemVyb1BhZCB9IGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuLi8uLi9vdGhlci9TZWN0aW9uVGl0bGVcIjtcblxuZnVuY3Rpb24gRG93VHdvKHsgY291bnRkb3duTGFzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb3ctdHdvXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93IGFsaWduPVwibWlkZGxlXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICA8Q29sIHNtPXsyNH0gbGc9ezEyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LXR3by1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJEZWFsIE9mIFRoZSBXZWVrXCIgaGlkZURlY29yYXRpb24gLz5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXR0XG4gICAgICAgICAgICAgICAgaW5jaWRpZHVudCB1dCBsYWJvcmVcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8Q291bnRkb3duXG4gICAgICAgICAgICAgICAgZGF0ZT17RGF0ZS5ub3coKSArIGNvdW50ZG93bkxhc3R9XG4gICAgICAgICAgICAgICAgcmVuZGVyZXI9eyh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LXR3by1jb3VudGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy10d28tY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChkYXlzKX08L2g2PiA8c3Bhbj5kYXlzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LXR3by1jb3VudGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKGhvdXJzKX08L2g2PiA8c3Bhbj5ocjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy10d28tY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChtaW51dGVzKX0gPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm1pbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy10d28tY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChzZWNvbmRzKX08L2g2PiA8c3Bhbj5zZWM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIn0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCJ9PlxuICAgICAgICAgICAgICAgICAgICBTaG9wIG5vd1xuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIGxnPXsxMH0+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy10d28taW1nIHVwLWRvd24tYW5pbVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xuICAgICAgICAgICAgICAgICAgXCIvYXNzZXRzL2ltYWdlcy9zZWN0aW9ucy9kYWxlLW9mLXdlZWsvdHdvLzEucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWx0PVwiRGFsZSBvZiB0aGUgd2VlayBpbWFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhEb3dUd28pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIEhlcm9TbGlkZXJUd28oeyBjb250YWluZXJGbHVpZCwgZGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlciAtc2luZ2xlIC1zdHlsZS10d29cIj5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ9e2NvbnRhaW5lckZsdWlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGRhdGEuYmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgYWx0PVwiSGVybyBzbGlkZXIgYmFja2dyb3VuZCBpbWFnZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXItY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cIm1pZGRsZVwiIGd1dHRlcj17MzB9PlxuICAgICAgICAgICAgICA8Q29sIHNtPXs4fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2xpZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNT57ZGF0YS5zdWJUaXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgPGgxPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlLm1haW4pfVxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ve2RhdGEucHJpY2UudW5pdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwifT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgU2hvcCBub3dcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBzbT17OH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiL2Fzc2V0cy9pbWFnZXMvaGVyby1zbGlkZXIvb25lLzEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJIZXJvIHNsaWRlciBpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1zdWJpdGVtc1wiPlxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNX0+XG4gICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheSgzKSwgKGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q29sIGtleT17aX0gc209ezh9IG1kPXsxMn0gbGc9ezh9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwifT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiem9vbS1pblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYC9hc3NldHMvaW1hZ2VzL2hlcm8tc2xpZGVyL3R3by8ke2kgKyAxfS5wbmdgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJIZXJvIHNsaWRlciBzdWIgaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSGVyb1NsaWRlclR3byk7XG4iLCJpbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vcHJvZHVjdC9Qcm9kdWN0XCI7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuLi8uLi9vdGhlci9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCBGZXRjaERhdGFIYW5kbGUgZnJvbSBcIi4uLy4uL290aGVyL0ZldGNoRGF0YUhhbmRsZVwiO1xuXG5mdW5jdGlvbiBQcm9kdWN0R3JpZCh7XG4gIHN0eWxlLFxuICBwcm9kdWN0Q2xhc3NOYW1lLFxuICBwcm9kdWN0Q29sLFxuICBwcm9kdWN0VHlwZSxcbiAgZGF0YSxcbiAgaGVhZGVyVGl0bGUsXG4gIGhlYWRlckNsYXNzLFxuICBoaWRlSGVhZGVyLFxuICBmaXZlQ29sLFxuICBjbGFzc05hbWUsXG4gIGd1dHRlciA9IFtcbiAgICB7IHhzOiAwLCBtZDogMTUgfSxcbiAgICB7IHhzOiAwLCBtZDogMTUgfSxcbiAgXSxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3QtZ3JpZCAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfSBzdHlsZT17c3R5bGV9PlxuICAgICAgeyFoaWRlSGVhZGVyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9kdWN0LWdyaWQtaGVhZGVyICR7Y2xhc3NOYW1lcyhoZWFkZXJDbGFzcyl9YH0+XG4gICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT17aGVhZGVyVGl0bGV9IGhpZGVEZWNvcmF0aW9uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1ncmlkLWNvbnRlbnRcIj5cbiAgICAgICAgPEZldGNoRGF0YUhhbmRsZVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgcmVuZGVyRGF0YT17KGRhdGEpID0+IChcbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtndXR0ZXJ9PlxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0Q29sfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgXCJmaXZlLWNvbFwiOiBmaXZlQ29sIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3Byb2R1Y3RUeXBlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb2R1Y3RDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0R3JpZCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFicywgUm93LCBDb2wsIEVtcHR5LCBTa2VsZXRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuLi8uLi9vdGhlci9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi8uLi9wcm9kdWN0L1Byb2R1Y3RcIjtcbmltcG9ydCBGZXRjaERhdGFIYW5kbGUgZnJvbSBcIi4uLy4uL290aGVyL0ZldGNoRGF0YUhhbmRsZVwiO1xuXG5mdW5jdGlvbiBQcm9kdWN0VGFiKHtcbiAgc3R5bGUsXG4gIGRhdGEsXG4gIGNsYXNzTmFtZSxcbiAgb25UYWJDaGFuZ2UsXG4gIHByb2R1Y3RDbGFzc05hbWUsXG4gIGhlYWRlckNhdGVnb3JpZXMsXG4gIGhlYWRlclRpdGxlLFxuICBoZWFkZXJDbGFzcyxcbiAgc2hvd1RpdGxlRGVjb3JhdGlvbiA9IGZhbHNlLFxuICBoZWFkZXJUeXBlID0gXCJncmlkXCIsXG4gIHByb2R1Y3RDb2wsXG59KSB7XG4gIGNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcbiAgY29uc3Qgb25DaG9vc2VDYXRlZ29yeSA9IChrZXkpID0+IHtcbiAgICBvblRhYkNoYW5nZShrZXkpO1xuICB9O1xuICBjb25zdCByZW5kZXJUYWJDb250ZW50ID0gKCkgPT4gKFxuICAgIDxGZXRjaERhdGFIYW5kbGVcbiAgICAgIGRhdGE9e2RhdGF9XG4gICAgICByZW5kZXJEYXRhPXsoZGF0YSkgPT4gKFxuICAgICAgICA8Um93XG4gICAgICAgICAgZ3V0dGVyPXtbXG4gICAgICAgICAgICB7IHhzOiAwLCBtZDogMTUgfSxcbiAgICAgICAgICAgIHsgeHM6IDAsIG1kOiAxNSB9LFxuICAgICAgICAgIF19XG4gICAgICAgID5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IHsuLi5wcm9kdWN0Q29sfT5cbiAgICAgICAgICAgICAgPFByb2R1Y3QgY2xhc3NOYW1lPXtwcm9kdWN0Q2xhc3NOYW1lfSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUm93PlxuICAgICAgKX1cbiAgICAvPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdC10YWIgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgcHJvZHVjdC10YWItaGVhZGVyICR7XG4gICAgICAgICAgaGVhZGVyVHlwZSA9PT0gXCJyb3dcIiA/IFwiLXN0eWxlLXR3b1wiIDogXCJzdHlsZS1vbmVcIlxuICAgICAgICB9ICAke2NsYXNzTmFtZXMoaGVhZGVyQ2xhc3MpfWB9XG4gICAgICA+XG4gICAgICAgIHtoZWFkZXJUeXBlID09PSBcImdyaWRcIiAmJiAoXG4gICAgICAgICAgPFNlY3Rpb25UaXRsZVxuICAgICAgICAgICAgdGl0bGU9e2hlYWRlclRpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiLWNlbnRlclwiXG4gICAgICAgICAgICBoaWRlRGVjb3JhdGlvbj17c2hvd1RpdGxlRGVjb3JhdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8VGFic1xuICAgICAgICAgIHRhYkJhckV4dHJhQ29udGVudD17XG4gICAgICAgICAgICBoZWFkZXJUeXBlID09PSBcInJvd1wiXG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgbGVmdDogKFxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvblRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2hlYWRlclRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIi1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGhpZGVEZWNvcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCJcbiAgICAgICAgICBjZW50ZXJlZD17aGVhZGVyVHlwZSA9PT0gXCJyb3dcIiA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaG9vc2VDYXRlZ29yeX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIkFsbFwiIGtleT1cIlwiPlxuICAgICAgICAgICAge3JlbmRlclRhYkNvbnRlbnQoKX1cbiAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAge2hlYWRlckNhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPXtpdGVtfSBrZXk9e2l0ZW19PlxuICAgICAgICAgICAgICB7cmVuZGVyVGFiQ29udGVudCgpfVxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1RhYnM+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0VGFiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0ICogYXMgc2hvcEFjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvc2hvcEFjdGlvbnNcIjtcbmltcG9ydCBMYXlvdXRUd28gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFR3b1wiO1xuaW1wb3J0IEhlcm9TbGlkZXJUd28gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyby1zbGlkZXIvSGVyb1NsaWRlclR3b1wiO1xuaW1wb3J0IFByb2R1Y3RUYWIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJvZHVjdC10aHVtYi9Qcm9kdWN0VGFiXCI7XG5pbXBvcnQgaGVyb3NsaWRlclR3b0RhdGEgZnJvbSBcIi4uLy4uL2RhdGEvc2VjdGlvbnMvaGVyby1zbGlkZXIuanNvblwiO1xuaW1wb3J0IGNhdGVnb3JpZXMgZnJvbSBcIi4uLy4uL2RhdGEvY2F0ZWdvcmllcy5qc29uXCI7XG5pbXBvcnQgQmVuZWZpdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3RoZXIvQmVuZWZpdHNcIjtcbmltcG9ydCBQcm9kdWN0R3JpZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wcm9kdWN0LXRodW1iL1Byb2R1Y3RHcmlkXCI7XG5pbXBvcnQgRG93VHdvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb25zL2RhbGUtb2Ytd2Vlay9Eb3dUd29cIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgQmFubmVyT25lIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb25zL2Jhbm5lci9CYW5uZXJPbmVcIjtcbmltcG9ydCBiYW5uZXJEYXRhIGZyb20gXCIuLi8uLi9kYXRhL3NlY3Rpb25zL2Jhbm5lci5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVwYWdlMigpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbY3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnksIHNldEN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5XSA9IHVzZVN0YXRlKHtcbiAgICBmZWF0dXJlZFByb2R1Y3RzOiBcIlwiLFxuICAgIHNhbGVQcm9kdWN0czogXCJcIixcbiAgICBiZXN0U2VsbGVyUHJvZHVjdHM6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcbiAgY29uc3Qge1xuICAgIHByb2R1Y3RzLFxuICAgIHNhbGVQcm9kdWN0cyxcbiAgICBmZWF0dXJlZFByb2R1Y3RzLFxuICAgIGJlc3RTZWxsZXJQcm9kdWN0cyxcbiAgfSA9IHNob3BTdGF0ZTtcbiAgY29uc3Qge1xuICAgIGZldGNoU2FsZVByb2R1Y3RzUmVxdWVzdCxcbiAgICBmZXRjaEZlYXR1cmVkUHJvZHVjdHNSZXF1ZXN0LFxuICAgIGZldGNoQmVzdFNlbGxlclByb2R1Y3RzUmVxdWVzdCxcbiAgICBmZXRjaFByb2R1Y3RzUmVxdWVzdCxcbiAgfSA9IHNob3BBY3Rpb25zO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNSZXF1ZXN0KHsgbGltaXQ6IDEwLCBzb3J0OiB7fSB9KSk7XG4gICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzUmVxdWVzdCh7IGxpbWl0OiAxMiB9KSk7XG4gICAgZGlzcGF0Y2goZmV0Y2hTYWxlUHJvZHVjdHNSZXF1ZXN0KHsgbGltaXQ6IDYgfSkpO1xuICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzUmVxdWVzdCh7IGxpbWl0OiA2IH0pKTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzUmVxdWVzdCh7XG4gICAgICAgIGxpbWl0OiAxMixcbiAgICAgICAgY2F0ZWdvcnk6IGN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LmZlYXR1cmVkUHJvZHVjdHMsXG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeS5mZWF0dXJlZFByb2R1Y3RzXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBmZXRjaFNhbGVQcm9kdWN0c1JlcXVlc3Qoe1xuICAgICAgICBsaW1pdDogNixcbiAgICAgICAgY2F0ZWdvcnk6IGN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LnNhbGVQcm9kdWN0cyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW2N1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LnNhbGVQcm9kdWN0c10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNSZXF1ZXN0KHtcbiAgICAgICAgbGltaXQ6IDYsXG4gICAgICAgIGNhdGVnb3J5OiBjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeS5iZXN0U2VsbGVyUHJvZHVjdHMsXG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeS5iZXN0U2VsbGVyUHJvZHVjdHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRUd28gdGl0bGU9XCJIb21lcGFnZSAyXCI+XG4gICAgICA8SGVyb1NsaWRlclR3byBjb250YWluZXJGbHVpZCBkYXRhPXtoZXJvc2xpZGVyVHdvRGF0YS5vbmVbMF19IC8+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICA8UHJvZHVjdFRhYlxuICAgICAgICAgIGRhdGE9e2ZlYXR1cmVkUHJvZHVjdHN9XG4gICAgICAgICAgb25UYWJDaGFuZ2U9eyh2YWwpID0+XG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSh7XG4gICAgICAgICAgICAgIC4uLmN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LFxuICAgICAgICAgICAgICBmZWF0dXJlZFByb2R1Y3RzOiB2YWwsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXJDYXRlZ29yaWVzPXtjYXRlZ29yaWVzLnNsaWNlKDAsIDUpLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKX1cbiAgICAgICAgICBoZWFkZXJUaXRsZT1cIkZlYXR1cmVkIFByb2R1Y3RcIlxuICAgICAgICAgIHByb2R1Y3RDbGFzc05hbWU9XCItYm9yZGVybGVzc1wiXG4gICAgICAgICAgcHJvZHVjdENvbD17eyB4czogMTIsIHNtOiA4LCBsZzogNiwgeGw6IDQgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgPEJlbmVmaXRzIGNsYXNzTmFtZT1cIi1ib3JkZXJlZFwiIGNvbnRhaW5lckZsdWlkIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxEb3dUd28gY291bnRkb3duTGFzdD17MTAwMDAwMDAwfSAvPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgPFByb2R1Y3RUYWJcbiAgICAgICAgICBkYXRhPXtiZXN0U2VsbGVyUHJvZHVjdHN9XG4gICAgICAgICAgb25UYWJDaGFuZ2U9eyh2YWwpID0+XG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSh7XG4gICAgICAgICAgICAgIC4uLmN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LFxuICAgICAgICAgICAgICBiZXN0U2VsbGVyUHJvZHVjdHM6IHZhbCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlckNhdGVnb3JpZXM9e2NhdGVnb3JpZXMuc2xpY2UoMCwgNSkubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpfVxuICAgICAgICAgIGhlYWRlclR5cGU9XCJyb3dcIlxuICAgICAgICAgIGhlYWRlclRpdGxlPVwiQmVzdCBzZWxsZXJcIlxuICAgICAgICAgIHByb2R1Y3RDbGFzc05hbWU9XCItYm9yZGVybGVzc1wiXG4gICAgICAgICAgcHJvZHVjdENvbD17eyB4czogMTIsIHNtOiA4LCBsZzogNiwgeGw6IDQgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2R1Y3RUYWJcbiAgICAgICAgICBkYXRhPXtzYWxlUHJvZHVjdHN9XG4gICAgICAgICAgb25UYWJDaGFuZ2U9eyh2YWwpID0+XG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSh7XG4gICAgICAgICAgICAgIC4uLmN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LFxuICAgICAgICAgICAgICBzYWxlUHJvZHVjdHM6IHZhbCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlckNhdGVnb3JpZXM9e2NhdGVnb3JpZXMuc2xpY2UoMCwgNSkubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpfVxuICAgICAgICAgIGhlYWRlclR5cGU9XCJyb3dcIlxuICAgICAgICAgIGhlYWRlclRpdGxlPVwiRmVhdHVyZWQgUHJvZHVjdHNcIlxuICAgICAgICAgIHByb2R1Y3RDbGFzc05hbWU9XCItYm9yZGVybGVzc1wiXG4gICAgICAgICAgcHJvZHVjdENvbD17eyB4czogMTIsIHNtOiA4LCBsZzogNiwgeGw6IDQgfX1cbiAgICAgICAgLz5cblxuICAgICAgICA8UHJvZHVjdEdyaWRcbiAgICAgICAgICBkYXRhPXtwcm9kdWN0c31cbiAgICAgICAgICBoZWFkZXJUaXRsZT1cIk5ldyBQcm9kdWN0c1wiXG4gICAgICAgICAgcHJvZHVjdENvbD17eyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2IH19XG4gICAgICAgICAgcHJvZHVjdFR5cGU9XCJ0aW55XCJcbiAgICAgICAgICBmaXZlQ29sXG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxCYW5uZXJPbmUgZGF0YT17YmFubmVyRGF0YS5vbmV9IC8+XG4gICAgPC9MYXlvdXRUd28+XG4gICk7XG59XG4iLCJleHBvcnQgY29uc3QgU0hPUCA9IHtcbiAgRkVUQ0hfUFJPRFVDVFM6IFwiRkVUQ0hfUFJPRFVDVFNcIixcbiAgRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9TQUxFX1BST0RVQ1RTOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNcIixcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTOiBcIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTXCIsXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMOiBcIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFM6IFwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNcIixcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9EQUxFX1BST0RVQ1RTOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNcIixcbiAgRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMOiBcIkZFVENIX1BST0RVQ1RfREVUQUlMXCIsXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1M6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTU1wiLFxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMOiBcIkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUxcIixcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFM6IFwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNcIixcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IEJMT0cgPSB7XG4gIEZFVENIX1BPU1RTOiBcIkZFVENIX1BPU1RTXCIsXG4gIEZFVENIX1BPU1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUE9TVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9QT1NUU19GQUlMOiBcIkZFVENIX1BPU1RTX0ZBSUxcIixcbiAgRkVUQ0hfUE9TVF9ERVRBSUw6IFwiRkVUQ0hfUE9TVF9ERVRBSUxcIixcbiAgRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUzogXCJGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTXCIsXG4gIEZFVENIX1BPU1RfREVUQUlMX0ZBSUw6IFwiRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTFwiLFxuICBGRVRDSF9SRUNFTlRfUE9TVFM6IFwiRkVUQ0hfUkVDRU5UX1BPU1RTXCIsXG4gIEZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTXCIsXG4gIEZFVENIX1JFQ0VOVF9QT1NUU19GQUlMOiBcIkZFVENIX1JFQ0VOVF9QT1NUU19GQUlMXCIsXG59O1xuXG5leHBvcnQgY29uc3QgU0hPUF9GSUxURVIgPSB7XG4gIFJFU0VUX0ZJTFRFUlM6IFwiUkVTRVRfRklMVEVSU1wiLFxuICBTRVRfU09SVDogXCJTRVRfU09SVFwiLFxuICBTRVRfU0hPVzogXCJTRVRfU0hPV1wiLFxuICBTRVRfVklFVzogXCJTRVRfVklFV1wiLFxuICBTRVRfQ0FURUdPUlk6IFwiU0VUX0NBVEVHT1JZXCIsXG4gIFNFVF9DT0xPUjogXCJTRVRfQ09MT1JcIixcbiAgU0VUX1NJWkU6IFwiU0VUX1NJWkVcIixcbiAgU0VUX1RBRzogXCJTRVRfVEFHXCIsXG59O1xuXG5leHBvcnQgY29uc3QgQ0FSVCA9IHtcbiAgRkVUQ0hfQ0FSVDogXCJGRVRDSF9DQVJUXCIsXG4gIEZFVENIX0NBUlRfU1VDQ0VTUzogXCJGRVRDSF9DQVJUX1NVQ0NFU1NcIixcbiAgRkVUQ0hfQ0FSVF9GQUlMOiBcIkZFVENIX0NBUlRfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IFdJU0hMSVNUID0ge1xuICBGRVRDSF9XSVNITElTVDogXCJGRVRDSF9XSVNITElTVFwiLFxuICBGRVRDSF9XSVNITElTVF9TVUNDRVNTOiBcIkZFVENIX1dJU0hMSVNUX1NVQ0NFU1NcIixcbiAgRkVUQ0hfV0lTSExJU1RfRkFJTDogXCJGRVRDSF9XSVNITElTVF9GQUlMXCIsXG59O1xuXG5leHBvcnQgY29uc3QgQ09NUEFSRSA9IHtcbiAgQUREX1RPX0NPTVBBUkU6IFwiQUREX1RPX0NPTVBBUkVcIixcbiAgUkVNT1ZFX0ZST01fQ09NUEFSRTogXCJSRU1PVkVfRlJPTV9DT01QQVJFXCIsXG59O1xuXG5leHBvcnQgY29uc3QgQkxPR19GSUxURVIgPSB7XG4gIFJFU0VUX0ZJTFRFUlM6IFwiUkVTRVRfRklMVEVSU1wiLFxuICBTRVRfQ0FURUdPUlk6IFwiU0VUX0NBVEVHT1JZXCIsXG4gIFNFVF9UQUc6IFwiU0VUX1RBR1wiLFxufTtcbiIsImltcG9ydCB7IENBUlQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuaW1wb3J0ICogYXMgY2FydEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvY2FydFwiO1xuXG4vL0dldCBjYXJ0IGRhdGFcbmV4cG9ydCBjb25zdCBmZXRjaENhcnQgPSAoKSA9PiAoe1xuICB0eXBlOiBDQVJULkZFVENIX0NBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJUX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnRGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJUX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydFJlcXVlc3QgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaENhcnQoKSk7XG4gICAgY2FydEFwaXNcbiAgICAgIC5mZXRjaENhcnREYXRhKClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0U3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydEZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBDT01QQVJFIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUb0NvbXBhcmUgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQ09NUEFSRS5BRERfVE9fQ09NUEFSRSxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21Db21wYXJlID0gKHByb2R1Y3RJZCkgPT4gKHtcbiAgdHlwZTogQ09NUEFSRS5SRU1PVkVfRlJPTV9DT01QQVJFLFxuICBwYXlsb2FkOiB7XG4gICAgcHJvZHVjdElkLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBTSE9QIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5pbXBvcnQgKiBhcyBzaG9wQXBpcyBmcm9tIFwiLi4vLi4vYXBpcy9zaG9wXCI7XG5cbi8vR2V0IGFsbCBwcm9kdWN0c1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzU3VjY2VzcyA9IChkYXRhLCBwcm9kdWN0Q291bnQpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gICAgcHJvZHVjdENvdW50LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHMoKSk7XG4gICAgc2hvcEFwaXNcbiAgICAgIC5mZXRjaFByb2R1Y3RzRGF0YShxdWVyeSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEsIHJlcy5oZWFkZXJzW1wieC10b3RhbC1jb3VudFwiXSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuXG4vL0dldCBzYWxlIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hTYWxlUHJvZHVjdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoU2FsZVByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hTYWxlUHJvZHVjdHNEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNhbGVQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNhbGVQcm9kdWN0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IGZlYXR1cmVkIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEZlYXR1cmVkUHJvZHVjdHMoKSk7XG4gICAgc2hvcEFwaXNcbiAgICAgIC5mZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEZlYXR1cmVkUHJvZHVjdHNTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgYmVzdCBzZWxsZXIgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0cyA9ICgpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmVzdFNlbGxlclByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0ZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmVzdFNlbGxlclByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHMoKSk7XG4gICAgc2hvcEFwaXNcbiAgICAgIC5mZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0RhdGEocXVlcnkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgYmVzdCBzZWxsZXIgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0cyA9ICgpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHNTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHNGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hEYWxlUHJvZHVjdHMoKSk7XG4gICAgc2hvcEFwaXNcbiAgICAgIC5mZXRjaERhbGVQcm9kdWN0c0RhdGEocXVlcnkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgcHJvZHVjdCBkZXRhaWxcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWwgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbEZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbFJlcXVlc3QgPSAoc2x1ZykgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0RGV0YWlsKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YShzbHVnKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3REZXRhaWxTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0RGV0YWlsRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgc2VhcmNoZWQgcHJvZHVjdFxuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3QgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3RGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdFJlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoU2VhcmNoZWRQcm9kdWN0KCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hTZWFyY2hlZFByb2R1Y3REYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNlYXJjaGVkUHJvZHVjdFN1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNlYXJjaGVkUHJvZHVjdEZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBXSVNITElTVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5pbXBvcnQgKiBhcyB3aXNobGlzdEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvd2lzaGxpc3RcIjtcblxuLy9HZXQgY2FydCBkYXRhXG5jb25zdCBmZXRjaFdpc2hMaXN0ID0gKCkgPT4gKHtcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1QsXG59KTtcblxuY29uc3QgZmV0Y2hXaXNoTGlzdFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuY29uc3QgZmV0Y2hXaXNoTGlzdEZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBXSVNITElTVC5GRVRDSF9XSVNITElTVF9GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFdpc2hMaXN0UmVxdWVzdCA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3QoKSk7XG4gICAgd2lzaGxpc3RBcGlzXG4gICAgICAuZmV0Y2hXaXNobGlzdERhdGEoKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0U3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnRkb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9