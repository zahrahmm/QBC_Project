export class Product {
    private name: string;
    private price: number;
    private imageUrl: string;

    constructor(name: string, price: number, imageUrl: string) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    get getName() { return this.name; }
    get getPrice() { return this.price; }
    get getImageUrl() { return this.imageUrl; }

}