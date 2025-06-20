// theme.js
export const themes = {
    'lavender-mist': {
        name: 'Oceans of Creation',
        light: {
            '--primary-color': '#C4B5FD', /* Lighter Lavender */
            '--background-color': '#fdfcff',
            '--container-bg-color': 'white',
            '--text-color': '#2c3e50',
            '--secondary-text-color': '#343a40',
            '--border-color': '#dee2e6',
            '--summary-bg-color': '#f8f9fa',
            '--hyperlink-color': '#a855f7',
            '--hyperlink-hover-color': '#9333ea',
            '--shadow-color': 'rgba(196, 181, 253, 0.25)',
            '--tertiary-accent-color': '#f59e0b',
        },
        dark: {
            '--primary-color': '#2dd4bf', /* Emerald Green */
            '--background-color': '#111827', /* Dark Blue-Gray */
            '--container-bg-color': '#1f2937',
            '--text-color': '#e5e7eb',
            '--secondary-text-color': '#d1d5db',
            '--border-color': '#4b5563',
            '--summary-bg-color': '#374151',
            '--hyperlink-color': '#5eead4',
            '--hyperlink-hover-color': '#99f6e4',
            '--shadow-color': 'rgba(45, 212, 191, 0.15)',
            '--tertiary-accent-color': '#fbbf24',
        }
    },
    'sunset-blaze': {
        name: 'Sunset Blaze',
        light: {
            '--primary-color': '#FF7043', // Orange-Red
            '--background-color': '#FFF3E0',
            '--container-bg-color': '#FFFFFF',
            '--text-color': '#3E2723',
            '--secondary-text-color': '#5D4037',
            '--border-color': '#D7CCC8',
            '--summary-bg-color': '#FBE9E7',
            '--hyperlink-color': '#BF360C',
            '--hyperlink-hover-color': '#FF5722',
            '--shadow-color': 'rgba(255, 112, 67, 0.25)',
            '--tertiary-accent-color': '#FFAB40',
        },
        dark: {
            '--primary-color': '#FFAB40', // Amber
            '--background-color': '#212121',
            '--container-bg-color': '#303030',
            '--text-color': '#E0E0E0',
            '--secondary-text-color': '#BDBDBD',
            '--border-color': '#424242',
            '--summary-bg-color': '#424242',
            '--hyperlink-color': '#FFC107',
            '--hyperlink-hover-color': '#FFECB3',
            '--shadow-color': 'rgba(255, 171, 64, 0.15)',
            '--tertiary-accent-color': '#FFC107',
        }
    },
    'forest-canopy': {
        name: 'Forest Canopy',
        light: {
            '--primary-color': '#4ade80',
            '--background-color': '#f0fdf4',
            '--container-bg-color': '#ffffff',
            '--text-color': '#44403c',
            '--secondary-text-color': '#57534e',
            '--border-color': '#d6d3d1',
            '--summary-bg-color': '#f5f5f4',
            '--hyperlink-color': '#16a34a',
            '--hyperlink-hover-color': '#15803d',
            '--shadow-color': 'rgba(74, 222, 128, 0.25)',
            '--tertiary-accent-color': '#fbbf24',
        },
        dark: {
            '--primary-color': '#86efac',
            '--background-color': '#1c1917',
            '--container-bg-color': '#292524',
            '--text-color': '#e7e5e4',
            '--secondary-text-color': '#d6d3d1',
            '--border-color': '#57534e',
            '--summary-bg-color': '#44403c',
            '--hyperlink-color': '#bef264',
            '--hyperlink-hover-color': '#a3e635',
            '--shadow-color': 'rgba(134, 239, 172, 0.15)',
            '--tertiary-accent-color': '#facc15',
        }
    },
    'midnight-depths': {
        name: 'Midnight Depths',
        light: {
            '--primary-color': '#38bdf8',
            '--background-color': '#f0f9ff',
            '--container-bg-color': '#ffffff',
            '--text-color': '#082f49',
            '--secondary-text-color': '#075985',
            '--border-color': '#e0f2fe',
            '--summary-bg-color': '#f0f9ff',
            '--hyperlink-color': '#0ea5e9',
            '--hyperlink-hover-color': '#0284c7',
            '--shadow-color': 'rgba(56, 189, 248, 0.25)',
            '--tertiary-accent-color': '#f59e0b',
        },
        dark: {
            '--primary-color': '#818cf8',
            '--background-color': '#0c0a24',
            '--container-bg-color': '#1a183b',
            '--text-color': '#f0f2ff',
            '--secondary-text-color': '#a9b2f5',
            '--border-color': '#3a369b',
            '--summary-bg-color': '#211f45',
            '--hyperlink-color': '#a5b4fc',
            '--hyperlink-hover-color': '#c7d2fe',
            '--shadow-color': 'rgba(129, 140, 248, 0.1)',
            '--tertiary-accent-color': '#fbbf24',
        }
    },
    'crimson-bloom': {
        name: 'Crimson Bloom',
        light: {
            '--primary-color': '#f43f5e',
            '--background-color': '#fff1f2',
            '--container-bg-color': '#ffffff',
            '--text-color': '#881337',
            '--secondary-text-color': '#9f1239',
            '--border-color': '#fecdd3',
            '--summary-bg-color': '#ffe4e6',
            '--hyperlink-color': '#e11d48',
            '--hyperlink-hover-color': '#be123c',
            '--shadow-color': 'rgba(244, 63, 94, 0.25)',
            '--tertiary-accent-color': '#f59e0b',
        },
        dark: {
            '--primary-color': '#fb7185',
            '--background-color': '#1f2937',
            '--container-bg-color': '#374151',
            '--text-color': '#f9fafb',
            '--secondary-text-color': '#e5e7eb',
            '--border-color': '#4b5563',
            '--summary-bg-color': '#4b5563',
            '--hyperlink-color': '#f43f5e',
            '--hyperlink-hover-color': '#fb7185',
            '--shadow-color': 'rgba(251, 113, 133, 0.15)',
            '--tertiary-accent-color': '#fbbf24',
        }
    },
    'golden-sands': {
        name: 'Golden Sands',
        light: {
            '--primary-color': '#f59e0b',
            '--background-color': '#fffbeb',
            '--container-bg-color': '#ffffff',
            '--text-color': '#78350f',
            '--secondary-text-color': '#92400e',
            '--border-color': '#fde68a',
            '--summary-bg-color': '#fef3c7',
            '--hyperlink-color': '#d97706',
            '--hyperlink-hover-color': '#b45309',
            '--shadow-color': 'rgba(245, 158, 11, 0.25)',
            '--tertiary-accent-color': '#eab308',
        },
        dark: {
            '--primary-color': '#fcd34d',
            '--background-color': '#262626',
            '--container-bg-color': '#404040',
            '--text-color': '#f5f5f5',
            '--secondary-text-color': '#d4d4d4',
            '--border-color': '#525252',
            '--summary-bg-color': '#525252',
            '--hyperlink-color': '#fbbf24',
            '--hyperlink-hover-color': '#fcd34d',
            '--shadow-color': 'rgba(252, 211, 77, 0.15)',
            '--tertiary-accent-color': '#facc15',
        }
    },
    'arctic-dawn': {
        name: 'Arctic Dawn',
        light: {
            '--primary-color': '#22d3ee',
            '--background-color': '#ecfeff',
            '--container-bg-color': '#ffffff',
            '--text-color': '#155e75',
            '--secondary-text-color': '#164e63',
            '--border-color': '#a5f3fc',
            '--summary-bg-color': '#cffafe',
            '--hyperlink-color': '#0891b2',
            '--hyperlink-hover-color': '#0e7490',
            '--shadow-color': 'rgba(34, 211, 238, 0.25)',
            '--tertiary-accent-color': '#f59e0b',
        },
        dark: {
            '--primary-color': '#67e8f9',
            '--background-color': '#083344',
            '--container-bg-color': '#155e75',
            '--text-color': '#ecfeff',
            '--secondary-text-color': '#a5f3fc',
            '--border-color': '#0e7490',
            '--summary-bg-color': '#164e63',
            '--hyperlink-color': '#22d3ee',
            '--hyperlink-hover-color': '#67e8f9',
            '--shadow-color': 'rgba(103, 232, 249, 0.15)',
            '--tertiary-accent-color': '#fbbf24',
        }
    },
    'royal-amethyst': {
        name: 'Royal Amethyst',
        light: {
            '--primary-color': '#a855f7',
            '--background-color': '#faf5ff',
            '--container-bg-color': '#ffffff',
            '--text-color': '#581c87',
            '--secondary-text-color': '#6b21a8',
            '--border-color': '#e9d5ff',
            '--summary-bg-color': '#f3e8ff',
            '--hyperlink-color': '#9333ea',
            '--hyperlink-hover-color': '#7e22ce',
            '--shadow-color': 'rgba(168, 85, 247, 0.25)',
            '--tertiary-accent-color': '#f59e0b',
        },
        dark: {
            '--primary-color': '#d8b4fe', /* Lighter purple for highlight */
            '--background-color': '#1e0a3b', /* Very dark purple */
            '--container-bg-color': '#2c1356', /* Darker purple */
            '--text-color': '#f0f0f0', /* Lighter text */
            '--secondary-text-color': '#e4d0ff', /* Light secondary text */
            '--border-color': '#4a1f81', /* Darker border */
            '--summary-bg-color': '#3a1a6b', /* Slightly lighter summary background */
            '--hyperlink-color': '#a855f7', /* Retain vibrant link */
            '--hyperlink-hover-color': '#c084fc', /* Lighter hover */
            '--shadow-color': 'rgba(216, 180, 254, 0.1)', /* Subtle shadow */
            '--tertiary-accent-color': '#fbbf24',
        }
    },
    'monochrome-elegance': {
        name: 'Monochrome Elegance',
        light: {
            '--primary-color': '#737373',
            '--background-color': '#fafafa',
            '--container-bg-color': '#ffffff',
            '--text-color': '#171717',
            '--secondary-text-color': '#404040',
            '--border-color': '#e5e5e5',
            '--summary-bg-color': '#f5f5f5',
            '--hyperlink-color': '#525252',
            '--hyperlink-hover-color': '#262626',
            '--shadow-color': 'rgba(115, 115, 115, 0.25)',
            '--tertiary-accent-color': '#a3a3a3',
        },
        dark: {
            '--primary-color': '#a3a3a3',
            '--background-color': '#171717',
            '--container-bg-color': '#262626',
            '--text-color': '#f5f5f5',
            '--secondary-text-color': '#d4d4d4',
            '--border-color': '#525252',
            '--summary-bg-color': '#404040',
            '--hyperlink-color': '#e5e5e5',
            '--hyperlink-hover-color': '#ffffff',
            '--shadow-color': 'rgba(163, 163, 163, 0.15)',
            '--tertiary-accent-color': '#d4d4d4',
        }
    },
    'sakura-dream': {
        name: 'Sakura Dream',
        light: {
            '--primary-color': '#f472b6',
            '--background-color': '#fdf2f8',
            '--container-bg-color': '#ffffff',
            '--text-color': '#831843',
            '--secondary-text-color': '#9d174d',
            '--border-color': '#fbcfe8',
            '--summary-bg-color': '#fce7f3',
            '--hyperlink-color': '#ec4899',
            '--hyperlink-hover-color': '#db2777',
            '--shadow-color': 'rgba(244, 114, 182, 0.25)',
            '--tertiary-accent-color': '#f59e0b',
        },
        dark: {
            '--primary-color': '#f87171', /* Soft red/pink for highlight */
            '--background-color': '#200c14', /* Very dark maroon/plum */
            '--container-bg-color': '#331522', /* Darker maroon/plum */
            '--text-color': '#fbdce6', /* Light pinkish text */
            '--secondary-text-color': '#f5c0cf', /* Slightly darker secondary text */
            '--border-color': '#5c2235', /* Dark border */
            '--summary-bg-color': '#4a1b2d', /* Slightly lighter summary background */
            '--hyperlink-color': '#f472b6', /* Retain pink link */
            '--hyperlink-hover-color': '#f9a8d4', /* Lighter hover */
            '--shadow-color': 'rgba(248, 113, 113, 0.1)', /* Subtle shadow */
            '--tertiary-accent-color': '#fbbf24',
        }
    }
};

