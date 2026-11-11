import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CatalogPage extends BasePage {
  readonly heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { level: 1 });
  }

  async openCategory(slug: string): Promise<void> {
    await this.open(`https://catalog.onliner.by/${slug}`);
  }

  productLinks(slug: string): Locator {
    return this.page.locator(`a[href*="catalog.onliner.by/${slug}/"]`);
  }
}