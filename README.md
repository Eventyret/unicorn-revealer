# 🦄 Unicorn Revealer

A Chrome extension that helps you find overflow issues on your website with a sparkly unicorn touch! 

## Features

- Quickly identify overflow issues with a single click
- Visual highlighting of all elements
- Easy to toggle on/off
- Lightweight and performant
- Written in TypeScript for better maintainability

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm

### Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/unicorn-revealer.git
cd unicorn-revealer
```

2. Install dependencies
```bash
npm install
```

3. Development mode
```bash
npm run dev
```

4. Production build
```bash
npm run build
```

### Loading the extension in Chrome

1. Build the extension
```bash
npm run build
```

2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select the `dist` directory

### Publishing

#### Manual Publishing
To create a ZIP file for the Chrome Web Store:
```bash
npm run package
```

#### Automated Publishing
This project uses GitHub Actions to automatically publish to the Chrome Web Store when a new version tag is pushed.

1. Set up the following secrets in your GitHub repository:
   - `EXTENSION_ID`: Your Chrome extension ID
   - `CLIENT_ID`: Google OAuth client ID
   - `CLIENT_SECRET`: Google OAuth client secret
   - `REFRESH_TOKEN`: Google OAuth refresh token

2. To publish a new version:
   ```bash
   # Update version in package.json and manifest.json first
   git add .
   git commit -m "Release version X.X.X"
   git tag vX.X.X
   git push && git push --tags
   ```

   The GitHub Action will automatically:
   - Build the extension
   - Create the ZIP file
   - Upload to Chrome Web Store

### Getting Chrome Web Store API Access

1. Create a Google Cloud Project
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project
   - Enable Chrome Web Store API

2. Create OAuth Credentials
   - Go to APIs & Services > Credentials
   - Create OAuth 2.0 Client ID
   - Download client configuration

3. Get Refresh Token
   ```bash
   # Using chrome-webstore-upload-cli
   npx chrome-webstore-upload-cli@2 init
   ```

## License

MIT
