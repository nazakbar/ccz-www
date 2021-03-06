workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
	new RegExp('.*.js'),
	workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
	/\.(?:js|css)$/,
	workbox.strategies.staleWhileRevalidate({
		cacheName: 'static-resources'
	})
);

workbox.routing.registerRoute(
	/\.(?:png|gif|jpg|jpeg|svg)$/,
	workbox.strategies.cacheFirst({
		cacheName: 'images',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60
			})
		]
	}),
);

workbox.routing.registerRoute(
	/^https:\/\/fonts\.googleapis\.com/,
	workbox.strategies.staleWhileRevalidate({
		cacheName: 'google-fonts-stylesheets'
	})
);

workbox.routing.registerRoute(
	/^https:\/\/fonts\.gstatic\.com/,
	workbox.strategies.cacheFirst({
		cacheName: 'google-fonts-webfonts',
		plugins: [
			new workbox.cacheableResponse.Plugin({
				statuses: [0, 200]
			}),
			new workbox.expiration.Plugin({
				maxAgeSeconds: 60 * 60 * 24 * 365,
				maxEntries: 30
			})
		]
	})
);

workbox.googleAnalytics.initialize();