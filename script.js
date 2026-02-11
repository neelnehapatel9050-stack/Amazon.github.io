document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    const boxes = document.querySelectorAll('.box');

    function filterBoxes() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        boxes.forEach(box => {
            const title = box.querySelector('h2').textContent.toLowerCase();
            if (title.includes(searchTerm) || searchTerm === '') {
                box.classList.remove('hidden');
            } else {
                box.classList.add('hidden');
            }
        });
    }

    searchInput.addEventListener('input', filterBoxes);
    searchIcon.addEventListener('click', filterBoxes);
});