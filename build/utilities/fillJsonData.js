"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fillJson(jsonObj) {
    jsonObj.forEach(function (obj, index, arr) {
        if (obj.phone === "") {
            jsonObj[index].phone = "missing data";
        }
    });
    return jsonObj;
}
exports.default = fillJson;
