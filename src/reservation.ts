import type { BaseEntity } from "./common";
import type { Guests } from "./guests";
import type { User } from "./user";

type ReservedBy = Pick<User, "firstName" | "lastName" | "phone" | "email"> &
    BaseEntity;

type ReservationStatus = "new" | "confirmed" | "cancelled";

interface Reservation extends BaseEntity {
    dateTime: Date;
    status: ReservationStatus;
    guests: Guests;
    reservedBy: ReservedBy;
    additionalRequirements?: string;
}

type ReservationRequest = Pick<
    Reservation,
    "dateTime" | "guests" | "reservedBy" | "additionalRequirements"
>;

export type { Reservation, ReservationRequest };
