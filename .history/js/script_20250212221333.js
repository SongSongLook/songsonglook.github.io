// 全域變數：目前分類與搜尋關鍵字
let currentCategory = "all";
let searchQuery = "";

// 動態生成新聞卡片，加入分類與搜尋的雙重過濾
function renderNews(category = "all", search = "") {
  const container = document.getElementById("news-container");
  container.innerHTML = "";
  
  // 依據分類進行初步過濾
  let filteredNews = (category === "all")
    ? newsData
    : newsData.filter(news => news.category === category);
  
  // 根據搜尋關鍵字進行進一步過濾
  if (search.trim() !== "") {
    filteredNews = filteredNews.filter(news => 
      news.title.toLowerCase().includes(search.toLowerCase()) ||
      news.description.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  // 動態生成新聞卡片
  filteredNews.forEach(news => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.innerHTML = `
      <img src="${news.image}" alt="${news.title}">
      <div class="news-content">
        <h3>${news.title}</h3>
        <p>${news.description}</p>
      </div>
    `;
    // 點擊卡片導向文章詳情頁（使用 URL query 傳遞 id）
    card.addEventListener("click", () => {
      window.location.href = "article.html?id=" + news.id;
    });
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // 初次渲染所有新聞
  renderNews(currentCategory, searchQuery);
  
  // 監聽分類點擊事件
  document.querySelectorAll(".nav-list li").forEach(li => {
    li.addEventListener("click", function() {
      // 切換 active 狀態
      document.querySelectorAll(".nav-list li").forEach(el => el.classList.remove("active"));
      this.classList.add("active");
      
      currentCategory = this.getAttribute("data-category");
      renderNews(currentCategory, searchQuery);
      
      // 手機版選單點擊後自動隱藏
      const navList = document.querySelector(".nav-list");
      if (navList.classList.contains("active")) {
        navList.classList.remove("active");
      }
    });
  });
  
  // 監聽搜尋輸入框事件
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value;
    renderNews(currentCategory, searchQuery);
  });
  
  // 手機版選單點擊切換
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.addEventListener("click", () => {
    document.querySelector(".nav-list").classList.toggle("active");
  });
});
