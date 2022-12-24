interface Link {
    label: string;
    href?: string;
}

export default function useMenu() {
    return {
        items: useState<Link[]>('menu-item', () => []),
        navigations: useState<Link[]>('menu-nav', () => []),
    };
}
export function setMenuItem(items: Link[]) {
    useMenu().items.value = items;
}
export function setMenuNav(navigations: Link[]) {
    useMenu().navigations.value = navigations;
}
