import apolloDatasourceRest from "apollo-datasource-rest";
const { RESTDataSource } = apolloDatasourceRest;

class SpeakerAPI extends RESTDataSource {
	constructor(){
		super();
		this.baseURL = "http://localhost:3000/speakers";
	}

	async getSpeakerById(id){
		const data = await this.get(`/${id}`);
		return data;
	}

	async getSpeakers(){
		const data = await this.get("/");
		return data;
	}
}

export default SpeakerAPI;
