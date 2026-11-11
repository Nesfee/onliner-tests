import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export type Section = 'Каталог' | 'Новости' | 'Автобарахолка' | 'Барахолка' | 'Форум';

export class HomePage extends BasePage {
  readonly logo: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = page.locator('.b-top-logo, a[href="https://www.onliner.by"]').first();
  }

  async goToSection(name: Section): Promise<void> {
    await this.page.getByRole('link', { name, exact: true }).first().click();
  }
}