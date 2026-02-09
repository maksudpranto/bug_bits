import { Shield, Zap, Target, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function WhyChooseUs({ data }: { data: any[] }) {
    if (!data || data.length === 0) return null;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-muted/30">
                <div className="absolute -top-[20%] right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Us</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We deliver more than just code. We deliver value, reliability, and innovation.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {data.map((item, i) => (
                        <Card key={i} className="bg-muted/50 border-none shadow-none">
                            <CardContent className="pt-6 text-center">
                                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                    <Target className="w-6 h-6" />
                                    {/* Note: Icon selection in dynamic arrays is tricky without a mapping. 
                      For now using a default icon or we'd need a select field in schema.
                      Using generic Target for demonstration. */}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
