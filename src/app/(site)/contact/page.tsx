import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { Metadata } from 'next';
import ContactClient from './contact-client';

export const metadata: Metadata = {
    title: 'Contact Us | Bug Bits',
    description: 'Get in touch with our team.',
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function ContactPage() {
    const settings = await reader.singletons.settings.read();
    const pageData = await reader.singletons.contactPage.read();
    const contact = settings?.contact;

    return <ContactClient contact={contact} pageData={pageData} />;
}
