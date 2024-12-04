/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes slideFromRight {
  0% {
    right: -100%;
    opacity: 0;
  }
  100% {
    right: 0%;
    opacity: 1;
  }
}
@keyframes slideFromLeft {
  0% {
    left: -100%;
    opacity: 0;
  }
  100% {
    left: 0%;
    opacity: 1;
  }
}
@keyframes growFontSize {
  0% {
    font-size: 1rem;
  }
  100% {
    font-size: 2.5rem;
  }
}
header {
  padding: 40px 40px 0 40px;
  overflow: hidden;
  position: relative;
}
header .background {
  background-color: #0891b2;
  clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 100%);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100vw;
}
header .info-container .image-container {
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  animation: slideFromLeft 2s ease-out forwards;
}
header .info-container .image-container img {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 80%;
}
header .info-container .image-container .name-container {
  position: absolute;
  bottom: 0;
  left: 6%;
  color: #f1f5f9;
  font-family: "Playfair Display", serif;
  padding: 15px 30px;
  width: 95%;
  text-align: left;
  animation: growFontSize 2.3s ease-out forwards;
}
header .info-container .about-container {
  position: relative;
  animation: slideFromRight 2s ease-out forwards;
}
header .info-container .about-container h1 {
  text-align: center;
  font-family: "Playfair Display", serif;
  animation: growFontSize 2.3s ease-out forwards;
}
header .info-container .about-container p {
  font-size: 1.5rem;
  user-select: none;
  padding-bottom: 15px;
}
header .info-container .about-container p:first-of-type {
  padding-top: 25px;
}
header .info-container .about-container .references {
  text-align: center;
}
header .info-container .about-container .references img {
  width: 40px;
}

