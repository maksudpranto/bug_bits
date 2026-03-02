"use client";

import { motion } from 'framer-motion';
import { DocumentRenderer } from '@keystatic/core/renderer';

export default function DynamicClient({ title, content }: { title: string, content: any }) {
    return (
        <div className="container py-32 px-4 md:px-6 relative">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px]" />
            </div>

            <article className="max-w-4xl mx-auto relative z-10">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8 mb-20"
                >
                    <div className="inline-flex items-center gap-3">
                        <div className="h-[1px] w-12 bg-primary/30" />
                        <span className="text-primary font-mono text-xs uppercase tracking-widest font-bold">Document // Verified</span>
                    </div>

                    <h1 className="font-space text-5xl font-bold tracking-tight md:text-8xl text-white leading-none">
                        {title}
                    </h1>

                    <div className="h-2 w-32 bg-gradient-to-r from-primary to-transparent rounded-full" />
                </motion.header>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass p-10 md:p-20 rounded-[3rem] border border-white/10"
                >
                    <div className="prose prose-xl prose-invert max-w-none font-light leading-relaxed prose-headings:font-space prose-headings:uppercase prose-headings:tracking-widest prose-p:text-white/70">
                        <DocumentRenderer document={content} />
                    </div>
                </motion.div>
            </article>
        </div>
    );
}
