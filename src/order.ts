import type { BaseEntity } from "./common";
import type { Dish } from "./menu";
import type { Address, User } from "./user";

interface Customer extends Pick<User, "name" | "phone">, BaseEntity {
    surname?: User["surname"];
}

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
    pickupAddress?: { id: string; text: string };
    total: number;
}

export type { Customer, DeliveryMethod, Order, PaymentMethod };
