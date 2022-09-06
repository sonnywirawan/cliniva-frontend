"use strict";
(self["webpackChunkcliniva"] = self["webpackChunkcliniva"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 13176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: "dashboard",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_angular_material_fesm2015-f24a61"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js-node_modules_ng-apexchart-31d6d1"), __webpack_require__.e("default-src_app_doctor_dashboard_dashboard_component_ts"), __webpack_require__.e("default-src_app_patient_dashboard_dashboard_component_ts"), __webpack_require__.e("src_app_admin_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 31052)).then((m) => m.DashboardModule),
    },
    {
        path: "appointment",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_angular_material_fesm2015-f24a61"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs-node_modules_angular_material_fesm2-7ac2cc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_select_mjs-node_modules_angular_material_fesm2-dbdaba"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_ngx-material-file-input_fesm2015_ngx-material-file-input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("src_app_admin_appointment_appointment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./appointment/appointment.module */ 73681)).then((m) => m.AppointmentModule),
    },
    {
        path: "doctors",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_angular_material_fesm2015-f24a61"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs-node_modules_angular_material_fesm2-7ac2cc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_select_mjs-node_modules_angular_material_fesm2-dbdaba"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_ngx-material-file-input_fesm2015_ngx-material-file-input_mjs"), __webpack_require__.e("src_app_admin_doctors_doctors_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./doctors/doctors.module */ 86512)).then((m) => m.DoctorsModule),
    },
    {
        path: "staff",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_angular_material_fesm2015-f24a61"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs-node_modules_angular_material_fesm2-7ac2cc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_select_mjs-node_modules_angular_material_fesm2-dbdaba"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_ngx-material-file-input_fesm2015_ngx-material-file-input_mjs"), __webpack_require__.e("src_app_admin_staff_staff_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./staff/staff.module */ 82318)).then((m) => m.StaffModule),
    },
    {
        path: "patients",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_angular_material_fesm2015-f24a61"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs-node_modules_angular_material_fesm2-7ac2cc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_select_mjs-node_modules_angular_material_fesm2-dbdaba"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_ngx-material-file-input_fesm2015_ngx-material-file-input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("src_app_admin_patients_patients_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./patients/patients.module */ 91496)).then((m) => m.PatientsModule),
    },
    {
        path: "billing",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_angular_material_fesm2015-f24a61"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs-node_modules_angular_material_fesm2-7ac2cc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_select_mjs-node_modules_angular_material_fesm2-dbdaba"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("src_app_admin_billing_billing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./billing/billing.module */ 85789)).then((m) => m.BillingModule),
    },
    {
        path: "room",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_angular_material_fesm2015-f24a61"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs-node_modules_angular_material_fesm2-7ac2cc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_select_mjs-node_modules_angular_material_fesm2-dbdaba"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("src_app_admin_room_room_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./room/room.module */ 97144)).then((m) => m.RoomModule),
    },
    {
        path: "departments",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_angular_material_fesm2015-f24a61"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs-node_modules_angular_material_fesm2-7ac2cc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_select_mjs-node_modules_angular_material_fesm2-dbdaba"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_ngx-material-file-input_fesm2015_ngx-material-file-input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("src_app_admin_departments_departments_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./departments/departments.module */ 55491)).then((m) => m.DepartmentsModule),
    },
    {
        path: "inventory",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_angular_material_fesm2015-f24a61"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs-node_modules_angular_material_fesm2-7ac2cc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_select_mjs-node_modules_angular_material_fesm2-dbdaba"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_ngx-material-file-input_fesm2015_ngx-material-file-input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("src_app_admin_inventory_inventory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inventory/inventory.module */ 87703)).then((m) => m.InventoryModule),
    },
    {
        path: "records",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_angular_material_fesm2015-f24a61"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs-node_modules_angular_material_fesm2-7ac2cc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_select_mjs-node_modules_angular_material_fesm2-dbdaba"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_ngx-material-file-input_fesm2015_ngx-material-file-input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("src_app_admin_records_records_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./records/records.module */ 50939)).then((m) => m.RecordsModule),
    },
    {
        path: "ambulance",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_angular_material_fesm2015-f24a61"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs-node_modules_angular_material_fesm2-7ac2cc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_select_mjs-node_modules_angular_material_fesm2-dbdaba"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_ngx-material-file-input_fesm2015_ngx-material-file-input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("src_app_admin_ambulance_ambulance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ambulance/ambulance.module */ 80387)).then((m) => m.AmbulanceModule),
    },
    {
        path: "pharmacy",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_angular_material_fesm2015-f24a61"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs-node_modules_angular_material_fesm2-7ac2cc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_select_mjs-node_modules_angular_material_fesm2-dbdaba"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_ngx-material-file-input_fesm2015_ngx-material-file-input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("src_app_admin_pharmacy_pharmacy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pharmacy/pharmacy.module */ 35518)).then((m) => m.PharmacyModule),
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 77095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 13176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map