import type { BaseEntity } from "./common";

interface Nutrient {
    name: string;
    amount: number;
    unit: "kcal" | "g";
}

interface Dish extends BaseEntity {
    amount?: number;
    category: Category["name"];
    description?: string;
    discountPercent?: number;
    ingredients?: string[];
    isDishOfTheDay?: boolean;
    isVegan: boolean;
    name: string;
    nutrients?: Nutrient[];
    photos?: string[];
    price: number;
}

interface Category {
    name: "breakfast" | "desserts" | "beverages";
    dishes: Dish[];
}

export type { Category, Dish, Nutrient };
