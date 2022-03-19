require('dotenv').config({ path: __dirname + '/.env' })

const express = require('express')
const app = express()

const PORT = 6500 || process.env.PORT

const { initRoutes } = require('../src/routes/index')
const { db } =require('../src/db/connection')

const startServer = async () => {
    await db.connect(err => {
        if (err) {
            console.error('[ERROR] Connection error', err.stack)
        } else {
            console.log('[OK] DataBase connected!')
        }
    })
    initRoutes(app)

    app.listen(PORT, () => {
        console.log('[OK] ProfileService started')
    })
}

startServer()

