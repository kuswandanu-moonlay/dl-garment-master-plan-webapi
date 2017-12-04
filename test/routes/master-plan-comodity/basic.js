var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/master-plan-comodities",
    model: require("dl-models").garmentMasterPlan.MasterPlanComodity,
    validate: require("dl-models").validator.garmentMasterPlan.masterPlanComodity,
    util: require("dl-module").test.data.garmentMasterPlan.masterPlanComodity,
    keyword: "code"
});