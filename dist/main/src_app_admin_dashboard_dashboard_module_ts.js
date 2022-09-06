"use strict";
(self["webpackChunkcliniva"] = self["webpackChunkcliniva"] || []).push([["src_app_admin_dashboard_dashboard_module_ts"],{

/***/ 30362:
/*!*************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _patient_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../patient/dashboard/dashboard.component */ 50838);
/* harmony import */ var _doctor_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../doctor/dashboard/dashboard.component */ 89261);
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../authentication/page404/page404.component */ 1991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ 13700);
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ 72756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: "",
        redirectTo: "main",
        pathMatch: "full",
    },
    {
        path: "main",
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent,
    },
    {
        path: "dashboard2",
        component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__.Dashboard2Component,
    },
    {
        path: "doctor-dashboard",
        component: _doctor_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
    },
    {
        path: "patient-dashboard",
        component: _patient_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
    },
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__.Page404Component },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 31052:
/*!*****************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 30362);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ 13700);
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ 72756);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);














class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__.ChartsModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.NgApexchartsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent, _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_2__.Dashboard2Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_7__.ChartsModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.NgApexchartsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 72756:
/*!********************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard2/dashboard2.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dashboard2Component": () => (/* binding */ Dashboard2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 61676);









const _c0 = function () { return []; };
class Dashboard2Component {
    // Doughnut chart end
    constructor() {
        //  color: ["#3FA7DC", "#F6A025", "#9BC311"],
        // Doughnut chart start
        this.doughnutChartLabels = ["India", "USA", "Itely"];
        this.doughnutChartData = [45, 25, 30];
        this.doughnutChartLegend = false;
        this.doughnutChartColors = [
            {
                backgroundColor: ["#735A84", "#E76412", "#9BC311"],
            },
        ];
        this.doughnutChartType = "doughnut";
        this.doughnutChartOptions = {
            animation: false,
            responsive: true,
        };
    }
    ngOnInit() {
        this.chart1();
    }
    chart1() {
        this.lineChartOptions = {
            series: [
                {
                    name: "Doctor 1",
                    data: [70, 200, 80, 180, 170, 105, 210],
                },
                {
                    name: "Doctor 2",
                    data: [80, 250, 30, 120, 260, 100, 180],
                },
                {
                    name: "Doctor 3",
                    data: [85, 130, 85, 225, 80, 190, 120],
                },
            ],
            chart: {
                height: 350,
                type: "line",
                foreColor: "#9aa0ac",
                dropShadow: {
                    enabled: true,
                    color: "#000",
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ["#A5A5A5", "#875692", "#4CB5AC"],
            stroke: {
                curve: "smooth",
            },
            grid: {
                row: {
                    colors: ["transparent", "transparent"],
                    opacity: 0.5,
                },
            },
            markers: {
                size: 3,
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                title: {
                    text: "Month",
                },
            },
            yaxis: {
                // opposite: true,
                title: {
                    text: "Patients",
                },
            },
            legend: {
                position: "top",
                horizontalAlign: "right",
                floating: true,
                offsetY: -25,
                offsetX: -5,
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
Dashboard2Component.ɵfac = function Dashboard2Component_Factory(t) { return new (t || Dashboard2Component)(); };
Dashboard2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Dashboard2Component, selectors: [["app-dashboard2"]], decls: 588, vars: 76, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row", "clearfix"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "recent-report__chart"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "tooltip", "markers", "grid", "yaxis", "title", "fill"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "plain-card"], [1, "card-inner"], [1, "tx-primary", "m-b-10"], [1, "row"], [1, "col-4"], [1, "font-14"], [1, "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "74", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-74"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-70"], ["role", "progressbar", "aria-valuenow", "55", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-55"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "col-md-12", "col-xl-4", "d-flex", "flex-column", "justify-content-center"], [1, "ml-xl-3", "m-b-20"], [1, "font-weight-light", "col-green"], [1, "mb-2"], [1, "ml-xl-3"], [1, "font-weight-light", "col-orange"], [1, "col-md-12", "col-xl-8"], [1, "col-md-6"], [1, "tx-primary", "m-b-30"], [1, "progress-list", "m-b-10"], [1, "details"], [1, "title"], [1, "status"], [1, "progress-xs", "not-rounded", "progress"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-warning", "width-per-40"], [1, "sr-only"], ["role", "progressbar", "aria-valuenow", "49", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-danger", "width-per-49"], ["role", "progressbar", "aria-valuenow", "65", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-blue", "width-per-65"], ["role", "progressbar", "aria-valuenow", "28", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", "width-per-28"], ["role", "progressbar", "aria-valuenow", "16", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-hotpink", "width-per-16"], [1, "col-md-6", "mt-3"], ["baseChart", "", 1, "chart", 3, "data", "labels", "options", "legend", "chartType", "colors"], [1, "country-chart"], [1, "d-flex", "justify-content-between", "mx-xl-5", "mt-3"], [1, "chart-note"], [1, "dot", "dot-product", "bg-green"], [1, "mb-0"], [1, "dot", "dot-product", "bg-orange"], [1, "dot", "dot-product", "bg-purple"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "list-body"], [1, "list-unstyled", "list-unstyled-noborder", 2, "position", "relative", "max-height", "330px", 3, "perfectScrollbar"], [1, "patient-group-list"], [1, "d-flex"], [1, "lbl-bedge", "l-bg-orange"], [1, "lbl-bedge-title"], [1, "group-details", "font-16"], [1, "ms-auto"], [1, "media-title", "text-muted", "mb-0", "font-14"], [1, "lbl-bedge", "l-bg-card1"], [1, "lbl-bedge", "l-bg-card2"], [1, "lbl-bedge", "l-bg-cyan"], [1, "lbl-bedge", "l-bg-red"], [1, "lbl-bedge", "l-bg-card3"], [1, "recent-comment", 2, "position", "relative", "max-height", "330px", 3, "perfectScrollbar"], [1, "notice-board"], [1, "table-img"], ["src", "assets/images/user/user6.jpg", "alt", "...", 1, "notice-object"], [1, "notice-body"], [1, "notice-heading", "col-green"], [1, "text-muted"], ["src", "assets/images/user/user4.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-indigo"], [1, "comment-date"], ["src", "assets/images/user/user3.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-danger", "col-cyan"], [1, "notice-board", "no-border"], ["src", "assets/images/user/user7.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-info", "col-orange"], ["src", "assets/images/user/user9.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-red"], [1, "sl-item", "sl-primary"], [1, "sl-content"], [1, "fa", "fa-user", "position-left"], [1, "sl-item", "sl-danger"], [1, "sl-item", "sl-success"], [1, "tableBody"], [1, "table-responsive"], ["id", "support_table", 1, "table", "display", "product-overview", "mb-30"], [1, "badge", "col-green"], ["mat-icon-button", "", 1, "tbl-action-btn"], [3, "icon"], [1, "badge", "col-red"], [1, "badge", "col-cyan"], [1, "badge", "col-purple"], [1, "badge", "col-blue"]], template: function Dashboard2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Doctor Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "apx-chart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Patient Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 15)(19, "div", 16)(20, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "105");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16)(25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "825");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16)(30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "22,067");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 18)(35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "74%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 12)(38, "div", 13)(39, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Income Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 15)(42, "div", 16)(43, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "$1,247");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 16)(48, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "$22,568");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 16)(53, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "$65,147");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 18)(58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 12)(61, "div", 13)(62, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Expense Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 15)(65, "div", 16)(66, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "$723");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 16)(71, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "$12,451");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 16)(76, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "$35,589");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 18)(81, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "55%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 15)(84, "div", 22)(85, "div", 6)(86, "div", 7)(87, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Recent Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "button", 23)(90, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "mat-menu", null, 24)(94, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 8)(101, "div", 15)(102, "div", 26)(103, "div", 27)(104, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "$1,17,289");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 30)(111, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "$1,17,289");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Total Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, " Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 32)(118, "div", 15)(119, "div", 33)(120, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Country Wise Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 35)(123, "div", 36)(124, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 38)(127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 39)(131, "div", 40)(132, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "40%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 35)(135, "div", 36)(136, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 38)(139, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "49");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 39)(143, "div", 42)(144, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "49%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 35)(147, "div", 36)(148, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "France");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 38)(151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "65");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 39)(155, "div", 43)(156, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "65%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 35)(159, "div", 36)(160, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 38)(163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 39)(167, "div", 44)(168, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "28%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 35)(171, "div", 36)(172, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 38)(175, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 39)(179, "div", 45)(180, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "16%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 46)(183, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "canvas", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 48)(186, "div", 49)(187, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](188, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "Itely");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "$30,289");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "div", 49)(194, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](195, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "$25,968");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 49)(201, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](202, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "$45,278");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 4)(208, "div", 55)(209, "div", 6)(210, "div", 7)(211, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "Patients Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "button", 23)(214, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "mat-menu", null, 24)(218, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "div", 56)(225, "ul", 57)(226, "li", 58)(227, "div", 59)(228, "div", 60)(229, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "Cholesterol");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "div", 63)(234, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, "5 Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "li", 58)(237, "div", 59)(238, "div", 65)(239, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "Diabetic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "div", 63)(244, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "14 Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "li", 58)(247, "div", 59)(248, "div", 66)(249, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "Low Blood Pressure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "div", 63)(254, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "10 Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "li", 58)(257, "div", 59)(258, "div", 67)(259, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, "Hypertension");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "div", 63)(264, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "21 Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "li", 58)(267, "div", 59)(268, "div", 68)(269, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, "Malaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "div", 63)(274, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](275, "11 Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "li", 58)(277, "div", 59)(278, "div", 69)(279, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](280, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](282, "Dental Problem");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "div", 63)(284, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, "17 Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "div", 55)(287, "div", 6)(288, "div", 7)(289, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](290, "Notice Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "button", 23)(292, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "mat-menu", null, 24)(296, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](297, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](299, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](300, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](301, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "div", 8)(303, "div", 70)(304, "div", 71)(305, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](306, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "div", 74)(308, "h6", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](309, "Dr. Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](310, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](311, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "small", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](313, "7 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "div", 71)(315, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](316, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "div", 74)(318, "h6", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](319, "Dr. Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](321, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](323, "1 hour ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "div", 71)(325, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](326, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "div", 74)(328, "h6", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, "Dr. Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](330, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](331, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](332, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](333, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](334, "div", 82)(335, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](336, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "div", 74)(338, "h6", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](339, "Dr. Ashton Cox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](340, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](341, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](342, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](343, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](344, "div", 71)(345, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](346, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "div", 74)(348, "h6", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](349, "Dr. Mark Hay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](351, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](352, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](353, "1 hour ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "div", 55)(355, "div", 6)(356, "div", 7)(357, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358, "Recent Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "button", 23)(360, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](361, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](362, "mat-menu", null, 24)(364, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](365, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](366, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](367, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](368, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](369, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](370, "div", 8)(371, "div", 87)(372, "div", 88)(373, "small", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](374, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](375, " 5 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](376, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](377, "Lorem ipsum dolor sit amet conse ctetur which ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](378, "div", 90)(379, "div", 88)(380, "small", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](381, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](382, " 8 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](383, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](384, "Lorem ipsum dolor sit ametcon the sectetur that ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](385, "div", 91)(386, "div", 88)(387, "small", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](388, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](389, " 10 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](390, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](391, "Lorem ipsum dolor sit amet cons the ecte tur and adip ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "div", 87)(393, "div", 88)(394, "small", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](395, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](396, " 5 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](397, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](398, "Lorem ipsum dolor sit amet conse ctetur which ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](399, "div", 4)(400, "div", 22)(401, "div", 6)(402, "div", 7)(403, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](404, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](405, "button", 23)(406, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](407, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](408, "mat-menu", null, 24)(410, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](411, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](413, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](415, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](416, "div", 92)(417, "div", 93)(418, "table", 94)(419, "thead")(420, "tr")(421, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](422, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](423, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](424, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](426, "Assigned Doctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](427, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](428, "Date Of Admit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](430, "Diseases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](431, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](432, "Room No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](433, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](434, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](435, "tbody")(436, "tr")(437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](438, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](439, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](440, "Jens Brincker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](442, "Dr.Kenny Josh");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](443, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](444, "27/05/2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](445, "td")(446, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](447, "Influenza");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](448, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](449, "101");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](450, "td")(451, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](452, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](453, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](454, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](455, "tr")(456, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](457, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](459, "Mark Hay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](461, "Dr. Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](463, "26/05/2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](464, "td")(465, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](466, "Cholera");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](468, "105");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](469, "td")(470, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](471, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](472, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](473, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](474, "tr")(475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](476, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](478, "Anthony Davie");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](480, "Dr.Cinnabar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](482, "21/05/2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](483, "td")(484, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](485, "Amoebiasis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](487, "106");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](488, "td")(489, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](490, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](491, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](492, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](493, "tr")(494, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](495, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](496, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](497, "David Perry");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](498, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](499, "Dr.Felix ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](500, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](501, "20/04/2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](502, "td")(503, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](504, "Jaundice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](506, "105");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](507, "td")(508, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](509, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](510, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](511, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](512, "tr")(513, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](514, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](515, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](516, "Anthony Davie");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](518, "Dr.Beryl");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](519, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](520, "24/05/2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](521, "td")(522, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](523, "Leptospirosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](524, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](525, "102");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](526, "td")(527, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](528, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](529, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](530, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](531, "tr")(532, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](533, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](534, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](535, "Alan Gilchrist");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](536, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](537, "Dr.Joshep");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](538, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](539, "22/05/2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](540, "td")(541, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](542, "Hepatitis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](543, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](544, "103");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](545, "td")(546, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](547, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](548, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](549, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](550, "tr")(551, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](552, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](553, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](554, "Mark Hay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](555, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](556, "Dr.Jayesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](557, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](558, "18/06/2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](559, "td")(560, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](561, "Typhoid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](562, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](563, "107");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](564, "td")(565, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](566, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](567, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](568, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](569, "tr")(570, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](571, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](573, "Sue Woodger");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](575, "Dr.Sharma");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](576, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](577, "17/05/2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](578, "td")(579, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](580, "Malaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](581, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](582, "108");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](583, "td")(584, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](585, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](586, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](587, "app-feather-icons", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Dashboad 2")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](75, _c0))("active_item", "Dashboad 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.lineChartOptions.series)("chart", ctx.lineChartOptions.chart)("xaxis", ctx.lineChartOptions.xaxis)("stroke", ctx.lineChartOptions.stroke)("colors", ctx.lineChartOptions.colors)("dataLabels", ctx.lineChartOptions.dataLabels)("legend", ctx.lineChartOptions.legend)("tooltip", ctx.lineChartOptions.tooltip)("markers", ctx.lineChartOptions.markers)("grid", ctx.lineChartOptions.grid)("yaxis", ctx.lineChartOptions.yaxis)("title", ctx.lineChartOptions.title)("fill", ctx.lineChartOptions.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("options", ctx.doughnutChartOptions)("legend", ctx.doughnutChartLegend)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, ng2_charts__WEBPACK_IMPORTED_MODULE_7__.BaseChartDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 13700:
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/main/main.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 61676);








