import { test, expect } from '@fixtures/fixtures';
import type { Section } from '@pages/HomePage';

const sections: { name: Section; url: RegExp }[] = [
  { name: 'Каталог', url: /catalog\.onliner\.by/ },
  { name: 'Автобарахолка', url: /ab\.onliner\.by/ },
  { name: 'Барахолка', url: /baraholka\.onliner\.by/ },
  { name: 'Форум', url: /forum\.onliner\.by/ },
];

test.describe('Главная страница', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open('/');
  });

  test('заголовок содержит Onliner', async ({ page }) => {
    await expect(page).toHaveTitle(/onl[ií]ner/i);
  });

  test('логотип отображается', async ({ homePage }) => {
    await expect(homePage.logo).toBeVisible();
  });

  for (const { name, url } of sections) {
    test(`переход в раздел "${name}"`, async ({ homePage, page }) => {
      await homePage.goToSection(name);
      await expect(page).toHaveURL(url);
    });
  }
});