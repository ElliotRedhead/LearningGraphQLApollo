import lodash from "lodash";
const { _ } = lodash;

const resolvers = {
	Query: {
		sessions: (parent, args, { dataSources }, info) => dataSources.sessionAPI.getSessions(args),
		sessionById: (parent, { id }, { dataSources }, info) => dataSources.sessionAPI.getSessionById(id),
		speakers: (parent, args, { dataSources }, info) => dataSources.speakerAPI.getSpeakers(args),
		speakerById: (parent, { id }, { dataSources }, info) => dataSources.speakerAPI.getSpeakerById(id)
	},
	Session: {
		async speakers(session, args, { dataSources }){
			const speakers = await dataSources.speakerAPI.getSpeakers();
			const returns = speakers.filter(speaker => _.filter(session.speakers, { id: speaker.id }).length > 0);
			return returns;
		}
	}
};

export default resolvers;
