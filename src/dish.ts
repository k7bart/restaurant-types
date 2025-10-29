import { BaseEntity } from "./common";

interface Dish extends BaseEntity {
    name: string;
    category: string;
    amount: number;
}

export { Dish };
