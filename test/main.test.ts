import { test, expect, describe } from "@jest/globals";
import { cli } from "@src/presentation/cli/index";

describe("cli function", () => {
	test("cli function should display the ASCII head and help message", () => {
		expect(cli()).toBe(undefined);
	});
});


