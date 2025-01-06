import * as analytics from './analytics';
import { DEFAULT_SETTINGS, getSettings, saveSettings, type StoredSettings, type StyleConfig, toggleEnabled } from './storage';

class PopupUI {
  private settings: StoredSettings | null = null;
  private form: HTMLFormElement;
  private saveTimeout: number | null = null;

  constructor() {
    const form = document.querySelector('form#settings');
    if (!form) throw new Error('Form not found');
    this.form = form as HTMLFormElement;
    this.initialize();
  }

  private async initialize(): Promise<void> {
    this.settings = await getSettings();
    this.setupFormElements();
    this.setupEventListeners();
    this.updateUI();
  }

  private setupFormElements(): void {
    if (!this.settings) return;

    const { styles } = this.settings;
    const entries = Object.entries(styles);
    for (const [key, value] of entries) {
      const input = this.form.querySelector(`[name="${key}"]`);
      if (!input || !(input instanceof HTMLInputElement)) continue;

      if (input.type === 'checkbox') {
        input.checked = value as boolean;
      } else if (input.type === 'color') {
        input.value = value as string;
        const textInput = document.getElementById(`${key}Text`);
        if (textInput instanceof HTMLInputElement) {
          textInput.value = value as string;
        }
      } else {
        input.value = value as string;
      }
    }
  }

  private setupEventListeners(): void {
    this.form.addEventListener('change', this.handleFormChange.bind(this));
    this.form.addEventListener('submit', (e) => e.preventDefault());

    const toggleButton = document.querySelector('#toggleRevealer');
    if (toggleButton instanceof HTMLButtonElement) {
      toggleButton.addEventListener('click', this.handleToggle.bind(this));
    }

    const resetButton = document.querySelector('#resetSettings');
    if (resetButton instanceof HTMLButtonElement) {
      resetButton.addEventListener('click', this.handleReset.bind(this));
    }

    const analyticsCheckbox = document.querySelector('#analyticsEnabled');
    if (analyticsCheckbox instanceof HTMLInputElement) {
      analyticsCheckbox.addEventListener('change', this.handleAnalyticsToggle.bind(this));
    }

    // Setup color text input sync
    const colorInputs = ['background', 'color', 'outline'];
    for (const color of colorInputs) {
      const colorInput = this.form.querySelector(`[name="${color}"]`);
      const textInput = document.getElementById(`${color}Text`);
      
      if (colorInput instanceof HTMLInputElement && textInput instanceof HTMLInputElement) {
        colorInput.addEventListener('input', () => {
          textInput.value = colorInput.value;
          this.handleFormChange({ target: colorInput } as unknown as Event);
        });

        textInput.addEventListener('input', () => {
          if (/^#[0-9A-Fa-f]{6}$/.test(textInput.value)) {
            colorInput.value = textInput.value;
            this.handleFormChange({ target: colorInput } as unknown as Event);
          }
        });
      }
    }
  }

  private async handleFormChange(event: Event): Promise<void> {
    const target = event.target;
    if (!target || !(target instanceof HTMLInputElement) || !this.settings) return;

    const name = target.name as keyof StyleConfig;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.settings.styles = {
      ...this.settings.styles,
      [name]: value
    };

    // Debounce save
    if (this.saveTimeout) {
      window.clearTimeout(this.saveTimeout);
    }

    this.saveTimeout = window.setTimeout(async () => {
      if (this.settings) {
        await saveSettings(this.settings);
        await this.updateActiveTab();
        await analytics.logEvent('settings_updated', { setting: name, value });
      }
    }, 500);
  }

  private async handleToggle(): Promise<void> {
    const enabled = await toggleEnabled();
    this.updateToggleButton(enabled);
    await this.updateActiveTab();
    await analytics.logEvent('revealer_toggled', { enabled });
  }

  private async handleReset(): Promise<void> {
    this.settings = { ...DEFAULT_SETTINGS };
    await saveSettings(this.settings);
    this.setupFormElements();
    await this.updateActiveTab();
    await analytics.logEvent('settings_reset');
  }

  private async handleAnalyticsToggle(event: Event): Promise<void> {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    await analytics.enableAnalytics(target.checked);
  }

  private updateToggleButton(enabled: boolean): void {
    const button = document.querySelector('#toggleRevealer');
    if (!(button instanceof HTMLButtonElement)) return;
    
    button.textContent = enabled ? 'Disable Revealer' : 'Enable Revealer';
    button.classList.toggle('active', enabled);
  }

  private async updateActiveTab(): Promise<void> {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.id && this.settings) {
      await chrome.tabs.sendMessage(tab.id, { 
        type: this.settings.enabled ? 'activate' : 'deactivate',
        settings: this.settings
      });
    }
  }

  private updateUI(): void {
    if (!this.settings) return;
    this.updateToggleButton(this.settings.enabled);
  }
}

// Initialize popup
new PopupUI();
