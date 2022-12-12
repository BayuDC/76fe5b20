export default function useLoading() {
    return useState<boolean>('loading', () => false);
}
