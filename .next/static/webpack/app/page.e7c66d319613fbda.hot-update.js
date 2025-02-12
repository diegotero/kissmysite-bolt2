"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/stories/stories-section.tsx":
/*!*****************************************!*\
  !*** ./app/stories/stories-section.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StoriesSection: function() { return /* binding */ StoriesSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/carousel */ \"(app-pages-browser)/./components/ui/carousel.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ StoriesSection auto */ \n\n\n\nfunction StoriesSection(param) {\n    let { stories } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-white py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-[#1e1e1e] font-bold text-center mb-4 font-['Source_Code_Pro']\",\n                    style: {\n                        fontWeight: 700,\n                        fontSize: \"48px\",\n                        lineHeight: \"48px\"\n                    },\n                    children: \"Stories that make us proud\"\n                }, void 0, false, {\n                    fileName: \"/home/project/app/stories/stories-section.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center mb-12 max-w-3xl mx-auto text-lg font-['Open_Sans']\",\n                    style: {\n                        fontFamily: \"Open Sans\",\n                        fontWeight: 400,\n                        fontSize: \"20px\",\n                        color: \"#1e1e1e\"\n                    },\n                    children: \"By creating a collaborative culture, our teams challenge objectives, finding ways to make things better, always.\"\n                }, void 0, false, {\n                    fileName: \"/home/project/app/stories/stories-section.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n                    opts: {\n                        align: \"start\",\n                        loop: true\n                    },\n                    className: \"w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselContent, {\n                            className: \"-ml-4\",\n                            children: stories.map((story)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                                    className: \"pl-4 md:basis-1/3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col h-full border border-[#E9E9E9]\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"relative w-full aspect-[2/1] mb-4 rounded-tl-lg rounded-tr-lg overflow-hidden\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    src: story.image.url,\n                                                    alt: story.title,\n                                                    fill: true,\n                                                    className: \"object-cover\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/project/app/stories/stories-section.tsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/project/app/stories/stories-section.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-[#F8F0F7] p-6 rounded-lg flex-grow\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"inline-block px-4 py-1 bg-[#9C6B98] text-white rounded-full mb-4 text-sm font-['Source_Code_Pro']\",\n                                                        children: story.category\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/project/app/stories/stories-section.tsx\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        className: \"text-xl font-bold mb-4 font-['Source_Code_Pro']\",\n                                                        children: story.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/project/app/stories/stories-section.tsx\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-600 mb-6 font-['Source_Code_Pro']\",\n                                                        children: story.shortDescription\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/project/app/stories/stories-section.tsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                                        variant: \"outline\",\n                                                        className: \"text-[#9C6B98] border-[#9C6B98] font-['Source_Code_Pro']\",\n                                                        children: \"See full case →\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/project/app/stories/stories-section.tsx\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/project/app/stories/stories-section.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/project/app/stories/stories-section.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this)\n                                }, story.id, false, {\n                                    fileName: \"/home/project/app/stories/stories-section.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/project/app/stories/stories-section.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselPrevious, {\n                            className: \"hidden md:flex\"\n                        }, void 0, false, {\n                            fileName: \"/home/project/app/stories/stories-section.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselNext, {\n                            className: \"hidden md:flex\"\n                        }, void 0, false, {\n                            fileName: \"/home/project/app/stories/stories-section.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/project/app/stories/stories-section.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/project/app/stories/stories-section.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/project/app/stories/stories-section.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = StoriesSection;\nvar _c;\n$RefreshReg$(_c, \"StoriesSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zdG9yaWVzL3N0b3JpZXMtc2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR2dEO0FBUWQ7QUFDSDtBQU14QixTQUFTTyxlQUFlLEtBQWdDO1FBQWhDLEVBQUVDLE9BQU8sRUFBdUIsR0FBaEM7SUFDN0IscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUdGLFdBQVU7b0JBQXFFRyxPQUFPO3dCQUFFQyxZQUFZO3dCQUFLQyxVQUFVO3dCQUFRQyxZQUFZO29CQUFPOzhCQUFHOzs7Ozs7OEJBR3JKLDhEQUFDQztvQkFBRVAsV0FBVTtvQkFBaUVHLE9BQU87d0JBQUVLLFlBQVk7d0JBQWFKLFlBQVk7d0JBQUtDLFVBQVU7d0JBQVFJLE9BQU87b0JBQVU7OEJBQUc7Ozs7Ozs4QkFJdkssOERBQUNsQiw2REFBUUE7b0JBQ1BtQixNQUFNO3dCQUNKQyxPQUFPO3dCQUNQQyxNQUFNO29CQUNSO29CQUNBWixXQUFVOztzQ0FFViw4REFBQ1Isb0VBQWVBOzRCQUFDUSxXQUFVO3NDQUN4QkYsUUFBUWUsR0FBRyxDQUFDLENBQUNDLHNCQUNaLDhEQUFDckIsaUVBQVlBO29DQUFnQk8sV0FBVTs4Q0FDckMsNEVBQUNDO3dDQUFJRCxXQUFVOzswREFDYiw4REFBQ0M7Z0RBQUlELFdBQVU7MERBQ2IsNEVBQUNKLGtEQUFLQTtvREFDSm1CLEtBQUtELE1BQU1FLEtBQUssQ0FBQ0MsR0FBRztvREFDcEJDLEtBQUtKLE1BQU1LLEtBQUs7b0RBQ2hCQyxJQUFJO29EQUNKcEIsV0FBVTs7Ozs7Ozs7Ozs7MERBR2QsOERBQUNDO2dEQUFJRCxXQUFVOztrRUFDYiw4REFBQ3FCO3dEQUFLckIsV0FBVTtrRUFDYmMsTUFBTVEsUUFBUTs7Ozs7O2tFQUVqQiw4REFBQ0M7d0RBQUd2QixXQUFVO2tFQUFtRGMsTUFBTUssS0FBSzs7Ozs7O2tFQUM1RSw4REFBQ1o7d0RBQUVQLFdBQVU7a0VBQStDYyxNQUFNVSxnQkFBZ0I7Ozs7OztrRUFDbEYsOERBQUNsQyx5REFBTUE7d0RBQUNtQyxTQUFRO3dEQUFVekIsV0FBVTtrRUFBMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FoQmxGYyxNQUFNWSxFQUFFOzs7Ozs7Ozs7O3NDQXdCL0IsOERBQUMvQixxRUFBZ0JBOzRCQUFDSyxXQUFVOzs7Ozs7c0NBQzVCLDhEQUFDTixpRUFBWUE7NEJBQUNNLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0tBbERnQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3N0b3JpZXMvc3Rvcmllcy1zZWN0aW9uLnRzeD85NjgzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgU3RvcnkgfSBmcm9tICdAL3R5cGVzL3N0b3J5JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuaW1wb3J0IHsgQ2hldnJvbkxlZnQsIENoZXZyb25SaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQge1xuICBDYXJvdXNlbCxcbiAgQ2Fyb3VzZWxDb250ZW50LFxuICBDYXJvdXNlbEl0ZW0sXG4gIENhcm91c2VsTmV4dCxcbiAgQ2Fyb3VzZWxQcmV2aW91cyxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJvdXNlbFwiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbnRlcmZhY2UgU3Rvcmllc1NlY3Rpb25Qcm9wcyB7XG4gIHN0b3JpZXM6IFN0b3J5W107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdG9yaWVzU2VjdGlvbih7IHN0b3JpZXMgfTogU3Rvcmllc1NlY3Rpb25Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyMxZTFlMWVdIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi00IGZvbnQtWydTb3VyY2VfQ29kZV9Qcm8nXVwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCwgZm9udFNpemU6ICc0OHB4JywgbGluZUhlaWdodDogJzQ4cHgnIH19PlxuICAgICAgICAgIFN0b3JpZXMgdGhhdCBtYWtlIHVzIHByb3VkXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyIG1heC13LTN4bCBteC1hdXRvIHRleHQtbGcgZm9udC1bJ09wZW5fU2FucyddXCIgc3R5bGU9e3sgZm9udEZhbWlseTogJ09wZW4gU2FucycsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6ICcyMHB4JywgY29sb3I6ICcjMWUxZTFlJyB9fT5cbiAgICAgICAgICBCeSBjcmVhdGluZyBhIGNvbGxhYm9yYXRpdmUgY3VsdHVyZSwgb3VyIHRlYW1zIGNoYWxsZW5nZSBvYmplY3RpdmVzLCBmaW5kaW5nIHdheXMgdG8gbWFrZSB0aGluZ3MgYmV0dGVyLCBhbHdheXMuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICBvcHRzPXt7XG4gICAgICAgICAgICBhbGlnbjogXCJzdGFydFwiLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Q2Fyb3VzZWxDb250ZW50IGNsYXNzTmFtZT1cIi1tbC00XCI+XG4gICAgICAgICAgICB7c3Rvcmllcy5tYXAoKHN0b3J5KSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW0ga2V5PXtzdG9yeS5pZH0gY2xhc3NOYW1lPVwicGwtNCBtZDpiYXNpcy0xLzNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1mdWxsIGJvcmRlciBib3JkZXItWyNFOUU5RTldXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBhc3BlY3QtWzIvMV0gbWItNCByb3VuZGVkLXRsLWxnIHJvdW5kZWQtdHItbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3RvcnkuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17c3RvcnkudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGOEYwRjddIHAtNiByb3VuZGVkLWxnIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNCBweS0xIGJnLVsjOUM2Qjk4XSB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBtYi00IHRleHQtc20gZm9udC1bJ1NvdXJjZV9Db2RlX1BybyddXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3N0b3J5LmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00IGZvbnQtWydTb3VyY2VfQ29kZV9Qcm8nXVwiPntzdG9yeS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTYgZm9udC1bJ1NvdXJjZV9Db2RlX1BybyddXCI+e3N0b3J5LnNob3J0RGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwidGV4dC1bIzlDNkI5OF0gYm9yZGVyLVsjOUM2Qjk4XSBmb250LVsnU291cmNlX0NvZGVfUHJvJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgICBTZWUgZnVsbCBjYXNlIOKGklxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQ2Fyb3VzZWxDb250ZW50PlxuICAgICAgICAgIDxDYXJvdXNlbFByZXZpb3VzIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4XCIgLz5cbiAgICAgICAgICA8Q2Fyb3VzZWxOZXh0IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4XCIgLz5cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJDYXJvdXNlbCIsIkNhcm91c2VsQ29udGVudCIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsTmV4dCIsIkNhcm91c2VsUHJldmlvdXMiLCJJbWFnZSIsIlN0b3JpZXNTZWN0aW9uIiwic3RvcmllcyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInAiLCJmb250RmFtaWx5IiwiY29sb3IiLCJvcHRzIiwiYWxpZ24iLCJsb29wIiwibWFwIiwic3RvcnkiLCJzcmMiLCJpbWFnZSIsInVybCIsImFsdCIsInRpdGxlIiwiZmlsbCIsInNwYW4iLCJjYXRlZ29yeSIsImgzIiwic2hvcnREZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/stories/stories-section.tsx\n"));

/***/ })

});