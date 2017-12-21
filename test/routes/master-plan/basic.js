var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/master-plans",
    model: require("dl-models").garmentMasterPlan.MasterPlan,
    validate: require("dl-models").validator.garmentMasterPlan.masterPlan,
    util: require("dl-module").test.data.garmentMasterPlan.masterPlan,
    keyword: "code"
});