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

  // 依序處理 data.js 中定義的 carouselItems
  carouselItems.forEach(item => {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";
    
    // 根據類型做不同處理
    if (item.type === "series") {
      carouselItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      carouselItem.addEventListener("click", () => {
        window.location.href = "index.html?tag=" + encodeURIComponent(item.tag);
      });
    } else if (item.type === "featured") {
      carouselItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
      `;
      carouselItem.addEventListener("click", () => {
        window.location.href = "article.html?id=" + item.id;
      });
    }
    
    carousel.appendChild(carouselItem);
  });
  updatePagination();
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
  updatePagination();
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
  const searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.getElementById("search-input").value.trim();
    if (query) {
      // 導向搜尋結果頁，並將搜尋關鍵字以 q 為參數傳遞
      window.location.href = "search.html?q=" + encodeURIComponent(query);
    }
  });
});

function updatePagination() {
  const carousel = document.querySelector(".carousel");
  const totalSlides = carousel.children.length;
  // 更新文字：顯示目前頁數和總頁數
  const paginationInfo = document.getElementById("pagination-info");
  if (paginationInfo) {
    paginationInfo.textContent = (currentSlide + 1) + " / " + totalSlides;
  }
  
  // 更新 dots
  const dotsContainer = document.querySelector(".pagination-dots");
  if (dotsContainer) {
    dotsContainer.innerHTML = ""; // 清空舊的 dots
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === currentSlide) {
        dot.classList.add("active");
      }
      // 點擊 dot 時可直接切換到該頁
      dot.addEventListener("click", () => {
        showSlide(i);
      });
      dotsContainer.appendChild(dot);
    }
  }
}

/*---------------------------------------------------*/

let lastScrollTop = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", function() {
  // 取得目前捲動的垂直位置
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // 向下捲動且超過 150px 後隱藏 nav list
  if (currentScroll > lastScrollTop && currentScroll > 180) {
    nav.style.transform = "translateY(-100%)";  // 隱藏 nav
  } else {
    nav.style.transform = "translateY(0)";       // 顯示 nav
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});




