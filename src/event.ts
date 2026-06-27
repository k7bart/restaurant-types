import type { BaseEntity } from "./common";
import { Dish } from "./menu";

interface Event extends BaseEntity {
    title: string;
    subtitle?: string;
    date: Date;
    ageLimit?: number;
    language?: string;
    menu?: Dish[];
    price?: number;
    specialGuest?: string;
    photo?: string;
}

export type { Event };
