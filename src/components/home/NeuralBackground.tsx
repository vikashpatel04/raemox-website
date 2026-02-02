import { useRef,  useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "motion/react";

function BackgroundGrid() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Base Grid */}
            <div
                className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)",
                    backgroundSize: "4rem 4rem",
                    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
                }}
            />

            {/* Secondary Finer Grid */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)",
                    backgroundSize: "1rem 1rem",
                    maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
                }}
            />
        </div>
    );
}

type BeamFlow = {
    id: number;
    path: string;
    duration: number;
    delay: number;
    color: string;
};

type Point = { x: number; y: number };

// Generate a path that enters from outside, travels through grid, exits outside
function generateBeamPath(width: number, height: number): string {
    const gridSize = 64; // 4rem = 64px
    const margin = 100; // Extra space outside viewport

    // Random entry point (outside screen, snapped to grid)
    const entryEdge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
    let start: Point;

    switch (entryEdge) {
        case 0: // Top
            start = { 
                x: Math.round((Math.random() * width) / gridSize) * gridSize, 
                y: -margin 
            };
            break;
        case 1: // Right
            start = { 
                x: width + margin, 
                y: Math.round((Math.random() * height) / gridSize) * gridSize 
            };
            break;
        case 2: // Bottom
            start = { 
                x: Math.round((Math.random() * width) / gridSize) * gridSize, 
                y: height + margin 
            };
            break;
        default: // Left
            start = { 
                x: -margin, 
                y: Math.round((Math.random() * height) / gridSize) * gridSize 
            };
    }

    // Random exit point (outside screen, different edge preferred, snapped to grid)
    const exitEdge = (entryEdge + 1 + Math.floor(Math.random() * 2)) % 4;
    let end: Point;

    switch (exitEdge) {
        case 0: // Top
            end = { 
                x: Math.round((Math.random() * width) / gridSize) * gridSize, 
                y: -margin 
            };
            break;
        case 1: // Right
            end = { 
                x: width + margin, 
                y: Math.round((Math.random() * height) / gridSize) * gridSize 
            };
            break;
        case 2: // Bottom
            end = { 
                x: Math.round((Math.random() * width) / gridSize) * gridSize, 
                y: height + margin 
            };
            break;
        default: // Left
            end = { 
                x: -margin, 
                y: Math.round((Math.random() * height) / gridSize) * gridSize 
            };
    }

    // Create waypoints that ALWAYS move horizontally OR vertically (never diagonal)
    // RULES: 
    // 1. Always move forward toward exit (no backtracking)
    // 2. Alternate direction (H->V->H or V->H->V) to prevent parallel adjacent lines
    const waypoints: Point[] = [start];
    const numTurns = Math.floor(Math.random() * 4) + 3; // 3-6 turns for interesting paths

    let current = { ...start };
    let lastMovedHorizontally: boolean | null = null; // Track last direction to alternate

    for (let i = 0; i < numTurns; i++) {
        const isLastSegment = i === numTurns - 1;
        
        // Calculate directions to end point
        const deltaX = end.x - current.x;
        const deltaY = end.y - current.y;
        const needsToMoveRight = deltaX > 0;
        const needsToMoveLeft = deltaX < 0;
        const needsToMoveDown = deltaY > 0;
        const needsToMoveUp = deltaY < 0;
        
        // Decide whether to move horizontally or vertically
        // MUST alternate direction to prevent parallel adjacent lines
        let moveHorizontally: boolean;
        
        if (isLastSegment) {
            // On last segment, move toward the end point
            if (lastMovedHorizontally === null) {
                moveHorizontally = Math.abs(deltaX) > Math.abs(deltaY);
            } else {
                // If we must alternate, choose the direction we need
                if (lastMovedHorizontally && Math.abs(deltaY) > 0) {
                    moveHorizontally = false;
                } else if (!lastMovedHorizontally && Math.abs(deltaX) > 0) {
                    moveHorizontally = true;
                } else {
                    moveHorizontally = Math.abs(deltaX) > Math.abs(deltaY);
                }
            }
        } else {
            // Force alternating directions
            if (lastMovedHorizontally === null) {
                // First move - choose based on which direction we need more
                moveHorizontally = Math.abs(deltaX) > Math.abs(deltaY);
            } else {
                // Alternate from last move
                moveHorizontally = !lastMovedHorizontally;
                
                // But if we've already reached the target in that direction, use the other
                if (moveHorizontally && deltaX === 0) {
                    moveHorizontally = false;
                } else if (!moveHorizontally && deltaY === 0) {
                    moveHorizontally = true;
                }
            }
        }

        if (moveHorizontally) {
            // Move horizontally - ALWAYS toward exit (no backtracking)
            const direction = needsToMoveRight ? 1 : needsToMoveLeft ? -1 : 0;
            
            if (direction !== 0) {
                const remainingDistance = Math.abs(deltaX);
                const minSteps = isLastSegment ? remainingDistance / gridSize : 2;
                const maxSteps = isLastSegment ? remainingDistance / gridSize : Math.min(8, remainingDistance / gridSize);
                const steps = Math.max(1, Math.floor(Math.random() * (maxSteps - minSteps + 1) + minSteps));
                
                const newX = current.x + (steps * gridSize * direction);
                waypoints.push({ x: newX, y: current.y });
                current = { x: newX, y: current.y };
                lastMovedHorizontally = true;
            }
        } else {
            // Move vertically - ALWAYS toward exit (no backtracking)
            const direction = needsToMoveDown ? 1 : needsToMoveUp ? -1 : 0;
            
            if (direction !== 0) {
                const remainingDistance = Math.abs(deltaY);
                const minSteps = isLastSegment ? remainingDistance / gridSize : 2;
                const maxSteps = isLastSegment ? remainingDistance / gridSize : Math.min(8, remainingDistance / gridSize);
                const steps = Math.max(1, Math.floor(Math.random() * (maxSteps - minSteps + 1) + minSteps));
                
                const newY = current.y + (steps * gridSize * direction);
                waypoints.push({ x: current.x, y: newY });
                current = { x: current.x, y: newY };
                lastMovedHorizontally = false;
            }
        }
    }

    // Ensure we end at the exit point
    if (current.x !== end.x && current.y !== end.y) {
        // Need both moves to reach end
        if (lastMovedHorizontally) {
            // Move vertically first, then horizontally
            waypoints.push({ x: current.x, y: end.y });
            waypoints.push(end);
        } else {
            // Move horizontally first, then vertically
            waypoints.push({ x: end.x, y: current.y });
            waypoints.push(end);
        }
    } else if (current.x !== end.x) {
        waypoints.push({ x: end.x, y: current.y });
    } else if (current.y !== end.y) {
        waypoints.push({ x: current.x, y: end.y });
    }

    // Build SVG path
    let path = `M ${waypoints[0].x} ${waypoints[0].y}`;
    for (let i = 1; i < waypoints.length; i++) {
        path += ` L ${waypoints[i].x} ${waypoints[i].y}`;
    }

    return path;
}

