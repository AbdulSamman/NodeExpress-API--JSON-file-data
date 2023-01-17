import fs from "fs";
const logPathAndFileName = "./src/logs/log.txt";
const logger = (req, res, next) => {
    const date = new Date();
    const logLine = `${date.toISOString()} - ${req.originalUrl}`;
    fs.appendFileSync(logPathAndFileName, logLine + "\n");
    next();
};
export default logger;
//# sourceMappingURL=logger.js.map