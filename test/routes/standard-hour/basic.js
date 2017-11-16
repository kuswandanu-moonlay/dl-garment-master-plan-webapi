var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/standard-hours",
    model: require("dl-models").garmentMasterPlan.StandardHour,
    validate: require("dl-models").validator.garmentMasterPlan.standardHour,
    util: require("dl-module").test.data.garmentMasterPlan.standardHour,
    keyword: "code"
});