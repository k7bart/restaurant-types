import { BaseEntity } from "./common";
import { Dish } from "./menu";
import { Address } from "./user";

interface Order extends BaseEntity {
    date: Date;
    amount: number;
    address: Address;
    orderedItems: Dish[];
}

export { Order };
