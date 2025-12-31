# How to Deploy to GitHub

Your project is ready to be hosted on GitHub! Follow these steps carefully:

## Step 1: Create a Repository on GitHub
1.  Go to [GitHub.com](https://github.com/) and sign in.
2.  Click the **+** icon in the top right and select **New repository**.
3.  Name the repository: **`new-year-mahrukh`**.
    *   *Note: If you choose a different name, you must update `vite.config.js` and `package.json` to match.*
4.  Make sure it is **Public**.
5.  **Do NOT** initialize with README, .gitignore, or License (keep it empty).
6.  Click **Create repository**.

## Step 2: Configure Your Project
**DONE!** I have already configured your files:
*   `package.json` homepage is set to `https://bablu560.github.io/new-year-mahrukh`
*   `vite.config.js` base is set to `/new-year-mahrukh/`

## Step 3: Connect and Deploy
Open your terminal located at `c:\Users\Muhammad Haseeb\Desktop\nn` and run these commands:

```powershell
# 1. Initialize Git (if not already done)
git init

# 2. Add your new GitHub repository as the remote
# ONLY RUN THIS IF YOU HAVEN'T ADDED ORIGIN YET
git remote add origin https://github.com/bablu560/new-year-mahrukh.git

# 3. Add all files to git
git add .

# 4. Commit your changes
git commit -m "Ready for New Year - For Mahrukh"

# 5. Push your code to GitHub (main branch)
git branch -M main
git push -u origin main

# 6. Deploy to GitHub Pages
npm run deploy
```

## Step 4: View Your Site!
After the deploy command finishes (it might take a minute):
1.  Go to your GitHub repository settings.
2.  Click **Pages** (on the left sidebar).
3.  You should see "Your site is live at..."
4.  Visit: **https://bablu560.github.io/new-year-mahrukh/**
5.  Send it to Mahrukh! 💖
