"use client";

import { DocumentRenderer } from '@keystatic/core/renderer';
import AnimatedTeamGrid from '@/components/animated-team-grid';
import { motion } from 'framer-motion';

export default function AboutClient({ data, story }: { data: any, story: any }) {
    const mission = data?.mission || "To build software that empowers the future.";
    const team = data?.team || [];

    return (
        <div className="container py-32 px-4 md:px-6 space-y-32">
            {/* Mission Section */}
            <section className="relative text-center max-w-5xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono font-bold uppercase tracking-widest mb-4"
                >
                    Manifesto // v1.0
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-space text-5xl font-bold tracking-tight md:text-8xl text-white leading-tight"
                >
                    Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Frontier</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-4xl font-light text-white/90 italic max-w-4xl mx-auto leading-relaxed"
                >
                    "{mission}"
                </motion.p>
            </section>

            {/* Story Section */}
            {story && (
                <section className="relative max-w-5xl mx-auto">
                    <div className="absolute -left-20 top-0 w-1 bg-gradient-to-b from-primary via-accent to-transparent h-full hidden xl:block opacity-20" />
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                <span className="text-primary font-mono font-bold">01</span>
                            </div>
                            <h2 className="font-space text-4xl font-bold text-white uppercase tracking-tighter">The Origin Crypt</h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px]" />
                            <div className="prose prose-xl prose-invert max-w-none font-light leading-relaxed prose-headings:font-space prose-headings:uppercase prose-headings:tracking-widest prose-p:text-white/70">
                                <DocumentRenderer document={story} />
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Team Section */}
            <section className="space-y-24">
                <div className="text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3"
                    >
                        <div className="h-[1px] w-12 bg-primary/30" />
                        <span className="text-primary font-mono text-xs uppercase tracking-widest font-bold">Human Intelligence // Collective</span>
                        <div className="h-[1px] w-12 bg-primary/30" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-space text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl text-white"
                    >
                        Meet the <span className="text-glow">Engineers</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-xl font-light"
                    >
                        The elite unit driving relentless innovation and technical excellence.
                    </motion.p>
                </div>

                <AnimatedTeamGrid team={team as any} />
            </section>
        </div>
    );
}
