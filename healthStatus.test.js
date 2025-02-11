const healthStatus = require('./healthStatus');

test('should return "healthy" for health greater than 50', () => {
    expect(healthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('should return "wounded" for health between 15 and 50', () => {
    expect(healthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(healthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
});

test('should return "critical" for health less than 15', () => {
    expect(healthStatus({ name: 'Маг', health: 14 })).toBe('critical');
    expect(healthStatus({ name: 'Маг', health: 0 })).toBe('critical');
});