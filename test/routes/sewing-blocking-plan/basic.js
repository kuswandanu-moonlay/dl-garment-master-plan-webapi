var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/master-plans",
    model: require("dl-models").garmentMasterPlan.SewingBlockingPlan,
    validate: require("dl-models").validator.garmentMasterPlan.sewingBlockingPlan,
    util: require("dl-module").test.data.garmentMasterPlan.sewingBlockingPlan,
    keyword: "code"
});