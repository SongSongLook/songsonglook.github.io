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
      title: "NASDAQ weekly review",
      category: "market",
      description: "04/13/25 UTC+8",
      image: "images/NAS100_2025-04-13_21-43-11_030df.jpg",
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
      title: "Morph Black NFT and Card:<br>An Innovative Attempt at Web3 High-End Finance",
      category: "crypto",
      description: "04/13/25 UTC+8",
      image: "images/2025032719221225318018.jpg",
      fullContent:  `
      <p><strong>As of April 13, 2025, </strong>Morph, a consumer-focused blockchain, has ignited enthusiasm in the Web3 financial space with its Morph Black NFT and accompanying Morph Black Card. Positioned as a limited-edition non-fungible token (NFT), the Morph Black NFT serves not only as a collectible but also as a gateway to premium financial services. And i will delve into its core features, investment potential, inherent risks, and whether it can stand out in the PayFi (Payment Finance) landscape.</p>

      <p><strong>Introduction to Morph Black NFT and Card</strong></p>
      <p>Launched on March 27, 2025, with a limited supply of 3,000 units on the Ethereum blockchain, the Morph Black NFT achieved a trading volume of 223 ETH (approximately $380,000) within 24 hours, with its floor price surpassing 1 ETH (around $1,700). It serves as the exclusive entry to the Morph Black Card, a premium financial card that blends decentralized finance (DeFi) with traditional banking, targeting high-net-worth users with innovative offerings.</p>

      <p><strong>Market Performance and Evaluation</strong></p>
      <p>The Morph Black NFT quickly gained market recognition post-launch, with OpenSea data showing a stable floor price around 1 ETH, reflecting investor confidence in its ecosystem value. As a PayFi innovation, the Black Card aims to merge DeFi’s high returns with traditional finance’s convenience, appealing to Web3-savvy high-net-worth individuals. Its strengths and weaknesses are as follows: The Black Card offers up to 30% annualized yield, a 0.3% low conversion fee, and no annual fee, surpassing traditional banking, while staking (launched April 2025) and airdrops (e.g., BulbaSwap) generate passive income for holders; the physical card’s luxurious design (22g black gold) and perks (e.g., VIP lounges, Web3 summit tickets) combine utility with status. However, the requirement to purchase an NFT (~$1,700) limits accessibility, returns hinge on DeFi market stability and Morph’s ecosystem growth, and underperforming projects (e.g., BulbaSwap’s low trading volume) could diminish airdrop value; compared to traditional cards (e.g., Amex Platinum), its consumption experience is less robust, with NFT price volatility adding investment risk.</p>

      <p></p>
      <p>picture source:https://www.techflowpost.com/article/detail_24623.html</p>
      <p>All data based as of this writing.</p>
    `,
    tags: ["政治", "featured"]
    },
  ];

  // carousel items data restore
const carouselItems = [
  {
    type: "series",  // series 
    tag: "NQ",
    image: "images/NAS100_2025-04-13_21-43-11_030df.jpg",
    title: "NASDAQ weekly review",
    description: "click here to be the insider "
  },
  {
    type: "featured", // display specific article 
    id: 2,
    image: "images/2025032719221225318018.jpg",
    title: "What is morph black card?"
  },
  
];