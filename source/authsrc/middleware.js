const { combine, timestamp, json, printf } = require("winston");
const winston = require("winston")
const timestampFormat = 'MMM-DD-YYYY HH:mm:ss';


let today = new Date().toISOString().split('T')[0]
const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
            (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: `logs/${today}-applog.log`
        })
    ]
})

module.exports = {
    logger
}