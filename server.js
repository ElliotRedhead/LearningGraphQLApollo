import apollo from "apollo-server";
const { ApolloServer, gql } = apollo;
import SessionAPI from "./datasources/sessions.js";

const typeDefs = gql`
	type Query {
		sessions(
			id: ID,
			title: String,
			description:String,
			startsAt:String,
			endsAt:String,
			room:String,
			day:String,
			format:String,
			track:String
			level:String
		): [Session],
		sessionById(id:ID): Session
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

const dataSources = () => ({
	sessionAPI: new SessionAPI()
});

const resolvers = {
	Query: {
		sessions: (parent, args, { dataSources }, info) => dataSources.sessionAPI.getSessions(args),
		sessionById: (parent, { id }, { dataSources }, info) => dataSources.sessionAPI.getSessionById(id)
	}
};

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server
	.listen({ port: process.env.PORT || 4000 })
	.then(({ url }) => {
		console.log(`GraphQL running at ${url}`);
	});
