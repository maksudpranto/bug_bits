import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Keystatic Admin',
    description: 'Admin panel for Bug Bits',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
