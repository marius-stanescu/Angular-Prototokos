export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public categoryId: string,
        public description?: string,
        public image?: string) { }
}