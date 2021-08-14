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
			room:Room,
			day:String,
			format:String,
			track:String
			level:String
		): [Session],
		sessionById(id:ID): SessionOrError
		speakers: [Speaker]
		speakerById(id:ID): Speaker
	}

	union SessionOrError = Session | Error
	type Error {
		code: String
		message: String
		token: String
	}

	enum Room {
		Europa
		Sol
		Saturn
	}

	type Mutation {
		toggleFavouriteSession(id: ID): Session
		addNewSession(session: SessionInput): Session
	}

	input SessionInput {
		"""
		Define session input, user cannot choose their own ID (as this should be auto-incremented) but can provide other attributes.
		"""
		title: String!,
		description:String,
		startsAt:String,
		endsAt:String,
		room:String,
		day:String,
		format:String,
		track:String @deprecated(reason: "Too many sessions do not fit into a single track, migrating to tags-based system in the future."),
		level:String,
		favourite: Boolean
	}

	type Speaker {
		id:ID!
		bio: String
		name: String
		sessions: [Session]
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
		favourite: Boolean,
		speakers: [Speaker]
}`;

export default typeDefs;
