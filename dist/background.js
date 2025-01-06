// src/background.ts
var MENU_ID = "toggle-unicorn-revealer";
chrome.contextMenus.onClicked.addListener(contextMenuHandler);
chrome.contextMenus.create(
  {
    id: MENU_ID,
    title: "Toggle \u{1F984}\u{1F308} Revealer",
    contexts: ["all"]
  },
  () => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  }
);
async function contextMenuHandler(info) {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id || info.menuItemId !== MENU_ID) return;
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const existingSparkle = document.getElementById("unicornSparkle");
      if (existingSparkle) {
        existingSparkle.remove();
      } else {
        const sparkle = document.createElement("style");
        sparkle.id = "unicornSparkle";
        sparkle.textContent = `
          * {
            background: #000 !important;
            color: #fff !important;
            outline: 1px solid #E91E63 !important;
          }
        `;
        document.body.appendChild(sparkle);
      }
    }
  });
}
