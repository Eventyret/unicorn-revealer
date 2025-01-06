"use strict";
class UnicornRevealer {
    constructor(styles = UnicornRevealer.DEFAULT_STYLES) {
        this.styles = styles;
        this.id = 'unicornSparkle';
    }
    inject() {
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
    static remove() {
        document.querySelector('#unicornSparkle')?.remove();
    }
}
UnicornRevealer.DEFAULT_STYLES = {
    background: '#000',
    color: '#fff',
    outline: '#E91E63'
};
// Initialize and inject
new UnicornRevealer().inject();
