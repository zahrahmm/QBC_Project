import type { productType } from "../types/productType";

export const products: productType[] = [
  {
    productName: "Apple iPhone 14 Pro",
    productPrice: 15000,
    productCardImage:
      "./src/assets/iphone-14-pro-model-unselect-gallery-1-202209.svg",
    productDescription:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. صفحه نمایش با فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه گانه ...",
    productRate: 5,
    productBrand: "اپل",
    productUpdateTime: new Date(), // Using the current date/time
    productAvailability: 52,
    productReviewCount: 4202,
  },
];
