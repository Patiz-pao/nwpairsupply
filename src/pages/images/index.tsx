import icon from "./common/logopage.png";
import homepage from "./common/homepage.jpg";
import homesectiondescription from "./common/homesectiondescription.jpg";
import about from "./common/about_us.jpg";
import imagesProductDetail_1 from "./product/product-4.jpg";
import imagesProductDetail_2 from "./product/product-5.jpg";

const images = {
  Image1: require("./slideImage/product-1.png").default,
  Image2: require("./slideImage/product-2.png").default,
  Image3: require("./slideImage/product-3.png").default,
};

const products = {
  Image6: require("./product/product-6.jpg").default,
  Image7: require("./product/product-7.jpg").default,
  Image8: require("./product/product-8.jpg").default,
  Image9: require("./product/product-9.jpg").default,
  Image10: require("./product/product-10.jpg").default,
  Image11: require("./product/product-11.jpg").default,
  Image12: require("./product/product-12.jpg").default,
};

export type ImageKey = keyof typeof images;
export type ProductKey = keyof typeof products;
export { icon, homepage, homesectiondescription, about, imagesProductDetail_1, imagesProductDetail_2, images, products };
