
function openImages(category) {
    const containers = document.querySelectorAll('.img-container');

    containers.forEach(function(container) {
        const imgCategory = container.getAttribute('data-category');

        if (category === 'ALL' || imgCategory === category.toLowerCase()) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}
