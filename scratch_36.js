const fs = require('fs');
const path = require('path');

const translations = {
  "com.grammar.other": {
    "en": "other",
    "be": "іншае",
    "bg": "друго",
    "bs": "drugo",
    "cs": "jiné",
    "hr": "drugo",
    "mk": "друго",
    "pl": "inne",
    "ru": "другое",
    "sk": "iné",
    "sl": "drugo",
    "sr-Cyrl": "друго",
    "uk": "інше"
  }
};


const languages = Object.keys(Object.values(translations)[0]);

// Function to patch i18n files
function patchI18nFiles(translations) {
    // Loop through each language file
    for (let langCode of languages) {
        const filePath = path.join(__dirname, `i18n/${langCode}/code.json`);
        let languageData;

        // Read the language file
        try {
            languageData = require(filePath);
        } catch (error) {
            console.error(`Error reading file ${filePath}: ${error.message}`);
            continue;
        }

        // Insert translations into language file
        for (let translationKey of Object.keys(translations)) {
            if (!languageData[translationKey]) {
                languageData[translationKey] = {};
            }
            languageData[translationKey].message = translations[translationKey][langCode];
            languageData[translationKey].description = translations[translationKey].en;
        }

        // Write patched language file
        try {
            fs.writeFileSync(filePath, JSON.stringify(languageData, null, 2) + '\n');
            console.log(`Patched ${langCode} language file successfully.`);
        } catch (error) {
            console.error(`Error writing file ${filePath}: ${error.message}`);
        }
    }
}

// Patch i18n files
patchI18nFiles(translations);
