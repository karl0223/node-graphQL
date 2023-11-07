import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import db from "./_db.js";

// types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    authors() {
      return db.authors;
    },
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
  },
};

// server setup

const server = new ApolloServer({
  typeDefs, // schema, type of data
  resolvers, // how to fetch data
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log("🚀 Server ready at port: ", 4000);
