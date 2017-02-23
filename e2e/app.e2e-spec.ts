import { NgCliNewPage } from './app.po';

describe('ng-cli-new App', () => {
  let page: NgCliNewPage;

  beforeEach(() => {
    page = new NgCliNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
