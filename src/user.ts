import { BaseEntity } from "./common";
import { Order } from "./order";
import { Reservation } from "./reservation";
import { Ticket } from "./ticket";

interface Address extends BaseEntity {
    isCurrent: boolean;
    city: string;
    street: string;
    house: string;
    entrance?: string;
    floor?: string;
    apartment?: string;
    intercom?: string;
}

interface User extends BaseEntity {
    email: string;
    password: string;
    name: string;
    surname?: string;
    phone: string;
    birthday?: Date;
    orders: Order[];
    addresses: Address[];
    reservations: Reservation[];
    tickets: Ticket[];
    refferalLink: string;
    referralPromoCode: string;
}

type LoginCredentials = Pick<User, "email" | "password">;

interface RegistrationData extends Omit<User, "id"> {
    confirmPassword: string;
    rememberMe?: boolean;
}

export { Address, User, LoginCredentials, RegistrationData };
