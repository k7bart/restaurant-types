type Response<T = void> = {
    status: string;
    message?: string;
    data?: T;
};

export type { Response };
