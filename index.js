import {GraphQLServer} from "graphql-yoga"//GraphQLServer ->로 받는게 가장 중요하다.
import resolvers from "./graphql/resolvers"
const server = new GraphQLServer({typeDefs:"graphql/schema.graphql",resolvers});//{} 안에 config들이 들어가면 댐
server.start(()=>console.log("hi graphqlserver  start"))