var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/weekly-plans",
    model: require("dl-models").garmentMasterPlan.WeeklyPlan,
    validate: require("dl-models").validator.garmentMasterPlan.weeklyPlan,
    util: require("dl-module").test.data.garmentMasterPlan.weeklyPlan,
    keyword: "code"
});
