import { TaskRepository } from "feature/task/task-repository";
import { pipe } from "fp-ts/lib/function";
import * as E from "fp-ts/Either";
import * as TE from "fp-ts/TaskEither";
import prisma from "./client";
import { Task as PrismaTask } from "@prisma/client";
import { Task, createTask } from "feature/task/task";
import { z } from "zod";

export const taskRepository: TaskRepository = {
  findAll: () => {},
};

type TaskDBToDomain = (prismaTask: PrismaTask) => E.Either<z.ZodError, Task>;
const taskDBToDomain: TaskDBToDomain = (prismaTask) => {
  return createTask(prismaTask);
};
