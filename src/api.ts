type Response<T = void> = {
    status: string;
    message?: string;
} & (T extends void ? { data?: T } : { data: T });

export type { Response };
