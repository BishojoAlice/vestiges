import { chapters as initialChapters } from 'chapters_data';

let chapters;

export function initializeChapters() {
    const savedChapters = localStorage.getItem('chapters_data');
    try {
        const parsed = savedChapters ? JSON.parse(savedChapters) : null;
        if (Array.isArray(parsed) && parsed.length > 0) {
            chapters = parsed;
        } else {
            chapters = initialChapters;
        }
    } catch (e) {
        console.error("Failed to parse saved chapters, using default.", e);
        chapters = initialChapters;
    }
}

export function getChapters() {
    return chapters;
}

export function getChapter(index) {
    if (index >= 0 && index < chapters.length) {
        return chapters[index];
    }
    return null;
}

export function getChapterCount() {
    return chapters.length;
}

export function updateChapter(index, title, content) {
    if (chapters[index]) {
        if (title !== undefined) {
            chapters[index].title = title;
        }
        if (content !== undefined) {
            chapters[index].content = content;
        }
    }
}

export function addNewChapter() {
    const newChapter = {
        title: "New Chapter",
        content: "Start writing your new chapter here..."
    };
    chapters.push(newChapter);
}

export function deleteChapter(index) {
     if (index > -1 && index < chapters.length) {
        const chapterTitle = chapters[index].title;
        const confirmed = confirm(`Are you sure you want to delete the chapter: "${chapterTitle}"?`);
        if (confirmed) {
            chapters.splice(index, 1);
            saveChapters();
            return true;
        }
     }
     return false;
}

export function saveChapters() {
    try {
        localStorage.setItem('chapters_data', JSON.stringify(chapters));
        console.log("Changes saved to localStorage.");
        return true;
    } catch (error) {
        console.error("Failed to save chapters:", error);
        alert("Error: Could not save changes. Your data might be too large for local storage.");
        return false;
    }
}