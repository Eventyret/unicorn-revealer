"use strict";
var MenuItemId;
(function (MenuItemId) {
    MenuItemId["Create"] = "create-unicorn";
    MenuItemId["Remove"] = "remove-unicorn";
})(MenuItemId || (MenuItemId = {}));
class BackgroundService {
    constructor() {
        this.initializeContextMenus();
        this.setupEventListeners();
    }
    initializeContextMenus() {
        for (const [id, config] of Object.entries(BackgroundService.MENU_ITEMS)) {
            chrome.contextMenus.create({
                id,
                ...config
            }, () => {
                const error = chrome.runtime.lastError;
                if (error) {
                    console.error('Context menu creation error:', error.message);
                }
            });
        }
    }
    setupEventListeners() {
        chrome.contextMenus.onClicked.addListener(this.handleContextMenuClick.bind(this));
    }
    async handleContextMenuClick(info) {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            if (!tab.id)
                return;
            switch (info.menuItemId) {
                case MenuItemId.Create:
                    await chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        files: ['dist/unicorn.js']
                    });
                    break;
                case MenuItemId.Remove:
                    await chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        func: () => {
                            document.querySelector('#unicornSparkle')?.remove();
                        }
                    });
                    break;
            }
        }
        catch (error) {
            console.error('Error handling context menu click:', error);
        }
    }
}
BackgroundService.MENU_ITEMS = {
    [MenuItemId.Create]: {
        title: 'Add 🦄🌈 sparkles',
        contexts: ['all']
    },
    [MenuItemId.Remove]: {
        title: 'Remove 🦄🌈 sparkles',
        contexts: ['all']
    }
};
// Initialize the background service
new BackgroundService();
