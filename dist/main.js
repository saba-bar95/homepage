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
    font-size: 3rem;
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
  font-size: 1.8rem;
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
  header .info-container .about-container p {
    font-size: 1.6rem;
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
  font-size: 1.8rem;
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
  font-size: 3rem;
}
footer h2 {
  color: #f1f5f9;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1em;
}
footer p {
  color: #f1f5f9;
  font-size: 1.5rem;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/animations.scss","webpack://./src/index.scss","webpack://./src/styles/header.scss","webpack://./src/styles/variables.scss","webpack://./src/styles/main.scss","webpack://./src/styles/footer.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes slideFromRight {\n  0% {\n    right: -100%;\n    opacity: 0;\n  }\n  100% {\n    right: 0%;\n    opacity: 1;\n  }\n}\n\n@keyframes slideFromLeft {\n  0% {\n    left: -100%;\n    opacity: 0;\n  }\n  100% {\n    left: 0%;\n    opacity: 1;\n  }\n}\n\n@keyframes growFontSize {\n  0% {\n    font-size: 1rem;\n  }\n  100% {\n    font-size: 3rem;\n  }\n}\n","// @use \"variables\" as var;\n@use \"./styles/variables.scss\" as var;\n@use \"./styles/header.scss\";\n@use \"./styles/main.scss\";\n@use \"./styles/footer.scss\";\n@use \"./styles/animations.scss\";\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: var.$text-font;\n  color: var.$body-text-dark-color;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.landmark {\n  opacity: 0;\n  transition: opacity 1s ease-in-out 0.5s;\n}\n\n.visible {\n  opacity: 1 !important;\n}\n\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\n  body {\n    gap: 75px;\n  }\n}\n\n@media (min-width: var.$breakpoint-desktop) {\n  body {\n    gap: 100px;\n  }\n}\n","@use \"variables\" as var;\n@use \"animations.scss\";\n\nheader {\n  padding: 40px 40px 0 40px;\n  overflow: hidden;\n  position: relative;\n\n  .background {\n    background-color: #0891b2;\n    clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 100%);\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    height: 100vw;\n  }\n\n  .info-container {\n    .image-container {\n      text-align: center;\n      margin-bottom: 50px;\n      position: relative;\n      animation: slideFromLeft 2s ease-out forwards;\n\n      img {\n        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n        width: 80%;\n      }\n\n      .name-container {\n        position: absolute;\n        bottom: 0;\n        left: 6%;\n        color: var.$heading-light-color;\n        font-family: var.$headings-font;\n        padding: 15px 30px;\n        width: 95%;\n        text-align: left;\n        animation: growFontSize 2.3s ease-out forwards;\n      }\n    }\n\n    .about-container {\n      position: relative;\n      animation: slideFromRight 2s ease-out forwards;\n\n      h1 {\n        text-align: center;\n        font-family: var.$headings-font;\n        animation: growFontSize 2.3s ease-out forwards;\n      }\n\n      p {\n        font-size: 1.8rem;\n        user-select: none;\n        padding-bottom: 15px;\n      }\n\n      p:first-of-type {\n        padding-top: 25px;\n      }\n\n      .references {\n        text-align: center;\n\n        img {\n          width: 40px;\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\n  header {\n    .background {\n      height: 80vw;\n      clip-path: polygon(0% 30%, 0% 0%, 227.5% 0%, 0% 74%);\n    }\n\n    .info-container {\n      .image-container {\n        float: left;\n        box-shadow: none;\n        padding-right: 20px;\n        max-width: 40%;\n        margin: 0;\n        z-index: 1;\n\n        img {\n          width: 100%;\n        }\n\n        .name-container {\n          top: 0;\n          left: -15%;\n          padding: 0;\n          width: 300%;\n          text-align: unset;\n        }\n      }\n\n      .about-container {\n        width: 90%;\n        padding: 100px 30px 40px 30px;\n        background-color: #f1f5f9;\n        margin-left: 70px;\n        transform: translateY(15%);\n\n        .about-text {\n          transform: translateY(-18%);\n        }\n\n        h1 {\n          transform: translateY(-130%);\n        }\n\n        p {\n          font-size: 1.6rem;\n          // transform: translateY(-20%);\n        }\n\n        .references {\n          display: none;\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-desktop) {\n  header {\n    padding: 40px 40px 0 40px;\n\n    .background {\n      height: 35vw;\n    }\n\n    .info-container {\n      display: flex;\n      align-items: center;\n\n      .image-container {\n        max-width: 28%;\n        margin: 0;\n\n        img {\n          width: 100%;\n        }\n\n        .name-container {\n          left: 0;\n          padding: 10px;\n        }\n      }\n\n      .about-container {\n        background-color: #f1f5f9;\n        padding: 20px;\n        overflow: hidden;\n\n        p {\n          font-size: 1.5rem;\n        }\n\n        .references {\n          text-align: right;\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-ultrawide) {\n  header {\n    display: flex;\n    justify-content: center;\n\n    .background {\n      height: 30vh;\n    }\n\n    .info-container {\n      max-width: 2000px;\n\n      .image-container {\n        max-width: 20%;\n      }\n    }\n  }\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n\n$heading-light-color: #f1f5f9;\n$heading-dark-color: #374151;\n$body-text-dark-color: #475569;\n$headings-font: \"Playfair Display\", serif;\n$text-font: \"Roboto\", sans-serif;\n$breakpoint-tablet: 600px;\n$breakpoint-desktop: 1099px;\n$breakpoint-ultrawide: 2000px;\n","@use \"variables\" as var;\n@use \"animations.scss\";\n\nmain {\n  padding: 0 40px;\n\n  h1 {\n    text-align: center;\n    color: var.$heading-dark-color;\n    font-family: var.$headings-font;\n    padding-bottom: 30px;\n    position: relative;\n    animation: growFontSize 2s ease-out forwards;\n  }\n\n  .projects-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 30px;\n\n    .project {\n      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n      border-radius: 10px;\n      opacity: 0;\n      transition: opacity 1s ease-in-out 0.5s;\n\n      .screenshot {\n        width: 100%;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n      }\n\n      .project-info {\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        padding: 10px 0;\n\n        .name {\n          color: var.$heading-dark-color;\n          font-family: var.$headings-font;\n          font-size: 1.8rem;\n        }\n\n        .links {\n          display: flex;\n          align-items: center;\n          gap: 15px;\n\n          img {\n            width: 20px;\n            &:hover {\n              transform: scale(1.2);\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-tablet) and (max-width: var.$breakpoint-desktop) {\n  main {\n    .projects-container {\n      grid-template-columns: repeat(2, 1fr);\n      gap: 50px;\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-desktop) {\n  main {\n    .projects-container {\n      grid-template-columns: repeat(3, 1fr);\n      gap: 100px;\n    }\n  }\n}\n\n@media (min-width: var.$breakpoint-ultrawide) {\n  main {\n    .projects-container {\n      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n      gap: 20px;\n    }\n  }\n}\n","@use \"variables\" as var;\n\nfooter {\n  background-color: #0891b2;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  h1 {\n    text-align: center;\n    color: var.$heading-light-color;\n    font-family: var.$headings-font;\n    font-size: 3rem;\n  }\n\n  h2 {\n    color: var.$heading-light-color;\n    font-size: 1.8rem;\n    font-weight: 500;\n    line-height: 1em;\n  }\n\n  p {\n    color: var.$heading-light-color;\n    font-size: 1.5rem;\n  }\n\n  .github-text {\n    text-align: center;\n\n    img {\n      width: 60px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrUUFBK1EsS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsYUFBYSxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsYUFBYSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1B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RDtBQUNBOztBQUVBO0FBQ0EsZUFBZSx1RUFBTztBQUN0QjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7OztBQ0FzQjtBQUMyQzs7QUFFakUsOEVBQWM7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LnNjc3M/NzIyMyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwLi45MDA7MSw0MDAuLjkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGtleWZyYW1lcyBzbGlkZUZyb21SaWdodCB7XG4gIDAlIHtcbiAgICByaWdodDogLTEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICByaWdodDogMCU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUZyb21MZWZ0IHtcbiAgMCUge1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMCU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBncm93Rm9udFNpemUge1xuICAwJSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIDEwMCUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuaGVhZGVyIHtcbiAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAwJSwgMCUgMTAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIGhlaWdodDogMTAwdnc7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBzbGlkZUZyb21MZWZ0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XG4gIHdpZHRoOiA4MCU7XG59XG5oZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDYlO1xuICBjb2xvcjogI2YxZjVmOTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgcGFkZGluZzogMTVweCAzMHB4O1xuICB3aWR0aDogOTUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbmltYXRpb246IGdyb3dGb250U2l6ZSAyLjNzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IHNsaWRlRnJvbVJpZ2h0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBhbmltYXRpb246IGdyb3dGb250U2l6ZSAyLjNzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHA6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDk5cHgpIHtcbiAgaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDgwdnc7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAwJSwgMCUgNzQlKTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDQwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIgLm5hbWUtY29udGFpbmVyIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTE1JTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAzMDAlO1xuICAgIHRleHQtYWxpZ246IHVuc2V0O1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiAxMDBweCAzMHB4IDQwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNSUpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAuYWJvdXQtdGV4dCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOCUpO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciBoMSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzAlKTtcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIC5hYm91dC1jb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIC5yZWZlcmVuY2VzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTA5OXB4KSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcbiAgfVxuICBoZWFkZXIgLmJhY2tncm91bmQge1xuICAgIGhlaWdodDogMzV2dztcbiAgfVxuICBoZWFkZXIgLmluZm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDI4JTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIC5uYW1lLWNvbnRhaW5lciB7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgaGVhZGVyIC5pbmZvLWNvbnRhaW5lciAuYWJvdXQtY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmFib3V0LWNvbnRhaW5lciAucmVmZXJlbmNlcyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIGhlYWRlciAuYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjAwMHB4O1xuICB9XG4gIGhlYWRlciAuaW5mby1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAyMCU7XG4gIH1cbn1cbm1haW4ge1xuICBwYWRkaW5nOiAwIDQwcHg7XG59XG5tYWluIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzM3NDE1MTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBncm93Rm9udFNpemUgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5tYWluIC5wcm9qZWN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ2FwOiAzMHB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQgMC41cztcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAuc2NyZWVuc2hvdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbm1haW4gLnByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdC1pbmZvIC5uYW1lIHtcbiAgY29sb3I6ICMzNzQxNTE7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xufVxubWFpbiAucHJvamVjdHMtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmxpbmtzIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTA5OXB4KSB7XG4gIG1haW4gLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDk5cHgpIHtcbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdhcDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgbWFpbiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbn1cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcbn1cbmZvb3RlciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbmZvb3RlciBoMiB7XG4gIGNvbG9yOiAjZjFmNWY5O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbn1cbmZvb3RlciBwIHtcbiAgY29sb3I6ICNmMWY1Zjk7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuZm9vdGVyIC5naXRodWItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmZvb3RlciAuZ2l0aHViLXRleHQgaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNTBweDtcbn1cblxuLmxhbmRtYXJrIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dCAwLjVzO1xufVxuXG4udmlzaWJsZSB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTA5OXB4KSB7XG4gIGJvZHkge1xuICAgIGdhcDogNzVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwOTlweCkge1xuICBib2R5IHtcbiAgICBnYXA6IDEwMHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ0dGO0VEREE7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RUNFRjtFREFBO0lBQ0UsUUFBQTtJQUNBLFVBQUE7RUNFRjtBQUNGO0FEQ0E7RUFDRTtJQUNFLGVBQUE7RUNDRjtFRENBO0lBQ0UsZUFBQTtFQ0NGO0FBQ0Y7QUMxQkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUQ0QkY7QUMxQkU7RUFDRSx5QkFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBRDRCSjtBQ3hCSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FEMEJOO0FDeEJNO0VBQ0UsaURBQUE7RUFDQSxVQUFBO0FEMEJSO0FDdkJNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGNDaENjO0VEaUNkLHNDQzlCUTtFRCtCUixrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0FEeUJSO0FDckJJO0VBQ0Usa0JBQUE7RUFDQSw4Q0FBQTtBRHVCTjtBQ3JCTTtFQUNFLGtCQUFBO0VBQ0Esc0NDNUNRO0VENkNSLDhDQUFBO0FEdUJSO0FDcEJNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FEc0JSO0FDbkJNO0VBQ0UsaUJBQUE7QURxQlI7QUNsQk07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ZW50XCI6W1wiQGtleWZyYW1lcyBzbGlkZUZyb21SaWdodCB7XFxuICAwJSB7XFxuICAgIHJpZ2h0OiAtMTAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICByaWdodDogMCU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVGcm9tTGVmdCB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IC0xMDAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3dGb250U2l6ZSB7XFxuICAwJSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxufVxcblwiLFwiLy8gQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyB2YXI7XFxuQHVzZSBcXFwiLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcXFwiIGFzIHZhcjtcXG5AdXNlIFxcXCIuL3N0eWxlcy9oZWFkZXIuc2Nzc1xcXCI7XFxuQHVzZSBcXFwiLi9zdHlsZXMvbWFpbi5zY3NzXFxcIjtcXG5AdXNlIFxcXCIuL3N0eWxlcy9mb290ZXIuc2Nzc1xcXCI7XFxuQHVzZSBcXFwiLi9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzXFxcIjtcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIuJHRleHQtZm9udDtcXG4gIGNvbG9yOiB2YXIuJGJvZHktdGV4dC1kYXJrLWNvbG9yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5sYW5kbWFyayB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dCAwLjVzO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdGFibGV0KSBhbmQgKG1heC13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXG4gIGJvZHkge1xcbiAgICBnYXA6IDc1cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtZGVza3RvcCkge1xcbiAgYm9keSB7XFxuICAgIGdhcDogMTAwcHg7XFxuICB9XFxufVxcblwiLFwiQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyB2YXI7XFxuQHVzZSBcXFwiYW5pbWF0aW9ucy5zY3NzXFxcIjtcXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAuYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDAlIDAlLCAyMjcuNSUgMCUsIDAlIDEwMCUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBoZWlnaHQ6IDEwMHZ3O1xcbiAgfVxcblxcbiAgLmluZm8tY29udGFpbmVyIHtcXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVGcm9tTGVmdCAycyBlYXNlLW91dCBmb3J3YXJkcztcXG5cXG4gICAgICBpbWcge1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgfVxcblxcbiAgICAgIC5uYW1lLWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBsZWZ0OiA2JTtcXG4gICAgICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctbGlnaHQtY29sb3I7XFxuICAgICAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcbiAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBhbmltYXRpb246IGdyb3dGb250U2l6ZSAyLjNzIGVhc2Utb3V0IGZvcndhcmRzO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYWJvdXQtY29udGFpbmVyIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgYW5pbWF0aW9uOiBzbGlkZUZyb21SaWdodCAycyBlYXNlLW91dCBmb3J3YXJkcztcXG5cXG4gICAgICBoMSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcbiAgICAgICAgYW5pbWF0aW9uOiBncm93Rm9udFNpemUgMi4zcyBlYXNlLW91dCBmb3J3YXJkcztcXG4gICAgICB9XFxuXFxuICAgICAgcCB7XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICAgICAgfVxcblxcbiAgICAgIHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcXG4gICAgICB9XFxuXFxuICAgICAgLnJlZmVyZW5jZXMge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdGFibGV0KSBhbmQgKG1heC13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXG4gIGhlYWRlciB7XFxuICAgIC5iYWNrZ3JvdW5kIHtcXG4gICAgICBoZWlnaHQ6IDgwdnc7XFxuICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMCUgMCUsIDIyNy41JSAwJSwgMCUgNzQlKTtcXG4gICAgfVxcblxcbiAgICAuaW5mby1jb250YWluZXIge1xcbiAgICAgIC5pbWFnZS1jb250YWluZXIge1xcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgICAgIG1heC13aWR0aDogNDAlO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgei1pbmRleDogMTtcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm5hbWUtY29udGFpbmVyIHtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICBsZWZ0OiAtMTUlO1xcbiAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICB3aWR0aDogMzAwJTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogdW5zZXQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5hYm91dC1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDMwcHggNDBweCAzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1JSk7XFxuXFxuICAgICAgICAuYWJvdXQtdGV4dCB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTglKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGgxIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzAlKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnJlZmVyZW5jZXMge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDQwcHggNDBweCAwIDQwcHg7XFxuXFxuICAgIC5iYWNrZ3JvdW5kIHtcXG4gICAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIH1cXG5cXG4gICAgLmluZm8tY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgLmltYWdlLWNvbnRhaW5lciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI4JTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm5hbWUtY29udGFpbmVyIHtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLmFib3V0LWNvbnRhaW5lciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucmVmZXJlbmNlcyB7XFxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LXVsdHJhd2lkZSkge1xcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIC5iYWNrZ3JvdW5kIHtcXG4gICAgICBoZWlnaHQ6IDMwdmg7XFxuICAgIH1cXG5cXG4gICAgLmluZm8tY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDIwMDBweDtcXG5cXG4gICAgICAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogMjAlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwLi45MDA7MSw0MDAuLjkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiRoZWFkaW5nLWxpZ2h0LWNvbG9yOiAjZjFmNWY5O1xcbiRoZWFkaW5nLWRhcmstY29sb3I6ICMzNzQxNTE7XFxuJGJvZHktdGV4dC1kYXJrLWNvbG9yOiAjNDc1NTY5O1xcbiRoZWFkaW5ncy1mb250OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbiR0ZXh0LWZvbnQ6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiRicmVha3BvaW50LXRhYmxldDogNjAwcHg7XFxuJGJyZWFrcG9pbnQtZGVza3RvcDogMTA5OXB4O1xcbiRicmVha3BvaW50LXVsdHJhd2lkZTogMjAwMHB4O1xcblwiLFwiQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyB2YXI7XFxuQHVzZSBcXFwiYW5pbWF0aW9ucy5zY3NzXFxcIjtcXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDAgNDBweDtcXG5cXG4gIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWRhcmstY29sb3I7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIuJGhlYWRpbmdzLWZvbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogZ3Jvd0ZvbnRTaXplIDJzIGVhc2Utb3V0IGZvcndhcmRzO1xcbiAgfVxcblxcbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxuXFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dCAwLjVzO1xcblxcbiAgICAgIC5zY3JlZW5zaG90IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAucHJvamVjdC1pbmZvIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XFxuXFxuICAgICAgICAubmFtZSB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctZGFyay1jb2xvcjtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhci4kaGVhZGluZ3MtZm9udDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubGlua3Mge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBnYXA6IDE1cHg7XFxuXFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiB2YXIuJGJyZWFrcG9pbnQtdGFibGV0KSBhbmQgKG1heC13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXG4gIG1haW4ge1xcbiAgICAucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgIGdhcDogNTBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogdmFyLiRicmVha3BvaW50LWRlc2t0b3ApIHtcXG4gIG1haW4ge1xcbiAgICAucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICAgIGdhcDogMTAwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IHZhci4kYnJlYWtwb2ludC11bHRyYXdpZGUpIHtcXG4gIG1haW4ge1xcbiAgICAucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG4gICAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAdXNlIFxcXCJ2YXJpYWJsZXNcXFwiIGFzIHZhcjtcXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG5cXG4gIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyLiRoZWFkaW5nLWxpZ2h0LWNvbG9yO1xcbiAgICBmb250LWZhbWlseTogdmFyLiRoZWFkaW5ncy1mb250O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICBoMiB7XFxuICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctbGlnaHQtY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsaW5lLWhlaWdodDogMWVtO1xcbiAgfVxcblxcbiAgcCB7XFxuICAgIGNvbG9yOiB2YXIuJGhlYWRpbmctbGlnaHQtY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgLmdpdGh1Yi10ZXh0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hYnNvbHV0ZS1wYXRoICovXG5pbXBvcnQgdG9kb0xpc3RJTUcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy90b2RvLWxpc3QucG5nXCI7XG5pbXBvcnQgd2VhdGhlckFwcElNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL3dlYXRoZXItYXBwLnBuZ1wiO1xuaW1wb3J0IGNhbGN1bGF0b3JJTUcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90cy9jYWxjdWxhdG9yLnBuZ1wiO1xuaW1wb3J0IGV0Y2hBU2thdGNoSU1HIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdHMvZXRjaC1hLXNrYXRjaC5wbmdcIjtcbmltcG9ydCBhZG1pbkRhc2hib2FyZElNRyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmVlbnNob3RzL2FkbWluLWRhc2hib2FyZC5wbmdcIjtcbmltcG9ydCBsaXZlSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvbGlua3MvZXh0ZXJuYWwtbGluay5wbmdcIjtcblxuY29uc3QgaW1hZ2VNYXAgPSB7XG4gIFwidG9kby1saXN0XCI6IHRvZG9MaXN0SU1HLFxuICBcIndlYXRoZXItYXBwXCI6IHdlYXRoZXJBcHBJTUcsXG4gIGNhbGN1bGF0b3I6IGNhbGN1bGF0b3JJTUcsXG4gIFwiZXRjaC1hLXNrZXRjaFwiOiBldGNoQVNrYXRjaElNRyxcbiAgXCJhZG1pbi1kYXNoYm9hcmRcIjogYWRtaW5EYXNoYm9hcmRJTUcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXG4gICAgXCJ0b2RvLWxpc3RcIixcbiAgICBcIndlYXRoZXItYXBwXCIsXG4gICAgXCJjYWxjdWxhdG9yXCIsXG4gICAgXCJldGNoLWEtc2tldGNoXCIsXG4gICAgXCJhZG1pbi1kYXNoYm9hcmRcIixcbiAgXTtcblxuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gIHByb2plY3RzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInNjcmVlbnNob3RcIik7XG4gICAgaW1hZ2Uuc3JjID0gaW1hZ2VNYXBbZWxdO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWluZm9cIik7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SW5mbyk7XG5cbiAgICBjb25zdCBwYXJzZWROYW1lID0gZWxcbiAgICAgIC5yZXBsYWNlKC9eXFx3LywgKGMpID0+IGMudG9VcHBlckNhc2UoKSlcbiAgICAgIC5yZXBsYWNlKC8tL2csIFwiIFwiKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gcGFyc2VkTmFtZTtcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKFwibGlua3NcIik7XG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQobGlua3MpO1xuXG4gICAgY29uc3QgZ2hMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZ2hMaW5rLmhyZWYgPSBgaHR0cHM6Ly9naXRodWIuY29tL3NhYmEtYmFyOTUvJHtlbH1gO1xuICAgIGdoTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGdoTGluayk7XG5cbiAgICBjb25zdCBnaXRodWIgPSBuZXcgSW1hZ2UoKTtcbiAgICBnaXRodWIuc3JjID1cbiAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXCI7XG4gICAgZ2hMaW5rLmFwcGVuZENoaWxkKGdpdGh1Yik7XG5cbiAgICBjb25zdCBsaXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpdmVMaW5rLmhyZWYgPSBgaHR0cHM6Ly9zYWJhLWJhcjk1LmdpdGh1Yi5pby8ke2VsfS9gO1xuICAgIGxpdmVMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobGl2ZUxpbmspO1xuXG4gICAgY29uc3QgbGl2ZSA9IG5ldyBJbWFnZSgpO1xuICAgIGxpdmUuc3JjID0gbGl2ZUltZztcbiAgICBsaXZlTGluay5hcHBlbmRDaGlsZChsaXZlKTtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdHMgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0cy9jcmVhdGVQcm9qZWN0XCI7XG5cbmNyZWF0ZVByb2plY3RzKCk7XG5cbmNvbnN0IGxhbmRtYXJrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFuZG1hcmtcIik7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIH1cbiAgfSk7XG59KTtcblxubGFuZG1hcmtzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKTtcbn0pO1xuXG5wcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIG9ic2VydmVyLm9ic2VydmUoaXRlbSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==