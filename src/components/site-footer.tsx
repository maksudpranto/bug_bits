import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, Facebook, Instagram, Youtube, MessageCircle, ArrowRight } from 'lucide-react';
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
        legalTitle: 'Legal Signals',
        companyName: 'Bug Bits',
        tagline: 'Transforming ideas into powerful software solutions for the modern web.',
        copyrightSuffix: 'Executed with precision.',
        latitude: 'LAT: 23.8103° N',
        longitude: 'LON: 90.4125° E',
        statusText: 'SYSTEMS_OPERATIONAL'
    };

    return (
        <footer className="relative bg-[#030303] border-t border-white/5 pt-24 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="container px-4 md:px-6 relative z-10">
                {/* Contact Banner Section */}
                {contactSection && (
                    <div className="mb-24">
                        <div className="grid gap-12 lg:grid-cols-2 items-center bg-white/5 rounded-[2.5rem] border border-white/10 glass p-8 md:p-16">
                            <div className="space-y-6">
                                <h2 className="font-space text-3xl font-bold tracking-tight text-white md:text-5xl">{contactSection.title}</h2>
                                <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-md">{contactSection.description}</p>

                                <div className="space-y-4 pt-4">
                                    {contactInfo?.email && (
                                        <div className="flex items-center gap-4 group cursor-pointer w-fit">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <span className="text-white/80 group-hover:text-white transition-colors">{contactInfo.email}</span>
                                        </div>
                                    )}
                                    {contactInfo?.address && (
                                        <div className="flex items-center gap-4 group cursor-pointer w-fit">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <MapPin className="w-4 h-4" />
                                            </div>
                                            <span className="text-white/80 group-hover:text-white transition-colors whitespace-pre-line">{contactInfo.address}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                                <div className="relative flex flex-col justify-center items-center text-center p-10 bg-black rounded-[2rem] border border-white/10">
                                    <h3 className="text-2xl font-bold mb-3 text-glow">{contactSection.bannerTitle || "Start a Conversation"}</h3>
                                    <p className="text-muted-foreground mb-8 text-sm font-light">{contactSection.bannerDescription || "Ready to bring your digital vision to life? Let's talk about your next project."}</p>
                                    <Button size="lg" asChild className="rounded-full px-10 h-14 cyber-border w-full group/btn">
                                        <a href="/contact" className="flex items-center gap-2">
                                            {contactSection.bannerButtonText || "Send Message"} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer Main Links Area */}
                <div className="grid gap-12 lg:grid-cols-4 pb-16 border-b border-white/5">
                    <div className="lg:col-span-2 space-y-8">
                        <Link href="/" className="inline-block transform hover:scale-105 transition-transform">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-tr from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                                    <span className="text-white font-bold text-xl font-space italic">B</span>
                                </div>
                                <span className="font-space text-2xl font-bold tracking-tight text-white">{footerData.companyName}</span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-sm">
                            {footerData.tagline}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            {socials?.github && (
                                <a href={socials.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl border border-white/10 text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all">
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {socials?.linkedin && (
                                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl border border-white/10 text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                            {socials?.twitter && (
                                <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl border border-white/10 text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            )}
                            {socials?.instagram && (
                                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl border border-white/10 text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-white font-space font-bold uppercase tracking-widest text-xs">{footerData.sitemapTitle}</h3>
                        <div className="flex flex-col gap-4 text-muted-foreground">
                            {['Services', 'About us', 'Portfolio', 'Process', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                >
                                    <span className="h-[1px] w-0 bg-primary group-hover:w-4 transition-all" />
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-white font-space font-bold uppercase tracking-widest text-xs">{footerData.legalTitle || "Legal Signals"}</h3>
                        <div className="flex flex-col gap-4 text-muted-foreground text-sm font-light">
                            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                            <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                </div>

                <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted-foreground text-sm font-light">
                        © {new Date().getFullYear()} {footerData.companyName}. {footerData.copyrightSuffix || "Executed with precision."}
                    </p>
                    <div className="flex items-center gap-8 text-sm font-mono tracking-tighter text-muted-foreground/50">
                        <span>{footerData.latitude || "LAT: 23.8103° N"}</span>
                        <span>{footerData.longitude || "LON: 90.4125° E"}</span>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>{footerData.statusText || "SYSTEMS_OPERATIONAL"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
