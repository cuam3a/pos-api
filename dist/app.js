"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database");
const routers_1 = require("./routers");
const init_1 = require("./utils/init");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
(0, database_1.connectDB)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routers_1.router);
(0, init_1.initConfig)();
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
module.exports = app;