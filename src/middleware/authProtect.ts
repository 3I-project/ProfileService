import {NextFunction, Request} from "express";
const axios = require('axios');

const verifyToken = async (token: string) => {
    try {
        const response = await axios.post('http://localhost:5500/apiV1/token/validate', {
            token
        })
        return response.data;
    } catch (e) {
      return {
          status: false,
          statusCode: 400,
          payload: {
              isValid: false
          }
      }
    }
}

module.exports.authProtect = async (req, res, next: NextFunction) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({
            status: false,
            payload: {
                message: 'Not authorization'
            }
        })
    }

    const response = await verifyToken(token);

    if (!response.status) {
        return res.status(400).json({
            status: false,
            payload: {
                message: 'Invalid token'
            }
        })
    }

    req.payload = response.payload.payload

    return next()
}
