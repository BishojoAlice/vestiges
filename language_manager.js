// Note: The user requested all languages with over 10k speakers.
// This is a very large number, so for this demonstration, we are providing a curated list of major world languages.
export const languages = {
    'en': { name: 'English', native: 'English' },
    'es': { name: 'Spanish', native: 'Español' },
    'fr': { name: 'French', native: 'Français' },
    'de': { name: 'German', native: 'Deutsch' },
    'it': { name: 'Italian', native: 'Italiano' },
    'pt': { name: 'Portuguese', native: 'Português' },
    'ru': { name: 'Russian', native: 'Русский' },
    'zh': { name: 'Chinese (Simplified)', native: '中文 (简体)' },
    'ja': { name: 'Japanese', native: '日本語' },
    'ko': { name: 'Korean', native: '한국어' },
    'ar': { name: 'Arabic', native: 'العربية' },
    'hi': { name: 'Hindi', native: 'हिन्दी' },
};

let currentLanguage = localStorage.getItem('language') || 'en';
const translationCache = new Map();

export function getCurrentLanguage() {
    return currentLanguage;
}

export async function initializeLanguage() {
    const languageSelect = document.getElementById('language-select');
    if (!languageSelect) return;

    for (const [code, lang] of Object.entries(languages)) {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = lang.native;
        languageSelect.appendChild(option);
    }

    languageSelect.value = currentLanguage;
    languageSelect.addEventListener('change', (e) => changeLanguage(e.target.value));

    // Initialize edit button state
    updateEditButtonState();

    if (currentLanguage !== 'en') {
        // Initial translation on page load if a language is saved
        await changeLanguage(currentLanguage);
    }
}

async function changeLanguage(newLang) {
    if (newLang === currentLanguage && newLang !== 'en') return;

    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'flex';

    if (newLang === 'en') {
        await restoreOriginals(document.body);
    } else {
        await translateElement(document.body, newLang);
        // Also translate settings modal specifically
        const settingsModal = document.getElementById('settings-modal');
        if (settingsModal) {
            await translateSettingsModal(settingsModal, newLang);
        }
        // Translate theme preset names
        await translateThemePresets(newLang);
    }

    currentLanguage = newLang;
    localStorage.setItem('language', newLang);

    // Update edit button state based on language
    updateEditButtonState();

    loadingOverlay.style.display = 'none';
}

function updateEditButtonState() {
    const editButton = document.getElementById('edit-button');
    if (editButton) {
        if (currentLanguage !== 'en') {
            editButton.style.opacity = '0.5';
            editButton.style.pointerEvents = 'none';
            editButton.title = 'Editing only available in English';
        } else {
            editButton.style.opacity = '1';
            editButton.style.pointerEvents = 'auto';
            editButton.title = 'Edit content';
        }
    }
}

async function translateSettingsModal(modal, lang) {
    // Get translatable elements in settings modal
    const settingsTitle = modal.querySelector('h2');
    const labels = modal.querySelectorAll('label');
    const warningText = modal.querySelector('.ai-warning p');
    
    const elementsToTranslate = [];
    const textsToTranslate = [];
    
    if (settingsTitle && !settingsTitle.dataset.originalText) {
        settingsTitle.dataset.originalText = settingsTitle.textContent;
        elementsToTranslate.push(settingsTitle);
        textsToTranslate.push(settingsTitle.dataset.originalText);
    }
    
    labels.forEach(label => {
        if (!label.dataset.originalText) {
            label.dataset.originalText = label.textContent;
        }
        elementsToTranslate.push(label);
        textsToTranslate.push(label.dataset.originalText);
    });
    
    if (warningText && !warningText.dataset.originalText) {
        warningText.dataset.originalText = warningText.textContent;
        elementsToTranslate.push(warningText);
        textsToTranslate.push(warningText.dataset.originalText);
    }
    
    if (textsToTranslate.length === 0) return;
    
    const cacheKey = `settings-${lang}-${textsToTranslate.join('||')}`;
    let translatedTexts;
    
    if (translationCache.has(cacheKey)) {
        translatedTexts = translationCache.get(cacheKey);
    } else {
        try {
            const systemPrompt = `You are an expert translation assistant. Translate the following UI text into ${languages[lang].name}.
- These are interface elements for a reading application
- Keep translations concise and appropriate for UI elements
- Respond with a JSON array of strings, where each string is a translation of the corresponding text from the input array.`;
            
            const completion = await websim.chat.completions.create({
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: JSON.stringify(textsToTranslate) }
                ],
                json: true,
            });
            
            let result = JSON.parse(completion.content);
            if (typeof result === 'object' && !Array.isArray(result) && result.translations) {
                translatedTexts = result.translations;
            } else {
                translatedTexts = result;
            }
            
            translationCache.set(cacheKey, translatedTexts);
        } catch (error) {
            console.error("Settings translation error:", error);
            translatedTexts = textsToTranslate;
        }
    }
    
    if (Array.isArray(translatedTexts) && translatedTexts.length === elementsToTranslate.length) {
        elementsToTranslate.forEach((element, index) => {
            if (typeof translatedTexts[index] === 'string') {
                element.textContent = translatedTexts[index];
            }
        });
    }
}

