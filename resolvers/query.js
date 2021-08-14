import lodash from "lodash";
const { _ } = lodash;

const query = {
	sessions: (parent, args, { dataSources }, info) => dataSources.sessionAPI.getSessions(args),
	sessionById: (parent, { id }, { dataSources }, info) => {
		try {
			return dataSources.sessionAPI.getSessionById(id);
		} catch (error) {
			return { code: "ERROR", message: "An error occurred", token: "1234qwerty" }; 
		}
	},
	speakers: (parent, args, { dataSources }, info) => dataSources.speakerAPI.getSpeakers(args),
	speakerById: (parent, { id }, { dataSources }, info) => dataSources.speakerAPI.getSpeakerById(id)
};

export default query;
