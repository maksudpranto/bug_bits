import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { hexToHsl } from '@/lib/color-utils';

const reader = createReader(process.cwd(), keystaticConfig);

const PRIMARY_PRESETS: Record<string, string> = {
    orange: '#f97316',
    blue: '#3b82f6',
    green: '#22c55e',
    purple: '#a855f7',
    red: '#ef4444',
};

const GRADIENT_PRESETS: Record<string, { from: string; via: string; to: string }> = {
    sunset: { from: '#fb923c', via: '#f59e0b', to: '#dc2626' },
    ocean: { from: '#0ea5e9', via: '#2563eb', to: '#1e40af' },
    forest: { from: '#10b981', via: '#059669', to: '#064e3b' },
    cosmic: { from: '#8b5cf6', via: '#6366f1', to: '#3730a3' },
};

export default async function ThemeInjector() {
    const settings = await reader.singletons.settings.read();
    const branding = settings?.branding;

    if (!branding) return null;

    // Resolve Primary Color
    let primaryHex = PRIMARY_PRESETS[branding.primaryColorPreset] || PRIMARY_PRESETS.orange;
    if (branding.primaryColorPreset === 'custom' && branding.customPrimaryColor.discriminant === 'yes') {
        primaryHex = branding.customPrimaryColor.value || primaryHex;
    }

    // Resolve Gradient
    let gradHex = GRADIENT_PRESETS[branding.gradientPreset] || GRADIENT_PRESETS.sunset;
    if (branding.gradientPreset === 'custom' && branding.customGradient.discriminant === 'yes') {
        gradHex = branding.customGradient.value || gradHex;
    }

    const primaryHsl = hexToHsl(primaryHex);
    const gradFromHsl = hexToHsl(gradHex.from);
    const gradViaHsl = hexToHsl(gradHex.via);
    const gradToHsl = hexToHsl(gradHex.to);

    return (
        <style dangerouslySetInnerHTML={{
            __html: `
                :root {
                    --primary: ${primaryHsl};
                    --ring: ${primaryHsl};
                    --gradient-from: ${gradFromHsl};
                    --gradient-via: ${gradViaHsl};
                    --gradient-to: ${gradToHsl};
                }
                .dark {
                    --primary: ${primaryHsl};
                    --ring: ${primaryHsl};
                    --gradient-from: ${gradFromHsl};
                    --gradient-via: ${gradViaHsl};
                    --gradient-to: ${gradToHsl};
                }

                /* Utility classes for dynamic gradients */
                .bg-dynamic-gradient {
                    background-image: linear-gradient(to right, hsl(var(--gradient-from)), hsl(var(--gradient-via)), hsl(var(--gradient-to)));
                }
                .text-dynamic-gradient {
                    background-image: linear-gradient(to right, hsl(var(--gradient-from)), hsl(var(--gradient-via)), hsl(var(--gradient-to)));
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
            `
        }} />
    );
}
