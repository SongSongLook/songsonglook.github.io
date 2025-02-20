// get URL query parameter
function getQueryParameter(name){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  // 根據搜尋關鍵字過濾 newsData 並顯示結果
  function renderSearchResults(query) {
    const container = document.getElementById("search-results");
    container.innerHTML = "";
  
    // 過濾 newsData（假設 newsData 在 data.js 或 newsData.js 中已定義）
    let results = newsData.filter(news =>
      news.title.toLowerCase().includes(query.toLowerCase()) ||
      news.description.toLowerCase().includes(query.toLowerCase())
    );
  
    if (results.length === 0) {
      container.innerHTML = `<p>No results found for "${query}"</p>`;
    } else {
      results.forEach(news => {
        const card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML = `
          <img src="${news.image}" alt="${news.title}">
          <div class="news-content">
            <h3>${news.title}</h3>
            <p>${news.description}</p>
          </div>
        `;
        card.addEventListener("click", () => {
          window.location.href = "article.html?id=" + news.id;
        });
        container.appendChild(card);
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const query = getQueryParameter("q");
    if (query) {
      renderSearchResults(query);
    } else {
      document.getElementById("search-results").innerHTML = "<p>Please enter a search query.</p>";
    }
  });
  

