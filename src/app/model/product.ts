export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public categoryId: string,
        public description?: string) { }
}