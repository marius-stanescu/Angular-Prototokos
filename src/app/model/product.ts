export class Product {

    public extras: ProductExtraCategory[] = [];

    constructor(
        public id: number,
        public title: string,
        public price: number,
        public categoryId: string,
        public description?: string,
        public image?: string) { }
}

export class ProductExtraCategory {
    constructor(
        public name: string,
        public isExclusive: boolean,
        public isMandatory: boolean,
        public extras: ProductExtra[]) { }
}

export class ProductExtra {
    constructor(
        public name: string,
        public price: number) { }
}