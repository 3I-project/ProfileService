"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var pg_1 = require("pg");
exports.db = new pg_1.Pool({
    user: process.env["DB_USERNAME"],
    host: process.env["DB_HOST"],
    database: process.env["DB_DATABASE"],
    password: process.env["DB_PASSWORD"],
    port: Number(process.env["DB_PORT"]),
    // ssl: {
    //     rejectUnauthorized: false
    // }
});
//# sourceMappingURL=connection.js.map