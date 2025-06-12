import type {Order} from "./Order.ts";

export class User {
    private name: string;
    private email: string;
    private password: string;
    private orderList: Order[];

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.orderList = [];
    }

    get getName() { return this.name; }
    get getEmail() { return this.email; }
    get getPassword() { return this.password; }
    get getOrderList() { return this.orderList; }
}