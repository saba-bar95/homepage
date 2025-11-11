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
    font-size: 2rem;
  }
}
@keyframes growNameFontSize {
  0% {
    font-size: 1rem;
  }
  100% {
    font-size: 2.5rem;
  }
}
header {
  padding: 20px 15px 0 15px;
  overflow: hidden;
  position: relative;
}
header .background {
  background-color: #0891b2;
  clip-path: polygon(0% 30%, 0% 0%, 227.5% -25%, -25% 75%);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100vw;
}
header .info-container {
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}
header .info-container .image-container {
  text-align: center;
  margin-bottom: 15px;
  position: relative;
  animation: slideFromLeft 2s ease-out forwards;
}
header .info-container .image-container img {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 60%;
  max-width: 300px;
}
header .info-container .image-container .name-container {
  position: absolute;
  bottom: 0;
  color: #f1f5f9;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  padding: 15px 30px;
  width: 100%;
  font-size: clamp(1rem, 3.6vw + 0.5rem, 2.5rem);
}
header .info-container .about-container {
  position: relative;
  animation: slideFromRight 2s ease-out forwards;
  max-width: 1000px;
}
header .info-container .about-container a {
  color: inherit;
}
header .info-container .about-container h1 {
  text-align: center;
  font-family: "Playfair Display", serif;
  animation: growAboutFontSizeMobile 2.3s ease-out forwards;
}
header .info-container .about-container p {
  font-size: 0.9rem;
  padding-bottom: 10px;
  hyphens: auto;
}
header .info-container .about-container p:first-of-type {
  padding-top: 12px;
}
header .info-container .about-container .references {
  text-align: center;
}
header .info-container .about-container .references img {
  width: 30px;
  transition: transform 0.3s ease-in-out;
}
header .info-container .about-container .references img:hover {
  transform: scale(1.1);
}

@media (min-width: 769px) and (max-width: 1200px) {
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
    font-size: 1.3rem;
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
  padding: 0 15px;
  max-width: 2000px;
  margin: auto;
}
main h1 {
  text-align: center;
  color: #374151;
  font-family: "Playfair Display", serif;
  padding-bottom: 15px;
  position: relative;
  font-size: 1.6rem;
}
main .projects-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 300px;
  margin: auto;
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
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
main .projects-container .project .project-info .name {
  color: #374151;
  font-size: 1rem;
  text-transform: capitalize;
}
main .projects-container .project .project-info .links {
  display: flex;
  align-items: center;
  gap: 7px;
}
main .projects-container .project .project-info .links a {
  display: flex;
}
main .projects-container .project .project-info .links img {
  width: 15px;
  transition: transform 0.3s ease-in-out;
}
main .projects-container .project .project-info .links img:hover {
  transform: scale(1.2);
}

