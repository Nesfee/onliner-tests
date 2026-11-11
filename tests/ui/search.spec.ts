import { test, expect } from '../../fixtures/fixtures';

test.describe('Поиск', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open('/');
  });

  test('поиск по запросу "iPhone" возвращает результаты', async ({ search }) => {
    await search.search('iPhone');
    await expect(search.results.first()).toBeVisible();
    await expect(search.results.first()).toContainText(/iphone/i);
  });

  test('поиск по бессмысленному запросу не находит товаров', async ({ search }) => {
    await search.search('qwzxqwzxqwzx12345');
    await expect(search.results).toHaveCount(0);
  });
});