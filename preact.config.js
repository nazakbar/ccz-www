import WorkboxPlugin from 'workbox-webpack-plugin';

export default config => {
	config.plugins.push(
		new WorkboxPlugin.InjectManifest({
			swSrc: './service-worker.js',
			swDest: './service-worker.js',
			include: [/\.html$/, /\.js$/, /\.svg$/, /\.css$/, /\.png$/, /\.ico$/]
		})
	);

	return config;
};