var Router = require('restify-router').Router;
var db = require("../../../db");
var Manager = require("dl-module").managers.garmentMasterPlan.SewingBlockingPlanManager;
var resultFormatter = require("../../../result-formatter");
var passport = require('../../../passports/jwt-passport');
const apiVersion = '1.0.0';

function getRouter() {
    var router = new Router();
    router.get("/", passport, function(request, response, next) {
        db.get().then(db => {
                var manager = new Manager(db, request.user);
                var sorting = {
                    "_updatedDate": -1
                };
                var month = request.queryInfo.month;
                var year = request.queryInfo.year;
                manager.getPreview(month, year)
                    .then(docs => {
                        var result = resultFormatter.ok(apiVersion, 200, docs);
                        response.send(200, result);
                    })
                    .catch(e => {
                        response.send(500, "Failed to fetch data.");
                    });
            })
            .catch(e => {
                var error = resultFormatter.fail(apiVersion, 400, e);
                response.send(400, error);
            });
    });
    return router;
}
module.exports = getRouter;