type Response<T> = {
    status: string;
    message?: string;
    data: T;
};

export type { Response };
