var basicTest = require("../basic-test-factory");
basicTest({
    uri: "/garment-sections",
    model: require("dl-models").garmentMasterPlan.GarmentSection,
    validate: require("dl-models").validator.garmentMasterPlan.garmentSection,
    util: require("dl-module").test.data.garmentMasterPlan.garmentSection,
    keyword: "code"
});