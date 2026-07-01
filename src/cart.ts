import type { Dish } from "./menu";

type CartItem = Dish & { amount: number };

interface Cart {
    items: CartItem[];
    total: number;
}

export type { Cart, CartItem };
