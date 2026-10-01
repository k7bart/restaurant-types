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
    /** Populated client-side or by future profile APIs — not returned by `/auth/me` today. */
    orders?: Order[];
    /** Populated client-side or by future address APIs — not returned by `/auth/me` today. */
    addresses?: Address[];
    /** Populated client-side or by future reservation list APIs — not returned by `/auth/me` today. */
    reservations?: Reservation[];
    /** Populated client-side or by future ticket APIs — not returned by `/auth/me` today. */
    tickets?: Ticket[];
    referralLink?: string;
    referralPromoCode?: string;
}

/** Identity fields returned by auth endpoints (`/auth/me`, login, signup, `PATCH /me`). */
type MeUser = Pick<
    User,
    | "id"
    | "firstName"
    | "lastName"
    | "phone"
    | "email"
    | "birthday"
    | "referralLink"
    | "referralPromoCode"
>;

interface LoginCredentials extends Pick<User, "phone"> {
    password: string;
    rememberMe?: boolean;
}
type SignupRequest = Pick<User, "firstName" | "lastName" | "phone" | "email"> &
    LoginCredentials;

export type {
    Address,
    User,
    MeUser,
    LoginCredentials,
    SignupRequest,
};
