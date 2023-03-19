import { z } from "zod";
import { Either, left, right } from "fp-ts/Either";

const taskIdSchema = z.number().int().brand<"TaskId">();
export type TaskId = z.infer<typeof taskIdSchema>;
export const createTaskId = (id: unknown): Either<z.ZodError, TaskId> => {
  const result = taskIdSchema.safeParse(id);

  return result.success ? right(result.data) : left(result.error);
};

const taskSchema = z.object({
  id: taskIdSchema,
  title: z.string().min(1),
  completed: z.boolean(),
  createdAt: z.date(),
});
export type Task = z.infer<typeof taskSchema>;
export const createTask = (task: unknown): Either<z.ZodError, Task> => {
  const result = taskSchema.safeParse(task);

  return result.success ? right(result.data) : left(result.error);
};
