import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Smartphone, Cloud, Globe, Code, Zap, Server, Shield, Database, Copy } from "lucide-react";
import Link from "next/link";

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
}

export function ServiceCard({ title, summary, iconName, slug }: ServiceCardProps) {
    const Icon = iconMap[iconName] || Globe;

    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
            <CardHeader>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <Icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
                <CardDescription className="flex-1 mb-4 text-base">
                    {summary}
                </CardDescription>
                <Link
                    href={`/services/${slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline group"
                >
                    Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
            </CardContent>
        </Card>
    );
}
