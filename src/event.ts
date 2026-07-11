import type { BaseEntity } from "./common";

interface Event extends BaseEntity {
    title: string;
    subtitle?: string;
    date: Date;
    ageLimit?: number;
    language?: string;
    menu?: string[];
    price?: number;
    specialGuest?: string;
    photo: string;
    pathName: string;
}

export type { Event };
