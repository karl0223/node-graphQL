import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// types
import { typeDefs } from "./schema.js";

// server setup

const server = new ApolloServer({
  typeDefs, // schema, type of data
  //resolvers,  // how to fetch data
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log("🚀 Server ready at port: ", 4000);
