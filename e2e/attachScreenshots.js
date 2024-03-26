const fs = require('node:fs').promises;
const path = require('node:path');
const os = require('node:os');

const { allure } = require('jest-allure2-reporter/api');
const Jimp = require('jimp');
const stripAnsi = require('strip-ansi');

/** @type {import('jest-environment-emit').EnvironmentListenerFn} */
const attachScreenshots = async ({ testEvents }) => {
  testEvents.on('test_done', async ({ event }) => {
    for (const maybeErrors of event.test.errors) {
      const errors = Array.isArray(maybeErrors) ? maybeErrors : [maybeErrors];
      for (const { matcherResult } of errors) {
        const message = stripAnsi((matcherResult?.message ?? '').trim());
        const [, diffPath] = message.split(/See diff for details:\s+/m);
        if (diffPath) {
          allure.label('testType', 'screenshotDiff');
          await splitImage(diffPath);
        }
      }
    }
  });
};

async function splitImage(inputImagePath) {
  const image = await Jimp.read(inputImagePath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  const columnWidth = Math.floor(width / 3);

  const result = {
    expected: 0,
    diff: 1,
    actual: 2,
  };

  const outputDir = await fs.mkdtemp(path.join(os.tmpdir(), 'jest-image-diff-'));
  for (const [key, index] of Object.entries(result)) {
    const outputPath = path.join(outputDir, `${key}.png`);
    const column = image.clone().crop(index * columnWidth, 0, columnWidth, height);
    await column.writeAsync(outputPath);

    allure.fileAttachment(outputPath, {
      name: key,
      type: 'image/png',
    });
  }

  return result;
}

module.exports = attachScreenshots;
