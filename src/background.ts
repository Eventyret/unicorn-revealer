enum MenuItemId {
  Create = 'create-unicorn',
  Remove = 'remove-unicorn'
}

interface MenuConfig {
  title: string;
  contexts: chrome.contextMenus.ContextType[];
}

type ScriptDetails =
  | { files: string[] }
  | { func: () => void };

class BackgroundService {
  private static readonly MENU_ITEMS: Record<MenuItemId, MenuConfig> = {
    [MenuItemId.Create]: {
      title: 'Add 🦄🌈 sparkles',
      contexts: ['all']
    },
    [MenuItemId.Remove]: {
      title: 'Remove 🦄🌈 sparkles',
      contexts: ['all']
    }
  };

  constructor() {
    this.initializeContextMenus();
    this.setupEventListeners();
  }

  private initializeContextMenus(): void {
    for (const [id, config] of Object.entries(BackgroundService.MENU_ITEMS)) {
      chrome.contextMenus.create(
        { 
          id,
          ...config
        },
        () => {
          const error = chrome.runtime.lastError;
          if (error) {
            console.error('Context menu creation error:', error.message);
          }
        }
      );
    }
  }

  private setupEventListeners(): void {
    chrome.contextMenus.onClicked.addListener(this.handleContextMenuClick.bind(this));
  }

  private async handleContextMenuClick(info: chrome.contextMenus.OnClickData): Promise<void> {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab.id) return;

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
    } catch (error) {
      console.error('Error handling context menu click:', error);
    }
  }
}

// Initialize the background service
new BackgroundService();
