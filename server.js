import apollo from "apollo-server";
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
		track:String,
		level:String,
}`;

const server = new ApolloServer({ typeDefs });

server
	.listen({ port: process.env.PORT || 4000 })
	.then(({ url }) => {
		console.log(`GraphQL running at ${url}`);
	});
