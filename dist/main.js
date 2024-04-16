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
___CSS_LOADER_EXPORT___.push([module.id, `header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 30px;
  overflow: hidden;
}
header .background {
  background-color: #0891b2;
  clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, -140% 162%);
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  height: 100vw;
}
header .image-container {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: relative;
  animation: slideLeft 2.5s forwards, fadeIn 2.5s forwards;
}
header .image-container img {
  border-radius: 10px;
  width: 100%;
}
header .image-container .name-container {
  position: absolute;
  top: 75%;
  left: 50%;
  width: 100%;
  color: #f1f5f9;
  transform: translate(-50%, -50%);
  padding: 0 20px;
}
header .image-container .name-container .name {
  font-family: "Playfair Display", serif;
  animation: growText 2s forwards, fadeIn 2s forwards;
}
header .about-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  animation: slideRight 2.5s forwards, fadeIn 2.5s forwards;
  animation-delay: 1s;
  position: relative;
  opacity: 0;
}
header .about-container h1 {
  font-size: calc(1.5vw + 1.5vh + 6vmin);
  text-align: center;
  font-family: "Playfair Display", serif;
  color: #374151;
}
header .about-container .about {
  font-size: calc(1.5vw + 1.5vh + 1vmin);
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: "Roboto", sans-serif;
}
header .about-container .references {
  text-align: center;
}
header .about-container a {
  cursor: pointer;
}
header .about-container a img {
  width: 40px;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slideLeft {
  0% {
    left: -50%;
  }
  100% {
    left: 0%;
  }
}
@keyframes slideRight {
  0% {
    right: -50%;
  }
  100% {
    right: 0%;
  }
}
@keyframes growText {
  0% {
    font-size: calc(1.5vw + 1.5vh + 5vmin);
  }
  100% {
    font-size: calc(1.5vw + 1.5vh + 10vmin);
  }
}

@media (min-width: 600px) and (max-width: 1100px) {
  header .background {
    height: 80vw;
  }
  header .image-container {
    z-index: 1;
    box-shadow: none;
  }
  header .image-container img {
    width: 50%;
  }
  header .image-container .name-container {
    left: 75%;
    top: 15%;
    padding: 0;
  }
  header .image-container .name-container .name {
    font-size: calc(1.5vw + 1.5vh + 4vmin);
  }
  header .about-container {
    position: absolute;
    width: 80%;
    top: 30%;
    left: 10%;
    animation: slide 2.5s forwards;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #ffffff;
    padding: 80px 40px 100px 40px;
  }
  header .about-container h1 {
    font-size: calc(1.5vw + 1.5vh + 3vmin);
  }
  header .about-container .about {
    font-size: calc(1.5vw + 1.5vh);
  }
  header .about-container .references {
    display: none;
  }
  @keyframes growText {
    0% {
      font-size: calc(1.5vw + 1.5vh + 1vmin);
    }
    100% {
      font-size: calc(1.5vw + 1.5vh + 4vmin);
    }
  }
  @keyframes slide {
    0% {
      opacity: 0;
      left: 90%;
    }
    100% {
      opacity: 1;
      left: 10%;
    }
  }
}
main {
  padding: 40px;
}
main h1 {
  font-size: calc(1.5vw + 1.5vh + 6vmin);
  text-align: center;
  color: #374151;
  font-family: "Playfair Display", serif;
  padding: 30px;
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

@media (min-width: 600px) and (max-width: 1100px) {
  main .projects-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
}
@media (min-width: 1100px) {
  main .projects-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 100px;
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
  font-size: calc(1.5vw + 1.5vh + 6vmin);
}
footer h2 {
  color: #f1f5f9;
  font-size: calc(1.5vw + 1.5vh + 1vmin);
}
footer p {
  color: #f1f5f9;
  font-size: calc(1.5vw + 1.5vh);
}
footer .github-text {
  text-align: center;
}
footer .github-text img {
  width: 60px;
}

@media (min-width: 600px) and (max-width: 1100px) {
  main .projects-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
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
}

.landmark {
  opacity: 0;
  transition: opacity 1s ease-in-out 0.5s;
}

.visible {
  opacity: 1 !important;
}

@media (min-width: 600px) and (max-width: 1100px) {
  body {
    display: flex;
    flex-direction: column;
    gap: 250px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/index.scss","webpack://./src/styles/variables.scss","webpack://./src/styles/main.scss","webpack://./src/styles/footer.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"variables\" as var;\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  gap: 30px;\n  overflow: hidden;\n\n  .background {\n    background-color: #0891b2;\n    clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, -140% 162%);\n    width: 100%;\n    position: absolute;\n    top: 0;\n    z-index: -1;\n    height: 100vw;\n  }\n\n  .image-container {\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    position: relative;\n    animation: slideLeft 2.5s forwards, fadeIn 2.5s forwards;\n\n    img {\n      border-radius: 10px;\n      width: 100%;\n    }\n\n    .name-container {\n      position: absolute;\n      top: 75%;\n      left: 50%;\n      width: 100%;\n      color: var.$heading-light-color;\n      transform: translate(-50%, -50%);\n      padding: 0 20px;\n\n      .name {\n        font-family: var.$headings-font;\n        animation: growText 2s forwards, fadeIn 2s forwards;\n      }\n    }\n  }\n\n  .about-container {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    animation: slideRight 2.5s forwards, fadeIn 2.5s forwards;\n    animation-delay: 1s;\n    position: relative;\n    opacity: 0;\n\n    h1 {\n      font-size: calc(1.5vw + 1.5vh + 6vmin);\n      text-align: center;\n      font-family: var.$headings-font;\n      color: var.$heading-dark-color;\n    }\n\n    .about {\n      font-size: calc(1.5vw + 1.5vh + 1vmin);\n      display: flex;\n      flex-direction: column;\n      gap: 15px;\n      font-family: var.$text-font;\n    }\n\n    .references {\n      text-align: center;\n    }\n\n    a {\n      cursor: pointer;\n\n      img {\n        width: 40px;\n      }\n    }\n  }\n\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes slideLeft {\n    0% {\n      left: -50%;\n    }\n    100% {\n      left: 0%;\n    }\n  }\n  @keyframes slideRight {\n    0% {\n      right: -50%;\n    }\n    100% {\n      right: 0%;\n    }\n  }\n  @keyframes growText {\n    0% {\n      font-size: calc(1.5vw + 1.5vh + 5vmin);\n    }\n    100% {\n      font-size: calc(1.5vw + 1.5vh + 10vmin);\n    }\n  }\n}\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\n  header {\n    .background {\n      height: 80vw;\n    }\n\n    .image-container {\n      z-index: 1;\n      box-shadow: none;\n\n      img {\n        width: 50%;\n      }\n\n      .name-container {\n        left: 75%;\n        top: 15%;\n        padding: 0;\n\n        .name {\n          font-size: calc(1.5vw + 1.5vh + 4vmin);\n        }\n      }\n    }\n\n    .about-container {\n      position: absolute;\n      width: 80%;\n      top: 30%;\n      left: 10%;\n      animation: slide 2.5s forwards;\n      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n      background-color: #ffffff;\n      padding: 80px 40px 100px 40px;\n\n      h1 {\n        font-size: calc(1.5vw + 1.5vh + 3vmin);\n      }\n\n      .about {\n        font-size: calc(1.5vw + 1.5vh);\n      }\n\n      .references {\n        display: none;\n      }\n    }\n\n    @keyframes growText {\n      0% {\n        font-size: calc(1.5vw + 1.5vh + 1vmin);\n      }\n      100% {\n        font-size: calc(1.5vw + 1.5vh + 4vmin);\n      }\n    }\n    @keyframes slide {\n      0% {\n        opacity: 0;\n        left: 90%;\n      }\n      100% {\n        opacity: 1;\n        left: 10%;\n      }\n    }\n  }\n}\n","// @use \"variables\" as var;\n@use \"./styles/variables.scss\" as var;\n@use \"./styles/header.scss\";\n@use \"./styles/main.scss\";\n@use \"./styles/footer.scss\";\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: var.$text-font;\n  color: var.$body-text-dark-color;\n}\n\n.landmark {\n  opacity: 0;\n  transition: opacity 1s ease-in-out 0.5s;\n}\n\n.visible {\n  opacity: 1 !important;\n}\n\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\n  body {\n    display: flex;\n    flex-direction: column;\n    gap: 250px;\n  }\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n\n$heading-light-color: #f1f5f9;\n$heading-dark-color: #374151;\n$body-text-dark-color: #475569;\n$headings-font: \"Playfair Display\", serif;\n$text-font: \"Roboto\", sans-serif;\n$breakpoint-tablet: 600px;\n$breakpoint-desktop: 1100px;\n","@use \"variables\" as var;\n\nmain {\n  padding: 40px;\n\n  h1 {\n    font-size: calc(1.5vw + 1.5vh + 6vmin);\n    text-align: center;\n    color: var.$heading-dark-color;\n    font-family: var.$headings-font;\n    padding: 30px;\n  }\n\n  .projects-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 30px;\n\n    .project {\n      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n      border-radius: 10px;\n      opacity: 0;\n      transition: opacity 1s ease-in-out 0.5s;\n\n      .screenshot {\n        width: 100%;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n      }\n\n      .project-info {\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        padding: 10px 0;\n\n        .name {\n          color: var.$heading-dark-color;\n          font-family: var.$headings-font;\n        }\n\n        .links {\n          display: flex;\n          align-items: center;\n          gap: 15px;\n\n          img {\n            width: 20px;\n            &:hover {\n              transform: scale(1.2);\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\n  main {\n    .projects-container {\n      grid-template-columns: repeat(2, 1fr);\n      gap: 50px;\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-desktop) {\n  main {\n    .projects-container {\n      grid-template-columns: repeat(3, 1fr);\n      gap: 100px;\n    }\n  }\n}\n","@use \"variables\" as var;\n\nfooter {\n  background-color: #0891b2;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  h1 {\n    text-align: center;\n    color: var.$heading-light-color;\n    font-family: var.$headings-font;\n    font-size: calc(1.5vw + 1.5vh + 6vmin);\n  }\n\n  h2 {\n    color: var.$heading-light-color;\n    font-size: calc(1.5vw + 1.5vh + 1vmin);\n  }\n\n  p {\n    color: var.$heading-light-color;\n    font-size: calc(1.5vw + 1.5vh);\n  }\n\n  .github-text {\n    text-align: center;\n\n    img {\n      width: 60px;\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\n  main {\n    .projects-container {\n      grid-template-columns: repeat(2, 1fr);\n      gap: 50px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _src_assets_images_screenshots_todo_list_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _src_assets_images_screenshots_weather_app_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _src_assets_images_screenshots_calculator_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _src_assets_images_screenshots_etch_a_skatch_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _src_assets_images_screenshots_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _src_assets_images_links_external_link_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */







const imageMap = {
  "todo-list": _src_assets_images_screenshots_todo_list_png__WEBPACK_IMPORTED_MODULE_0__,
  "weather-app": _src_assets_images_screenshots_weather_app_png__WEBPACK_IMPORTED_MODULE_1__,
  calculator: _src_assets_images_screenshots_calculator_png__WEBPACK_IMPORTED_MODULE_2__,
  "etch-a-sketch": _src_assets_images_screenshots_etch_a_skatch_png__WEBPACK_IMPORTED_MODULE_3__,
  "admin-dashboard": _src_assets_images_screenshots_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_4__,
};

function createProjects() {
  const projects = [
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
    ghLink.href = `https://github.com/saba-bar95/${el}`;
    ghLink.target = "_blank";
    links.appendChild(ghLink);

    const github = new Image();
    github.src =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
    ghLink.appendChild(github);

    const liveLink = document.createElement("a");
    liveLink.href = `https://saba-bar95.github.io/${el}/`;
    liveLink.target = "_blank";
    links.appendChild(liveLink);

    const live = new Image();
    live.src = _src_assets_images_links_external_link_png__WEBPACK_IMPORTED_MODULE_5__;
    liveLink.appendChild(live);
  });
}


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "861bb8395b50f4e3f6dd.png";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3040dcfbdd7fc6c78527.png";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "551f5b4dfd6e10d28889.png";

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6d1fa5086314c0c14a1.png";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70eb30f5c4db4870b008.png";

