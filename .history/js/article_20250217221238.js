// article.js
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
  
  const article = newsData.find(item => item.id === parseInt(articleId));
  if (!article) {
    articleContainer.innerHTML = "<p>文章不存在。</p>";
    return;
  }
  
  // 生成標籤按鈕區塊（點擊後回首頁並以該標籤過濾）
  let tagsHtml = "";
  if (article.tags && article.tags.length > 0) {
    tagsHtml = `<div class="article-tags"><span><font face="Gill Sans"><b>TAGS: </b></font></span>`;
    article.tags.forEach(tag => {
      tagsHtml += `<button class="tag-btn" onclick="location.href='index.html?tag=${encodeURIComponent(tag)}'">${tag}</button>`;
    });
    tagsHtml += `</div>`;
  }
  
  articleContainer.innerHTML = `
    <h1>${article.title}</h1>
    <img src="${article.image}" alt="${article.title}">
    <div class="article-body">
      ${article.fullContent}
    </div>
    ${tagsHtml}
  `;
});

