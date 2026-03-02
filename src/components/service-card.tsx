import { ArrowRight, Smartphone, Cloud, Globe, Code, Zap, Server, Shield, Database, Copy } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Map string names to Lucide components
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

interface ServiceCardProps {
    title: string;
    summary: string;
    iconName: string;
    slug: string;
    buttonText?: string;
}

export function ServiceCard({ title, summary, iconName, slug, buttonText }: ServiceCardProps) {
    const Icon = iconMap[iconName] || Globe;

    return (
        <div className="group relative flex flex-col h-full glass rounded-[2.5rem] p-10 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            {/* Technical Frame Decoration */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/20 rounded-tr-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-500 border border-white/5 group-hover:border-accent/30 shadow-2xl">
                    <Icon className="w-8 h-8" />
                </div>
                <div className="absolute -inset-2 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <h3 className="font-space text-2xl font-bold mb-4 text-white group-hover:text-glow transition-all tracking-tight">
                {title}
            </h3>

            <p className="flex-1 mb-8 text-muted-foreground font-light leading-relaxed">
                {summary}
            </p>

            <Link
                href={`/services/${slug}`}
                className="inline-flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors group/link w-fit"
            >
                {buttonText || "Execute Brief"} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
        </div>
    );
}
