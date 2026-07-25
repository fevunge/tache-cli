import { z } from "zod/v4";

export const PrioritySchema = z.enum(["LOW", "NORMAL", "HIGH", "CRITICAL"]).default("NORMAL").optional();

export type PriorityType = z.infer<typeof PrioritySchema>;