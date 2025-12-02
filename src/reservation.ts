import type { BaseEntity } from "./common";
import type { Guests } from "./guests";
import type { User } from "./user";

interface ReservedBy extends Pick<User, "name" | "surname" | "phone"> {
    id?: User["id"];
    email?: User["email"];
}

interface Reservation extends BaseEntity {
    dateTime: Date;
    status: "new";
    guests: Guests;
    reservedBy: ReservedBy;
    additionalRequirements?: string;
}

interface ReservationForm
    extends Omit<Reservation, "id" | "status" | "dateTime"> {
    date: Date;
    time: Date;
}

export type { Reservation, ReservationForm };
