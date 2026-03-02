"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image?: string | null;
}

export default function AnimatedTeamGrid({ team }: { team: TeamMember[] }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "circOut"
            }
        }
    } as any;

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
            {team.map((member, i) => (
                <motion.div
                    key={i}
                    variants={itemVariants}
                    className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-primary/30 transition-all duration-700"
                >
                    {/* Profile Image / Fallback */}
                    <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105">
                        {member.image ? (
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-all duration-700 group-hover:brightness-110"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center">
                                <span className="text-8xl font-black text-white/5 select-none font-space">
                                    {member.name.charAt(0)}
                                </span>
                            </div>
                        )}
                        {/* Technical scanline overlay */}
                        <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none" />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                    </div>

                    {/* HUD Elements */}
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-8 h-8 border-t border-r border-primary/40 rounded-tr-lg" />
                    </div>
                    <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-8 h-8 border-b border-l border-primary/40 rounded-bl-lg" />
                    </div>

                    {/* Info Overlay (Glassmorphism) */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                        <div className="space-y-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-[10px] font-mono font-bold tracking-tighter text-primary-foreground uppercase">Level: Senior Architect</span>
                            </div>

                            <h3 className="text-3xl font-space font-bold text-white tracking-tight">{member.name}</h3>
                            <p className="text-accent font-mono text-xs lowercase tracking-widest opacity-80">{member.role}</p>

                            <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-500 opacity-0 group-hover:opacity-100">
                                <div className="p-[1px] bg-gradient-to-r from-primary/50 to-transparent mb-4" />
                                <p className="text-white/70 text-sm font-light leading-relaxed line-clamp-4">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
            {team.length === 0 && (
                <div className="col-span-full py-32 glass rounded-[2.5rem] border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                        <span className="text-primary text-2xl animate-pulse">!</span>
                    </div>
                    <p className="text-white/40 font-mono text-sm uppercase tracking-widest">
                        Node_Empty: No active agents found in directory
                    </p>
                </div>
            )}
        </motion.div>
    );
}
