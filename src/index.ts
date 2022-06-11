require('dotenv').config({ path: __dirname + '/.env' })

const cors = require('cors')
const express = require('express')
// const bodyParser = require('body-parser')
const app = express()

const PORT = 6500 || process.env.PORT

const { initRoutes } = require('../src/routes/index')
const { db } =require('../src/db/connection')

const startServer = async () => {
    db.connect(err => {
        if (err) {
            console.error('[ERROR] Connection error', err.stack)
        } else {
            console.log('[OK] DataBase connected!')

            app.use(cors({
                origin: ['http://3i-system.ru',
                    'http://134.0.115.249',
                    'http://localhost:8080',
                    'https://frontend-3i.herokuapp.com',
                    'http://localhost:6500'],
                credentials: true,
            }))

            // app.use(bodyParser.urlencoded({ extended: true })) // получение обекта req.body
            app.use(express.json())

            initRoutes(app)

            app.listen(PORT, () => {
                console.log(`[OK] ProfileService started PORT: ${PORT}`)
            })
        }
    })
}

startServer()

