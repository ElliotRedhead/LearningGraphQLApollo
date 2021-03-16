import sessions from "../data/sessions.json";
import apolloDatasource from "apollo-datasource";
const { DataSource } = apolloDatasource;import lodash from "lodash";
const { _ } = lodash;

class SessionAPI extends DataSource{
	constructor (){
		super();
	}

	initialize (config){
		
	}

	getSessions (){
		return sessions;
	}

	getSessionById (id) {
		const session = _.filter(sessions, { id: parseInt(id) });
		return session[0];
	}
}

export default SessionAPI;
