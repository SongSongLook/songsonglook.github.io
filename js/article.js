// article.js
import { newsData } from "./data/newsData.js";

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
  
  // tags
  let tagsHtml = "";
  if (article.tags && article.tags.length > 0) {
    tagsHtml = `<div class="article-tags"><span><font face="Gill Sans"><b>TAGS: </b></font></span>`;
    article.tags.forEach(tag => {
      tagsHtml += `<button class="tag-btn" onclick="location.href='index.html?tag=${encodeURIComponent(tag)}'">${tag}</button>`;
    });
    tagsHtml += `</div>`;
  }
  
  // author
  const authorHtml = article.author
    ? `<div class="article-author">Author: ${article.author}</div>`
    : "";

  // tags and author in same row 
  const footerHtml = `<div class="article-footer">
      ${tagsHtml}
      ${authorHtml}
    </div>`;
  
  let sourcesHtml = "";
  if (article.sources && article.sources.length) {
    sourcesHtml = `<div class="article-sources">
      <p><strong>Sources</strong></p>
      <ul>`;
    article.sources.forEach(src => {
      sourcesHtml += `<li><a href="${src}" target="_blank" rel="noopener">${src}</a></li>`;
    });
    sourcesHtml += `</ul>
    </div>`;
  }

  articleContainer.innerHTML = `
    <h1>${article.title}</h1>
    <img src="${article.image}" alt="${article.title}">
    <div class="article-body">
      ${article.fullContent}
    </div>
    ${footerHtml}
    ${sourcesHtml}
    <div class="article-disclaimer">
      <p>All data based as of this writing.</p>
      <p>Disclaimer: This report is based on public information and does not constitute investment advice.</p>
      <p>Crypto and NFT investments carry high risks; proceed with caution.</p>
    </div>
  `;
});