// 解析 URL 參數取得新聞 id
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const articleId = getQueryParameter("id");
    const articleContainer = document.getElementById("article-content");
  
    if (!articleId) {
      articleContainer.innerHTML = "<p>文章不存在。</p>";
      return;
    }
    
    // 根據 id 尋找對應新聞資料（轉換成數字比對）
    const article = newsData.find(item => item.id === parseInt(articleId));
    if (!article) {
      articleContainer.innerHTML = "<p>文章不存在。</p>";
      return;
    }
    
    // 填入文章詳情：標題、圖片與完整內容
    articleContainer.innerHTML = `
      <h1>${article.title}</h1>
      <img src="${article.image}" alt="${article.title}">
      <div class="article-body">
        <p>${article.fullContent}</p>
      </div>
    `;
  });
  