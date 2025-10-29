import { BaseEntity } from "./common";
import { Order } from "./order";

interface Address extends BaseEntity {
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
    currentAddressId?: string;
    reservationsIds: string[];
    tickets: string[]; // Ticket[]
}

type LoginCredentials = Pick<User, "email" | "password">;

interface RegistrationData extends Omit<User, "id"> {
    confirmPassword: string;
    rememberMe?: boolean;
}

export { Address, User, LoginCredentials, RegistrationData };
