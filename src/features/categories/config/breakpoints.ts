export const DESKTOP_XL_MIN = 1280; // ≥1280px
export const DESKTOP_MIN    = 1024; // ≥1024px
export const TABLET_MIN     = 768;  // ≥768px
export const PHABLET_MIN    = 640;  // ≥640px

export function computeMaxVisibleByWidth(width: number): number {
    if (width >= DESKTOP_XL_MIN) return 5; // desktop mare
    if (width >= DESKTOP_MIN)    return 4; // laptop
    if (width >= TABLET_MIN)     return 3; // tabletă
    if (width >= PHABLET_MIN)    return 2; // phablet
    return 0;                               // mobil mic: doar dropdown
}
