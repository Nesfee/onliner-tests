import { FrameLocator, Locator, Page } from '@playwright/test';

export class SearchComponent {
  readonly input: Locator;
  readonly frame: FrameLocator;
  readonly results: Locator;

  constructor(private readonly page: Page) {
    this.input = page.locator('input.fast-search__input, input[name="query"]').first();
    this.frame = page.frameLocator('iframe.modal-iframe, iframe[src*="search"]');
    this.results = this.frame.locator('.result__item, .search__result');
  }

  async search(query: string): Promise<void> {
    await this.input.click();
    await this.input.fill(query);
  }
}