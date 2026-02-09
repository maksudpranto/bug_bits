import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    singletons: {
        homepage: singleton({
            label: 'Homepage',
            path: 'src/content/homepage',
            format: { data: 'json' },
            schema: {
                hero: fields.object({
                    badge: fields.text({ label: 'Hero Badge Text' }),
                    title: fields.text({ label: 'Hero Title' }),
                    highlightWord: fields.text({ label: 'Title Highlight Word' }),
                    subtitle: fields.text({ label: 'Hero Subtitle', multiline: true }),
                    layout: fields.select({
                        label: 'Layout Style',
                        options: [
                            { label: 'Centered (Focus on Text)', value: 'centered' },
                            { label: 'Split (Content Left, Image Right)', value: 'split' },
                        ],
                        defaultValue: 'centered',
                    }),
                    backgroundStyle: fields.select({
                        label: 'Background Aesthetic',
                        options: [
                            { label: 'Modern Gradient (Tech)', value: 'gradient' },
                            { label: 'Soft Mesh (Clean)', value: 'mesh' },
                            { label: 'Dark Void (Futuristic)', value: 'void' },
                        ],
                        defaultValue: 'gradient',
                    }),
                    image: fields.image({
                        label: 'Hero Image (Best for Split layout)',
                        directory: 'public/images/hero',
                        publicPath: '/images/hero',
                    }),
                    primaryButtonText: fields.text({ label: 'Primary Button Text' }),
                    secondaryButtonText: fields.text({ label: 'Secondary Button Text' }),
                }, { label: 'Hero Section' }),
                features: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Feature Title' }),
                        description: fields.text({ label: 'Feature Description' }),
                        icon: fields.select({
                            label: 'Icon',
                            options: [
                                { label: 'Globe', value: 'Globe' },
                                { label: 'Zap', value: 'Zap' },
                                { label: 'Cloud', value: 'Cloud' },
                                { label: 'Code', value: 'Code' },
                                { label: 'Server', value: 'Server' },
                                { label: 'Shield', value: 'Shield' },
                                { label: 'Database', value: 'Database' },
                                { label: 'Clone', value: 'Copy' },
                            ],
                            defaultValue: 'Globe',
                        }),
                    }),
                    {
                        label: 'Features List',
                        description: 'Manage homepage features. You can Duplicate (Clone) or Remove items using the individual item menus.',
                        itemLabel: props => props.fields.title.value || 'Feature',
                    }
                ),
                whyChooseUs: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Title' }),
                        description: fields.text({ label: 'Description', multiline: true }),
                    }),
                    {
                        label: 'Why Choose Us',
                        itemLabel: props => props.fields.title.value || 'Reason',
                    }
                ),
                process: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Step Title' }),
                        description: fields.text({ label: 'Description', multiline: true }),
                    }),
                    {
                        label: 'Our Process',
                        itemLabel: props => props.fields.title.value || 'Step',
                    }
                ),
                portfolio: fields.array(
                    fields.object({
                        project: fields.text({ label: 'Project Name' }),
                        description: fields.text({ label: 'Short Description' }),
                        image: fields.image({
                            label: 'Project Image',
                            directory: 'public/images/portfolio',
                            publicPath: '/images/portfolio',
                        }),
                        link: fields.text({ label: 'Project Link' }),
                    }),
                    {
                        label: 'Portfolio / Our Work',
                        itemLabel: props => props.fields.project.value || 'Project',
                    }
                ),
                aboutSection: fields.object({
                    title: fields.text({ label: 'Title' }),
                    content: fields.text({ label: 'Content', multiline: true }),
                    image: fields.image({
                        label: 'About Image',
                        directory: 'public/images/about',
                        publicPath: '/images/about',
                    }),
                }, { label: 'About Us Section' }),
                cta: fields.object({
                    title: fields.text({ label: 'Title' }),
                    subtitle: fields.text({ label: 'Subtitle', multiline: true }),
                    buttonText: fields.text({ label: 'Button Text' }),
                    buttonLink: fields.text({ label: 'Button Link' }),
                }, { label: 'Call to Action Section 1 (Lead Generation)' }),
                ctaSecondary: fields.object({
                    title: fields.text({ label: 'Title' }),
                    subtitle: fields.text({ label: 'Subtitle', multiline: true }),
                    buttonText: fields.text({ label: 'Button Text' }),
                    buttonLink: fields.text({ label: 'Button Link' }),
                }, { label: 'Call to Action Section 2 (Middle Page)' }),
                contactSection: fields.object({
                    title: fields.text({ label: 'Title' }),
                    description: fields.text({ label: 'Description', multiline: true }),
                }, { label: 'Contact Section' }),
            },
        }),
        about: singleton({
            label: 'About Page',
            path: 'src/content/about',
            format: { data: 'json' },
            schema: {
                mission: fields.text({ label: 'Mission Statement', multiline: true }),
                story: fields.document({
                    label: 'Our Story',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                }),
                team: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Name' }),
                        role: fields.text({ label: 'Role' }),
                        bio: fields.text({ label: 'Bio', multiline: true }),
                    }),
                    {
                        label: 'Team Members',
                        itemLabel: props => props.fields.name.value || 'Member',
                    }
                ),
            },
        }),
        settings: singleton({
            label: 'Site Settings',
            path: 'src/content/settings',
            format: { data: 'json' },
            schema: {
                contact: fields.object({
                    email: fields.text({ label: 'Contact Email' }),
                    phone: fields.text({ label: 'Phone Number' }),
                    address: fields.text({ label: 'Address', multiline: true }),
                    socials: fields.object({
                        twitter: fields.text({ label: 'Twitter URL' }),
                        github: fields.text({ label: 'GitHub URL' }),
                        linkedin: fields.text({ label: 'LinkedIn URL' }),
                    }, { label: 'Social Links' }),
                }, { label: 'Contact Info' }),
                navigation: fields.array(
                    fields.object({
                        label: fields.text({ label: 'Link Label' }),
                        url: fields.text({ label: 'URL (e.g. /about)' }),
                    }),
                    {
                        label: 'Header Navigation',
                        itemLabel: props => props.fields.label.value || 'Link',
                    }
                ),
            },
        }),
    },
    collections: {
        services: collection({
            label: 'Services',
            slugField: 'title',
            path: 'src/content/services/*',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                summary: fields.text({ label: 'Summary', multiline: true }),
                apiIcon: fields.text({ label: 'Lucide Icon Name (e.g. Smartphone, Cloud)' }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                }),
            },
        }),
        testimonials: collection({
            label: 'Testimonials',
            slugField: 'author',
            path: 'src/content/testimonials/*',
            format: { data: 'json' },
            schema: {
                author: fields.slug({ name: { label: 'Author Name' } }),
                role: fields.text({ label: 'Role / Company' }),
                quote: fields.text({ label: 'Quote', multiline: true }),
                avatar: fields.image({
                    label: 'Avatar',
                    directory: 'public/images/testimonials',
                    publicPath: '/images/testimonials',
                }),
            },
        }),
    },
});
