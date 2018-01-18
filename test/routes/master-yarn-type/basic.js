var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/master-yarn-types",
    model: require("dl-models").garmentMasterPlan.MasterYarnType,
    validate: require("dl-models").validator.garmentMasterPlan.masterYarnType,
    util: require("dl-module").test.data.garmentMasterPlan.masterYarnType,
    keyword: "code"
});