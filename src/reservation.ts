import type { Guests } from "./guests";
import type { User } from "./user";

type ReservedBy = Pick<User, "firstName" | "lastName" | "phone" | "email">;

type ReservationStatus = "new" | "confirmed" | "cancelled";

interface Reservation {
    /** Numeric sequence from the backend counter, not a string UUID. */
    id: number;
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

export type { Reservation, ReservationRequest, ReservationStatus, ReservedBy };
