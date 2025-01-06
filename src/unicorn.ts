import * as analytics from './analytics';
import { DEFAULT_SETTINGS, type StyleConfig } from './storage';

class UnicornRevealer {
  private readonly id = 'unicornSparkle';
  private tooltipElement: HTMLElement | null = null;
  private styleElement: HTMLElement | null = null;

  constructor(private styles: StyleConfig = DEFAULT_SETTINGS.styles) {
    this.injectOrRemove();
  }

  private injectOrRemove(): void {
    if (this.styleElement) {
      this.remove();
    } else {
      this.inject();
    }
  }

  public async inject(): Promise<void> {
    const { excludeSelectors = [] } = this.styles;
    
    // Create a unique selector for all elements except those in excludeSelectors
    const mainSelector = excludeSelectors.length 
      ? `*:not(${excludeSelectors.join('):not(')}):not(#${this.id}):not(#${this.id} *)`
      : `*:not(#${this.id}):not(#${this.id} *)`;
    
    const css = `
      ${mainSelector} {
        background: ${this.styles.background} !important;
        color: ${this.styles.color} !important;
        outline: ${this.styles.outlineWidth} ${this.styles.outlineStyle} ${this.styles.outline} !important;
      }

      .unicorn-tooltip {
        position: fixed;
        background: ${this.styles.background};
        color: ${this.styles.color};
        border: 1px solid ${this.styles.outline};
        padding: 8px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 2147483647;
      }
    `;

    const style = document.createElement('style');
    style.id = this.id;
    style.textContent = css;
    document.body.appendChild(style);
    this.styleElement = style;

    this.addElementInspection();
    analytics.track('inject');
  }

  public remove(): void {
    if (this.styleElement && document.body.contains(this.styleElement)) {
      document.body.removeChild(this.styleElement);
      this.styleElement = null;
    }
    if (this.tooltipElement && document.body.contains(this.tooltipElement)) {
      document.body.removeChild(this.tooltipElement);
      this.tooltipElement = null;
    }
    analytics.track('remove');
  }

  private addElementInspection(): void {
    document.addEventListener('mouseover', this.handleMouseOver.bind(this));
    document.addEventListener('mouseout', this.handleMouseOut.bind(this));
  }

  private handleMouseOver(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (!target || target.id === this.id || target.closest(`#${this.id}`)) return;

    this.showTooltip(target, e);
  }

  private handleMouseOut(): void {
    this.hideTooltip();
  }

  private showTooltip(element: HTMLElement, event: MouseEvent): void {
    const computed = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();

    const info = {
      tag: element.tagName.toLowerCase(),
      id: element.id ? `#${element.id}` : '',
      classes: Array.from(element.classList).map(c => `.${c}`).join(''),
      dimensions: `${Math.round(rect.width)} × ${Math.round(rect.height)}`,
      margin: `${computed.marginTop} ${computed.marginRight} ${computed.marginBottom} ${computed.marginLeft}`,
      padding: `${computed.paddingTop} ${computed.paddingRight} ${computed.paddingBottom} ${computed.paddingLeft}`
    };

    this.tooltipElement = this.createTooltipElement(info);
    this.positionTooltip(this.tooltipElement, event);
    document.body.appendChild(this.tooltipElement);
  }

  private createTooltipElement(info: Record<string, string>): HTMLElement {
    const tooltip = document.createElement('div');
    tooltip.className = 'unicorn-tooltip';
    
    const content = Object.entries(info)
      .filter(([_, value]) => value)
      .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
      .join('<br>');

    tooltip.innerHTML = content;
    return tooltip;
  }

  private positionTooltip(tooltip: HTMLElement, event: MouseEvent): void {
    const offset = 15;
    let x = event.pageX + offset;
    let y = event.pageY + offset;

    const rect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (x + rect.width > viewportWidth) {
      x = event.pageX - rect.width - offset;
    }

    if (y + rect.height > viewportHeight) {
      y = event.pageY - rect.height - offset;
    }

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
  }

  private hideTooltip(): void {
    if (this.tooltipElement) {
      this.tooltipElement.remove();
      this.tooltipElement = null;
    }
  }
}

// Initialize and inject
let revealer: UnicornRevealer | null = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  try {
    if (message.type === 'activate' && message.settings) {
      if (revealer) {
        revealer.remove();
      }
      revealer = new UnicornRevealer(message.settings.styles);
      revealer.inject().then(() => sendResponse({ success: true }));
    } else if (message.type === 'deactivate') {
      if (revealer) {
        revealer.remove();
        analytics.track('remove');
        revealer = null;
      }
      sendResponse({ success: true });
    } else if (message.type === 'toggle') {
      if (revealer) {
        revealer.remove();
        analytics.track('remove');
        revealer = null;
        sendResponse({ success: true });
      } else {
        chrome.runtime.sendMessage({ type: 'getSettings' }, (response) => {
          if (response?.settings) {
            revealer = new UnicornRevealer(response.settings.styles);
            revealer.inject().then(() => sendResponse({ success: true }));
          }
        });
      }
    }
  } catch (error) {
    console.error('Error in message handler:', error);
    sendResponse({ success: false, error: error.message });
  }
  return true; // Keep the message channel open for async response
});
