var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/working-hours-standards",
    model: require("dl-models").garmentMasterPlan.WorkingHoursStandard,
    validate: require("dl-models").validator.garmentMasterPlan.workingHoursStandard,
    util: require("dl-module").test.data.garmentMasterPlan.workingHoursStandard,
    keyword: "code"
});
