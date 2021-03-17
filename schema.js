import apollo from "apollo-server";
const { gql } = apollo;

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

export default typeDefs;