const _c0 = function () { return []; };
class MainComponent {
    constructor() { }
    ngOnInit() {
        this.smallChart1();
        this.smallChart2();
        this.smallChart3();
        this.smallChart4();
        this.chart1();
        this.chart2();
    }
    smallChart1() {
        this.cardChart1 = {
            responsive: true,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
            title: {
                display: false,
            },
        };
        this.cardChart1Data = [
            {
                label: "New Patients",
                data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
                borderWidth: 4,
                pointStyle: "circle",
                pointRadius: 4,
                borderColor: "rgba(103,119,239,.7)",
                pointBackgroundColor: "rgba(103,119,239,.2)",
                backgroundColor: "rgba(103,119,239,.2)",
                pointBorderColor: "transparent",
            },
        ];
        this.cardChart1Label = [
            "16-07-2018",
            "17-07-2018",
            "18-07-2018",
            "19-07-2018",
            "20-07-2018",
            "21-07-2018",
            "22-07-2018",
            "23-07-2018",
            "24-07-2018",
            "25-07-2018",
            "26-07-2018",
            "27-07-2018",
            "28-07-2018",
            "29-07-2018",
            "30-07-2018",
            "31-07-2018",
        ];
    }
    smallChart2() {
        this.cardChart2 = {
            responsive: true,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
            title: {
                display: false,
            },
        };
        this.cardChart2Data = [
            {
                label: "New Patients",
                data: [50, 61, 80, 50, 40, 93, 63, 50, 62, 72, 52, 60, 41, 30, 45, 70],
                borderWidth: 4,
                pointStyle: "circle",
                pointRadius: 4,
                borderColor: "rgba(253,126,20,.7)",
                pointBackgroundColor: "rgba(253,126,20,.2)",
                backgroundColor: "rgba(253,126,20,.2)",
                pointBorderColor: "transparent",
            },
        ];
        this.cardChart2Label = [
            "16-07-2018",
            "17-07-2018",
            "18-07-2018",
            "19-07-2018",
            "20-07-2018",
            "21-07-2018",
            "22-07-2018",
            "23-07-2018",
            "24-07-2018",
            "25-07-2018",
            "26-07-2018",
            "27-07-2018",
            "28-07-2018",
            "29-07-2018",
            "30-07-2018",
            "31-07-2018",
        ];
    }
    smallChart3() {
        this.cardChart3 = {
            responsive: true,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
            title: {
                display: false,
            },
        };
        this.cardChart3Data = [
            {
                label: "New Patients",
                data: [52, 60, 41, 30, 45, 70, 50, 61, 80, 50, 72, 40, 93, 63, 50, 62],
                borderWidth: 4,
                pointStyle: "circle",
                pointRadius: 4,
                borderColor: "rgba(40,167,69,.7)",
                pointBackgroundColor: "rgba(40,167,69,.2)",
                backgroundColor: "rgba(40,167,69,.2)",
                pointBorderColor: "transparent",
            },
        ];
        this.cardChart3Label = [
            "16-07-2018",
            "17-07-2018",
            "18-07-2018",
            "19-07-2018",
            "20-07-2018",
            "21-07-2018",
            "22-07-2018",
            "23-07-2018",
            "24-07-2018",
            "25-07-2018",
            "26-07-2018",
            "27-07-2018",
            "28-07-2018",
            "29-07-2018",
            "30-07-2018",
            "31-07-2018",
        ];
    }
    smallChart4() {
        this.cardChart4 = {
            responsive: true,
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
            title: {
                display: false,
            },
        };
        this.cardChart4Data = [
            {
                label: "New Patients",
                data: [30, 45, 70, 40, 93, 63, 50, 62, 50, 61, 80, 50, 72, 52, 60, 41],
                borderWidth: 4,
                pointStyle: "circle",
                pointRadius: 4,
                borderColor: "rgba(0,123,255,.7)",
                pointBackgroundColor: "rgba(0,123,255,.2)",
                backgroundColor: "rgba(0,123,255,.2)",
                pointBorderColor: "transparent",
            },
        ];
        this.cardChart4Label = [
            "16-07-2018",
            "17-07-2018",
            "18-07-2018",
            "19-07-2018",
            "20-07-2018",
            "21-07-2018",
            "22-07-2018",
            "23-07-2018",
            "24-07-2018",
            "25-07-2018",
            "26-07-2018",
            "27-07-2018",
            "28-07-2018",
            "29-07-2018",
            "30-07-2018",
            "31-07-2018",
        ];
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
            colors: ["#407fe4", "#908e8e"],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19",
                    "2018-09-20",
                    "2018-09-21",
                    "2018-09-22",
                    "2018-09-23",
                    "2018-09-24",
                    "2018-09-25",
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
    chart2() {
        this.barChartOptions = {
            series: [
                {
                    name: "Colds and Flu",
                    data: [44, 55, 41, 67, 22, 43],
                },
                {
                    name: "Headaches",
                    data: [13, 23, 20, 8, 13, 27],
                },
                {
                    name: "Malaria",
                    data: [11, 17, 15, 15, 21, 14],
                },
                {
                    name: "Typhoid",
                    data: [21, 7, 25, 13, 22, 8],
                },
            ],
            chart: {
                type: "bar",
                height: 350,
                foreColor: "#9aa0ac",
                stacked: true,
                toolbar: {
                    show: false,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: "bottom",
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "30%",
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                type: "category",
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            },
            legend: {
                show: false,
            },
            fill: {
                opacity: 0.8,
                colors: ["#01B8AA", "#374649", "#FD625E", "#F2C80F"],
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
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 540, vars: 119, consts: [[1, "content"], [1, "content-block"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "card", "card-statistic-2"], [1, "clearfix"], [1, "card-icon", "shadow-primary", "bg-purple"], [1, "material-icons", "align-middle"], [1, "card-right"], [1, "float-end"], [1, "m-r-10", "m-l-10"], [1, "font-weight-bold", "float-end", "mb-0"], [1, "card-chart"], ["baseChart", "", 3, "chartType", "datasets", "labels", "options", "legend"], [1, "card-icon", "shadow-primary", "bg-orange"], [1, "card-icon", "shadow-primary", "bg-green"], [1, "card-icon", "shadow-primary", "bg-blue"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "body"], [3, "series", "chart", "xaxis", "yaxis", "colors", "stroke", "legend", "tooltip", "dataLabels"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "tooltip", "legend", "fill"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], ["href", "mailto:test@gmail.com"], [1, "badge", "col-red"], ["mat-icon-button", "", 1, "tbl-action-btn"], [3, "icon"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "badge", "col-green"], ["src", "assets/images/user/user3.jpg", "alt", ""], [1, "badge", "col-purple"], ["src", "assets/images/user/user4.jpg", "alt", ""], ["src", "assets/images/user/user5.jpg", "alt", ""], [1, "badge", "col-orange"], ["src", "assets/images/user/user8.jpg", "alt", ""], [1, "badge", "col-cyan"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "media-title"], [1, "text-job", "font-11"], [1, "badge", "badge-solid-green"], ["src", "assets/images/user/user6.jpg", "alt", ""], [1, "badge", "badge-solid-orange"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "table"], [1, "text-truncate"], [1, "list-unstyled", "order-list"], [1, "avatar", "avatar-sm"], ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge"], [1, "far", "fa-file-pdf", "tbl-pdf"], ["src", "assets/images/user/user7.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user8.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user5.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user9.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user4.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user6.jpg", "alt", "user", 1, "rounded-circle"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10)(12, "div")(13, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12)(16, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " 650");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "canvas", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5)(21, "div", 6)(22, "div", 7)(23, "div", 16)(24, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "content_cut");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10)(27, "div")(28, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 12)(31, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " 54");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "canvas", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 5)(36, "div", 6)(37, "div", 7)(38, "div", 17)(39, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "person_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 10)(42, "div")(43, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "New Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 12)(46, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " 129");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "canvas", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 5)(51, "div", 6)(52, "div", 7)(53, "div", 18)(54, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "local_activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 10)(57, "div")(58, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 12)(61, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " $20,125");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "canvas", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 4)(66, "div", 19)(67, "div", 20)(68, "div", 21)(69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " Hospital Survay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "button", 22)(72, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "mat-menu", null, 23)(76, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "apx-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 19)(85, "div", 20)(86, "div", 21)(87, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Common Diseases Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "button", 22)(90, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "mat-menu", null, 23)(94, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "apx-chart", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 28)(103, "div", 29)(104, "div", 20)(105, "div", 21)(106, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " Booked Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "button", 22)(109, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "mat-menu", null, 23)(113, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 30)(120, "div", 31)(121, "table", 32)(122, "thead")(123, "tr")(124, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Patient Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Assigned Doctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Diseases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "tbody")(137, "tr")(138, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "td")(143, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, " Dr.Jacob Ryan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "12/05/2016 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "td")(148, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Fever");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "td")(151, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "tr")(156, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "td")(161, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, " Dr.Rajesh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "12/05/2016 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "td")(166, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "Cholera");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "td")(169, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](172, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "tr")(174, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "td")(179, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, " Dr.Jay Soni ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "12/05/2016 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "td")(184, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "Jaundice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "td")(187, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](188, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "tr")(192, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Angelica Ramos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "td")(197, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, " Dr.John Deo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "12/05/2016 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "td")(202, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, "Typhod");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "td")(205, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](208, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "tr")(210, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](211, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, "Ashton Cox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "td")(215, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](216, " Dr.Megha Trivedi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "12/05/2016 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "td")(220, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "Maleria");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "td")(223, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](224, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "tr")(228, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](229, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "td")(233, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, " Dr.Sarah Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "12/05/2016 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "td")(238, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](239, "Infection");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "td")(241, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](242, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](244, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "div", 48)(246, "div", 20)(247, "div", 21)(248, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](249, " Doctors List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "button", 22)(251, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "mat-menu", null, 23)(255, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](256, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "div", 30)(262, "div", 31)(263, "table", 32)(264, "thead")(265, "tr")(266, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269, "Doctor Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](271, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "tbody")(273, "tr")(274, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](275, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "td")(277, "div", 49)(278, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, " Dr.Jay Soni ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](281, "(MBBS,MD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "td")(283, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](284, "Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "tr")(286, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](287, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "td")(289, "div", 49)(290, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](291, " Dr.Sarah Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "(BDS,MDS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "td")(295, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](296, "Absend");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "tr")(298, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](299, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](300, "td")(301, "div", 49)(302, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](303, "Dr.Megha Trivedi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](305, "(BHMS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](306, "td")(307, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](308, "Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "tr")(310, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](311, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "td")(313, "div", 49)(314, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](315, " Dr.John Deo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](317, "(MBBS,MS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "td")(319, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](320, "Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](321, "tr")(322, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](323, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "td")(325, "div", 49)(326, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](327, " Dr.Jacob Ryan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](328, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, "(MBBS,MD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](330, "td")(331, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, "Absend");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "tr")(334, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](335, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "td")(337, "div", 49)(338, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](339, " Dr.Jay Soni ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](340, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](341, "(MBBS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](342, "td")(343, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](344, "Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](345, "div", 28)(346, "div", 54)(347, "div", 20)(348, "div", 21)(349, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](350, " Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "button", 22)(352, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](353, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "mat-menu", null, 23)(356, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](357, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](358, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](359, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](360, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](361, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](362, "div", 30)(363, "div", 31)(364, "table", 55)(365, "thead")(366, "tr")(367, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](368, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](369, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](370, "Parient Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](371, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](372, "Doctors Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](373, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](374, "Date Of Operation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](375, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](376, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](377, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](378, "Diseases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](380, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](381, "tbody")(382, "tr")(383, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](384, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386, "John Deo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "td", 56)(388, "ul", 57)(389, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](390, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](391, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](392, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](393, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](394, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](395, "li", 58)(396, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](397, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](399, "12-08-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](400, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](401, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](402, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](403, "Cancer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](404, "td")(405, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](406, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](407, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](408, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](409, "tr")(410, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](411, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](413, "Jens Brincker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "td", 56)(415, "ul", 57)(416, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](417, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](418, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](419, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](420, "li", 58)(421, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](422, "+3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](423, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](424, "14-08-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](426, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](428, "Fracture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "td")(430, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](431, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](432, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](433, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "tr")(435, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](436, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](438, "Mark Hay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](439, "td", 56)(440, "ul", 57)(441, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](442, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](443, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](444, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](445, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](446, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](447, "li", 58)(448, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](449, "+2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](450, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](451, "18-08-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](452, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](453, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](455, "Cataract surgery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](456, "td")(457, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](458, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](459, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](460, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](461, "tr")(462, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](463, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](464, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](465, "Mark Hay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](466, "td", 56)(467, "ul", 57)(468, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](469, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](470, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](471, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](472, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](473, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](474, "li", 58)(475, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](476, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](478, "20-08-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](480, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](482, "Cholecystectomy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](483, "td")(484, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](485, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](486, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](487, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](488, "tr")(489, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](490, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](492, "Mark Hay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](493, "td", 56)(494, "ul", 57)(495, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](496, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](497, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](498, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](499, "li", 58)(500, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](501, "+3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](502, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](503, "22-08-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](504, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](505, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](506, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](507, "Hysterectomy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](508, "td")(509, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](510, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](511, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](512, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](513, "tr")(514, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](515, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](516, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](517, "Mark Hay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](518, "td", 56)(519, "ul", 57)(520, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](521, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](522, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](523, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](524, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](525, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](526, "li", 58)(527, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](528, "+2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](529, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](530, "28-08-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](531, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](532, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](533, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](534, "back pain surgery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](535, "td")(536, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](537, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](538, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](539, "app-feather-icons", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Dashboad")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](118, _c0))("active_item", "Dashboad");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("chartType", "line")("datasets", ctx.cardChart1Data)("labels", ctx.cardChart1Label)("options", ctx.cardChart1)("legend", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("chartType", "line")("datasets", ctx.cardChart2Data)("labels", ctx.cardChart2Label)("options", ctx.cardChart2)("legend", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("chartType", "line")("datasets", ctx.cardChart3Data)("labels", ctx.cardChart3Label)("options", ctx.cardChart3)("legend", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("chartType", "line")("datasets", ctx.cardChart4Data)("labels", ctx.cardChart4Label)("options", ctx.cardChart4)("legend", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.areaChartOptions.series)("chart", ctx.areaChartOptions.chart)("xaxis", ctx.areaChartOptions.xaxis)("yaxis", ctx.areaChartOptions.yaxis)("colors", ctx.areaChartOptions.colors)("stroke", ctx.areaChartOptions.stroke)("legend", ctx.areaChartOptions.legend)("tooltip", ctx.areaChartOptions.tooltip)("dataLabels", ctx.areaChartOptions.dataLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.barChartOptions.series)("chart", ctx.barChartOptions.chart)("dataLabels", ctx.barChartOptions.dataLabels)("plotOptions", ctx.barChartOptions.plotOptions)("responsive", ctx.barChartOptions.responsive)("xaxis", ctx.barChartOptions.xaxis)("tooltip", ctx.barChartOptions.tooltip)("legend", ctx.barChartOptions.legend)("fill", ctx.barChartOptions.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.ChartComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_dashboard_dashboard_module_ts.js.map