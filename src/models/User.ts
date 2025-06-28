import type {Order} from "./Order.ts";

export class User {
    private static userCount: number = 0;

    private id: number;
    private name: string;
    private email: string;
    private password: string;
    private orderList: Order[];
    private isAdmin: boolean;

    constructor(name: string, email: string, password: string, isAdmin: boolean) {
        User.userCount++;

        this.id = User.userCount;
        this.name = name;
        this.email = email;
        this.password = password;
        this.orderList = [];
        this.isAdmin = isAdmin;
    }

    get getId(): number { return this.id; }
    get getName() { return this.name; }
    get getEmail() { return this.email; }
    get getPassword() { return this.password; }
    get getOrderList() { return this.orderList; }
    get getIsAdmin() { return this.isAdmin; }
}