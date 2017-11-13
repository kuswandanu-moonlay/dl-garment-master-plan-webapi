var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/styles",
    model: require("dl-models").garmentMasterPlan.Style,
    validate: require("dl-models").validator.garmentMasterPlan.style,
    util: require("dl-module").test.data.garmentMasterPlan.style,
    keyword: "code"
});