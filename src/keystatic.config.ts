import { config, fields, singleton, collection } from '@keystatic/core';

const buttonSchema = (label: string, defaultBg = '#f97316', defaultHover = '#ea580c', defaultText = '#ffffff') => fields.object({
    text: fields.text({ label: `${label} Text` }),
    link: fields.text({ label: `${label} Link` }),
    background: fields.text({ label: `${label} Background (Hex)`, defaultValue: defaultBg }),
    hover: fields.text({ label: `${label} Hover (Hex)`, defaultValue: defaultHover }),
    text_color: fields.text({ label: `${label} Text Color (Hex)`, defaultValue: defaultText }),
}, { label: `${label} Settings` });

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
                    primaryButton: buttonSchema('Primary Button'),
                    secondaryButton: buttonSchema('Secondary Button', '#1e293b', '#334155', '#ffffff'),
                }, { label: 'Hero Section' }),
                features: fields.object({
                    title: fields.text({ label: 'Section Title', defaultValue: 'Our Core Expertise' }),
                    subtitle: fields.text({ label: 'Section Subtitle', multiline: true, defaultValue: 'We leverage the latest technologies to build robust, scalable, and high-performance digital solutions.' }),
                    items: fields.array(
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
                            itemLabel: props => props.fields.title.value || 'Feature',
                        }
                    ),
                }, { label: 'Features Section' }),
                whyChooseUs: fields.object({
                    title: fields.text({ label: 'Section Title', defaultValue: 'Why Choose Us' }),
                    description: fields.text({ label: 'Section Description', multiline: true, defaultValue: 'We deliver more than just code. We deliver value, reliability, and innovation.' }),
                    items: fields.array(
                        fields.object({
                            title: fields.text({ label: 'Title' }),
                            description: fields.text({ label: 'Description', multiline: true }),
                        }),
                        {
                            label: 'Items',
                            itemLabel: props => props.fields.title.value || 'Reason',
                        }
                    ),
                }, { label: 'Why Choose Us Section' }),
                process: fields.object({
                    title: fields.text({ label: 'Section Title', defaultValue: 'Our Process' }),
                    description: fields.text({ label: 'Section Description', multiline: true, defaultValue: 'From concept to launch, we follow a proven methodology to ensure success.' }),
                    items: fields.array(
                        fields.object({
                            title: fields.text({ label: 'Step Title' }),
                            description: fields.text({ label: 'Description', multiline: true }),
                        }),
                        {
                            label: 'Steps',
                            itemLabel: props => props.fields.title.value || 'Step',
                        }
                    ),
                }, { label: 'Our Process Section' }),
                portfolio: fields.object({
                    title: fields.text({ label: 'Section Title', defaultValue: 'Our Work' }),
                    description: fields.text({ label: 'Section Description', multiline: true, defaultValue: 'Explore some of the impactful digital solutions we\'ve delivered.' }),
                    items: fields.array(
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
                            label: 'Projects',
                            itemLabel: props => props.fields.project.value || 'Project',
                        }
                    ),
                }, { label: 'Portfolio Section' }),
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
                    button: buttonSchema('Button'),
                }, { label: 'Call to Action Section 1 (Lead Generation)' }),
                ctaSecondary: fields.object({
                    title: fields.text({ label: 'Title' }),
                    subtitle: fields.text({ label: 'Subtitle', multiline: true }),
                    button: buttonSchema('Button'),
                }, { label: 'Call to Action Section 2 (Middle Page)' }),
                contactSection: fields.object({
                    title: fields.text({ label: 'Title' }),
                    description: fields.text({ label: 'Description', multiline: true }),
                }, { label: 'Contact Section' }),
                footer: fields.object({
                    socialTitle: fields.text({ label: 'Social Channels Header', defaultValue: 'Social Channels' }),
                    sitemapTitle: fields.text({ label: 'Sitemap Header', defaultValue: 'Sitemap' }),
                    companyName: fields.text({ label: 'Footer Company Name', defaultValue: 'Bug Bits' }),
                    tagline: fields.text({ label: 'Footer Tagline', defaultValue: 'Transforming ideas into powerful software solutions for the modern web.' }),
                }, { label: 'Footer Customization' }),
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
                        image: fields.image({
                            label: 'Profile Image',
                            directory: 'public/images/about/team',
                            publicPath: '/images/about/team',
                        }),
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
                        facebook: fields.text({ label: 'Facebook URL' }),
                        instagram: fields.text({ label: 'Instagram URL' }),
                        whatsapp: fields.text({ label: 'WhatsApp (Link or Phone)' }),
                        youtube: fields.text({ label: 'YouTube URL' }),
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
                branding: fields.object({
                    primaryColorPreset: fields.select({
                        label: 'Primary Brand Color',
                        description: 'Choose a preset color or select "Custom" to enter a Hex code.',
                        options: [
                            { label: '🟠 Orange (Default)', value: 'orange' },
                            { label: '🔵 Blue', value: 'blue' },
                            { label: '🟢 Green', value: 'green' },
                            { label: '🟣 Purple', value: 'purple' },
                            { label: '🔴 Red', value: 'red' },
                            { label: '🎨 Custom Hex', value: 'custom' },
                        ],
                        defaultValue: 'orange',
                    }),
                    customPrimaryColor: fields.conditional(
                        fields.select({
                            label: 'Is Custom Color?',
                            options: [
                                { label: 'Yes', value: 'yes' },
                                { label: 'No', value: 'no' },
                            ],
                            defaultValue: 'no',
                        }),
                        {
                            yes: fields.text({ label: 'Custom Primary Color (Hex)', defaultValue: '#f97316' }),
                            no: fields.empty(),
                        }
                    ),
                    gradientPreset: fields.select({
                        label: 'Site Gradient Style',
                        options: [
                            { label: '🔥 Sunset (Orange/Red)', value: 'sunset' },
                            { label: '🌊 Ocean (Blue/Cyan)', value: 'ocean' },
                            { label: '🌲 Forest (Green/Emerald)', value: 'forest' },
                            { label: '🔮 Cosmic (Purple/Indigo)', value: 'cosmic' },
                            { label: '🎨 Custom Gradient', value: 'custom' },
                        ],
                        defaultValue: 'sunset',
                    }),
                    customGradient: fields.conditional(
                        fields.select({
                            label: 'Is Custom Gradient?',
                            options: [
                                { label: 'Yes', value: 'yes' },
                                { label: 'No', value: 'no' },
                            ],
                            defaultValue: 'no',
                        }),
                        {
                            yes: fields.object({
                                from: fields.text({ label: 'Gradient Start (Hex)', defaultValue: '#fb923c' }),
                                via: fields.text({ label: 'Gradient Middle (Hex)', defaultValue: '#f59e0b' }),
                                to: fields.text({ label: 'Gradient End (Hex)', defaultValue: '#dc2626' }),
                            }),
                            no: fields.empty(),
                        }
                    ),
                }, { label: 'Branding & Aesthetics' }),
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
        pages: collection({
            label: 'Pages',
            slugField: 'title',
            path: 'src/content/pages/*',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/pages',
                        publicPath: '/images/pages',
                    },
                }),
            },
        }),
    },
});
