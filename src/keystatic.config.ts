import { config, fields, singleton, collection } from '@keystatic/core';

const buttonSchema = (label: string, defaultBg = '#f97316', defaultHover = '#ea580c', defaultText = '#ffffff') => fields.object({
    text: fields.text({ label: `${label} Text` }),
    link: fields.text({ label: `${label} Link` }),
    background: fields.text({ label: `${label} Background (Hex)`, defaultValue: defaultBg }),
    hover: fields.text({ label: `${label} Hover (Hex)`, defaultValue: defaultHover }),
    text_color: fields.text({ label: `${label} Text Color (Hex)`, defaultValue: defaultText }),
}, { label: `${label} Settings` });

const iconOptions = [
    { label: 'Globe', value: 'Globe' },
    { label: 'Zap', value: 'Zap' },
    { label: 'Cloud', value: 'Cloud' },
    { label: 'Code', value: 'Code' },
    { label: 'Server', value: 'Server' },
    { label: 'Shield', value: 'Shield' },
    { label: 'Database', value: 'Database' },
    { label: 'Clone', value: 'Copy' },
    { label: 'Terminal', value: 'Terminal' },
    { label: 'Smartphone', value: 'Smartphone' },
    { label: 'Cpu', value: 'Cpu' },
    { label: 'Target', value: 'Target' },
    { label: 'Users', value: 'Users' },
];

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
                    subCaption: fields.text({ label: 'Technical Sub-caption (Interface Blueprint)', defaultValue: 'Data visualization // secure_link_active' }),
                    scrollText: fields.text({ label: 'Scroll Indicator Text', defaultValue: 'Scroll' }),
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
                    badge: fields.text({ label: 'Section Badge', defaultValue: 'Core Capabilities' }),
                    title: fields.text({ label: 'Section Title', defaultValue: 'Our Core Expertise' }),
                    subtitle: fields.text({ label: 'Section Subtitle', multiline: true, defaultValue: 'We leverage the latest technologies to build robust, scalable, and high-performance digital solutions.' }),
                    items: fields.array(
                        fields.object({
                            title: fields.text({ label: 'Feature Title' }),
                            description: fields.text({ label: 'Feature Description' }),
                            icon: fields.select({
                                label: 'Icon',
                                options: iconOptions,
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
                    phaseBadge: fields.text({ label: 'Phase Badge', defaultValue: 'Phase_01: Advantage_Matrix' }),
                    titlePrefix: fields.text({ label: 'Title Prefix', defaultValue: 'Why Choose' }),
                    titleHighlight: fields.text({ label: 'Title Highlight', defaultValue: 'Bug Bits' }),
                    description: fields.text({ label: 'Section Description', multiline: true, defaultValue: 'We deliver more than just code. We deliver value, reliability, and innovation.' }),
                    items: fields.array(
                        fields.object({
                            title: fields.text({ label: 'Title' }),
                            description: fields.text({ label: 'Description', multiline: true }),
                            icon: fields.select({
                                label: 'Icon',
                                options: iconOptions,
                                defaultValue: 'Target',
                            }),
                        }),
                        {
                            label: 'Items',
                            itemLabel: props => props.fields.title.value || 'Reason',
                        }
                    ),
                }, { label: 'Advantages Sub-Section' }),
                process: fields.object({
                    phaseBadge: fields.text({ label: 'Phase Badge', defaultValue: 'Phase_02: Execution_Protocol' }),
                    titlePrefix: fields.text({ label: 'Title Prefix', defaultValue: 'Our' }),
                    titleHighlight: fields.text({ label: 'Title Highlight', defaultValue: 'Process' }),
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
                }, { label: 'Process Sub-Section' }),
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
                testimonialsSection: fields.object({
                    badge: fields.text({ label: 'Section Badge', defaultValue: 'Client Feedback // Decrypted' }),
                    title: fields.text({ label: 'Section Title', defaultValue: 'Trusted by Global Innovators' }),
                }, { label: 'Testimonials Section Headers' }),
                aboutSection: fields.object({
                    badge: fields.text({ label: 'Badge Text', defaultValue: 'Our DNA // Mission' }),
                    title: fields.text({ label: 'Title' }),
                    content: fields.text({ label: 'Content', multiline: true }),
                    quote: fields.text({ label: 'Highlight Quote', multiline: true }),
                    image: fields.image({
                        label: 'About Image',
                        directory: 'public/images/about',
                        publicPath: '/images/about',
                    }),
                    buttonText: fields.text({ label: 'Button Text', defaultValue: 'Initialize Full Brief' }),
                }, { label: 'About Us Section' }),
                cta: fields.object({
                    badge: fields.text({ label: 'Badge', defaultValue: 'Ready to Scale // Next Gen Tech' }),
                    title: fields.text({ label: 'Title' }),
                    subtitle: fields.text({ label: 'Subtitle', multiline: true }),
                    button: buttonSchema('Button'),
                }, { label: 'Call to Action Section 1 (Lead Generation)' }),
                ctaSecondary: fields.object({
                    badge: fields.text({ label: 'Badge', defaultValue: 'Ready to Scale // Next Gen Tech' }),
                    title: fields.text({ label: 'Title' }),
                    subtitle: fields.text({ label: 'Subtitle', multiline: true }),
                    button: buttonSchema('Button'),
                }, { label: 'Call to Action Section 2 (Middle Page)' }),
                contactSection: fields.object({
                    title: fields.text({ label: 'Title' }),
                    description: fields.text({ label: 'Description', multiline: true }),
                    bannerTitle: fields.text({ label: 'Banner Card Title', defaultValue: 'Start a Conversation' }),
                    bannerDescription: fields.text({ label: 'Banner Card Description', multiline: true, defaultValue: 'Ready to bring your digital vision to life? Let\'s talk about your next project.' }),
                    bannerButtonText: fields.text({ label: 'Banner Button Text', defaultValue: 'Send Message' }),
                }, { label: 'Contact Section (Homepage)' }),
                footer: fields.object({
                    socialTitle: fields.text({ label: 'Social Channels Header', defaultValue: 'Social Channels' }),
                    sitemapTitle: fields.text({ label: 'Sitemap Header', defaultValue: 'Sitemap' }),
                    legalTitle: fields.text({ label: 'Legal Header', defaultValue: 'Legal Signals' }),
                    companyName: fields.text({ label: 'Footer Company Name', defaultValue: 'Bug Bits' }),
                    tagline: fields.text({ label: 'Footer Tagline', defaultValue: 'Transforming ideas into powerful software solutions for the modern web.' }),
                    copyrightSuffix: fields.text({ label: 'Copyright Suffix', defaultValue: 'Executed with precision.' }),
                    latitude: fields.text({ label: 'Latitude String', defaultValue: 'LAT: 23.8103° N' }),
                    longitude: fields.text({ label: 'Longitude String', defaultValue: 'LON: 90.4125° E' }),
                    statusText: fields.text({ label: 'System Status Text', defaultValue: 'SYSTEMS_OPERATIONAL' }),
                }, { label: 'Footer Customization' }),
            },
        }),
        about: singleton({
            label: 'About Page',
            path: 'src/content/about',
            format: { data: 'json' },
            schema: {
                badge: fields.text({ label: 'Page Badge', defaultValue: 'Intelligence Profile // v2.0' }),
                title: fields.text({ label: 'Page Title', defaultValue: 'Our Mission & Story' }),
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
        servicesPage: singleton({
            label: 'Services Page',
            path: 'src/content/services-page',
            format: { data: 'json' },
            schema: {
                badge: fields.text({ label: 'Page Badge', defaultValue: 'System Capabilities // Archive' }),
                titlePrefix: fields.text({ label: 'Title Prefix', defaultValue: 'Our' }),
                titleHighlight: fields.text({ label: 'Title Highlight', defaultValue: 'Expertise' }),
                description: fields.text({ label: 'Page Description', multiline: true, defaultValue: 'Explore our suite of high-performance digital solutions designed to propel your business into the future.' }),
                emptyStateText: fields.text({ label: 'Empty State Text', defaultValue: 'Void_Registry: No active services protocols found' }),
                cardButtonText: fields.text({ label: 'Service Card Button Text', defaultValue: 'Execute Brief' }),
            },
        }),
        contactPage: singleton({
            label: 'Contact Page',
            path: 'src/content/contact-page',
            format: { data: 'json' },
            schema: {
                badge: fields.text({ label: 'Page Badge', defaultValue: 'Communication Protocol // v1.2' }),
                title: fields.text({ label: 'Page Title', defaultValue: 'Establish Link' }),
                description: fields.text({ label: 'Page Description', multiline: true, defaultValue: 'Initiate a direct connection with our technical units. We\'re ready to architect your next digital leap.' }),
                availabilityTitle: fields.text({ label: 'Availability Card Title', defaultValue: 'Available for Deployments' }),
                availabilityDescription: fields.text({ label: 'Availability Card Description', multiline: true, defaultValue: 'Our engineering teams are distributed across multiple timezones to ensure maximum development velocity and robust support coverage.' }),
                addressLabel: fields.text({ label: 'Address Label', defaultValue: 'Visit Terminal' }),
                addressStatus: fields.text({ label: 'Address Status Tag', defaultValue: 'Global Headquarters' }),
                emailLabel: fields.text({ label: 'Email Label', defaultValue: 'Sync via Email' }),
                emailStatus: fields.text({ label: 'Email Status Tag', defaultValue: 'Direct Uplink' }),
                phoneLabel: fields.text({ label: 'Phone Label', defaultValue: 'Audio Transmit' }),
                phoneStatus: fields.text({ label: 'Phone Status Tag', defaultValue: 'Emergency Line' }),
                formTitle: fields.text({ label: 'Form Title', defaultValue: 'Transmit Message' }),
                formDescription: fields.text({ label: 'Form Description', multiline: true, defaultValue: 'Input your parameters below to initialize communication.' }),
                formSourceFirstLabel: fields.text({ label: 'First Name Field Label', defaultValue: 'Source_Name[0]' }),
                formSourceLastLabel: fields.text({ label: 'Last Name Field Label', defaultValue: 'Source_Name[1]' }),
                formEmailLabel: fields.text({ label: 'Email Field Label', defaultValue: 'Sync_Email' }),
                formPayloadLabel: fields.text({ label: 'Message Field Label', defaultValue: 'Payload_Data' }),
                submitButtonText: fields.text({ label: 'Submit Button Text', defaultValue: 'Initialize Uplink' }),
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
                apiIcon: fields.select({
                    label: 'Icon',
                    options: iconOptions,
                    defaultValue: 'Globe',
                }),
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
                badge: fields.text({ label: 'Page Badge', defaultValue: 'Document // Verified' }),
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
