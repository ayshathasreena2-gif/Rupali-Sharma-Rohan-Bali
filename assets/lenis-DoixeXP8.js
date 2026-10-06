// Dynamic module for Lenis smooth scrolling optimized for desktop and mobile touch
export default class Lenis {
    constructor(options = {}) {
        this.options = {
            duration: options.duration || 1.2,
            easing: options.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
            touchMultiplier: options.touchMultiplier || 1.5,
            smoothWheel: options.smoothWheel !== false,
            syncTouch: true,
            ...options
        };

        this.listeners = new Map();
        this.isDestroyed = false;
        this.animatedScroll = window.scrollY;
        this.targetScroll = window.scrollY;
        this.velocity = 0;
        this.isScrolling = false;

        // Keep scroll target updated with native user scroll (touch/wheel/scrollbar)
        this.handleNativeScroll = () => {
            if (!this.isScrolling) {
                const current = window.scrollY;
                this.velocity = current - this.animatedScroll;
                this.animatedScroll = current;
                this.targetScroll = current;
                this.emit('scroll', {
                    scroll: current,
                    limit: document.documentElement.scrollHeight - window.innerHeight,
                    velocity: this.velocity,
                    direction: this.velocity >= 0 ? 1 : -1
                });
            }
        };

        window.addEventListener('scroll', this.handleNativeScroll, { passive: true });
    }

    raf(time) {
        if (this.isDestroyed) return;
        const current = window.scrollY;
        const diff = this.targetScroll - current;
        if (Math.abs(diff) > 0.5) {
            this.isScrolling = true;
            this.velocity = diff * 0.15;
            this.animatedScroll += this.velocity;
            window.scrollTo(0, this.animatedScroll);
            this.emit('scroll', {
                scroll: this.animatedScroll,
                limit: document.documentElement.scrollHeight - window.innerHeight,
                velocity: this.velocity,
                direction: this.velocity > 0 ? 1 : -1
            });
        } else {
            this.isScrolling = false;
        }
    }

    scrollTo(target, options = {}) {
        let targetY = 0;
        if (typeof target === 'number') {
            targetY = target;
        } else if (typeof target === 'string') {
            const el = document.querySelector(target);
            if (el) targetY = el.getBoundingClientRect().top + window.scrollY;
        } else if (target && target.nodeType) {
            targetY = target.getBoundingClientRect().top + window.scrollY;
        }

        if (options.immediate) {
            this.isScrolling = false;
            window.scrollTo(0, targetY);
            this.targetScroll = targetY;
            this.animatedScroll = targetY;
        } else {
            this.targetScroll = targetY;
        }
    }

    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }
        this.listeners.get(event).add(callback);
        return () => this.off(event, callback);
    }

    off(event, callback) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).delete(callback);
        }
    }

    emit(event, data) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach((cb) => cb(data));
        }
    }

    destroy() {
        this.isDestroyed = true;
        window.removeEventListener('scroll', this.handleNativeScroll);
        this.listeners.clear();
    }
}