function CircuitBeam({ beam }: { beam: BeamFlow }) {
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
                {/* Gradient with tapered ends - barely noticeable tip and tail */}
                <linearGradient id={`beam-gradient-${beam.id}`} gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor={beam.color} stopOpacity="0" />
                    <stop offset="5%" stopColor={beam.color} stopOpacity="0.2" />
                    <stop offset="15%" stopColor={beam.color} stopOpacity="0.5" />
                    <stop offset="50%" stopColor={beam.color} stopOpacity="1" />
                    <stop offset="85%" stopColor={beam.color} stopOpacity="0.5" />
                    <stop offset="95%" stopColor={beam.color} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={beam.color} stopOpacity="0" />
                </linearGradient>
                
                {/* Enhanced glow filter for softer, more diffused appearance */}
                <filter id={`glow-${beam.id}`}>
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                
                {/* Strong glow filter for outer layer */}
                <filter id={`strong-glow-${beam.id}`}>
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="coloredBlur"/>
                    </feMerge>
                </filter>
            </defs>
            
            {/* Wide outer glow layer - most diffused */}
            <motion.path
                d={beam.path}
                stroke={beam.color}
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="miter"
                opacity="0.2"
                initial={{ pathLength: 0 }}
                animate={{ 
                    pathLength: [0, 0.3, 1],
                    pathOffset: [0, 0.7, 1]
                }}
                transition={{
                    duration: beam.duration,
                    delay: beam.delay,
                    ease: "linear",
                    times: [0, 0.5, 1]
                }}
                filter={`url(#strong-glow-${beam.id})`}
            />
            
            {/* Medium glow layer */}
            <motion.path
                d={beam.path}
                stroke={beam.color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="miter"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ 
                    pathLength: [0, 0.3, 1],
                    pathOffset: [0, 0.7, 1]
                }}
                transition={{
                    duration: beam.duration,
                    delay: beam.delay,
                    ease: "linear",
                    times: [0, 0.5, 1]
                }}
                style={{ filter: 'blur(6px)' }}
            />
            
            {/* Main beam with gradient - includes tapered tips */}
            <motion.path
                d={beam.path}
                stroke={`url(#beam-gradient-${beam.id})`}
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="miter"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                    pathLength: [0, 0.3, 1],
                    pathOffset: [0, 0.7, 1],
                    opacity: [0, 1, 0.7, 0]
                }}
                transition={{
                    duration: beam.duration,
                    delay: beam.delay,
                    ease: "linear",
                    times: [0, 0.15, 0.85, 1]
                }}
                filter={`url(#glow-${beam.id})`}
            />
            
            {/* Core bright line - ultra thin with tapered ends */}
            <motion.path
                d={beam.path}
                stroke={`url(#beam-gradient-${beam.id})`}
                strokeWidth="0.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="miter"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                    pathLength: [0, 0.25, 1],
                    pathOffset: [0, 0.75, 1],
                    opacity: [0, 1, 0.9, 0]
                }}
                transition={{
                    duration: beam.duration,
                    delay: beam.delay,
                    ease: "linear",
                    times: [0, 0.2, 0.8, 1]
                }}
                style={{ filter: 'blur(1px)' }}
            />
        </svg>
    );
}

