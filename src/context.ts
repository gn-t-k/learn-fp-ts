import { TaskRepository } from "feature/task/task-repository";
import { taskRepository } from "libs/prisma/task-repository";

export type Context = {
  taskRepository: TaskRepository;
};

type CreateContext = () => Context;
export const createContext: CreateContext = () => ({
  taskRepository: taskRepository,
});
