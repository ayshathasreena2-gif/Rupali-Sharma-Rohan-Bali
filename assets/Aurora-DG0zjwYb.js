// Dynamic module for Aurora background visual effect
const React = window.React || {};
const useEffect = React.useEffect || ((fn) => fn());
const useRef = React.useRef || ((initial) => ({ current: initial }));

export default function Aurora(props) {
    const {
        colorStops = ['#C9A84C', '#F3D9C6', '#7B1E2B'],
        amplitude = 1,
        blend = 0.5,
        speed = 0.5
    } = props;

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId;
        let time = 0;

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = (rect.width || window.innerWidth) * dpr;
            canvas.height = (rect.height || window.innerHeight) * dpr;
            ctx.scale(dpr, dpr);
        };

        window.addEventListener('resize', resize);
        resize();

        const render = () => {
            const w = canvas.width / (window.devicePixelRatio || 1);
            const h = canvas.height / (window.devicePixelRatio || 1);
            if (w === 0 || h === 0) {
                animId = requestAnimationFrame(render);
                return;
            }

            ctx.clearRect(0, 0, w, h);
            time += 0.008 * speed;

            // Render flowing liquid aurora wave gradients
            const c1 = colorStops[0] || '#C9A84C';
            const c2 = colorStops[1] || '#F3D9C6';
            const c3 = colorStops[2] || '#7B1E2B';

            // Layer 1: Base glowing aura
            const grad1 = ctx.createRadialGradient(
                w * 0.5 + Math.sin(time) * 120 * amplitude,
                h * 0.4 + Math.cos(time * 0.8) * 80 * amplitude,
                20,
                w * 0.5,
                h * 0.5,
                Math.max(w, h) * 0.75
            );
            grad1.addColorStop(0, c1);
            grad1.addColorStop(0.5, c2);
            grad1.addColorStop(1, 'transparent');

            ctx.fillStyle = grad1;
            ctx.globalAlpha = 0.45 * blend;
            ctx.fillRect(0, 0, w, h);

            // Layer 2: Wave ribbon
            ctx.beginPath();
            ctx.moveTo(0, h * 0.6);
            for (let x = 0; x <= w; x += 15) {
                const y =
                    h * 0.45 +
                    Math.sin(x * 0.005 + time) * 60 * amplitude +
                    Math.cos(x * 0.01 - time * 1.5) * 35 * amplitude;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(w, h);
            ctx.lineTo(0, h);
            ctx.closePath();

            const grad2 = ctx.createLinearGradient(0, 0, w, h);
            grad2.addColorStop(0, c2);
            grad2.addColorStop(0.5, c3);
            grad2.addColorStop(1, c1);

            ctx.fillStyle = grad2;
            ctx.globalAlpha = 0.35 * blend;
            ctx.fill();

            // Layer 3: Secondary top highlight
            ctx.beginPath();
            ctx.moveTo(0, 0);
            for (let x = 0; x <= w; x += 20) {
                const y =
                    h * 0.25 +
                    Math.cos(x * 0.007 - time * 0.9) * 45 * amplitude +
                    Math.sin(x * 0.012 + time * 1.2) * 25 * amplitude;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(w, 0);
            ctx.closePath();

            const grad3 = ctx.createLinearGradient(0, 0, w, 0);
            grad3.addColorStop(0, c1);
            grad3.addColorStop(0.5, c2);
            grad3.addColorStop(1, c3);

            ctx.fillStyle = grad3;
            ctx.globalAlpha = 0.25 * blend;
            ctx.fill();

            ctx.globalAlpha = 1;
            animId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animId);
        };
    }, [colorStops, amplitude, blend, speed]);

    // Return React Element structure compatible with React 18 / window.React
    if (React.createElement) {
        return React.createElement('canvas', {
            ref: canvasRef,
            style: {
                width: '100%',
                height: '100%',
                display: 'block',
                pointerEvents: 'none'
            }
        });
    }

    return {
        $$typeof: Symbol.for('react.element'),
        type: 'canvas',
        key: null,
        ref: canvasRef,
        props: {
            style: {
                width: '100%',
                height: '100%',
                display: 'block',
                pointerEvents: 'none'
            }
        },
        _owner: null
    };
}
