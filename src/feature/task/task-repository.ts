import { Task, TaskId } from "./task";
import { Either } from "fp-ts/Either";

export type TaskRepository = {
  findAll: () => Promise<Either<Error, Task[]>>;
  findById: (id: TaskId) => Promise<Either<Error, Task>>;
  create: (todo: Task) => Promise<Either<Error, Task>>;
  update: (todo: Task) => Promise<Either<Error, Task>>;
  delete: (id: TaskId) => Promise<Either<Error, Task>>;
};
