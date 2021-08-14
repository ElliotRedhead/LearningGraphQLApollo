import apollo, { ApolloError } from "apollo-server";
const { ApolloServer } = apollo;
import SessionAPI from "./datasources/sessions.js";
import SpeakerAPI from "./datasources/speakers.js";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";

const dataSources = () => ({
	sessionAPI: new SessionAPI(),
	speakerAPI: new SpeakerAPI()
});

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources,
	introspection: true,
	playground: true,
	// hide stack trace on errors
	debug: false,
	formatError: err => {
		if (err.extensions.code === "INTERNAL_SERVER_ERROR"){
			return new ApolloError("Unable to connect to the server.", "ERROR", { token: "uniquetoken" });
		}
		return err;
	}
});

server
	.listen({ port: process.env.PORT || 4000 })
	.then(({ url }) => {
		console.log(`GraphQL running at ${url}`);
	});
