import lodash from "lodash";
const { _ } = lodash;

const session = {
	async speakers(session, args, { dataSources }){
		const speakers = await dataSources.speakerAPI.getSpeakers();
		const returns = speakers.filter(speaker => _.filter(session.speakers, { id: speaker.id }).length > 0);
		return returns;
	}
};

export default session;
