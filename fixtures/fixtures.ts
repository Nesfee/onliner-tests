import { test as base } from '@playwright/test';
import { HomePage } from '@pages/HomePage';
import { SearchComponent } from '@pages/SearchComponent';
import { CatalogPage } from '@pages/CatalogPage';
import { LoginPage } from '@pages/LoginPage';

type Pages = {
  homePage: HomePage;
  search: SearchComponent;
  catalogPage: CatalogPage;
  loginPage: LoginPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => use(new HomePage(page)),
  search: async ({ page }, use) => use(new SearchComponent(page)),
  catalogPage: async ({ page }, use) => use(new CatalogPage(page)),
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
});

export { expect } from '@playwright/test';