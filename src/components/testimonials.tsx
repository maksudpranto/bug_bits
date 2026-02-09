import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Testimonials() {
    const testimonials = await reader.collections.testimonials.all();

    if (testimonials.length === 0) return null;

    return (
        <section className="py-24 bg-muted/20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Trusted by Market Leaders</h2>
                    <p className="text-muted-foreground">Don't just take our word for it.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-background/50 backdrop-blur border-none shadow-sm">
                            <CardContent className="pt-6">
                                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                                <p className="text-lg mb-6 italic">"{t.entry.quote}"</p>
                                <div className="flex items-center gap-4">
                                    {/* Placeholder for avatar if none provided */}
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                        {t.entry.author.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{t.entry.author}</h4>
                                        <p className="text-sm text-muted-foreground">{t.entry.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
