import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AIGC-Yunzai',
			social: {
				github: 'https://github.com/AIGC-Yunzai',
			},
			sidebar: [
				// {
				// 	label: 'siliconflow插件',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example 11Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: 'SiliconFlow-插件',
					autogenerate: { directory: 'siliconflow' },
				},
			],
		}),
	],
});
