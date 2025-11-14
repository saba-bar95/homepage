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
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100vw;
  max-height: 1400px;
  clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 43%);
  background: linear-gradient(135deg, #0c4a6e 0%, #0891b2 50%, #22d3ee 100%);
  background-size: 200% 200%;
  animation: gradientShift 12s ease infinite;
}
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
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
  border-radius: 25px;
}
header .info-container .image-container .name-container {
  position: absolute;
  bottom: 0;
  color: #f1f5f9;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  padding: 15px 30px;
  width: 100%;
  font-size: clamp(1rem, 3.6vw + 0.3rem, 2.5rem);
  pointer-events: none;
}
header .info-container .image-container .name-container span {
  pointer-events: auto;
  user-select: text;
  -webkit-user-select: text;
}
header .info-container .about-container {
  position: relative;
  animation: slideFromRight 2s ease-out forwards;
  max-width: 600px;
  margin: auto;
}
header .info-container .about-container a {
  color: inherit;
}
header .info-container .about-container h1 {
  text-align: center;
  font-family: "Playfair Display", serif;
  font-size: 1.6rem;
}
header .info-container .about-container p {
  font-size: 0.9rem;
  padding-bottom: 10px;
  hyphens: auto;
}
header .info-container .about-container p a {
  text-decoration: none;
  font-weight: 600;
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

@media (min-width: 769px) and (max-width: 1201px) {
  header {
    display: flex;
  }
  header .background {
    height: 100vw;
    clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 43%);
  }
  header .info-container {
    width: 60%;
  }
  header .info-container .image-container {
    float: left;
    box-shadow: none;
    padding-right: 20px;
    max-width: 60%;
    margin: 0;
    z-index: 1;
  }
  header .info-container .image-container img {
    width: 100%;
    max-width: 350px;
  }
  header .info-container .image-container .name-container {
    top: 0;
    margin-left: -12%;
    padding: 0;
    width: 300%;
    text-align: unset;
    font-size: clamp(1rem, 3.6vw + 0.5rem, 2.2rem);
    transform: translateY(25px);
  }
  header .info-container .about-container {
    padding: 50px 20px 20px 20px;
    background-color: #f1f5f9;
    margin-left: 70px;
    transform: translateY(15%);
  }
  header .info-container .about-container p {
    font-size: 1.1rem;
  }
  header .info-container .about-container .about-text {
    transform: translateY(-18%);
  }
  header .info-container .about-container h1 {
    transform: translateY(-130%);
    margin-bottom: 110px;
  }
  header .info-container .about-container .references {
    display: none;
  }
}
@media (min-width: 1201px) {
  header {
    padding: 40px 40px 0 40px;
  }
  header .background {
    height: 75vw;
    clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 43%);
  }
  header .info-container {
    width: max-content;
  }
  header .info-container .image-container {
    float: left;
    box-shadow: none;
    padding-right: 20px;
    max-width: 100%;
    margin: 0;
    z-index: 1;
  }
  header .info-container .image-container img {
    width: 100%;
    max-width: 350px;
  }
  header .info-container .image-container .name-container {
    top: 0;
    margin-left: -12%;
    padding: 0;
    width: 300%;
    text-align: unset;
    font-size: clamp(1rem, 3.6vw + 0.5rem, 2.2rem);
    transform: translateY(25px);
  }
  header .info-container .about-container {
    padding: 50px 20px 20px 20px;
    background-color: #f1f5f9;
    margin-left: 70px;
    transform: translateY(15%);
  }
  header .info-container .about-container p {
    font-size: 1.1rem;
  }
  header .info-container .about-container .about-text {
    transform: translateY(-18%);
  }
  header .info-container .about-container h1 {
    transform: translateY(-130%);
    margin-bottom: 80px;
  }
  header .info-container .about-container .references {
    display: none;
  }
}
@media (min-width: 1921px) {
  header .background {
    height: 65vw;
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
  margin: auto;
}
main .projects-container .project {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 1s ease-in-out 0.5s;
  max-width: 250px;
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

@media (min-width: 769px) and (max-width: 1201px) {
  main .projects-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
  main .projects-container .project {
    max-width: 300px;
  }
  main .projects-container .project .screenshot {
    max-height: fit-content;
  }
  main .projects-container .project .project-info .name {
    font-size: 1.15rem;
  }
  main .projects-container .project .project-info .links img {
    width: 18px;
  }
}
@media (min-width: 1201px) {
  main {
    padding: 0 50px;
  }
  main h1 {
    font-size: 2rem;
  }
  main .projects-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  main .projects-container .project {
    max-width: 350px;
  }
  main .projects-container .project .screenshot {
    max-height: fit-content;
  }
  main .projects-container .project .project-info .name {
    font-size: 1.1rem;
  }
  main .projects-container .project .project-info .links img {
    width: 20px;
  }
}
@media (min-width: 1921px) {
  main h1 {
    font-size: 2.5rem;
  }
  main .projects-container {
    gap: 50px;
  }
  main .projects-container .project .project-info .name {
    font-size: 1.2rem;
  }
  main .projects-container .project .project-info .links img {
    width: 22px;
  }
}
footer {
  background-color: #0891b2;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
}
footer h1 {
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

@media (min-width: 1201px) {
  footer h1 {
    font-size: 1.8rem;
  }
  footer p {
    font-size: 1rem;
  }
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

@media (min-width: 769px) and (max-width: 1201px) {
  body {
    gap: 40px;
  }
}
@media (min-width: 1201px) {
  body {
    gap: 40px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/index.scss","webpack://./src/styles/animations.scss","webpack://./src/styles/header.scss","webpack://./src/styles/main.scss","webpack://./src/styles/footer.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\r\n\r\n@font-face {\r\n  font-family: FiraGOBold;\r\n  src: url(\"/src/assets/fonts/FiraGO/FiraGO-ExtraBold.otf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: FiraGOReg;\r\n  src: url(\"/src/assets/fonts/FiraGO/FiraGO-Regular.otf\");\r\n}\r\n\r\n$heading-light-color: #f1f5f9;\r\n$heading-dark-color: #374151;\r\n$body-text-dark-color: #475569;\r\n$headings-font: \"Playfair Display\", serif;\r\n$text-font: \"Roboto\", sans-serif;\r\n$breakpoint-tablet: 769px;\r\n$breakpoint-desktop: 1201px;\r\n$breakpoint-ultrawide: 1921px;\r\n","// @use \"variables\" as var;\r\n@use \"./styles/variables.scss\" as var;\r\n@use \"./styles/header.scss\";\r\n@use \"./styles/main.scss\";\r\n@use \"./styles/footer.scss\";\r\n@use \"./styles/animations.scss\";\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var.$text-font;\r\n  color: var.$body-text-dark-color;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n}\r\n\r\n.landmark {\r\n  opacity: 0;\r\n}\r\n\r\n.visible {\r\n  opacity: 1 !important;\r\n  transition: opacity 1s ease-in-out;\r\n}\r\n\r\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\r\n  body {\r\n    gap: 40px;\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  body {\r\n    gap: 40px;\r\n  }\r\n}\r\n","@keyframes slideFromRight {\r\n  0% {\r\n    right: -100%;\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    right: 0%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slideFromLeft {\r\n  0% {\r\n    left: -100%;\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    left: 0%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes growFontSize {\r\n  0% {\r\n    font-size: 1rem;\r\n  }\r\n  100% {\r\n    font-size: 2rem;\r\n  }\r\n}\r\n\r\n@keyframes growNameFontSize {\r\n  0% {\r\n    font-size: 1rem;\r\n  }\r\n  100% {\r\n    font-size: 2.5rem;\r\n  }\r\n}\r\n","@use \"variables\" as var;\r\n@use \"animations.scss\";\r\n\r\nheader {\r\n  padding: 20px 15px 0 15px;\r\n  overflow: hidden;\r\n  position: relative;\r\n\r\n  .background {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    height: 100vw;\r\n    max-height: 1400px;\r\n    clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 43%);\r\n    background: linear-gradient(135deg, #0c4a6e 0%, #0891b2 50%, #22d3ee 100%);\r\n    background-size: 200% 200%;\r\n    animation: gradientShift 12s ease infinite;\r\n\r\n    @keyframes gradientShift {\r\n      0%,\r\n      100% {\r\n        background-position: 0% 50%;\r\n      }\r\n      50% {\r\n        background-position: 100% 50%;\r\n      }\r\n    }\r\n  }\r\n\r\n  .info-container {\r\n    justify-content: center;\r\n    max-width: 1200px;\r\n    margin: auto;\r\n\r\n    .image-container {\r\n      text-align: center;\r\n      margin-bottom: 15px;\r\n      position: relative;\r\n      animation: slideFromLeft 2s ease-out forwards;\r\n\r\n      img {\r\n        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n        width: 60%;\r\n        max-width: 300px;\r\n        border-radius: 25px;\r\n      }\r\n\r\n      .name-container {\r\n        position: absolute;\r\n        bottom: 0;\r\n        color: var.$heading-light-color;\r\n        font-family: var.$headings-font;\r\n        font-weight: 600;\r\n        padding: 15px 30px;\r\n        width: 100%;\r\n        font-size: clamp(1rem, 3.6vw + 0.3rem, 2.5rem);\r\n        pointer-events: none;\r\n\r\n        span {\r\n          pointer-events: auto; // Only the text is selectable\r\n          user-select: text;\r\n          -webkit-user-select: text;\r\n        }\r\n      }\r\n    }\r\n\r\n    .about-container {\r\n      position: relative;\r\n      animation: slideFromRight 2s ease-out forwards;\r\n      max-width: 600px;\r\n      margin: auto;\r\n\r\n      a {\r\n        color: inherit;\r\n      }\r\n\r\n      h1 {\r\n        text-align: center;\r\n        font-family: var.$headings-font;\r\n        font-size: 1.6rem;\r\n      }\r\n\r\n      p {\r\n        font-size: 0.9rem;\r\n        padding-bottom: 10px;\r\n        hyphens: auto;\r\n\r\n        a {\r\n          text-decoration: none;\r\n          font-weight: 600;\r\n        }\r\n      }\r\n\r\n      p:first-of-type {\r\n        padding-top: 12px;\r\n      }\r\n\r\n      .references {\r\n        text-align: center;\r\n\r\n        img {\r\n          width: 30px;\r\n          transition: transform 0.3s ease-in-out;\r\n\r\n          &:hover {\r\n            transform: scale(1.1);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\r\n  header {\r\n    display: flex;\r\n\r\n    .background {\r\n      height: 100vw;\r\n      clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 43%);\r\n    }\r\n\r\n    .info-container {\r\n      width: 60%;\r\n\r\n      .image-container {\r\n        float: left;\r\n        box-shadow: none;\r\n        padding-right: 20px;\r\n        max-width: 60%;\r\n        margin: 0;\r\n        z-index: 1;\r\n\r\n        img {\r\n          width: 100%;\r\n          max-width: 350px;\r\n        }\r\n\r\n        .name-container {\r\n          top: 0;\r\n          margin-left: -12%;\r\n          padding: 0;\r\n          width: 300%;\r\n          text-align: unset;\r\n          font-size: clamp(1rem, 3.6vw + 0.5rem, 2.2rem);\r\n          transform: translateY(25px);\r\n        }\r\n      }\r\n\r\n      .about-container {\r\n        padding: 50px 20px 20px 20px;\r\n        background-color: #f1f5f9;\r\n        margin-left: 70px;\r\n        transform: translateY(15%);\r\n\r\n        p {\r\n          font-size: 1.1rem;\r\n        }\r\n\r\n        .about-text {\r\n          transform: translateY(-18%);\r\n        }\r\n\r\n        h1 {\r\n          transform: translateY(-130%);\r\n          margin-bottom: 110px;\r\n        }\r\n\r\n        .references {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  header {\r\n    padding: 40px 40px 0 40px;\r\n\r\n    .background {\r\n      height: 75vw;\r\n      clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 43%);\r\n    }\r\n\r\n    .info-container {\r\n      width: max-content;\r\n\r\n      .image-container {\r\n        float: left;\r\n        box-shadow: none;\r\n        padding-right: 20px;\r\n        max-width: 100%;\r\n        margin: 0;\r\n        z-index: 1;\r\n\r\n        img {\r\n          width: 100%;\r\n          max-width: 350px;\r\n        }\r\n\r\n        .name-container {\r\n          top: 0;\r\n          margin-left: -12%;\r\n          padding: 0;\r\n          width: 300%;\r\n          text-align: unset;\r\n          font-size: clamp(1rem, 3.6vw + 0.5rem, 2.2rem);\r\n          transform: translateY(25px);\r\n        }\r\n      }\r\n\r\n      .about-container {\r\n        padding: 50px 20px 20px 20px;\r\n        background-color: #f1f5f9;\r\n        margin-left: 70px;\r\n        transform: translateY(15%);\r\n\r\n        p {\r\n          font-size: 1.1rem;\r\n        }\r\n\r\n        .about-text {\r\n          transform: translateY(-18%);\r\n        }\r\n\r\n        h1 {\r\n          transform: translateY(-130%);\r\n          margin-bottom: 80px;\r\n        }\r\n\r\n        .references {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-ultrawide) {\r\n  header {\r\n    .background {\r\n      height: 65vw;\r\n    }\r\n  }\r\n}\r\n","@use \"variables\" as var;\r\n@use \"animations.scss\";\r\n\r\nmain {\r\n  padding: 0 15px;\r\n  max-width: 2000px;\r\n  margin: auto;\r\n\r\n  h1 {\r\n    text-align: center;\r\n    color: var.$heading-dark-color;\r\n    font-family: var.$headings-font;\r\n    padding-bottom: 15px;\r\n    position: relative;\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  .projects-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 30px;\r\n    margin: auto;\r\n\r\n    .project {\r\n      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n      border-radius: 10px;\r\n      opacity: 0;\r\n      transition: opacity 1s ease-in-out 0.5s;\r\n      max-width: 250px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      gap: 15px;\r\n\r\n      .screenshot {\r\n        width: 100%;\r\n        object-fit: fill;\r\n        border-top-left-radius: 10px;\r\n        border-top-right-radius: 10px;\r\n        max-height: 18vh;\r\n      }\r\n\r\n      .project-info {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        gap: 20px;\r\n        padding: 10px;\r\n        font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n          Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\r\n          sans-serif;\r\n\r\n        .name {\r\n          color: var.$heading-dark-color;\r\n          font-size: 1rem;\r\n          text-transform: capitalize;\r\n        }\r\n\r\n        .links {\r\n          display: flex;\r\n          align-items: center;\r\n          gap: 7px;\r\n\r\n          a {\r\n            display: flex;\r\n          }\r\n\r\n          img {\r\n            width: 15px;\r\n            transition: transform 0.3s ease-in-out;\r\n\r\n            &:hover {\r\n              transform: scale(1.2);\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\r\n  main {\r\n    .projects-container {\r\n      grid-template-columns: repeat(2, 1fr);\r\n      gap: 50px;\r\n\r\n      .project {\r\n        max-width: 300px;\r\n\r\n        .screenshot {\r\n          max-height: fit-content;\r\n        }\r\n\r\n        .project-info {\r\n          .name {\r\n            font-size: 1.15rem;\r\n          }\r\n\r\n          .links {\r\n            img {\r\n              width: 18px;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  main {\r\n    h1 {\r\n      font-size: 2rem;\r\n    }\r\n    padding: 0 50px;\r\n    .projects-container {\r\n      grid-template-columns: repeat(3, 1fr);\r\n      gap: 40px;\r\n\r\n      .project {\r\n        max-width: 350px;\r\n\r\n        .screenshot {\r\n          max-height: fit-content;\r\n        }\r\n\r\n        .project-info {\r\n          .name {\r\n            font-size: 1.1rem;\r\n          }\r\n          .links {\r\n            img {\r\n              width: 20px;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-ultrawide) {\r\n  main {\r\n    h1 {\r\n      font-size: 2.5rem;\r\n    }\r\n    .projects-container {\r\n      gap: 50px;\r\n\r\n      .project {\r\n        .project-info {\r\n          .name {\r\n            font-size: 1.2rem;\r\n          }\r\n\r\n          .links {\r\n            img {\r\n              width: 22px;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n","@use \"variables\" as var;\r\n\r\nfooter {\r\n  background-color: #0891b2;\r\n  padding: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  text-align: center;\r\n\r\n  h1 {\r\n    color: var.$heading-light-color;\r\n    font-family: var.$headings-font;\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  h2 {\r\n    color: var.$heading-light-color;\r\n    font-size: 0.9rem;\r\n    font-weight: 500;\r\n  }\r\n\r\n  p {\r\n    color: var.$heading-light-color;\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  a {\r\n    color: #f1f5f9;\r\n    text-decoration: none;\r\n    transition: transform 0.3s ease-in-out;\r\n    font-size: 0.9rem;\r\n\r\n    &:hover {\r\n      transform: translateX(5px);\r\n    }\r\n  }\r\n\r\n  .github-text {\r\n    text-align: center;\r\n\r\n    img {\r\n      width: 30px;\r\n      transition: transform 0.3s ease-in-out;\r\n\r\n      &:hover {\r\n        transform: scale(1.1);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: var.$breakpoint-desktop) {\r\n  footer {\r\n    h1 {\r\n      font-size: 1.8rem;\r\n    }\r\n\r\n    p {\r\n      font-size: 1rem;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _src_assets_images_screenshots_library_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27);
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
  library: _src_assets_images_screenshots_library_png__WEBPACK_IMPORTED_MODULE_12__,
};

const pageLinks = {
  "environmental-statistics-portal":
    "https://environment-statistics-portal.vercel.app/en",
  "enery-statistics-portal": "https://energy-portal-seven.vercel.app/en",
  "census-2024": "https://census-2024.vercel.app/en",
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
  "memory-card",
  "weather-app",
  "todo-list",
  "library",
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

/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f1cea4a13f7e740be05.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdE0seUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrUUFBK1EsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsYUFBYSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxzSEFBc0gsMkJBQTJCLGtGQUFrRixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHNCQUFzQixvQkFBb0IsOEJBQThCLGtFQUFrRSxLQUFLLG9CQUFvQiw2QkFBNkIsZ0VBQWdFLEtBQUssc0NBQXNDLGlDQUFpQyxtQ0FBbUMsZ0RBQWdELHVDQUF1Qyw4QkFBOEIsZ0NBQWdDLGtDQUFrQyxvQ0FBb0MsNENBQTRDLGtDQUFrQyxnQ0FBZ0Msa0NBQWtDLHNDQUFzQyxXQUFXLGlCQUFpQixnQkFBZ0IsNkJBQTZCLEtBQUssY0FBYyxrQ0FBa0MsdUNBQXVDLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEtBQUssbUJBQW1CLGlCQUFpQixLQUFLLGtCQUFrQiw0QkFBNEIseUNBQXlDLEtBQUssNkZBQTZGLFlBQVksa0JBQWtCLE9BQU8sS0FBSyxxREFBcUQsWUFBWSxrQkFBa0IsT0FBTyxLQUFLLGtDQUFrQyxVQUFVLHFCQUFxQixtQkFBbUIsT0FBTyxZQUFZLGtCQUFrQixtQkFBbUIsT0FBTyxLQUFLLGtDQUFrQyxVQUFVLG9CQUFvQixtQkFBbUIsT0FBTyxZQUFZLGlCQUFpQixtQkFBbUIsT0FBTyxLQUFLLGlDQUFpQyxVQUFVLHdCQUF3QixPQUFPLFlBQVksd0JBQXdCLE9BQU8sS0FBSyxxQ0FBcUMsVUFBVSx3QkFBd0IsT0FBTyxZQUFZLDBCQUEwQixPQUFPLEtBQUssaUNBQWlDLDZCQUE2QixnQkFBZ0IsZ0NBQWdDLHVCQUF1Qix5QkFBeUIsdUJBQXVCLG9CQUFvQiwyQkFBMkIsZUFBZSxnQkFBZ0Isb0JBQW9CLHNCQUFzQiwyQkFBMkIsNkRBQTZELG1GQUFtRixtQ0FBbUMsbURBQW1ELHNDQUFzQyw2QkFBNkIsd0NBQXdDLFdBQVcsZUFBZSwwQ0FBMEMsV0FBVyxTQUFTLE9BQU8sMkJBQTJCLGdDQUFnQywwQkFBMEIscUJBQXFCLDhCQUE4Qiw2QkFBNkIsOEJBQThCLDZCQUE2Qix3REFBd0QsbUJBQW1CLDhEQUE4RCx1QkFBdUIsNkJBQTZCLGdDQUFnQyxXQUFXLCtCQUErQiwrQkFBK0Isc0JBQXNCLDRDQUE0Qyw0Q0FBNEMsNkJBQTZCLCtCQUErQix3QkFBd0IsMkRBQTJELGlDQUFpQyxzQkFBc0Isb0NBQW9DLDhEQUE4RCx3Q0FBd0MsYUFBYSxXQUFXLFNBQVMsOEJBQThCLDZCQUE2Qix5REFBeUQsMkJBQTJCLHVCQUF1QixpQkFBaUIsMkJBQTJCLFdBQVcsa0JBQWtCLCtCQUErQiw0Q0FBNEMsOEJBQThCLFdBQVcsaUJBQWlCLDhCQUE4QixpQ0FBaUMsMEJBQTBCLG1CQUFtQixvQ0FBb0MsK0JBQStCLGFBQWEsV0FBVywrQkFBK0IsOEJBQThCLFdBQVcsMkJBQTJCLCtCQUErQixxQkFBcUIsMEJBQTBCLHFEQUFxRCwyQkFBMkIsc0NBQXNDLGVBQWUsYUFBYSxXQUFXLFNBQVMsT0FBTyxLQUFLLDZGQUE2RixjQUFjLHNCQUFzQix5QkFBeUIsd0JBQXdCLCtEQUErRCxTQUFTLDZCQUE2QixxQkFBcUIsZ0NBQWdDLHdCQUF3Qiw2QkFBNkIsZ0NBQWdDLDJCQUEyQixzQkFBc0IsdUJBQXVCLHFCQUFxQiwwQkFBMEIsK0JBQStCLGFBQWEsaUNBQWlDLHFCQUFxQixnQ0FBZ0MseUJBQXlCLDBCQUEwQixnQ0FBZ0MsNkRBQTZELDBDQUEwQyxhQUFhLFdBQVcsZ0NBQWdDLHlDQUF5QyxzQ0FBc0MsOEJBQThCLHVDQUF1QyxtQkFBbUIsZ0NBQWdDLGFBQWEsNkJBQTZCLDBDQUEwQyxhQUFhLG9CQUFvQiwyQ0FBMkMsbUNBQW1DLGFBQWEsNkJBQTZCLDRCQUE0QixhQUFhLFdBQVcsU0FBUyxPQUFPLEtBQUsscURBQXFELGNBQWMsa0NBQWtDLHlCQUF5Qix1QkFBdUIsK0RBQStELFNBQVMsNkJBQTZCLDZCQUE2QixnQ0FBZ0Msd0JBQXdCLDZCQUE2QixnQ0FBZ0MsNEJBQTRCLHNCQUFzQix1QkFBdUIscUJBQXFCLDBCQUEwQiwrQkFBK0IsYUFBYSxpQ0FBaUMscUJBQXFCLGdDQUFnQyx5QkFBeUIsMEJBQTBCLGdDQUFnQyw2REFBNkQsMENBQTBDLGFBQWEsV0FBVyxnQ0FBZ0MseUNBQXlDLHNDQUFzQyw4QkFBOEIsdUNBQXVDLG1CQUFtQixnQ0FBZ0MsYUFBYSw2QkFBNkIsMENBQTBDLGFBQWEsb0JBQW9CLDJDQUEyQyxrQ0FBa0MsYUFBYSw2QkFBNkIsNEJBQTRCLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyx1REFBdUQsY0FBYyxxQkFBcUIsdUJBQXVCLFNBQVMsT0FBTyxLQUFLLGlDQUFpQyw2QkFBNkIsY0FBYyxzQkFBc0Isd0JBQXdCLG1CQUFtQixjQUFjLDJCQUEyQix1Q0FBdUMsd0NBQXdDLDZCQUE2QiwyQkFBMkIsMEJBQTBCLE9BQU8sK0JBQStCLHNCQUFzQixtQ0FBbUMsa0JBQWtCLHFCQUFxQixzQkFBc0IsdURBQXVELDhCQUE4QixxQkFBcUIsa0RBQWtELDJCQUEyQix3QkFBd0IsaUNBQWlDLHlDQUF5QyxvQkFBb0IsMkJBQTJCLHdCQUF3Qiw2QkFBNkIseUNBQXlDLDBDQUEwQyw2QkFBNkIsV0FBVyw2QkFBNkIsMEJBQTBCLDJDQUEyQyxnQ0FBZ0Msc0JBQXNCLDBCQUEwQixnTUFBZ00sdUJBQXVCLDZDQUE2Qyw4QkFBOEIseUNBQXlDLGFBQWEsd0JBQXdCLDRCQUE0QixrQ0FBa0MsdUJBQXVCLHFCQUFxQiw4QkFBOEIsZUFBZSx1QkFBdUIsNEJBQTRCLHVEQUF1RCw2QkFBNkIsd0NBQXdDLGlCQUFpQixlQUFlLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyw2RkFBNkYsWUFBWSw2QkFBNkIsZ0RBQWdELG9CQUFvQix3QkFBd0IsNkJBQTZCLDZCQUE2QixzQ0FBc0MsYUFBYSwrQkFBK0IscUJBQXFCLG1DQUFtQyxlQUFlLDBCQUEwQixxQkFBcUIsOEJBQThCLGlCQUFpQixlQUFlLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyxxREFBcUQsWUFBWSxZQUFZLDBCQUEwQixTQUFTLHdCQUF3Qiw2QkFBNkIsZ0RBQWdELG9CQUFvQix3QkFBd0IsNkJBQTZCLDZCQUE2QixzQ0FBc0MsYUFBYSwrQkFBK0IscUJBQXFCLGtDQUFrQyxlQUFlLHNCQUFzQixxQkFBcUIsOEJBQThCLGlCQUFpQixlQUFlLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyx1REFBdUQsWUFBWSxZQUFZLDRCQUE0QixTQUFTLDZCQUE2QixvQkFBb0Isd0JBQXdCLDJCQUEyQixxQkFBcUIsa0NBQWtDLGVBQWUsMEJBQTBCLHFCQUFxQiw4QkFBOEIsaUJBQWlCLGVBQWUsYUFBYSxXQUFXLFNBQVMsT0FBTyxLQUFLLGlDQUFpQyxnQkFBZ0IsZ0NBQWdDLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQix5QkFBeUIsY0FBYyx3Q0FBd0Msd0NBQXdDLDBCQUEwQixPQUFPLGNBQWMsd0NBQXdDLDBCQUEwQix5QkFBeUIsT0FBTyxhQUFhLHdDQUF3QywwQkFBMEIsT0FBTyxhQUFhLHVCQUF1Qiw4QkFBOEIsK0NBQStDLDBCQUEwQixxQkFBcUIscUNBQXFDLFNBQVMsT0FBTyx3QkFBd0IsMkJBQTJCLGlCQUFpQixzQkFBc0IsaURBQWlELHVCQUF1QixrQ0FBa0MsV0FBVyxTQUFTLE9BQU8sS0FBSyxxREFBcUQsY0FBYyxZQUFZLDRCQUE0QixTQUFTLGVBQWUsMEJBQTBCLFNBQVMsT0FBTyxLQUFLLHVCQUF1QjtBQUN0cWdCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7QUNuZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNmYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNpRjtBQUNWO0FBQ0k7QUFDRDtBQUNJO0FBQ0s7QUFDbEI7QUFDVTtBQUNKO0FBQ1E7QUFDcUI7QUFDVztBQUMzQztBQUNwRTtBQUNBO0FBQ0EscUNBQXFDLGdHQUE2QjtBQUNsRSw2QkFBNkIseUZBQXlCO0FBQ3RELGlCQUFpQiwyRUFBUztBQUMxQixtQkFBbUIsNkVBQWU7QUFDbEMsb0JBQW9CLDhFQUFnQjtBQUNwQyxlQUFlLHlFQUFXO0FBQzFCLGlCQUFpQiwyRUFBYTtBQUM5QixpQkFBaUIsMkVBQWE7QUFDOUIscUJBQXFCLCtFQUFpQjtBQUN0QyxtQkFBbUIsNkVBQWM7QUFDakMsY0FBYywwRUFBYTtBQUMzQixXQUFXLHdFQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELEdBQUc7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxHQUFHO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1RUFBTztBQUN0QjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7QUNBc0I7QUFDa0M7QUFDeEQ7QUFDQSxxRUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnRzL0ZpcmFHTy9GaXJhR08tRXh0cmFCb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnRzL0ZpcmFHTy9GaXJhR08tUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwLi45MDA7MSw0MDAuLjkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEZpcmFHT0JvbGQ7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBGaXJhR09SZWc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuQGtleWZyYW1lcyBzbGlkZUZyb21SaWdodCB7XG4gIDAlIHtcbiAgICByaWdodDogLTEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICByaWdodDogMCU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUZyb21MZWZ0IHtcbiAgMCUge1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMCU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBncm93Rm9udFNpemUge1xuICAwJSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIDEwMCUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBncm93TmFtZUZvbnRTaXplIHtcbiAgMCUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAxMDAlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAxNXB4IDAgMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgaGVpZ2h0OiAxMDB2dztcbiAgbWF4LWhlaWdodDogMTQwMHB4O1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCAwJSAwJSwgMjI3LjUlIDAlLCAwJSA0MyUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGM0YTZlIDAlLCAjMDg5MWIyIDUwJSwgIzIyZDNlZSAxMDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XG4gIGFuaW1hdGlvbjogZ3JhZGllbnRTaGlmdCAxMnMgZWFzZSBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgZ3JhZGllbnRTaGlmdCB7XG4gIDAlLCAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogc2xpZGVGcm9tTGVmdCAycyBlYXNlLW91dCBmb3J3YXJkcztcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xuICB3aWR0aDogNjAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIC5uYW1lLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTVweCAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzLjZ2dyArIDAuM3JlbSwgMi41cmVtKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHNwYW4ge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogc2xpZGVGcm9tUmlnaHQgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGh5cGhlbnM6IGF1dG87XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgcCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHA6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAucmVmZXJlbmNlcyBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEyMDFweCkge1xuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDEwMHZ3O1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDAlIDAlLCAyMjcuNSUgMCUsIDAlIDQzJSk7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciAubmFtZS1jb250YWluZXIge1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW4tbGVmdDogLTEyJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAzMDAlO1xuICAgIHRleHQtYWxpZ246IHVuc2V0O1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMy42dncgKyAwLjVyZW0sIDIuMnJlbSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNTBweCAyMHB4IDIwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNSUpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgLmFib3V0LXRleHQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTglKTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgaDEge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTMwJSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTEwcHg7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMXB4KSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcbiAgfVxuICBoZWFkZXIgLmJhY2tncm91bmQge1xuICAgIGhlaWdodDogNzV2dztcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCAwJSAwJSwgMjI3LjUlIDAlLCAwJSA0MyUpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIge1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMiU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMzAwJTtcbiAgICB0ZXh0LWFsaWduOiB1bnNldDtcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDMuNnZ3ICsgMC41cmVtLCAyLjJyZW0pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXB4KTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUlKTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5hYm91dC10ZXh0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4JSk7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIGgxIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzMCUpO1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMXB4KSB7XG4gIGhlYWRlciAuYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiA2NXZ3O1xuICB9XG59XG5tYWluIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXgtd2lkdGg6IDIwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxubWFpbiBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzNzQxNTE7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQgMC41cztcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE1cHg7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnNjcmVlbnNob3Qge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogZmlsbDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDE4dmg7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubmFtZSB7XG4gIGNvbG9yOiAjMzc0MTUxO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubGlua3MgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubGlua3MgaW1nIHtcbiAgd2lkdGg6IDE1cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTIwMXB4KSB7XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDUwcHg7XG4gIH1cbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAuc2NyZWVuc2hvdCB7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgfVxuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubGlua3MgaW1nIHtcbiAgICB3aWR0aDogMThweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDFweCkge1xuICBtYWluIHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gIH1cbiAgbWFpbiBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBnYXA6IDQwcHg7XG4gIH1cbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IHtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICB9XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAuc2NyZWVuc2hvdCB7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5saW5rcyBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMXB4KSB7XG4gIG1haW4gaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ2FwOiA1MHB4O1xuICB9XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubGlua3MgaW1nIHtcbiAgICB3aWR0aDogMjJweDtcbiAgfVxufVxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb290ZXIgaDEge1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5mb290ZXIgaDIge1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5mb290ZXIgcCB7XG4gIGNvbG9yOiAjZjFmNWY5O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbmZvb3RlciBhIHtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuZm9vdGVyIGE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbn1cbmZvb3RlciAuZ2l0aHViLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb290ZXIgLmdpdGh1Yi10ZXh0IGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cbmZvb3RlciAuZ2l0aHViLXRleHQgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMXB4KSB7XG4gIGZvb3RlciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbiAgZm9vdGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xufVxuXG4ubGFuZG1hcmsge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udmlzaWJsZSB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTIwMXB4KSB7XG4gIGJvZHkge1xuICAgIGdhcDogNDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDFweCkge1xuICBib2R5IHtcbiAgICBnYXA6IDQwcHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSx1QkFBQTtFQUNBLDRDQUFBO0FDQUY7QURHQTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7QUNERjtBQ1RBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFRFdGO0VDVEE7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFRFdGO0FBQ0Y7QUNSQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RURVRjtFQ1JBO0lBQ0UsUUFBQTtJQUNBLFVBQUE7RURVRjtBQUNGO0FDUEE7RUFDRTtJQUNFLGVBQUE7RURTRjtFQ1BBO0lBQ0UsZUFBQTtFRFNGO0FBQ0Y7QUNOQTtFQUNFO0lBQ0UsZUFBQTtFRFFGO0VDTkE7SUFDRSxpQkFBQTtFRFFGO0FBQ0Y7QUUxQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUY0Q0Y7QUUxQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtFQUNBLDBFQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQ0FBQTtBRjRDSjtBRTFDSTtFQUNFO0lBRUUsMkJBQUE7RUYyQ047RUV6Q0k7SUFDRSw2QkFBQTtFRjJDTjtBQUNGO0FFdkNFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUZ5Q0o7QUV2Q0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBRnlDTjtBRXZDTTtFQUNFLGlEQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUZ5Q1I7QUV0Q007RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjSHhDYztFR3lDZCxzQ0h0Q1E7RUd1Q1IsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLG9CQUFBO0FGd0NSO0FFdENRO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FGd0NWO0FFbkNJO0VBQ0Usa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRnFDTjtBRW5DTTtFQUNFLGNBQUE7QUZxQ1I7QUVsQ007RUFDRSxrQkFBQTtFQUNBLHNDSGpFUTtFR2tFUixpQkFBQTtBRm9DUjtBRWpDTTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FGbUNSO0FFakNRO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBRm1DVjtBRS9CTTtFQUNFLGlCQUFBO0FGaUNSO0FFOUJNO0VBQ0Usa0JBQUE7QUZnQ1I7QUU5QlE7RUFDRSxXQUFBO0VBQ0Esc0NBQUE7QUZnQ1Y7QUU5QlU7RUFDRSxxQkFBQTtBRmdDWjs7QUV4QkE7RUFDRTtJQUNFLGFBQUE7RUYyQkY7RUV6QkU7SUFDRSxhQUFBO0lBQ0Esb0RBQUE7RUYyQko7RUV4QkU7SUFDRSxVQUFBO0VGMEJKO0VFeEJJO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUYwQk47RUV4Qk07SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUYwQlI7RUV2Qk07SUFDRSxNQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsOENBQUE7SUFDQSwyQkFBQTtFRnlCUjtFRXJCSTtJQUNFLDRCQUFBO0lBQ0EseUJBQUE7SUFDQSxpQkFBQTtJQUNBLDBCQUFBO0VGdUJOO0VFckJNO0lBQ0UsaUJBQUE7RUZ1QlI7RUVwQk07SUFDRSwyQkFBQTtFRnNCUjtFRW5CTTtJQUNFLDRCQUFBO0lBQ0Esb0JBQUE7RUZxQlI7RUVsQk07SUFDRSxhQUFBO0VGb0JSO0FBQ0Y7QUVkQTtFQUNFO0lBQ0UseUJBQUE7RUZnQkY7RUVkRTtJQUNFLFlBQUE7SUFDQSxvREFBQTtFRmdCSjtFRWJFO0lBQ0Usa0JBQUE7RUZlSjtFRWJJO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUZlTjtFRWJNO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VGZVI7RUVaTTtJQUNFLE1BQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSw4Q0FBQTtJQUNBLDJCQUFBO0VGY1I7RUVWSTtJQUNFLDRCQUFBO0lBQ0EseUJBQUE7SUFDQSxpQkFBQTtJQUNBLDBCQUFBO0VGWU47RUVWTTtJQUNFLGlCQUFBO0VGWVI7RUVUTTtJQUNFLDJCQUFBO0VGV1I7RUVSTTtJQUNFLDRCQUFBO0lBQ0EsbUJBQUE7RUZVUjtFRVBNO0lBQ0UsYUFBQTtFRlNSO0FBQ0Y7QUVIQTtFQUVJO0lBQ0UsWUFBQTtFRklKO0FBQ0Y7QUd2UEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FIeVBGO0FHdlBFO0VBQ0Usa0JBQUE7RUFDQSxjSklpQjtFSUhqQixzQ0pLWTtFSUpaLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBSHlQSjtBR3RQRTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FId1BKO0FHdFBJO0VBQ0UsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FId1BOO0FHdFBNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FId1BSO0FHclBNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1KQUFBO0FIdVBSO0FHblBRO0VBQ0UsY0p2Q1c7RUl3Q1gsZUFBQTtFQUNBLDBCQUFBO0FIcVBWO0FHbFBRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBSG9QVjtBR2xQVTtFQUNFLGFBQUE7QUhvUFo7QUdqUFU7RUFDRSxXQUFBO0VBQ0Esc0NBQUE7QUhtUFo7QUdqUFk7RUFDRSxxQkFBQTtBSG1QZDs7QUcxT0E7RUFFSTtJQUNFLHFDQUFBO0lBQ0EsU0FBQTtFSDRPSjtFRzFPSTtJQUNFLGdCQUFBO0VINE9OO0VHMU9NO0lBQ0UsdUJBQUE7RUg0T1I7RUd4T1E7SUFDRSxrQkFBQTtFSDBPVjtFR3RPVTtJQUNFLFdBQUE7RUh3T1o7QUFDRjtBR2hPQTtFQUNFO0lBSUUsZUFBQTtFSCtORjtFR2xPRTtJQUNFLGVBQUE7RUhvT0o7RUdqT0U7SUFDRSxxQ0FBQTtJQUNBLFNBQUE7RUhtT0o7RUdqT0k7SUFDRSxnQkFBQTtFSG1PTjtFR2pPTTtJQUNFLHVCQUFBO0VIbU9SO0VHL05RO0lBQ0UsaUJBQUE7RUhpT1Y7RUc5TlU7SUFDRSxXQUFBO0VIZ09aO0FBQ0Y7QUd4TkE7RUFFSTtJQUNFLGlCQUFBO0VIeU5KO0VHdk5FO0lBQ0UsU0FBQTtFSHlOSjtFR3JOUTtJQUNFLGlCQUFBO0VIdU5WO0VHbk5VO0lBQ0UsV0FBQTtFSHFOWjtBQUNGO0FJbFhBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FKb1hGO0FJbFhFO0VBQ0UsY0xFa0I7RUtEbEIsc0NMSVk7RUtIWixpQkFBQTtBSm9YSjtBSWpYRTtFQUNFLGNMSmtCO0VLS2xCLGlCQUFBO0VBQ0EsZ0JBQUE7QUptWEo7QUloWEU7RUFDRSxjTFZrQjtFS1dsQixpQkFBQTtBSmtYSjtBSS9XRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QUppWEo7QUkvV0k7RUFDRSwwQkFBQTtBSmlYTjtBSTdXRTtFQUNFLGtCQUFBO0FKK1dKO0FJN1dJO0VBQ0UsV0FBQTtFQUNBLHNDQUFBO0FKK1dOO0FJN1dNO0VBQ0UscUJBQUE7QUorV1I7O0FJeldBO0VBRUk7SUFDRSxpQkFBQTtFSjJXSjtFSXhXRTtJQUNFLGVBQUE7RUowV0o7QUFDRjtBQS9aQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFpYUY7O0FBOVpBO0VBQ0UsaUNER1U7RUNGVixjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQWlhRjs7QUE5WkE7RUFDRSxVQUFBO0FBaWFGOztBQTlaQTtFQUNFLHFCQUFBO0VBQ0Esa0NBQUE7QUFpYUY7O0FBOVpBO0VBQ0U7SUFDRSxTQUFBO0VBaWFGO0FBQ0Y7QUE5WkE7RUFDRTtJQUNFLFNBQUE7RUFnYUY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBGaXJhR09Cb2xkO1xcclxcbiAgc3JjOiB1cmwoXFxcIi9zcmMvYXNzZXRzL2ZvbnRzL0ZpcmFHTy9GaXJhR08tRXh0cmFCb2xkLm90ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBGaXJhR09SZWc7XFxyXFxuICBzcmM6IHVybChcXFwiL3NyYy9hc3NldHMvZm9udHMvRmlyYUdPL0ZpcmFHTy1SZWd1bGFyLm90ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4kaGVhZGluZy1saWdodC1jb2xvcjogI2YxZjVmOTtcXHJcXG4kaGVhZGluZy1kYXJrLWNvbG9yOiAjMzc0MTUxO1xcclxcbiRib2R5LXRleHQtZGFyay1jb2xvcjogIzQ3NTU2OTtcXHJcXG4kaGVhZGluZ3MtZm9udDogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXHJcXG4kdGV4dC1mb250OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4kYnJlYWtwb2ludC10YWJsZXQ6IDc2OXB4O1xcclxcbiRicmVha3BvaW50LWRlc2t0b3A6IDEyMDFweDtcXHJcXG4kYnJlYWtwb2ludC11bHRyYXdpZGU6IDE5MjFweDtcXHJcXG5cIixcIi8vIEB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyB2YXI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZXMvaGVhZGVyLnNjc3NcXFwiO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVzL21haW4uc2Nzc1xcXCI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZXMvZm9vdGVyLnNjc3NcXFwiO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVzL2FuaW1hdGlvbnMuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyLiR0ZXh0LWZvbnQ7XFxyXFxuICBjb2xvcjogdmFyLiRib2R5LXRleHQtZGFyay1jb2xvcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZG1hcmsge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnZpc2libGUge1xcclxcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC10YWJsZXQpIGFuZCAobWF4LXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgZ2FwOiA0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBrZXlmcmFtZXMgc2xpZGVGcm9tUmlnaHQge1xcclxcbiAgMCUge1xcclxcbiAgICByaWdodDogLTEwMCU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgcmlnaHQ6IDAlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlRnJvbUxlZnQge1xcclxcbiAgMCUge1xcclxcbiAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBsZWZ0OiAwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBncm93Rm9udFNpemUge1xcclxcbiAgMCUge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGdyb3dOYW1lRm9udFNpemUge1xcclxcbiAgMCUge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyB2YXI7XFxyXFxuQHVzZSBcXFwiYW5pbWF0aW9ucy5zY3NzXFxcIjtcXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMjBweCAxNXB4IDAgMTVweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAuYmFja2dyb3VuZCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIGhlaWdodDogMTAwdnc7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDE0MDBweDtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAwJSwgMCUgNDMlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBjNGE2ZSAwJSwgIzA4OTFiMiA1MCUsICMyMmQzZWUgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAyMDAlO1xcclxcbiAgICBhbmltYXRpb246IGdyYWRpZW50U2hpZnQgMTJzIGVhc2UgaW5maW5pdGU7XFxyXFxuXFxyXFxuICAgIEBrZXlmcmFtZXMgZ3JhZGllbnRTaGlmdCB7XFxyXFxuICAgICAgMCUsXFxyXFxuICAgICAgMTAwJSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIDUwJSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcblxcclxcbiAgICAuaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgYW5pbWF0aW9uOiBzbGlkZUZyb21MZWZ0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xcclxcblxcclxcbiAgICAgIGltZyB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAubmFtZS1jb250YWluZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgY29sb3I6IHZhci4kaGVhZGluZy1saWdodC1jb2xvcjtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIuJGhlYWRpbmdzLWZvbnQ7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDMuNnZ3ICsgMC4zcmVtLCAyLjVyZW0pO1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87IC8vIE9ubHkgdGhlIHRleHQgaXMgc2VsZWN0YWJsZVxcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogdGV4dDtcXHJcXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVGcm9tUmlnaHQgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gICAgICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaDEge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhci4kaGVhZGluZ3MtZm9udDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICBoeXBoZW5zOiBhdXRvO1xcclxcblxcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgcDpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAucmVmZXJlbmNlcyB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXRhYmxldCkgYW5kIChtYXgtd2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICAuYmFja2dyb3VuZCB7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDB2dztcXHJcXG4gICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCAwJSAwJSwgMjI3LjUlIDAlLCAwJSA0MyUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgICAgd2lkdGg6IDYwJTtcXHJcXG5cXHJcXG4gICAgICAuaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5uYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMiU7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgIHdpZHRoOiAzMDAlO1xcclxcbiAgICAgICAgICB0ZXh0LWFsaWduOiB1bnNldDtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzLjZ2dyArIDAuNXJlbSwgMi4ycmVtKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDIwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUlKTtcXHJcXG5cXHJcXG4gICAgICAgIHAge1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5hYm91dC10ZXh0IHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOCUpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaDEge1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzMCUpO1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5yZWZlcmVuY2VzIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggMCA0MHB4O1xcclxcblxcclxcbiAgICAuYmFja2dyb3VuZCB7XFxyXFxuICAgICAgaGVpZ2h0OiA3NXZ3O1xcclxcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDAlIDAlLCAyMjcuNSUgMCUsIDAlIDQzJSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluZm8tY29udGFpbmVyIHtcXHJcXG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgICAgLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTEyJTtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDMwMCU7XFxyXFxuICAgICAgICAgIHRleHQtYWxpZ246IHVuc2V0O1xcclxcbiAgICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDMuNnZ3ICsgMC41cmVtLCAyLjJyZW0pO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjVweCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5hYm91dC1jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogNTBweCAyMHB4IDIwcHggMjBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNSUpO1xcclxcblxcclxcbiAgICAgICAgcCB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmFib3V0LXRleHQge1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4JSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTMwJSk7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucmVmZXJlbmNlcyB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdWx0cmF3aWRlKSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICAuYmFja2dyb3VuZCB7XFxyXFxuICAgICAgaGVpZ2h0OiA2NXZ3O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyB2YXI7XFxyXFxuQHVzZSBcXFwiYW5pbWF0aW9ucy5zY3NzXFxcIjtcXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gIG1heC13aWR0aDogMjAwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcblxcclxcbiAgaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctZGFyay1jb2xvcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhci4kaGVhZGluZ3MtZm9udDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdHMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcblxcclxcbiAgICAucHJvamVjdCB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQgMC41cztcXHJcXG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgZ2FwOiAxNXB4O1xcclxcblxcclxcbiAgICAgIC5zY3JlZW5zaG90IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcXHJcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE4dmg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5wcm9qZWN0LWluZm8ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6IDIwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLFxcclxcbiAgICAgICAgICBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcclxcbiAgICAgICAgICBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgICAgICAgLm5hbWUge1xcclxcbiAgICAgICAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWRhcmstY29sb3I7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubGlua3Mge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICBnYXA6IDdweDtcXHJcXG5cXHJcXG4gICAgICAgICAgYSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXRhYmxldCkgYW5kIChtYXgtd2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgICBnYXA6IDUwcHg7XFxyXFxuXFxyXFxuICAgICAgLnByb2plY3Qge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG5cXHJcXG4gICAgICAgIC5zY3JlZW5zaG90IHtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucHJvamVjdC1pbmZvIHtcXHJcXG4gICAgICAgICAgLm5hbWUge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAubGlua3Mge1xcclxcbiAgICAgICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgICB3aWR0aDogMThweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgaDEge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBwYWRkaW5nOiAwIDUwcHg7XFxyXFxuICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgICAgZ2FwOiA0MHB4O1xcclxcblxcclxcbiAgICAgIC5wcm9qZWN0IHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XFxyXFxuXFxyXFxuICAgICAgICAuc2NyZWVuc2hvdCB7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnByb2plY3QtaW5mbyB7XFxyXFxuICAgICAgICAgIC5uYW1lIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgICAubGlua3Mge1xcclxcbiAgICAgICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC11bHRyYXdpZGUpIHtcXHJcXG4gIG1haW4ge1xcclxcbiAgICBoMSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgZ2FwOiA1MHB4O1xcclxcblxcclxcbiAgICAgIC5wcm9qZWN0IHtcXHJcXG4gICAgICAgIC5wcm9qZWN0LWluZm8ge1xcclxcbiAgICAgICAgICAubmFtZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgLmxpbmtzIHtcXHJcXG4gICAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyB2YXI7XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctbGlnaHQtY29sb3I7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIuJGhlYWRpbmdzLWZvbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDIge1xcclxcbiAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWxpZ2h0LWNvbG9yO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAge1xcclxcbiAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWxpZ2h0LWNvbG9yO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGEge1xcclxcbiAgICBjb2xvcjogI2YxZjVmOTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ2l0aHViLXRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgaDEge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYWJzb2x1dGUtcGF0aCAqL1xyXG5pbXBvcnQgY3ZBcHBsaWNhdGlvbkltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2N2LWFwcGxpY2F0aW9uLnBuZ1wiO1xyXG5pbXBvcnQgdG9kb0xpc3RJTUcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy90b2RvLWxpc3QucG5nXCI7XHJcbmltcG9ydCB3ZWF0aGVyQXBwSU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvd2VhdGhlci1hcHAucG5nXCI7XHJcbmltcG9ydCBjYWxjdWxhdG9ySU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvY2FsY3VsYXRvci5wbmdcIjtcclxuaW1wb3J0IGV0Y2hBU2thdGNoSU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvZXRjaC1hLXNrYXRjaC5wbmdcIjtcclxuaW1wb3J0IGFkbWluRGFzaGJvYXJkSU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvYWRtaW4tZGFzaGJvYXJkLnBuZ1wiO1xyXG5pbXBvcnQgbGl2ZUltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL2xpbmtzL2V4dGVybmFsLWxpbmsucG5nXCI7XHJcbmltcG9ydCBtZW1vcnlDYXJkSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvbWVtb3J5LWNhcmQucG5nXCI7XHJcbmltcG9ydCBjZW5zdXNJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9jZW5zdXMtMjAyNC5wbmdcIjtcclxuaW1wb3J0IHNob3BwaW5nQ2FydEltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL3Nob3BwaW5nLWNhcnQucG5nXCI7XHJcbmltcG9ydCBlbmVyZ3lTdGF0aXN0aWNzUG9ydGFsSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvZW5lcmd5LXN0YXRpc3RpY3MtcG9ydGFsLnBuZ1wiO1xyXG5pbXBvcnQgZW52aXJvbm1lbnRhbFN0YXRpc3RpY3NQb3J0YWwgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9lbnZpcm9ubWVudGFsLXN0YXRpc3RpY3MtcG9ydGFsLnBuZ1wiO1xyXG5pbXBvcnQgbGlicmFyeUltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2xpYnJhcnkucG5nXCI7XHJcblxyXG5jb25zdCBpbWFnZU1hcCA9IHtcclxuICBcImVudmlyb25tZW50YWwtc3RhdGlzdGljcy1wb3J0YWxcIjogZW52aXJvbm1lbnRhbFN0YXRpc3RpY3NQb3J0YWwsXHJcbiAgXCJlbmVyeS1zdGF0aXN0aWNzLXBvcnRhbFwiOiBlbmVyZ3lTdGF0aXN0aWNzUG9ydGFsSW1nLFxyXG4gIFwiY2Vuc3VzLTIwMjRcIjogY2Vuc3VzSW1nLFxyXG4gIFwic2hvcHBpbmctY2FydFwiOiBzaG9wcGluZ0NhcnRJbWcsXHJcbiAgXCJDVi1hcHBsaWNhdGlvblwiOiBjdkFwcGxpY2F0aW9uSW1nLFxyXG4gIFwidG9kby1saXN0XCI6IHRvZG9MaXN0SU1HLFxyXG4gIFwibWVtb3J5LWNhcmRcIjogbWVtb3J5Q2FyZEltZyxcclxuICBcIndlYXRoZXItYXBwXCI6IHdlYXRoZXJBcHBJTUcsXHJcbiAgXCJhZG1pbi1kYXNoYm9hcmRcIjogYWRtaW5EYXNoYm9hcmRJTUcsXHJcbiAgXCJldGNoLWEtc2tldGNoXCI6IGV0Y2hBU2thdGNoSU1HLFxyXG4gIGNhbGN1bGF0b3I6IGNhbGN1bGF0b3JJTUcsXHJcbiAgbGlicmFyeTogbGlicmFyeUltZyxcclxufTtcclxuXHJcbmNvbnN0IHBhZ2VMaW5rcyA9IHtcclxuICBcImVudmlyb25tZW50YWwtc3RhdGlzdGljcy1wb3J0YWxcIjpcclxuICAgIFwiaHR0cHM6Ly9lbnZpcm9ubWVudC1zdGF0aXN0aWNzLXBvcnRhbC52ZXJjZWwuYXBwL2VuXCIsXHJcbiAgXCJlbmVyeS1zdGF0aXN0aWNzLXBvcnRhbFwiOiBcImh0dHBzOi8vZW5lcmd5LXBvcnRhbC1zZXZlbi52ZXJjZWwuYXBwL2VuXCIsXHJcbiAgXCJjZW5zdXMtMjAyNFwiOiBcImh0dHBzOi8vY2Vuc3VzLTIwMjQudmVyY2VsLmFwcC9lblwiLFxyXG4gIFwic2hvcHBpbmctY2FydFwiOiBcImh0dHBzOi8vc2hvcHBpbmctY2FydC10aHJlZS1pdm9yeS52ZXJjZWwuYXBwL1wiLFxyXG4gIFwiQ1YtYXBwbGljYXRpb25cIjogXCJodHRwczovL2N2LWFwcC1waS52ZXJjZWwuYXBwL1wiLFxyXG4gIFwibWVtb3J5LWNhcmRcIjogXCJodHRwczovL21lbW9yeS1jYXJkLWFscGhhLWJheS52ZXJjZWwuYXBwL1wiLFxyXG59O1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgXCJlbnZpcm9ubWVudGFsLXN0YXRpc3RpY3MtcG9ydGFsXCIsXHJcbiAgXCJlbmVyeS1zdGF0aXN0aWNzLXBvcnRhbFwiLFxyXG4gIFwiY2Vuc3VzLTIwMjRcIixcclxuICBcInNob3BwaW5nLWNhcnRcIixcclxuICBcIkNWLWFwcGxpY2F0aW9uXCIsXHJcbiAgXCJtZW1vcnktY2FyZFwiLFxyXG4gIFwid2VhdGhlci1hcHBcIixcclxuICBcInRvZG8tbGlzdFwiLFxyXG4gIFwibGlicmFyeVwiLFxyXG4gIFwiYWRtaW4tZGFzaGJvYXJkXCIsXHJcbiAgXCJjYWxjdWxhdG9yXCIsXHJcbiAgXCJldGNoLWEtc2tldGNoXCIsXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0cygpIHtcclxuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xyXG5cclxuICBwcm9qZWN0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xyXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJzY3JlZW5zaG90XCIpO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1hZ2VNYXBbZWxdO1xyXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5mb1wiKTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEluZm8pO1xyXG5cclxuICAgIGNvbnN0IHBhcnNlZE5hbWUgPSBlbFxyXG4gICAgICAucmVwbGFjZSgvXlxcdy8sIChjKSA9PiBjLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgIC5yZXBsYWNlKC8tL2csIFwiIFwiKTtcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwYXJzZWROYW1lO1xyXG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQobmFtZSk7XHJcblxyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGlua3MuY2xhc3NMaXN0LmFkZChcImxpbmtzXCIpO1xyXG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQobGlua3MpO1xyXG5cclxuICAgIGNvbnN0IGdoTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cclxuICAgIHN3aXRjaCAoZWwpIHtcclxuICAgICAgY2FzZSBcImVudmlyb25tZW50YWwtc3RhdGlzdGljcy1wb3J0YWxcIjpcclxuICAgICAgICBnaExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3NhYmEtYmFyOTUvZW52aXJvbm1lbnRcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImVuZXJ5LXN0YXRpc3RpY3MtcG9ydGFsXCI6XHJcbiAgICAgICAgZ2hMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9zYWJhLWJhcjk1L2VuZXJneS1wb3J0YWxcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkNWLWFwcGxpY2F0aW9uXCI6XHJcbiAgICAgICAgZ2hMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9zYWJhLWJhcjk1L2N2LWFwcFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGdoTGluay5ocmVmID0gYGh0dHBzOi8vZ2l0aHViLmNvbS9zYWJhLWJhcjk1LyR7ZWx9YDtcclxuICAgIH1cclxuXHJcbiAgICBnaExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIGxpbmtzLmFwcGVuZENoaWxkKGdoTGluayk7XHJcblxyXG4gICAgY29uc3QgZ2l0aHViID0gbmV3IEltYWdlKCk7XHJcbiAgICBnaXRodWIuc3JjID1cclxuICAgICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcIjtcclxuICAgIGdoTGluay5hcHBlbmRDaGlsZChnaXRodWIpO1xyXG5cclxuICAgIGNvbnN0IGxpdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBsaXZlTGluay5ocmVmID0gcGFnZUxpbmtzW2VsXSB8fCBgaHR0cHM6Ly9zYWJhLWJhcjk1LmdpdGh1Yi5pby8ke2VsfS9gO1xyXG4gICAgbGl2ZUxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIGxpbmtzLmFwcGVuZENoaWxkKGxpdmVMaW5rKTtcclxuXHJcbiAgICBjb25zdCBsaXZlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsaXZlLnNyYyA9IGxpdmVJbWc7XHJcbiAgICBsaXZlTGluay5hcHBlbmRDaGlsZChsaXZlKTtcclxuICB9KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQwOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3RzIGZyb20gXCIuL2NvbXBvbmVudHMvY3JlYXRlUHJvamVjdFwiO1xyXG5cclxuY3JlYXRlUHJvamVjdHMoKTtcclxuXHJcbmNvbnN0IGFuaW1hdGVJZlZpc2libGUgPSAoKSA9PiB7XHJcbiAgLy8gT25seSBydW4gaWYgdGFiIHdhcyB2aXNpYmxlIGF0IHBhZ2UgbG9hZFxyXG5cclxuICBjb25zdCBsYW5kbWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhbmRtYXJrXCIpO1xyXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xyXG5cclxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5LCBpKSA9PiB7XHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gaSAqIDUwMDtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcclxuICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgb2JzLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcHJvamVjdE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnksIGkpID0+IHtcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgY29uc3QgZGVsYXkgPSBpICogMjAwO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgIH0sIGRlbGF5KTtcclxuICAgICAgICBvYnMudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBsYW5kbWFya3MuZm9yRWFjaCgoaXRlbSkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKSk7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4gcHJvamVjdE9ic2VydmVyLm9ic2VydmUoaXRlbSkpO1xyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFuaW1hdGVJZlZpc2libGUpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=