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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: FiraGOBold;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
  font-family: FiraGOReg;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
@keyframes slideFromRight {
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
header .info-container .about-container a {
  color: inherit;
}
header .info-container .about-container h1 {
  text-align: center;
  font-family: "Playfair Display", serif;
  animation: growFontSize 2.3s ease-out forwards;
}
header .info-container .about-container p {
  font-size: 1.3rem;
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
  transition: transform 0.3s ease-in-out;
}
header .info-container .about-container .references img:hover {
  transform: scale(1.1);
}

@media (min-width: 750px) and (max-width: 1200px) {
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
  header .info-container .about-container p {
    user-select: none;
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
@media (min-width: 1200px) {
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
  max-width: 2000px;
  margin: auto;
}
main h1 {
  text-align: center;
  color: #374151;
  font-family: "Playfair Display", serif;
  padding-bottom: 30px;
  position: relative;
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
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
}
main .projects-container .project .screenshot {
  width: 100%;
  object-fit: fill;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  max-height: 18vh;
  min-height: 10vh;
}
main .projects-container .project .project-info {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
main .projects-container .project .project-info .name {
  color: #374151;
  font-size: 1.3rem;
  font-family: FiraGOReg;
}
main .projects-container .project .project-info .links {
  display: flex;
  align-items: center;
  gap: 15px;
}
main .projects-container .project .project-info .links img {
  width: 20px;
  transition: transform 0.3s ease-in-out;
}
main .projects-container .project .project-info .links img:hover {
  transform: scale(1.2);
}

@media (min-width: 750px) and (max-width: 1200px) {
  main .projects-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
}
@media (min-width: 1200px) {
  main .projects-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 100px;
  }
  main .projects-container .project .project-info .name {
    font-size: 1.5rem;
  }
}
@media (min-width: 2000px) {
  main .projects-container {
    gap: 40px;
  }
  main .projects-container .project .screenshot {
    min-height: 5vh;
  }
  main .projects-container .project .project-info .name {
    font-size: 1.5rem;
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
footer a {
  color: #f1f5f9;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
}
footer a:hover {
  transform: translateX(5px);
}
footer .github-text {
  text-align: center;
}
footer .github-text img {
  width: 60px;
  transition: transform 0.3s ease-in-out;
}
footer .github-text img:hover {
  transform: scale(1.1);
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
}

.visible {
  opacity: 1 !important;
  transition: opacity 1s ease-in-out;
}

@media (min-width: 750px) and (max-width: 1200px) {
  body {
    gap: 75px;
  }
}
@media (min-width: 1200px) {
  body {
    gap: 100px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/index.scss","webpack://./src/styles/animations.scss","webpack://./src/styles/header.scss","webpack://./src/styles/main.scss","webpack://./src/styles/footer.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\r\n\r\n@font-face {\r\n  font-family: FiraGOBold;\r\n  src: url(\"/src/assets/fonts/FiraGO/FiraGO-ExtraBold.otf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: FiraGOReg;\r\n  src: url(\"/src/assets/fonts/FiraGO/FiraGO-Regular.otf\");\r\n}\r\n\r\n$heading-light-color: #f1f5f9;\r\n$heading-dark-color: #374151;\r\n$body-text-dark-color: #475569;\r\n$headings-font: \"Playfair Display\", serif;\r\n$text-font: \"Roboto\", sans-serif;\r\n$breakpoint-tablet: 750px;\r\n$breakpoint-desktop: 1200px;\r\n$breakpoint-ultrawide: 2000px;\r\n","// @use \"variables\" as var;\r\n@use \"./styles/variables.scss\" as var;\r\n@use \"./styles/header.scss\";\r\n@use \"./styles/main.scss\";\r\n@use \"./styles/footer.scss\";\r\n@use \"./styles/animations.scss\";\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var.$text-font;\r\n  color: var.$body-text-dark-color;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 50px;\r\n}\r\n\r\n.landmark {\r\n  opacity: 0;\r\n}\r\n\r\n.visible {\r\n  opacity: 1 !important;\r\n  transition: opacity 1s ease-in-out;\r\n}\r\n\r\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\r\n  body {\r\n    gap: 75px;\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  body {\r\n    gap: 100px;\r\n  }\r\n}\r\n","@keyframes slideFromRight {\r\n  0% {\r\n    right: -100%;\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    right: 0%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slideFromLeft {\r\n  0% {\r\n    left: -100%;\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    left: 0%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes growFontSize {\r\n  0% {\r\n    font-size: 1rem;\r\n  }\r\n  100% {\r\n    font-size: 2.5rem;\r\n  }\r\n}\r\n","@use \"variables\" as var;\r\n@use \"animations.scss\";\r\n\r\nheader {\r\n  padding: 40px 40px 0 40px;\r\n  overflow: hidden;\r\n  position: relative;\r\n\r\n  .background {\r\n    background-color: #0891b2;\r\n    clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 100%);\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    height: 100vw;\r\n  }\r\n\r\n  .info-container {\r\n    .image-container {\r\n      text-align: center;\r\n      margin-bottom: 50px;\r\n      position: relative;\r\n      animation: slideFromLeft 2s ease-out forwards;\r\n\r\n      img {\r\n        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n        width: 80%;\r\n      }\r\n\r\n      .name-container {\r\n        position: absolute;\r\n        bottom: 0;\r\n        left: 6%;\r\n        color: var.$heading-light-color;\r\n        font-family: var.$headings-font;\r\n        padding: 15px 30px;\r\n        width: 95%;\r\n        text-align: left;\r\n        animation: growFontSize 2.3s ease-out forwards;\r\n      }\r\n    }\r\n\r\n    .about-container {\r\n      position: relative;\r\n      animation: slideFromRight 2s ease-out forwards;\r\n\r\n      a {\r\n        color: inherit;\r\n      }\r\n\r\n      h1 {\r\n        text-align: center;\r\n        font-family: var.$headings-font;\r\n        animation: growFontSize 2.3s ease-out forwards;\r\n      }\r\n\r\n      p {\r\n        font-size: 1.3rem;\r\n        padding-bottom: 15px;\r\n      }\r\n\r\n      p:first-of-type {\r\n        padding-top: 25px;\r\n      }\r\n\r\n      .references {\r\n        text-align: center;\r\n\r\n        img {\r\n          width: 40px;\r\n          transition: transform 0.3s ease-in-out;\r\n\r\n          &:hover {\r\n            transform: scale(1.1);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\r\n  header {\r\n    .background {\r\n      height: 80vw;\r\n      clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 74%);\r\n    }\r\n\r\n    .info-container {\r\n      .image-container {\r\n        float: left;\r\n        box-shadow: none;\r\n        padding-right: 20px;\r\n        max-width: 40%;\r\n        margin: 0;\r\n        z-index: 1;\r\n\r\n        img {\r\n          width: 100%;\r\n        }\r\n\r\n        .name-container {\r\n          top: 0;\r\n          left: -15%;\r\n          padding: 0;\r\n          width: 300%;\r\n          text-align: unset;\r\n        }\r\n      }\r\n\r\n      .about-container {\r\n        width: 90%;\r\n        padding: 100px 30px 40px 30px;\r\n        background-color: #f1f5f9;\r\n        margin-left: 70px;\r\n        transform: translateY(15%);\r\n\r\n        p {\r\n          user-select: none;\r\n        }\r\n\r\n        .about-text {\r\n          transform: translateY(-18%);\r\n        }\r\n\r\n        h1 {\r\n          transform: translateY(-130%);\r\n        }\r\n\r\n        .references {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  header {\r\n    padding: 40px 40px 0 40px;\r\n\r\n    .background {\r\n      height: 35vw;\r\n    }\r\n\r\n    .info-container {\r\n      display: flex;\r\n      align-items: center;\r\n\r\n      .image-container {\r\n        max-width: 28%;\r\n        margin: 0;\r\n\r\n        img {\r\n          width: 100%;\r\n        }\r\n\r\n        .name-container {\r\n          left: 0;\r\n          padding: 10px;\r\n        }\r\n      }\r\n\r\n      .about-container {\r\n        background-color: #f1f5f9;\r\n        padding: 20px;\r\n        overflow: hidden;\r\n\r\n        p {\r\n          font-size: 1.5rem;\r\n        }\r\n\r\n        .references {\r\n          text-align: right;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-ultrawide) {\r\n  header {\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    .background {\r\n      height: 30vh;\r\n    }\r\n\r\n    .info-container {\r\n      max-width: 2000px;\r\n\r\n      .image-container {\r\n        max-width: 20%;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@use \"variables\" as var;\r\n@use \"animations.scss\";\r\n\r\nmain {\r\n  padding: 0 40px;\r\n  max-width: 2000px;\r\n  margin: auto;\r\n\r\n  h1 {\r\n    text-align: center;\r\n    color: var.$heading-dark-color;\r\n    font-family: var.$headings-font;\r\n    padding-bottom: 30px;\r\n    position: relative;\r\n  }\r\n\r\n  .projects-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 30px;\r\n\r\n    .project {\r\n      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n      border-radius: 10px;\r\n      opacity: 0;\r\n      transition: opacity 1s ease-in-out 0.5s;\r\n      max-width: 500px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      gap: 15px;\r\n\r\n      .screenshot {\r\n        width: 100%;\r\n        object-fit: fill;\r\n        border-top-left-radius: 10px;\r\n        border-top-right-radius: 10px;\r\n        max-height: 18vh;\r\n        min-height: 10vh;\r\n      }\r\n\r\n      .project-info {\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        align-items: center;\r\n        padding: 10px 0;\r\n        font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n          Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\r\n          sans-serif;\r\n\r\n        .name {\r\n          color: var.$heading-dark-color;\r\n          font-size: 1.3rem;\r\n          font-family: FiraGOReg;\r\n        }\r\n\r\n        .links {\r\n          display: flex;\r\n          align-items: center;\r\n          gap: 15px;\r\n\r\n          img {\r\n            width: 20px;\r\n            transition: transform 0.3s ease-in-out;\r\n\r\n            &:hover {\r\n              transform: scale(1.2);\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\r\n  main {\r\n    .projects-container {\r\n      grid-template-columns: repeat(2, 1fr);\r\n      gap: 50px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  main {\r\n    .projects-container {\r\n      grid-template-columns: repeat(3, 1fr);\r\n      gap: 100px;\r\n\r\n      .project {\r\n        .project-info {\r\n          .name {\r\n            font-size: 1.5rem;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-ultrawide) {\r\n  main {\r\n    .projects-container {\r\n      gap: 40px;\r\n\r\n      .project {\r\n        .screenshot {\r\n          min-height: 5vh;\r\n        }\r\n\r\n        .project-info {\r\n          .name {\r\n            font-size: 1.5rem;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n","@use \"variables\" as var;\r\n\r\nfooter {\r\n  background-color: #0891b2;\r\n  padding: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n\r\n  h1 {\r\n    text-align: center;\r\n    color: var.$heading-light-color;\r\n    font-family: var.$headings-font;\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  h2 {\r\n    color: var.$heading-light-color;\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n  }\r\n\r\n  p {\r\n    color: var.$heading-light-color;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  a {\r\n    color: #f1f5f9;\r\n    text-decoration: none;\r\n    transition: transform 0.3s ease-in-out;\r\n\r\n    &:hover {\r\n      transform: translateX(5px);\r\n    }\r\n  }\r\n\r\n  .github-text {\r\n    text-align: center;\r\n\r\n    img {\r\n      width: 60px;\r\n      transition: transform 0.3s ease-in-out;\r\n\r\n      &:hover {\r\n        transform: scale(1.1);\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4bd237be77dc322f3f6.otf";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b4a58aae1f6b1a3d6be.otf";

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjects)
/* harmony export */ });
/* harmony import */ var _src_assets_images_screenshots_cv_application_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _src_assets_images_screenshots_todo_list_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _src_assets_images_screenshots_weather_app_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _src_assets_images_screenshots_calculator_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _src_assets_images_screenshots_etch_a_skatch_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _src_assets_images_screenshots_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _src_assets_images_links_external_link_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _src_assets_images_screenshots_memory_card_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var _src_assets_images_screenshots_census_2024_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var _src_assets_images_screenshots_shopping_cart_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24);
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */











const imageMap = {
  "census-2024": _src_assets_images_screenshots_census_2024_png__WEBPACK_IMPORTED_MODULE_8__,
  "shopping-cart": _src_assets_images_screenshots_shopping_cart_png__WEBPACK_IMPORTED_MODULE_9__,
  "CV-application": _src_assets_images_screenshots_cv_application_png__WEBPACK_IMPORTED_MODULE_0__,
  "todo-list": _src_assets_images_screenshots_todo_list_png__WEBPACK_IMPORTED_MODULE_1__,
  "memory-card": _src_assets_images_screenshots_memory_card_png__WEBPACK_IMPORTED_MODULE_7__,
  "weather-app": _src_assets_images_screenshots_weather_app_png__WEBPACK_IMPORTED_MODULE_2__,
  "admin-dashboard": _src_assets_images_screenshots_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_5__,
  "etch-a-sketch": _src_assets_images_screenshots_etch_a_skatch_png__WEBPACK_IMPORTED_MODULE_4__,
  calculator: _src_assets_images_screenshots_calculator_png__WEBPACK_IMPORTED_MODULE_3__,
};

const pageLinks = {
  "census-2024": "https://census-2024.vercel.app/",
  "shopping-cart": "https://shopping-cart-three-ivory.vercel.app/",
  "CV-application": "https://cv-app-pi.vercel.app/",
  "memory-card": "https://memory-card-alpha-bay.vercel.app/",
};

const projects = [
  "census-2024",
  "shopping-cart",
  "CV-application",
  "todo-list",
  "memory-card",
  "weather-app",
  "admin-dashboard",
  "calculator",
  "etch-a-sketch",
];

function createProjects() {
  const projectsContainer = document.querySelector(".projects-container");

  projects.forEach((el) => {
    if (
      el === "etch-a-sketch" ||
      el === "admin-dashboard" ||
      el === "calculator"
    ) {
      return;
    }

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
    liveLink.href = pageLinks[el] || `https://saba-bar95.github.io/${el}/`;
    liveLink.target = "_blank";
    links.appendChild(liveLink);

    const live = new Image();
    live.src = _src_assets_images_links_external_link_png__WEBPACK_IMPORTED_MODULE_6__;
    liveLink.appendChild(live);
  });
}


/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e42268078ed07b2d6d92.png";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "861bb8395b50f4e3f6dd.png";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3040dcfbdd7fc6c78527.png";

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "551f5b4dfd6e10d28889.png";

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6d1fa5086314c0c14a1.png";

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70eb30f5c4db4870b008.png";

/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5595b6cd59c04a475c9b.png";

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4eda916b753b31a50b68.png";

/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8747fa468d054ea1762b.png";

/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6969c3d6af26dea5d11.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _components_createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



(0,_components_createProject__WEBPACK_IMPORTED_MODULE_1__["default"])();

const landmarks = document.querySelectorAll(".landmark");
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = i * 500;
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, delay);
      observer.unobserve(entry.target);
    }
  });
});

