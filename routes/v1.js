//WEEKLY PLAN
var v1WeeklyPlanByUserRouter = require("../src/routers/v1/weekly-plan/weekly-plan-by-user-router");
var v1WeeklyPlanRouter = require("../src/routers/v1/weekly-plan/weekly-plan-router");
var v1WorkingHoursStandardRouter = require("../src/routers/v1/working-hours-standard/working-hours-standard-router");
module.exports = function (server) {
    //WEEKLY PLAN
    v1WeeklyPlanByUserRouter().applyRoutes(server,            "/v1/weekly-plans/by-user");
    v1WeeklyPlanRouter().applyRoutes(server,                  "/v1/weekly-plans");

    //WORKING HOURS STANDARD
    v1WorkingHoursStandardRouter().applyRoutes(server,        "/v1/working-hours-standards");
}