# Meet Shah's Technical Blog

This repository contains my technical blog posts on AI, Cloud Management, and DevSecOps.

## Blog Posts

1. [Building an LLM API Key Validator: A Streamlit App for AI Developers](posts/llm-api-key-validator/) - A comprehensive tool for validating and managing API keys across multiple AI providers, with automatic provider detection and detailed quota information.
2. [Building a Professional Tech Portfolio with GitHub Pages](posts/building-portfolio-with-github-pages/) - A comprehensive guide on creating your own professional portfolio using GitHub Pages, with code examples and best practices.

## Creating a New Blog Post

### Step 1: Create a New Directory

Create a new directory in the `posts/` folder with a descriptive name using kebab-case (e.g., `implementing-aiops-solutions`).

```bash
mkdir -p posts/your-post-name/assets/images
```

### Step 2: Copy the Template

Copy the template files from the `posts/template/` directory to your new blog post directory.

```bash
cp posts/template/index.html posts/your-post-name/
```

### Step 3: Customize the Content

Edit the `index.html` file to add your blog post content. Be sure to update:

- The `<title>` tag
- The main heading (`<h1>`)
- The subtitle
- The main content
- The author information (especially the date)
- Any images or code examples

### Step 4: Add Images (Optional)

If your blog post includes images, add them to the `assets/images/` directory in your post folder.

### Step 5: Update the Main README.md

Add your new blog post to the list in this README.md file.

### Step 6: Update the Main Blog Index

Update the `index.html` file in the root directory to include your new blog post.

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

- Main text: 'Source Serif Pro', serif
- Headings and UI elements: 'Source Sans Pro', sans-serif

### Structure

Each blog post follows this structure:

1. **Header**
   - Title
   - Subtitle/brief description

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

5. **Author Information**
   - Name
   - Title
   - Date
   - Social links

## Analytics

The blog uses Google Analytics to track visitor statistics. The tracking code is included in the template and should be preserved in all blog posts:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WXYSSSTTMB"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WXYSSSTTMB');
</script>
```

## Sample Template

A complete template for new blog posts is available in the `posts/template/` directory. This template includes:

- The standard HTML structure
- All CSS styling
- Google Analytics integration
- Placeholder content with examples of various elements (headings, lists, code blocks, images, etc.)

## Navigation

- [Main Blog Index](index.html)
- [Portfolio](https://shahmeetk.github.io/)
- [GitHub Profile](https://github.com/shahmeetk)