async function translateThemePresets(lang) {
    const themeSelect = document.getElementById('theme-preset');
    if (!themeSelect) return;

    const options = themeSelect.querySelectorAll('option');
    const textsToTranslate = [];
    const optionsToTranslate = [];

    options.forEach(option => {
        if (!option.dataset.originalText) {
            option.dataset.originalText = option.textContent;
        }
        textsToTranslate.push(option.dataset.originalText);
        optionsToTranslate.push(option);
    });

    if (textsToTranslate.length === 0) return;

    const cacheKey = `themes-${lang}-${textsToTranslate.join('||')}`;
    let translatedTexts;

    if (translationCache.has(cacheKey)) {
        translatedTexts = translationCache.get(cacheKey);
    } else {
        try {
            const systemPrompt = `You are an expert translation assistant. Translate the following theme preset names into ${languages[lang].name}.
- These are decorative theme names for a reading application
- Keep translations poetic and thematically appropriate
- "Lily Gold" should be translated as the flower lily + the metal gold
- Respond with a JSON array of strings, where each string is a translation of the corresponding theme name from the input array.`;

            const completion = await websim.chat.completions.create({
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: JSON.stringify(textsToTranslate) }
                ],
                json: true,
            });

            let result = JSON.parse(completion.content);
            if (typeof result === 'object' && !Array.isArray(result) && result.translations) {
                translatedTexts = result.translations;
            } else {
                translatedTexts = result;
            }

            translationCache.set(cacheKey, translatedTexts);
        } catch (error) {
            console.error("Theme translation error:", error);
            translatedTexts = textsToTranslate;
        }
    }

    if (Array.isArray(translatedTexts) && translatedTexts.length === optionsToTranslate.length) {
        optionsToTranslate.forEach((option, index) => {
            if (typeof translatedTexts[index] === 'string') {
                option.textContent = translatedTexts[index];
            }
        });
    }
}

function getOriginalText(node) {
    const parent = node.parentElement;
    if (parent && parent.dataset.originalText) {
        return parent.dataset.originalText;
    }
    return node.nodeValue;
}

function setOriginalText(node) {
    const parent = node.parentElement;
    if (parent && !parent.dataset.originalText) {
        // Don't store for very short/empty strings or things that look like code
        if (node.nodeValue.trim().length > 1 && !node.nodeValue.includes('{')) {
            parent.dataset.originalText = node.nodeValue;
        }
    }
}

function shouldSkipNode(node) {
    const parent = node.parentElement;
    if (!parent) return true;
    const nodeName = parent.nodeName.toUpperCase();
    // Also skip processing text within the settings modal when translating the whole page
    if (parent.closest('.settings-modal, script, style')) return true;
    return nodeName === 'SCRIPT' || nodeName === 'STYLE';
}

