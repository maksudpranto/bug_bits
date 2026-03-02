"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Globe, Server, Shield, Database, Copy, Cloud, Cpu, Terminal } from "lucide-react";

const iconMap: Record<string, any> = {
    Globe, Zap, Cloud, Code, Server, Shield, Database, Copy, Cpu, Terminal
};

interface Feature {
    title: string;
    description: string;
    icon: string;
}

interface FeaturesData {
    title: string;
    subtitle: string;
    items: Feature[];
}

export default function FeaturesSection({ data }: { data: FeaturesData }) {
    if (!data || !data.items || data.items.length === 0) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "circOut"
            }
        }
    } as any;

    return (
        <section id="features" className="relative py-32 overflow-hidden bg-[#050505]">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[160px]" />
                <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[160px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-space text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white"
                    >
                        {data.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground text-lg md:text-xl max-w-[800px] mx-auto font-light"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {data.items.map((feature, index) => {
                        const Icon = iconMap[feature.icon] || Globe;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group relative flex flex-col items-start p-8 glass rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-[2rem] transition-colors duration-500 -z-10" />

                                <div className="p-4 bg-white/5 rounded-2xl mb-8 text-primary group-hover:text-accent transition-colors duration-500 border border-white/5 group-hover:border-accent/20">
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="font-space text-2xl font-bold mb-4 text-white group-hover:text-glow transition-all">
                                    {feature.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed font-light">
                                    {feature.description}
                                </p>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-6 right-8 w-0 h-[2px] bg-gradient-to-r from-primary to-accent group-hover:w-12 transition-all duration-500" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
