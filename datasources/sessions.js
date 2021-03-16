import sessions from "../data/sessions.json";
import apolloDatasource from "apollo-datasource";
const { DataSource } = apolloDatasource;

class SessionAPI extends DataSource{
	constructor (){
		super();
	}

	initialize (config){
		
	}

	getSessions (){
		return sessions;
	}
}

// Module.exports = SessionAPI;

export default SessionAPI;
