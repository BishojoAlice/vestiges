export function initializeRichTextEditor() {
    // Ensure the global toolbar exists
    addRichTextToolbar();
    
    // Set up event listeners for all current contenteditable elements
    document.querySelectorAll('[contenteditable="true"]').forEach(element => {
        setupRichTextEventListeners(element);
    });
}

export function cleanupRichTextEditor() {
    document.querySelectorAll('.rich-text-toolbar').forEach(toolbar => {
        toolbar.remove();
    });
}

function executeCommand(command, element, value = null) {
    element.focus();
    document.execCommand(command, false, value);
}

function updateToolbarState(toolbar, element) {
    const buttons = toolbar.querySelectorAll('.toolbar-button');
    buttons.forEach(button => {
        const command = button.dataset.command;
        try {
            const isActive = document.queryCommandState(command);
            button.classList.toggle('active', isActive);
        } catch (e) {
            // Ignore commands that don't support queryCommandState
        }
    });

    const formatDropdown = toolbar.querySelector('[data-command="formatBlock"]');
    if(formatDropdown) {
        const currentFormat = document.queryCommandValue('formatBlock');
        formatDropdown.value = currentFormat || 'div';
    }
}

export function setupRichTextEventListeners(element) {
    const update = () => {
        const toolbar = document.querySelector('.rich-text-toolbar'); // Get the global toolbar
        if (toolbar) {
            updateToolbarState(toolbar, element);
        }
    };

    element.addEventListener('keyup', update);
    element.addEventListener('mouseup', update);
    element.addEventListener('focus', update); // Also update on focus
    
    element.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            let command = null;
            switch (e.key.toLowerCase()) {
                case 'b': command = 'bold'; break;
                case 'i': command = 'italic'; break;
                case 'u': command = 'underline'; break;
            }
            if(command){
                e.preventDefault();
                executeCommand(command, element);
                update();
            }
        }
    });
}

export function addRichTextToolbar() {
    // Prevent adding multiple toolbars
    if (document.querySelector('.rich-text-toolbar')) {
        return;
    }
    
    const toolbar = document.createElement('div');
    toolbar.className = 'rich-text-toolbar';
    toolbar.innerHTML = `
        <button class="toolbar-button" data-command="bold" title="Bold (Ctrl+B)"><b>B</b></button>
        <button class="toolbar-button" data-command="italic" title="Italic (Ctrl+I)"><i>I</i></button>
        <button class="toolbar-button" data-command="underline" title="Underline (Ctrl+U)"><u>U</u></button>
        <div class="toolbar-separator"></div>
        <select class="toolbar-dropdown" data-command="formatBlock" title="Format">
            <option value="p">Paragraph</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="div">Normal</option>
        </select>
        <div class="toolbar-separator"></div>
        <button class="toolbar-button" data-command="justifyLeft" title="Align Left">◧</button>
        <button class="toolbar-button" data-command="justifyCenter" title="Align Center">▣</button>
        <button class="toolbar-button" data-command="justifyRight" title="Align Right">◨</button>
        <div class="toolbar-separator"></div>
        <button class="toolbar-button" data-command="insertUnorderedList" title="Bullet List">•</button>
        <button class="toolbar-button" data-command="insertOrderedList" title="Numbered List">1.</button>
        <div class="toolbar-separator"></div>
        <button class="toolbar-button" data-command="removeFormat" title="Clear Formatting">⌫</button>
    `;
    
    document.body.appendChild(toolbar);
    
    const handler = (e) => {
        e.preventDefault();
        const target = e.target.closest('[data-command]');
        if (target) {
            const command = target.dataset.command;
            const activeElement = document.activeElement;
            
            const value = target.tagName === 'SELECT' ? target.value : null;
            executeCommand(command, activeElement, value);
            updateToolbarState(toolbar, activeElement);
        }
    };
    
    toolbar.addEventListener('click', handler);
    toolbar.addEventListener('change', handler);
}