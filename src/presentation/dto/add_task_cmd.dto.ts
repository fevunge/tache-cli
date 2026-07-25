import { PrioritySchema } from "@src/domain/types/priority.type";
import { z } from "zod/v4"

export const AddTaskCmmdSchema = z.object({
  title: z.string().nonempty().optional(),
  note: z.string().nonempty().optional(),
  done: z.boolean().default(false),
  file: z.string().nonempty().optional(),
  tags: z.string().optional(),
  priority: PrioritySchema
});

export type AddTaskCmdDto = z.infer<typeof AddTaskCmmdSchema>;