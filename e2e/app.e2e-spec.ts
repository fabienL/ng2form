import {PrimongPage} from './app.po';

describe('primong App', () => {
  let page: PrimongPage;

  beforeEach(() => {
    page = new PrimongPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
