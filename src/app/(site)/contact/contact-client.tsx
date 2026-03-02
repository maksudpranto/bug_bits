"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactClient({ contact, pageData }: { contact: any, pageData?: any }) {
    return (
        <div className="container py-32 px-4 md:px-6 relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px]" />
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
            </div>

            <div className="relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono font-bold uppercase tracking-widest mb-4"
                    >
                        {pageData?.badge || "Communication Protocol // v1.2"}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-space text-5xl font-bold tracking-tight md:text-8xl text-white leading-tight"
                    >
                        {pageData?.title || "Establish Link"}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
                    >
                        {pageData?.description || "Initiate a direct connection with our technical units. We're ready to architect your next digital leap."}
                    </motion.p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="grid gap-6">
                            {[
                                { icon: MapPin, label: pageData?.addressLabel || "Visit Terminal", value: contact?.address, detail: pageData?.addressStatus || "Global Headquarters" },
                                { icon: Mail, label: pageData?.emailLabel || "Sync via Email", value: contact?.email, detail: pageData?.emailStatus || "Direct Uplink", href: `mailto:${contact?.email}` },
                                { icon: Phone, label: pageData?.phoneLabel || "Audio Transmit", value: contact?.phone, detail: pageData?.phoneStatus || "Emergency Line", href: `tel:${contact?.phone}` },
                            ].map((item, i) => (
                                item.value && (
                                    <div key={i} className="group glass p-8 rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden relative">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="flex items-start gap-6 relative z-10">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:text-accent transition-all duration-500 border border-white/5 shadow-2xl">
                                                <item.icon className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-primary/60 mb-1">{item.label}</p>
                                                {item.href ? (
                                                    <a href={item.href} className="text-2xl font-space font-bold text-white group-hover:text-glow transition-all">{item.value}</a>
                                                ) : (
                                                    <h3 className="text-2xl font-space font-bold text-white whitespace-pre-line leading-relaxed">{item.value}</h3>
                                                )}
                                                <p className="text-xs font-mono text-muted-foreground mt-2 lowercase opacity-50 tracking-tighter">Status: {item.detail} // ONLINE</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                        {/* Social Links or Extra Info */}
                        <div className="glass p-10 rounded-[2.5rem] border border-white/5 border-dashed relative overflow-hidden">
                            <h4 className="font-space font-bold text-white mb-4 uppercase tracking-widest text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                {pageData?.availabilityTitle || "Available for Deployments"}
                            </h4>
                            <p className="text-muted-foreground font-light text-sm leading-relaxed">
                                {pageData?.availabilityDescription || "Our engineering teams are distributed across multiple timezones to ensure maximum development velocity and robust support coverage."}
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass p-10 md:p-14 rounded-[3rem] border border-white/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        <div className="mb-10">
                            <h2 className="font-space text-3xl font-bold text-white mb-2 uppercase tracking-tighter">{pageData?.formTitle || "Transmit Message"}</h2>
                            <p className="text-muted-foreground font-light">{pageData?.formDescription || "Input your parameters below to initialize communication."}</p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary/60 ml-4">{pageData?.formSourceFirstLabel || "Source_Name[0]"}</label>
                                    <Input
                                        placeholder="First Name"
                                        className="h-14 rounded-full bg-white/5 border-white/10 px-8 focus:ring-primary/20 transition-all font-light"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary/60 ml-4">{pageData?.formSourceLastLabel || "Source_Name[1]"}</label>
                                    <Input
                                        placeholder="Last Name"
                                        className="h-14 rounded-full bg-white/5 border-white/10 px-8 focus:ring-primary/20 transition-all font-light"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary/60 ml-4">{pageData?.formEmailLabel || "Sync_Email"}</label>
                                <Input
                                    type="email"
                                    placeholder="your@uplink.com"
                                    className="h-14 rounded-full bg-white/5 border-white/10 px-8 focus:ring-primary/20 transition-all font-light"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary/60 ml-4">{pageData?.formPayloadLabel || "Payload_Data"}</label>
                                <Textarea
                                    placeholder="Describe your initiative..."
                                    className="min-h-[160px] rounded-[2rem] bg-white/5 border-white/10 p-8 focus:ring-primary/20 transition-all font-light resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-16 rounded-full text-lg font-bold cyber-border hover:scale-[1.02] transition-transform group/submit bg-primary text-white"
                            >
                                <span className="flex items-center gap-3">
                                    {pageData?.submitButtonText || "Initialize Uplink"} <Send className="w-5 h-5 group-hover/submit:translate-x-1 group-hover/submit:-translate-y-1 transition-transform" />
                                </span>
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
