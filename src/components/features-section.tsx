"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Globe, Server, Shield, Database, Copy, Cloud } from "lucide-react";

const iconMap: Record<string, any> = {
    Globe, Zap, Cloud, Code, Server, Shield, Database, Copy
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

    return (
        <section id="features" className="relative py-24 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{data.title}</h2>
                    <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
                        {data.subtitle}
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {data.items.map((feature, i) => {
                        const Icon = iconMap[feature.icon] || Globe;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative flex flex-col items-start p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="p-3 bg-primary/10 rounded-xl mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
