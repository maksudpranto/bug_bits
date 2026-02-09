import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { Metadata } from 'next';
import { DocumentRenderer } from '@keystatic/core/renderer';

export const metadata: Metadata = {
    title: 'About Us | Bug Bits',
    description: 'Learn about our mission and team.',
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function AboutPage() {
    const aboutData = await reader.singletons.about.read();

    const mission = aboutData?.mission || "To build software that empowers the future.";
    const team = aboutData?.team || [];
    const story = aboutData?.story ? await aboutData.story() : null;

    return (
        <div className="container py-24 px-4 md:px-6 space-y-24">
            {/* Mission Section */}
            <section className="text-center max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">About Bug Bits</h1>
                <p className="text-2xl font-medium text-primary">
                    "{mission}"
                </p>
            </section>

            {/* Story Section */}
            {story && (
                <section className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
                    <h2>Our Story</h2>
                    <DocumentRenderer document={story} />
                </section>
            )}

            {/* Team Section */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {team.map((member, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 bg-muted/30 rounded-xl">
                            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                {member.name.charAt(0)}
                            </div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-primary font-medium mb-2">{member.role}</p>
                            <p className="text-muted-foreground text-sm">{member.bio}</p>
                        </div>
                    ))}
                    {team.length === 0 && (
                        <div className="col-span-full text-center text-muted-foreground">
                            Team members will appear here.
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
