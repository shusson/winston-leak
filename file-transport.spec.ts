import winston from "winston";

describe("winston", () => {
    it(`should not leak memory with a file transport`, async () => {
        const logger = winston.createLogger({
            transports: [
                new winston.transports.File({
                    filename: "logs/error.log",
                    level: "error"
                })
            ]
        });
        logger.close();
        expect(logger).toBeTruthy();
    });
});
