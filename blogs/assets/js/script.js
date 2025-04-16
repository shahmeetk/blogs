document.addEventListener('DOMContentLoaded', function() {
    // Add animation to blog cards
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
