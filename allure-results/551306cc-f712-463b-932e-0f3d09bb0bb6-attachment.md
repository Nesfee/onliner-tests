# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.js >> Форма входа >> ошибка валидации при пустых полях
- Location: tests\ui\login.spec.js:14:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/укажите (ник|пароль)/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText(/укажите (ник|пароль)/i).first() with timeout 10000ms
  - waiting for getByText(/укажите (ник|пароль)/i).first()

```

```yaml
- link:
  - /url: https://onliner.by
- text: Вход и регистрация По телефону e-mail, нику
- textbox "+375 29 123-45-67": "+375"
- text: Некорректный номер Отправим код подтверждения по СМС
- button "Войти"
- text: Вы можете ознакомиться с
- link "Пользовательским соглашением":
  - /url: https://blog.onliner.by/siterules
- text: © 2001–2026 Onlíner Мы используем cookie, чтобы сделать сайт удобнее Мы обрабатываем cookie, чтобы ваш веб-серфинг шел как по маслу, а скидки и рекомендации для вас были точно в яблочко! Хотите адаптировать настройки под себя? Настроить Cookies Отклонить Принять все cookie Ознакомиться со
- link "списком cookie-файлов":
  - /url: https://blog.onliner.by/spisok-fajlov-cookie
- text: и
- link "Политикой в отношении обработки cookie-файлов":
  - /url: https://blog.onliner.by/politika-v-otnoshenii-obrabotki-cookie-fajlov
```

# Test source

```ts
  1  | const { test, expect } = require('../../fixtures/fixtures');
  2  | 
  3  | test.describe('Форма входа', () => {
  4  |   test.beforeEach(async ({ loginPage }) => {
  5  |     await loginPage.openLogin();
  6  |   });
  7  | 
  8  |   test('элементы формы отображаются', async ({ loginPage }) => {
  9  |     await expect(loginPage.loginInput).toBeVisible();
  10 |     await expect(loginPage.passwordInput).toBeVisible();
  11 |     await expect(loginPage.submitBtn).toBeVisible();
  12 |   });
  13 | 
  14 |   test('ошибка валидации при пустых полях', async ({ loginPage, page }) => {
  15 |     await loginPage.submitBtn.click();
> 16 |     await expect(page.getByText(/укажите (ник|пароль)/i).first()).toBeVisible();
     |                                                                   ^ Error: expect(locator).toBeVisible() failed
  17 |   });
  18 | });
```