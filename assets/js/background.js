const contextMenus = {};
chrome.contextMenus.onClicked.addListener(contextMenuHandler);

contextMenus.createUnicornMenu = chrome.contextMenus.create(
  { title: 'Add 🦄🌈 sparkles', contexts: ['all'] },
  function() {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  }
);
contextMenus.removeUnicornMenu = chrome.contextMenus.create(
  { title: 'Remove 🦄🌈 sparkles', contexts: ['all'] },
  function() {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  }
);

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
  return;
}
