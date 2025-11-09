const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input', function() {
    const searchValue = searchBar.value.toLowerCase();
    const items = document.querySelectorAll('.item-card');

    items.forEach(item => {
        const name = item.querySelector('.item-name').textContent.toLowerCase();
        item.style.display = name.includes(searchValue) ? '' : 'none';
    });
});
