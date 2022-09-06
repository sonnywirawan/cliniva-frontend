"use strict";
(self["webpackChunkcliniva"] = self["webpackChunkcliniva"] || []).push([["default-src_app_patient_dashboard_dashboard_component_ts"],{

/***/ 50838:
/*!**********************************************************!*\
  !*** ./src/app/patient/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 65590);






const _c0 = ["chart"];
const _c1 = function () { return []; };
class DashboardComponent {
    constructor() { }
    ngOnInit() {
        this.chart1();
        this.chart2();
        this.chart3();
        this.chart4();
    }
    chart1() {
        this.areaChartOptions = {
            series: [
                {
                    name: "New Patients",
                    data: [31, 40, 28, 51, 42, 85, 77],
                },
                {
                    name: "Old Patients",
                    data: [11, 32, 45, 32, 34, 52, 41],
                },
            ],
            chart: {
                height: 350,
                type: "area",
                toolbar: {
                    show: false,
                },
                foreColor: "#9aa0ac",
            },
            colors: ["#7D4988", "#66BB6A"],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
            legend: {
                show: true,
                position: "top",
                horizontalAlign: "center",
                offsetX: 0,
                offsetY: 0,
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };
    }
    chart2() {
        this.radialChartOptions = {
            series: [44, 55, 67],
            chart: {
                height: 265,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: "22px",
                        },
                        value: {
                            fontSize: "16px",
                        },
                        total: {
                            show: true,
                            label: "Total",
                            formatter: function (w) {
                                return "249";
                            },
                        },
                    },
                },
            },
            colors: ["#ffc107", "#3f51b5", "#8bc34a"],
            labels: ["Face TO Face", "E-Consult", "Available"],
        };
    }
    chart3() {
        this.restRateChartOptions = {
            series: [
                {
                    name: "Heart Rate",
                    data: [69, 75, 72, 69, 75, 80, 87],
                },
            ],
            chart: {
                height: 350,
                type: "line",
                dropShadow: {
                    enabled: true,
                    color: "#000",
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                },
                foreColor: "#9aa0ac",
                toolbar: {
                    show: false,
                },
            },
            colors: ["#FCB939"],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: "smooth",
            },
            markers: {
                size: 1,
            },
            xaxis: {
                categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                title: {
                    text: "Weekday",
                },
            },
            yaxis: {
                title: {
                    text: "Heart Rate",
                },
            },
            tooltip: {
                theme: "dark",
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
            },
        };
    }
    chart4() {
        this.performanceRateChartOptions = {
            series: [
                {
                    name: "Heart Rate",
                    data: [113, 120, 130, 120, 125, 119, 126],
                },
            ],
            chart: {
                height: 350,
                type: "line",
                dropShadow: {
                    enabled: true,
                    color: "#000",
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                },
                foreColor: "#9aa0ac",
                toolbar: {
                    show: false,
                },
            },
            colors: ["#545454"],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: "smooth",
            },
            markers: {
                size: 1,
            },
            xaxis: {
                categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                title: {
                    text: "Weekday",
                },
            },
            yaxis: {
                title: {
                    text: "Heart Rate",
                },
            },
            tooltip: {
                theme: "dark",
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
            },
        };
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 602, vars: 28, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "body"], [1, "row", "align-items-center"], [1, "col-md-4"], ["src", "assets/images/pages/welcome.png", "alt", "", 1, "w-100"], [1, "col-md-8"], [1, "font-20", "weight-500", "mb-2"], [1, "weight-600", "font-30", "col-blue", "pt-1"], [1, "font-18", "max-width-600"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "card", "card-statistic-2"], [1, "clearfix"], [1, "card-icon-only", "shadow-primary", "float-start"], ["src", "assets/images/pages/blood-pressure.png", "alt", ""], [1, "card-right"], [1, "float-end"], [1, "col-green"], [1, "font-weight-bold", "float-end", "mb-0"], [1, "card-content", "msl-4", "mb-3"], [1, "m-b-0", "d-flex"], [1, "material-icons", "col-green", "psr-2"], ["src", "assets/images/pages/heart-rate.png", "alt", ""], [1, "material-icons", "col-orange", "psr-2"], ["src", "assets/images/pages/glucose.png", "alt", ""], ["src", "assets/images/pages/blood-count.png", "alt", ""], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "card-body"], [1, "float-start"], [1, "text-muted"], [1, "text-muted", "font-12"], [1, "mb-5"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "markers", "grid", "yaxis", "tooltip", "title"], [1, "header"], [1, "table-responsive"], [1, "table", "table-borderless", "medicine-list"], [1, "fas", "fa-tablets", "pill-style"], [1, "text-end", "w-25"], [1, "badge-outline"], [1, "fas", "fa-capsules", "pill-style"], [1, "fas", "fa-syringe", "pill-style"], [1, "fas", "fa-pills", "pill-style"], [1, "text-center", "p-t-20"], ["mat-stroked-button", "", "color", "primary"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], ["dynamicHeight", ""], ["label", "Upcoming Appointment"], [1, "list-unstyled", "list-unstyled-border", "list-unstyled-noborder"], [1, "app-list"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig1.jpg", 1, "rounded-circle"], [1, "set-flex"], [1, "media-title", "font-16"], [1, "text-job", "text-muted", "mb-0"], [1, "media-title", "text-muted", "mb-0"], [1, "text-job", "font-16"], [1, "media-cta"], ["mat-icon-button", "", 1, "btn-tbl-confirm"], ["mat-icon-button", "", 1, "btn-tbl-reject"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig2.jpg", 1, "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig3.jpg", 1, "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig4.jpg", 1, "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig6.jpg", 1, "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig7.jpg", 1, "rounded-circle"], ["label", "Past Appointment"], [1, "list-unstyled", "user-progress", "list-unstyled-border", "list-unstyled-noborder"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig8.jpg", 1, "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig9.jpg", 1, "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig5.jpg", 1, "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig10.jpg", 1, "rounded-circle"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "report-list"], [1, "d-flex"], [1, "far", "fa-file-pdf", "file-style", "col-red", "font-20"], [1, "ms-auto"], [1, "far", "fa-trash-alt"], [1, "far", "fa-arrow-alt-circle-down"], [1, "far", "fa-file-word", "col-blue", "font-20", "file-style"], [1, "far", "fa-file-alt", "col-black", "font-20", "file-style"], [1, "far", "fa-file-archive", "col-purple", "font-20", "file-style"], [1, "far", "fa-file-pdf", "col-red", "font-20", "file-style"], [1, "far", "fa-file-image", "col-teal", "font-20", "file-style"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11)(12, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Welcome back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sarah Smith!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "We would like to take this opportunity to welcome you to our practice and to thank you for choosing our physicians to participate in your healthcare. We look forward to providing you with personalized, comprehensive health care focusing on wellness and prevention.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4)(19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20)(25, "div")(26, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Blood Pressure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 22)(29, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " 110/70");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24)(32, "p", 25)(33, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " 10% Higher Then Last Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 15)(37, "div", 16)(38, "div", 17)(39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20)(42, "div")(43, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Blood Pressure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 22)(46, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "650");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 24)(49, "p", 25)(50, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " 07% Less Then Last Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 15)(54, "div", 16)(55, "div", 17)(56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 20)(59, "div")(60, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Glucose Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 22)(63, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "88-75");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 24)(66, "p", 25)(67, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " 12% Higher Then Last Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 15)(71, "div", 16)(72, "div", 17)(73, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 20)(76, "div")(77, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Blood Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 22)(80, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "9,456/mL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 24)(83, "p", 25)(84, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " 22% Less Then Last Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 4)(88, "div", 31)(89, "div", 6)(90, "div", 32)(91, "div", 33)(92, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Resting Heart Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "72 bmp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "(Average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "apx-chart", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 31)(101, "div", 6)(102, "div", 32)(103, "div", 33)(104, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Performance Heart Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "129 bmp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "(Average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "apx-chart", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 31)(113, "div", 6)(114, "div", 38)(115, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Medications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 7)(118, "div", 39)(119, "table", 40)(120, "tr")(121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, " Econochlor (chloramphenicol-oral)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "td", 42)(125, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "1 - 0 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "tr")(128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " Desmopressin tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "td", 42)(132, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "1 - 1 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "tr")(135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, " Abciximab-injection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "td", 42)(139, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "1 Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "tr")(142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " Kevzara sarilumab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "td", 42)(146, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "0 - 0 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "tr")(149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, " Gentamicin-topical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "td", 42)(153, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "1 - 0 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "tr")(156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, " Paliperidone palmitate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "td", 42)(160, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "1 - 1 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "tr")(163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, " Sermorelin-injectable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td", 42)(167, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "1 Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 47)(170, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Report Adverse Effect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 49)(173, "div", 50)(174, "div", 6)(175, "div", 7)(176, "mat-tab-group", 51)(177, "mat-tab", 52)(178, "ul", 53)(179, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 56)(182, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Dr.Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Radiologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 56)(187, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "09:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 56)(192, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "CT scans");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 56)(197, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "+123 676545655");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 61)(202, "td")(203, "button", 62)(204, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "button", 63)(207, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 56)(212, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Dr.John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Cardiologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 56)(217, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "13 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "11:00-11:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 56)(222, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "heart checkup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 56)(227, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "+123 434656764");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 61)(232, "td")(233, "button", 62)(234, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "button", 63)(237, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 56)(242, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Dr.Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Otolaryngologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 56)(247, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "09:15-10:15 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 56)(252, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Diseases Of The Ear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 56)(257, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "+123 45345673");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 61)(262, "td")(263, "button", 62)(264, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "button", 63)(267, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 56)(272, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "Dr.Angelica Ramos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Dentist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 56)(277, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "11:00-12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 56)(282, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "Root Canal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 56)(287, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "+123 87654533");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 61)(292, "td")(293, "button", 62)(294, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "button", 63)(297, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](300, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 56)(302, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "Dr.Jens Brincker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "Endocrinologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 56)(307, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "23 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "04:00-05:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 56)(312, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "Diabetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 56)(317, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "+123 45678345");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 61)(322, "td")(323, "button", 62)(324, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "button", 63)(327, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "div", 56)(332, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Dr.Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Otolaryngologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 56)(337, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "09:15-10:15 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 56)(342, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "Diseases Of The Ear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 56)(347, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "+123 45345673");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 61)(352, "td")(353, "button", 62)(354, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "button", 63)(357, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "mat-tab", 69)(360, "ul", 70)(361, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](362, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "div", 56)(364, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, "Dr.Jens Brincker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, "Endocrinologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 56)(369, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "23 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "04:00-05:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 56)(374, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "Diabetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 56)(379, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, "+123 45678345");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "div", 61)(384, "td")(385, "button", 62)(386, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "button", 63)(389, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](392, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "div", 56)(394, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "Dr.John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "Cardiologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "div", 56)(399, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "13 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "11:00-11:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "div", 56)(404, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, "heart checkup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "div", 56)(409, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, "+123 434656764");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "div", 61)(414, "td")(415, "button", 62)(416, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "button", 63)(419, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](422, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "div", 56)(424, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "Dr.Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, "Radiologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "div", 56)(429, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](432, "09:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "div", 56)(434, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](435, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](437, "CT scans");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](438, "div", 56)(439, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](440, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "+123 676545655");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "div", 61)(444, "td")(445, "button", 62)(446, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "button", 63)(449, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](450, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](452, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "div", 56)(454, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](455, "Dr.Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](457, "Otolaryngologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "div", 56)(459, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "09:15-10:15 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "div", 56)(464, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Diseases Of The Ear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "div", 56)(469, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](470, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](471, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](472, "+123 45345673");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](473, "div", 61)(474, "td")(475, "button", 62)(476, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](477, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](478, "button", 63)(479, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](480, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](482, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "div", 56)(484, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, "Dr.Angelica Ramos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](487, "Dentist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "div", 56)(489, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](490, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "11:00-12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "div", 56)(494, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](495, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](496, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](497, "Root Canal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "div", 56)(499, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](500, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](502, "+123 87654533");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](503, "div", 61)(504, "td")(505, "button", 62)(506, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "button", 63)(509, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](510, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](512, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "div", 56)(514, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](515, "Dr.John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](517, "Cardiologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](518, "div", 56)(519, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](520, "13 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](522, "11:00-11:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "div", 56)(524, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](525, "Treatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](527, "heart checkup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "div", 56)(529, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](530, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](532, "+123 434656764");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "div", 61)(534, "td")(535, "button", 62)(536, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](537, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](538, "button", 63)(539, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](540, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "div", 75)(542, "div", 6)(543, "div", 38)(544, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](545, "Reports/Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](546, "div", 7)(547, "ul", 53)(548, "li", 76)(549, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](550, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](551, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](552, "Blood Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "div", 79)(554, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](555, "i", 80)(556, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "li", 76)(558, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](559, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](560, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](561, "Mediclaim Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "div", 79)(563, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](564, "i", 80)(565, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](566, "li", 76)(567, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](568, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](569, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](570, "Doctor Prescription");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "div", 79)(572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](573, "i", 80)(574, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](575, "li", 76)(576, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](577, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](578, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](579, "X-Ray Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](580, "div", 79)(581, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](582, "i", 80)(583, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](584, "li", 76)(585, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](586, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](588, "Urine Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](589, "div", 79)(590, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](591, "i", 80)(592, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](593, "li", 76)(594, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](595, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](596, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](597, "Scanned Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](598, "div", 79)(599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](600, "i", 80)(601, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Dashboard")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c1))("active_item", "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.restRateChartOptions.series)("chart", ctx.restRateChartOptions.chart)("xaxis", ctx.restRateChartOptions.xaxis)("stroke", ctx.restRateChartOptions.stroke)("colors", ctx.restRateChartOptions.colors)("dataLabels", ctx.restRateChartOptions.dataLabels)("legend", ctx.restRateChartOptions.legend)("markers", ctx.restRateChartOptions.markers)("grid", ctx.restRateChartOptions.grid)("yaxis", ctx.restRateChartOptions.yaxis)("tooltip", ctx.restRateChartOptions.tooltip)("title", ctx.restRateChartOptions.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.performanceRateChartOptions.series)("chart", ctx.performanceRateChartOptions.chart)("xaxis", ctx.performanceRateChartOptions.xaxis)("stroke", ctx.performanceRateChartOptions.stroke)("colors", ctx.performanceRateChartOptions.colors)("dataLabels", ctx.performanceRateChartOptions.dataLabels)("legend", ctx.performanceRateChartOptions.legend)("markers", ctx.performanceRateChartOptions.markers)("grid", ctx.performanceRateChartOptions.grid)("yaxis", ctx.performanceRateChartOptions.yaxis)("tooltip", ctx.performanceRateChartOptions.tooltip)("title", ctx.performanceRateChartOptions.title);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_patient_dashboard_dashboard_component_ts.js.map