export default function useMessage() {
    return useState<string | undefined>('message', () => undefined);
}
