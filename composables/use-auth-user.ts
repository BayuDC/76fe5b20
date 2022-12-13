export interface AuthUser {
    username: string;
    fullname: string;
    limited: boolean;
    secure: boolean;
    role: string;
}

export default function useAuthUser() {
    return useState<AuthUser | undefined>('auth-user', () => undefined);
}
