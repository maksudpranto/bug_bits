import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PortfolioSection({ data }: { data: any[] }) {
    if (!data || data.length === 0) return null;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Our Work</h2>
                        <p className="text-muted-foreground">
                            Explore some of the impactful digital solutions we've delivered.
                        </p>
                    </div>
                    <Button variant="outline" className="gap-2">
                        View All Projects <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {data.map((project, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all">
                            <div className="aspect-video relative bg-muted overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.project}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-secondary">
                                        No Image
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2">{project.project}</h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                                {project.link && (
                                    <a href={project.link} target="_blank" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                                        View Case Study <ArrowUpRight className="w-3 h-3" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
