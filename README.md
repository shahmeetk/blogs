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

## Navigation

- [Main Blog Index](index.html)
- [Portfolio](https://shahmeetk.github.io/)
- [GitHub Profile](https://github.com/shahmeetk)
