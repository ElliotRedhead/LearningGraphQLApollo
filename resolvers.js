import Query from "./resolvers/query.js";
import Session from "./resolvers/session.js";
import Mutation from "./resolvers/mutation.js";

const resolvers = { Query, Session, Mutation, SessionOrError: {
	__resolveType(obj){
		if (obj.code){
			return "Error";
		}
		return "Session";
	}
} };

export default resolvers;
