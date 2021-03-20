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
		sessionById(id:ID): Session
		speakers: [Speaker]
		speakerById(id:ID): Speaker
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
