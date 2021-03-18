import lodash from "lodash";
const { _ } = lodash;

const query = {
	sessions: (parent, args, { dataSources }, info) => dataSources.sessionAPI.getSessions(args),
	sessionById: (parent, { id }, { dataSources }, info) => dataSources.sessionAPI.getSessionById(id),
	speakers: (parent, args, { dataSources }, info) => dataSources.speakerAPI.getSpeakers(args),
	speakerById: (parent, { id }, { dataSources }, info) => dataSources.speakerAPI.getSpeakerById(id)
};

export default query;
