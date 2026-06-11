import z from "zod/v4";

export const EmailSchema = z.email({
	message: "Invalid email address",
});

export type EmailType = z.infer<typeof EmailSchema>;