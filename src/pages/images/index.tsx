export { default as icon } from "./logopage.png";
export { default as homepage } from "./homepage.jpg";
export { default as homesectiondescription } from "./homesectiondescription.jpg";
export { default as about } from "./about_us.jpg";

const images = {
  Image1: require("./slideImage/product-1.png").default,
  Image2: require("./slideImage/product-2.png").default,
  Image3: require("./slideImage/product-3.png").default,
};

export type ImageKey = keyof typeof images;
export default images;
