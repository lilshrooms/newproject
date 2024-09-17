"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/get-started/page",{

/***/ "(app-pages-browser)/./app/get-started/page.tsx":
/*!**********************************!*\
  !*** ./app/get-started/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetStartedPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeft_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-left.js\");\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/header/header */ \"(app-pages-browser)/./components/header/header.tsx\");\n/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/footer/footer */ \"(app-pages-browser)/./components/footer/footer.tsx\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/script */ \"(app-pages-browser)/./node_modules/next/dist/api/script.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction GetStartedPage() {\n    _s();\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [autocomplete, setAutocomplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadAutocomplete = ()=>{\n            if ( true && window.google && window.google.maps && window.google.maps.places) {\n                const autocomplete = new window.google.maps.places.Autocomplete(document.getElementById(\"address\"), {\n                    types: [\n                        \"address\"\n                    ]\n                });\n                setAutocomplete(autocomplete);\n                console.log(\"Autocomplete initialized\");\n            } else {\n                console.log(\"Google Maps API not fully loaded, retrying...\");\n                setTimeout(loadAutocomplete, 500);\n            }\n        };\n        loadAutocomplete();\n    }, []);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (autocomplete) {\n            const place = autocomplete.getPlace();\n            if (place && place.address_components) {\n                let street = \"\", city = \"\", state = \"\", zipCode = \"\";\n                for (const component of place.address_components){\n                    const componentType = component.types[0];\n                    switch(componentType){\n                        case \"street_number\":\n                            street = \"\".concat(component.long_name, \" \").concat(street);\n                            break;\n                        case \"route\":\n                            street += component.short_name;\n                            break;\n                        case \"locality\":\n                            city = component.long_name;\n                            break;\n                        case \"administrative_area_level_1\":\n                            state = component.short_name;\n                            break;\n                        case \"postal_code\":\n                            zipCode = component.long_name;\n                            break;\n                    }\n                }\n                const query = new URLSearchParams({\n                    street,\n                    city,\n                    state,\n                    zipCode\n                }).toString();\n                router.push(\"/property-details?\".concat(query));\n            } else {\n                console.log(\"No place selected\");\n            }\n        } else {\n            console.log(\"Autocomplete not initialized\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_script__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                src: \"https://maps.googleapis.com/maps/api/js?key=\".concat(\"AIzaSyCTeyTeeIoM-qDCe1Z8W7OK0qDVAJ8QzhU\", \"&libraries=places\"),\n                strategy: \"beforeInteractive\",\n                onLoad: ()=>console.log(\"Google Maps API script loaded\"),\n                onError: ()=>console.error(\"Error loading Google Maps API script\")\n            }, void 0, false, {\n                fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-1 container mx-auto px-4 py-8 mt-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/\",\n                        className: \"inline-flex items-center text-blue-600 hover:text-blue-800 mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                className: \"mr-2 h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            \"Back to Home\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold mb-6 text-gray-800 dark:text-white\",\n                        children: \"Get Started with HomeBase\"\n                    }, void 0, false, {\n                        fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"max-w-3xl mx-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                        id: \"address\",\n                                        name: \"address\",\n                                        value: address,\n                                        onChange: (e)=>setAddress(e.target.value),\n                                        placeholder: \"Enter your address\",\n                                        required: true,\n                                        className: \"flex-grow bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white h-12\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        type: \"submit\",\n                                        className: \"bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 h-12\",\n                                        children: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/professoroak/new-react/next-app2/app/get-started/page.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(GetStartedPage, \"CetXD9q/Mr/y9EKhn36P/2/oFQc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = GetStartedPage;\nvar _c;\n$RefreshReg$(_c, \"GetStartedPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nZXQtc3RhcnRlZC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUUyQztBQUNmO0FBQ2U7QUFDSTtBQUNGO0FBQ0w7QUFDTztBQUNBO0FBQ2Y7QUFRakIsU0FBU1U7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNhLGNBQWNDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBeUM7SUFFekYsTUFBTWUsU0FBU1osMERBQVNBO0lBRXhCRixnREFBU0EsQ0FBQztRQUNSLE1BQU1lLG1CQUFtQjtZQUN2QixJQUFJLEtBQWtCLElBQWVDLE9BQU9DLE1BQU0sSUFBSUQsT0FBT0MsTUFBTSxDQUFDQyxJQUFJLElBQUlGLE9BQU9DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLEVBQUU7Z0JBQ3JHLE1BQU1QLGVBQWUsSUFBSUksT0FBT0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUM3REMsU0FBU0MsY0FBYyxDQUFDLFlBQ3hCO29CQUFFQyxPQUFPO3dCQUFDO3FCQUFVO2dCQUFDO2dCQUV2QlYsZ0JBQWdCRDtnQkFDaEJZLFFBQVFDLEdBQUcsQ0FBQztZQUNkLE9BQU87Z0JBQ0xELFFBQVFDLEdBQUcsQ0FBQztnQkFDWkMsV0FBV1gsa0JBQWtCO1lBQy9CO1FBQ0Y7UUFFQUE7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNWSxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUlqQixjQUFjO1lBQ2hCLE1BQU1rQixRQUFRbEIsYUFBYW1CLFFBQVE7WUFDbkMsSUFBSUQsU0FBU0EsTUFBTUUsa0JBQWtCLEVBQUU7Z0JBQ3JDLElBQUlDLFNBQVMsSUFBSUMsT0FBTyxJQUFJQyxRQUFRLElBQUlDLFVBQVU7Z0JBQ2xELEtBQUssTUFBTUMsYUFBYVAsTUFBTUUsa0JBQWtCLENBQUU7b0JBQ2hELE1BQU1NLGdCQUFnQkQsVUFBVWQsS0FBSyxDQUFDLEVBQUU7b0JBQ3hDLE9BQVFlO3dCQUNOLEtBQUs7NEJBQ0hMLFNBQVMsR0FBMEJBLE9BQXZCSSxVQUFVRSxTQUFTLEVBQUMsS0FBVSxPQUFQTjs0QkFDbkM7d0JBQ0YsS0FBSzs0QkFDSEEsVUFBVUksVUFBVUcsVUFBVTs0QkFDOUI7d0JBQ0YsS0FBSzs0QkFDSE4sT0FBT0csVUFBVUUsU0FBUzs0QkFDMUI7d0JBQ0YsS0FBSzs0QkFDSEosUUFBUUUsVUFBVUcsVUFBVTs0QkFDNUI7d0JBQ0YsS0FBSzs0QkFDSEosVUFBVUMsVUFBVUUsU0FBUzs0QkFDN0I7b0JBQ0o7Z0JBQ0Y7Z0JBQ0EsTUFBTUUsUUFBUSxJQUFJQyxnQkFBZ0I7b0JBQUVUO29CQUFRQztvQkFBTUM7b0JBQU9DO2dCQUFRLEdBQUdPLFFBQVE7Z0JBQzVFN0IsT0FBTzhCLElBQUksQ0FBQyxxQkFBMkIsT0FBTkg7WUFDbkMsT0FBTztnQkFDTGpCLFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQ0YsT0FBTztZQUNMRCxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNvQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3RDLG1EQUFNQTtnQkFDTHVDLEtBQUssK0NBQTJGLE9BQTVDQyx5Q0FBMkMsRUFBQztnQkFDaEdHLFVBQVM7Z0JBQ1RDLFFBQVEsSUFBTTVCLFFBQVFDLEdBQUcsQ0FBQztnQkFDMUI0QixTQUFTLElBQU03QixRQUFROEIsS0FBSyxDQUFDOzs7Ozs7MEJBRS9CLDhEQUFDaEQsaUVBQU1BOzs7OzswQkFDUCw4REFBQ2lEO2dCQUFLVCxXQUFVOztrQ0FDZCw4REFBQzdDLGlEQUFJQTt3QkFBQ3VELE1BQUs7d0JBQUlWLFdBQVU7OzBDQUN2Qiw4REFBQ3pDLHFGQUFTQTtnQ0FBQ3lDLFdBQVU7Ozs7Ozs0QkFBaUI7Ozs7Ozs7a0NBR3hDLDhEQUFDVzt3QkFBR1gsV0FBVTtrQ0FBd0Q7Ozs7OztrQ0FDdEUsOERBQUNZO3dCQUFLQyxVQUFVaEM7d0JBQWNtQixXQUFVO2tDQUN0Qyw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQzFDLHVEQUFLQTt3Q0FDSndELElBQUc7d0NBQ0hDLE1BQUs7d0NBQ0xDLE9BQU9wRDt3Q0FDUHFELFVBQVUsQ0FBQ25DLElBQU1qQixXQUFXaUIsRUFBRW9DLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FDMUNHLGFBQVk7d0NBQ1pDLFFBQVE7d0NBQ1JwQixXQUFVOzs7Ozs7a0RBRVosOERBQUMzQyx5REFBTUE7d0NBQUNnRSxNQUFLO3dDQUFTckIsV0FBVTtrREFBdUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTy9LLDhEQUFDdkMsaUVBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBakd3QkU7O1FBSVBQLHNEQUFTQTs7O0tBSkZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9nZXQtc3RhcnRlZC9wYWdlLnRzeD82OWJiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQgeyBBcnJvd0xlZnQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyXCJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgZ29vZ2xlOiBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0U3RhcnRlZFBhZ2UoKSB7XG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbYXV0b2NvbXBsZXRlLCBzZXRBdXRvY29tcGxldGVdID0gdXNlU3RhdGU8Z29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZSB8IG51bGw+KG51bGwpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRBdXRvY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lmdvb2dsZSAmJiB3aW5kb3cuZ29vZ2xlLm1hcHMgJiYgd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcykge1xuICAgICAgICBjb25zdCBhdXRvY29tcGxldGUgPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MnKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxuICAgICAgICAgIHsgdHlwZXM6IFsnYWRkcmVzcyddIH1cbiAgICAgICAgKVxuICAgICAgICBzZXRBdXRvY29tcGxldGUoYXV0b2NvbXBsZXRlKVxuICAgICAgICBjb25zb2xlLmxvZygnQXV0b2NvbXBsZXRlIGluaXRpYWxpemVkJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGUgTWFwcyBBUEkgbm90IGZ1bGx5IGxvYWRlZCwgcmV0cnlpbmcuLi4nKVxuICAgICAgICBzZXRUaW1lb3V0KGxvYWRBdXRvY29tcGxldGUsIDUwMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkQXV0b2NvbXBsZXRlKClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChhdXRvY29tcGxldGUpIHtcbiAgICAgIGNvbnN0IHBsYWNlID0gYXV0b2NvbXBsZXRlLmdldFBsYWNlKClcbiAgICAgIGlmIChwbGFjZSAmJiBwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IHN0cmVldCA9ICcnLCBjaXR5ID0gJycsIHN0YXRlID0gJycsIHppcENvZGUgPSAnJ1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRUeXBlID0gY29tcG9uZW50LnR5cGVzWzBdXG4gICAgICAgICAgc3dpdGNoIChjb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzdHJlZXRfbnVtYmVyJzpcbiAgICAgICAgICAgICAgc3RyZWV0ID0gYCR7Y29tcG9uZW50LmxvbmdfbmFtZX0gJHtzdHJlZXR9YFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAncm91dGUnOlxuICAgICAgICAgICAgICBzdHJlZXQgKz0gY29tcG9uZW50LnNob3J0X25hbWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2xvY2FsaXR5JzpcbiAgICAgICAgICAgICAgY2l0eSA9IGNvbXBvbmVudC5sb25nX25hbWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2FkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMSc6XG4gICAgICAgICAgICAgIHN0YXRlID0gY29tcG9uZW50LnNob3J0X25hbWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3Bvc3RhbF9jb2RlJzpcbiAgICAgICAgICAgICAgemlwQ29kZSA9IGNvbXBvbmVudC5sb25nX25hbWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgc3RyZWV0LCBjaXR5LCBzdGF0ZSwgemlwQ29kZSB9KS50b1N0cmluZygpXG4gICAgICAgIHJvdXRlci5wdXNoKGAvcHJvcGVydHktZGV0YWlscz8ke3F1ZXJ5fWApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gcGxhY2Ugc2VsZWN0ZWQnKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnQXV0b2NvbXBsZXRlIG5vdCBpbml0aWFsaXplZCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibHVlLTUwIHRvLXdoaXRlIGRhcms6ZnJvbS1ncmF5LTkwMCBkYXJrOnRvLWdyYXktODAwXCI+XG4gICAgICA8U2NyaXB0XG4gICAgICAgIHNyYz17YGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUFQU19BUElfS0VZfSZsaWJyYXJpZXM9cGxhY2VzYH1cbiAgICAgICAgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiXG4gICAgICAgIG9uTG9hZD17KCkgPT4gY29uc29sZS5sb2coJ0dvb2dsZSBNYXBzIEFQSSBzY3JpcHQgbG9hZGVkJyl9XG4gICAgICAgIG9uRXJyb3I9eygpID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgR29vZ2xlIE1hcHMgQVBJIHNjcmlwdCcpfVxuICAgICAgLz5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBjb250YWluZXIgbXgtYXV0byBweC00IHB5LTggbXQtMjBcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ibHVlLTYwMCBob3Zlcjp0ZXh0LWJsdWUtODAwIG1iLTZcIj5cbiAgICAgICAgICA8QXJyb3dMZWZ0IGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XG4gICAgICAgICAgQmFjayB0byBIb21lXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi02IHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlXCI+R2V0IFN0YXJ0ZWQgd2l0aCBIb21lQmFzZTwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FkZHJlc3N9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTcwMCB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZSBoLTEyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC02IHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBoLTEyXCI+XG4gICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJCdXR0b24iLCJJbnB1dCIsIkFycm93TGVmdCIsIkhlYWRlciIsIkZvb3RlciIsIlNjcmlwdCIsIkdldFN0YXJ0ZWRQYWdlIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJhdXRvY29tcGxldGUiLCJzZXRBdXRvY29tcGxldGUiLCJyb3V0ZXIiLCJsb2FkQXV0b2NvbXBsZXRlIiwid2luZG93IiwiZ29vZ2xlIiwibWFwcyIsInBsYWNlcyIsIkF1dG9jb21wbGV0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0eXBlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGxhY2UiLCJnZXRQbGFjZSIsImFkZHJlc3NfY29tcG9uZW50cyIsInN0cmVldCIsImNpdHkiLCJzdGF0ZSIsInppcENvZGUiLCJjb21wb25lbnQiLCJjb21wb25lbnRUeXBlIiwibG9uZ19uYW1lIiwic2hvcnRfbmFtZSIsInF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0FQSV9LRVkiLCJzdHJhdGVneSIsIm9uTG9hZCIsIm9uRXJyb3IiLCJlcnJvciIsIm1haW4iLCJocmVmIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/get-started/page.tsx\n"));

/***/ })

});