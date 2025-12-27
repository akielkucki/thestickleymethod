import {useEffect, useRef, useState} from "react";

export default function CountUp({ end, duration = 2, prefix = '', suffix = '' }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const [inView, setInView] = useState(false);

    // Only start counting when in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            {threshold: 0.1}
        );

        if (nodeRef.current) observer.observe(nodeRef.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (!inView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
                // Ease out quart function for smoother landing
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(end * easeOutQuart));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, inView]);

    return <span ref={nodeRef} className="tabular-nums">{prefix}{count.toLocaleString()}{suffix}</span>;
}