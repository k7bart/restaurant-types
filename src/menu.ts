import { BaseEntity } from "./common";

interface Nutrient {
    name: string;
    amount: number;
    unit: string;
}

interface Dish extends BaseEntity {
    amount: number;
    category: string;
    description: string;
    discountPercent?: number;
    ingredients: string[];
    isDishOfTheDay: boolean;
    isVegan: boolean;
    name: string;
    nutrients: Nutrient[];
    photos: string[];
    price: number;
}

interface Category {
    name: string;
    dishes: Dish;
}

interface Menu {
    categories: Category[];
}
export { Dish, Nutrient, Menu };
