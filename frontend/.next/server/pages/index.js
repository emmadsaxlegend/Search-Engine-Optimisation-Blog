"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_3__]);\nreactstrap__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Header = ()=>{\n    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggle = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            color: \"light\",\n            light: true,\n            expand: \"md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarBrand, {\n                    href: \"/\",\n                    children: _config__WEBPACK_IMPORTED_MODULE_2__.APP_NAME\n                }, void 0, false, {\n                    fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Header.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarToggler, {\n                    onClick: toggle\n                }, void 0, false, {\n                    fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Header.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Collapse, {\n                    isOpen: isOpen,\n                    navbar: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                        className: \"ml-auto\",\n                        navbar: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n                                    href: \"/components/\",\n                                    children: \"Components\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Header.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Header.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n                                    href: \"https://github.com/reactstrap/reactstrap\",\n                                    children: \"GitHub\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Header.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Header.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Header.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Header.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Header.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNJO0FBY2pCO0FBRXBCLE1BQU1hLE1BQU0sR0FBRyxJQUFNO0lBQ25CLE1BQU0sRUFsQlIsR0FrQlNDLE1BQU0sR0FsQmYsR0FrQmlCQyxTQUFTLE1BQUlmLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRTNDLE1BQU1nQixNQUFNLEdBQUcsSUFBTTtRQUNuQkQsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQyxDQUFDO0tBQ3BCO0lBRUQscUJBQ0UsOERBQUNHLEtBQUc7a0JBQ0YsNEVBQUNkLDhDQUFNO1lBQUNlLEtBQUssRUFBQyxPQUFPO1lBQUNDLEtBQUs7WUFBQ0MsTUFBTSxFQUFDLElBQUk7OzhCQUNyQyw4REFBQ2YsbURBQVc7b0JBQUNnQixJQUFJLEVBQUMsR0FBRzs4QkFBRXBCLDZDQUFROzs7Ozs2QkFBZTs4QkFDOUMsOERBQUNHLHFEQUFhO29CQUFDa0IsT0FBTyxFQUFFTixNQUFNOzs7Ozs2QkFBSTs4QkFDbEMsOERBQUNkLGdEQUFRO29CQUFDWSxNQUFNLEVBQUVBLE1BQU07b0JBQUVTLE1BQU07OEJBQzlCLDRFQUFDakIsMkNBQUc7d0JBQUNrQixTQUFTLEVBQUMsU0FBUzt3QkFBQ0QsTUFBTTs7MENBQzdCLDhEQUFDaEIsK0NBQU87MENBQ04sNEVBQUNDLCtDQUFPO29DQUFDYSxJQUFJLEVBQUMsY0FBYzs4Q0FBQyxZQUFVOzs7Ozs2Q0FBVTs7Ozs7eUNBQ3pDOzBDQUNWLDhEQUFDZCwrQ0FBTzswQ0FDTiw0RUFBQ0MsK0NBQU87b0NBQUNhLElBQUksRUFBQywwQ0FBMEM7OENBQUMsUUFBTTs7Ozs7NkNBQVU7Ozs7O3lDQUNqRTs7Ozs7O2lDQUNOOzs7Ozs2QkFDRzs7Ozs7O3FCQUNKOzs7OztpQkFDTCxDQUNOO0NBQ0g7QUFFRCxpRUFBZVIsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tICcuLi9jb25maWcnO1xuXG5pbXBvcnQge1xuICBDb2xsYXBzZSxcbiAgTmF2YmFyLFxuICBOYXZiYXJUb2dnbGVyLFxuICBOYXZiYXJCcmFuZCxcbiAgTmF2LFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TmF2YmFyIGNvbG9yPVwibGlnaHRcIiBsaWdodCBleHBhbmQ9XCJtZFwiPlxuICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIj57QVBQX05BTUV9PC9OYXZiYXJCcmFuZD5cbiAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxuICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIiBuYXZiYXI+XG4gICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9jb21wb25lbnRzL1wiPkNvbXBvbmVudHM8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdHN0cmFwL3JlYWN0c3RyYXBcIj5HaXRIdWI8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICA8L05hdmJhcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFQUF9OQU1FIiwiQ29sbGFwc2UiLCJOYXZiYXIiLCJOYXZiYXJUb2dnbGVyIiwiTmF2YmFyQnJhbmQiLCJOYXYiLCJOYXZJdGVtIiwiTmF2TGluayIsIlVuY29udHJvbGxlZERyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJIZWFkZXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiLCJkaXYiLCJjb2xvciIsImxpZ2h0IiwiZXhwYW5kIiwiaHJlZiIsIm9uQ2xpY2siLCJuYXZiYXIiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_2__]);\n_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Layout = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Layout.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, undefined),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"footer\"\n            }, void 0, false, {\n                fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Layout.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/components/Layout.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNLO0FBRTlCLE1BQU1FLE1BQU0sR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQzdCLHFCQUNJLDhEQUFDSCx1REFBYzs7MEJBQ1gsOERBQUNDLCtDQUFNOzs7O3lCQUFFO1lBQ1JFLFFBQVE7MEJBQ1QsOERBQUNFLEdBQUM7MEJBQUMsUUFBTTs7Ozs7eUJBQUk7Ozs7OztpQkFDQSxDQUNuQjtDQUNMO0FBRUQsaUVBQWVILE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPHA+Zm9vdGVyPC9wPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIkZyYWdtZW50IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API\": () => (/* binding */ API),\n/* harmony export */   \"APP_NAME\": () => (/* binding */ APP_NAME)\n/* harmony export */ });\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();\nconst API = publicRuntimeConfig.PRODUCTION ? \"https://seoblog.com\" : \"http://localhost:8000\";\nconst APP_NAME = publicRuntimeConfig.APP_NAME;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtQztBQUNuQyxNQUFNLEVBQUNDLG1CQUFtQixHQUFDLEdBQUdELGtEQUFTLEVBQUU7QUFFbEMsTUFBTUUsR0FBRyxHQUFHRCxtQkFBbUIsQ0FBQ0UsVUFBVSxHQUFHLHFCQUFxQixHQUFHLHVCQUF1QixDQUFDO0FBRTdGLE1BQU1DLFFBQVEsR0FBR0gsbUJBQW1CLENBQUNHLFFBQVEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29uZmlnLmpzP2MyYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcbmNvbnN0IHtwdWJsaWNSdW50aW1lQ29uZmlnfSA9IGdldENvbmZpZygpXG5cbmV4cG9ydCBjb25zdCBBUEkgPSBwdWJsaWNSdW50aW1lQ29uZmlnLlBST0RVQ1RJT04gPyAnaHR0cHM6Ly9zZW9ibG9nLmNvbScgOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJztcblxuZXhwb3J0IGNvbnN0IEFQUF9OQU1FID0gcHVibGljUnVudGltZUNvbmZpZy5BUFBfTkFNRTsiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIkFQSSIsIlBST0RVQ1RJT04iLCJBUFBfTkFNRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__]);\n_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst Index = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Index page\"\n        }, void 0, false, {\n            fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/pages/index.js\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Emma/Desktop/My project/seoblog/frontend/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEM7QUFFMUMsTUFBTUMsS0FBSyxHQUFHLElBQU07SUFDaEIscUJBQ0ksOERBQUNELDBEQUFNO2tCQUNILDRFQUFDRSxJQUFFO3NCQUFDLFlBQVU7Ozs7O3FCQUFLOzs7OztpQkFDZCxDQUNYO0NBQ0w7QUFFRCxpRUFBZUQsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGgyPkluZGV4IHBhZ2U8L2gyPlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIkxheW91dCIsIkluZGV4IiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("reactstrap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();