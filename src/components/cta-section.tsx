"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
            </div>

            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-amber-500/5 p-8 md:p-16 text-center backdrop-blur-xl shadow-2xl shadow-primary/5"
                >
                    {/* Decorative Grid */}
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15] dark:opacity-[0.05]" />

                    <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-foreground"
                        >
                            {data.title}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
                        >
                            {data.subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col gap-4 sm:flex-row justify-center pt-4"
                        >
                            <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-primary/30" asChild>
                                <a href={data.buttonLink} className="flex items-center">
                                    {data.buttonText} <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Accent Corner Labels or Icons could go here */}
                </motion.div>
            </div>
        </section>
    );
}
