import { BaseEntity } from "./common";

interface Event extends BaseEntity {
    title: string;
    date: Date;
}

export { Event };
