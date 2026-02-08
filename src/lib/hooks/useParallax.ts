import { useScroll, useTransform } from 'framer-motion';

export function useParallax() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    return y;
}
