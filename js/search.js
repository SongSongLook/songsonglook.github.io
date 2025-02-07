const searchInput = document.getElementById('searchInput');
const searchResults = document.querySelector('.search-results');

// 模擬文章數據
const articles = [
    { id: 1, title: '機器學習基礎', content: '...' },
    { id: 2, title: 'Python 數據分析', content: '...' }
];

searchInput.addEventListener('input', debounce(handleSearch, 300));

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    
    if (query.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    const results = articles.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query)
    );

    displayResults(results);
}

function displayResults(results) {
    searchResults.innerHTML = results.map(result => `
        <div class="search-result-item" data-id="${result.id}">
            <h4>${result.title}</h4>
            <p>${result.content.substring(0, 50)}...</p>
        </div>
    `).join('');

    searchResults.style.display = 'block';
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}