# GitHub Pages Setup

This repository is configured to deploy to GitHub Pages using GitHub Actions. The workflow automatically pushes the content from the main branch to the gh-pages branch, which is then served by GitHub Pages.

## Configuration

The GitHub Actions workflow (.github/workflows/pages.yml) is set up to:

1. Trigger when changes are pushed to the main branch
2. Copy all content from the main branch to the gh-pages branch
3. Deploy the gh-pages branch to GitHub Pages

## Repository Settings

To ensure GitHub Pages deployment works correctly, please check the following settings in your GitHub repository:

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "Pages" section in the left sidebar
4. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages" and "/ (root)"

## Workflow

The deployment process works as follows:

1. You push changes to the main branch
2. GitHub Actions workflow is triggered
3. The workflow copies all content from main to gh-pages
4. GitHub Pages serves the content from the gh-pages branch

## Troubleshooting

If deployments are not working:

1. Check the "Actions" tab in your repository to see if the workflow is running and if there are any errors
2. Ensure the repository has GitHub Pages enabled in the repository settings
3. Verify that the branch name in the workflow file matches the branch you're pushing to (gh-pages)
4. Check if there are any build errors in the GitHub Actions logs
5. Ensure the GitHub token has sufficient permissions (contents: write)
6. Check if the gh-pages branch exists and is properly configured in the Pages settings
