import { AprilWebPage } from './app.po';

describe('april-web App', function() {
  let page: AprilWebPage;

  beforeEach(() => {
    page = new AprilWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
