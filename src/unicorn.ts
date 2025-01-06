interface StyleConfig {
  readonly background: string;
  readonly color: string;
  readonly outline: string;
}

class UnicornRevealer {
  private static readonly DEFAULT_STYLES: StyleConfig = {
    background: '#000',
    color: '#fff',
    outline: '#E91E63'
  };

  private readonly id = 'unicornSparkle';

  constructor(private styles: StyleConfig = UnicornRevealer.DEFAULT_STYLES) {}

  public inject(): void {
    const css = `
      * {
        background: ${this.styles.background} !important;
        color: ${this.styles.color} !important;
        outline: 1px solid ${this.styles.outline} !important;
      }
    `;

    const styleElement = document.createElement('div');
    styleElement.id = this.id;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = css;
    styleElement.appendChild(styleSheet);
    
    document.body.appendChild(styleElement);
  }

  public static remove(): void {
    document.querySelector('#unicornSparkle')?.remove();
  }
}

// Initialize and inject
new UnicornRevealer().inject();
