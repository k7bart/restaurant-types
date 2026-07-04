import type { BaseEntity } from "./common";
import type { Dish } from "./menu";
import type { Address, User } from "./user";

type Customer = Pick<User, "firstName" | "lastName" | "phone"> & BaseEntity;

type DeliveryMethod = "delivery" | "selfPickup" | "advance";
type PaymentMethod = "cash" | "online" | "card";

interface Order extends BaseEntity {
    address?: Address;
    createdAt?: Date;
    customer: Customer;
    deliveryDateTime?: Date;
    deliveryMethod: DeliveryMethod;
    orderComment?: string;
    orderedItems: Dish[];
    paymentMethod: PaymentMethod;
    pickupAddress?: Address;
    total: number;
}

export type { Customer, DeliveryMethod, Order, PaymentMethod };
