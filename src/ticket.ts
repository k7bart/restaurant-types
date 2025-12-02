import type { BaseEntity } from "./common";
import type { Event } from "./event";
import type { Guests } from "./guests";

interface Ticket extends BaseEntity {
    event: Event;
    guests: Guests;
}

export type { Ticket };
