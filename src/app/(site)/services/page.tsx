import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { ServiceCard } from '@/components/service-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | Bug Bits',
    description: 'Explore our software development services.',
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function ServicesPage() {
    const services = await reader.collections.services.all();

    return (
        <div className="container py-24 px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Our Services</h1>
                <p className="text-xl text-muted-foreground">
                    Comprehensive software solutions tailored to your business needs.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.length > 0 ? (
                    services.map((service) => (
                        <ServiceCard
                            key={service.slug}
                            title={service.entry.title}
                            summary={service.entry.summary || "No summary available."}
                            iconName={service.entry.apiIcon || "Globe"}
                            slug={service.slug}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No services found. Add them via the Admin Panel.
                    </div>
                )}
            </div>
        </div>
    );
}
