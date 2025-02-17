// script.js

// 全域變數：目前分類、搜尋關鍵字及標籤過濾
let currentCategory = "all";
let searchQuery = "";
let currentTag = ""; // 當首頁以 ?tag=... 過濾文章時使用

// 取得 URL 參數的函式
function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// 根據分類、搜尋與標籤過濾並渲染新聞卡片
function renderNews(category = "all", search = "", tag = "") {
  const container = document.getElementById("news-container");
  container.innerHTML = "";
  
  let filteredNews = newsData;
  if (tag.trim() !== "") {
    filteredNews = filteredNews.filter(news => news.tags && news.tags.includes(tag));
  } else if (category !== "all") {
    filteredNews = filteredNews.filter(news => news.category === category);
  }
  
  if (search.trim() !== "") {
    filteredNews = filteredNews.filter(news =>
      news.title.toLowerCase().includes(search.toLowerCase()) ||
      news.description.toLowerCase().includes(search.toLowerCase())
    );
  }
  
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
    card.addEventListener("click", () => {
      window.location.href = "article.html?id=" + news.id;
    });
    container.appendChild(card);
  });
}

// 輪播功能：根據 "featured" 標籤選出文章
let currentSlide = 0;
function renderCarousel() {
  const carousel = document.querySelector(".carousel");
  const featuredNews = newsData.filter(news => news.tags && news.tags.includes("featured"));
  carousel.innerHTML = "";
  featuredNews.forEach(news => {
    const item = document.createElement("div");
    item.className = "carousel-item";
    item.innerHTML = `
      <img src="${news.image}" alt="${news.title}">
      <h3>${news.title}</h3>
    `;
    item.addEventListener("click", () => {
      window.location.href = "article.html?id=" + news.id;
      // 或依需求導向特定標籤頁面：location.href = "index.html?tag=" + encodeURIComponent("featured");
    });
    carousel.appendChild(item);
  });
}

function showSlide(index) {
  const carousel = document.querySelector(".carousel");
  const totalSlides = carousel.children.length;
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
  // 讀取 URL 中的 tag 參數（若有，則以標籤過濾文章）
  const tagParam = getQueryParameter("tag");
  if (tagParam) {
    currentTag = tagParam;
  }
  
  renderNews(currentCategory, searchQuery, currentTag);
  renderCarousel();
  
  document.querySelectorAll(".nav-list li").forEach(li => {
    li.addEventListener("click", function() {
      document.querySelectorAll(".nav-list li").forEach(el => el.classList.remove("active"));
      this.classList.add("active");
      currentCategory = this.getAttrbute("data-category");
      currentTag = ""; // 切換分類時取消標籤過濾
      renderNews(currentCategory, searchQuery, currentTag);
      const navList = document.querySelector(".nav-list");
      if (navList.classList.contains("active")) {
        navList.classList.remove("active");
      }
    });
  });
  
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value;
    renderNews(currentCategory, searchQuery, currentTag);
  });
  
  document.querySelector(".carousel-prev").addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });
  document.querySelector(".carousel-next").addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
  
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.addEventListener("click", () => {
    document.querySelector(".nav-list").classList.toggle("active");
  });
  // 自動輪播設定：每3秒自動切換下一張
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 3000);  // 3000 毫秒 = 3 秒
  
});
