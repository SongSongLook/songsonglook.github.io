//data-category:
//--market
//--crypto
//--forex
//--TA
//--etc


// news data restore
import a1 from "./articles/1.js";
import a2 from "./articles/2.js";
export const newsData = [
  a1,
  a2
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

// 我想把newdata中的每個文章獨立成一個文件檔案方便查閱管理,carouselitems維持不變
//i believe in the moment s calls  now  but my heart goes to destroy the truth 