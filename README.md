# Meet Shah's Technical Blog

This repository contains my technical blog posts on AI, Cloud Management, and DevSecOps.

## Blog Posts

1. [Building an LLM API Key Validator: A Streamlit App for AI Developers](posts/llm-api-key-validator.html) - A comprehensive tool for validating and managing API keys across multiple AI providers, with automatic provider detection and detailed quota information.
2. [Building a Professional Tech Portfolio with GitHub Pages](posts/building-portfolio-with-github-pages.html) - A comprehensive guide on creating your own professional portfolio using GitHub Pages, with code examples and best practices.

## Creating a New Blog Post

### Step 1: Copy the Template

Copy the template file from `posts/template.html` to a new file in the `posts/` directory with a descriptive name:

```bash
cp posts/template.html posts/your-new-post-name.html
```

### Step 2: Customize the Content

Edit the new file to add your blog post content. Be sure to update:

- The `<title>` tag
- The main heading (`<h1>`)
- The subtitle
- The main content
- The author information (especially the date)
- Any images or code examples

### Step 3: Add Images (Optional)

If your blog post includes images, create a directory for your post-specific assets:

```bash
mkdir -p posts/your-new-post-name/assets/images
```

Add your images to this directory and reference them in your blog post.

### Step 4: Update the Main Index

Update the `index.html` file to include your new blog post by copying and modifying the template in the comments.

### Step 5: Update the README.md

Add your new blog post to the list in this README.md file.

### Step 6: Commit and Push

Commit your changes and push them to the main branch:

```bash
git add posts/your-new-post-name.html posts/your-new-post-name/ index.html README.md
git commit -m "Add new blog post: Your Post Title"
git push origin main
```

The GitHub Actions workflow will automatically deploy your changes to GitHub Pages. You can check the status of the deployment in the "Actions" tab of the repository.

## Repository Structure

The repository is organized as follows:

```text
/
├── index.html                  # Main blog landing page
├── README.md                   # This file
├── GITHUB_PAGES_SETUP.md       # Detailed GitHub Pages setup instructions
├── .nojekyll                   # Tells GitHub Pages not to use Jekyll
├── .github/                    # GitHub-specific files
│   └── workflows/              # GitHub Actions workflows
│       └── pages.yml           # Deployment workflow
├── assets/                     # Shared assets
│   └── css/                    # Stylesheets
│       ├── tech-theme.css      # Main stylesheet
│       └── ai-tech-theme.css   # Additional styles
└── posts/                      # Blog posts
    ├── template.html           # Template for new blog posts
    ├── building-portfolio-with-github-pages.html  # Blog post 1
    ├── llm-api-key-validator.html                 # Blog post 2
    └── post-name/              # Directories for post-specific assets
        └── assets/
            └── images/         # Post-specific images
```

## Blog Theme and Structure

The blog uses a consistent theme across all posts:

### Colors

- Primary color: `#0284c7` (blue)
- Secondary text: `#757575` (gray)
- Background color: `#fff` (white)
- Text color: `#292929` (dark gray)
- Border color: `#e6e6e6` (light gray)
- Code background: `#f5f5f5` (light gray)

### Fonts

- Main text: 'Inter', sans-serif
- Code: 'Fira Code', monospace

### Structure

Each blog post follows this structure:

1. **Header**
   - Title
   - Subtitle/brief description
   - Category badge

2. **Introduction**
   - Overview of the topic
   - Why it's important
   - What the reader will learn

3. **Main Content**
   - Divided into logical sections with h2 headings
   - Subsections with h3 headings
   - Code examples where relevant
   - Images to illustrate concepts
   - Lists for steps or key points

4. **Conclusion**
   - Summary of key points
   - Next steps or further reading
   - Call to action (if applicable)

5. **Share Section**
   - Social media sharing buttons

## Analytics

The blog uses Google Analytics to track visitor statistics. The tracking code is included in the template and should be preserved in all blog posts:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WXYSSSTTMB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-WXYSSSTTMB');
</script>
```

## Sample Template

A complete template for new blog posts is available in the `posts/template.html` file. This template includes:

- The standard HTML structure
- All CSS styling
- Google Analytics integration
- Syntax highlighting for code blocks
- Placeholder content with examples of various elements (headings, lists, code blocks, images, etc.)

## Deployment

The blog is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by GitHub Actions.

### Deployment Process

1. When changes are pushed to the main branch, a GitHub Actions workflow is triggered
2. The workflow copies all content from the main branch to the gh-pages branch
3. GitHub Pages serves the content from the gh-pages branch

### GitHub Actions Workflow

The deployment is managed by a GitHub Actions workflow file (`.github/workflows/pages.yml`). This workflow:

- Triggers automatically when changes are pushed to the main branch
- Uses the [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action) to copy content to the gh-pages branch
- Ensures that the gh-pages branch is always up-to-date with the main branch

### GitHub Pages Configuration

The repository is configured to serve content from the gh-pages branch. To ensure GitHub Pages deployment works correctly:

1. Go to the repository on GitHub
2. Click on "Settings"
3. Scroll down to the "Pages" section in the left sidebar
4. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages" and "/ (root)"

### Troubleshooting Deployment Issues

If deployments are not working:

1. Check the "Actions" tab in the repository to see if the workflow is running and if there are any errors
2. Ensure the repository has GitHub Pages enabled in the repository settings
3. Verify that the gh-pages branch exists and is properly configured in the Pages settings
4. Check if there are any build errors in the GitHub Actions logs

For more detailed information, see the [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) file.

## Navigation

- [Main Blog Index](index.html)
- [Portfolio](https://shahmeetk.github.io/)
- [GitHub Profile](https://github.com/shahmeetk)
