const resolvers = {
	Query: {
		sessions: (parent, args, { dataSources }, info) => dataSources.sessionAPI.getSessions(args),
		sessionById: (parent, { id }, { dataSources }, info) => dataSources.sessionAPI.getSessionById(id),
		speakers: (parent, args, { dataSources }, info) => dataSources.sessionAPI.getSpeakers(args),
		speakersById: (parent, { id }, { dataSources }, info) => dataSources.sessionAPI.getSpeakerById(id)
	}
};

export default resolvers;
