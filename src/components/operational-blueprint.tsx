"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target, Users, Cpu, Code, Globe, Terminal, ArrowRight } from 'lucide-react';

const iconMap: Record<string, any> = {
    Shield, Zap, Target, Users, Cpu, Code, Globe, Terminal
};

export default function OperationalBlueprint({ whyData, processData }: { whyData: any, processData: any }) {
    if (!whyData || !processData) return null;

    return (
        <section className="relative py-32 overflow-hidden bg-[#030303]">
            {/* Background Architecture */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                {/* Header Phase: WHY */}
                <div className="text-center mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono font-bold uppercase tracking-widest mb-4"
                    >
                        {whyData.phaseBadge || "Phase_01: Advantage_Matrix"}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-space text-4xl font-bold tracking-tight md:text-7xl text-white uppercase"
                    >
                        {whyData.titlePrefix || "Why Choose"} <span className="text-glow">{whyData.titleHighlight || "Bug Bits"}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-light"
                    >
                        {whyData.description}
                    </motion.p>
                </div>

                {/* Advantages Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-40">
                    {whyData.items.map((item: any, i: number) => {
                        const Icon = iconMap[item.icon] || Target;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 glass rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-500 border border-white/5">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-space text-xl font-bold mb-3 text-white group-hover:text-glow transition-all uppercase tracking-tight">{item.title}</h3>
                                <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Transition Divider */}
                <div className="relative py-20 flex justify-center">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="relative z-10 w-12 h-12 rounded-full glass border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                    >
                        <ArrowRight className="w-6 h-6 rotate-90" />
                    </motion.div>
                </div>

                {/* Header Phase: HOW */}
                <div className="text-center mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono font-bold uppercase tracking-widest mb-4"
                    >
                        {processData.phaseBadge || "Phase_02: Execution_Protocol"}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-space text-4xl font-bold tracking-tight md:text-7xl text-white uppercase"
                    >
                        {processData.titlePrefix || "Our"} <span className="text-glow accent">{processData.titleHighlight || "Process"}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-light"
                    >
                        {processData.description}
                    </motion.p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {processData.items.map((step: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="group relative flex flex-col items-center text-center px-6 py-10"
                            >
                                <div className="relative z-10 w-24 h-24 rounded-3xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500 mb-8 overflow-hidden">
                                    <div className="absolute inset-0 bg-scanlines opacity-5" />
                                    <span className="font-space text-4xl font-bold relative z-10">{i + 1}</span>
                                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary/10 rounded-tl-2xl border-t border-l border-primary/20" />
                                </div>

                                <motion.div
                                    className="h-1 bg-primary/20 mb-6"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "40px" }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                />

                                <h3 className="font-space text-2xl font-bold mb-4 text-white uppercase tracking-tighter group-hover:text-glow transition-all">{step.title}</h3>
                                <p className="text-muted-foreground text-sm font-light leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
