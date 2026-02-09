import Link from "next/link";
import { Code, Menu, X } from "lucide-react";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { Button } from "@/components/ui/button";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function SiteHeader() {
    const settings = await reader.singletons.settings.read();
    const navLinks = settings?.navigation || [
        { label: 'Services', url: '/services' },
        { label: 'About', url: '/about' },
        { label: 'Contact', url: '/contact' },
    ];

    return (
        <header className="px-6 h-16 flex items-center border-b border-border/40 backdrop-blur top-0 sticky z-50 bg-background/80 supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tighter flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                        <Code className="w-5 h-5" />
                    </div>
                    <span>Bug Bits</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
                    {navLinks.map((link, i) => (
                        <Link key={i} href={link.url} className="hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Placeholder (Refactor to client component for interactivity if needed) */}
                <div className="md:hidden">
                    <Button variant="ghost" size="icon">
                        <Menu className="w-6 h-6" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
