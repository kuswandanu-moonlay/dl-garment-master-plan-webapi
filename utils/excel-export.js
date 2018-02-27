// Usage : https://github.com/kuswandanu/json2xls

var nodeExcelExport = require('node-excel-export');

function prepareData(data, config) {
    var conf = config || {};
    var dataArr = [].concat(data);
    var fields = conf.fields || Object.keys(dataArr[0] || {});
    if (!(fields instanceof Array)) {
        fields = Object.keys(fields);
    }
    var name = conf.name || 'Report';
    var heading = conf.heading || [];
    var merges = conf.merges || [];
    var specification = conf.specification || fields.reduce(function (o, key) {
        return Object.assign(o, {
            [key]: {
                displayName: key,
                headerStyle: { font: { bold: true } },
                width: 100
            }
        });
    }, {});
    return [
        {
            name: name,
            heading: heading,
            merges: merges,
            specification: specification,
            data: dataArr
        }
    ];
};

module.exports = function (req, res, next) {
    res.xlsx = function (fn, data, config) {
        var conf = prepareData(data, config);
        var xlsx = nodeExcelExport.buildExport(conf);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats');
        res.setHeader("Content-Disposition", "attachment; filename=" + fn);
        res.end(xlsx, 'binary');
    };
    next();
};