/***/ }),
/* 17 */
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
/* harmony import */ var _components_projects_createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



(0,_components_projects_createProject__WEBPACK_IMPORTED_MODULE_1__["default"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNPQUFzTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxVQUFVLEtBQUssS0FBSyxZQUFZLFlBQVksS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxZQUFZLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLGFBQWEsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFFBQVEsTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLEtB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Ozs7V0NsQkE7Ozs7Ozs7Ozs7QUNBc0I7QUFDMkM7O0FBRWpFLDhFQUFjOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4O1xuICBnYXA6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5oZWFkZXIgLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCAwJSAwJSwgMjI3LjUlIDAlLCAtMTQwJSAxNjIlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgaGVpZ2h0OiAxMDB2dztcbn1cbmhlYWRlciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IHNsaWRlTGVmdCAyLjVzIGZvcndhcmRzLCBmYWRlSW4gMi41cyBmb3J3YXJkcztcbn1cbmhlYWRlciAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuaGVhZGVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDc1JTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5oZWFkZXIgLmltYWdlLWNvbnRhaW5lciAubmFtZS1jb250YWluZXIgLm5hbWUge1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBhbmltYXRpb246IGdyb3dUZXh0IDJzIGZvcndhcmRzLCBmYWRlSW4gMnMgZm9yd2FyZHM7XG59XG5oZWFkZXIgLmFib3V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjVweDtcbiAgYW5pbWF0aW9uOiBzbGlkZVJpZ2h0IDIuNXMgZm9yd2FyZHMsIGZhZGVJbiAyLjVzIGZvcndhcmRzO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG59XG5oZWFkZXIgLmFib3V0LWNvbnRhaW5lciBoMSB7XG4gIGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEuNXZoICsgNnZtaW4pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGNvbG9yOiAjMzc0MTUxO1xufVxuaGVhZGVyIC5hYm91dC1jb250YWluZXIgLmFib3V0IHtcbiAgZm9udC1zaXplOiBjYWxjKDEuNXZ3ICsgMS41dmggKyAxdm1pbik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5oZWFkZXIgLmFib3V0LWNvbnRhaW5lciAucmVmZXJlbmNlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmhlYWRlciAuYWJvdXQtY29udGFpbmVyIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgLmFib3V0LWNvbnRhaW5lciBhIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlUmlnaHQge1xuICAwJSB7XG4gICAgcmlnaHQ6IC01MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgcmlnaHQ6IDAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGdyb3dUZXh0IHtcbiAgMCUge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEuNXZoICsgNXZtaW4pO1xuICB9XG4gIDEwMCUge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEuNXZoICsgMTB2bWluKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDgwdnc7XG4gIH1cbiAgaGVhZGVyIC5pbWFnZS1jb250YWluZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICBoZWFkZXIgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgaGVhZGVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgICBsZWZ0OiA3NSU7XG4gICAgdG9wOiAxNSU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBoZWFkZXIgLmltYWdlLWNvbnRhaW5lciAubmFtZS1jb250YWluZXIgLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEuNXZoICsgNHZtaW4pO1xuICB9XG4gIGhlYWRlciAuYWJvdXQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgYW5pbWF0aW9uOiBzbGlkZSAyLjVzIGZvcndhcmRzO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiA4MHB4IDQwcHggMTAwcHggNDBweDtcbiAgfVxuICBoZWFkZXIgLmFib3V0LWNvbnRhaW5lciBoMSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEuNXZ3ICsgMS41dmggKyAzdm1pbik7XG4gIH1cbiAgaGVhZGVyIC5hYm91dC1jb250YWluZXIgLmFib3V0IHtcbiAgICBmb250LXNpemU6IGNhbGMoMS41dncgKyAxLjV2aCk7XG4gIH1cbiAgaGVhZGVyIC5hYm91dC1jb250YWluZXIgLnJlZmVyZW5jZXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgQGtleWZyYW1lcyBncm93VGV4dCB7XG4gICAgMCUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDEuNXZ3ICsgMS41dmggKyAxdm1pbik7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDEuNXZ3ICsgMS41dmggKyA0dm1pbik7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc2xpZGUge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBsZWZ0OiA5MCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGxlZnQ6IDEwJTtcbiAgICB9XG4gIH1cbn1cbm1haW4ge1xuICBwYWRkaW5nOiA0MHB4O1xufVxubWFpbiBoMSB7XG4gIGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEuNXZoICsgNnZtaW4pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzc0MTUxO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBwYWRkaW5nOiAzMHB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMzBweDtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0IDAuNXM7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnNjcmVlbnNob3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtaW5mbyAubmFtZSB7XG4gIGNvbG9yOiAjMzc0MTUxO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdhcDogMTAwcHg7XG4gIH1cbn1cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcbn1cbmZvb3RlciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEuNXZoICsgNnZtaW4pO1xufVxuZm9vdGVyIGgyIHtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEuNXZoICsgMXZtaW4pO1xufVxuZm9vdGVyIHAge1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1zaXplOiBjYWxjKDEuNXZ3ICsgMS41dmgpO1xufVxuZm9vdGVyIC5naXRodWItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmZvb3RlciAuZ2l0aHViLXRleHQgaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICBtYWluIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ2FwOiA1MHB4O1xuICB9XG59XG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNDc1NTY5O1xufVxuXG4ubGFuZG1hcmsge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0IDAuNXM7XG59XG5cbi52aXNpYmxlIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjUwcHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO0VBQ0Esd0RBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDSjtBREVFO0VBQ0UsaURBQUE7RUFDQSxrQkFBQTtFQUNBLHdEQUFBO0FDQUo7QURFSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0FOO0FER0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FB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QUE0UEY7O0FBelBBO0VBQ0UsaUNDTlU7RURPVixjQ1RxQjtBRHFRdkI7O0FBelBBO0VBQ0UsVUFBQTtFQUNBLHVDQUFBO0FBNFBGOztBQXpQQTtFQUNFLHFCQUFBO0FBNFBGOztBQXpQQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtFQTRQRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBnYXA6IDMwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgLmJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMzAlLCAwJSAwJSwgMjI3LjUlIDAlLCAtMTQwJSAxNjIlKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgaGVpZ2h0OiAxMDB2dztcXG4gIH1cXG5cXG4gIC5pbWFnZS1jb250YWluZXIge1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVMZWZ0IDIuNXMgZm9yd2FyZHMsIGZhZGVJbiAyLjVzIGZvcndhcmRzO1xcblxcbiAgICBpbWcge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm5hbWUtY29udGFpbmVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA3NSU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctbGlnaHQtY29sb3I7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgcGFkZGluZzogMCAyMHB4O1xcblxcbiAgICAgIC5uYW1lIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIuJGhlYWRpbmdzLWZvbnQ7XFxuICAgICAgICBhbmltYXRpb246IGdyb3dUZXh0IDJzIGZvcndhcmRzLCBmYWRlSW4gMnMgZm9yd2FyZHM7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuYWJvdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBhbmltYXRpb246IHNsaWRlUmlnaHQgMi41cyBmb3J3YXJkcywgZmFkZUluIDIuNXMgZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3BhY2l0eTogMDtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEuNXZoICsgNnZtaW4pO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcbiAgICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctZGFyay1jb2xvcjtcXG4gICAgfVxcblxcbiAgICAuYWJvdXQge1xcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEuNXZoICsgMXZtaW4pO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDE1cHg7XFxuICAgICAgZm9udC1mYW1pbHk6IHZhci4kdGV4dC1mb250O1xcbiAgICB9XFxuXFxuICAgIC5yZWZlcmVuY2VzIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgYSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcbiAgQGtleWZyYW1lcyBzbGlkZUxlZnQge1xcbiAgICAwJSB7XFxuICAgICAgbGVmdDogLTUwJTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBsZWZ0OiAwJTtcXG4gICAgfVxcbiAgfVxcbiAgQGtleWZyYW1lcyBzbGlkZVJpZ2h0IHtcXG4gICAgMCUge1xcbiAgICAgIHJpZ2h0OiAtNTAlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHJpZ2h0OiAwJTtcXG4gICAgfVxcbiAgfVxcbiAgQGtleWZyYW1lcyBncm93VGV4dCB7XFxuICAgIDAlIHtcXG4gICAgICBmb250LXNpemU6IGNhbGMoMS41dncgKyAxLjV2aCArIDV2bWluKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBmb250LXNpemU6IGNhbGMoMS41dncgKyAxLjV2aCArIDEwdm1pbik7XFxuICAgIH1cXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC10YWJsZXQpIGFuZCAobWF4LXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcbiAgaGVhZGVyIHtcXG4gICAgLmJhY2tncm91bmQge1xcbiAgICAgIGhlaWdodDogODB2dztcXG4gICAgfVxcblxcbiAgICAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgfVxcblxcbiAgICAgIC5uYW1lLWNvbnRhaW5lciB7XFxuICAgICAgICBsZWZ0OiA3NSU7XFxuICAgICAgICB0b3A6IDE1JTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgICAgICAubmFtZSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEuNXZoICsgNHZtaW4pO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYWJvdXQtY29udGFpbmVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICB0b3A6IDMwJTtcXG4gICAgICBsZWZ0OiAxMCU7XFxuICAgICAgYW5pbWF0aW9uOiBzbGlkZSAyLjVzIGZvcndhcmRzO1xcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgICBwYWRkaW5nOiA4MHB4IDQwcHggMTAwcHggNDBweDtcXG5cXG4gICAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMS41dncgKyAxLjV2aCArIDN2bWluKTtcXG4gICAgICB9XFxuXFxuICAgICAgLmFib3V0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEuNXZoKTtcXG4gICAgICB9XFxuXFxuICAgICAgLnJlZmVyZW5jZXMge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBncm93VGV4dCB7XFxuICAgICAgMCUge1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDEuNXZ3ICsgMS41dmggKyAxdm1pbik7XFxuICAgICAgfVxcbiAgICAgIDEwMCUge1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDEuNXZ3ICsgMS41dmggKyA0dm1pbik7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIEBrZXlmcmFtZXMgc2xpZGUge1xcbiAgICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBsZWZ0OiA5MCU7XFxuICAgICAgfVxcbiAgICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGxlZnQ6IDEwJTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIvLyBAdXNlIFxcXCJ2YXJpYWJsZXNcXFwiIGFzIHZhcjtcXG5AdXNlIFxcXCIuL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1xcXCIgYXMgdmFyO1xcbkB1c2UgXFxcIi4vc3R5bGVzL2hlYWRlci5zY3NzXFxcIjtcXG5AdXNlIFxcXCIuL3N0eWxlcy9tYWluLnNjc3NcXFwiO1xcbkB1c2UgXFxcIi4vc3R5bGVzL2Zvb3Rlci5zY3NzXFxcIjtcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIuJHRleHQtZm9udDtcXG4gIGNvbG9yOiB2YXIuJGJvZHktdGV4dC1kYXJrLWNvbG9yO1xcbn1cXG5cXG4ubGFuZG1hcmsge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQgMC41cztcXG59XFxuXFxuLnZpc2libGUge1xcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXRhYmxldCkgYW5kIChtYXgtd2lkdGg6IHZhci4kYnJlYWtwb2ludC1kZXNrdG9wKSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNTBweDtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4kaGVhZGluZy1saWdodC1jb2xvcjogI2YxZjVmOTtcXG4kaGVhZGluZy1kYXJrLWNvbG9yOiAjMzc0MTUxO1xcbiRib2R5LXRleHQtZGFyay1jb2xvcjogIzQ3NTU2OTtcXG4kaGVhZGluZ3MtZm9udDogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG4kdGV4dC1mb250OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4kYnJlYWtwb2ludC10YWJsZXQ6IDYwMHB4O1xcbiRicmVha3BvaW50LWRlc2t0b3A6IDExMDBweDtcXG5cIixcIkB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcblxcbm1haW4ge1xcbiAgcGFkZGluZzogNDBweDtcXG5cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEuNXZ3ICsgMS41dmggKyA2dm1pbik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhci4kaGVhZGluZy1kYXJrLWNvbG9yO1xcbiAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxuXFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dCAwLjVzO1xcblxcbiAgICAgIC5zY3JlZW5zaG90IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAucHJvamVjdC1pbmZvIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XFxuXFxuICAgICAgICAubmFtZSB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctZGFyay1jb2xvcjtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhci4kaGVhZGluZ3MtZm9udDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5saW5rcyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTVweDtcXG5cXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC10YWJsZXQpIGFuZCAobWF4LXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcbiAgbWFpbiB7XFxuICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgZ2FwOiA1MHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcbiAgbWFpbiB7XFxuICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgICAgZ2FwOiAxMDBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkB1c2UgXFxcInZhcmlhYmxlc1xcXCIgYXMgdmFyO1xcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcblxcbiAgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctbGlnaHQtY29sb3I7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIuJGhlYWRpbmdzLWZvbnQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEuNXZoICsgNnZtaW4pO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWxpZ2h0LWNvbG9yO1xcbiAgICBmb250LXNpemU6IGNhbGMoMS41dncgKyAxLjV2aCArIDF2bWluKTtcXG4gIH1cXG5cXG4gIHAge1xcbiAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWxpZ2h0LWNvbG9yO1xcbiAgICBmb250LXNpemU6IGNhbGMoMS41dncgKyAxLjV2aCk7XFxuICB9XFxuXFxuICAuZ2l0aHViLXRleHQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGltZyB7XFxuICAgICAgd2lkdGg6IDYwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC10YWJsZXQpIGFuZCAobWF4LXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcbiAgbWFpbiB7XFxuICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgZ2FwOiA1MHB4O1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hYnNvbHV0ZS1wYXRoICovXG5pbXBvcnQgdG9kb0xpc3RJTUcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy90b2RvLWxpc3QucG5nXCI7XG5pbXBvcnQgd2VhdGhlckFwcElNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL3dlYXRoZXItYXBwLnBuZ1wiO1xuaW1wb3J0IGNhbGN1bGF0b3JJTUcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9jYWxjdWxhdG9yLnBuZ1wiO1xuaW1wb3J0IGV0Y2hBU2thdGNoSU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvZXRjaC1hLXNrYXRjaC5wbmdcIjtcbmltcG9ydCBhZG1pbkRhc2hib2FyZElNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2FkbWluLWRhc2hib2FyZC5wbmdcIjtcbmltcG9ydCBsaXZlSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvbGlua3MvZXh0ZXJuYWwtbGluay5wbmdcIjtcblxuY29uc3QgaW1hZ2VNYXAgPSB7XG4gIFwidG9kby1saXN0XCI6IHRvZG9MaXN0SU1HLFxuICBcIndlYXRoZXItYXBwXCI6IHdlYXRoZXJBcHBJTUcsXG4gIGNhbGN1bGF0b3I6IGNhbGN1bGF0b3JJTUcsXG4gIFwiZXRjaC1hLXNrZXRjaFwiOiBldGNoQVNrYXRjaElNRyxcbiAgXCJhZG1pbi1kYXNoYm9hcmRcIjogYWRtaW5EYXNoYm9hcmRJTUcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXG4gICAgXCJ0b2RvLWxpc3RcIixcbiAgICBcIndlYXRoZXItYXBwXCIsXG4gICAgXCJjYWxjdWxhdG9yXCIsXG4gICAgXCJldGNoLWEtc2tldGNoXCIsXG4gICAgXCJhZG1pbi1kYXNoYm9hcmRcIixcbiAgXTtcblxuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gIHByb2plY3RzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInNjcmVlbnNob3RcIik7XG4gICAgaW1hZ2Uuc3JjID0gaW1hZ2VNYXBbZWxdO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWluZm9cIik7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SW5mbyk7XG5cbiAgICBjb25zdCBwYXJzZWROYW1lID0gZWxcbiAgICAgIC5yZXBsYWNlKC9eXFx3LywgKGMpID0+IGMudG9VcHBlckNhc2UoKSlcbiAgICAgIC5yZXBsYWNlKC8tL2csIFwiIFwiKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gcGFyc2VkTmFtZTtcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKFwibGlua3NcIik7XG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQobGlua3MpO1xuXG4gICAgY29uc3QgZ2hMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZ2hMaW5rLmhyZWYgPSBgaHR0cHM6Ly9naXRodWIuY29tL3NhYmEtYmFyOTUvJHtlbH1gO1xuICAgIGdoTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGdoTGluayk7XG5cbiAgICBjb25zdCBnaXRodWIgPSBuZXcgSW1hZ2UoKTtcbiAgICBnaXRodWIuc3JjID1cbiAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXCI7XG4gICAgZ2hMaW5rLmFwcGVuZENoaWxkKGdpdGh1Yik7XG5cbiAgICBjb25zdCBsaXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpdmVMaW5rLmhyZWYgPSBgaHR0cHM6Ly9zYWJhLWJhcjk1LmdpdGh1Yi5pby8ke2VsfS9gO1xuICAgIGxpdmVMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobGl2ZUxpbmspO1xuXG4gICAgY29uc3QgbGl2ZSA9IG5ldyBJbWFnZSgpO1xuICAgIGxpdmUuc3JjID0gbGl2ZUltZztcbiAgICBsaXZlTGluay5hcHBlbmRDaGlsZChsaXZlKTtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdHMgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0cy9jcmVhdGVQcm9qZWN0XCI7XG5cbmNyZWF0ZVByb2plY3RzKCk7XG5cbmNvbnN0IGxhbmRtYXJrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFuZG1hcmtcIik7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIH1cbiAgfSk7XG59KTtcblxubGFuZG1hcmtzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKTtcbn0pO1xuXG5wcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIG9ic2VydmVyLm9ic2VydmUoaXRlbSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==