landmarks.forEach((item) => {
  observer.observe(item);
});

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = i * 300;
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, delay);

      projectObserver.unobserve(entry.target);
    }
  });
});

projects.forEach((item) => {
  projectObserver.observe(item);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdE0seUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrUUFBK1EsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLGFBQWEsWUFBWSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxzSEFBc0gsMkJBQTJCLGtGQUFrRixNQUFNLE1BQU0sTUFB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O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7QUNBc0I7QUFDa0M7QUFDeEQ7QUFDQSxxRUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LnNjc3M/NzIyMyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9GaXJhR08vRmlyYUdPLUV4dHJhQm9sZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9GaXJhR08vRmlyYUdPLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBGaXJhR09Cb2xkO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogRmlyYUdPUmVnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cbkBrZXlmcmFtZXMgc2xpZGVGcm9tUmlnaHQge1xuICAwJSB7XG4gICAgcmlnaHQ6IC0xMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgcmlnaHQ6IDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVGcm9tTGVmdCB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZ3Jvd0ZvbnRTaXplIHtcbiAgMCUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAxMDAlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuaGVhZGVyIHtcbiAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAwJSwgMCUgMTAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIGhlaWdodDogMTAwdnc7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBzbGlkZUZyb21MZWZ0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XG4gIHdpZHRoOiA4MCU7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDYlO1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgcGFkZGluZzogMTVweCAzMHB4O1xuICB3aWR0aDogOTUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbmltYXRpb246IGdyb3dGb250U2l6ZSAyLjNzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IHNsaWRlRnJvbVJpZ2h0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIGEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgYW5pbWF0aW9uOiBncm93Rm9udFNpemUgMi4zcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHA6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAucmVmZXJlbmNlcyBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICBoZWFkZXIgLmJhY2tncm91bmQge1xuICAgIGhlaWdodDogODB2dztcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCAwJSAwJSwgMjI3LjUlIDAlLCAwJSA3NCUpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIG1heC13aWR0aDogNDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciAubmFtZS1jb250YWluZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMTUlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDMwMCU7XG4gICAgdGV4dC1hbGlnbjogdW5zZXQ7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDEwMHB4IDMwcHggNDBweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1JSk7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHAge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAuYWJvdXQtdGV4dCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOCUpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBoMSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzAlKTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgLnJlZmVyZW5jZXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggMCA0MHB4O1xuICB9XG4gIGhlYWRlciAuYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAzNXZ3O1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjglO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDIwJTtcbiAgfVxufVxubWFpbiB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgbWF4LXdpZHRoOiAyMDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbm1haW4gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzc0MTUxO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMzBweDtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0IDAuNXM7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNXB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5zY3JlZW5zaG90IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiAxOHZoO1xuICBtaW4taGVpZ2h0OiAxMHZoO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubmFtZSB7XG4gIGNvbG9yOiAjMzc0MTUxO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC1mYW1pbHk6IEZpcmFHT1JlZztcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5saW5rcyBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubGlua3MgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogNTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ2FwOiAxMDBweDtcbiAgfVxuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBnYXA6IDQwcHg7XG4gIH1cbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5zY3JlZW5zaG90IHtcbiAgICBtaW4taGVpZ2h0OiA1dmg7XG4gIH1cbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xuICBwYWRkaW5nOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMwcHg7XG59XG5mb290ZXIgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZjFmNWY5O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cbmZvb3RlciBoMiB7XG4gIGNvbG9yOiAjZjFmNWY5O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmZvb3RlciBwIHtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuZm9vdGVyIGEge1xuICBjb2xvcjogI2YxZjVmOTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cbmZvb3RlciBhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG59XG5mb290ZXIgLmdpdGh1Yi10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9vdGVyIC5naXRodWItdGV4dCBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5mb290ZXIgLmdpdGh1Yi10ZXh0IGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1MHB4O1xufVxuXG4ubGFuZG1hcmsge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udmlzaWJsZSB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIGJvZHkge1xuICAgIGdhcDogNzVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICBib2R5IHtcbiAgICBnYXA6IDEwMHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9hbmltYXRpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6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QTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQThURjs7QUEzVEE7RUFDRSxVQUFBO0FBOFRGOztBQTNUQTtFQUNFLHFCQUFBO0VBQ0Esa0NBQUE7QUE4VEY7O0FBM1RBO0VBQ0U7SUFDRSxTQUFBO0VBOFRGO0FBQ0Y7QUEzVEE7RUFDRTtJQUNFLFVBQUE7RUE2VEY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBGaXJhR09Cb2xkO1xcclxcbiAgc3JjOiB1cmwoXFxcIi9zcmMvYXNzZXRzL2ZvbnRzL0ZpcmFHTy9GaXJhR08tRXh0cmFCb2xkLm90ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBGaXJhR09SZWc7XFxyXFxuICBzcmM6IHVybChcXFwiL3NyYy9hc3NldHMvZm9udHMvRmlyYUdPL0ZpcmFHTy1SZWd1bGFyLm90ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4kaGVhZGluZy1saWdodC1jb2xvcjogI2YxZjVmOTtcXHJcXG4kaGVhZGluZy1kYXJrLWNvbG9yOiAjMzc0MTUxO1xcclxcbiRib2R5LXRleHQtZGFyay1jb2xvcjogIzQ3NTU2OTtcXHJcXG4kaGVhZGluZ3MtZm9udDogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXHJcXG4kdGV4dC1mb250OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4kYnJlYWtwb2ludC10YWJsZXQ6IDc1MHB4O1xcclxcbiRicmVha3BvaW50LWRlc2t0b3A6IDEyMDBweDtcXHJcXG4kYnJlYWtwb2ludC11bHRyYXdpZGU6IDIwMDBweDtcXHJcXG5cIixcIi8vIEB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyB2YXI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZXMvaGVhZGVyLnNjc3NcXFwiO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVzL21haW4uc2Nzc1xcXCI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZXMvZm9vdGVyLnNjc3NcXFwiO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVzL2FuaW1hdGlvbnMuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyLiR0ZXh0LWZvbnQ7XFxyXFxuICBjb2xvcjogdmFyLiRib2R5LXRleHQtZGFyay1jb2xvcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZG1hcmsge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnZpc2libGUge1xcclxcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC10YWJsZXQpIGFuZCAobWF4LXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGdhcDogNzVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgZ2FwOiAxMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAa2V5ZnJhbWVzIHNsaWRlRnJvbVJpZ2h0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgcmlnaHQ6IC0xMDAlO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHJpZ2h0OiAwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUZyb21MZWZ0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbGVmdDogLTEwMCU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZ3Jvd0ZvbnRTaXplIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcclxcbkB1c2UgXFxcImFuaW1hdGlvbnMuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDQwcHggNDBweCAwIDQwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgLmJhY2tncm91bmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xcclxcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCAwJSAwJSwgMjI3LjUlIDAlLCAwJSAxMDAlKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgIC5pbWFnZS1jb250YWluZXIge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBhbmltYXRpb246IHNsaWRlRnJvbUxlZnQgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxuXFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAubmFtZS1jb250YWluZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgbGVmdDogNiU7XFxyXFxuICAgICAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWxpZ2h0LWNvbG9yO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhci4kaGVhZGluZ3MtZm9udDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBncm93Rm9udFNpemUgMi4zcyBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVGcm9tUmlnaHQgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxuXFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaDEge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhci4kaGVhZGluZ3MtZm9udDtcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogZ3Jvd0ZvbnRTaXplIDIuM3MgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgcDpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAucmVmZXJlbmNlcyB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXRhYmxldCkgYW5kIChtYXgtd2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICAuYmFja2dyb3VuZCB7XFxyXFxuICAgICAgaGVpZ2h0OiA4MHZ3O1xcclxcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDAlIDAlLCAyMjcuNSUgMCUsIDAlIDc0JSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluZm8tY29udGFpbmVyIHtcXHJcXG4gICAgICAuaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5uYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgbGVmdDogLTE1JTtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDMwMCU7XFxyXFxuICAgICAgICAgIHRleHQtYWxpZ246IHVuc2V0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMDBweCAzMHB4IDQwcHggMzBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNSUpO1xcclxcblxcclxcbiAgICAgICAgcCB7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmFib3V0LXRleHQge1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4JSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTMwJSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucmVmZXJlbmNlcyB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcXHJcXG5cXHJcXG4gICAgLmJhY2tncm91bmQge1xcclxcbiAgICAgIGhlaWdodDogMzV2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5mby1jb250YWluZXIge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAuaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMjglO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubmFtZS1jb250YWluZXIge1xcclxcbiAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgICAgIHAge1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5yZWZlcmVuY2VzIHtcXHJcXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdWx0cmF3aWRlKSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgLmJhY2tncm91bmQge1xcclxcbiAgICAgIGhlaWdodDogMzB2aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5mby1jb250YWluZXIge1xcclxcbiAgICAgIG1heC13aWR0aDogMjAwMHB4O1xcclxcblxcclxcbiAgICAgIC5pbWFnZS1jb250YWluZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyMCU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyB2YXI7XFxyXFxuQHVzZSBcXFwiYW5pbWF0aW9ucy5zY3NzXFxcIjtcXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHBhZGRpbmc6IDAgNDBweDtcXHJcXG4gIG1heC13aWR0aDogMjAwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcblxcclxcbiAgaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctZGFyay1jb2xvcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhci4kaGVhZGluZ3MtZm9udDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcblxcclxcbiAgICAucHJvamVjdCB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQgMC41cztcXHJcXG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgZ2FwOiAxNXB4O1xcclxcblxcclxcbiAgICAgIC5zY3JlZW5zaG90IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcXHJcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE4dmg7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAucHJvamVjdC1pbmZvIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsXFxyXFxuICAgICAgICAgIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxyXFxuICAgICAgICAgIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuICAgICAgICAubmFtZSB7XFxyXFxuICAgICAgICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctZGFyay1jb2xvcjtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBGaXJhR09SZWc7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubGlua3Mge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICBnYXA6IDE1cHg7XFxyXFxuXFxyXFxuICAgICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdGFibGV0KSBhbmQgKG1heC13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXHJcXG4gIG1haW4ge1xcclxcbiAgICAucHJvamVjdHMtY29udGFpbmVyIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICAgIGdhcDogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXHJcXG4gIG1haW4ge1xcclxcbiAgICAucHJvamVjdHMtY29udGFpbmVyIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICAgIGdhcDogMTAwcHg7XFxyXFxuXFxyXFxuICAgICAgLnByb2plY3Qge1xcclxcbiAgICAgICAgLnByb2plY3QtaW5mbyB7XFxyXFxuICAgICAgICAgIC5uYW1lIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXVsdHJhd2lkZSkge1xcclxcbiAgbWFpbiB7XFxyXFxuICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgICAgIGdhcDogNDBweDtcXHJcXG5cXHJcXG4gICAgICAucHJvamVjdCB7XFxyXFxuICAgICAgICAuc2NyZWVuc2hvdCB7XFxyXFxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDV2aDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcm9qZWN0LWluZm8ge1xcclxcbiAgICAgICAgICAubmFtZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCJ2YXJpYWJsZXNcXFwiIGFzIHZhcjtcXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWxpZ2h0LWNvbG9yO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgyIHtcXHJcXG4gICAgY29sb3I6IHZhci4kaGVhZGluZy1saWdodC1jb2xvcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwIHtcXHJcXG4gICAgY29sb3I6IHZhci4kaGVhZGluZy1saWdodC1jb2xvcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhIHtcXHJcXG4gICAgY29sb3I6ICNmMWY1Zjk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ2l0aHViLXRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hYnNvbHV0ZS1wYXRoICovXHJcbmltcG9ydCBjdkFwcGxpY2F0aW9uSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvY3YtYXBwbGljYXRpb24ucG5nXCI7XHJcbmltcG9ydCB0b2RvTGlzdElNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL3RvZG8tbGlzdC5wbmdcIjtcclxuaW1wb3J0IHdlYXRoZXJBcHBJTUcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy93ZWF0aGVyLWFwcC5wbmdcIjtcclxuaW1wb3J0IGNhbGN1bGF0b3JJTUcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9jYWxjdWxhdG9yLnBuZ1wiO1xyXG5pbXBvcnQgZXRjaEFTa2F0Y2hJTUcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9ldGNoLWEtc2thdGNoLnBuZ1wiO1xyXG5pbXBvcnQgYWRtaW5EYXNoYm9hcmRJTUcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9hZG1pbi1kYXNoYm9hcmQucG5nXCI7XHJcbmltcG9ydCBsaXZlSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvbGlua3MvZXh0ZXJuYWwtbGluay5wbmdcIjtcclxuaW1wb3J0IG1lbW9yeUNhcmRJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9tZW1vcnktY2FyZC5wbmdcIjtcclxuaW1wb3J0IGNlbnN1c0ltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2NlbnN1cy0yMDI0LnBuZ1wiO1xyXG5pbXBvcnQgc2hvcHBpbmdDYXJ0SW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvc2hvcHBpbmctY2FydC5wbmdcIjtcclxuXHJcbmNvbnN0IGltYWdlTWFwID0ge1xyXG4gIFwiY2Vuc3VzLTIwMjRcIjogY2Vuc3VzSW1nLFxyXG4gIFwic2hvcHBpbmctY2FydFwiOiBzaG9wcGluZ0NhcnRJbWcsXHJcbiAgXCJDVi1hcHBsaWNhdGlvblwiOiBjdkFwcGxpY2F0aW9uSW1nLFxyXG4gIFwidG9kby1saXN0XCI6IHRvZG9MaXN0SU1HLFxyXG4gIFwibWVtb3J5LWNhcmRcIjogbWVtb3J5Q2FyZEltZyxcclxuICBcIndlYXRoZXItYXBwXCI6IHdlYXRoZXJBcHBJTUcsXHJcbiAgXCJhZG1pbi1kYXNoYm9hcmRcIjogYWRtaW5EYXNoYm9hcmRJTUcsXHJcbiAgXCJldGNoLWEtc2tldGNoXCI6IGV0Y2hBU2thdGNoSU1HLFxyXG4gIGNhbGN1bGF0b3I6IGNhbGN1bGF0b3JJTUcsXHJcbn07XHJcblxyXG5jb25zdCBwYWdlTGlua3MgPSB7XHJcbiAgXCJjZW5zdXMtMjAyNFwiOiBcImh0dHBzOi8vY2Vuc3VzLTIwMjQudmVyY2VsLmFwcC9cIixcclxuICBcInNob3BwaW5nLWNhcnRcIjogXCJodHRwczovL3Nob3BwaW5nLWNhcnQtdGhyZWUtaXZvcnkudmVyY2VsLmFwcC9cIixcclxuICBcIkNWLWFwcGxpY2F0aW9uXCI6IFwiaHR0cHM6Ly9jdi1hcHAtcGkudmVyY2VsLmFwcC9cIixcclxuICBcIm1lbW9yeS1jYXJkXCI6IFwiaHR0cHM6Ly9tZW1vcnktY2FyZC1hbHBoYS1iYXkudmVyY2VsLmFwcC9cIixcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3RzID0gW1xyXG4gIFwiY2Vuc3VzLTIwMjRcIixcclxuICBcInNob3BwaW5nLWNhcnRcIixcclxuICBcIkNWLWFwcGxpY2F0aW9uXCIsXHJcbiAgXCJ0b2RvLWxpc3RcIixcclxuICBcIm1lbW9yeS1jYXJkXCIsXHJcbiAgXCJ3ZWF0aGVyLWFwcFwiLFxyXG4gIFwiYWRtaW4tZGFzaGJvYXJkXCIsXHJcbiAgXCJjYWxjdWxhdG9yXCIsXHJcbiAgXCJldGNoLWEtc2tldGNoXCIsXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0cygpIHtcclxuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xyXG5cclxuICBwcm9qZWN0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBlbCA9PT0gXCJldGNoLWEtc2tldGNoXCIgfHxcclxuICAgICAgZWwgPT09IFwiYWRtaW4tZGFzaGJvYXJkXCIgfHxcclxuICAgICAgZWwgPT09IFwiY2FsY3VsYXRvclwiXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcclxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwic2NyZWVuc2hvdFwiKTtcclxuICAgIGltYWdlLnNyYyA9IGltYWdlTWFwW2VsXTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWluZm9cIik7XHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJbmZvKTtcclxuXHJcbiAgICBjb25zdCBwYXJzZWROYW1lID0gZWxcclxuICAgICAgLnJlcGxhY2UoL15cXHcvLCAoYykgPT4gYy50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAucmVwbGFjZSgvLS9nLCBcIiBcIik7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgICBuYW1lLnRleHRDb250ZW50ID0gcGFyc2VkTmFtZTtcclxuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKG5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoXCJsaW5rc1wiKTtcclxuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKGxpbmtzKTtcclxuXHJcbiAgICBjb25zdCBnaExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGlmIChlbCA9PT0gXCJDVi1hcHBsaWNhdGlvblwiKVxyXG4gICAgICBnaExpbmsuaHJlZiA9IGBodHRwczovL2dpdGh1Yi5jb20vc2FiYS1iYXI5NS9jdi1hcHBgO1xyXG4gICAgaWYgKGVsICE9PSBcIkNWLWFwcGxpY2F0aW9uXCIpIHtcclxuICAgICAgZ2hMaW5rLmhyZWYgPSBgaHR0cHM6Ly9naXRodWIuY29tL3NhYmEtYmFyOTUvJHtlbH1gO1xyXG4gICAgfVxyXG4gICAgZ2hMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChnaExpbmspO1xyXG5cclxuICAgIGNvbnN0IGdpdGh1YiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgZ2l0aHViLnNyYyA9XHJcbiAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXCI7XHJcbiAgICBnaExpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcclxuXHJcbiAgICBjb25zdCBsaXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbGl2ZUxpbmsuaHJlZiA9IHBhZ2VMaW5rc1tlbF0gfHwgYGh0dHBzOi8vc2FiYS1iYXI5NS5naXRodWIuaW8vJHtlbH0vYDtcclxuICAgIGxpdmVMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChsaXZlTGluayk7XHJcblxyXG4gICAgY29uc3QgbGl2ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGl2ZS5zcmMgPSBsaXZlSW1nO1xyXG4gICAgbGl2ZUxpbmsuYXBwZW5kQ2hpbGQobGl2ZSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0cyBmcm9tIFwiLi9jb21wb25lbnRzL2NyZWF0ZVByb2plY3RcIjtcclxuXHJcbmNyZWF0ZVByb2plY3RzKCk7XHJcblxyXG5jb25zdCBsYW5kbWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhbmRtYXJrXCIpO1xyXG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcclxuXHJcbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgZW50cmllcy5mb3JFYWNoKChlbnRyeSwgaSkgPT4ge1xyXG4gICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgIGNvbnN0IGRlbGF5ID0gaSAqIDUwMDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICB9LCBkZWxheSk7XHJcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmxhbmRtYXJrcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKTtcclxufSk7XHJcblxyXG5jb25zdCBwcm9qZWN0T2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICBlbnRyaWVzLmZvckVhY2goKGVudHJ5LCBpKSA9PiB7XHJcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgY29uc3QgZGVsYXkgPSBpICogMzAwO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbiAgICAgIH0sIGRlbGF5KTtcclxuXHJcbiAgICAgIHByb2plY3RPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5wcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgcHJvamVjdE9ic2VydmVyLm9ic2VydmUoaXRlbSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=