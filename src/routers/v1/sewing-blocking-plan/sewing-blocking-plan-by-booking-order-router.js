var Router = require('restify-router').Router;
var db = require("../../../db");
var Manager = require("dl-module").managers.garmentMasterPlan.SewingBlockingPlanManager;
var resultFormatter = require("../../../result-formatter");
var passport = require('../../../passports/jwt-passport');
const apiVersion = '1.0.0';


function getRouter() {
    var router = new Router();
    router.get("/:bookingOrderNo", passport, (request, response, next) => {
        db.get().then((db) => {
            var manager = new Manager(db, request.user);
            var bookingOrderNo = request.params.bookingOrderNo;

            var query = request.queryInfo;

            var filter = {
                _deleted: false,
                bookingOrderNo: bookingOrderNo 
            };

            query.filter = filter;

            manager.getSingleByQueryOrDefault(query.filter, query.select)
                .then((docs) => {
                    var result = resultFormatter.ok(apiVersion, 200, docs);
                    result.info = docs;
                    response.send(200, result);
                })
                .catch(e => {
                    var result = resultFormatter.ok(apiVersion, 200, e);
                    result.info = e;
                    response.send(200, result);
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