"use client";

import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/service-card';

export default function ServicesClient({ services, pageData }: { services: any[], pageData: any }) {
    return (
        <div className="container py-32 px-4 md:px-6 relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px]" />
            </div>

            <div className="relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono font-bold uppercase tracking-widest mb-4"
                    >
                        {pageData?.badge || "System Capabilities // Archive"}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-space text-5xl font-bold tracking-tight md:text-8xl text-white leading-tight"
                    >
                        {pageData?.titlePrefix || "Our"} <span className="text-glow">{pageData?.titleHighlight || "Expertise"}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
                    >
                        {pageData?.description || "Explore our suite of high-performance digital solutions designed to propel your business into the future."}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
                >
                    {services.length > 0 ? (
                        services.map((service, index) => (
                            <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index + 0.3 }}
                            >
                                <ServiceCard
                                    title={service.entry.title}
                                    summary={service.entry.summary || "No summary available."}
                                    iconName={service.entry.apiIcon || "Globe"}
                                    slug={service.slug}
                                    buttonText={pageData?.cardButtonText}
                                />
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full py-32 glass rounded-[2.5rem] border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                <span className="text-primary text-2xl animate-pulse">!</span>
                            </div>
                            <p className="text-white/40 font-mono text-sm uppercase tracking-widest">
                                {pageData?.emptyStateText || "Void_Registry: No active services protocols found"}
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
