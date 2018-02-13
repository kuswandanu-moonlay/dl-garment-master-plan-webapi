//WEEKLY PLAN
var v1WeeklyPlanByUserRouter = require("../src/routers/v1/weekly-plan/weekly-plan-by-user-router");
var v1WeeklyPlanRouter = require("../src/routers/v1/weekly-plan/weekly-plan-router");
var v1WeeklyPlanByYearRouter = require("../src/routers/v1/weekly-plan/weekly-plan-by-year-router");
var v1WeeklyPlanYearRouter = require("../src/routers/v1/weekly-plan/weekly-plan-year-router");
var v1WeeklyPlanMonitoringRemainingEHRouter = require("../src/routers/v1/weekly-plan/weekly-plan-monitoring-remaining-eh-router");
var v1WeeklyPlanUnitRouter = require("../src/routers/v1/weekly-plan/weekly-plan-unit-router");

var v1WorkingHoursStandardRouter = require("../src/routers/v1/working-hours-standard/working-hours-standard-router");

var v1StyleRouter = require("../src/routers/v1/style/style-router");

var v1StandardHourRouter = require("../src/routers/v1/standard-hour/standard-hour-router");
var v1StandardHourByBuyerComodityRouter = require("../src/routers/v1/standard-hour/standard-hour-by-buyer-comodity-router");

var v1BookingOrderRouter = require("../src/routers/v1/booking-order/booking-order-router");
var v1BookingOrderCancelRouter = require("../src/routers/v1/booking-order/booking-order-cancel-router");
var v1BookingOrderMonitoringRouter = require("../src/routers/v1/booking-order/booking-order-monitoring-router");

var v1MasterPlanComodityRouter = require("../src/routers/v1/master-plan-comodity/master-plan-comodity-router");

var v1SewingBlockingPlanRouter = require("../src/routers/v1/sewing-blocking-plan/sewing-blocking-plan-router");
//var v1SewingBlockingPlanPreviewRouter = require("../src/routers/v1/sewing-blocking-plan/sewing-blocking-plan-preview-router");
var v1SewingBlockingPlanByBookingOrderNoRouter = require("../src/routers/v1/sewing-blocking-plan/sewing-blocking-plan-by-booking-order-router");

var v1GarmentSectionRouter = require("../src/routers/v1/garment-section/garment-section-router");

module.exports = function (server) {
    //WEEKLY PLAN
    v1WeeklyPlanByUserRouter().applyRoutes(server, "/weekly-plans/by-user");
    v1WeeklyPlanRouter().applyRoutes(server, "/weekly-plans");
    v1WeeklyPlanByYearRouter().applyRoutes(server, "/weekly-plans-by-year");
    v1WeeklyPlanYearRouter().applyRoutes(server, "/weekly-plan-years");
    v1WeeklyPlanMonitoringRemainingEHRouter().applyRoutes(server, "/weekly-plans-monitoring-remaining-eh")
    v1WeeklyPlanUnitRouter().applyRoutes(server,	"/weekly-plan-units");

    //WORKING HOURS STANDARD
    v1WorkingHoursStandardRouter().applyRoutes(server, "/working-hours-standards");

    //STYLE
    v1StyleRouter().applyRoutes(server, "/styles");

    //STANDARD HOURS
    v1StandardHourRouter().applyRoutes(server,	            "/standard-hours");
    v1StandardHourByBuyerComodityRouter().applyRoutes(server,	    "/standard-hours-by-buyer-comodity");

    //BOOKING ORDER
    v1BookingOrderRouter().applyRoutes(server, "/booking-orders");
    v1BookingOrderCancelRouter().applyRoutes(server, "/booking-orders-cancel");
    v1BookingOrderMonitoringRouter().applyRoutes(server, "/booking-orders-monitoring");

    //MASTER PLAN COMODITY
    v1MasterPlanComodityRouter().applyRoutes(server, "/master-plan-comodities");

    //MASTER PLAN
    v1SewingBlockingPlanRouter().applyRoutes(server,	            "/sewing-blocking-plans");
    //v1SewingBlockingPlanPreviewRouter().applyRoutes(server,	        "/sewing-blocking-plan-previews");
    v1SewingBlockingPlanByBookingOrderNoRouter().applyRoutes(server,                "/sewing-blocking-plans-by-booking-order");

    //GARMENT SECTION
    v1GarmentSectionRouter().applyRoutes(server, "/garment-sections");
}