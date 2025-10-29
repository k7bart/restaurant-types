import { BaseEntity } from "./common";
import { User } from "./user";

interface Guests {
    adults: number;
    children?: number;
}

interface ReservedBy extends Pick<User, "id" | "name" | "surname" | "phone"> {
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

export { Reservation, ReservationForm };
