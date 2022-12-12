interface AuthUser {
    username: string;
    fullname: string;
    secure: boolean;
    role: string;
}

export default function useAuthUser() {
    return useState<AuthUser | undefined>('auth-user', () => undefined);
}
