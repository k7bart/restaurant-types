import { BaseEntity } from "./common";
import { Event } from "./event";
import { Guests } from "./guests";

interface Ticket extends BaseEntity {
    event: Event;
    guests: Guests;
}

export { Ticket };
