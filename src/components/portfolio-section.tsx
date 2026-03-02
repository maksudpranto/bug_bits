"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioSection({ data }: { data: any }) {
    if (!data || !data.items || data.items.length === 0) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    } as any;

    return (
        <section className="relative py-32 overflow-hidden bg-[#050505]">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-space text-4xl font-bold tracking-tight md:text-6xl text-white"
                        >
                            {data.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground text-lg font-light leading-relaxed"
                        >
                            {data.description}
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            variant="outline"
                            className="rounded-full px-8 h-14 border-white/10 glass hover:bg-white/5 transition-all gap-3"
                        >
                            View All Projects <ArrowUpRight className="w-5 h-5 text-primary" />
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
                >
                    {data.items.map((project: any, i: number) => (
                        <motion.div
                            key={project.project}
                            variants={cardVariants}
                            className="h-full group relative flex flex-col rounded-[2.5rem] border border-white/5 bg-[#0a0a0a] overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                        >
                            <div className="aspect-[16/10] relative overflow-hidden group-hover:p-2 transition-all duration-700">
                                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.project}
                                        fill
                                        className="object-cover rounded-[2rem] transition-transform duration-1000 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-[#111] animate-pulse">
                                        [ NO_IMAGE_SIGNAL ]
                                    </div>
                                )}
                                <div className="absolute top-6 right-6 z-30 transform translate-x-12 translate-y-[-12px] opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="p-3 glass rounded-full border-white/20">
                                        <ExternalLink className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-10 space-y-4">
                                <h3 className="font-space text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.project}</h3>
                                <p className="text-muted-foreground font-light leading-relaxed line-clamp-3">{project.description}</p>
                                <div className="pt-4 flex items-center gap-2 group/link">
                                    <span className="h-[1px] w-8 bg-primary/30 group-hover/link:w-12 transition-all duration-500" />
                                    <span className="text-xs font-mono uppercase tracking-widest text-primary/80">View System Details</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