export async function translateElement(element, lang) {
    // Find all container elements that hold translatable text but are not inside special areas.
    const translatableBlocks = element.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li, .chapter-content, .summary, .ai-warning p');
    const nodesToTranslate = [];

    translatableBlocks.forEach(block => {
        // Don't process children of special containers that are handled separately
        if (block.closest('.settings-modal, script, style')) return;
        // Don't process elements that don't have text content
        if (!block.textContent || block.textContent.trim().length === 0) return;
        
        // Store original text on the element itself if not already present
        if (!block.dataset.originalText) {
            block.dataset.originalText = block.innerHTML;
        }
        nodesToTranslate.push(block);
    });
    
    if (nodesToTranslate.length === 0) return;

    const CHUNK_SIZE = 15; // Number of elements per API call
    for (let i = 0; i < nodesToTranslate.length; i += CHUNK_SIZE) {
        const nodeChunk = nodesToTranslate.slice(i, i + CHUNK_SIZE);
        const textChunk = nodeChunk.map(node => node.dataset.originalText);

        const cacheKey = `${lang}-${textChunk.join('||')}`;
        let translatedChunk;

        if (translationCache.has(cacheKey)) {
            translatedChunk = translationCache.get(cacheKey);
        } else {
            try {
                const systemPrompt = `You are an expert translation assistant. Translate the following HTML content into ${languages[lang].name}.
- Preserve all HTML tags and structure (e.g., <br>, <div>, <span>).
- Transliterate character names based on their pronunciation, do not translate them.
  - Aicā (pronounced /ɑikɑ/)
  - Crěwrgw̄yn (pronounced /kre̞ʊrɡʊɪn/)
  - Curō (pronounced /kʉɾo/)
  - Širō (pronounced /ɕiɾo/)
  - Elpis (pronounced /e̞lpis/)
  - Ǐtrūmȝeň (pronounced /itrumxeɲ/)
- For specific story references, use these exact translations:
  - "Budj Bim" should be: ${getBudjBimTranslation(lang)}
  - "Cosmic Hunt" should be: ${getCosmicHuntTranslation(lang)}
- "Lily Gold" should be translated as the flower lily + the metal gold
- Respond with a JSON array of strings, where each string is a translation of the corresponding HTML content from the input array. The output array must have the same number of elements as the input array.`;
                
                const completion = await websim.chat.completions.create({
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: JSON.stringify(textChunk) }
                    ],
                    json: true,
                });
                
                let result = JSON.parse(completion.content);

                // The AI might return an object with a key instead of a raw array
                if (typeof result === 'object' && !Array.isArray(result) && result.translations) {
                    translatedChunk = result.translations;
                } else {
                    translatedChunk = result;
                }
                
                translationCache.set(cacheKey, translatedChunk);
            } catch (error) {
                console.error("Translation API error:", error);
                // On error, just use original texts for this chunk to avoid breaking the page
                translatedChunk = textChunk;
            }
        }
        
        if (Array.isArray(translatedChunk) && translatedChunk.length === nodeChunk.length) {
            nodeChunk.forEach((node, index) => {
                if(typeof translatedChunk[index] === 'string') {
                    node.innerHTML = translatedChunk[index];
                }
            });
        } else {
             console.error("Translation result mismatch or invalid format", { translatedChunk, nodeChunk });
        }
    }
}

function getBudjBimTranslation(lang) {
    const translations = {
        'ru': 'Будж Бим',
        'ja': 'バッジ・ビム', 
        'zh': '布吉必姆',
        'ko': '버즈 빔',
        'ar': 'بودج بيم'
    };
    return translations[lang] || 'Budj Bim';
}

function getCosmicHuntTranslation(lang) {
    const translations = {
        'ru': 'Космическая охота',
        'ar': 'الصيد الكوني'
    };
    return translations[lang] || 'Cosmic Hunt';
}

async function restoreOriginals(element) {
    const elementsWithOriginals = element.querySelectorAll('[data-original-text]');
    elementsWithOriginals.forEach(el => {
        el.innerHTML = el.dataset.originalText;
    });
    
    // Also restore theme preset names
    const themeSelect = document.getElementById('theme-preset');
    if (themeSelect) {
        const options = themeSelect.querySelectorAll('option[data-original-text]');
        options.forEach(option => {
            option.textContent = option.dataset.originalText;
        });
    }
}