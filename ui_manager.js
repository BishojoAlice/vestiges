import { getChapters, getChapter, getChapterCount } from 'chapter_manager';
import { translateElement, getCurrentLanguage } from 'language_manager';
import { getIsEditMode, getIsCurrentPageEditable, setIsCurrentPageEditable } from 'edit_manager';
import { addRichTextToolbar, setupRichTextEventListeners } from 'rich_text_editor';

let currentChapterNumber = null;

export function getCurrentChapterNumber() {
    return currentChapterNumber;
}

export function initializeUI() {
    // Event Listeners for settings modal
    const settingsButton = document.getElementById('settings-button');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsButton = document.getElementById('close-settings');
    
    if (settingsButton && settingsModal && closeSettingsButton) {
        settingsButton.addEventListener('click', () => {
            if (!getIsEditMode()) settingsModal.style.display = 'flex';
        });

        closeSettingsButton.addEventListener('click', () => {
            settingsModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === settingsModal) {
                settingsModal.style.display = 'none';
            }
        });
    }

    // Check for chapter in URL hash to load directly
    const hash = window.location.hash;
    const match = hash.match(/^#chapter-(\d+)$/);
    if (match) {
        const chapterNum = parseInt(match[1], 10);
        if (chapterNum > 0 && chapterNum <= getChapterCount()) {
            loadChapter(chapterNum, false);
        }
    }
}

export async function generateStorySummary() {
    const summaryTextElement = document.getElementById('story-summary-text');
    if (!summaryTextElement) return;

    summaryTextElement.textContent = 'Generating summary...';

    let relevantChaptersContent = '';
    getChapters().forEach(chapter => {
        if (chapter.content !== "Lorem ipsum dolor sit amet") {
            const processedContent = chapter.content.replace(/<[^>]*>?/gm, '');
            relevantChaptersContent += `Chapter Title: ${chapter.title}\nContent: ${processedContent}\n\n`;
        }
    });

    if (relevantChaptersContent.trim() === '') {
        summaryTextElement.textContent = 'No relevant chapters found to summarize.';
        return;
    }

    try {
        const completion = await websim.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are a helpful assistant tasked with summarizing story content. Provide a concise, basic summary without many spoilers. Focus on the main premise and initial events.
                        Respond in English.
                        When quoting or referring to specific entities (like "It" or "That"), please use standard quotation marks.
                        Your response MUST ONLY be the summary text, with no other text or commentary.`,
                },
                {
                    role: "user",
                    content: `Please summarize the following story content:\n\n${relevantChaptersContent}`,
                },
            ],
            max_tokens: 200,
        });
        summaryTextElement.textContent = completion.content;

        const lang = getCurrentLanguage();
        if (lang !== 'en') {
            await translateElement(summaryTextElement, lang);
        }
        
        if (getIsEditMode()) {
            summaryTextElement.setAttribute('contenteditable', 'true');
        }
    } catch (error) {
        console.error("Error generating story summary:", error);
        summaryTextElement.textContent = 'Failed to generate summary. Please try again later.';
    }
}

export function toggleChapterHighlight(chapterNumber) {
    const chapterLink = document.querySelector(`.chapter-link[data-chapter="${chapterNumber}"]`);
    const highlightButton = document.querySelector(`.highlight-chapter-button[data-chapter="${chapterNumber}"]`);

    if (chapterLink && highlightButton) {
        const isHighlighted = chapterLink.classList.toggle('chapter-highlighted');
        highlightButton.classList.toggle('highlight-active', isHighlighted);
        localStorage.setItem(`chapter-${chapterNumber}-highlighted`, isHighlighted);
    }
}

export function renderChapterList() {
    const chaptersListContainer = document.getElementById('chapters-list');
    if (!chaptersListContainer) return;

    chaptersListContainer.innerHTML = '';
    const isEditMode = getIsEditMode();
    const chapters = getChapters();

    chapters.forEach((chapter, index) => {
        const chapterNumber = index + 1;
        let displayTitleForIndex = chapter.title;
        const actMatch = chapter.title.match(/^Act (\d+): (.*)$/);
        if (actMatch && parseInt(actMatch[1]) === chapterNumber) {
            displayTitleForIndex = actMatch[2];
        }

        const li = document.createElement('li');
        li.className = 'chapter-list-item';
        li.dataset.chapterIndex = index;
        li.dataset.originalFullTitle = chapter.title;

        // Check if chapter is highlighted
        const isHighlighted = localStorage.getItem(`chapter-${chapterNumber}-highlighted`) === 'true';

        li.innerHTML = `
            <a href="#chapter-${chapterNumber}" class="chapter-link ${isHighlighted ? 'chapter-highlighted' : ''}" data-chapter="${chapterNumber}">
                <span class="chapter-number">${chapterNumber}</span>
                <span class="chapter-title" ${isEditMode ? 'contenteditable="true"' : ''}>${displayTitleForIndex}</span>
            </a>
            <button class="highlight-chapter-button ${isHighlighted ? 'highlight-active' : ''}" data-chapter="${chapterNumber}" title="Highlight as side story">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </button>
            ${isEditMode ? `
                <button class="edit-chapter-button" title="Edit Chapter Content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                </button>
                <button class="delete-chapter-button" title="Delete Chapter">&times;</button>
            ` : ''}
        `;
        chaptersListContainer.appendChild(li);
    });
    
    if (isEditMode) {
        const newChapterLi = document.createElement('li');
        newChapterLi.innerHTML = `<button id="new-chapter-button">＋ Add New Chapter</button>`;
        chaptersListContainer.appendChild(newChapterLi);
        document.getElementById('new-chapter-button').addEventListener('click', () => {
             import('edit_manager').then(module => module.handleAddNewChapter());
        });
    }

    document.querySelectorAll('.chapter-link').forEach(link => {
        link.addEventListener('click', (event) => {
            if (isEditMode) {
                event.preventDefault();
                return;
            }
            const chapterNum = parseInt(event.currentTarget.dataset.chapter);
            loadChapter(chapterNum, false);
        });
    });

    document.querySelectorAll('.highlight-chapter-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const chapterNum = parseInt(event.currentTarget.dataset.chapter);
            toggleChapterHighlight(chapterNum);
        });
    });

    if (isEditMode) {
        document.querySelectorAll('.edit-chapter-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const item = event.target.closest('.chapter-list-item');
                const chapterNum = parseInt(item.querySelector('.chapter-link').dataset.chapter);
                loadChapter(chapterNum, true);
            });
        });

        document.querySelectorAll('.delete-chapter-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const item = event.target.closest('.chapter-list-item');
                const index = parseInt(item.dataset.chapterIndex);
                import('edit_manager').then(module => module.handleDeleteChapter(index));
            });
        });
    }
}

export async function loadChapter(chapterNumber, forEditing = false) {
    currentChapterNumber = chapterNumber;
    setIsCurrentPageEditable(forEditing);
    const chapterIndex = chapterNumber - 1;
    const chapter = getChapter(chapterIndex);
    
    if (!chapter) {
        console.error(`Chapter not found: ${chapterNumber}`);
        return;
    }

    const container = document.querySelector('.container');
    container.innerHTML = `<div class="chapter-page"><p>Loading chapter...</p></div>`;
    window.location.hash = `chapter-${chapterNumber}`;
    
    try {
        await renderChapterPage(chapterNumber, chapter, forEditing);
    } catch (error) {
        console.error(`Couldn't load chapter: ${error}`);
        container.innerHTML = `<div class="chapter-page"><p>Failed to load chapter</p></div>`;
    }
}

