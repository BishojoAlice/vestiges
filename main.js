import { initializeTheme } from 'theme_manager';
import { initializeLanguage } from 'language_manager';
import { initializeChapters } from 'chapter_manager';
import { initializeUI, renderChapterList, generateStorySummary, getCurrentChapterNumber } from 'ui_manager';
import { initializeEditMode } from 'edit_manager';

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    initializeChapters();
    initializeTheme();
    initializeLanguage();
    initializeUI();
    initializeEditMode();

    // Initial rendering of UI and chapters list
    if (getCurrentChapterNumber() === null) {
        renderChapterList();
        generateStorySummary();
    }
});