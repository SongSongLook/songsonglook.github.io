//data-category:
//--market
//--crypto
//--forex
//--TA
//--etc

// news data restore
const newsData = [
    {
      id: 1,
      title: "BTC weekly review",
      category: "TA",
      description: "test 02/10/25 UTC+8",
      image: "images/截圖 2024-05-26 下午9.32.11.png",
      fullContent:  `
      <p>完整的政治新聞內容：詳細描述政治事件、背景與可能的影響，讓讀者獲得更深入的了解。</p>
      <p>在這裡你可以插入圖片：</p>
      <img src="https://via.placeholder.com/600x400?text=內文圖片" alt="內文圖片">
      <p>圖片說明：這是一張示意圖。也可以使用 <strong>加粗文字</strong> 來強調重點。</p>
    `,
    tags: ["btc", "analysis"]
    },
    {
      id: 2,
      title: "BTC weekly review",
      category: "crypto",
      description: "test 02/10/25 UTC+8",
      image: "images/截圖 2024-05-26 下午9.32.11.png",
      fullContent:  `
      <p>完整的政治新聞內容：詳細描述政治事件、背景與可能的影響，讓讀者獲得更深入的了解。</p>
      <p>在這裡你可以插入圖片：</p>
      <img src="https://via.placeholder.com/600x400?text=內文圖片" alt="內文圖片">
      <p>圖片說明：這是一張示意圖。也可以使用 <strong>加粗文字</strong> 來強調重點。</p>
    `,
    tags: ["政治", "featured"]
    },
    {
      id: 3,
      title: "BTC weekly review",
      category: "QTT",
      description: "test 02/10/25 UTC+8",
      image: "images/截圖 2024-05-26 下午9.32.11.png",
      fullContent:  `
      <p>完整的政治新聞內容：詳細描述政治事件、背景與可能的影響，讓讀者獲得更深入的了解。</p>
      <p>在這裡你可以插入圖片：</p>
      <img src="https://via.placeholder.com/600x400?text=內文圖片" alt="內文圖片">
      <p>圖片說明：這是一張示意圖。也可以使用 <strong>加粗文字</strong> 來強調重點。</p>
    `,
    tags: ["政治", "featured"]
    },
    {
      id: 4,
      title: "BTC weekly review",
      category: "crypto",
      description: "test 02/10/25 UTC+8",
      image: "images/截圖 2024-05-26 下午9.32.11.png",
      fullContent:  `
      <p>完整的政治新聞內容：詳細描述政治事件、背景與可能的影響，讓讀者獲得更深入的了解。</p>
      <p>在這裡你可以插入圖片：</p>
      <img src="https://via.placeholder.com/600x400?text=內文圖片" alt="內文圖片">
      <p>圖片說明：這是一張示意圖。也可以使用 <strong>加粗文字</strong> 來強調重點。</p>
    `,
    tags: ["政治", "featured"]
    },
    {
      id: 4,
      title: "BTC weekly review",
      category: "crypto",
      description: "test 02/10/25 UTC+8",
      image: "images/截圖 2024-05-26 下午9.32.11.png",
      fullContent:  `
      <p>完整的政治新聞內容：詳細描述政治事件、背景與可能的影響，讓讀者獲得更深入的了解。</p>
      <p>在這裡你可以插入圖片：</p>
      <img src="https://via.placeholder.com/600x400?text=內文圖片" alt="內文圖片">
      <p>圖片說明：這是一張示意圖。也可以使用 <strong>加粗文字</strong> 來強調重點。</p>
    `,
    tags: ["政治", "featured"]
    },
    {
      id: 4,
      title: "BTC weekly review",
      category: "crypto",
      description: "test 02/10/25 UTC+8",
      image: "images/截圖 2024-05-26 下午9.32.11.png",
      fullContent:  `
      <p>完整的政治新聞內容：詳細描述政治事件、背景與可能的影響，讓讀者獲得更深入的了解。</p>
      <p>在這裡你可以插入圖片：</p>
      <img src="https://via.placeholder.com/600x400?text=內文圖片" alt="內文圖片">
      <p>圖片說明：這是一張示意圖。也可以使用 <strong>加粗文字</strong> 來強調重點。</p>
    `,
    tags: ["政治", "featured"]
    },
    {
      id: 4,
      title: "BTC weekly review",
      category: "crypto",
      description: "test 02/10/25 UTC+8",
      image: "images/截圖 2024-05-26 下午9.32.11.png",
      fullContent:  `
      <p>完整的政治新聞內容：詳細描述政治事件、背景與可能的影響，讓讀者獲得更深入的了解。</p>
      <p>在這裡你可以插入圖片：</p>
      <img src="https://via.placeholder.com/600x400?text=內文圖片" alt="內文圖片">
      <p>圖片說明：這是一張示意圖。也可以使用 <strong>加粗文字</strong> 來強調重點。</p>
    `,
    tags: ["政治", "featured"]
    },
    {
      id: 4,
      title: "BTC weekly review",
      category: "crypto",
      description: "test 02/10/25 UTC+8",
      image: "images/截圖 2024-05-26 下午9.32.11.png",
      fullContent:  `
      <p>完整的政治新聞內容：詳細描述政治事件、背景與可能的影響，讓讀者獲得更深入的了解。</p>
      <p>在這裡你可以插入圖片：</p>
      <img src="https://via.placeholder.com/600x400?text=內文圖片" alt="內文圖片">
      <p>圖片說明：這是一張示意圖。也可以使用 <strong>加粗文字</strong> 來強調重點。</p>
    `,
    tags: ["政治", "featured"]
    },
    {
      id: 4,
      title: "BTC weekly review",
      category: "crypto",
      description: "test 02/10/25 UTC+8",
      image: "images/截圖 2024-05-26 下午9.32.11.png",
      fullContent:  `
      <p>完整的政治新聞內容：詳細描述政治事件、背景與可能的影響，讓讀者獲得更深入的了解。</p>
      <p>在這裡你可以插入圖片：</p>
      <img src="https://via.placeholder.com/600x400?text=內文圖片" alt="內文圖片">
      <p>圖片說明：這是一張示意圖。也可以使用 <strong>加粗文字</strong> 來強調重點。</p>
    `,
    tags: ["政治", "featured"]
    },
    {
      id: 4,
      title: "BTC weekly review",
      category: "crypto",
      description: "test 02/10/25 UTC+8",
      image: "images/截圖 2024-05-26 下午9.32.11.png",
      fullContent:  `
      <p>完整的政治新聞內容：詳細描述政治事件、背景與可能的影響，讓讀者獲得更深入的了解。</p>
      <p>在這裡你可以插入圖片：</p>
      <img src="https://via.placeholder.com/600x400?text=內文圖片" alt="內文圖片">
      <p>圖片說明：這是一張示意圖。也可以使用 <strong>加粗文字</strong> 來強調重點。</p>
    `,
    tags: ["政治", "featured"]
    }
  ];

  // carousel items data restore
const carouselItems = [
  {
    type: "series",  // series 
    tag: "snp500",
    image: "images/截圖 2024-05-26 下午9.32.11.png",
    title: "Weekly S&P500 analysis",
    description: "點擊查看最新每週更新"
  },
  {
    type: "featured", // display specific article 
    id: 101,
    image: "images/截圖 2024-05-26 下午9.32.11.png",
    title: "Featured News Title 1"
  },
  {
    type: "featured",
    id: 102,
    image: "images/截圖 2024-05-26 下午9.32.11.png",
    title: "Featured News Title 2"
  }
  
];