export async function renderChapterPage(chapterNumber, chapter, forEditing) {
    let displayTitleForPage = chapter.title;
    const actMatch = chapter.title.match(/^Act (\d+): (.*)$/);
    if (!actMatch || parseInt(actMatch[1]) !== chapterNumber) {
        displayTitleForPage = `Act ${chapterNumber}: ${chapter.title}`;
    }

    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="chapter-page">
            <h1 class="chapter-title-main" ${forEditing ? 'contenteditable="true"' : ''}>${displayTitleForPage}</h1>
            <div class="chapter-content" ${forEditing ? 'contenteditable="true"' : ''}>${chapter.content}</div>
            <div class="chapter-navigation">
                ${chapterNumber > 1 ? 
                    `<a class="nav-button" data-nav="prev" href="#chapter-${chapterNumber - 1}" data-chapter="${chapterNumber - 1}">Previous Chapter</a>` : ''}
                <a class="nav-button" data-nav="home" href="#">Back to Index</a>
                ${chapterNumber < getChapterCount() ? 
                    `<a class="nav-button" data-nav="next" href="#chapter-${chapterNumber + 1}" data-chapter="${chapterNumber + 1}">Next Chapter</a>` : ''}
            </div>
        </div>
    `;

    const lang = getCurrentLanguage();
    if (lang !== 'en' && !forEditing) {
        await new Promise(resolve => setTimeout(resolve, 0));
        const chapterPage = container.querySelector('.chapter-page');
        const loadingOverlay = document.getElementById('loading-overlay');
        loadingOverlay.style.display = 'flex';
        await translateElement(chapterPage, lang);
        loadingOverlay.style.display = 'none';
    }
    
    if (forEditing && getIsEditMode()) {
        await new Promise(resolve => setTimeout(resolve, 0));
        const chapterPage = container.querySelector('.chapter-page');
        const richTextModule = await import('rich_text_editor');
        richTextModule.initializeRichTextEditor();
        
        const editableElements = container.querySelectorAll('[contenteditable="true"]');
        editableElements.forEach(element => {
            richTextModule.setupRichTextEventListeners(element);
        });
    }
    
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const navType = event.target.dataset.nav;
            if (navType === 'home') {
                currentChapterNumber = null;
                setIsCurrentPageEditable(false);
                // Re-render the main page content
                const container = document.querySelector('.container');
                container.innerHTML = `
                    <h1>Adrift in the Oceans of Creation</h1>
                    <h2 class="subtitle">Lavender</h2>
                    
                    <div class="summary">
                        <h2>Story Summary</h2>
                        <p id="story-summary-text">Generating summary...</p>
                    </div>

                    <div class="decoration">✧ ✦ ✧</div>

                    <ul class="chapters" id="chapters-list"></ul>

                    <div class="decoration">✧ ✦ ✧</div>
                `;
                
                // Clear the hash without reloading
                history.pushState("", document.title, window.location.pathname + window.location.search);
                
                // Re-render chapter list and summary
                renderChapterList();
                generateStorySummary();

                // Apply translations if needed
                const lang = getCurrentLanguage();
                if (lang !== 'en') {
                    setTimeout(async () => {
                        const { translateElement } = await import('language_manager');
                        await translateElement(container, lang);
                    }, 100);
                }
            } else if (navType === 'prev' || navType === 'next') {
                 if (getIsCurrentPageEditable()) {
                    const confirmed = confirm("You have unsaved changes. Do you want to discard them and proceed?");
                    if (!confirmed) {
                        event.preventDefault();
                        return;
                    }
                }
                const targetChapter = parseInt(event.target.dataset.chapter);
                loadChapter(targetChapter, false);
            }
        });
    });
}