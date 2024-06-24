import { defineConfig } from "unocss";
import { presetWind } from "unocss";

export default defineConfig({
	presets: [presetWind()],
	theme: {
		fontFamily: {
			sans: "Segoe UI, system-ui, sans-serif",
		},
	},
	preflights: [
		{
			getCSS() {
				return `
						@font-face {
							font-family: 'Segoe UI';
							src: url('/assets/SegoeUI.woff2') format('woff2-variations');
							font-weight: 100 900;
							font-style: normal;
						}
					`
			},
		},
	]
});