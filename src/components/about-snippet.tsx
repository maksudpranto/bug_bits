"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSnippet({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="relative py-32 overflow-hidden bg-[#030303]">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[140px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        {/* Technical Frame Decor */}
                        <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] pointer-events-none group-hover:border-primary/20 transition-colors" />
                        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/40 rounded-tr-[2rem] pointer-events-none" />

                        <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl">
                            {data.image ? (
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-[#111] text-muted-foreground font-mono text-sm">
                                    [ UNKNOWN_VISUAL_DATA ]
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-bold"
                        >
                            <span className="w-8 h-[1px] bg-primary/40" />
                            {data.badge || "Our DNA // Mission"}
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="font-space text-4xl font-bold tracking-tight lg:text-6xl text-white leading-tight"
                        >
                            {data.title}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed whitespace-pre-line"
                        >
                            {data.content}
                        </motion.div>

                        {data.quote && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="border-token glass p-8 rounded-3xl border border-white/10 italic text-white/80 font-light flex gap-4 items-start"
                            >
                                <span className="text-primary text-4xl leading-none">"</span>
                                <p className="pt-2">{data.quote}</p>
                            </motion.div>
                        )}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Button size="lg" asChild className="rounded-full px-12 h-16 text-lg font-bold cyber-border hover:scale-105 transition-transform group/btn">
                                <a href="/about" className="flex items-center gap-3">
                                    {data.buttonText || "Initialize Full Brief"} <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
