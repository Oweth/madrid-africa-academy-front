# Deploying to GitHub Pages

This guide will help you deploy your Real Madrid Academy React app to GitHub Pages.

## Prerequisites

1. Your code must be pushed to a GitHub repository
2. GitHub Pages must be enabled in your repository settings

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. Click "Save"

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Deploy

### Option A: Automatic Deployment (Recommended)
The GitHub Actions workflow will automatically deploy your app when you push to the main branch.

### Option B: Manual Deployment
```bash
npm run deploy
```

## Step 4: Access Your Site

Your site will be available at:
`https://yourusername.github.io/madrid-africa-academy-front/`

## Important Notes

1. **Base Path**: The app is configured with base path `/madrid-africa-academy-front/` - update this in `vite.config.ts` if your repository name is different.

2. **Routing**: The app uses HashRouter instead of BrowserRouter for GitHub Pages compatibility.

3. **Build Output**: The build output goes to the `dist` folder, which is what gets deployed.

## Troubleshooting

### Page Shows Blank
- Check browser console for errors
- Verify the base path in `vite.config.ts` matches your repository name
- Ensure all assets are using relative paths

### Routing Not Working
- The app uses HashRouter which adds `#` to URLs
- Direct links to routes like `/registration` won't work - use `/#/registration` instead

### Assets Not Loading
- Check that all image paths in your components use relative paths
- Verify the `base` path in `vite.config.ts` is correct

## Custom Domain (Optional)

If you want to use a custom domain:
1. Add your domain to the "Custom domain" field in GitHub Pages settings
2. Update the `base` path in `vite.config.ts` to `/` (empty string)
3. Add a CNAME record pointing to `yourusername.github.io`

## Support

If you encounter issues:
1. Check the GitHub Actions tab for build errors
2. Verify all configuration files are correct
3. Test locally with `npm run build && npm run preview`
