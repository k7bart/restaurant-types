import type { BaseEntity } from "./common";
import type { Order } from "./order";
import type { Reservation } from "./reservation";
import type { Ticket } from "./ticket";

interface Address extends BaseEntity {
    addressComment?: string;
    isCurrent?: boolean;
    city: string;
    street: string;
    house: string;
    entrance?: string;
    floor?: string;
    apartment?: string;
    intercom?: string;
}

interface User extends BaseEntity {
    email?: string;
    firstName: string;
    lastName?: string;
    phone: string;
    birthday?: Date;
    orders?: Order[];
    addresses?: Address[];
    reservations?: Reservation[];
    tickets?: Ticket[];
    referralLink: string;
    referralPromoCode: string;
}

interface LoginCredentials extends Pick<User, "email"> {
    password: string;
    rememberMe?: boolean;
}
type SignupRequest = Pick<User, "firstName" | "lastName" | "phone" | "email"> &
    LoginCredentials;

export type { Address, User, LoginCredentials, SignupRequest };
