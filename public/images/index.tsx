import icon from "./common/logopage.png";
import homepage from "./common/homepage.jpg";
import homesectiondescription from "./common/homesectiondescription.jpg";
import about from "./common/about_us.jpg";
import imagesProductDetail_1 from "./product/product-4.jpg";
import imagesProductDetail_2 from "./product/product-5.jpg";
import imagesProduct_2 from "./product/productIndex_2.png";
import promotion from "./common/promotion.jpg";

const images = {
  Image1: require("./slideImage/product-1.png").default,
  Image2: require("./slideImage/product-2.png").default,
  Image3: require("./slideImage/product-3.png").default,
};
export type ImageKey = keyof typeof images;

const products = {
  Image6: require("./product/product-6.jpg").default,
  Image7: require("./product/product-7.jpg").default,
  Image8: require("./product/product-8.jpg").default,
  Image9: require("./product/product-9.jpg").default,
  Image10: require("./product/product-10.jpg").default,
  Image11: require("./product/product-11.jpg").default,
  Image12: require("./product/product-12.jpg").default,
  Image13: require("./product/product-13.jpg").default,
};
export type ProductKey = keyof typeof products;

const gallery: { [key: string]: string } = {};

for (let i = 1; i <= 68; i++) {
  gallery[`gallery_${i}`] = require(`./gallery/g${i}.jpg`).default;
}


export { icon, homepage, homesectiondescription, about, imagesProductDetail_1, imagesProductDetail_2, images, products, imagesProduct_2, gallery, promotion};
