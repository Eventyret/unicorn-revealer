const contextMenus = {};

contextMenus.createUnicornMenu = chrome.contextMenus.create(
  { title: 'Sparkle some magic 🌈 dust on this page', contexts: ['all'] },
  function() {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  }
);
contextMenus.removeUnicornMenu = chrome.contextMenus.create(
  { title: 'Remove the sparkling 🌈 you created' },
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
  if (info.menuItemId === contextMenus.removeUnicornMenu) {
    chrome.tabs.executeScript({
      code: 'document.getElementById("unicornSparkle").remove()'
    });
  }
}
