# Meet Shah - Technical Blog

This repository contains my technical blog posts on AI, Cloud Management, and DevSecOps.

## Blog URL

The blog is accessible at [https://shahmeetk.github.io/blogs/](https://shahmeetk.github.io/blogs/)

## Blog Structure

The repository is organized as follows:

- `index.html` - Landing page with links to both the blog and portfolio
- `blogs/` - Directory containing the main blog
  - `index.html` - Main blog landing page with a list of all blog posts
  - `posts/` - Directory containing individual blog posts, each in its own folder
    - `posts/blog-post-name/` - Each blog post has its own folder
      - `index.html` - The blog post content
      - `assets/` - Blog post specific assets (images, etc.)
  - `assets/` - Directory containing shared CSS, JavaScript, and images

## Blog Posts

1. [Building a Professional Tech Portfolio with GitHub Pages](blogs/posts/building-portfolio-with-github-pages/) - A comprehensive guide on creating your own professional portfolio using GitHub Pages, with code examples and best practices.

## Adding New Blog Posts

To add a new blog post:

1. Create a new folder in the `blogs/posts/` directory with a descriptive name (e.g., `blogs/posts/implementing-aiops-solutions/`)
2. Create an `index.html` file in the new folder for the blog post content
   - Make sure to include a navigation bar with links back to the blog index and portfolio
   - Example navigation HTML:

     ```html
     <div class="nav-bar">
         <div class="site-title">Meet Shah's Blog</div>
         <div class="nav-links">
             <a href="/blogs/">Blog Home</a>
             <a href="https://shahmeetk.github.io/">Portfolio</a>
             <a href="https://github.com/shahmeetk" target="_blank">GitHub</a>
         </div>
     </div>
     ```

3. Create an `assets/images/` directory in the blog post folder for post-specific images
4. Update the `blogs/index.html` file to include a link to the new blog post by copying and modifying the template in the comments
5. Commit and push the changes
6. GitHub Actions will automatically deploy your changes to GitHub Pages

## Deployment

This blog is automatically deployed to GitHub Pages using GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`. When you push changes to the main branch, the workflow will:

1. Check out the repository
2. Deploy the content to GitHub Pages

The blog will be available at [https://shahmeetk.github.io/blogs/](https://shahmeetk.github.io/blogs/)

## Portfolio

My professional portfolio is available at [shahmeetk.github.io](https://shahmeetk.github.io). This is a separate repository and is not affected by changes to this blog repository.

## License

This repository is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
