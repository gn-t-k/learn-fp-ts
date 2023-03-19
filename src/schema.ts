import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    tasks: [Task!]!
    task(id: ID!): Task!
  }

  type Mutation {
    createTask(title: String!): Task!
    completeTask(id: ID!): Task!
  }

  type Task {
    id: ID!
    title: String!
    completed: Boolean!
    createdAt: String!
  }
`;
