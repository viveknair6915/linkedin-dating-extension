# LinkedIn Dating Mode Extension
A lightweight Chrome extension that transforms LinkedIn profiles into a playful dating interface.
A playful Chrome extension that transforms LinkedIn profiles into a fun “dating mode” overlay.

<details>
  <summary>📑 Table of Contents</summary>

  1. [Features](#features)  
  2. [Prerequisites](#prerequisites)  
  3. [Installation & Local Testing](#installation--local-testing)  
  4. [Deployment on Vercel](#deployment-on-vercel)  
  5. [Configuration](#configuration)  
  6. [Usage](#usage)  
  7. [Project Structure](#project-structure)  
  8. [Customization & Extension](#customization--extension)  
  9. [Contributing](#contributing)  
  10. [License](#license)
</details>

<details>
  <summary>✨ Features</summary>

  - **Dating Overlay**: Injects a styled card on profile pages with name, prompt, and “Send Crush” button.  
  - **Toggle Control**: Enable/disable via popup checkbox.  
  - **SPA Compatibility**: Works with LinkedIn’s dynamic navigation.  
  - **Lightweight**: Pure JavaScript + CSS, no frameworks.  
  - **Customizable**: Easily tweak text, styles, and behavior.
</details>

<details>
  <summary>⚙️ Prerequisites</summary>

  - **Chrome Browser** (v88+)  
  - **Node.js & npm** (for CLI tools)  
  - **Git** (version control)  
  - **Vercel CLI** (for deployment)
</details>

<details>
  <summary>🚀 Installation & Local Testing</summary>

  1. **Clone the repo**  
     ```bash
     git clone https://github.com/<your-username>/linkedin-dating-extension.git
     cd linkedin-dating-extension
     ```
  2. **Add icons** in `icons/` (icon16.png, icon48.png, icon128.png).  
  3. **Load in Chrome**  
     - Go to `chrome://extensions/`  
     - Enable **Developer mode**  
     - Click **Load unpacked** → select project folder  
  4. **Enable Dating Mode** via the extension’s popup checkbox.  
  5. **Test** on any LinkedIn profile: overlay appears; click **Send Crush**.
</details>

<details>
  <summary>☁️ Deployment on Vercel</summary>

  1. **Prepare ZIP**  
     ```bash
     zip -r linkedin-dating-extension.zip *
     mkdir public
     mv linkedin-dating-extension.zip public/
     ```
  2. **Add Landing Page** (`index.html` at root):
     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8"/>
       <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
       <title>LinkedIn Dating Mode</title>
       <style>
         body { font-family: Arial, sans-serif; max-width:600px; margin:40px auto; text-align:center; }
         a.button { padding:12px 24px; background:#ff3377; color:#fff; border-radius:8px; text-decoration:none; }
       </style>
     </head>
     <body>
       <h1>LinkedIn Dating Mode</h1>
       <p>Turn LinkedIn into a playful dating site!</p>
       <a class="button" href="/linkedin-dating-extension.zip" download>Download ZIP</a>
       <h2>Install</h2>
       <ol style="text-align:left;">
         <li>Extract ZIP.</li>
         <li>Open <code>chrome://extensions/</code>.</li>
         <li>Enable Developer mode.</li>
         <li>Load unpacked → selected folder.</li>
       </ol>
     </body>
     </html>
     ```
  3. **Deploy**  
     ```bash
     npm install -g vercel
     vercel login
     vercel --prod
     ```
     - Preset: **Other**  
     - Output directory: `public`  
  4. **Share** your live URL (e.g. `https://<your-project>.vercel.app`), with ZIP at `/linkedin-dating-extension.zip`.
</details>

<details>
  <summary>🔧 Configuration</summary>

  - **chrome.storage.sync** key:  
    - `datingMode` (boolean) — toggle overlay  
  - **content.js**: adjust text, selectors, button behavior  
  - **styles.css**: customize colors, fonts, positioning
</details>

<details>
  <summary>🎯 Usage</summary>

  1. Click the extension icon → toggle **Dating Mode**.  
  2. Visit any LinkedIn profile to see and interact with the overlay.  
  3. Use for demos, pranks, or team-building fun!
</details>

<details>
  <summary>📁 Project Structure</summary>

  ```bash
  linkedin-dating-extension/
  ├── icons/
  │   ├── icon16.png
  │   ├── icon48.png
  │   └── icon128.png
  ├── content.js
  ├── manifest.json
  ├── popup.html
  ├── popup.js
  ├── styles.css
  ├── index.html           
  ├── README.md
  └── public/
      └── linkedin-dating-extension.zip
```

</details> <details> <summary>🛠️ Customization & Extension</summary>
UI Enhancements: animations, custom graphics

Backend Hooks: log “crush” events or send notifications

Cross-browser: adapt manifest.json for Firefox/Edge

</details> <details> <summary>🤝 Contributing</summary>
Fork & clone.

Create a branch: git checkout -b feature/name.

Commit & push.

Open a Pull Request.

</details> <details> <summary>📜 License</summary>
MIT © Vivek

</details>
