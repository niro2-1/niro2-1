// Test cases for 500 error

describe('API Error Handling', () => {
    it('should return 500 error for invalid request', async () => {
        const response = await apiCallWithInvalidRequest();
        expect(response.status).toBe(500);
    });

    it('should log error details on 500 error', async () => {
        const response = await apiCallWithInvalidRequest();
        expect(logError).toHaveBeenCalledWith(expect.any(Error));
    });
});