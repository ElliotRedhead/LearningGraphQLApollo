import apollo from "apollo-server";
import sessions from "./data/sessions.json";
const { ApolloServer, gql } = apollo;

const typeDefs = gql`
	type Query {
		sessions:[Session]
		}
	type Session {
		id: ID!,
		title: String!,
		description:String,
		startsAt:String,
		endsAt:String,
		room:String,
		day:String,
		format:String,
		track:String @deprecated(reason: "Too many sessions do not fit into a single track, migrating to tags-based system in the future."),
		level:String,
}`;

const resolvers = {
	Query: {
		sessions: () => sessions
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

server
	.listen({ port: process.env.PORT || 4000 })
	.then(({ url }) => {
		console.log(`GraphQL running at ${url}`);
	});
