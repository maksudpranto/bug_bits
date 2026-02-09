/**
 * Converts a Hex color string to an HSL string format
 * expected by Tailwind CSS variables (e.g., "24.6 95% 53.1%")
 */
export function hexToHsl(hex: string): string {
    // Remove the hash if it exists
    hex = hex.replace(/^#/, '');

    // Parse r, g, b values
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    // Convert to degrees and percentages
    h = Math.round(h * 360 * 10) / 10;
    s = Math.round(s * 100 * 10) / 10;
    l = Math.round(l * 100 * 10) / 10;

    return `${h} ${s}% ${l}%`;
}