export const defaultTheme = 'lavender-mist';
export let currentThemePreset = localStorage.getItem('themePreset') || defaultTheme;
export let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Function to generate the SVG string for the select arrow with a dynamic color
function getSelectArrowSVG(color) {
    // The polyline points define the chevron-down icon
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
    return `url('data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgContent)}')`;
}

export function applyTheme(presetKey, dark) {
    const theme = themes[presetKey];
    if (!theme) return;

    const mode = dark ? theme.dark : theme.light;
    const root = document.documentElement;

    for (const [prop, value] of Object.entries(mode)) {
        root.style.setProperty(prop, value);
    }
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('themePreset', presetKey);
    localStorage.setItem('isDarkMode', dark);

    // Get the current text color from the active theme mode and generate the SVG
    const currentTextColor = mode['--text-color'];
    const arrowSVG = getSelectArrowSVG(currentTextColor);
    root.style.setProperty('--select-arrow-bg-svg', arrowSVG);
}

export function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    applyTheme(currentThemePreset, isDarkMode);
}

export function updateThemePreset(event) {
    currentThemePreset = event.target.value;
    applyTheme(currentThemePreset, isDarkMode);
}

export function initializeTheme() {
    applyTheme(currentThemePreset, isDarkMode);
    // Populate theme preset dropdown
    const themePresetSelect = document.getElementById('theme-preset');
    if (themePresetSelect) {
        for (const key in themes) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = themes[key].name;
            themePresetSelect.appendChild(option);
        }
        themePresetSelect.value = currentThemePreset;
        themePresetSelect.addEventListener('change', updateThemePreset);
    }

    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', toggleDarkMode);
    }
}