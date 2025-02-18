//data-category:
//--market
//--crypto
//--forex
//--TA
//--etc
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
    }
  ];

  // 定義 carousel 資料
const carouselItems = [
  {
    type: "series",  // 系列專用項目
    tag: "每週分析標普指數",
    image: "images/截圖 2024-05-26 下午9.32.11.png",
    title: "每週分析標普指數",
    description: "點擊查看最新每週更新"
  },
  {
    type: "featured", // 其他 featured 文章項目
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
  // 可以再新增更多項目
];