@media (min-width: 600px) and (max-width: 1099px) {
  header .background {
    height: 80vw;
    clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 74%);
  }
  header .info-container .image-container {
    float: left;
    box-shadow: none;
    padding-right: 20px;
    max-width: 40%;
    margin: 0;
    z-index: 1;
  }
  header .info-container .image-container img {
    width: 100%;
  }
  header .info-container .image-container .name-container {
    top: 0;
    left: -15%;
    padding: 0;
    width: 300%;
    text-align: unset;
  }
  header .info-container .about-container {
    width: 90%;
    padding: 100px 30px 40px 30px;
    background-color: #f1f5f9;
    margin-left: 70px;
    transform: translateY(15%);
  }
  header .info-container .about-container .about-text {
    transform: translateY(-18%);
  }
  header .info-container .about-container h1 {
    transform: translateY(-130%);
  }
  header .info-container .about-container .references {
    display: none;
  }
}
@media (min-width: 1099px) {
  header {
    padding: 40px 40px 0 40px;
  }
  header .background {
    height: 35vw;
  }
  header .info-container {
    display: flex;
    align-items: center;
  }
  header .info-container .image-container {
    max-width: 28%;
    margin: 0;
  }
  header .info-container .image-container img {
    width: 100%;
  }
  header .info-container .image-container .name-container {
    left: 0;
    padding: 10px;
  }
  header .info-container .about-container {
    background-color: #f1f5f9;
    padding: 20px;
    overflow: hidden;
  }
  header .info-container .about-container p {
    font-size: 1.5rem;
  }
  header .info-container .about-container .references {
    text-align: right;
  }
}
@media (min-width: 2000px) {
  header {
    display: flex;
    justify-content: center;
  }
  header .background {
    height: 30vh;
  }
  header .info-container {
    max-width: 2000px;
  }
  header .info-container .image-container {
    max-width: 20%;
  }
}
main {
  padding: 0 40px;
}
main h1 {
  text-align: center;
  color: #374151;
  font-family: "Playfair Display", serif;
  padding-bottom: 30px;
  position: relative;
  animation: growFontSize 2s ease-out forwards;
}
main .projects-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}
main .projects-container .project {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 1s ease-in-out 0.5s;
}
main .projects-container .project .screenshot {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
main .projects-container .project .project-info {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
}
main .projects-container .project .project-info .name {
  color: #374151;
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
}
main .projects-container .project .project-info .links {
  display: flex;
  align-items: center;
  gap: 15px;
}
main .projects-container .project .project-info .links img {
  width: 20px;
}
main .projects-container .project .project-info .links img:hover {
  transform: scale(1.2);
}

@media (min-width: 600px) and (max-width: 1099px) {
  main .projects-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
}
@media (min-width: 1099px) {
  main .projects-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 100px;
  }
}
@media (min-width: 2000px) {
  main .projects-container {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
  }
}
footer {
  background-color: #0891b2;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
footer h1 {
  text-align: center;
  color: #f1f5f9;
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
}
footer h2 {
  color: #f1f5f9;
  font-size: 1.5rem;
  font-weight: 500;
}
footer p {
  color: #f1f5f9;
  font-size: 1.2rem;
}
footer .github-text {
  text-align: center;
}
footer .github-text img {
  width: 60px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  color: #475569;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.landmark {
  opacity: 0;
  transition: opacity 1s ease-in-out 0.5s;
}

.visible {
  opacity: 1 !important;
}

@media (min-width: 600px) and (max-width: 1099px) {
  body {
    gap: 75px;
  }
}
@media (min-width: 1099px) {
  body {
    gap: 100px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/animations.scss","webpack://./src/index.scss","webpack://./src/styles/header.scss","webpack://./src/styles/variables.scss","webpack://./src/styles/main.scss","webpack://./src/styles/footer.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes slideFromRight {\r\n  0% {\r\n    right: -100%;\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    right: 0%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slideFromLeft {\r\n  0% {\r\n    left: -100%;\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    left: 0%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes growFontSize {\r\n  0% {\r\n    font-size: 1rem;\r\n  }\r\n  100% {\r\n    font-size: 2.5rem;\r\n  }\r\n}\r\n","// @use \"variables\" as var;\r\n@use \"./styles/variables.scss\" as var;\r\n@use \"./styles/header.scss\";\r\n@use \"./styles/main.scss\";\r\n@use \"./styles/footer.scss\";\r\n@use \"./styles/animations.scss\";\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var.$text-font;\r\n  color: var.$body-text-dark-color;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 50px;\r\n}\r\n\r\n.landmark {\r\n  opacity: 0;\r\n  transition: opacity 1s ease-in-out 0.5s;\r\n}\r\n\r\n.visible {\r\n  opacity: 1 !important;\r\n}\r\n\r\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\r\n  body {\r\n    gap: 75px;\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  body {\r\n    gap: 100px;\r\n  }\r\n}\r\n","@use \"variables\" as var;\r\n@use \"animations.scss\";\r\n\r\nheader {\r\n  padding: 40px 40px 0 40px;\r\n  overflow: hidden;\r\n  position: relative;\r\n\r\n  .background {\r\n    background-color: #0891b2;\r\n    clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 100%);\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    height: 100vw;\r\n  }\r\n\r\n  .info-container {\r\n    .image-container {\r\n      text-align: center;\r\n      margin-bottom: 50px;\r\n      position: relative;\r\n      animation: slideFromLeft 2s ease-out forwards;\r\n\r\n      img {\r\n        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n        width: 80%;\r\n      }\r\n\r\n      .name-container {\r\n        position: absolute;\r\n        bottom: 0;\r\n        left: 6%;\r\n        color: var.$heading-light-color;\r\n        font-family: var.$headings-font;\r\n        padding: 15px 30px;\r\n        width: 95%;\r\n        text-align: left;\r\n        animation: growFontSize 2.3s ease-out forwards;\r\n      }\r\n    }\r\n\r\n    .about-container {\r\n      position: relative;\r\n      animation: slideFromRight 2s ease-out forwards;\r\n\r\n      h1 {\r\n        text-align: center;\r\n        font-family: var.$headings-font;\r\n        animation: growFontSize 2.3s ease-out forwards;\r\n      }\r\n\r\n      p {\r\n        font-size: 1.5rem;\r\n        user-select: none;\r\n        padding-bottom: 15px;\r\n      }\r\n\r\n      p:first-of-type {\r\n        padding-top: 25px;\r\n      }\r\n\r\n      .references {\r\n        text-align: center;\r\n\r\n        img {\r\n          width: 40px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\r\n  header {\r\n    .background {\r\n      height: 80vw;\r\n      clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 74%);\r\n    }\r\n\r\n    .info-container {\r\n      .image-container {\r\n        float: left;\r\n        box-shadow: none;\r\n        padding-right: 20px;\r\n        max-width: 40%;\r\n        margin: 0;\r\n        z-index: 1;\r\n\r\n        img {\r\n          width: 100%;\r\n        }\r\n\r\n        .name-container {\r\n          top: 0;\r\n          left: -15%;\r\n          padding: 0;\r\n          width: 300%;\r\n          text-align: unset;\r\n        }\r\n      }\r\n\r\n      .about-container {\r\n        width: 90%;\r\n        padding: 100px 30px 40px 30px;\r\n        background-color: #f1f5f9;\r\n        margin-left: 70px;\r\n        transform: translateY(15%);\r\n\r\n        .about-text {\r\n          transform: translateY(-18%);\r\n        }\r\n\r\n        h1 {\r\n          transform: translateY(-130%);\r\n        }\r\n\r\n        .references {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  header {\r\n    padding: 40px 40px 0 40px;\r\n\r\n    .background {\r\n      height: 35vw;\r\n    }\r\n\r\n    .info-container {\r\n      display: flex;\r\n      align-items: center;\r\n\r\n      .image-container {\r\n        max-width: 28%;\r\n        margin: 0;\r\n\r\n        img {\r\n          width: 100%;\r\n        }\r\n\r\n        .name-container {\r\n          left: 0;\r\n          padding: 10px;\r\n        }\r\n      }\r\n\r\n      .about-container {\r\n        background-color: #f1f5f9;\r\n        padding: 20px;\r\n        overflow: hidden;\r\n\r\n        p {\r\n          font-size: 1.5rem;\r\n        }\r\n\r\n        .references {\r\n          text-align: right;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-ultrawide) {\r\n  header {\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    .background {\r\n      height: 30vh;\r\n    }\r\n\r\n    .info-container {\r\n      max-width: 2000px;\r\n\r\n      .image-container {\r\n        max-width: 20%;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\r\n\r\n$heading-light-color: #f1f5f9;\r\n$heading-dark-color: #374151;\r\n$body-text-dark-color: #475569;\r\n$headings-font: \"Playfair Display\", serif;\r\n$text-font: \"Roboto\", sans-serif;\r\n$breakpoint-tablet: 600px;\r\n$breakpoint-desktop: 1099px;\r\n$breakpoint-ultrawide: 2000px;\r\n","@use \"variables\" as var;\r\n@use \"animations.scss\";\r\n\r\nmain {\r\n  padding: 0 40px;\r\n\r\n  h1 {\r\n    text-align: center;\r\n    color: var.$heading-dark-color;\r\n    font-family: var.$headings-font;\r\n    padding-bottom: 30px;\r\n    position: relative;\r\n    animation: growFontSize 2s ease-out forwards;\r\n  }\r\n\r\n  .projects-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 30px;\r\n\r\n    .project {\r\n      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n      border-radius: 10px;\r\n      opacity: 0;\r\n      transition: opacity 1s ease-in-out 0.5s;\r\n\r\n      .screenshot {\r\n        width: 100%;\r\n        border-top-left-radius: 10px;\r\n        border-top-right-radius: 10px;\r\n      }\r\n\r\n      .project-info {\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        align-items: center;\r\n        padding: 10px 0;\r\n\r\n        .name {\r\n          color: var.$heading-dark-color;\r\n          font-family: var.$headings-font;\r\n          font-size: 1.5rem;\r\n        }\r\n\r\n        .links {\r\n          display: flex;\r\n          align-items: center;\r\n          gap: 15px;\r\n\r\n          img {\r\n            width: 20px;\r\n            &:hover {\r\n              transform: scale(1.2);\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\r\n  main {\r\n    .projects-container {\r\n      grid-template-columns: repeat(2, 1fr);\r\n      gap: 50px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  main {\r\n    .projects-container {\r\n      grid-template-columns: repeat(3, 1fr);\r\n      gap: 100px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-ultrawide) {\r\n  main {\r\n    .projects-container {\r\n      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\r\n      gap: 20px;\r\n    }\r\n  }\r\n}\r\n","@use \"variables\" as var;\r\n\r\nfooter {\r\n  background-color: #0891b2;\r\n  padding: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n\r\n  h1 {\r\n    text-align: center;\r\n    color: var.$heading-light-color;\r\n    font-family: var.$headings-font;\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  h2 {\r\n    color: var.$heading-light-color;\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n  }\r\n\r\n  p {\r\n    color: var.$heading-light-color;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .github-text {\r\n    text-align: center;\r\n\r\n    img {\r\n      width: 60px;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjects)
/* harmony export */ });
/* harmony import */ var _src_assets_images_screenshots_cv_application_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _src_assets_images_screenshots_todo_list_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _src_assets_images_screenshots_weather_app_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _src_assets_images_screenshots_calculator_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _src_assets_images_screenshots_etch_a_skatch_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _src_assets_images_screenshots_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _src_assets_images_links_external_link_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _src_assets_images_screenshots_memory_card_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */









const imageMap = {
  "CV-application": _src_assets_images_screenshots_cv_application_png__WEBPACK_IMPORTED_MODULE_0__,
  "todo-list": _src_assets_images_screenshots_todo_list_png__WEBPACK_IMPORTED_MODULE_1__,
  "weather-app": _src_assets_images_screenshots_weather_app_png__WEBPACK_IMPORTED_MODULE_2__,
  "memory-card": _src_assets_images_screenshots_memory_card_png__WEBPACK_IMPORTED_MODULE_7__,
  calculator: _src_assets_images_screenshots_calculator_png__WEBPACK_IMPORTED_MODULE_3__,
  "admin-dashboard": _src_assets_images_screenshots_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_5__,
  "etch-a-sketch": _src_assets_images_screenshots_etch_a_skatch_png__WEBPACK_IMPORTED_MODULE_4__,
};

function createProjects() {
  const projects = [
    "CV-application",
    "todo-list",
    "weather-app",
    "memory-card",
    "calculator",
    "admin-dashboard",
    "etch-a-sketch",
  ];

  const projectsContainer = document.querySelector(".projects-container");

  projects.forEach((el) => {
    if (el === "etch-a-sketch") return;
    const project = document.createElement("div");
    project.classList.add("project");
    projectsContainer.appendChild(project);

    const image = new Image();
    image.classList.add("screenshot");
    image.src = imageMap[el];
    project.appendChild(image);

    const projectInfo = document.createElement("div");
    projectInfo.classList.add("project-info");
    project.appendChild(projectInfo);

    const parsedName = el
      .replace(/^\w/, (c) => c.toUpperCase())
      .replace(/-/g, " ");

    const name = document.createElement("h2");
    name.classList.add("name");
    name.textContent = parsedName;
    projectInfo.appendChild(name);

    const links = document.createElement("div");
    links.classList.add("links");
    projectInfo.appendChild(links);

    const ghLink = document.createElement("a");
    if (el === "CV-application")
      ghLink.href = `https://github.com/saba-bar95/cv-app`;
    if (el !== "CV-application") {
      ghLink.href = `https://github.com/saba-bar95/${el}`;
    }
    ghLink.target = "_blank";
    links.appendChild(ghLink);

    const github = new Image();

    github.src =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
    ghLink.appendChild(github);

    const liveLink = document.createElement("a");

    if (el === "CV-application")
      liveLink.href = "https://cv-app-pi.vercel.app/";
    if (el === "memory-card")
      liveLink.href = "https://memory-card-alpha-bay.vercel.app/";

    if (el !== "CV-application" && el !== "memory-card") {
      liveLink.href = `https://saba-bar95.github.io/${el}/`;
    }
    liveLink.target = "_blank";
    links.appendChild(liveLink);

    const live = new Image();
    live.src = _src_assets_images_links_external_link_png__WEBPACK_IMPORTED_MODULE_6__;
    liveLink.appendChild(live);
  });
}


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf2c55455f85697420b5.png";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "861bb8395b50f4e3f6dd.png";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3040dcfbdd7fc6c78527.png";

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "551f5b4dfd6e10d28889.png";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6d1fa5086314c0c14a1.png";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70eb30f5c4db4870b008.png";

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5595b6cd59c04a475c9b.png";

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4eda916b753b31a50b68.png";

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



(0,_components_createProject__WEBPACK_IMPORTED_MODULE_1__["default"])();

const landmarks = document.querySelectorAll(".landmark");
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

landmarks.forEach((item) => {
  observer.observe(item);
});

projects.forEach((item) => {
  observer.observe(item);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK1FBQStRLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLGFBQWEsWUFBWSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLGFBQWEsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdB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ZS8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBrZXlmcmFtZXMgc2xpZGVGcm9tUmlnaHQge1xuICAwJSB7XG4gICAgcmlnaHQ6IC0xMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgcmlnaHQ6IDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVGcm9tTGVmdCB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZ3Jvd0ZvbnRTaXplIHtcbiAgMCUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAxMDAlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuaGVhZGVyIHtcbiAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAwJSwgMCUgMTAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIGhlaWdodDogMTAwdnc7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBzbGlkZUZyb21MZWZ0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XG4gIHdpZHRoOiA4MCU7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDYlO1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgcGFkZGluZzogMTVweCAzMHB4O1xuICB3aWR0aDogOTUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbmltYXRpb246IGdyb3dGb250U2l6ZSAyLjNzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IHNsaWRlRnJvbVJpZ2h0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBhbmltYXRpb246IGdyb3dGb250U2l6ZSAyLjNzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHA6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDk5cHgpIHtcbiAgaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDgwdnc7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAwJSwgMCUgNzQlKTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDQwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTE1JTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAzMDAlO1xuICAgIHRleHQtYWxpZ246IHVuc2V0O1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiAxMDBweCAzMHB4IDQwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNSUpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAuYWJvdXQtdGV4dCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOCUpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBoMSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzAlKTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgLnJlZmVyZW5jZXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDk5cHgpIHtcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggMCA0MHB4O1xuICB9XG4gIGhlYWRlciAuYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAzNXZ3O1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjglO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDIwJTtcbiAgfVxufVxubWFpbiB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbn1cbm1haW4gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzc0MTUxO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IGdyb3dGb250U2l6ZSAycyBlYXNlLW91dCBmb3J3YXJkcztcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDMwcHg7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3Qge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dCAwLjVzO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5zY3JlZW5zaG90IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLm5hbWUge1xuICBjb2xvcjogIzM3NDE1MTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubGlua3MgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubGlua3MgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDk5cHgpIHtcbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogNTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwOTlweCkge1xuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ2FwOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xuICAgIGdhcDogMjBweDtcbiAgfVxufVxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcbiAgcGFkZGluZzogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xufVxuZm9vdGVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5mb290ZXIgaDIge1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5mb290ZXIgcCB7XG4gIGNvbG9yOiAjZjFmNWY5O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbmZvb3RlciAuZ2l0aHViLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb290ZXIgLmdpdGh1Yi10ZXh0IGltZyB7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDUwcHg7XG59XG5cbi5sYW5kbWFyayB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQgMC41cztcbn1cblxuLnZpc2libGUge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwOTlweCkge1xuICBib2R5IHtcbiAgICBnYXA6IDc1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDk5cHgpIHtcbiAgYm9keSB7XG4gICAgZ2FwOiAxMDBweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9hbmltYXRpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNHRjtFRERBO0lBQ0UsU0FBQTtJQUNBLFVBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VDRUY7RURBQTtJQUNFLFFBQUE7SUFDQSxVQUFBO0VDRUY7QUFDRjtBRENBO0VBQ0U7SUFDRSxlQUFBO0VDQ0Y7RURDQTtJQUNFLGlCQUFBO0VDQ0Y7QUFDRjtBQzFCQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRDRCRjtBQzFCRTtFQUNFLHlCQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FENEJKO0FDeEJJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUQwQk47QUN4Qk07RUFDRSxpREFBQTtFQUNBLFVBQUE7QUQwQlI7QUN2Qk07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsY0NoQ2M7RURpQ2Qsc0NDOUJRO0VEK0JSLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7QUR5QlI7QUNyQkk7RUFDRSxrQkFBQTtFQUNBLDhDQUFBO0FEdUJOO0FDckJNO0VBQ0Usa0JBQUE7RUFDQSxzQ0M1Q1E7RUQ2Q1IsOENBQUE7QUR1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QTNRQTtFQUNFO0lBQ0UsVUFBQTtFQTZRRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgc2xpZGVGcm9tUmlnaHQge1xcclxcbiAgMCUge1xcclxcbiAgICByaWdodDogLTEwMCU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgcmlnaHQ6IDAlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlRnJvbUxlZnQge1xcclxcbiAgMCUge1xcclxcbiAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBsZWZ0OiAwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBncm93Rm9udFNpemUge1xcclxcbiAgMCUge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLy8gQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyB2YXI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcXFwiIGFzIHZhcjtcXHJcXG5AdXNlIFxcXCIuL3N0eWxlcy9oZWFkZXIuc2Nzc1xcXCI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZXMvbWFpbi5zY3NzXFxcIjtcXHJcXG5AdXNlIFxcXCIuL3N0eWxlcy9mb290ZXIuc2Nzc1xcXCI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzXFxcIjtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIuJHRleHQtZm9udDtcXHJcXG4gIGNvbG9yOiB2YXIuJGJvZHktdGV4dC1kYXJrLWNvbG9yO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYW5kbWFyayB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4udmlzaWJsZSB7XFxyXFxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdGFibGV0KSBhbmQgKG1heC13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBnYXA6IDc1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGdhcDogMTAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyB2YXI7XFxyXFxuQHVzZSBcXFwiYW5pbWF0aW9ucy5zY3NzXFxcIjtcXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAuYmFja2dyb3VuZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDAlIDAlLCAyMjcuNSUgMCUsIDAlIDEwMCUpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmluZm8tY29udGFpbmVyIHtcXHJcXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVGcm9tTGVmdCAycyBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG5cXHJcXG4gICAgICBpbWcge1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5uYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBsZWZ0OiA2JTtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctbGlnaHQtY29sb3I7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICBhbmltYXRpb246IGdyb3dGb250U2l6ZSAyLjNzIGVhc2Utb3V0IGZvcndhcmRzO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgYW5pbWF0aW9uOiBzbGlkZUZyb21SaWdodCAycyBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG5cXHJcXG4gICAgICBoMSB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBncm93Rm9udFNpemUgMi4zcyBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnJlZmVyZW5jZXMge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdGFibGV0KSBhbmQgKG1heC13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIC5iYWNrZ3JvdW5kIHtcXHJcXG4gICAgICBoZWlnaHQ6IDgwdnc7XFxyXFxuICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAwJSwgMCUgNzQlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5mby1jb250YWluZXIge1xcclxcbiAgICAgIC5pbWFnZS1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNDAlO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICBsZWZ0OiAtMTUlO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICB3aWR0aDogMzAwJTtcXHJcXG4gICAgICAgICAgdGV4dC1hbGlnbjogdW5zZXQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5hYm91dC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDMwcHggNDBweCAzMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1JSk7XFxyXFxuXFxyXFxuICAgICAgICAuYWJvdXQtdGV4dCB7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTglKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzAlKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5yZWZlcmVuY2VzIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggMCA0MHB4O1xcclxcblxcclxcbiAgICAuYmFja2dyb3VuZCB7XFxyXFxuICAgICAgaGVpZ2h0OiAzNXZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgIC5pbWFnZS1jb250YWluZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyOCU7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5uYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5hYm91dC1jb250YWluZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgcCB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnJlZmVyZW5jZXMge1xcclxcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC11bHRyYXdpZGUpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAuYmFja2dyb3VuZCB7XFxyXFxuICAgICAgaGVpZ2h0OiAzMHZoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAyMDAwcHg7XFxyXFxuXFxyXFxuICAgICAgLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDIwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4kaGVhZGluZy1saWdodC1jb2xvcjogI2YxZjVmOTtcXHJcXG4kaGVhZGluZy1kYXJrLWNvbG9yOiAjMzc0MTUxO1xcclxcbiRib2R5LXRleHQtZGFyay1jb2xvcjogIzQ3NTU2OTtcXHJcXG4kaGVhZGluZ3MtZm9udDogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXHJcXG4kdGV4dC1mb250OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4kYnJlYWtwb2ludC10YWJsZXQ6IDYwMHB4O1xcclxcbiRicmVha3BvaW50LWRlc2t0b3A6IDEwOTlweDtcXHJcXG4kYnJlYWtwb2ludC11bHRyYXdpZGU6IDIwMDBweDtcXHJcXG5cIixcIkB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcclxcbkB1c2UgXFxcImFuaW1hdGlvbnMuc2Nzc1xcXCI7XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBwYWRkaW5nOiAwIDQwcHg7XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhci4kaGVhZGluZy1kYXJrLWNvbG9yO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBhbmltYXRpb246IGdyb3dGb250U2l6ZSAycyBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcblxcclxcbiAgICAucHJvamVjdCB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQgMC41cztcXHJcXG5cXHJcXG4gICAgICAuc2NyZWVuc2hvdCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnByb2plY3QtaW5mbyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xcclxcblxcclxcbiAgICAgICAgLm5hbWUge1xcclxcbiAgICAgICAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWRhcmstY29sb3I7XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIuJGhlYWRpbmdzLWZvbnQ7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmxpbmtzIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgZ2FwOiAxNXB4O1xcclxcblxcclxcbiAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXRhYmxldCkgYW5kIChtYXgtd2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgICBnYXA6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgICBnYXA6IDEwMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdWx0cmF3aWRlKSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxyXFxuICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyB2YXI7XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XFxyXFxuICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhci4kaGVhZGluZy1saWdodC1jb2xvcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhci4kaGVhZGluZ3MtZm9udDtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMiB7XFxyXFxuICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctbGlnaHQtY29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctbGlnaHQtY29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdpdGh1Yi10ZXh0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWFic29sdXRlLXBhdGggKi9cclxuaW1wb3J0IGN2QXBwbGljYXRpb25JbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9jdi1hcHBsaWNhdGlvbi5wbmdcIjtcclxuaW1wb3J0IHRvZG9MaXN0SU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvdG9kby1saXN0LnBuZ1wiO1xyXG5pbXBvcnQgd2VhdGhlckFwcElNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL3dlYXRoZXItYXBwLnBuZ1wiO1xyXG5pbXBvcnQgY2FsY3VsYXRvcklNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2NhbGN1bGF0b3IucG5nXCI7XHJcbmltcG9ydCBldGNoQVNrYXRjaElNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2V0Y2gtYS1za2F0Y2gucG5nXCI7XHJcbmltcG9ydCBhZG1pbkRhc2hib2FyZElNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2FkbWluLWRhc2hib2FyZC5wbmdcIjtcclxuaW1wb3J0IGxpdmVJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9saW5rcy9leHRlcm5hbC1saW5rLnBuZ1wiO1xyXG5pbXBvcnQgbWVtb3J5Q2FyZEltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL21lbW9yeS1jYXJkLnBuZ1wiO1xyXG5cclxuY29uc3QgaW1hZ2VNYXAgPSB7XHJcbiAgXCJDVi1hcHBsaWNhdGlvblwiOiBjdkFwcGxpY2F0aW9uSW1nLFxyXG4gIFwidG9kby1saXN0XCI6IHRvZG9MaXN0SU1HLFxyXG4gIFwid2VhdGhlci1hcHBcIjogd2VhdGhlckFwcElNRyxcclxuICBcIm1lbW9yeS1jYXJkXCI6IG1lbW9yeUNhcmRJbWcsXHJcbiAgY2FsY3VsYXRvcjogY2FsY3VsYXRvcklNRyxcclxuICBcImFkbWluLWRhc2hib2FyZFwiOiBhZG1pbkRhc2hib2FyZElNRyxcclxuICBcImV0Y2gtYS1za2V0Y2hcIjogZXRjaEFTa2F0Y2hJTUcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0cygpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIFwiQ1YtYXBwbGljYXRpb25cIixcclxuICAgIFwidG9kby1saXN0XCIsXHJcbiAgICBcIndlYXRoZXItYXBwXCIsXHJcbiAgICBcIm1lbW9yeS1jYXJkXCIsXHJcbiAgICBcImNhbGN1bGF0b3JcIixcclxuICAgIFwiYWRtaW4tZGFzaGJvYXJkXCIsXHJcbiAgICBcImV0Y2gtYS1za2V0Y2hcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xyXG5cclxuICBwcm9qZWN0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgaWYgKGVsID09PSBcImV0Y2gtYS1za2V0Y2hcIikgcmV0dXJuO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xyXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJzY3JlZW5zaG90XCIpO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1hZ2VNYXBbZWxdO1xyXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5mb1wiKTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEluZm8pO1xyXG5cclxuICAgIGNvbnN0IHBhcnNlZE5hbWUgPSBlbFxyXG4gICAgICAucmVwbGFjZSgvXlxcdy8sIChjKSA9PiBjLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgIC5yZXBsYWNlKC8tL2csIFwiIFwiKTtcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwYXJzZWROYW1lO1xyXG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQobmFtZSk7XHJcblxyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGlua3MuY2xhc3NMaXN0LmFkZChcImxpbmtzXCIpO1xyXG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQobGlua3MpO1xyXG5cclxuICAgIGNvbnN0IGdoTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgaWYgKGVsID09PSBcIkNWLWFwcGxpY2F0aW9uXCIpXHJcbiAgICAgIGdoTGluay5ocmVmID0gYGh0dHBzOi8vZ2l0aHViLmNvbS9zYWJhLWJhcjk1L2N2LWFwcGA7XHJcbiAgICBpZiAoZWwgIT09IFwiQ1YtYXBwbGljYXRpb25cIikge1xyXG4gICAgICBnaExpbmsuaHJlZiA9IGBodHRwczovL2dpdGh1Yi5jb20vc2FiYS1iYXI5NS8ke2VsfWA7XHJcbiAgICB9XHJcbiAgICBnaExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIGxpbmtzLmFwcGVuZENoaWxkKGdoTGluayk7XHJcblxyXG4gICAgY29uc3QgZ2l0aHViID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgZ2l0aHViLnNyYyA9XHJcbiAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXCI7XHJcbiAgICBnaExpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcclxuXHJcbiAgICBjb25zdCBsaXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cclxuICAgIGlmIChlbCA9PT0gXCJDVi1hcHBsaWNhdGlvblwiKVxyXG4gICAgICBsaXZlTGluay5ocmVmID0gXCJodHRwczovL2N2LWFwcC1waS52ZXJjZWwuYXBwL1wiO1xyXG4gICAgaWYgKGVsID09PSBcIm1lbW9yeS1jYXJkXCIpXHJcbiAgICAgIGxpdmVMaW5rLmhyZWYgPSBcImh0dHBzOi8vbWVtb3J5LWNhcmQtYWxwaGEtYmF5LnZlcmNlbC5hcHAvXCI7XHJcblxyXG4gICAgaWYgKGVsICE9PSBcIkNWLWFwcGxpY2F0aW9uXCIgJiYgZWwgIT09IFwibWVtb3J5LWNhcmRcIikge1xyXG4gICAgICBsaXZlTGluay5ocmVmID0gYGh0dHBzOi8vc2FiYS1iYXI5NS5naXRodWIuaW8vJHtlbH0vYDtcclxuICAgIH1cclxuICAgIGxpdmVMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChsaXZlTGluayk7XHJcblxyXG4gICAgY29uc3QgbGl2ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGl2ZS5zcmMgPSBsaXZlSW1nO1xyXG4gICAgbGl2ZUxpbmsuYXBwZW5kQ2hpbGQobGl2ZSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdHMgZnJvbSBcIi4vY29tcG9uZW50cy9jcmVhdGVQcm9qZWN0XCI7XHJcblxyXG5jcmVhdGVQcm9qZWN0cygpO1xyXG5cclxuY29uc3QgbGFuZG1hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5kbWFya1wiKTtcclxuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XHJcblxyXG5jb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxubGFuZG1hcmtzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICBvYnNlcnZlci5vYnNlcnZlKGl0ZW0pO1xyXG59KTtcclxuXHJcbnByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICBvYnNlcnZlci5vYnNlcnZlKGl0ZW0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9