# Vercel Deployment Guide

This project is configured for deployment on Vercel using Vite.

## Prerequisites

1. A GitHub account
2. A Vercel account (sign up at [vercel.com](https://vercel.com))

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import Project on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

3. **Configure Build Settings**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (or leave default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For Production Deployment**
   ```bash
   vercel --prod
   ```

## Configuration Files

### `vercel.json`
This file is already configured for SPA routing:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### `vite.config.js`
Optimized for Vercel deployment with PDF asset support.

## Build Commands

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`

## Important Notes

1. **PDF Files**: All PDF certificates are included in the build and will be served from the `/assets` directory.

2. **Environment Variables**: If you need to add environment variables, add them in Vercel Dashboard → Project Settings → Environment Variables.

3. **Custom Domain**: After deployment, you can add a custom domain in Vercel Dashboard → Project Settings → Domains.

4. **Automatic Deployments**: Vercel automatically deploys on every push to your main branch.

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (Vercel uses Node 18+ by default)
- Check build logs in Vercel Dashboard

### PDFs Not Loading
- Verify PDF files are in `src/assets/` directory
- Check that PDF imports in `Certificates.jsx` match actual file names
- Ensure file names don't have special characters that might cause issues

### Routing Issues
- Verify `vercel.json` is in the root directory
- Check that all routes are handled by React Router
- Ensure `base: '/'` in `vite.config.js`

## Support

For Vercel-specific issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