@media (min-width: 769px) and (max-width: 1200px) {
  main .projects-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
}
@media (min-width: 1200px) {
  main .projects-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 70px;
  }
  main .projects-container .project .project-info .name {
    font-size: 1.3rem;
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
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
footer h1 {
  text-align: center;
  color: #f1f5f9;
  font-family: "Playfair Display", serif;
  font-size: 1.4rem;
}
footer h2 {
  color: #f1f5f9;
  font-size: 0.9rem;
  font-weight: 500;
}
footer p {
  color: #f1f5f9;
  font-size: 0.9rem;
}
footer a {
  color: #f1f5f9;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
  font-size: 0.9rem;
}
footer a:hover {
  transform: translateX(5px);
}
footer .github-text {
  text-align: center;
}
footer .github-text img {
  width: 30px;
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
  gap: 30px;
}

.landmark {
  opacity: 0;
}

.visible {
  opacity: 1 !important;
  transition: opacity 1s ease-in-out;
}

@media (min-width: 769px) and (max-width: 1200px) {
  body {
    gap: 75px;
  }
}
@media (min-width: 1200px) {
  body {
    gap: 70px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/index.scss","webpack://./src/styles/animations.scss","webpack://./src/styles/header.scss","webpack://./src/styles/main.scss","webpack://./src/styles/footer.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\r\n\r\n@font-face {\r\n  font-family: FiraGOBold;\r\n  src: url(\"/src/assets/fonts/FiraGO/FiraGO-ExtraBold.otf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: FiraGOReg;\r\n  src: url(\"/src/assets/fonts/FiraGO/FiraGO-Regular.otf\");\r\n}\r\n\r\n$heading-light-color: #f1f5f9;\r\n$heading-dark-color: #374151;\r\n$body-text-dark-color: #475569;\r\n$headings-font: \"Playfair Display\", serif;\r\n$text-font: \"Roboto\", sans-serif;\r\n$breakpoint-tablet: 769px;\r\n$breakpoint-desktop: 1200px;\r\n$breakpoint-ultrawide: 2000px;\r\n","// @use \"variables\" as var;\r\n@use \"./styles/variables.scss\" as var;\r\n@use \"./styles/header.scss\";\r\n@use \"./styles/main.scss\";\r\n@use \"./styles/footer.scss\";\r\n@use \"./styles/animations.scss\";\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var.$text-font;\r\n  color: var.$body-text-dark-color;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n}\r\n\r\n.landmark {\r\n  opacity: 0;\r\n}\r\n\r\n.visible {\r\n  opacity: 1 !important;\r\n  transition: opacity 1s ease-in-out;\r\n}\r\n\r\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\r\n  body {\r\n    gap: 75px;\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  body {\r\n    gap: 70px;\r\n  }\r\n}\r\n","@keyframes slideFromRight {\r\n  0% {\r\n    right: -100%;\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    right: 0%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slideFromLeft {\r\n  0% {\r\n    left: -100%;\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    left: 0%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes growFontSize {\r\n  0% {\r\n    font-size: 1rem;\r\n  }\r\n  100% {\r\n    font-size: 2rem;\r\n  }\r\n}\r\n\r\n@keyframes growNameFontSize {\r\n  0% {\r\n    font-size: 1rem;\r\n  }\r\n  100% {\r\n    font-size: 2.5rem;\r\n  }\r\n}\r\n","@use \"variables\" as var;\r\n@use \"animations.scss\";\r\n\r\nheader {\r\n  padding: 20px 15px 0 15px;\r\n  overflow: hidden;\r\n  position: relative;\r\n\r\n  .background {\r\n    background-color: #0891b2;\r\n    clip-path: polygon(0% 30%, 0% 0%, 227.5% -25%, -25% 75%);\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    height: 100vw;\r\n  }\r\n\r\n  .info-container {\r\n    justify-content: center;\r\n    max-width: 1200px;\r\n    margin: auto;\r\n\r\n    .image-container {\r\n      text-align: center;\r\n      margin-bottom: 15px;\r\n      position: relative;\r\n      animation: slideFromLeft 2s ease-out forwards;\r\n\r\n      img {\r\n        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n        width: 60%;\r\n        max-width: 300px;\r\n      }\r\n\r\n      .name-container {\r\n        position: absolute;\r\n        bottom: 0;\r\n        color: var.$heading-light-color;\r\n        font-family: var.$headings-font;\r\n        font-weight: 600;\r\n        padding: 15px 30px;\r\n        width: 100%;\r\n        font-size: clamp(1rem, 3.6vw + 0.5rem, 2.5rem);\r\n        // animation: growNameFontSizeMobile 2.3s ease-out forwards;\r\n      }\r\n    }\r\n\r\n    .about-container {\r\n      position: relative;\r\n      animation: slideFromRight 2s ease-out forwards;\r\n      max-width: 1000px;\r\n\r\n      a {\r\n        color: inherit;\r\n      }\r\n\r\n      h1 {\r\n        text-align: center;\r\n        font-family: var.$headings-font;\r\n        animation: growAboutFontSizeMobile 2.3s ease-out forwards;\r\n      }\r\n\r\n      p {\r\n        font-size: 0.9rem;\r\n        padding-bottom: 10px;\r\n        hyphens: auto;\r\n      }\r\n\r\n      p:first-of-type {\r\n        padding-top: 12px;\r\n      }\r\n\r\n      .references {\r\n        text-align: center;\r\n\r\n        img {\r\n          width: 30px;\r\n          transition: transform 0.3s ease-in-out;\r\n\r\n          &:hover {\r\n            transform: scale(1.1);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\r\n  header {\r\n    .background {\r\n      height: 80vw;\r\n      clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 74%);\r\n    }\r\n\r\n    .info-container {\r\n      .image-container {\r\n        float: left;\r\n        box-shadow: none;\r\n        padding-right: 20px;\r\n        max-width: 40%;\r\n        margin: 0;\r\n        z-index: 1;\r\n\r\n        img {\r\n          width: 100%;\r\n        }\r\n\r\n        .name-container {\r\n          top: 0;\r\n          left: -15%;\r\n          padding: 0;\r\n          width: 300%;\r\n          text-align: unset;\r\n        }\r\n      }\r\n\r\n      .about-container {\r\n        width: 90%;\r\n        padding: 100px 30px 40px 30px;\r\n        background-color: #f1f5f9;\r\n        margin-left: 70px;\r\n        transform: translateY(15%);\r\n\r\n        p {\r\n          user-select: none;\r\n        }\r\n\r\n        .about-text {\r\n          transform: translateY(-18%);\r\n        }\r\n\r\n        h1 {\r\n          transform: translateY(-130%);\r\n        }\r\n\r\n        .references {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  header {\r\n    padding: 40px 40px 0 40px;\r\n\r\n    .background {\r\n      height: 35vw;\r\n    }\r\n\r\n    .info-container {\r\n      display: flex;\r\n      align-items: center;\r\n\r\n      .image-container {\r\n        max-width: 28%;\r\n        margin: 0;\r\n\r\n        img {\r\n          width: 100%;\r\n        }\r\n\r\n        .name-container {\r\n          left: 0;\r\n          padding: 10px;\r\n        }\r\n      }\r\n\r\n      .about-container {\r\n        background-color: #f1f5f9;\r\n        padding: 20px;\r\n        overflow: hidden;\r\n\r\n        p {\r\n          font-size: 1.3rem;\r\n        }\r\n\r\n        .references {\r\n          text-align: right;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-ultrawide) {\r\n  header {\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    .background {\r\n      height: 30vh;\r\n    }\r\n\r\n    .info-container {\r\n      max-width: 2000px;\r\n\r\n      .image-container {\r\n        max-width: 20%;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@use \"variables\" as var;\r\n@use \"animations.scss\";\r\n\r\nmain {\r\n  padding: 0 15px;\r\n  max-width: 2000px;\r\n  margin: auto;\r\n\r\n  h1 {\r\n    text-align: center;\r\n    color: var.$heading-dark-color;\r\n    font-family: var.$headings-font;\r\n    padding-bottom: 15px;\r\n    position: relative;\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  .projects-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 30px;\r\n    max-width: 300px;\r\n    // width: 85%;\r\n    margin: auto;\r\n\r\n    .project {\r\n      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n      border-radius: 10px;\r\n      opacity: 0;\r\n      transition: opacity 1s ease-in-out 0.5s;\r\n      max-width: 500px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      gap: 15px;\r\n\r\n      .screenshot {\r\n        width: 100%;\r\n        object-fit: fill;\r\n        border-top-left-radius: 10px;\r\n        border-top-right-radius: 10px;\r\n        max-height: 18vh;\r\n        min-height: 10vh;\r\n      }\r\n\r\n      .project-info {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        gap: 20px;\r\n        padding: 10px;\r\n        font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n          Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\r\n          sans-serif;\r\n\r\n        .name {\r\n          color: var.$heading-dark-color;\r\n          font-size: 1rem;\r\n          // font-family: FiraGOReg;\r\n          text-transform: capitalize;\r\n        }\r\n\r\n        .links {\r\n          display: flex;\r\n          align-items: center;\r\n          gap: 7px;\r\n\r\n          a {\r\n            display: flex;\r\n          }\r\n\r\n          img {\r\n            width: 15px;\r\n            transition: transform 0.3s ease-in-out;\r\n\r\n            &:hover {\r\n              transform: scale(1.2);\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\r\n  main {\r\n    .projects-container {\r\n      grid-template-columns: repeat(2, 1fr);\r\n      gap: 50px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  main {\r\n    .projects-container {\r\n      grid-template-columns: repeat(3, 1fr);\r\n      gap: 70px;\r\n\r\n      .project {\r\n        .project-info {\r\n          .name {\r\n            font-size: 1.3rem;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-ultrawide) {\r\n  main {\r\n    .projects-container {\r\n      gap: 40px;\r\n\r\n      .project {\r\n        .screenshot {\r\n          min-height: 5vh;\r\n        }\r\n\r\n        .project-info {\r\n          .name {\r\n            font-size: 1.5rem;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n","@use \"variables\" as var;\r\n\r\nfooter {\r\n  background-color: #0891b2;\r\n  padding: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n\r\n  h1 {\r\n    text-align: center;\r\n    color: var.$heading-light-color;\r\n    font-family: var.$headings-font;\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  h2 {\r\n    color: var.$heading-light-color;\r\n    font-size: 0.9rem;\r\n    font-weight: 500;\r\n  }\r\n\r\n  p {\r\n    color: var.$heading-light-color;\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  a {\r\n    color: #f1f5f9;\r\n    text-decoration: none;\r\n    transition: transform 0.3s ease-in-out;\r\n    font-size: 0.9rem;\r\n\r\n    &:hover {\r\n      transform: translateX(5px);\r\n    }\r\n  }\r\n\r\n  .github-text {\r\n    text-align: center;\r\n\r\n    img {\r\n      width: 30px;\r\n      transition: transform 0.3s ease-in-out;\r\n\r\n      &:hover {\r\n        transform: scale(1.1);\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _src_assets_images_screenshots_energy_statistics_portal_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25);
/* harmony import */ var _src_assets_images_screenshots_environmental_statistics_portal_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26);
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */













const imageMap = {
  "environmental-statistics-portal": _src_assets_images_screenshots_environmental_statistics_portal_png__WEBPACK_IMPORTED_MODULE_11__,
  "enery-statistics-portal": _src_assets_images_screenshots_energy_statistics_portal_png__WEBPACK_IMPORTED_MODULE_10__,
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
  "environmental-statistics-portal":
    "https://environment-statistics-portal.vercel.app",
  "enery-statistics-portal": "https://energy-portal-seven.vercel.app/",
  "census-2024": "https://census-2024.vercel.app/",
  "shopping-cart": "https://shopping-cart-three-ivory.vercel.app/",
  "CV-application": "https://cv-app-pi.vercel.app/",
  "memory-card": "https://memory-card-alpha-bay.vercel.app/",
};

const projects = [
  "environmental-statistics-portal",
  "enery-statistics-portal",
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

    switch (el) {
      case "environmental-statistics-portal":
        ghLink.href = "https://github.com/saba-bar95/environment";
        break;
      case "enery-statistics-portal":
        ghLink.href = "https://github.com/saba-bar95/energy-portal";
        break;
      case "CV-application":
        ghLink.href = "https://github.com/saba-bar95/cv-app";
        break;
      default:
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

/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a93071d265926a190b0f.png";

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f83066da5535323977f1.png";

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

const animateIfVisible = () => {
  // Only run if tab was visible at page load

  const landmarks = document.querySelectorAll(".landmark");
  const projects = document.querySelectorAll(".project");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = i * 500;
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);
        obs.unobserve(entry.target);
      }
    });
  });

  const projectObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = i * 200;
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);
        obs.unobserve(entry.target);
      }
    });
  });

  landmarks.forEach((item) => observer.observe(item));
  projects.forEach((item) => projectObserver.observe(item));
};

