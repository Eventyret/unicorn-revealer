const contextMenus = {};

contextMenus.createUnicornMenu = chrome.contextMenus.create(
  { title: 'Sparkle some magic 🌈 dust on this page', contexts: ['page'] },
  function() {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  }
);

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info) {
  if (info.menuItemId === contextMenus.createUnicornMenu) {
    chrome.tabs.executeScript({
      file: 'assets/js/unicorn.js'
    });
  }
}
