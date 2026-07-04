import type { BaseEntity } from "./common";
import type { Guests } from "./guests";
import type { User } from "./user";

type ReservedBy = Pick<User, "firstName" | "lastName" | "phone" | "email"> &
    BaseEntity;

interface Reservation extends BaseEntity {
    dateTime: Date;
    status: "new";
    guests: Guests;
    reservedBy: ReservedBy;
    additionalRequirements?: string;
}

export type { Reservation };