export interface NeuralBackgroundProps {
    /** Number of simultaneous beams flowing at any time */
    beamCount?: number;
    /** How often new beams spawn (in milliseconds) */
    spawnInterval?: number;
    /** Duration range for beams [min, max] in seconds */
    beamDuration?: [number, number];
    /** Primary beam color (CSS color value). Auto-detects theme if not provided: green (light) / light blue (dark) */
    primaryColor?: string;
    /** Secondary/accent beam color (CSS color value). Auto-detects theme if not provided */
    accentColor?: string;
    /** Chance of using accent color (0-1) */
    accentChance?: number;
    /** Enable mouse spotlight effect */
    enableSpotlight?: boolean;
    /** Enable scrolling gradient blobs */
    enableGradientBlobs?: boolean;
    /** Enable grid background */
    enableGrid?: boolean;
}

export function NeuralBackground({
    beamCount = 8,
    spawnInterval = 800,
    beamDuration = [3, 6],
    primaryColor,
    accentColor,
    accentChance = 0.3,
    enableSpotlight = true,
    enableGradientBlobs = true,
    enableGrid = true,
}: NeuralBackgroundProps = {}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    // Theme-aware colors
    const [isDark, setIsDark] = useState(false);
    
    useEffect(() => {
        // Check if dark mode is active
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        
        checkTheme();
        
        // Watch for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { 
            attributes: true, 
            attributeFilter: ['class'] 
        });
        
        return () => observer.disconnect();
    }, []);
    
    // Use theme-appropriate colors if not explicitly provided
    const effectivePrimaryColor = primaryColor || (isDark 
        ? "rgb(56, 189, 248)"  // Light blue for dark theme
        : "rgb(34, 197, 94)"   // Green for light theme
    );
    
    const effectiveAccentColor = accentColor || (isDark
        ? "rgb(96, 165, 250)"  // Slightly different blue for dark theme
        : "rgb(16, 185, 129)"  // Emerald green for light theme
    );

    // Mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Active beams
    const [beams, setBeams] = useState<BeamFlow[]>([]);
    const beamIdCounter = useRef(0);

    useEffect(() => {
        if (!enableSpotlight) return;

        function handleMouseMove({ clientX, clientY }: MouseEvent) {
            const { left, top } = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY, enableSpotlight]);

    // Beam generator
    useEffect(() => {
        if (!containerRef.current) return;

        const spawnBeam = () => {
            const { width, height } = containerRef.current!.getBoundingClientRect();
            
            const id = beamIdCounter.current++;
            const duration = beamDuration[0] + Math.random() * (beamDuration[1] - beamDuration[0]);
            const color = Math.random() < accentChance ? effectiveAccentColor : effectivePrimaryColor;

            const newBeam: BeamFlow = {
                id,
                path: generateBeamPath(width, height),
                duration,
                delay: 0,
                color,
            };

            setBeams(prev => {
                // Limit total beams
                const updated = [...prev, newBeam];
                if (updated.length > beamCount) {
                    return updated.slice(-beamCount);
                }
                return updated;
            });

            // Auto-cleanup
            setTimeout(() => {
                setBeams(prev => prev.filter(b => b.id !== id));
            }, duration * 1000 + 100);
        };

        // Initial beams
        for (let i = 0; i < Math.min(3, beamCount); i++) {
            setTimeout(spawnBeam, i * (spawnInterval / 2));
        }

        // Continuous spawning
        const interval = setInterval(spawnBeam, spawnInterval);

        return () => clearInterval(interval);
    }, [beamCount, spawnInterval, beamDuration, effectivePrimaryColor, effectiveAccentColor, accentChance]);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-background">
            {enableGrid && <BackgroundGrid />}

            {/* Mouse Spotlight */}
            {enableSpotlight && (
                <motion.div
                    className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                600px circle at ${mouseX}px ${mouseY}px,
                                ${effectivePrimaryColor.replace(')', ', 0.15)')},
                                transparent 80%
                            )
                        `,
                    }}
                />
            )}

            {/* Ambient Gradient Blobs */}
            {enableGradientBlobs && (
                <>
                    <motion.div
                        style={{ y: y1 }}
                        className="absolute top-[-10%] left-[-20%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px] opacity-60"
                    />
                    <motion.div
                        style={{ y: y2 }}
                        className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px] opacity-60"
                    />
                </>
            )}

            {/* Circuit Beams - The main attraction */}
            {beams.map(beam => (
                <CircuitBeam key={beam.id} beam={beam} />
            ))}

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-transparent z-10 pointer-events-none" />
        </div>
    );
}
