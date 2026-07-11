import type { BaseEntity } from "./common";
import type { CartItem } from "./cart";
import type { Address, User } from "./user";

type Customer = Pick<User, "firstName" | "lastName" | "phone" | "email"> &
    BaseEntity;

type DeliveryMethod = "delivery" | "selfPickup" | "advance";

type PaymentMethod = "cash" | "online" | "card";

type OrderStatus = "new" | "confirmed" | "cancelled" | "completed";

type OrderedItem = Pick<CartItem, "id" | "quantity"> &
    BaseEntity & {
        priceAtPurchase: number;
    };

interface Order extends BaseEntity {
    address?: Address;
    createdAt?: Date;
    customer: Customer;
    deliveryDateTime?: Date;
    deliveryMethod: DeliveryMethod;
    isCallNeeded?: boolean;
    orderComment?: string;
    orderedItems: OrderedItem[];
    paymentMethod: PaymentMethod;
    promoCode?: string;
    status: OrderStatus;
    total: number;
}

type OrderRequest = Pick<
    Order,
    | "address"
    | "customer"
    | "deliveryDateTime"
    | "deliveryMethod"
    | "isCallNeeded"
    | "orderComment"
    | "orderedItems"
    | "paymentMethod"
    | "promoCode"
    | "total"
>;

export type {
    Customer,
    DeliveryMethod,
    Order,
    OrderedItem,
    OrderRequest,
    OrderStatus,
    PaymentMethod,
};
