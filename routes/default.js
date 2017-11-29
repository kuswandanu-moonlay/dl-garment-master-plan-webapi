//WEEKLY PLAN
var v1WeeklyPlanByUserRouter = require("../src/routers/v1/weekly-plan/weekly-plan-by-user-router");
var v1WeeklyPlanRouter = require("../src/routers/v1/weekly-plan/weekly-plan-router");
var v1WeeklyPlanByYearRouter = require("../src/routers/v1/weekly-plan/weekly-plan-by-year-router");

var v1WorkingHoursStandardRouter = require("../src/routers/v1/working-hours-standard/working-hours-standard-router");

var v1StyleRouter = require("../src/routers/v1/style/style-router");

var v1StandardHourRouter = require("../src/routers/v1/standard-hour/standard-hour-router");
var v1StandardHourByStyleRouter = require("../src/routers/v1/standard-hour/standard-hour-by-style-router");

var v1BookingOrderRouter = require("../src/routers/v1/booking-order/booking-order-router");
var v1BookingOrderPostRouter = require("../src/routers/v1/booking-order/booking-order-post-router");

module.exports = function (server) {
    //WEEKLY PLAN
    v1WeeklyPlanByUserRouter().applyRoutes(server,  "/weekly-plans/by-user");
    v1WeeklyPlanRouter().applyRoutes(server,        "/weekly-plans");
    v1WeeklyPlanByYearRouter().applyRoutes(server,  "/weekly-plans-by-year");

    //WORKING HOURS STANDARD
    v1WorkingHoursStandardRouter().applyRoutes(server,        "/working-hours-standards");

    //STYLE
    v1StyleRouter().applyRoutes(server,        "/styles");
    
    //STANDARD HOURS
    v1StandardHourRouter().applyRoutes(server,        "/standard-hours");
    v1StandardHourByStyleRouter().applyRoutes(server,        "/standard-hours-by-style");

    //BOOKING ORDER
    v1BookingOrderRouter().applyRoutes(server,                       "/booking-orders");
    v1BookingOrderPostRouter().applyRoutes(server,                   "/booking-orders-post");
}