"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./app/_lib/auth.js":
/*!**************************!*\
  !*** ./app/_lib/auth.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(middleware)/./node_modules/next-auth/providers/google.js\");\n\n\nconst authConfig = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.AUTH_GOOGLE_ID,\n            clientSecret: process.env.AUTH_GOOGLE_SECRET\n        })\n    ],\n    callbacks: {\n        authorized ({ auth, request }) {\n            return !!auth?.user;\n        }\n    }\n};\nconst { handlers: { GET, POST }, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(authConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXBwL19saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNlO0FBRWhELE1BQU1FLGFBQWE7SUFDakJDLFdBQVc7UUFDVEYsc0VBQU1BLENBQUM7WUFDTEcsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO1lBQ3BDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGtCQUFrQjtRQUM5QztLQUNEO0lBQ0RDLFdBQVc7UUFDVEMsWUFBVyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtZQUMxQixPQUFPLENBQUMsQ0FBQ0QsTUFBTUU7UUFDakI7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUNYQyxVQUFVLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFLEVBQ3ZCTCxJQUFJLEVBQ0wsR0FBR1oscURBQVFBLENBQUNFLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19saWIvYXV0aC5qcz9kNTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBHb29nbGUgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcblxyXG5jb25zdCBhdXRoQ29uZmlnID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFVVEhfR09PR0xFX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEhfR09PR0xFX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhdXRob3JpemVkKHsgYXV0aCwgcmVxdWVzdCB9KSB7XHJcbiAgICAgIHJldHVybiAhIWF1dGg/LnVzZXI7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gIGhhbmRsZXJzOiB7IEdFVCwgUE9TVCB9LFxyXG4gIGF1dGgsXHJcbn0gPSBOZXh0QXV0aChhdXRoQ29uZmlnKTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlIiwiYXV0aENvbmZpZyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkFVVEhfR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiQVVUSF9HT09HTEVfU0VDUkVUIiwiY2FsbGJhY2tzIiwiYXV0aG9yaXplZCIsImF1dGgiLCJyZXF1ZXN0IiwidXNlciIsImhhbmRsZXJzIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./app/_lib/auth.js\n");

/***/ })

});