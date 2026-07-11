import type { Dish } from "./menu";

type CartItem = Dish & { quantity: number };

interface Cart {
    items: CartItem[];
    total: number;
}

export type { Cart, CartItem };
