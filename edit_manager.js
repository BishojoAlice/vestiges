import { saveChapters, updateChapter, addNewChapter, deleteChapter, getChapter } from 'chapter_manager';
import { initializeRichTextEditor, cleanupRichTextEditor, addRichTextToolbar } from 'rich_text_editor';
import { renderChapterList, generateStorySummary, renderChapterPage, getCurrentChapterNumber } from 'ui_manager';
import { getCurrentLanguage } from 'language_manager';

let isEditMode = false;
let isCurrentPageEditable = false;

export function getIsEditMode() { return isEditMode; }
export function getIsCurrentPageEditable() { return isCurrentPageEditable; }
export function setIsCurrentPageEditable(value) { isCurrentPageEditable = value; }

export function initializeEditMode() {
    const editButton = document.getElementById('edit-button');
    const saveButton = document.getElementById('save-changes-button');
    const cancelButton = document.getElementById('cancel-changes-button');

    if (editButton) editButton.addEventListener('click', toggleEditMode);
    if (saveButton) saveButton.addEventListener('click', saveChanges);
    if (cancelButton) cancelButton.addEventListener('click', cancelChanges);
}

function toggleEditMode() {
    // Prevent entering edit mode if not in English
    if (!isEditMode && getCurrentLanguage() !== 'en') {
        alert("Editing is only available in English. Please switch to English first.");
        return;
    }

    isEditMode = !isEditMode;
    document.body.classList.toggle('edit-mode', isEditMode);
    document.getElementById('edit-toolbar').style.display = isEditMode ? 'flex' : 'none';
    
    if (isEditMode) {
        initializeRichTextEditor(); // This will ensure the toolbar is present and listeners are set
    } else {
        cleanupRichTextEditor();
    }

    const currentChapterNum = getCurrentChapterNumber();
    if (currentChapterNum !== null) {
        isCurrentPageEditable = isEditMode;
        renderChapterPage(currentChapterNum, getChapter(currentChapterNum - 1), isCurrentPageEditable);
    } else {
        renderChapterList();
        const summaryTextElement = document.getElementById('story-summary-text');
        if (summaryTextElement) {
            summaryTextElement.setAttribute('contenteditable', isEditMode);
            // No need to call addRichTextToolbar here, initializeRichTextEditor handles it.
        }
        // Re-setup listeners for summary and chapter titles that might have become editable/non-editable
        document.querySelectorAll('[contenteditable="true"]').forEach(element => {
            setupRichTextEventListeners(element);
        });
    }
}

function saveChanges() {
    if (!isEditMode) return;
    
    const currentChapterNum = getCurrentChapterNumber();

    if (currentChapterNum !== null) {
        const chapterIndex = currentChapterNum - 1;
        const chapterPage = document.querySelector('.chapter-page');
        const newTitleFromPage = chapterPage.querySelector('.chapter-title-main').textContent;
        const newContent = chapterPage.querySelector('.chapter-content').innerHTML;
        updateChapter(chapterIndex, newTitleFromPage, newContent);
    } else {
        const summaryTextElement = document.getElementById('story-summary-text');
        if (summaryTextElement.dataset.originalText) {
             summaryTextElement.dataset.originalText = summaryTextElement.innerHTML;
        }

        document.querySelectorAll('.chapter-list-item').forEach(item => {
            const index = parseInt(item.dataset.chapterIndex);
            const editedDisplayTitle = item.querySelector('.chapter-title').textContent;
            const originalFullTitle = item.dataset.originalFullTitle;
            const chapter = getChapter(index);

            if (chapter) {
                const actMatch = originalFullTitle.match(/^Act (\d+): (.*)$/);
                if (actMatch && parseInt(actMatch[1]) === index + 1) {
                    const newFullTitle = `Act ${actMatch[1]}: ${editedDisplayTitle}`;
                    updateChapter(index, newFullTitle);
                } else {
                    updateChapter(index, editedDisplayTitle);
                }
            }
        });
    }

    if (saveChapters()) {
        alert("Changes saved!");
        toggleEditMode();
    }
}

function cancelChanges() {
    if (isEditMode) {
        const confirmed = confirm("Are you sure you want to discard all changes?");
        if (confirmed) {
            isEditMode = false;
            location.reload();
        }
    }
}

export function handleAddNewChapter() {
    addNewChapter();
    renderChapterList(); 
}

export function handleDeleteChapter(index) {
    if (deleteChapter(index)) {
        renderChapterList();
        const currentChapterNum = getCurrentChapterNumber();
        if (currentChapterNum === (index + 1)) {
           location.href = window.location.pathname;
           location.reload();
        }
    }
}

function setupRichTextEventListeners(element) {
    element.addEventListener('input', (event) => {
        const content = event.target.innerHTML;
        const originalText = element.dataset.originalText;
        if (content !== originalText) {
            element.dataset.originalText = content;
        }
    });
}