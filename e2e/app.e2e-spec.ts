import { ShopmanagementuiPage } from './app.po';

describe('shopmanagementui App', () => {
  let page: ShopmanagementuiPage;

  beforeEach(() => {
    page = new ShopmanagementuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
