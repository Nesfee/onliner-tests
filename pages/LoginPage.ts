import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly loginInput: Locator;
  readonly passwordInput: Locator;
  readonly submitBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.loginInput = page.getByPlaceholder(/Nesfee1@mail.ru/i);
    this.passwordInput = page.getByPlaceholder(/Nesfee2020qq/i);
    this.submitBtn = page.getByRole('button', { name: /войти/i });
  }

  async openLogin(): Promise<void> {
    await this.open('https://profile.onliner.by/login');
  }

  async login(user: string, pass: string): Promise<void> {
    await this.loginInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.submitBtn.click();
  }
}