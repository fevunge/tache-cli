export const SetSignalHandler = (signal: NodeJS.Signals, handler: () => void) => {
	process.on(signal, () => {
		console.log(`Received ${signal}, exiting...`);
		if (handler)
			handler();
		process.exit(0);
	});
}