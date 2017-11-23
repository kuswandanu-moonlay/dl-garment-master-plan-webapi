//WEEKLY PLAN
var v1WeeklyPlanByUserRouter = require("../src/routers/v1/weekly-plan/weekly-plan-by-user-router");
var v1WeeklyPlanRouter = require("../src/routers/v1/weekly-plan/weekly-plan-router");
var v1WorkingHoursStandardRouter = require("../src/routers/v1/working-hours-standard/working-hours-standard-router");
var v1StyleRouter = require("../src/routers/v1/style/style-router");
var v1StandardHourRouter = require("../src/routers/v1/standard-hour/standard-hour-router");
module.exports = function (server) {
    //WEEKLY PLAN
    v1WeeklyPlanByUserRouter().applyRoutes(server,  "/weekly-plans/by-user");
    v1WeeklyPlanRouter().applyRoutes(server,        "/weekly-plans");

    //WORKING HOURS STANDARD
    v1WorkingHoursStandardRouter().applyRoutes(server,        "/working-hours-standards");

    //STYLE
    v1StyleRouter().applyRoutes(server,        "/styles");
    
    //STYLE
    v1StandardHourRouter().applyRoutes(server,        "/standard-hours");

}