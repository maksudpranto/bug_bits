import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function SiteFooter() {
    const settings = await reader.singletons.settings.read();
    const homepage = await reader.singletons.homepage.read();

    const contactInfo = settings?.contact;
    const socials = contactInfo?.socials;
    const contactSection = homepage?.contactSection;
    const footerData = homepage?.footer || {
        socialTitle: 'Social Channels',
        sitemapTitle: 'Sitemap',
        companyName: 'Bug Bits',
        tagline: 'Transforming ideas into powerful software solutions for the modern web.'
    };

    return (
        <footer className="bg-background border-t">
            {/* Top Section: "Get in Touch" Design */}
            {contactSection && (
                <div className="py-12 container px-4 md:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{contactSection.title}</h2>
                        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto text-sm">{contactSection.description}</p>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="bg-muted/30 p-6 rounded-xl space-y-6">
                            <div>
                                <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                                <div className="space-y-3 text-muted-foreground text-sm">
                                    {contactInfo?.email && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <span>{contactInfo.email}</span>
                                        </div>
                                    )}
                                    {contactInfo?.phone && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                            <span>{contactInfo.phone}</span>
                                        </div>
                                    )}
                                    {contactInfo?.address && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <MapPin className="w-4 h-4" />
                                            </div>
                                            <span className="whitespace-pre-line">{contactInfo.address}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center p-6 bg-primary/5 rounded-xl border border-primary/10">
                            <h3 className="text-xl font-bold mb-2">Start a Conversation</h3>
                            <p className="text-muted-foreground mb-6 text-sm">Ready to bring your digital vision to life? Let's talk about your next project.</p>
                            <Button size="sm" asChild className="w-full sm:w-auto">
                                <a href="/contact">Send us a message</a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Section: Standard Footer info */}
            <div className="bg-muted/30 py-12">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg">{footerData.companyName}</h3>
                            <p className="text-muted-foreground text-sm max-w-xs">
                                {footerData.tagline}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-sm tracking-wider uppercase">{footerData.socialTitle}</h3>
                            <div className="flex gap-4">
                                {socials?.github && (
                                    <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary p-2 bg-background rounded-full border hover:border-primary/50 transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                                {socials?.twitter && (
                                    <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary p-2 bg-background rounded-full border hover:border-primary/50 transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                )}
                                {socials?.linkedin && (
                                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary p-2 bg-background rounded-full border hover:border-primary/50 transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                )}
                                {socials?.facebook && (
                                    <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary p-2 bg-background rounded-full border hover:border-primary/50 transition-colors">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                )}
                                {socials?.instagram && (
                                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary p-2 bg-background rounded-full border hover:border-primary/50 transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                )}
                                {socials?.youtube && (
                                    <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary p-2 bg-background rounded-full border hover:border-primary/50 transition-colors">
                                        <Youtube className="w-5 h-5" />
                                    </a>
                                )}
                                {socials?.whatsapp && (
                                    <a
                                        href={socials.whatsapp.startsWith('http') ? socials.whatsapp : `https://wa.me/${socials.whatsapp.replace(/\D/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary p-2 bg-background rounded-full border hover:border-primary/50 transition-colors"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-sm tracking-wider uppercase">{footerData.sitemapTitle}</h3>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                                <Link href="/services" className="hover:text-primary">Services</Link>
                                <Link href="/about" className="hover:text-primary">About</Link>
                                <Link href="/contact" className="hover:text-primary">Contact</Link>
                                <Link href="/test" className="hover:text-primary">Components</Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Bug Bits. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
