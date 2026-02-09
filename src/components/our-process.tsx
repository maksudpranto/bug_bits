export default function OurProcess({ data }: { data: any[] }) {
    if (!data || data.length === 0) return null;

    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Our Process</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From concept to launch, we follow a proven methodology to ensure success.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {data.map((step, i) => (
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
