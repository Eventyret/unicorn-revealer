export interface StyleConfig {
  background: string;
  color: string;
  outline: string;
  outlineWidth: string;
  outlineStyle: string;
  highlightScrollbars: boolean;
  excludeSelectors?: string[];
}

export interface StoredSettings {
  enabled: boolean;
  styles: StyleConfig;
}

export const DEFAULT_SETTINGS: StoredSettings = {
  enabled: false,
  styles: {
    background: '#000000',
    color: '#ffffff',
    outline: '#E91E63',
    outlineWidth: '1px',
    outlineStyle: 'solid',
    highlightScrollbars: true,
    excludeSelectors: []
  }
};

export async function getSettings(): Promise<StoredSettings> {
  const result = await chrome.storage.sync.get('settings');
  return result.settings || DEFAULT_SETTINGS;
}

export async function saveSettings(settings: StoredSettings): Promise<void> {
  await chrome.storage.sync.set({ settings });
}

export async function updateStyles(styles: Partial<StyleConfig>): Promise<void> {
  const settings = await getSettings();
  await saveSettings({
    ...settings,
    styles: { ...settings.styles, ...styles }
  });
}

export async function toggleEnabled(): Promise<boolean> {
  try {
    const settings = await getSettings();
    settings.enabled = !settings.enabled;
    await saveSettings(settings);
    
    // Send message to content script
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.id) {
      await chrome.tabs.sendMessage(tab.id, {
        type: settings.enabled ? 'activate' : 'deactivate',
        settings
      });
    }
    
    return settings.enabled;
  } catch (error) {
    console.error('Error toggling enabled state:', error);
    return false;
  }
}
