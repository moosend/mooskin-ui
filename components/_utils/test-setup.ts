export {};

window.matchMedia =
	window.matchMedia ||
	(() => ({
		matches: false,
		addListener: () => undefined,
		removeListener: () => undefined,
	}));
