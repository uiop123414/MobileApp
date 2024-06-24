// e2e/firstTest.e2e.js
describe('Example', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    it('should show hello screen after tap', async () => {
      await element(by.text('Conitnue with Email')).tap();
      await expect(element(by.text('Sign in'))).toBeVisible();
    });
  });
  