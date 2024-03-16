const puppeteer = require('puppeteer');

describe('Visual Regression Testing', () => {
  let browser;
  let page;
  const baseUrl = 'http://localhost:3000';

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  }, 30000);

  afterAll(async () => {
    await browser.close();
  });

  test.each([
    '/',
    '/learn/grammar/',
    '/learn/grammar/adjectives/',
    '/learn/grammar/conjunctions/',
    '/learn/grammar/nouns/',
    '/learn/grammar/numerals/',
    '/learn/grammar/prepositions/',
    '/learn/grammar/pronouns/',
    '/learn/grammar/syntax/',
    '/learn/grammar/verbs/',
    '/learn/introduction/',
    '/learn/introduction/constructed-slavic-languages/',
    '/learn/introduction/design-criteria/',
    '/learn/faq/',
    '/learn/introduction/history/',
    '/learn/introduction/language-comparison/',
    '/learn/misc/numbers-1-10/',
    '/learn/misc/pan-slavic-relay/',
    '/learn/misc/personal-pronouns/',
    '/learn/orthography/',
    '/learn/phonology/',
    '/learn/pronunciation/',
    '/learn/simple-grammar/',
    '/learn/simple-grammar/level-1/',
    '/learn/simple-grammar/level-2/',
    '/learn/vocabulary/derivation/',
    '/learn/vocabulary/flavourisation/',
    '/learn/vocabulary/word-formation/',
    '/resources/',
    '/resources/applets/',
    '/resources/applets/intelligibility/',
    '/resources/applets/transliterator/',
    '/resources/keyboards/',
  ])('should match a screenshot: %s', async (path) => {
    const fullPath = baseUrl + path;
    await page.goto(fullPath, { waitUntil: 'networkidle2' });

    const image = await page.screenshot({ fullPage: true });
    expect(image).toMatchImageSnapshot({
      failureThresholdType: 'pixel',
      failureThreshold: 100, // You can adjust the threshold based on your needs
    });
  }, 20000); // Increase the timeout to 20 seconds, adjust as needed
});
