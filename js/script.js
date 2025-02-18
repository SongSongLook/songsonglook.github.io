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

/*---------------------------------------------------*/

// 輪播功能：根據 "featured" 標籤選出文章
let currentSlide = 0;
function renderCarousel() {
  const carousel = document.querySelector(".carousel");
  carousel.innerHTML = "";

  // 新增一個專用的系列輪播項目：每週分析標普指數
  const seriesTag = "每週分析標普指數"; // 定義系列標籤名稱
  const seriesItem = document.createElement("div");
  seriesItem.className = "carousel-item series-item";
  seriesItem.innerHTML = `
    <img src="path-to-series-image.jpg" alt="${seriesTag}">
    <h3>${seriesTag}</h3>
    <p>點擊查看最新每週更新</p>
  `;
  seriesItem.addEventListener("click", () => {
    // 點擊後導向首頁並傳遞系列標籤參數，首頁會以此過濾出相關文章
    window.location.href = "index.html?tag=" + encodeURIComponent(seriesTag);
  });
  carousel.appendChild(seriesItem);

  // 接著載入其他具有 featured 標籤的文章
  const featuredNews = newsData.filter(news => news.tags && news.tags.includes("featured"));
  featuredNews.forEach(news => {
    const item = document.createElement("div");
    item.className = "carousel-item";
    item.innerHTML = `
      <img src="${news.image}" alt="${news.title}">
      <h3>${news.title}</h3>
    `;
    item.addEventListener("click", () => {
      window.location.href = "article.html?id=" + news.id;
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
      // 切換 active 狀態
      document.querySelectorAll(".nav-list li").forEach(el => el.classList.remove("active"));
      this.classList.add("active");

      currentCategory = this.getAttribute("data-category");
      currentTag = ""; // 切換分類時取消標籤過濾
      renderNews(currentCategory, searchQuery, currentTag);

      // 手機選單選取後自動隱藏
      const navList = document.querySelector(".nav-list");
      if (navList.classList.contains("active")) {
        navList.classList.remove("active");
      }
    });
  });

  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.addEventListener("click", () => {
    document.querySelector(".nav-list").classList.toggle("active");
  });

  /*--------- 自動輪播與暫停功能---------*/
  // 建立一個全域的 autoSlideInterval 變數
  let autoSlideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 3000);  // 每 3 秒切換一次

  // 取得 carousel 容器元素
  const carouselContainer = document.querySelector(".carousel-container");

  // 當滑鼠進入或觸控開始時暫停自動輪播
  carouselContainer.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });
  carouselContainer.addEventListener("touchstart", () => {
    clearInterval(autoSlideInterval);
  });

  // 當滑鼠離開或觸控結束時重新啟動自動輪播
  carouselContainer.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 3000);
  });
  carouselContainer.addEventListener("touchend", () => {
    autoSlideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 3000);
  });

  /*--------- 輪播箭頭事件 ---------*/
  document.querySelector(".carousel-prev").addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });
  document.querySelector(".carousel-next").addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
  
  /*------------------------------------------*/
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value;
    renderNews(currentCategory, searchQuery, currentTag);
  });
});
  
