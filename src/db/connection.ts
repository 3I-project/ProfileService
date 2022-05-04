import { Pool } from 'pg'

export const db = new Pool({
    user: process.env["DB_USERNAME"],
    host: process.env["DB_HOST"],
    database: process.env["DB_DATABASE"],
    password: process.env["DB_PASSWORD"],
    port: Number(process.env["DB_PORT"]),
    // ssl: {
    //     rejectUnauthorized: false
    // }
});

