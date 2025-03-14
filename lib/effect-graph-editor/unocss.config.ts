import { defineConfig, presetWind3 } from 'unocss';
import { presetRemToPx } from '@unocss/preset-rem-to-px';

export default defineConfig({
  presets: [presetWind3(), presetRemToPx({ baseFontSize: 4 })],
  rules: [['flex-center', { justifyContent: 'center', alignItems: 'center' }]],
});
