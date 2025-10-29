import { BaseEntity } from "./common";
import { Dish } from "./dish";
import { Address } from "./user";

interface Order extends BaseEntity {
    date: Date;
    amount: number;
    address: Address;
    orderedItems: Dish[]; // or Tickets
}

export { Order };
