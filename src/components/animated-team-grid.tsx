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
                staggerChildren: 0.2
            }
        }
    } as any;

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    } as any;

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
            {team.map((member, i) => (
                <motion.div
                    key={i}
                    variants={itemVariants}
                    className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-muted/30 border border-primary/10 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20"
                >
                    {/* Profile Image / Fallback */}
                    <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                        {member.image ? (
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-all duration-700 group-hover:brightness-110"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-primary/10 flex items-center justify-center">
                                <span className="text-6xl font-black text-primary/20 select-none">
                                    {member.name.charAt(0)}
                                </span>
                            </div>
                        )}
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />
                    </div>

                    {/* Info Overlay (Glassmorphism) */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <div className="backdrop-blur-xl bg-white/10 dark:bg-black/40 border border-white/20 dark:border-white/10 rounded-2xl p-6 translate-y-2 transition-all duration-500 group-hover:translate-y-0 relative overflow-hidden">
                            {/* Primary accent line */}
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />

                            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-primary font-semibold text-sm mb-4 tracking-wide uppercase">{member.role}</p>

                            <p className="text-white/80 text-sm line-clamp-3 opacity-0 h-0 transition-all duration-500 group-hover:opacity-100 group-hover:h-auto group-hover:mt-2">
                                {member.bio}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
            {team.length === 0 && (
                <div className="col-span-full text-center py-24 border-2 border-dashed border-muted rounded-3xl text-muted-foreground bg-muted/5">
                    No team members found. Start adding your experts in Keystatic!
                </div>
            )}
        </motion.div>
    );
}
