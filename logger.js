const { createLogger, format, transports, config } = require("winston");

const logger = createLogger({
  levels: config.syslog.levels,
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/console.log", level: "info" }),
  ],
});

module.exports = logger;
