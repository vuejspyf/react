"use strict";
exports.id = 454;
exports.ids = [454];
exports.modules = {

/***/ 5422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(634);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2890);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const SingleBlog = ({ blog  })=>{
    const { title , image , paragraph , author , publishDate  } = blog;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark",
            "data-wow-delay": ".1s",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    className: "relative block h-[220px] w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: image,
                        alt: "image",
                        fill: true
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                className: "mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl",
                                children: title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10",
                            children: paragraph
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mr-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "relative h-10 w-10 overflow-hidden rounded-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    src: author.image,
                                                    alt: "author",
                                                    fill: true
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                    className: "mb-1 text-sm font-medium text-dark dark:text-white",
                                                    children: [
                                                        "By ",
                                                        author.name
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs text-body-color",
                                                    children: author.designation
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "inline-block",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "mb-1 text-sm font-medium text-dark dark:text-white",
                                            children: "Date"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-xs text-body-color",
                                            children: publishDate
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleBlog);


/***/ }),

/***/ 7852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const blogData = [
    {
        id: 1,
        title: "The Wells-Riley Equation",
        paragraph: "The Delineo simulation uses the Wells-Riley Equation to simulate how a disease will spread in any given facility. The equation and the simulation focus on points of interest (POI's), which include facilities such as grocery stores, places of worship, and other types of gathering areas where a person might get infected. ",
        image: "/images/blog/blogPic1.jpg",
        author: {
            name: "First Author",
            image: "/images/blog/author-01.png",
            designation: "Graphic Designer"
        },
        publishDate: "2025"
    },
    {
        id: 2,
        title: "Machine Learning Explainer",
        paragraph: "Our model uses the Iterative Proportional Fitting Procedure (IPFP), a classical algorithm in computer science that performs data scaling based on current datasets, to create a mobility network containing information about the number of individuals (agents) traveling from each Census Block Group (CBG) to Point of Interest (POI).",
        image: "/images/blog/blogPic2.png",
        author: {
            name: "Second Author",
            image: "/images/blog/author-02.png",
            designation: "Content Writer"
        },
        publishDate: "2025"
    },
    {
        id: 3,
        title: "Simulation Development",
        paragraph: "Currently, the simulation team is working on the severity risk matrix, which is how they decide whether an agent is asymptomatic, mild, severe, or critical after their incubation period is over after exposure. The figure below illustrates the different stages before reaching the severity risk matrix determination.",
        image: "/images/blog/blogPic3.png",
        author: {
            name: "Third Author",
            image: "/images/blog/author-03.png",
            designation: "Graphic Designer"
        },
        publishDate: "2025"
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogData);


/***/ }),

/***/ 3372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("F:\\project\\drawImage\\Fullstack-main\\old_code\\node_modules\\next\\dist\\client\\image.js");
 //# sourceMappingURL=image.js.map


/***/ }),

/***/ 634:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(3372);


/***/ })

};
;