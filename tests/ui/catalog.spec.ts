import { test, expect } from '../../fixtures/fixtures';

test.describe('Каталог', () => {
  test('категория "Мобильные телефоны" открывается', async ({ catalogPage, page }) => {
    await catalogPage.openCategory('mobile');
    await expect(page).toHaveURL(/catalog\.onliner\.by\/mobile/);
    await expect(catalogPage.heading).toContainText(/мобильные телефоны/i);
  });

  test('на странице категории есть ссылки на товары', async ({ catalogPage, page }) => {
    await catalogPage.openCategory('mobile');
    const productLinks = page.locator('a[href*="catalog.onliner.by/mobile/"]');
    await expect(productLinks.first()).toBeVisible();
    expect(await productLinks.count()).toBeGreaterThan(5);
  });
});