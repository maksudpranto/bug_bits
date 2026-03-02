"use client";

import { motion } from 'framer-motion';
import { DocumentRenderer } from '@keystatic/core/renderer';
import { ArrowLeft, Smartphone, Cloud, Globe, Code, Zap, Server, Shield, Database, Copy } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, any> = {
    Smartphone,
    Cloud,
    Globe,
    Code,
    Zap,
    Server,
    Shield,
    Database,
    Copy,
};

export default function ServiceDetailClient({ service, content }: { service: any, content: any }) {
    const Icon = iconMap[service.apiIcon] || Globe;

    return (
        <div className="container py-32 px-4 md:px-6 relative">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px]" />
                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Terminal
                    </Link>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
                    {/* Header Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shadow-2xl">
                            <Icon className="w-12 h-12" />
                        </div>

                        <div className="space-y-4">
                            <h1 className="font-space text-5xl font-bold text-white tracking-tight leading-tight">
                                {service.title}
                            </h1>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
                        </div>

                        <p className="text-xl text-muted-foreground font-light leading-relaxed">
                            {service.summary}
                        </p>

                        <div className="p-6 glass rounded-3xl border border-white/5 space-y-4">
                            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary/60">Execution_Status</p>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                                <span className="text-white font-mono text-xs uppercase tracking-widest">Active deployment</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass p-10 md:p-16 rounded-[3rem] border border-white/10"
                    >
                        <div className="prose prose-xl prose-invert max-w-none font-light leading-relaxed prose-headings:font-space prose-headings:uppercase prose-headings:tracking-widest prose-p:text-white/70">
                            <DocumentRenderer document={content} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
