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
/* harmony import */ var _src_assets_images_screenshots_business_statistics_map_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28);
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
  "business-statistics-map": _src_assets_images_screenshots_business_statistics_map_png__WEBPACK_IMPORTED_MODULE_13__,
};

const pageLinks = {
  "environmental-statistics-portal":
    "https://environment-statistics-portal.vercel.app/en",
  "enery-statistics-portal": "https://energy-portal-seven.vercel.app/en",
  "census-2024": "https://census-2024.vercel.app/en",
  "shopping-cart": "https://shopping-cart-three-ivory.vercel.app/",
  "CV-application": "https://cv-app-pi.vercel.app/",
  "memory-card": "https://memory-card-alpha-bay.vercel.app/",
  "business-statistics-map": "https://business-statistics-map.vercel.app/en",
};

const projects = [
  "environmental-statistics-portal",
  "enery-statistics-portal",
  "business-statistics-map",
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

/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efab0c27e01cf4cbab48.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdE0seUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrUUFBK1EsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsYUFBYSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFX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RCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7O0FDQXNCO0FBQ2tDO0FBQ3hEO0FBQ0EscUVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LnNjc3M/NzIyMyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9GaXJhR08vRmlyYUdPLUV4dHJhQm9sZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9GaXJhR08vRmlyYUdPLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBGaXJhR09Cb2xkO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogRmlyYUdPUmVnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cbkBrZXlmcmFtZXMgc2xpZGVGcm9tUmlnaHQge1xuICAwJSB7XG4gICAgcmlnaHQ6IC0xMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgcmlnaHQ6IDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVGcm9tTGVmdCB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZ3Jvd0ZvbnRTaXplIHtcbiAgMCUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAxMDAlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgZ3Jvd05hbWVGb250U2l6ZSB7XG4gIDAlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgMTAwJSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cbmhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHggMTVweCAwIDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmhlYWRlciAuYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIGhlaWdodDogMTAwdnc7XG4gIG1heC1oZWlnaHQ6IDE0MDBweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAwJSwgMCUgNDMlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBjNGE2ZSAwJSwgIzA4OTFiMiA1MCUsICMyMmQzZWUgMTAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAyMDAlO1xuICBhbmltYXRpb246IGdyYWRpZW50U2hpZnQgMTJzIGVhc2UgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGdyYWRpZW50U2hpZnQge1xuICAwJSwgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IHNsaWRlRnJvbUxlZnQgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcbiAgd2lkdGg6IDYwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciAubmFtZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMy42dncgKyAwLjNyZW0sIDIuNXJlbSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIC5uYW1lLWNvbnRhaW5lciBzcGFuIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IHNsaWRlRnJvbVJpZ2h0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBoeXBoZW5zOiBhdXRvO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHAgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBwOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAucmVmZXJlbmNlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAucmVmZXJlbmNlcyBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgLnJlZmVyZW5jZXMgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMjAxcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGhlYWRlciAuYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAxMDB2dztcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCAwJSAwJSwgMjI3LjUlIDAlLCAwJSA0MyUpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMiU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMzAwJTtcbiAgICB0ZXh0LWFsaWduOiB1bnNldDtcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDMuNnZ3ICsgMC41cmVtLCAyLjJyZW0pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXB4KTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUlKTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5hYm91dC10ZXh0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4JSk7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIGgxIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzMCUpO1xuICAgIG1hcmdpbi1ib3R0b206IDExMHB4O1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAucmVmZXJlbmNlcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDFweCkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDQwcHggNDBweCAwIDQwcHg7XG4gIH1cbiAgaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDc1dnc7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAwJSwgMCUgNDMlKTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIC5uYW1lLWNvbnRhaW5lciB7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTIlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDMwMCU7XG4gICAgdGV4dC1hbGlnbjogdW5zZXQ7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzLjZ2dyArIDAuNXJlbSwgMi4ycmVtKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjVweCk7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHggMjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1JSk7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAuYWJvdXQtdGV4dCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOCUpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBoMSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzAlKTtcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAucmVmZXJlbmNlcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjFweCkge1xuICBoZWFkZXIgLmJhY2tncm91bmQge1xuICAgIGhlaWdodDogNjV2dztcbiAgfVxufVxubWFpbiB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWF4LXdpZHRoOiAyMDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbm1haW4gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzc0MTUxO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDMwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0IDAuNXM7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNXB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5zY3JlZW5zaG90IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiAxOHZoO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLm5hbWUge1xuICBjb2xvcjogIzM3NDE1MTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGEge1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5saW5rcyBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEyMDFweCkge1xuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ2FwOiA1MHB4O1xuICB9XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnNjcmVlbnNob3Qge1xuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG4gIH1cbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGltZyB7XG4gICAgd2lkdGg6IDE4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAxcHgpIHtcbiAgbWFpbiB7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICB9XG4gIG1haW4gaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ2FwOiA0MHB4O1xuICB9XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCB7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgfVxuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnNjcmVlbnNob3Qge1xuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubGlua3MgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjFweCkge1xuICBtYWluIGgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdhcDogNTBweDtcbiAgfVxuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGltZyB7XG4gICAgd2lkdGg6IDIycHg7XG4gIH1cbn1cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9vdGVyIGgxIHtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuZm9vdGVyIGgyIHtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuZm9vdGVyIHAge1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5mb290ZXIgYSB7XG4gIGNvbG9yOiAjZjFmNWY5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbmZvb3RlciBhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG59XG5mb290ZXIgLmdpdGh1Yi10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9vdGVyIC5naXRodWItdGV4dCBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5mb290ZXIgLmdpdGh1Yi10ZXh0IGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDFweCkge1xuICBmb290ZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG4gIGZvb3RlciBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcbn1cblxuLmxhbmRtYXJrIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnZpc2libGUge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEyMDFweCkge1xuICBib2R5IHtcbiAgICBnYXA6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAxcHgpIHtcbiAgYm9keSB7XG4gICAgZ2FwOiA0MHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9hbmltYXRpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsdUJBQUE7RUFDQSw0Q0FBQTtBQ0FGO0FER0E7RUFDRSxzQkFBQTtFQUNBLDRDQUFBO0FDREY7QUNUQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RURXRjtFQ1RBO0lBQ0UsU0FBQTtJQUNBLFVBQUE7RURXRjtBQUNGO0FDUkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VEVUY7RUNSQTtJQUNFLFFBQUE7SUFDQSxVQUFBO0VEVUY7QUFDRjtBQ1BBO0VBQ0U7SUFDRSxlQUFBO0VEU0Y7RUNQQTtJQUNFLGVBQUE7RURTRjtBQUNGO0FDTkE7RUFDRTtJQUNFLGVBQUE7RURRRjtFQ05BO0lBQ0UsaUJBQUE7RURRRjtBQUNGO0FFMUNBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FGNENGO0FFMUNFO0VBQ0UsV0FB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YUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBSm9YRjtBSWxYRTtFQUNFLGNMRWtCO0VLRGxCLHNDTElZO0VLSFosaUJBQUE7QUpvWEo7QUlqWEU7RUFDRSxjTEprQjtFS0tsQixpQkFBQTtFQUNBLGdCQUFBO0FKbVhKO0FJaFhFO0VBQ0UsY0xWa0I7RUtXbEIsaUJBQUE7QUprWEo7QUkvV0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0FKaVhKO0FJL1dJO0VBQ0UsMEJBQUE7QUppWE47QUk3V0U7RUFDRSxrQkFBQTtBSitXSjtBSTdXSTtFQUNFLFdBQUE7RUFDQSxzQ0FBQTtBSitXTjtBSTdXTTtFQUNFLHFCQUFBO0FKK1dSOztBSXpXQTtFQUVJO0lBQ0UsaUJBQUE7RUoyV0o7RUl4V0U7SUFDRSxlQUFBO0VKMFdKO0FBQ0Y7QUEvWkE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBaWFGOztBQTlaQTtFQUNFLGlDREdVO0VDRlYsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFpYUY7O0FBOVpBO0VBQ0UsVUFBQTtBQWlhRjs7QUE5WkE7RUFDRSxxQkFBQTtFQUNBLGtDQUFBO0FBaWFGOztBQTlaQTtFQUNFO0lBQ0UsU0FBQTtFQWlhRjtBQUNGO0FBOVpBO0VBQ0U7SUFDRSxTQUFBO0VBZ2FGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDAuLjkwMDsxLDQwMC4uOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogRmlyYUdPQm9sZDtcXHJcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2Fzc2V0cy9mb250cy9GaXJhR08vRmlyYUdPLUV4dHJhQm9sZC5vdGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogRmlyYUdPUmVnO1xcclxcbiAgc3JjOiB1cmwoXFxcIi9zcmMvYXNzZXRzL2ZvbnRzL0ZpcmFHTy9GaXJhR08tUmVndWxhci5vdGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuJGhlYWRpbmctbGlnaHQtY29sb3I6ICNmMWY1Zjk7XFxyXFxuJGhlYWRpbmctZGFyay1jb2xvcjogIzM3NDE1MTtcXHJcXG4kYm9keS10ZXh0LWRhcmstY29sb3I6ICM0NzU1Njk7XFxyXFxuJGhlYWRpbmdzLWZvbnQ6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxyXFxuJHRleHQtZm9udDogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuJGJyZWFrcG9pbnQtdGFibGV0OiA3NjlweDtcXHJcXG4kYnJlYWtwb2ludC1kZXNrdG9wOiAxMjAxcHg7XFxyXFxuJGJyZWFrcG9pbnQtdWx0cmF3aWRlOiAxOTIxcHg7XFxyXFxuXCIsXCIvLyBAdXNlIFxcXCJ2YXJpYWJsZXNcXFwiIGFzIHZhcjtcXHJcXG5AdXNlIFxcXCIuL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1xcXCIgYXMgdmFyO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVzL2hlYWRlci5zY3NzXFxcIjtcXHJcXG5AdXNlIFxcXCIuL3N0eWxlcy9tYWluLnNjc3NcXFwiO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVzL2Zvb3Rlci5zY3NzXFxcIjtcXHJcXG5AdXNlIFxcXCIuL3N0eWxlcy9hbmltYXRpb25zLnNjc3NcXFwiO1xcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhci4kdGV4dC1mb250O1xcclxcbiAgY29sb3I6IHZhci4kYm9keS10ZXh0LWRhcmstY29sb3I7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRtYXJrIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi52aXNpYmxlIHtcXHJcXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdGFibGV0KSBhbmQgKG1heC13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAa2V5ZnJhbWVzIHNsaWRlRnJvbVJpZ2h0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgcmlnaHQ6IC0xMDAlO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHJpZ2h0OiAwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUZyb21MZWZ0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbGVmdDogLTEwMCU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZ3Jvd0ZvbnRTaXplIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBncm93TmFtZUZvbnRTaXplIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcclxcbkB1c2UgXFxcImFuaW1hdGlvbnMuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTVweCAwIDE1cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgLmJhY2tncm91bmQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZ3O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxNDAwcHg7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDAlIDAlLCAyMjcuNSUgMCUsIDAlIDQzJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwYzRhNmUgMCUsICMwODkxYjIgNTAlLCAjMjJkM2VlIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMjAwJTtcXHJcXG4gICAgYW5pbWF0aW9uOiBncmFkaWVudFNoaWZ0IDEycyBlYXNlIGluZmluaXRlO1xcclxcblxcclxcbiAgICBAa2V5ZnJhbWVzIGdyYWRpZW50U2hpZnQge1xcclxcbiAgICAgIDAlLFxcclxcbiAgICAgIDEwMCUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICA1MCUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW5mby1jb250YWluZXIge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG5cXHJcXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVGcm9tTGVmdCAycyBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG5cXHJcXG4gICAgICBpbWcge1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLm5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctbGlnaHQtY29sb3I7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzLjZ2dyArIDAuM3JlbSwgMi41cmVtKTtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvOyAvLyBPbmx5IHRoZSB0ZXh0IGlzIHNlbGVjdGFibGVcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IHRleHQ7XFxyXFxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dC1jb250YWluZXIge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBhbmltYXRpb246IHNsaWRlRnJvbVJpZ2h0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xcclxcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgICAgbWFyZ2luOiBhdXRvO1xcclxcblxcclxcbiAgICAgIGEge1xcclxcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGgxIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIuJGhlYWRpbmdzLWZvbnQ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgaHlwaGVuczogYXV0bztcXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnJlZmVyZW5jZXMge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC10YWJsZXQpIGFuZCAobWF4LXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgLmJhY2tncm91bmQge1xcclxcbiAgICAgIGhlaWdodDogMTAwdnc7XFxyXFxuICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAwJSwgMCUgNDMlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5mby1jb250YWluZXIge1xcclxcbiAgICAgIHdpZHRoOiA2MCU7XFxyXFxuXFxyXFxuICAgICAgLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubmFtZS1jb250YWluZXIge1xcclxcbiAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTIlO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICB3aWR0aDogMzAwJTtcXHJcXG4gICAgICAgICAgdGV4dC1hbGlnbjogdW5zZXQ7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMy42dncgKyAwLjVyZW0sIDIuMnJlbSk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXB4KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1MHB4IDIwcHggMjBweCAyMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1JSk7XFxyXFxuXFxyXFxuICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYWJvdXQtdGV4dCB7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTglKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzAlKTtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucmVmZXJlbmNlcyB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcXHJcXG5cXHJcXG4gICAgLmJhY2tncm91bmQge1xcclxcbiAgICAgIGhlaWdodDogNzV2dztcXHJcXG4gICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCAwJSAwJSwgMjI3LjUlIDAlLCAwJSA0MyUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcblxcclxcbiAgICAgIC5pbWFnZS1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5uYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMiU7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgIHdpZHRoOiAzMDAlO1xcclxcbiAgICAgICAgICB0ZXh0LWFsaWduOiB1bnNldDtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzLjZ2dyArIDAuNXJlbSwgMi4ycmVtKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDIwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUlKTtcXHJcXG5cXHJcXG4gICAgICAgIHAge1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5hYm91dC10ZXh0IHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOCUpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaDEge1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzMCUpO1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnJlZmVyZW5jZXMge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXVsdHJhd2lkZSkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgLmJhY2tncm91bmQge1xcclxcbiAgICAgIGhlaWdodDogNjV2dztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcclxcbkB1c2UgXFxcImFuaW1hdGlvbnMuc2Nzc1xcXCI7XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxuICBtYXgtd2lkdGg6IDIwMDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWRhcmstY29sb3I7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIuJGhlYWRpbmdzLWZvbnQ7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG5cXHJcXG4gICAgLnByb2plY3Qge1xcclxcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0IDAuNXM7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAyNTBweDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIGdhcDogMTVweDtcXHJcXG5cXHJcXG4gICAgICAuc2NyZWVuc2hvdCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG9iamVjdC1maXQ6IGZpbGw7XFxyXFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAxOHZoO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAucHJvamVjdC1pbmZvIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXHJcXG4gICAgICAgICAgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXHJcXG4gICAgICAgICAgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gICAgICAgIC5uYW1lIHtcXHJcXG4gICAgICAgICAgY29sb3I6IHZhci4kaGVhZGluZy1kYXJrLWNvbG9yO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmxpbmtzIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgZ2FwOiA3cHg7XFxyXFxuXFxyXFxuICAgICAgICAgIGEge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC10YWJsZXQpIGFuZCAobWF4LXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcclxcbiAgbWFpbiB7XFxyXFxuICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgICAgZ2FwOiA1MHB4O1xcclxcblxcclxcbiAgICAgIC5wcm9qZWN0IHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuXFxyXFxuICAgICAgICAuc2NyZWVuc2hvdCB7XFxyXFxuICAgICAgICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnByb2plY3QtaW5mbyB7XFxyXFxuICAgICAgICAgIC5uYW1lIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgLmxpbmtzIHtcXHJcXG4gICAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcclxcbiAgbWFpbiB7XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgcGFkZGluZzogMCA1MHB4O1xcclxcbiAgICAucHJvamVjdHMtY29udGFpbmVyIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICAgIGdhcDogNDBweDtcXHJcXG5cXHJcXG4gICAgICAucHJvamVjdCB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xcclxcblxcclxcbiAgICAgICAgLnNjcmVlbnNob3Qge1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcm9qZWN0LWluZm8ge1xcclxcbiAgICAgICAgICAubmFtZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgLmxpbmtzIHtcXHJcXG4gICAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdWx0cmF3aWRlKSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgaDEge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgICAgIGdhcDogNTBweDtcXHJcXG5cXHJcXG4gICAgICAucHJvamVjdCB7XFxyXFxuICAgICAgICAucHJvamVjdC1pbmZvIHtcXHJcXG4gICAgICAgICAgLm5hbWUge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIC5saW5rcyB7XFxyXFxuICAgICAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWxpZ2h0LWNvbG9yO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgyIHtcXHJcXG4gICAgY29sb3I6IHZhci4kaGVhZGluZy1saWdodC1jb2xvcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwIHtcXHJcXG4gICAgY29sb3I6IHZhci4kaGVhZGluZy1saWdodC1jb2xvcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhIHtcXHJcXG4gICAgY29sb3I6ICNmMWY1Zjk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmdpdGh1Yi10ZXh0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBwIHtcXHJcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWFic29sdXRlLXBhdGggKi9cclxuaW1wb3J0IGN2QXBwbGljYXRpb25JbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9jdi1hcHBsaWNhdGlvbi5wbmdcIjtcclxuaW1wb3J0IHRvZG9MaXN0SU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvdG9kby1saXN0LnBuZ1wiO1xyXG5pbXBvcnQgd2VhdGhlckFwcElNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL3dlYXRoZXItYXBwLnBuZ1wiO1xyXG5pbXBvcnQgY2FsY3VsYXRvcklNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2NhbGN1bGF0b3IucG5nXCI7XHJcbmltcG9ydCBldGNoQVNrYXRjaElNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2V0Y2gtYS1za2F0Y2gucG5nXCI7XHJcbmltcG9ydCBhZG1pbkRhc2hib2FyZElNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2FkbWluLWRhc2hib2FyZC5wbmdcIjtcclxuaW1wb3J0IGxpdmVJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9saW5rcy9leHRlcm5hbC1saW5rLnBuZ1wiO1xyXG5pbXBvcnQgbWVtb3J5Q2FyZEltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL21lbW9yeS1jYXJkLnBuZ1wiO1xyXG5pbXBvcnQgY2Vuc3VzSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvY2Vuc3VzLTIwMjQucG5nXCI7XHJcbmltcG9ydCBzaG9wcGluZ0NhcnRJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9zaG9wcGluZy1jYXJ0LnBuZ1wiO1xyXG5pbXBvcnQgZW5lcmd5U3RhdGlzdGljc1BvcnRhbEltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2VuZXJneS1zdGF0aXN0aWNzLXBvcnRhbC5wbmdcIjtcclxuaW1wb3J0IGVudmlyb25tZW50YWxTdGF0aXN0aWNzUG9ydGFsIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvZW52aXJvbm1lbnRhbC1zdGF0aXN0aWNzLXBvcnRhbC5wbmdcIjtcclxuaW1wb3J0IGxpYnJhcnlJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9saWJyYXJ5LnBuZ1wiO1xyXG5pbXBvcnQgYnVzaW5lc3NTdGF0aXN0aWNzTWFwSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvYnVzaW5lc3Mtc3RhdGlzdGljcy1tYXAucG5nXCI7XHJcblxyXG5jb25zdCBpbWFnZU1hcCA9IHtcclxuICBcImVudmlyb25tZW50YWwtc3RhdGlzdGljcy1wb3J0YWxcIjogZW52aXJvbm1lbnRhbFN0YXRpc3RpY3NQb3J0YWwsXHJcbiAgXCJlbmVyeS1zdGF0aXN0aWNzLXBvcnRhbFwiOiBlbmVyZ3lTdGF0aXN0aWNzUG9ydGFsSW1nLFxyXG4gIFwiY2Vuc3VzLTIwMjRcIjogY2Vuc3VzSW1nLFxyXG4gIFwic2hvcHBpbmctY2FydFwiOiBzaG9wcGluZ0NhcnRJbWcsXHJcbiAgXCJDVi1hcHBsaWNhdGlvblwiOiBjdkFwcGxpY2F0aW9uSW1nLFxyXG4gIFwidG9kby1saXN0XCI6IHRvZG9MaXN0SU1HLFxyXG4gIFwibWVtb3J5LWNhcmRcIjogbWVtb3J5Q2FyZEltZyxcclxuICBcIndlYXRoZXItYXBwXCI6IHdlYXRoZXJBcHBJTUcsXHJcbiAgXCJhZG1pbi1kYXNoYm9hcmRcIjogYWRtaW5EYXNoYm9hcmRJTUcsXHJcbiAgXCJldGNoLWEtc2tldGNoXCI6IGV0Y2hBU2thdGNoSU1HLFxyXG4gIGNhbGN1bGF0b3I6IGNhbGN1bGF0b3JJTUcsXHJcbiAgbGlicmFyeTogbGlicmFyeUltZyxcclxuICBcImJ1c2luZXNzLXN0YXRpc3RpY3MtbWFwXCI6IGJ1c2luZXNzU3RhdGlzdGljc01hcEltZyxcclxufTtcclxuXHJcbmNvbnN0IHBhZ2VMaW5rcyA9IHtcclxuICBcImVudmlyb25tZW50YWwtc3RhdGlzdGljcy1wb3J0YWxcIjpcclxuICAgIFwiaHR0cHM6Ly9lbnZpcm9ubWVudC1zdGF0aXN0aWNzLXBvcnRhbC52ZXJjZWwuYXBwL2VuXCIsXHJcbiAgXCJlbmVyeS1zdGF0aXN0aWNzLXBvcnRhbFwiOiBcImh0dHBzOi8vZW5lcmd5LXBvcnRhbC1zZXZlbi52ZXJjZWwuYXBwL2VuXCIsXHJcbiAgXCJjZW5zdXMtMjAyNFwiOiBcImh0dHBzOi8vY2Vuc3VzLTIwMjQudmVyY2VsLmFwcC9lblwiLFxyXG4gIFwic2hvcHBpbmctY2FydFwiOiBcImh0dHBzOi8vc2hvcHBpbmctY2FydC10aHJlZS1pdm9yeS52ZXJjZWwuYXBwL1wiLFxyXG4gIFwiQ1YtYXBwbGljYXRpb25cIjogXCJodHRwczovL2N2LWFwcC1waS52ZXJjZWwuYXBwL1wiLFxyXG4gIFwibWVtb3J5LWNhcmRcIjogXCJodHRwczovL21lbW9yeS1jYXJkLWFscGhhLWJheS52ZXJjZWwuYXBwL1wiLFxyXG4gIFwiYnVzaW5lc3Mtc3RhdGlzdGljcy1tYXBcIjogXCJodHRwczovL2J1c2luZXNzLXN0YXRpc3RpY3MtbWFwLnZlcmNlbC5hcHAvZW5cIixcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3RzID0gW1xyXG4gIFwiZW52aXJvbm1lbnRhbC1zdGF0aXN0aWNzLXBvcnRhbFwiLFxyXG4gIFwiZW5lcnktc3RhdGlzdGljcy1wb3J0YWxcIixcclxuICBcImJ1c2luZXNzLXN0YXRpc3RpY3MtbWFwXCIsXHJcbiAgXCJjZW5zdXMtMjAyNFwiLFxyXG4gIFwic2hvcHBpbmctY2FydFwiLFxyXG4gIFwiQ1YtYXBwbGljYXRpb25cIixcclxuICBcIm1lbW9yeS1jYXJkXCIsXHJcbiAgXCJ3ZWF0aGVyLWFwcFwiLFxyXG4gIFwidG9kby1saXN0XCIsXHJcbiAgXCJsaWJyYXJ5XCIsXHJcbiAgXCJhZG1pbi1kYXNoYm9hcmRcIixcclxuICBcImNhbGN1bGF0b3JcIixcclxuICBcImV0Y2gtYS1za2V0Y2hcIixcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzKCkge1xyXG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIik7XHJcblxyXG4gIHByb2plY3RzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInNjcmVlbnNob3RcIik7XHJcbiAgICBpbWFnZS5zcmMgPSBpbWFnZU1hcFtlbF07XHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbmZvXCIpO1xyXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SW5mbyk7XHJcblxyXG4gICAgY29uc3QgcGFyc2VkTmFtZSA9IGVsXHJcbiAgICAgIC5yZXBsYWNlKC9eXFx3LywgKGMpID0+IGMudG9VcHBlckNhc2UoKSlcclxuICAgICAgLnJlcGxhY2UoLy0vZywgXCIgXCIpO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHBhcnNlZE5hbWU7XHJcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKFwibGlua3NcIik7XHJcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChsaW5rcyk7XHJcblxyXG4gICAgY29uc3QgZ2hMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gICAgc3dpdGNoIChlbCkge1xyXG4gICAgICBjYXNlIFwiZW52aXJvbm1lbnRhbC1zdGF0aXN0aWNzLXBvcnRhbFwiOlxyXG4gICAgICAgIGdoTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vc2FiYS1iYXI5NS9lbnZpcm9ubWVudFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZW5lcnktc3RhdGlzdGljcy1wb3J0YWxcIjpcclxuICAgICAgICBnaExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3NhYmEtYmFyOTUvZW5lcmd5LXBvcnRhbFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiQ1YtYXBwbGljYXRpb25cIjpcclxuICAgICAgICBnaExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3NhYmEtYmFyOTUvY3YtYXBwXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZ2hMaW5rLmhyZWYgPSBgaHR0cHM6Ly9naXRodWIuY29tL3NhYmEtYmFyOTUvJHtlbH1gO1xyXG4gICAgfVxyXG5cclxuICAgIGdoTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQoZ2hMaW5rKTtcclxuXHJcbiAgICBjb25zdCBnaXRodWIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGdpdGh1Yi5zcmMgPVxyXG4gICAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1wiO1xyXG4gICAgZ2hMaW5rLmFwcGVuZENoaWxkKGdpdGh1Yik7XHJcblxyXG4gICAgY29uc3QgbGl2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGxpdmVMaW5rLmhyZWYgPSBwYWdlTGlua3NbZWxdIHx8IGBodHRwczovL3NhYmEtYmFyOTUuZ2l0aHViLmlvLyR7ZWx9L2A7XHJcbiAgICBsaXZlTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobGl2ZUxpbmspO1xyXG5cclxuICAgIGNvbnN0IGxpdmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxpdmUuc3JjID0gbGl2ZUltZztcclxuICAgIGxpdmVMaW5rLmFwcGVuZENoaWxkKGxpdmUpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDA6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdHMgZnJvbSBcIi4vY29tcG9uZW50cy9jcmVhdGVQcm9qZWN0XCI7XHJcblxyXG5jcmVhdGVQcm9qZWN0cygpO1xyXG5cclxuY29uc3QgYW5pbWF0ZUlmVmlzaWJsZSA9ICgpID0+IHtcclxuICAvLyBPbmx5IHJ1biBpZiB0YWIgd2FzIHZpc2libGUgYXQgcGFnZSBsb2FkXHJcblxyXG4gIGNvbnN0IGxhbmRtYXJrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFuZG1hcmtcIik7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XHJcblxyXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnksIGkpID0+IHtcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgY29uc3QgZGVsYXkgPSBpICogNTAwO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgIH0sIGRlbGF5KTtcclxuICAgICAgICBvYnMudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwcm9qZWN0T2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9icykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSwgaSkgPT4ge1xyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICBjb25zdCBkZWxheSA9IGkgKiAyMDA7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbiAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgIG9icy51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGxhbmRtYXJrcy5mb3JFYWNoKChpdGVtKSA9PiBvYnNlcnZlci5vYnNlcnZlKGl0ZW0pKTtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiBwcm9qZWN0T2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKSk7XHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYW5pbWF0ZUlmVmlzaWJsZSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==