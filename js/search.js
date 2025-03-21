// 取得 URL 參數的函式
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  // 根據搜尋關鍵字過濾 newsData 並顯示結果
  function renderSearchResults(query) {
    const container = document.getElementById("search-results");
    container.innerHTML = "";
    let results = newsData.filter(news =>
      news.title.toLowerCase().includes(query.toLowerCase()) ||
      news.description.toLowerCase().includes(query.toLowerCase())
    );
  
    if (results.length === 0) {
      container.classList.add("empty-search");
      container.innerHTML = `<p>Nothing match: "<font size="10px">${query}</font>"</p>`;
    } else {
      results.forEach(news => {
        const card = document.createElement("div");
        card.className = "news-card-search";
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
    const searchQueryElem = document.getElementById("search-query");
    
    if (query) {
      searchQueryElem.textContent = `Results：${query}`;
      searchQueryElem.classList.remove("empty-search");
      renderSearchResults(query);
    } else {
      searchQueryElem.textContent = "Enter something";
      searchQueryElem.classList.add("empty-search");
      document.getElementById("search-results").innerHTML = "<p>Nothing here</p>";
    }
  });

