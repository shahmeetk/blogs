# GitHub Pages Setup

To ensure GitHub Pages deployment works correctly, please check the following settings in your GitHub repository:

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "Pages" section in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
   - This will use the workflow file we've added (.github/workflows/pages.yml)

If you prefer to use the default GitHub Pages deployment instead of GitHub Actions:
1. Source: Select "Deploy from a branch"
2. Branch: Select "main" and "/ (root)"

After making these changes, the site should deploy automatically when changes are pushed to the main branch.

## Troubleshooting

If deployments are still not working:

1. Check the "Actions" tab in your repository to see if the workflow is running and if there are any errors
2. Ensure the repository has GitHub Pages enabled in the repository settings
3. Verify that the branch name in the workflow file matches the branch you're pushing to
4. Check if there are any build errors in the GitHub Actions logs
