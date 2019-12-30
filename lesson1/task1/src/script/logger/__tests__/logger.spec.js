import { createLogger } from '../logger';

it ('should return stored logs', () => {
    const logger = createLogger('Denis');
    expect(logger.getLogs()).toEqual([]);
});

it ('should return logs message', () => {
    const logger = createLogger('Denis');
    logger.log('login success');
    expect(logger.getLogs()).toEqual(['log - Denis - login success']);
});

it ('should save errors', () => {
    const logger = createLogger('Denis');
    logger.error('login faild');

    expect(logger.getLogs()).toEqual(['error - Denis - login faild']);
})