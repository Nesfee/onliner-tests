import { Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async open(path = '/'): Promise<void> {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
    await this.acceptCookiesIfPresent();
  }

  protected async acceptCookiesIfPresent(): Promise<void> {
    const btn = this.page.getByRole('button', { name: /принять|согласен|accept/i }).first();
    try {
      await btn.click({ timeout: 3000 });
    } catch {
      /* баннера нет */
    }
  }
}