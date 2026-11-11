import { test, expect } from '@playwright/test';

interface Product {
  id: number;
  key: string;
  name: string;
}

interface SearchResponse {
  products: Product[];
  total: number;
}

test('поиск товаров возвращает список products', async ({ request }) => {
  const res = await request.get(
    'https://catalog.onliner.by/sdapi/catalog.api/search/products',
    { params: { query: 'iphone' } },
  );
  expect(res.status()).toBe(200);

  const body = (await res.json()) as SearchResponse;
  expect(body.products.length).toBeGreaterThan(0);
  expect(body.products[0].name).toMatch(/iphone/i);
});