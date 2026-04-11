import { z } from "zod/v4";

export const TaskSchema = z.object({
	ownerName: z.string().min(3).max(50).optional(),
	title: z.string().min(3).max(50),
	subject: z.string().min(3).max(100).optional(),
	description: z.array(z.string()),
	createAt: z.iso.datetime(),
	updateAt: z.iso.datetime().optional(),
});

export type TaskDto = z.infer<typeof TaskSchema>;
