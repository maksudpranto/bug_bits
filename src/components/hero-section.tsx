"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection({ heroData }: { heroData: any }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yValue = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityValue = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Split title if possible to highlight the word
    const titleParts = heroData.title.split(heroData.highlightWord || "Future");

    const renderBackground = () => {
        switch (heroData.backgroundStyle) {
            case 'mesh':
                return (
                    <div className="absolute inset-0 -z-10 group overflow-hidden">
                        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-orange-500/10 blur-[120px] animate-pulse"></div>
                        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-amber-500/10 blur-[120px] animate-pulse delay-700"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
                    </div>
                );
            case 'void':
                return (
                    <div className="absolute inset-0 -z-10 bg-[#0c0500]">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d1a0a_1px,transparent_1px),linear-gradient(to_bottom,#2d1a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-orange-900/10 blur-[120px] rounded-full"></div>
                    </div>
                );
            default: // gradient
                return (
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-background [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#f97316_100%)] opacity-20 dark:opacity-40"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    </div>
                );
        }
    };

    const contentVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden py-20 lg:py-32">
            {renderBackground()}

            <div className="container px-4 md:px-6 relative z-10">
                <div className={`grid gap-12 items-center ${heroData.layout === 'split' ? 'lg:grid-cols-2' : 'text-center max-w-4xl mx-auto'}`}>

                    <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            {heroData.badge || "Innovating the Digital Frontier"}
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl font-black tracking-tight lg:text-7xl xl:text-8xl leading-[1.1]"
                        >
                            {titleParts.length > 1 ? (
                                <>
                                    {titleParts[0]}
                                    <span className="relative inline-block px-1">
                                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-red-600">
                                            {heroData.highlightWord}
                                        </span>
                                        <motion.span
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-10 origin-left"
                                        />
                                    </span>
                                </>
                            ) : (
                                heroData.title
                            )}
                            {titleParts[1]}
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-muted-foreground lg:max-w-[600px] leading-relaxed"
                        >
                            {heroData.subtitle}
                        </motion.p>

                        <motion.div variants={itemVariants} className={`flex flex-wrap gap-4 ${heroData.layout === 'split' ? '' : 'justify-center'}`}>
                            <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                                {heroData.primaryButtonText} <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg font-bold backdrop-blur-sm hover:bg-muted/40 transition-all">
                                {heroData.secondaryButtonText}
                            </Button>
                        </motion.div>
                    </motion.div>

                    {heroData.layout === 'split' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="relative lg:ml-auto"
                        >
                            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/10">
                                {heroData.image ? (
                                    <Image
                                        src={heroData.image}
                                        alt="Hero Visual"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="aspect-[4/3] bg-gradient-to-br from-orange-600/20 to-amber-600/20 flex items-center justify-center backdrop-blur-3xl group">
                                        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-white ring-8 ring-white/5 transition-transform group-hover:scale-110">
                                            <Play className="w-8 h-8 fill-white" />
                                        </div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}

// Add XL size to button manually if not defined in shadcn, or handle here
// For now, I'll just use className on existing button

