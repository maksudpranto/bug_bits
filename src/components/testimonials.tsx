"use client";

import { Quote } from 'lucide-react';
import { motion } from "framer-motion";

export default function Testimonials({ data, sectionData }: { data: any[], sectionData?: any }) {
    if (!data || data.length === 0) return null;

    return (
        <section className="relative py-32 overflow-hidden bg-[#050505]">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-24">
                    <div className="space-y-4 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-xs font-mono font-bold tracking-widest text-white/70 uppercase">
                                {sectionData?.badge || "Client Feedback // Decrypted"}
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-space text-4xl font-bold tracking-tight md:text-6xl text-white"
                        >
                            {sectionData?.title || "Trusted by Global Innovators"}
                        </motion.h2>
                    </div>
                </div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {data.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col p-10 glass rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                        >
                            <Quote className="w-12 h-12 text-primary/10 group-hover:text-primary/30 transition-colors mb-8" />
                            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed italic mb-10 flex-grow">
                                "{t.entry.quote}"
                            </p>
                            <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 flex items-center justify-center text-white font-bold text-xl border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    {t.entry.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-space font-bold text-lg text-white group-hover:text-glow transition-all">{t.entry.author}</h4>
                                    <p className="text-sm text-primary font-mono lowercase tracking-tighter opacity-70">{t.entry.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
