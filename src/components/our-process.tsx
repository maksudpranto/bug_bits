export default function OurProcess({ data }: { data: any }) {
    if (!data || !data.items || data.items.length === 0) return null;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-muted/30">
                <div className="absolute -top-[20%] right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">{data.title}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {data.description}
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {data.items.map((step: any, i: number) => (
                        <div key={i} className="relative flex flex-col items-center text-center">
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground text-2xl font-bold mb-6 shadow-lg shadow-primary/20">
                                {i + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.description}</p>

                            {/* Connector Line (Desktop only, except last item) */}
                            {i < data.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-border -z-10" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
