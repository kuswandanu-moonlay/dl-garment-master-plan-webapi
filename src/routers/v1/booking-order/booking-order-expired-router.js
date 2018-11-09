var Router = require('restify-router').Router;
var db = require("../../../db");
var Manager = require("dl-module").managers.garmentMasterPlan.BookingOrderManager;
var resultFormatter = require("../../../result-formatter");

var passport = require('../../../passports/jwt-passport');
const apiVersion = '1.0.0';

function getRouter(){
    var defaultOrder = {
        "_updatedDate": -1
    };
    var defaultFilter = {};
    var defaultSelect = [];

    var router = new Router();
    router.post('/', passport, (request, response, next) => {
        db.get().then(db => {
            var manager = new Manager(db, request.user);

            var data = request.body;

            manager.expiredBooking(data)
                .then(docId => {
                    response.header('Location', `${docId.toString()}`);
                    var result = resultFormatter.ok(apiVersion, 201);
                    response.send(201, result);
                })
                .catch(e => {
                    var error = resultFormatter.fail(apiVersion, 400, e);
                    response.send(400, error);
                });

        });
    });

    router.get("/", passport, function(request, response, next) {
        var user = request.user;
        var query = request.query;
        var offset = request.headers["x-timezone-offset"] ? Number(request.headers["x-timezone-offset"]) : 0;

        query.filter = Object.assign({}, query.filter, typeof defaultFilter === "function" ? defaultFilter(request, response, next) : defaultFilter, query.filter);
        query.order = Object.assign({}, query.order, typeof defaultOrder === "function" ? defaultOrder(request, response, next) : defaultOrder, query.order);
        query.select = query.select ? query.select : typeof defaultSelect === "function" ? defaultSelect(request, response, next) : defaultSelect;

        db.get().then(db => {
            var manager = new Manager(db, user);
            manager.getAllExpiredBookingOrder(query, offset)
                .then(docs => {
                    var result = resultFormatter.ok(apiVersion, 200, docs.data);
                    delete docs.data;
                    result.info = docs;
                    return Promise.resolve(result);
                })
                .then((result) => {
                    response.send(result.statusCode, result);
                })
                .catch((e) => {
                    var statusCode = 500;
                    if (e.name === "ValidationError")
                        statusCode = 400;
                    var error = resultFormatter.fail(apiVersion, statusCode, e);
                    response.send(statusCode, error);
                });
        });
    });

    router.post('/delete-all', passport, (request, response, next) => {
        var user = request.user;
        var data = request.body;

        db.get().then(db => {
            var manager = new Manager(db, user);
            manager.deleteRemainingAllExpiredBookingOrder(data)
                .then((docIds) => {
                    var result = resultFormatter.ok(apiVersion, 204);
                    return Promise.resolve(result);
                })
                .then((result) => {
                    response.send(result.statusCode, result);
                })
                .catch((e) => {
                    var statusCode = 500;
                    if (e.name === "ValidationError")
                        statusCode = 400;
                    var error = resultFormatter.fail(apiVersion, statusCode, e);
                    response.send(statusCode, error);
                });
        });
    });

    return router;
}
module.exports = getRouter;
