// utils/prefix.js

const isProd = process.env.NODE_ENV === 'production';

/**
 * Appends the GitHub Pages repository subfolder path if in production.
 * Usage: src={`${prefix}/images/hero.jpg`}
 */
export const prefix = isProd ? '/lalunawatersport' : '';