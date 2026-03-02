"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function CTASection({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden bg-[#030303]">
            {/* Technical Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

                {/* Radial Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[3rem] border border-white/10 glass p-12 md:p-24 text-center shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
                >
                    {/* Decorative HUD Grid */}
                    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.05]" />

                    <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-[0.3em] font-bold"
                        >
                            <Zap className="w-3 h-3 fill-primary" />
                            {data.badge || "Ready to Scale // Next Gen Tech"}
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="font-space text-5xl font-bold tracking-tight sm:text-7xl text-white leading-tight"
                        >
                            {data.title}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light"
                        >
                            {data.subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col gap-6 sm:flex-row justify-center pt-8"
                        >
                            <Button
                                size="lg"
                                className="rounded-full px-12 h-16 text-lg font-bold cyber-border shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:scale-105 transition-transform"
                                asChild
                            >
                                <a href={data.button?.link || '#'} className="flex items-center">
                                    {data.button?.text || "Deploy Now"} <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Corner Tech Decor */}
                    <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/20 rounded-tl-[3rem] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/20 rounded-br-[3rem] pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
