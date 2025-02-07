document.addEventListener('DOMContentLoaded', () => {
    // 動態生成主題內容
    const topics = [
        { title: '人工智慧', count: 15 },
        { title: '數據科學', count: 22 },
        { title: '網頁開發', count: 18 }
    ];

    const topicsGrid = document.querySelector('.topics-grid');
    
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <h3>${topic.title}</h3>
            <p>${topic.count} 篇文章</p>
        `;
        topicsGrid.appendChild(card);
    });

    // 文章卡片的點擊事件
    document.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = 'article.html?id=' + card.dataset.id;
        });
    });
});