"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (res, error, errorRaw) => {
    console.log(errorRaw.message);
    const response = {
        status: 500,
        error: error,
        errorDetail: errorRaw.message
    };
    res.send(response);
};
exports.handleError = handleError;
