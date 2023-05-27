import {useRef} from 'react';
import {animated, useSpring} from 'react-spring';

const ScrollablePage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const [{scrollTop}, setScroll] = useSpring(() => ({scrollTop: 0}));

    const handleScroll = () => {
        if (carouselRef.current && containerRef.current) {
            const scrollThreshold = carouselRef.current.offsetTop - window.innerHeight;
            const currentScrollTop = containerRef.current.scrollTop;

            if (currentScrollTop >= scrollThreshold) {
                setScroll({scrollTop: scrollThreshold});
                containerRef.current.style.overflow = 'hidden';
                carouselRef.current.style.overflowX = 'auto';
            } else {
                setScroll({scrollTop: currentScrollTop});
                containerRef.current.style.overflow = 'auto';
                carouselRef.current.style.overflowX = 'hidden';
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className="scroll-container"
            onScroll={handleScroll}
        >
            <animated.div
                ref={carouselRef}
                className="carousel"
                style={{
                    scrollBehavior: 'smooth',
                    transform: scrollTop.interpolate(value => `translate3d(0, ${value}px, 0)`),
                }}
            >
                {/* Content for the carousel */}
                <div style={{width: '100vw', height: '100vh'}}>Second</div>
            </animated.div>
            {/* Content for vertical scrolling */}
            {/* Add your content here */}
            <div className="vertical-scroll-content" style={{height: '100vh'}}>First</div>
            {/* Content for horizontal scrolling */}
            {/* Add your content here */}
            <div className="horizontal-scroll-content" style={{width: '400vw', height: '100vh'}}>Second</div>
        </div>
    );
};

export default ScrollablePage;
