import apollo from "apollo-server";
const { ApolloServer } = apollo;
import SessionAPI from "./datasources/sessions.js";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";

const dataSources = () => ({
	sessionAPI: new SessionAPI()
});

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources,
	introspection: true,
	playground: true
});

server
	.listen({ port: process.env.PORT || 4000 })
	.then(({ url }) => {
		console.log(`GraphQL running at ${url}`);
	});
