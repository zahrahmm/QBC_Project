
import type { productType } from "./src/App.tsx"; 

export const products: productType[] = [
  {
    productName: "Apple iPhone 14 Pro",
    productPrice: 15000,
    productCardImage: "./", // IMPORTANT: Replace with your actual image path
    productDescription: "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. صفحه نمایش با فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه گانه ...",
    productRate: 5,
    productBrand: "اپل",
    productUpdateTime: new Date(), // Using the current date/time
    productAvailability: 52,
    productReviewCount: 4202,
  },
  // You can add other product objects here for other slides
];