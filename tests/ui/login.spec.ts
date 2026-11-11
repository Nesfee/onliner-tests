import { test, expect } from '../../fixtures/fixtures';

test.describe('Форма входа', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.openLogin();
  });

  test('элементы формы отображаются', async ({ loginPage }) => {
    await expect(loginPage.loginInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.submitBtn).toBeVisible();
  });

  test('ошибка валидации при пустых полях', async ({ loginPage, page }) => {
    await loginPage.submitBtn.click();
    await expect(page.getByText(/укажите (ник|пароль)/i).first()).toBeVisible();
  });
});