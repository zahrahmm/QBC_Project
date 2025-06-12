import type {User} from "./User.ts";
import type {Product} from "./Product.ts";

export class Order {
    private static orderCount: number = 0;

    private id: number;
    private user: User;
    private product: Product;
    private timeStamp: string;
    private isPaid: boolean;
    private deliverState: string;


    constructor(user: User, product: Product, timeStamp: string) {
        Order.orderCount++;

        this.id = Order.orderCount;
        this.user = user;
        this.product = product;
        this.timeStamp = timeStamp;
        this.isPaid = false;
        this.deliverState = "pending payment";
    }

    get getName() { return this.user.getName; }
    get getProduct() { return this.product; }
    get getTimeStamp() { return this.timeStamp; }
    get getIsPaid() { return this.isPaid; }
    get getDeliverState() { return this.deliverState; }
    get getId() { return this.id; }
    get getUser() { return this.user; }
}