window.addEventListener("load", animateIfVisible);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdE0seUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK1FBQStRLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLGFBQWEsWUFBWSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLHNIQUFzSCwyQkFBMkIsa0ZBQWtGLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sc0JBQXNCLG9CQUFvQiw4QkFBOEIsa0VBQWtFLEtBQUssb0JBQW9CLDZCQUE2QixnRUFBZ0UsS0FBSyxzQ0FBc0MsaUNBQWlDLG1DQUFtQyxnREFBZ0QsdUNBQXVDLDhCQUE4QixnQ0FBZ0Msa0NBQWtDLG9DQUFvQyw0Q0FBNEMsa0NBQWtDLGdDQUFnQyxrQ0FBa0Msc0NBQXNDLFdBQVcsaUJBQWlCLGdCQUFnQiw2QkFBNkIsS0FBSyxjQUFjLGtDQUFrQyx1Q0FBdUMsb0JBQW9CLDZCQUE2QixnQkFBZ0IsS0FBSyxtQkFBbUIsaUJBQWlCLEtBQUssa0JBQWtCLDRCQUE0Qix5Q0FBeUMsS0FBSyw2RkFBNkYsWUFBWSxrQkFBa0IsT0FBTyxLQUFLLHFEQUFxRCxZQUFZLGtCQUFrQixPQUFPLEtBQUssa0NBQWtDLFVBQVUscUJBQXFCLG1CQUFtQixPQUFPLFlBQVksa0JBQWtCLG1CQUFtQixPQUFPLEtBQUssa0NBQWtDLFVBQVUsb0JBQW9CLG1CQUFtQixPQUFPLFlBQVksaUJBQWlCLG1CQUFtQixPQUFPLEtBQUssaUNBQWlDLFVBQVUsd0JBQXdCLE9BQU8sWUFBWSx3QkFBd0IsT0FBTyxLQUFLLHFDQUFxQyxVQUFVLHdCQUF3QixPQUFPLFlBQVksMEJBQTBCLE9BQU8sS0FBSyxpQ0FBaUMsNkJBQTZCLGdCQUFnQixnQ0FBZ0MsdUJBQXVCLHlCQUF5Qix1QkFBdUIsa0NBQWtDLGlFQUFpRSxvQkFBb0IsMkJBQTJCLGVBQWUsZ0JBQWdCLG9CQUFvQixzQkFBc0IsT0FBTywyQkFBMkIsZ0NBQWdDLDBCQUEwQixxQkFBcUIsOEJBQThCLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLHdEQUF3RCxtQkFBbUIsOERBQThELHVCQUF1Qiw2QkFBNkIsV0FBVywrQkFBK0IsK0JBQStCLHNCQUFzQiw0Q0FBNEMsNENBQTRDLDZCQUE2QiwrQkFBK0Isd0JBQXdCLDJEQUEyRCx3RUFBd0UsV0FBVyxTQUFTLDhCQUE4Qiw2QkFBNkIseURBQXlELDRCQUE0QixpQkFBaUIsMkJBQTJCLFdBQVcsa0JBQWtCLCtCQUErQiw0Q0FBNEMsc0VBQXNFLFdBQVcsaUJBQWlCLDhCQUE4QixpQ0FBaUMsMEJBQTBCLFdBQVcsK0JBQStCLDhCQUE4QixXQUFXLDJCQUEyQiwrQkFBK0IscUJBQXFCLDBCQUEwQixxREFBcUQsMkJBQTJCLHNDQUFzQyxlQUFlLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyw2RkFBNkYsY0FBYyxxQkFBcUIsdUJBQXVCLCtEQUErRCxTQUFTLDZCQUE2Qiw0QkFBNEIsd0JBQXdCLDZCQUE2QixnQ0FBZ0MsMkJBQTJCLHNCQUFzQix1QkFBdUIscUJBQXFCLDBCQUEwQixhQUFhLGlDQUFpQyxxQkFBcUIseUJBQXlCLHlCQUF5QiwwQkFBMEIsZ0NBQWdDLGFBQWEsV0FBVyxnQ0FBZ0MsdUJBQXVCLDBDQUEwQyxzQ0FBc0MsOEJBQThCLHVDQUF1QyxtQkFBbUIsZ0NBQWdDLGFBQWEsNkJBQTZCLDBDQUEwQyxhQUFhLG9CQUFvQiwyQ0FBMkMsYUFBYSw2QkFBNkIsNEJBQTRCLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyxxREFBcUQsY0FBYyxrQ0FBa0MseUJBQXlCLHVCQUF1QixTQUFTLDZCQUE2Qix3QkFBd0IsOEJBQThCLGdDQUFnQywyQkFBMkIsc0JBQXNCLHFCQUFxQiwwQkFBMEIsYUFBYSxpQ0FBaUMsc0JBQXNCLDRCQUE0QixhQUFhLFdBQVcsZ0NBQWdDLHNDQUFzQywwQkFBMEIsNkJBQTZCLG1CQUFtQixnQ0FBZ0MsYUFBYSw2QkFBNkIsZ0NBQWdDLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyx1REFBdUQsY0FBYyxzQkFBc0IsZ0NBQWdDLHlCQUF5Qix1QkFBdUIsU0FBUyw2QkFBNkIsNEJBQTRCLGdDQUFnQywyQkFBMkIsV0FBVyxTQUFTLE9BQU8sS0FBSyxpQ0FBaUMsNkJBQTZCLGNBQWMsc0JBQXNCLHdCQUF3QixtQkFBbUIsY0FBYywyQkFBMkIsdUNBQXVDLHdDQUF3Qyw2QkFBNkIsMkJBQTJCLDBCQUEwQixPQUFPLCtCQUErQixzQkFBc0IsbUNBQW1DLGtCQUFrQix5QkFBeUIsc0JBQXNCLHFCQUFxQixzQkFBc0IsdURBQXVELDhCQUE4QixxQkFBcUIsa0RBQWtELDJCQUEyQix3QkFBd0IsaUNBQWlDLHlDQUF5QyxvQkFBb0IsMkJBQTJCLHdCQUF3Qiw2QkFBNkIseUNBQXlDLDBDQUEwQyw2QkFBNkIsNkJBQTZCLFdBQVcsNkJBQTZCLDBCQUEwQiwyQ0FBMkMsZ0NBQWdDLHNCQUFzQiwwQkFBMEIsZ01BQWdNLHVCQUF1Qiw2Q0FBNkMsOEJBQThCLHdDQUF3Qyx5Q0FBeUMsYUFBYSx3QkFBd0IsNEJBQTRCLGtDQUFrQyx1QkFBdUIscUJBQXFCLDhCQUE4QixlQUFlLHVCQUF1Qiw0QkFBNEIsdURBQXVELDZCQUE2Qix3Q0FBd0MsaUJBQWlCLGVBQWUsYUFBYSxXQUFXLFNBQVMsT0FBTyxLQUFLLDZGQUE2RixZQUFZLDZCQUE2QixnREFBZ0Qsb0JBQW9CLFNBQVMsT0FBTyxLQUFLLHFEQUFxRCxZQUFZLDZCQUE2QixnREFBZ0Qsb0JBQW9CLHdCQUF3QiwyQkFBMkIscUJBQXFCLGtDQUFrQyxlQUFlLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyx1REFBdUQsWUFBWSw2QkFBNkIsb0JBQW9CLHdCQUF3Qix5QkFBeUIsOEJBQThCLGFBQWEsK0JBQStCLHFCQUFxQixrQ0FBa0MsZUFBZSxhQUFhLFdBQVcsU0FBUyxPQUFPLEtBQUssaUNBQWlDLGdCQUFnQixnQ0FBZ0Msb0JBQW9CLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLGNBQWMsMkJBQTJCLHdDQUF3Qyx3Q0FBd0MsMEJBQTBCLE9BQU8sY0FBYyx3Q0FBd0MsMEJBQTBCLHlCQUF5QixPQUFPLGFBQWEsd0NBQXdDLDBCQUEwQixPQUFPLGFBQWEsdUJBQXVCLDhCQUE4QiwrQ0FBK0MsMEJBQTBCLHFCQUFxQixxQ0FBcUMsU0FBUyxPQUFPLHdCQUF3QiwyQkFBMkIsaUJBQWlCLHNCQUFzQixpREFBaUQsdUJBQXVCLGtDQUFrQyxXQUFXLFNBQVMsT0FBTyxLQUFLLHVCQUF1QjtBQUNsa2I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7OztBQ3ZZMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDaUY7QUFDVjtBQUNJO0FBQ0Q7QUFDSTtBQUNLO0FBQ2xCO0FBQ1U7QUFDSjtBQUNRO0FBQ3FCO0FBQ1c7QUFDL0c7QUFDQTtBQUNBLHFDQUFxQyxnR0FBNkI7QUFDbEUsNkJBQTZCLHlGQUF5QjtBQUN0RCxpQkFBaUIsMkVBQVM7QUFDMUIsbUJBQW1CLDZFQUFlO0FBQ2xDLG9CQUFvQiw4RUFBZ0I7QUFDcEMsZUFBZSx5RUFBVztBQUMxQixpQkFBaUIsMkVBQWE7QUFDOUIsaUJBQWlCLDJFQUFhO0FBQzlCLHFCQUFxQiwrRUFBaUI7QUFDdEMsbUJBQW1CLDZFQUFjO0FBQ2pDLGNBQWMsMEVBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELEdBQUc7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxHQUFHO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1RUFBTztBQUN0QjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7QUNBc0I7QUFDa0M7QUFDeEQ7QUFDQSxxRUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnRzL0ZpcmFHTy9GaXJhR08tRXh0cmFCb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnRzL0ZpcmFHTy9GaXJhR08tUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwLi45MDA7MSw0MDAuLjkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEZpcmFHT0JvbGQ7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBGaXJhR09SZWc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuQGtleWZyYW1lcyBzbGlkZUZyb21SaWdodCB7XG4gIDAlIHtcbiAgICByaWdodDogLTEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICByaWdodDogMCU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUZyb21MZWZ0IHtcbiAgMCUge1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMCU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBncm93Rm9udFNpemUge1xuICAwJSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIDEwMCUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBncm93TmFtZUZvbnRTaXplIHtcbiAgMCUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAxMDAlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAxNXB4IDAgMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAtMjUlLCAtMjUlIDc1JSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIGhlaWdodDogMTAwdnc7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBzbGlkZUZyb21MZWZ0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiAjZjFmNWY5O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDMuNnZ3ICsgMC41cmVtLCAyLjVyZW0pO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IHNsaWRlRnJvbVJpZ2h0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGFuaW1hdGlvbjogZ3Jvd0Fib3V0Rm9udFNpemVNb2JpbGUgMi4zcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBoeXBoZW5zOiBhdXRvO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHA6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAucmVmZXJlbmNlcyBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICBoZWFkZXIgLmJhY2tncm91bmQge1xuICAgIGhlaWdodDogODB2dztcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCAwJSAwJSwgMjI3LjUlIDAlLCAwJSA3NCUpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIG1heC13aWR0aDogNDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciAubmFtZS1jb250YWluZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMTUlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDMwMCU7XG4gICAgdGV4dC1hbGlnbjogdW5zZXQ7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDEwMHB4IDMwcHggNDBweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1JSk7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHAge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAuYWJvdXQtdGV4dCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOCUpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBoMSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzAlKTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgLnJlZmVyZW5jZXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggMCA0MHB4O1xuICB9XG4gIGhlYWRlciAuYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAzNXZ3O1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjglO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDIwJTtcbiAgfVxufVxubWFpbiB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWF4LXdpZHRoOiAyMDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbm1haW4gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzc0MTUxO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDMwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0IDAuNXM7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNXB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5zY3JlZW5zaG90IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiAxOHZoO1xuICBtaW4taGVpZ2h0OiAxMHZoO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLm5hbWUge1xuICBjb2xvcjogIzM3NDE1MTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGEge1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5saW5rcyBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ2FwOiA1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBnYXA6IDcwcHg7XG4gIH1cbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ2FwOiA0MHB4O1xuICB9XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAuc2NyZWVuc2hvdCB7XG4gICAgbWluLWhlaWdodDogNXZoO1xuICB9XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xufVxuZm9vdGVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5mb290ZXIgaDIge1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5mb290ZXIgcCB7XG4gIGNvbG9yOiAjZjFmNWY5O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbmZvb3RlciBhIHtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuZm9vdGVyIGE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbn1cbmZvb3RlciAuZ2l0aHViLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb290ZXIgLmdpdGh1Yi10ZXh0IGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cbmZvb3RlciAuZ2l0aHViLXRleHQgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMwcHg7XG59XG5cbi5sYW5kbWFyayB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi52aXNpYmxlIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgYm9keSB7XG4gICAgZ2FwOiA3NXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIGJvZHkge1xuICAgIGdhcDogNzBweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6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Q0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0FKNlNKO0FJM1NJO0VBQ0UsMEJBQUE7QUo2U047QUl6U0U7RUFDRSxrQkFBQTtBSjJTSjtBSXpTSTtFQUNFLFdBQUE7RUFDQSxzQ0FBQTtBSjJTTjtBSXpTTTtFQUNFLHFCQUFBO0FKMlNSOztBQWxWQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFxVkY7O0FBbFZBO0VBQ0UsaUNER1U7RUNGVixjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQXFWRjs7QUFsVkE7RUFDRSxVQUFBO0FBcVZGOztBQWxWQTtFQUNFLHFCQUFBO0VBQ0Esa0NBQUE7QUFxVkY7O0FBbFZBO0VBQ0U7SUFDRSxTQUFBO0VBcVZGO0FBQ0Y7QUFsVkE7RUFDRTtJQUNFLFNBQUE7RUFvVkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBGaXJhR09Cb2xkO1xcclxcbiAgc3JjOiB1cmwoXFxcIi9zcmMvYXNzZXRzL2ZvbnRzL0ZpcmFHTy9GaXJhR08tRXh0cmFCb2xkLm90ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBGaXJhR09SZWc7XFxyXFxuICBzcmM6IHVybChcXFwiL3NyYy9hc3NldHMvZm9udHMvRmlyYUdPL0ZpcmFHTy1SZWd1bGFyLm90ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4kaGVhZGluZy1saWdodC1jb2xvcjogI2YxZjVmOTtcXHJcXG4kaGVhZGluZy1kYXJrLWNvbG9yOiAjMzc0MTUxO1xcclxcbiRib2R5LXRleHQtZGFyay1jb2xvcjogIzQ3NTU2OTtcXHJcXG4kaGVhZGluZ3MtZm9udDogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXHJcXG4kdGV4dC1mb250OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4kYnJlYWtwb2ludC10YWJsZXQ6IDc2OXB4O1xcclxcbiRicmVha3BvaW50LWRlc2t0b3A6IDEyMDBweDtcXHJcXG4kYnJlYWtwb2ludC11bHRyYXdpZGU6IDIwMDBweDtcXHJcXG5cIixcIi8vIEB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyB2YXI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZXMvaGVhZGVyLnNjc3NcXFwiO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVzL21haW4uc2Nzc1xcXCI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZXMvZm9vdGVyLnNjc3NcXFwiO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVzL2FuaW1hdGlvbnMuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyLiR0ZXh0LWZvbnQ7XFxyXFxuICBjb2xvcjogdmFyLiRib2R5LXRleHQtZGFyay1jb2xvcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZG1hcmsge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnZpc2libGUge1xcclxcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC10YWJsZXQpIGFuZCAobWF4LXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGdhcDogNzVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgZ2FwOiA3MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBrZXlmcmFtZXMgc2xpZGVGcm9tUmlnaHQge1xcclxcbiAgMCUge1xcclxcbiAgICByaWdodDogLTEwMCU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgcmlnaHQ6IDAlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlRnJvbUxlZnQge1xcclxcbiAgMCUge1xcclxcbiAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBsZWZ0OiAwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBncm93Rm9udFNpemUge1xcclxcbiAgMCUge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGdyb3dOYW1lRm9udFNpemUge1xcclxcbiAgMCUge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyB2YXI7XFxyXFxuQHVzZSBcXFwiYW5pbWF0aW9ucy5zY3NzXFxcIjtcXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMjBweCAxNXB4IDAgMTVweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAuYmFja2dyb3VuZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDAlIDAlLCAyMjcuNSUgLTI1JSwgLTI1JSA3NSUpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmluZm8tY29udGFpbmVyIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICAgIC5pbWFnZS1jb250YWluZXIge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBhbmltYXRpb246IHNsaWRlRnJvbUxlZnQgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxuXFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLm5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctbGlnaHQtY29sb3I7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzLjZ2dyArIDAuNXJlbSwgMi41cmVtKTtcXHJcXG4gICAgICAgIC8vIGFuaW1hdGlvbjogZ3Jvd05hbWVGb250U2l6ZU1vYmlsZSAyLjNzIGVhc2Utb3V0IGZvcndhcmRzO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgYW5pbWF0aW9uOiBzbGlkZUZyb21SaWdodCAycyBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG4gICAgICBtYXgtd2lkdGg6IDEwMDBweDtcXHJcXG5cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBoMSB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBncm93QWJvdXRGb250U2l6ZU1vYmlsZSAyLjNzIGVhc2Utb3V0IGZvcndhcmRzO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICBoeXBoZW5zOiBhdXRvO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5yZWZlcmVuY2VzIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdGFibGV0KSBhbmQgKG1heC13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIC5iYWNrZ3JvdW5kIHtcXHJcXG4gICAgICBoZWlnaHQ6IDgwdnc7XFxyXFxuICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAwJSwgMCUgNzQlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5mby1jb250YWluZXIge1xcclxcbiAgICAgIC5pbWFnZS1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNDAlO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICBsZWZ0OiAtMTUlO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICB3aWR0aDogMzAwJTtcXHJcXG4gICAgICAgICAgdGV4dC1hbGlnbjogdW5zZXQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5hYm91dC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDMwcHggNDBweCAzMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1JSk7XFxyXFxuXFxyXFxuICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYWJvdXQtdGV4dCB7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTglKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzAlKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5yZWZlcmVuY2VzIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggMCA0MHB4O1xcclxcblxcclxcbiAgICAuYmFja2dyb3VuZCB7XFxyXFxuICAgICAgaGVpZ2h0OiAzNXZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgIC5pbWFnZS1jb250YWluZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyOCU7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5uYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5hYm91dC1jb250YWluZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgcCB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnJlZmVyZW5jZXMge1xcclxcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC11bHRyYXdpZGUpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAuYmFja2dyb3VuZCB7XFxyXFxuICAgICAgaGVpZ2h0OiAzMHZoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAyMDAwcHg7XFxyXFxuXFxyXFxuICAgICAgLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDIwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCJ2YXJpYWJsZXNcXFwiIGFzIHZhcjtcXHJcXG5AdXNlIFxcXCJhbmltYXRpb25zLnNjc3NcXFwiO1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgbWF4LXdpZHRoOiAyMDAwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhci4kaGVhZGluZy1kYXJrLWNvbG9yO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgICAvLyB3aWR0aDogODUlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0IHtcXHJcXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dCAwLjVzO1xcclxcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICBnYXA6IDE1cHg7XFxyXFxuXFxyXFxuICAgICAgLnNjcmVlbnNob3Qge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBvYmplY3QtZml0OiBmaWxsO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMTh2aDtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwdmg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5wcm9qZWN0LWluZm8ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6IDIwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLFxcclxcbiAgICAgICAgICBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcclxcbiAgICAgICAgICBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgICAgICAgLm5hbWUge1xcclxcbiAgICAgICAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWRhcmstY29sb3I7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgLy8gZm9udC1mYW1pbHk6IEZpcmFHT1JlZztcXHJcXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubGlua3Mge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICBnYXA6IDdweDtcXHJcXG5cXHJcXG4gICAgICAgICAgYSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXRhYmxldCkgYW5kIChtYXgtd2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgICBnYXA6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgICBnYXA6IDcwcHg7XFxyXFxuXFxyXFxuICAgICAgLnByb2plY3Qge1xcclxcbiAgICAgICAgLnByb2plY3QtaW5mbyB7XFxyXFxuICAgICAgICAgIC5uYW1lIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXVsdHJhd2lkZSkge1xcclxcbiAgbWFpbiB7XFxyXFxuICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgICAgIGdhcDogNDBweDtcXHJcXG5cXHJcXG4gICAgICAucHJvamVjdCB7XFxyXFxuICAgICAgICAuc2NyZWVuc2hvdCB7XFxyXFxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDV2aDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcm9qZWN0LWluZm8ge1xcclxcbiAgICAgICAgICAubmFtZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCJ2YXJpYWJsZXNcXFwiIGFzIHZhcjtcXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWxpZ2h0LWNvbG9yO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgyIHtcXHJcXG4gICAgY29sb3I6IHZhci4kaGVhZGluZy1saWdodC1jb2xvcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwIHtcXHJcXG4gICAgY29sb3I6IHZhci4kaGVhZGluZy1saWdodC1jb2xvcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhIHtcXHJcXG4gICAgY29sb3I6ICNmMWY1Zjk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmdpdGh1Yi10ZXh0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYWJzb2x1dGUtcGF0aCAqL1xyXG5pbXBvcnQgY3ZBcHBsaWNhdGlvbkltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2N2LWFwcGxpY2F0aW9uLnBuZ1wiO1xyXG5pbXBvcnQgdG9kb0xpc3RJTUcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy90b2RvLWxpc3QucG5nXCI7XHJcbmltcG9ydCB3ZWF0aGVyQXBwSU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvd2VhdGhlci1hcHAucG5nXCI7XHJcbmltcG9ydCBjYWxjdWxhdG9ySU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvY2FsY3VsYXRvci5wbmdcIjtcclxuaW1wb3J0IGV0Y2hBU2thdGNoSU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvZXRjaC1hLXNrYXRjaC5wbmdcIjtcclxuaW1wb3J0IGFkbWluRGFzaGJvYXJkSU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvYWRtaW4tZGFzaGJvYXJkLnBuZ1wiO1xyXG5pbXBvcnQgbGl2ZUltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL2xpbmtzL2V4dGVybmFsLWxpbmsucG5nXCI7XHJcbmltcG9ydCBtZW1vcnlDYXJkSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvbWVtb3J5LWNhcmQucG5nXCI7XHJcbmltcG9ydCBjZW5zdXNJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9jZW5zdXMtMjAyNC5wbmdcIjtcclxuaW1wb3J0IHNob3BwaW5nQ2FydEltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL3Nob3BwaW5nLWNhcnQucG5nXCI7XHJcbmltcG9ydCBlbmVyZ3lTdGF0aXN0aWNzUG9ydGFsSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvZW5lcmd5LXN0YXRpc3RpY3MtcG9ydGFsLnBuZ1wiO1xyXG5pbXBvcnQgZW52aXJvbm1lbnRhbFN0YXRpc3RpY3NQb3J0YWwgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9lbnZpcm9ubWVudGFsLXN0YXRpc3RpY3MtcG9ydGFsLnBuZ1wiO1xyXG5cclxuY29uc3QgaW1hZ2VNYXAgPSB7XHJcbiAgXCJlbnZpcm9ubWVudGFsLXN0YXRpc3RpY3MtcG9ydGFsXCI6IGVudmlyb25tZW50YWxTdGF0aXN0aWNzUG9ydGFsLFxyXG4gIFwiZW5lcnktc3RhdGlzdGljcy1wb3J0YWxcIjogZW5lcmd5U3RhdGlzdGljc1BvcnRhbEltZyxcclxuICBcImNlbnN1cy0yMDI0XCI6IGNlbnN1c0ltZyxcclxuICBcInNob3BwaW5nLWNhcnRcIjogc2hvcHBpbmdDYXJ0SW1nLFxyXG4gIFwiQ1YtYXBwbGljYXRpb25cIjogY3ZBcHBsaWNhdGlvbkltZyxcclxuICBcInRvZG8tbGlzdFwiOiB0b2RvTGlzdElNRyxcclxuICBcIm1lbW9yeS1jYXJkXCI6IG1lbW9yeUNhcmRJbWcsXHJcbiAgXCJ3ZWF0aGVyLWFwcFwiOiB3ZWF0aGVyQXBwSU1HLFxyXG4gIFwiYWRtaW4tZGFzaGJvYXJkXCI6IGFkbWluRGFzaGJvYXJkSU1HLFxyXG4gIFwiZXRjaC1hLXNrZXRjaFwiOiBldGNoQVNrYXRjaElNRyxcclxuICBjYWxjdWxhdG9yOiBjYWxjdWxhdG9ySU1HLFxyXG59O1xyXG5cclxuY29uc3QgcGFnZUxpbmtzID0ge1xyXG4gIFwiZW52aXJvbm1lbnRhbC1zdGF0aXN0aWNzLXBvcnRhbFwiOlxyXG4gICAgXCJodHRwczovL2Vudmlyb25tZW50LXN0YXRpc3RpY3MtcG9ydGFsLnZlcmNlbC5hcHBcIixcclxuICBcImVuZXJ5LXN0YXRpc3RpY3MtcG9ydGFsXCI6IFwiaHR0cHM6Ly9lbmVyZ3ktcG9ydGFsLXNldmVuLnZlcmNlbC5hcHAvXCIsXHJcbiAgXCJjZW5zdXMtMjAyNFwiOiBcImh0dHBzOi8vY2Vuc3VzLTIwMjQudmVyY2VsLmFwcC9cIixcclxuICBcInNob3BwaW5nLWNhcnRcIjogXCJodHRwczovL3Nob3BwaW5nLWNhcnQtdGhyZWUtaXZvcnkudmVyY2VsLmFwcC9cIixcclxuICBcIkNWLWFwcGxpY2F0aW9uXCI6IFwiaHR0cHM6Ly9jdi1hcHAtcGkudmVyY2VsLmFwcC9cIixcclxuICBcIm1lbW9yeS1jYXJkXCI6IFwiaHR0cHM6Ly9tZW1vcnktY2FyZC1hbHBoYS1iYXkudmVyY2VsLmFwcC9cIixcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3RzID0gW1xyXG4gIFwiZW52aXJvbm1lbnRhbC1zdGF0aXN0aWNzLXBvcnRhbFwiLFxyXG4gIFwiZW5lcnktc3RhdGlzdGljcy1wb3J0YWxcIixcclxuICBcImNlbnN1cy0yMDI0XCIsXHJcbiAgXCJzaG9wcGluZy1jYXJ0XCIsXHJcbiAgXCJDVi1hcHBsaWNhdGlvblwiLFxyXG4gIFwidG9kby1saXN0XCIsXHJcbiAgXCJtZW1vcnktY2FyZFwiLFxyXG4gIFwid2VhdGhlci1hcHBcIixcclxuICBcImFkbWluLWRhc2hib2FyZFwiLFxyXG4gIFwiY2FsY3VsYXRvclwiLFxyXG4gIFwiZXRjaC1hLXNrZXRjaFwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMoKSB7XHJcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgcHJvamVjdHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcclxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwic2NyZWVuc2hvdFwiKTtcclxuICAgIGltYWdlLnNyYyA9IGltYWdlTWFwW2VsXTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWluZm9cIik7XHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJbmZvKTtcclxuXHJcbiAgICBjb25zdCBwYXJzZWROYW1lID0gZWxcclxuICAgICAgLnJlcGxhY2UoL15cXHcvLCAoYykgPT4gYy50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAucmVwbGFjZSgvLS9nLCBcIiBcIik7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgICBuYW1lLnRleHRDb250ZW50ID0gcGFyc2VkTmFtZTtcclxuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKG5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoXCJsaW5rc1wiKTtcclxuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKGxpbmtzKTtcclxuXHJcbiAgICBjb25zdCBnaExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbiAgICBzd2l0Y2ggKGVsKSB7XHJcbiAgICAgIGNhc2UgXCJlbnZpcm9ubWVudGFsLXN0YXRpc3RpY3MtcG9ydGFsXCI6XHJcbiAgICAgICAgZ2hMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9zYWJhLWJhcjk1L2Vudmlyb25tZW50XCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJlbmVyeS1zdGF0aXN0aWNzLXBvcnRhbFwiOlxyXG4gICAgICAgIGdoTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vc2FiYS1iYXI5NS9lbmVyZ3ktcG9ydGFsXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJDVi1hcHBsaWNhdGlvblwiOlxyXG4gICAgICAgIGdoTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vc2FiYS1iYXI5NS9jdi1hcHBcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBnaExpbmsuaHJlZiA9IGBodHRwczovL2dpdGh1Yi5jb20vc2FiYS1iYXI5NS8ke2VsfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2hMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChnaExpbmspO1xyXG5cclxuICAgIGNvbnN0IGdpdGh1YiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgZ2l0aHViLnNyYyA9XHJcbiAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXCI7XHJcbiAgICBnaExpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcclxuXHJcbiAgICBjb25zdCBsaXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbGl2ZUxpbmsuaHJlZiA9IHBhZ2VMaW5rc1tlbF0gfHwgYGh0dHBzOi8vc2FiYS1iYXI5NS5naXRodWIuaW8vJHtlbH0vYDtcclxuICAgIGxpdmVMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChsaXZlTGluayk7XHJcblxyXG4gICAgY29uc3QgbGl2ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGl2ZS5zcmMgPSBsaXZlSW1nO1xyXG4gICAgbGl2ZUxpbmsuYXBwZW5kQ2hpbGQobGl2ZSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0cyBmcm9tIFwiLi9jb21wb25lbnRzL2NyZWF0ZVByb2plY3RcIjtcclxuXHJcbmNyZWF0ZVByb2plY3RzKCk7XHJcblxyXG5jb25zdCBhbmltYXRlSWZWaXNpYmxlID0gKCkgPT4ge1xyXG4gIC8vIE9ubHkgcnVuIGlmIHRhYiB3YXMgdmlzaWJsZSBhdCBwYWdlIGxvYWRcclxuXHJcbiAgY29uc3QgbGFuZG1hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5kbWFya1wiKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcclxuXHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9icykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSwgaSkgPT4ge1xyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICBjb25zdCBkZWxheSA9IGkgKiA1MDA7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbiAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgIG9icy51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5LCBpKSA9PiB7XHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gaSAqIDIwMDtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcclxuICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgb2JzLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgbGFuZG1hcmtzLmZvckVhY2goKGl0ZW0pID0+IG9ic2VydmVyLm9ic2VydmUoaXRlbSkpO1xyXG4gIHByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHByb2plY3RPYnNlcnZlci5vYnNlcnZlKGl0ZW0pKTtcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhbmltYXRlSWZWaXNpYmxlKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9