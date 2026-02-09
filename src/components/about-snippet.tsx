import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutSnippet({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-muted/30">
                <div className="absolute -bottom-[20%] right-0 w-[40%] h-[40%] bg-amber-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                        {data.image ? (
                            <Image
                                src={data.image}
                                alt={data.title}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground">
                                About Image
                            </div>
                        )}
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">{data.title}</h2>
                        <div className="text-muted-foreground text-lg whitespace-pre-line">
                            {data.content}
                        </div>
                        <div className="border-l-4 border-primary pl-6 py-2 italic text-muted-foreground">
                            "We believe in building software that not only works but drives growth."
                        </div>
                        <Button size="lg" asChild>
                            <a href="/about">Learn More About Us</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
