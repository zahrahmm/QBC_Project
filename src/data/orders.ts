import {Order} from "../models/Order.ts";
import {User} from "../models/User.ts";
import {Product} from "../models/Product.ts";

const user = new User("Ali", "ali@gmail.com", "pass", true);
const product1 = new Product("Mobile", 1000, "https://shop.fairphone.com/theme_fairphone/static/src/img/webshop_page_migrate/fp5green_carouselshop");
const product2 = new Product("Laptop", 200, "https://shop.fairphone.com/theme_fairphone/static/src/img/webshop_page_migrate/fp5green_carouselshop");
const product3 = new Product("airpod", 100, "https://shop.fairphone.com/theme_fairphone/static/src/img/webshop_page_migrate/fp5green_carouselshop");
const product4 = new Product("Dishwasher", 2000, "https://shop.fairphone.com/theme_fairphone/static/src/img/webshop_page_migrate/fp5green_carouselshop");



export const orders = [
    new Order(user, product3, "1403/4/23"),
    new Order(user, product4, "1403/5/12"),
    new Order(user, product2, "1403/1/3"),
    new Order(user, product1, "1403/3/3"),
];