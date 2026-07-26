import { close, open, read} from "fs";

export async function getFileContent(fileName: string): Promise<string | null> {
	await open(fileName, async (err, fd: number) => {
		if (fd === null || err !== null) {
			console.error(err);
			return null
		}
		await read(fd, (err, buffer_size: number, buffer) => {
			if (buffer_size === 0) {
				console.log("nothing to read")
				return null
			}
			if (err) {
				console.error(err);
			}
			console.log(buffer.toLocaleString())
			return buffer.toLocaleString();
		})
		return null;
		close(fd);
		
	});
}