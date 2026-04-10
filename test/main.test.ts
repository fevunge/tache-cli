import { greet } from "../src/main";
import { test, expect, describe } from "@jest/globals";

describe("greet function", () => {
	test("greet function should return a greeting message", () => {
		const name = "fevunge";
		const expectedGreeting = `Hello, ${name}!`;
		expect(greet(name)).toBe(expectedGreeting);
	});
});


