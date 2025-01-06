// src/storage.ts
var DEFAULT_SETTINGS = {
  enabled: false,
  styles: {
    background: "#000000",
    color: "#ffffff",
    outline: "#E91E63",
    outlineWidth: "1px",
    outlineStyle: "solid",
    highlightScrollbars: true,
    excludeSelectors: []
  }
};
async function getSettings() {
  const result = await chrome.storage.sync.get("settings");
  return result.settings || DEFAULT_SETTINGS;
}
async function saveSettings(settings) {
  await chrome.storage.sync.set({ settings });
}
async function updateStyles(styles) {
  const settings = await getSettings();
  await saveSettings({
    ...settings,
    styles: { ...settings.styles, ...styles }
  });
}
async function toggleEnabled() {
  try {
    const settings = await getSettings();
    settings.enabled = !settings.enabled;
    await saveSettings(settings);
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.id) {
      await chrome.tabs.sendMessage(tab.id, {
        type: settings.enabled ? "activate" : "deactivate",
        settings
      });
    }
    return settings.enabled;
  } catch (error) {
    console.error("Error toggling enabled state:", error);
    return false;
  }
}
export {
  DEFAULT_SETTINGS,
  getSettings,
  saveSettings,
  toggleEnabled,
  updateStyles
};
