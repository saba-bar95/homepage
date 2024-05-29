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
}`, "",{"version":3,"sources":["webpack://./src/styles/animations.scss","webpack://./src/index.scss","webpack://./src/styles/header.scss","webpack://./src/styles/variables.scss","webpack://./src/styles/main.scss","webpack://./src/styles/footer.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes slideFromRight {\n  0% {\n    right: -100%;\n    opacity: 0;\n  }\n  100% {\n    right: 0%;\n    opacity: 1;\n  }\n}\n\n@keyframes slideFromLeft {\n  0% {\n    left: -100%;\n    opacity: 0;\n  }\n  100% {\n    left: 0%;\n    opacity: 1;\n  }\n}\n\n@keyframes growFontSize {\n  0% {\n    font-size: 1rem;\n  }\n  100% {\n    font-size: 2.5rem;\n  }\n}\n","// @use \"variables\" as var;\n@use \"./styles/variables.scss\" as var;\n@use \"./styles/header.scss\";\n@use \"./styles/main.scss\";\n@use \"./styles/footer.scss\";\n@use \"./styles/animations.scss\";\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: var.$text-font;\n  color: var.$body-text-dark-color;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.landmark {\n  opacity: 0;\n  transition: opacity 1s ease-in-out 0.5s;\n}\n\n.visible {\n  opacity: 1 !important;\n}\n\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\n  body {\n    gap: 75px;\n  }\n}\n\n@media (min-width: var.$breakpoint-desktop) {\n  body {\n    gap: 100px;\n  }\n}\n","@use \"variables\" as var;\n@use \"animations.scss\";\n\nheader {\n  padding: 40px 40px 0 40px;\n  overflow: hidden;\n  position: relative;\n\n  .background {\n    background-color: #0891b2;\n    clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 100%);\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    height: 100vw;\n  }\n\n  .info-container {\n    .image-container {\n      text-align: center;\n      margin-bottom: 50px;\n      position: relative;\n      animation: slideFromLeft 2s ease-out forwards;\n\n      img {\n        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n        width: 80%;\n      }\n\n      .name-container {\n        position: absolute;\n        bottom: 0;\n        left: 6%;\n        color: var.$heading-light-color;\n        font-family: var.$headings-font;\n        padding: 15px 30px;\n        width: 95%;\n        text-align: left;\n        animation: growFontSize 2.3s ease-out forwards;\n      }\n    }\n\n    .about-container {\n      position: relative;\n      animation: slideFromRight 2s ease-out forwards;\n\n      h1 {\n        text-align: center;\n        font-family: var.$headings-font;\n        animation: growFontSize 2.3s ease-out forwards;\n      }\n\n      p {\n        font-size: 1.5rem;\n        user-select: none;\n        padding-bottom: 15px;\n      }\n\n      p:first-of-type {\n        padding-top: 25px;\n      }\n\n      .references {\n        text-align: center;\n\n        img {\n          width: 40px;\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\n  header {\n    .background {\n      height: 80vw;\n      clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 74%);\n    }\n\n    .info-container {\n      .image-container {\n        float: left;\n        box-shadow: none;\n        padding-right: 20px;\n        max-width: 40%;\n        margin: 0;\n        z-index: 1;\n\n        img {\n          width: 100%;\n        }\n\n        .name-container {\n          top: 0;\n          left: -15%;\n          padding: 0;\n          width: 300%;\n          text-align: unset;\n        }\n      }\n\n      .about-container {\n        width: 90%;\n        padding: 100px 30px 40px 30px;\n        background-color: #f1f5f9;\n        margin-left: 70px;\n        transform: translateY(15%);\n\n        .about-text {\n          transform: translateY(-18%);\n        }\n\n        h1 {\n          transform: translateY(-130%);\n        }\n\n        .references {\n          display: none;\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-desktop) {\n  header {\n    padding: 40px 40px 0 40px;\n\n    .background {\n      height: 35vw;\n    }\n\n    .info-container {\n      display: flex;\n      align-items: center;\n\n      .image-container {\n        max-width: 28%;\n        margin: 0;\n\n        img {\n          width: 100%;\n        }\n\n        .name-container {\n          left: 0;\n          padding: 10px;\n        }\n      }\n\n      .about-container {\n        background-color: #f1f5f9;\n        padding: 20px;\n        overflow: hidden;\n\n        p {\n          font-size: 1.5rem;\n        }\n\n        .references {\n          text-align: right;\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-ultrawide) {\n  header {\n    display: flex;\n    justify-content: center;\n\n    .background {\n      height: 30vh;\n    }\n\n    .info-container {\n      max-width: 2000px;\n\n      .image-container {\n        max-width: 20%;\n      }\n    }\n  }\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n\n$heading-light-color: #f1f5f9;\n$heading-dark-color: #374151;\n$body-text-dark-color: #475569;\n$headings-font: \"Playfair Display\", serif;\n$text-font: \"Roboto\", sans-serif;\n$breakpoint-tablet: 600px;\n$breakpoint-desktop: 1099px;\n$breakpoint-ultrawide: 2000px;\n","@use \"variables\" as var;\n@use \"animations.scss\";\n\nmain {\n  padding: 0 40px;\n\n  h1 {\n    text-align: center;\n    color: var.$heading-dark-color;\n    font-family: var.$headings-font;\n    padding-bottom: 30px;\n    position: relative;\n    animation: growFontSize 2s ease-out forwards;\n  }\n\n  .projects-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 30px;\n\n    .project {\n      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n      border-radius: 10px;\n      opacity: 0;\n      transition: opacity 1s ease-in-out 0.5s;\n\n      .screenshot {\n        width: 100%;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n      }\n\n      .project-info {\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        padding: 10px 0;\n\n        .name {\n          color: var.$heading-dark-color;\n          font-family: var.$headings-font;\n          font-size: 1.5rem;\n        }\n\n        .links {\n          display: flex;\n          align-items: center;\n          gap: 15px;\n\n          img {\n            width: 20px;\n            &:hover {\n              transform: scale(1.2);\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\n  main {\n    .projects-container {\n      grid-template-columns: repeat(2, 1fr);\n      gap: 50px;\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-desktop) {\n  main {\n    .projects-container {\n      grid-template-columns: repeat(3, 1fr);\n      gap: 100px;\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-ultrawide) {\n  main {\n    .projects-container {\n      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n      gap: 20px;\n    }\n  }\n}\n","@use \"variables\" as var;\n\nfooter {\n  background-color: #0891b2;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  h1 {\n    text-align: center;\n    color: var.$heading-light-color;\n    font-family: var.$headings-font;\n    font-size: 2.5rem;\n  }\n\n  h2 {\n    color: var.$heading-light-color;\n    font-size: 1.5rem;\n    font-weight: 500;\n  }\n\n  p {\n    color: var.$heading-light-color;\n    font-size: 1.2rem;\n  }\n\n  .github-text {\n    text-align: center;\n\n    img {\n      width: 60px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */








const imageMap = {
  "CV-application": _src_assets_images_screenshots_cv_application_png__WEBPACK_IMPORTED_MODULE_0__,
  "todo-list": _src_assets_images_screenshots_todo_list_png__WEBPACK_IMPORTED_MODULE_1__,
  "weather-app": _src_assets_images_screenshots_weather_app_png__WEBPACK_IMPORTED_MODULE_2__,
  calculator: _src_assets_images_screenshots_calculator_png__WEBPACK_IMPORTED_MODULE_3__,
  "etch-a-sketch": _src_assets_images_screenshots_etch_a_skatch_png__WEBPACK_IMPORTED_MODULE_4__,
  "admin-dashboard": _src_assets_images_screenshots_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_5__,
};

function createProjects() {
  const projects = [
    "CV-application",
    "todo-list",
    "weather-app",
    "calculator",
    "etch-a-sketch",
    "admin-dashboard",
  ];

  const projectsContainer = document.querySelector(".projects-container");

  projects.forEach((el) => {
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
    if (el !== "CV-application") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK1FBQStRLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLGFBQWEsWUFBWSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLGFBQWEsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdB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QUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHVFQUFPO0FBQ3RCO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7O0FDQXNCO0FBQ2tDOztBQUV4RCxxRUFBYzs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDAuLjkwMDsxLDQwMC4uOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAa2V5ZnJhbWVzIHNsaWRlRnJvbVJpZ2h0IHtcbiAgMCUge1xuICAgIHJpZ2h0OiAtMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHJpZ2h0OiAwJTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlRnJvbUxlZnQge1xuICAwJSB7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAwJTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGdyb3dGb250U2l6ZSB7XG4gIDAlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgMTAwJSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cbmhlYWRlciB7XG4gIHBhZGRpbmc6IDQwcHggNDBweCAwIDQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmhlYWRlciAuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDAlIDAlLCAyMjcuNSUgMCUsIDAlIDEwMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBoZWlnaHQ6IDEwMHZ3O1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogc2xpZGVGcm9tTGVmdCAycyBlYXNlLW91dCBmb3J3YXJkcztcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xuICB3aWR0aDogODAlO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIC5uYW1lLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA2JTtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgd2lkdGg6IDk1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYW5pbWF0aW9uOiBncm93Rm9udFNpemUgMi4zcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBzbGlkZUZyb21SaWdodCAycyBlYXNlLW91dCBmb3J3YXJkcztcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgYW5pbWF0aW9uOiBncm93Rm9udFNpemUgMi4zcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBwOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXRvcDogMjVweDtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAucmVmZXJlbmNlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAucmVmZXJlbmNlcyBpbWcge1xuICB3aWR0aDogNDBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTA5OXB4KSB7XG4gIGhlYWRlciAuYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiA4MHZ3O1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDAlIDAlLCAyMjcuNSUgMCUsIDAlIDc0JSk7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIC5uYW1lLWNvbnRhaW5lciB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0xNSU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMzAwJTtcbiAgICB0ZXh0LWFsaWduOiB1bnNldDtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMTAwcHggMzBweCA0MHB4IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUlKTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgLmFib3V0LXRleHQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTglKTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgaDEge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTMwJSk7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTA5OXB4KSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcbiAgfVxuICBoZWFkZXIgLmJhY2tncm91bmQge1xuICAgIGhlaWdodDogMzV2dztcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDI4JTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIC5uYW1lLWNvbnRhaW5lciB7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAucmVmZXJlbmNlcyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIGhlYWRlciAuYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjAwMHB4O1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAyMCU7XG4gIH1cbn1cbm1haW4ge1xuICBwYWRkaW5nOiAwIDQwcHg7XG59XG5tYWluIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzM3NDE1MTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBncm93Rm9udFNpemUgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ2FwOiAzMHB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQgMC41cztcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAuc2NyZWVuc2hvdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5uYW1lIHtcbiAgY29sb3I6ICMzNzQxNTE7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTA5OXB4KSB7XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDk5cHgpIHtcbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdhcDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbn1cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcbn1cbmZvb3RlciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuZm9vdGVyIGgyIHtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuZm9vdGVyIHAge1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5mb290ZXIgLmdpdGh1Yi10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9vdGVyIC5naXRodWItdGV4dCBpbWcge1xuICB3aWR0aDogNjBweDtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1MHB4O1xufVxuXG4ubGFuZG1hcmsge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0IDAuNXM7XG59XG5cbi52aXNpYmxlIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDk5cHgpIHtcbiAgYm9keSB7XG4gICAgZ2FwOiA3NXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTA5OXB4KSB7XG4gIGJvZHkge1xuICAgIGdhcDogMTAwcHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDR0Y7RUREQTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQ0VGO0VEQUE7SUFDRSxRQUFBO0lBQ0EsVUFBQTtFQ0VGO0FBQ0Y7QURDQTtFQUNFO0lBQ0UsZUFBQTtFQ0NGO0VEQ0E7SUFDRSxpQkFBQTtFQ0NGO0FBQ0Y7QUMxQkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUQ0QkY7QUMxQkU7RUFDRSx5QkFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBRDRCSjtBQ3hCSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FEMEJOO0FDeEJNO0VBQ0UsaURBQUE7RUFDQSxVQUFBO0FEMEJSO0FDdkJNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGNDaENjO0VEaUNkLHNDQzlCUTtFRCtCUixrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0FEeUJSO0FDckJJO0VBQ0Usa0JBQUE7RUFDQSw4Q0FBQTtBRHVCTjtBQ3JCTTtFQUNFLGtCQUFBO0VBQ0Esc0NDNUNRO0VENkNSLDhDQUFBO0FEdUJSO0FDcEJNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FEc0JSO0FDbkJNO0VBQ0UsaUJBQUE7QURxQlI7QUNsQk07RUFDRSxrQkFBQTtBRG9CUjtBQ2xCUTtFQUNFLFdBQUE7QURvQlY7O0FDYkE7RUFFSTtJQUNFLFlBQUE7SUFDQSxvREFBQTtFRGVKO0VDWEk7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFRGFOO0VDWE07SUFDRSxXQUFBO0VEYVI7RUNWTTtJQUNFLE1BQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFRFlSO0VDUkk7SUFDRSxVQUFBO0lBQ0EsNkJBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0EsMEJBQUE7RURVTjtFQ1JNO0lBQ0UsMkJBQUE7RURVUjtFQ1BNO0lBQ0UsNEJBQUE7RURTUjtFQ05NO0lBQ0UsYUFBQTtFRFFSO0FBQ0Y7QUNGQTtFQUNFO0lBQ0UseUJBQUE7RURJRjtFQ0ZFO0lBQ0UsWUFBQTtFRElKO0VDREU7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7RURHSjtFQ0RJO0lBQ0UsY0FBQTtJQUNBLFNBQUE7RURHTjtFQ0RNO0lBQ0UsV0FBQTtFREdSO0VDQU07SUFDRSxPQUFBO0lBQ0EsYUFBQTtFREVSO0VDRUk7SUFDRSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFREFOO0VDRU07SUFDRSxpQkFBQTtFREFSO0VDR007SUFDRSxpQkFBQTtFRERSO0FBQ0Y7QUNPQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0VETEY7RUNPRTtJQUNFLFlBQUE7RURMSjtFQ1FFO0lBQ0UsaUJBQUE7RUROSjtFQ1FJO0lBQ0UsY0FBQTtFRE5OO0FBQ0Y7QUcvS0E7RUFDRSxlQUFBO0FIaUxGO0FHL0tFO0VBQ0Usa0JBQUE7RUFDQSxjREppQjtFQ0tqQixzQ0RIWTtFQ0laLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBSGlMSjtBRzlLRTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7QUhnTEo7QUc5S0k7RUFDRSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHVDQUFBO0FIZ0xOO0FHOUtNO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUhnTFI7QUc3S007RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUgrS1I7QUc3S1E7RUFDRSxjRG5DVztFQ29DWCxzQ0RsQ007RUNtQ04saUJBQUE7QUgrS1Y7QUc1S1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FIOEtWO0FHNUtVO0VBQ0UsV0FBQTtBSDhLWjtBRzdLWTtFQUNFLHFCQUFBO0FIK0tkOztBR3RLQTtFQUVJO0lBQ0UscUNBQUE7SUFDQSxTQUFBO0VId0tKO0FBQ0Y7QUdwS0E7RUFFSTtJQUNFLHFDQUFBO0lBQ0EsVUFBQTtFSHFLSjtBQUNGO0FHaktBO0VBRUk7SUFDRSwyREFBQTtJQUNBLFNBQUE7RUhrS0o7QUFDRjtBSXBQQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUpzUEY7QUlwUEU7RUFDRSxrQkFBQTtFQUNBLGNGUmtCO0VFU2xCLHNDRk5ZO0VFT1osaUJBQUE7QUpzUEo7QUluUEU7RUFDRSxjRmRrQjtFRWVsQixpQkFBQTtFQUNBLGdCQUFBO0FKcVBKO0FJbFBFO0VBQ0UsY0ZwQmtCO0VFcUJsQixpQkFBQTtBSm9QSjtBSWpQRTtFQUNFLGtCQUFBO0FKbVBKO0FJalBJO0VBQ0UsV0FBQTtBSm1QTjs7QUEzUUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBOFFGOztBQTNRQTtFQUNFLGlDRVBVO0VGUVYsY0VWcUI7RUZXckIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQThRRjs7QUEzUUE7RUFDRSxVQUFBO0VBQ0EsdUNBQUE7QUE4UUY7O0FBM1FBO0VBQ0UscUJBQUE7QUE4UUY7O0FBM1FBO0VBQ0U7SUFDRSxTQUFBO0VBOFFGO0FBQ0Y7QUEzUUE7RUFDRTtJQUNFLFVBQUE7RUE2UUY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIHNsaWRlRnJvbVJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgcmlnaHQ6IC0xMDAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHJpZ2h0OiAwJTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUZyb21MZWZ0IHtcXG4gIDAlIHtcXG4gICAgbGVmdDogLTEwMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogMCU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZ3Jvd0ZvbnRTaXplIHtcXG4gIDAlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcbn1cXG5cIixcIi8vIEB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcbkB1c2UgXFxcIi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyB2YXI7XFxuQHVzZSBcXFwiLi9zdHlsZXMvaGVhZGVyLnNjc3NcXFwiO1xcbkB1c2UgXFxcIi4vc3R5bGVzL21haW4uc2Nzc1xcXCI7XFxuQHVzZSBcXFwiLi9zdHlsZXMvZm9vdGVyLnNjc3NcXFwiO1xcbkB1c2UgXFxcIi4vc3R5bGVzL2FuaW1hdGlvbnMuc2Nzc1xcXCI7XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogdmFyLiR0ZXh0LWZvbnQ7XFxuICBjb2xvcjogdmFyLiRib2R5LXRleHQtZGFyay1jb2xvcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ubGFuZG1hcmsge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQgMC41cztcXG59XFxuXFxuLnZpc2libGUge1xcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXRhYmxldCkgYW5kIChtYXgtd2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxuICBib2R5IHtcXG4gICAgZ2FwOiA3NXB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXG4gIGJvZHkge1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgfVxcbn1cXG5cIixcIkB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcbkB1c2UgXFxcImFuaW1hdGlvbnMuc2Nzc1xcXCI7XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDQwcHggNDBweCAwIDQwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgLmJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCAwJSAwJSwgMjI3LjUlIDAlLCAwJSAxMDAlKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgaGVpZ2h0OiAxMDB2dztcXG4gIH1cXG5cXG4gIC5pbmZvLWNvbnRhaW5lciB7XFxuICAgIC5pbWFnZS1jb250YWluZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBhbmltYXRpb246IHNsaWRlRnJvbUxlZnQgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgIH1cXG5cXG4gICAgICAubmFtZS1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgbGVmdDogNiU7XFxuICAgICAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWxpZ2h0LWNvbG9yO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhci4kaGVhZGluZ3MtZm9udDtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgYW5pbWF0aW9uOiBncm93Rm9udFNpemUgMi4zcyBlYXNlLW91dCBmb3J3YXJkcztcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVGcm9tUmlnaHQgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhci4kaGVhZGluZ3MtZm9udDtcXG4gICAgICAgIGFuaW1hdGlvbjogZ3Jvd0ZvbnRTaXplIDIuM3MgZWFzZS1vdXQgZm9yd2FyZHM7XFxuICAgICAgfVxcblxcbiAgICAgIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICAgIH1cXG5cXG4gICAgICBwOmZpcnN0LW9mLXR5cGUge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5yZWZlcmVuY2VzIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXRhYmxldCkgYW5kIChtYXgtd2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxuICBoZWFkZXIge1xcbiAgICAuYmFja2dyb3VuZCB7XFxuICAgICAgaGVpZ2h0OiA4MHZ3O1xcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDAlIDAlLCAyMjcuNSUgMCUsIDAlIDc0JSk7XFxuICAgIH1cXG5cXG4gICAgLmluZm8tY29udGFpbmVyIHtcXG4gICAgICAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5uYW1lLWNvbnRhaW5lciB7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgbGVmdDogLTE1JTtcXG4gICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgd2lkdGg6IDMwMCU7XFxuICAgICAgICAgIHRleHQtYWxpZ246IHVuc2V0O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuYWJvdXQtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBwYWRkaW5nOiAxMDBweCAzMHB4IDQwcHggMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNSUpO1xcblxcbiAgICAgICAgLmFib3V0LXRleHQge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4JSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBoMSB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTMwJSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucmVmZXJlbmNlcyB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcbiAgaGVhZGVyIHtcXG4gICAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcXG5cXG4gICAgLmJhY2tncm91bmQge1xcbiAgICAgIGhlaWdodDogMzV2dztcXG4gICAgfVxcblxcbiAgICAuaW5mby1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogMjglO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcblxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubmFtZS1jb250YWluZXIge1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuYWJvdXQtY29udGFpbmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5yZWZlcmVuY2VzIHtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdWx0cmF3aWRlKSB7XFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgLmJhY2tncm91bmQge1xcbiAgICAgIGhlaWdodDogMzB2aDtcXG4gICAgfVxcblxcbiAgICAuaW5mby1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMjAwMHB4O1xcblxcbiAgICAgIC5pbWFnZS1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyMCU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDAuLjkwMDsxLDQwMC4uOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuJGhlYWRpbmctbGlnaHQtY29sb3I6ICNmMWY1Zjk7XFxuJGhlYWRpbmctZGFyay1jb2xvcjogIzM3NDE1MTtcXG4kYm9keS10ZXh0LWRhcmstY29sb3I6ICM0NzU1Njk7XFxuJGhlYWRpbmdzLWZvbnQ6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuJHRleHQtZm9udDogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuJGJyZWFrcG9pbnQtdGFibGV0OiA2MDBweDtcXG4kYnJlYWtwb2ludC1kZXNrdG9wOiAxMDk5cHg7XFxuJGJyZWFrcG9pbnQtdWx0cmF3aWRlOiAyMDAwcHg7XFxuXCIsXCJAdXNlIFxcXCJ2YXJpYWJsZXNcXFwiIGFzIHZhcjtcXG5AdXNlIFxcXCJhbmltYXRpb25zLnNjc3NcXFwiO1xcblxcbm1haW4ge1xcbiAgcGFkZGluZzogMCA0MHB4O1xcblxcbiAgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctZGFyay1jb2xvcjtcXG4gICAgZm9udC1mYW1pbHk6IHZhci4kaGVhZGluZ3MtZm9udDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYW5pbWF0aW9uOiBncm93Rm9udFNpemUgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxuICB9XFxuXFxuICAucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMzBweDtcXG5cXG4gICAgLnByb2plY3Qge1xcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0IDAuNXM7XFxuXFxuICAgICAgLnNjcmVlbnNob3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5wcm9qZWN0LWluZm8ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcXG5cXG4gICAgICAgIC5uYW1lIHtcXG4gICAgICAgICAgY29sb3I6IHZhci4kaGVhZGluZy1kYXJrLWNvbG9yO1xcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5saW5rcyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTVweDtcXG5cXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC10YWJsZXQpIGFuZCAobWF4LXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcbiAgbWFpbiB7XFxuICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgZ2FwOiA1MHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcbiAgbWFpbiB7XFxuICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgICAgZ2FwOiAxMDBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXVsdHJhd2lkZSkge1xcbiAgbWFpbiB7XFxuICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xcbiAgICAgIGdhcDogMjBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcblxcbiAgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctbGlnaHQtY29sb3I7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIuJGhlYWRpbmdzLWZvbnQ7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWxpZ2h0LWNvbG9yO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIH1cXG5cXG4gIHAge1xcbiAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWxpZ2h0LWNvbG9yO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5naXRodWItdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogNjBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYWJzb2x1dGUtcGF0aCAqL1xuaW1wb3J0IGN2QXBwbGljYXRpb25JbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9jdi1hcHBsaWNhdGlvbi5wbmdcIjtcbmltcG9ydCB0b2RvTGlzdElNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL3RvZG8tbGlzdC5wbmdcIjtcbmltcG9ydCB3ZWF0aGVyQXBwSU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvd2VhdGhlci1hcHAucG5nXCI7XG5pbXBvcnQgY2FsY3VsYXRvcklNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2NhbGN1bGF0b3IucG5nXCI7XG5pbXBvcnQgZXRjaEFTa2F0Y2hJTUcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9ldGNoLWEtc2thdGNoLnBuZ1wiO1xuaW1wb3J0IGFkbWluRGFzaGJvYXJkSU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvYWRtaW4tZGFzaGJvYXJkLnBuZ1wiO1xuaW1wb3J0IGxpdmVJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9saW5rcy9leHRlcm5hbC1saW5rLnBuZ1wiO1xuXG5jb25zdCBpbWFnZU1hcCA9IHtcbiAgXCJDVi1hcHBsaWNhdGlvblwiOiBjdkFwcGxpY2F0aW9uSW1nLFxuICBcInRvZG8tbGlzdFwiOiB0b2RvTGlzdElNRyxcbiAgXCJ3ZWF0aGVyLWFwcFwiOiB3ZWF0aGVyQXBwSU1HLFxuICBjYWxjdWxhdG9yOiBjYWxjdWxhdG9ySU1HLFxuICBcImV0Y2gtYS1za2V0Y2hcIjogZXRjaEFTa2F0Y2hJTUcsXG4gIFwiYWRtaW4tZGFzaGJvYXJkXCI6IGFkbWluRGFzaGJvYXJkSU1HLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gW1xuICAgIFwiQ1YtYXBwbGljYXRpb25cIixcbiAgICBcInRvZG8tbGlzdFwiLFxuICAgIFwid2VhdGhlci1hcHBcIixcbiAgICBcImNhbGN1bGF0b3JcIixcbiAgICBcImV0Y2gtYS1za2V0Y2hcIixcbiAgICBcImFkbWluLWRhc2hib2FyZFwiLFxuICBdO1xuXG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIik7XG5cbiAgcHJvamVjdHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwic2NyZWVuc2hvdFwiKTtcbiAgICBpbWFnZS5zcmMgPSBpbWFnZU1hcFtlbF07XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5mb1wiKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJbmZvKTtcblxuICAgIGNvbnN0IHBhcnNlZE5hbWUgPSBlbFxuICAgICAgLnJlcGxhY2UoL15cXHcvLCAoYykgPT4gYy50b1VwcGVyQ2FzZSgpKVxuICAgICAgLnJlcGxhY2UoLy0vZywgXCIgXCIpO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwYXJzZWROYW1lO1xuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoXCJsaW5rc1wiKTtcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChsaW5rcyk7XG5cbiAgICBjb25zdCBnaExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBpZiAoZWwgPT09IFwiQ1YtYXBwbGljYXRpb25cIilcbiAgICAgIGdoTGluay5ocmVmID0gYGh0dHBzOi8vZ2l0aHViLmNvbS9zYWJhLWJhcjk1L2N2LWFwcGA7XG4gICAgaWYgKGVsICE9PSBcIkNWLWFwcGxpY2F0aW9uXCIpIHtcbiAgICAgIGdoTGluay5ocmVmID0gYGh0dHBzOi8vZ2l0aHViLmNvbS9zYWJhLWJhcjk1LyR7ZWx9YDtcbiAgICB9XG4gICAgZ2hMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQoZ2hMaW5rKTtcblxuICAgIGNvbnN0IGdpdGh1YiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgZ2l0aHViLnNyYyA9XG4gICAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1wiO1xuICAgIGdoTGluay5hcHBlbmRDaGlsZChnaXRodWIpO1xuXG4gICAgY29uc3QgbGl2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgIGlmIChlbCA9PT0gXCJDVi1hcHBsaWNhdGlvblwiKVxuICAgICAgbGl2ZUxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9jdi1hcHAtcGkudmVyY2VsLmFwcC9cIjtcbiAgICBpZiAoZWwgIT09IFwiQ1YtYXBwbGljYXRpb25cIikge1xuICAgICAgbGl2ZUxpbmsuaHJlZiA9IGBodHRwczovL3NhYmEtYmFyOTUuZ2l0aHViLmlvLyR7ZWx9L2A7XG4gICAgfVxuICAgIGxpdmVMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobGl2ZUxpbmspO1xuXG4gICAgY29uc3QgbGl2ZSA9IG5ldyBJbWFnZSgpO1xuICAgIGxpdmUuc3JjID0gbGl2ZUltZztcbiAgICBsaXZlTGluay5hcHBlbmRDaGlsZChsaXZlKTtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdHMgZnJvbSBcIi4vY29tcG9uZW50cy9jcmVhdGVQcm9qZWN0XCI7XG5cbmNyZWF0ZVByb2plY3RzKCk7XG5cbmNvbnN0IGxhbmRtYXJrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFuZG1hcmtcIik7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIH1cbiAgfSk7XG59KTtcblxubGFuZG1hcmtzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKTtcbn0pO1xuXG5wcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIG9ic2VydmVyLm9ic2VydmUoaXRlbSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==