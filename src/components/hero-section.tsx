"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function HeroSection({ heroData }: { heroData: any }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yValue = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacityValue = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Mouse movement for parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            mouseX.set((clientX / innerWidth - 0.5) * 40);
            mouseY.set((clientY / innerHeight - 0.5) * 40);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Split title if possible to highlight the word
    const highlight = heroData.highlightWord || "Future";
    const titleParts = heroData.title.split(highlight);

    const renderBackground = () => {
        return (
            <div className="absolute inset-0 -z-10 overflow-hidden bg-[#030303]">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

                {/* Moving Blobs */}
                <motion.div
                    style={{ x: springX, y: springY }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50"
                />
                <motion.div
                    style={{ x: useTransform(springX, (v) => -v), y: useTransform(springY, (v) => -v) }}
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50"
                />

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-[0.03]"></div>
            </div>
        );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden py-24 sm:py-32">
            {renderBackground()}

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`grid gap-16 items-center ${heroData.layout === 'split' ? 'lg:grid-cols-2' : 'text-center max-w-5xl mx-auto'}`}
                >
                    <div className="space-y-10">
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-md shadow-2xl transition-all hover:bg-white/10"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_hsl(var(--accent))]"></span>
                            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                {heroData.badge || "System Online v1.0.4"}
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="font-space text-6xl font-bold tracking-tight lg:text-8xl xl:text-9xl leading-[0.9] text-white"
                        >
                            {titleParts.map((part: string, i: number) => (
                                <span key={i}>
                                    {part}
                                    {i < titleParts.length - 1 && (
                                        <span className="relative inline-block">
                                            <span className="bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent bg-[size:200%_200%] animate-gradient">
                                                {highlight}
                                            </span>
                                        </span>
                                    )}
                                </span>
                            ))}
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-muted-foreground lg:max-w-[550px] leading-relaxed font-light"
                        >
                            {heroData.subtitle}
                        </motion.p>

                        <motion.div variants={itemVariants} className={`flex flex-wrap gap-5 ${heroData.layout === 'split' ? '' : 'justify-center'}`}>
                            <Button
                                size="lg"
                                className="rounded-full px-10 h-16 text-lg font-bold cyber-border shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:scale-105 transition-transform"
                                asChild
                            >
                                <a href={heroData.primaryButton?.link || '#'}>
                                    {heroData.primaryButton?.text || "Initialize Project"}
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full px-10 h-16 text-lg font-bold glass hover:bg-white/5 border-white/10 transition-all"
                                asChild
                            >
                                <a href={heroData.secondaryButton?.link || '#'}>
                                    {heroData.secondaryButton?.text || "Explore Data"}
                                </a>
                            </Button>
                        </motion.div>
                    </div>

                    {heroData.layout === 'split' && (
                        <motion.div
                            variants={itemVariants}
                            className="relative lg:ml-auto max-w-[600px] w-full"
                        >
                            {/* Technical Frame */}
                            <div className="relative z-10 p-4 rounded-[2rem] border border-white/10 glass shadow-2xl overflow-hidden group">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                                    {heroData.image ? (
                                        <Image
                                            src={heroData.image}
                                            alt="Interface Blueprint"
                                            fill
                                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                            priority
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center animate-pulse">
                                                <ChevronRight className="w-10 h-10 text-primary" />
                                            </div>
                                        </div>
                                    )}
                                    {/* HUD Elements */}
                                    <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/50 uppercase tracking-widest">
                                        {heroData.subCaption || "Data visualization // secure_link_active"}
                                    </div>
                                    <div className="absolute bottom-4 right-4 h-8 w-24 bg-white/5 rounded backdrop-blur-md border border-white/10 flex items-center justify-around px-2">
                                        <div className="h-4 w-[2px] bg-accent/50 animate-bounce"></div>
                                        <div className="h-2 w-[2px] bg-accent/50 animate-bounce delay-75"></div>
                                        <div className="h-5 w-[2px] bg-accent/50 animate-bounce delay-150"></div>
                                        <div className="h-3 w-[2px] bg-accent/50 animate-bounce delay-100"></div>
                                        <div className="h-4 w-[2px] bg-accent/50 animate-bounce delay-200"></div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Decorative background glow */}
                            <div className="absolute -inset-10 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: opacityValue }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="h-12 w-[2px] bg-gradient-to-b from-primary/50 to-transparent"></div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
                    {heroData.scrollText || "Scroll"}
                </span>
            </motion.div>
        </section>
    );
}

// Add XL size to button manually if not defined in shadcn, or handle here
// For now, I'll just use className on existing button

