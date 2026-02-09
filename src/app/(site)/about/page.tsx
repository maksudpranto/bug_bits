import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { Metadata } from 'next';
import { DocumentRenderer } from '@keystatic/core/renderer';
import AnimatedTeamGrid from '@/components/animated-team-grid';

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
                <p className="text-2xl font-medium text-primary italic">
                    "{mission}"
                </p>
            </section>

            {/* Story Section */}
            {story && (
                <section className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
                    <h2 className="text-3xl font-bold mb-8">Our Story</h2>
                    <div className="bg-muted/30 p-8 md:p-12 rounded-[2.5rem] border border-primary/5 shadow-inner">
                        <DocumentRenderer document={story} />
                    </div>
                </section>
            )}

            {/* Team Section */}
            <section>
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Meet the Team</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        The talented individuals driving innovation and excellence at Bug Bits.
                    </p>
                </div>

                <AnimatedTeamGrid team={team as any} />
            </section>
        </div>
    );
}
