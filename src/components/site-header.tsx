"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X, Shield, Code, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export default function SiteHeader() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4",
                scrolled ? "top-4" : "top-6"
            )}
        >
            <nav className={cn(
                "container mx-auto max-w-7xl h-16 rounded-full border border-white/10 transition-all duration-300 flex items-center justify-between px-6",
                scrolled ? "glass shadow-2xl bg-black/40" : "bg-transparent border-transparent"
            )}>
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="relative w-8 h-8 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
                            <Shield className="w-5 h-5 text-white relative z-10" />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-tr from-accent to-primary opacity-50"
                            />
                        </div>
                        <span className="font-space text-xl font-bold tracking-tighter text-white">
                            BUG BITS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium transition-colors rounded-full relative group",
                                    pathname === item.href
                                        ? "text-white"
                                        : "text-muted-foreground hover:text-white"
                                )}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-white/5 border border-white/10 rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        className="hidden md:flex rounded-full px-6 cyber-border h-10 text-sm font-bold shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                    >
                        Request Quote
                    </Button>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-20 left-4 right-4 glass border border-white/10 rounded-3xl p-6 shadow-2xl z-40"
                >
                    <div className="flex flex-col space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-lg font-medium transition-colors p-2 rounded-xl",
                                    pathname === item.href
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button className="w-full rounded-xl cyber-border h-12 mt-4 font-bold">
                            Request Quote
                        </Button>
                    </div>
                </motion.div>
            )}
        </header>
    );
}
