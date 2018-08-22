import winston from "winston";

describe("winston", () => {
    it(`should not leak memory console transport`, async () => {
        expect(true).toBeTruthy();
        const logger = winston.createLogger({
            transports: [new winston.transports.Console()]
        });
        logger.close();
        expect(logger).toBeTruthy();
    });
});
